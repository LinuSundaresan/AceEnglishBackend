const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');
const Attempt = require('../models/Attempt');
const Question = require('../models/Question');
const fs = require('fs');
const router = express.Router();

let storage;
if (process.env.S3_ENDPOINT && process.env.S3_ACCESS_KEY) {
  const s3 = new S3Client({
    region: process.env.S3_REGION || 'auto',
    endpoint: process.env.S3_ENDPOINT,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY,
    },
    forcePathStyle: true,
  });

  storage = multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME || 'ptetool',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read', // making it readable directly if supported
    key: function (req, file, cb) {
      cb(null, `attempts/${Date.now()}_${file.originalname}`);
    }
  });
} else {
  // Ensure local uploads directory exists
  storage = multer.diskStorage({
    destination: function (req, file, cb) {
      let folder = 'uploads/attempts/';
      if (req.body.questionType === 'Read Aloud') {
        folder += 'read_aloud/';
      } else if (req.body.questionType === 'Repeat Sentence') {
        folder += 'repeat_sentence/';
      }
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
      }
      cb(null, folder);
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    }
  });
}

const upload = multer({ storage: storage });

// Get attempts for a user
router.get('/user/:userId', async (req, res) => {
  try {
    const attempts = await Attempt.find({ user: req.params.userId }).populate('question');
    res.json(attempts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get attempts for a specific user and specific question
router.get('/user/:userId/question/:questionId', async (req, res) => {
  try {
    const attempts = await Attempt.find({ 
      user: req.params.userId,
      question: req.params.questionId 
    }).sort({ createdAt: -1 });
    res.json(attempts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Save a new attempt with optional audio
router.post('/', upload.single('audio'), async (req, res) => {
  try {
    const data = req.body;
    let details = data.details;
    if (typeof details === 'string') {
      try {
        details = JSON.parse(details);
      } catch(e) {
         console.error("Failed to parse details JSON", e);
      }
    }
    const attemptData = {
      user: data.user,
      question: data.question,
      score: data.score,
      details: details,
    };
    
    if (req.file) {
      // If S3, req.file.location contains URL. If local, construct a local URL.
      const baseUrl = process.env.LIVE_URL || `http://localhost:${process.env.PORT || 5000}`;
      attemptData.audioUrl = req.file.location || `${baseUrl}/${req.file.destination}${req.file.filename}`;
    }

    const attempt = await Attempt.create(attemptData);
    res.status(201).json(attempt);
  } catch (error) {
    console.error("Error saving attempt:", error);
    res.status(400).json({ message: 'Invalid data', error });
  }
});

// Analytics endpoint for a specific user (AlfaPTE & APEUni Practice Progress)
router.get('/analytics/user/:userId', async (req, res) => {
  try {
    const [attempts, allQuestions] = await Promise.all([
      Attempt.find({ user: req.params.userId }).populate('question'),
      Question.find({}, '_id moduleType questionType title').lean()
    ]);
    
    // Base analytics (backward compatible with mobile and existing views)
    const analytics = {
      speaking: { totalScore: 0, count: 0, average: 0 },
      writing: { totalScore: 0, count: 0, average: 0 },
      reading: { totalScore: 0, count: 0, average: 0 },
      listening: { totalScore: 0, count: 0, average: 0 },
      history: []
    };

    const practicedQuestionIds = new Set();
    const attemptsByQuestionType = {};
    let target65Count = 0;
    let target79Count = 0;
    let todayAttemptsCount = 0;
    const todayDateString = new Date().toDateString();
    const datesWithAttempts = new Set();

    attempts.forEach(attempt => {
      if (attempt.question && attempt.question.moduleType) {
        const module = attempt.question.moduleType;
        const qId = attempt.question._id ? attempt.question._id.toString() : null;
        if (qId) practicedQuestionIds.add(qId);

        if (analytics[module]) {
          analytics[module].totalScore += (attempt.score || 0);
          analytics[module].count += 1;
        }

        const qType = attempt.question.questionType;
        if (qType) {
          if (!attemptsByQuestionType[qType]) {
            attemptsByQuestionType[qType] = { scores: [], uniquePracticed: new Set() };
          }
          attemptsByQuestionType[qType].scores.push(attempt.score || 0);
          if (qId) attemptsByQuestionType[qType].uniquePracticed.add(qId);
        }

        if ((attempt.score || 0) >= 65) target65Count++;
        if ((attempt.score || 0) >= 79) target79Count++;

        const attemptDate = new Date(attempt.createdAt);
        if (attemptDate.toDateString() === todayDateString) {
          todayAttemptsCount++;
        }
        datesWithAttempts.add(attemptDate.toISOString().split('T')[0]);
        
        // Add to history
        analytics.history.push({
          date: attempt.createdAt,
          score: attempt.score,
          module: module,
          questionType: attempt.question.questionType
        });
      }
    });

    // Calculate averages
    ['speaking', 'writing', 'reading', 'listening'].forEach(mod => {
      if (analytics[mod].count > 0) {
        analytics[mod].average = Math.round(analytics[mod].totalScore / analytics[mod].count);
      }
    });

    // Sort history by date
    analytics.history.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Calculate streak
    let streak = 0;
    let checkDate = new Date();
    if (!datesWithAttempts.has(checkDate.toISOString().split('T')[0])) {
      checkDate.setDate(checkDate.getDate() - 1);
    }
    while (datesWithAttempts.has(checkDate.toISOString().split('T')[0])) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    }

    // Module progress bank (AlfaPTE & APEUni module progress)
    const moduleBank = {
      speaking: { total: 0, practiced: 0, unpracticed: 0, completionRate: 0, averageScore: analytics.speaking.average },
      writing: { total: 0, practiced: 0, unpracticed: 0, completionRate: 0, averageScore: analytics.writing.average },
      reading: { total: 0, practiced: 0, unpracticed: 0, completionRate: 0, averageScore: analytics.reading.average },
      listening: { total: 0, practiced: 0, unpracticed: 0, completionRate: 0, averageScore: analytics.listening.average },
    };

    const typeBankMap = {};

    allQuestions.forEach(q => {
      const mod = q.moduleType;
      const qType = q.questionType;
      const qId = q._id.toString();
      const isPracticed = practicedQuestionIds.has(qId);

      if (moduleBank[mod]) {
        moduleBank[mod].total++;
        if (isPracticed) moduleBank[mod].practiced++;
      }

      if (qType) {
        if (!typeBankMap[qType]) {
          typeBankMap[qType] = {
            questionType: qType,
            moduleType: mod,
            total: 0,
            practiced: 0
          };
        }
        typeBankMap[qType].total++;
        if (isPracticed) {
          typeBankMap[qType].practiced++;
        }
      }
    });

    ['speaking', 'writing', 'reading', 'listening'].forEach(mod => {
      const m = moduleBank[mod];
      m.unpracticed = Math.max(0, m.total - m.practiced);
      m.completionRate = m.total > 0 ? Math.round((m.practiced / m.total) * 100) : 0;
    });

    const questionTypesProgress = Object.values(typeBankMap).map(t => {
      const stats = attemptsByQuestionType[t.questionType];
      const avg = stats && stats.scores.length > 0 
        ? Math.round(stats.scores.reduce((a, b) => a + b, 0) / stats.scores.length)
        : null;
      return {
        ...t,
        unpracticed: Math.max(0, t.total - t.practiced),
        completionRate: t.total > 0 ? Math.round((t.practiced / t.total) * 100) : 0,
        averageScore: avg,
        attemptsCount: stats ? stats.scores.length : 0
      };
    });

    const totalQuestions = allQuestions.length;
    const totalPracticed = practicedQuestionIds.size;
    const totalUnpracticed = Math.max(0, totalQuestions - totalPracticed);
    const overallCompletionRate = totalQuestions > 0 ? Math.round((totalPracticed / totalQuestions) * 100) : 0;
    const totalAttemptsCount = attempts.length;

    // Attach AlfaPTE & APEUni progress payload
    analytics.progress = {
      overall: {
        totalQuestions,
        practicedQuestions: totalPracticed,
        unpracticedQuestions: totalUnpracticed,
        completionRate: overallCompletionRate,
        totalAttempts: totalAttemptsCount,
      },
      byModule: moduleBank,
      byQuestionType: questionTypesProgress,
      dailyGoal: {
        todayAttempts: todayAttemptsCount,
        dailyTarget: 15,
        streakDays: streak,
        targetAchieved: todayAttemptsCount >= 15,
      },
      readiness: {
        totalEvaluated: totalAttemptsCount,
        target65Rate: totalAttemptsCount > 0 ? Math.round((target65Count / totalAttemptsCount) * 100) : 0,
        target79Rate: totalAttemptsCount > 0 ? Math.round((target79Count / totalAttemptsCount) * 100) : 0,
        target65Count,
        target79Count,
      }
    };

    res.json(analytics);
  } catch (error) {
    console.error("Analytics error:", error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

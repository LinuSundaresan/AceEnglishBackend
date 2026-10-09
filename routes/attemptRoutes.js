const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');
const Attempt = require('../models/Attempt');
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
      attemptData.audioUrl = req.file.location || `http://localhost:${process.env.PORT || 5000}/${req.file.destination}${req.file.filename}`;
    }

    const attempt = await Attempt.create(attemptData);
    res.status(201).json(attempt);
  } catch (error) {
    console.error("Error saving attempt:", error);
    res.status(400).json({ message: 'Invalid data', error });
  }
});

// Analytics endpoint for a specific user
router.get('/analytics/user/:userId', async (req, res) => {
  try {
    const attempts = await Attempt.find({ user: req.params.userId }).populate('question');
    
    // Calculate progress for each module
    const analytics = {
      speaking: { totalScore: 0, count: 0, average: 0 },
      writing: { totalScore: 0, count: 0, average: 0 },
      reading: { totalScore: 0, count: 0, average: 0 },
      listening: { totalScore: 0, count: 0, average: 0 },
      history: [] // For line chart (score over time)
    };

    attempts.forEach(attempt => {
      if (attempt.question && attempt.question.moduleType) {
        const module = attempt.question.moduleType;
        if (analytics[module]) {
          analytics[module].totalScore += attempt.score;
          analytics[module].count += 1;
        }
        
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

    res.json(analytics);
  } catch (error) {
    console.error("Analytics error:", error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

const express = require('express');
const multer = require('multer');
const fs = require('fs');
const Question = require('../models/Question');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = 'uploads/questions/';
    if (req.body.questionType === 'Repeat Sentence') {
      folder += 'repeat_sentence/';
    } else if (req.body.questionType === 'Describe Image') {
      folder += 'describe_image/';
    } else if (req.body.questionType === 'Summarize Spoken Text') {
      folder += 'summarize_spoken_text/';
    } else if (req.body.questionType === 'Write From Dictation') {
      folder += 'write_from_dictation/';
    } else if (req.body.moduleType === 'listening' || (req.body.questionType && req.body.questionType.toLowerCase().includes('multiple choice'))) {
      folder += 'listening/';
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
const upload = multer({ storage: storage });

// Helper function to safely parse nested fields
const sanitizeQuestionData = (data) => {
  const result = { ...data };

  // Parse blanks if passed as JSON string
  if (result.blanks && typeof result.blanks === 'string') {
    try {
      result.blanks = JSON.parse(result.blanks);
    } catch (e) {
      console.warn('Failed to parse blanks JSON:', e);
    }
  }

  // Parse distractors if passed as JSON string or comma-separated
  if (result.distractors && typeof result.distractors === 'string') {
    try {
      result.distractors = JSON.parse(result.distractors);
    } catch (e) {
      result.distractors = result.distractors.split(',').map(d => d.trim()).filter(Boolean);
    }
  }

  // Parse paragraphs if passed as JSON string
  if (result.paragraphs && typeof result.paragraphs === 'string') {
    try {
      result.paragraphs = JSON.parse(result.paragraphs);
    } catch (e) {
      console.warn('Failed to parse paragraphs JSON:', e);
    }
  }

  // Parse correctOrder if passed as JSON string or comma-separated
  if (result.correctOrder && typeof result.correctOrder === 'string') {
    try {
      result.correctOrder = JSON.parse(result.correctOrder);
    } catch (e) {
      result.correctOrder = result.correctOrder.split(',').map(s => s.trim()).filter(Boolean);
    }
  }

  // Parse options if passed as JSON string or comma-separated
  if (result.options && typeof result.options === 'string') {
    try {
      result.options = JSON.parse(result.options);
    } catch (e) {
      result.options = result.options.split(',').map(o => o.trim()).filter(Boolean);
    }
  }

  // Parse expectedAnswers if passed as JSON string or comma-separated
  if (result.expectedAnswers && typeof result.expectedAnswers === 'string') {
    try {
      result.expectedAnswers = JSON.parse(result.expectedAnswers);
    } catch (e) {
      result.expectedAnswers = result.expectedAnswers.split(',').map(a => a.trim()).filter(Boolean);
    }
  }

  // Parse keywords if sent as comma-separated string
  if (result.keywords && typeof result.keywords === 'string') {
    result.keywords = result.keywords.split(',').map(k => k.trim()).filter(Boolean);
  }

  // Parse incorrectWords if passed as JSON string
  if (result.incorrectWords && typeof result.incorrectWords === 'string') {
    try {
      result.incorrectWords = JSON.parse(result.incorrectWords);
    } catch (e) {
      console.warn('Failed to parse incorrectWords JSON:', e);
    }
  }

  return result;
};

// Get all questions with optional filters (moduleType, questionType, search)
router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.moduleType) {
      filter.moduleType = req.query.moduleType;
    }
    if (req.query.questionType) {
      filter.questionType = req.query.questionType;
    }
    if (req.query.search) {
      const searchRegex = new RegExp(req.query.search, 'i');
      filter.$or = [
        { content: searchRegex },
        { title: searchRegex },
        { questionType: searchRegex }
      ];
    }

    const questions = await Question.find(filter).sort({ createdAt: -1 });
    res.json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get single question by ID
router.get('/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    console.error('Error fetching question:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a question
router.post('/', upload.fields([{ name: 'audio', maxCount: 1 }, { name: 'image', maxCount: 1 }]), async (req, res) => {
  try {
    let data = sanitizeQuestionData(req.body);

    if (req.files) {
      if (req.files.audio) {
        const file = req.files.audio[0];
        data.audioUrl = `http://localhost:${process.env.PORT || 5000}/${file.destination}${file.filename}`;
      }
      if (req.files.image) {
        const file = req.files.image[0];
        data.imageUrl = `http://localhost:${process.env.PORT || 5000}/${file.destination}${file.filename}`;
      }
    }

    const question = await Question.create(data);
    res.status(201).json(question);
  } catch (error) {
    console.error('Error creating question:', error);
    res.status(400).json({ message: 'Invalid data', error });
  }
});

// Update an existing question
router.put('/:id', upload.fields([{ name: 'audio', maxCount: 1 }, { name: 'image', maxCount: 1 }]), async (req, res) => {
  try {
    let data = sanitizeQuestionData(req.body);

    if (req.files) {
      if (req.files.audio) {
        const file = req.files.audio[0];
        data.audioUrl = `http://localhost:${process.env.PORT || 5000}/${file.destination}${file.filename}`;
      }
      if (req.files.image) {
        const file = req.files.image[0];
        data.imageUrl = `http://localhost:${process.env.PORT || 5000}/${file.destination}${file.filename}`;
      }
    }

    const question = await Question.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true });
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    console.error('Error updating question:', error);
    res.status(400).json({ message: 'Invalid data', error });
  }
});

// Delete a question
router.delete('/:id', async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (question) {
      res.json({ message: 'Question removed' });
    } else {
      res.status(404).json({ message: 'Question not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

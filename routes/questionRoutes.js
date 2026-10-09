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

// Get all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find({}).sort({ createdAt: -1 });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a question
router.post('/', upload.fields([{ name: 'audio', maxCount: 1 }, { name: 'image', maxCount: 1 }]), async (req, res) => {
  try {
    const data = req.body;
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
    
    // Parse keywords if sent as comma-separated string
    if (data.keywords && typeof data.keywords === 'string') {
      data.keywords = data.keywords.split(',').map(k => k.trim()).filter(k => k);
    }

    const question = await Question.create(data);
    res.status(201).json(question);
  } catch (error) {
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

const mongoose = require('mongoose');

const AttemptSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  audioUrl: {
    type: String, // To store S3 URL or any audio URL
  },
  details: {
    type: Object // can store pronunciationScore, fluencyScore, matches, etc.
  }
}, { timestamps: true });

module.exports = mongoose.model('Attempt', AttemptSchema);

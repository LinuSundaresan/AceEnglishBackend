const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  moduleType: { 
    type: String, 
    required: true,
    enum: ['speaking', 'writing', 'reading', 'listening']
  },
  questionType: { type: String, required: true }, // e.g., 'Read Aloud', 'Repeat Sentence', 'Essay'
  content: { type: String, required: true }, // The actual text/question
  expectedAnswer: { type: String }, // For scoring reference
  audioUrl: { type: String }, // For listening or repeat sentence
  imageUrl: { type: String }, // For describe image
  keywords: [{ type: String }], // For describe image content evaluation
  options: [{ type: String }] // For multiple choice questions
}, { timestamps: true });

module.exports = mongoose.model('Question', QuestionSchema);

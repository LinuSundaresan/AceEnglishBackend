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
  expectedAnswers: [{ type: String }], // For multiple choice multiple answers
  audioUrl: { type: String }, // For listening or repeat sentence
  imageUrl: { type: String }, // For describe image
  keywords: [{ type: String }], // For describe image content evaluation
  options: [{ type: String }], // For multiple choice questions
  prompt: { type: String }, // For multiple choice question prompt / specific question text
  title: { type: String }, // Optional title/topic (e.g., 'Coral Reef Ecosystems')
  blanks: [{
    index: { type: Number },
    correctAnswer: { type: String, required: true },
    options: [{ type: String }], // For dropdown FIB (typically 4 choices)
    explanation: { type: String } // Blank-level grammar or collocation explanation
  }],
  distractors: [{ type: String }], // For drag and drop FIB: extra unused words in word pool
  paragraphs: [{
    id: { type: String },
    text: { type: String, required: true },
    order: { type: Number }
  }],
  correctOrder: [{ type: String }], // Array of paragraph IDs in correct sequence
  topicSentenceIndex: { type: Number },
  incorrectWords: [{
    word: { type: String, required: true },
    spokenWord: { type: String, required: true },
    index: { type: Number },
    explanation: { type: String }
  }],
  explanation: { type: String },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' }
}, { timestamps: true });

module.exports = mongoose.model('Question', QuestionSchema);

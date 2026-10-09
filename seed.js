const mongoose = require('mongoose');
const Question = require('./models/Question');
const dotenv = require('dotenv');

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ptetool';

const seedQuestions = [
  { moduleType: 'speaking', questionType: 'Read Aloud', content: 'The quick brown fox jumps over the lazy dog. This is a classic sentence used to demonstrate all the letters of the English alphabet.' },
  { moduleType: 'speaking', questionType: 'Read Aloud', content: 'Artificial intelligence is transforming the way we learn languages by providing instant feedback on our pronunciation and fluency.' },
  { moduleType: 'speaking', questionType: 'Read Aloud', content: 'Climate change is one of the most pressing issues of our time. Global temperatures have risen consistently over the last decade.' },
  { moduleType: 'speaking', questionType: 'Read Aloud', content: 'Renewable energy sources such as wind and solar are becoming increasingly viable alternatives to fossil fuels.' },
  { moduleType: 'speaking', questionType: 'Read Aloud', content: 'The history of space exploration is filled with remarkable achievements, from the first satellite to the moon landing.' },
  { moduleType: 'speaking', questionType: 'Read Aloud', content: 'Regular exercise and a balanced diet are essential components of a healthy lifestyle for people of all ages.' },
  { moduleType: 'speaking', questionType: 'Read Aloud', content: 'Reading daily not only improves your vocabulary but also helps in reducing stress and enhancing cognitive abilities.' },
  { moduleType: 'speaking', questionType: 'Read Aloud', content: 'The internet has revolutionized communication, allowing people to connect instantly regardless of their geographical location.' },
  { moduleType: 'speaking', questionType: 'Read Aloud', content: 'Understanding different cultures fosters empathy and a broader perspective in our increasingly globalized world.' },
  { moduleType: 'speaking', questionType: 'Read Aloud', content: 'Effective time management is a crucial skill that can significantly increase productivity and reduce anxiety.' }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB. Seeding...');
    await Question.insertMany(seedQuestions);
    console.log('Successfully seeded 10 Read Aloud questions.');
    process.exit();
  })
  .catch((err) => {
    console.error('Error:', err);
    process.exit(1);
  });

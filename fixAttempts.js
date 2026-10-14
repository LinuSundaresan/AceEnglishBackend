const mongoose = require('mongoose');
const Attempt = require('./models/Attempt');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://linusundaresan_db_user:kgOWInL6QDDj6RpC@ace-english-prod.tnd9kqi.mongodb.net/ptetool';
const LIVE_URL = 'https://aceenglishbackend.onrender.com';

const fixAttempts = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB. Fixing attempts...');

    const attempts = await Attempt.find({
      audioUrl: { $regex: 'http://localhost:5000' }
    });

    console.log(`Found ${attempts.length} attempts with localhost audioUrl.`);

    for (const attempt of attempts) {
      attempt.audioUrl = attempt.audioUrl.replace('http://localhost:5000', LIVE_URL);
      await attempt.save();
    }

    console.log('Successfully updated all localhost audioUrls to live URL.');
    process.exit(0);
  } catch (error) {
    console.error('Error fixing attempts:', error);
    process.exit(1);
  }
};

fixAttempts();

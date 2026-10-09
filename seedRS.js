const mongoose = require('mongoose');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const Question = require('./models/Question');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://linusundaresan_db_user:kgOWInL6QDDj6RpC@ace-english-prod.tnd9kqi.mongodb.net/ptetool';

const sentences = [
  "Please make sure you have printed your ticket before arriving at the station.",
  "The university library will be closed for maintenance tomorrow morning.",
  "Students are encouraged to participate in extracurricular activities.",
  "You should submit your assignment by the end of the day on Friday.",
  "Advances in technology have significantly changed the way we communicate."
];

const seedRepeatSentences = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    const folder = path.join(__dirname, 'uploads', 'questions', 'repeat_sentence');
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    // PowerShell script generator
    for (let i = 0; i < sentences.length; i++) {
      const sentence = sentences[i];
      const filename = `rs_seed_${Date.now()}_${i}.wav`;
      const filepath = path.join(folder, filename);

      const psScript = `
        Add-Type -AssemblyName System.Speech;
        $speak = New-Object System.Speech.Synthesis.SpeechSynthesizer;
        $speak.SetOutputToWaveFile("${filepath.replace(/\\/g, '\\\\')}");
        $speak.Speak("${sentence}");
        $speak.Dispose();
      `;

      const psScriptPath = path.join(__dirname, `temp_script_${i}.ps1`);
      fs.writeFileSync(psScriptPath, psScript);

      console.log(`Generating audio for: "${sentence}"`);
      execSync(`powershell -ExecutionPolicy Bypass -File ${psScriptPath}`);

      fs.unlinkSync(psScriptPath); // clean up

      const baseUrl = process.env.LIVE_URL || `http://localhost:${process.env.PORT || 5000}`;
      const audioUrl = `${baseUrl}/uploads/questions/repeat_sentence/${filename}`;

      await Question.create({
        moduleType: 'speaking',
        questionType: 'Repeat Sentence',
        content: sentence,
        audioUrl: audioUrl
      });

      console.log(`Saved question ${i + 1}`);
    }

    console.log('Successfully seeded Repeat Sentence questions with audio!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedRepeatSentences();

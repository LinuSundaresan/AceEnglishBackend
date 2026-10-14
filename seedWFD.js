const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('./models/Question');

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://linusundaresan_db_user:kgOWInL6QDDj6RpC@ace-english-prod.tnd9kqi.mongodb.net/ptetool';

const wfdQuestions = [
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Library Maintenance Notice',
    difficulty: 'Easy',
    content: 'The library will be closed tomorrow for essential maintenance work.',
    expectedAnswer: 'The library will be closed tomorrow for essential maintenance work.',
    keywords: ['library', 'closed', 'tomorrow', 'essential', 'maintenance', 'work'],
    explanation: `Sentence Analysis:
• Exact Transcript: "The library will be closed tomorrow for essential maintenance work."
• Word Count: 10 words
• Tricky Spelling Words:
  - "essential" (double 's', one 't')
  - "maintenance" (often misspelled as 'maintainance' - note the 'e' instead of 'ai')
  - "tomorrow" (one 'm', double 'r')
• Grammar & Structure: Passive future voice ("will be closed") followed by prepositional purpose phrase ("for essential maintenance work").
• Capitalization & Punctuation: Starts with capital "The" and terminates with period "."`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Mandatory Lecture Attendance',
    difficulty: 'Medium',
    content: 'University students should attend all mandatory lectures and tutorial sessions.',
    expectedAnswer: 'University students should attend all mandatory lectures and tutorial sessions.',
    keywords: ['university', 'students', 'attend', 'mandatory', 'lectures', 'tutorial', 'sessions'],
    explanation: `Sentence Analysis:
• Exact Transcript: "University students should attend all mandatory lectures and tutorial sessions."
• Word Count: 10 words
• Tricky Spelling Words:
  - "mandatory" (ends with '-atory', not '-itory')
  - "tutorial" (ends in '-ial')
  - "sessions" (double 's' twice)
• Grammar & Structure: Modal auxiliary verb "should attend" followed by coordinated compound noun phrase ("lectures and tutorial sessions").
• Capitalization & Punctuation: Starts with capital "University" and ends with period "."`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Chemistry Laboratory Equipment',
    difficulty: 'Medium',
    content: 'The chemistry department provides state-of-the-art laboratory equipment for graduate researchers.',
    expectedAnswer: 'The chemistry department provides state-of-the-art laboratory equipment for graduate researchers.',
    keywords: ['chemistry', 'department', 'provides', 'laboratory', 'equipment', 'graduate', 'researchers'],
    explanation: `Sentence Analysis:
• Exact Transcript: "The chemistry department provides state-of-the-art laboratory equipment for graduate researchers."
• Word Count: 10 words (or 12 depending on hyphenation)
• Tricky Spelling Words:
  - "laboratory" (note the internal 'o': lab-o-ra-to-ry)
  - "equipment" (uncountable singular noun - never 'equipments')
  - "researchers" (plural suffix '-s')
• Grammar & Structure: Singular subject "chemistry department" takes 3rd person singular verb "provides". Note hyphenated compound modifier "state-of-the-art".`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Technological Innovation and Economy',
    difficulty: 'Medium',
    content: 'Economic growth depends heavily on technological innovation and consumer confidence.',
    expectedAnswer: 'Economic growth depends heavily on technological innovation and consumer confidence.',
    keywords: ['economic', 'growth', 'depends', 'heavily', 'technological', 'innovation', 'consumer', 'confidence'],
    explanation: `Sentence Analysis:
• Exact Transcript: "Economic growth depends heavily on technological innovation and consumer confidence."
• Word Count: 10 words
• Tricky Spelling Words:
  - "technological" (contains 'ch')
  - "innovation" (double 'n')
  - "confidence" (ends with '-ence', not '-ance')
• Grammar & Structure: Prepositional collocation: "depends on" modified by adverb "heavily". Subject "Economic growth" requires singular verb "depends".`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Renewable Energy Competitiveness',
    difficulty: 'Medium',
    content: 'Renewable energy sources are becoming increasingly competitive in the global market.',
    expectedAnswer: 'Renewable energy sources are becoming increasingly competitive in the global market.',
    keywords: ['renewable', 'energy', 'sources', 'becoming', 'increasingly', 'competitive', 'global', 'market'],
    explanation: `Sentence Analysis:
• Exact Transcript: "Renewable energy sources are becoming increasingly competitive in the global market."
• Word Count: 11 words
• Tricky Spelling Words:
  - "renewable" (re-new-able)
  - "increasingly" (adverb with '-ly')
  - "competitive" (ends in '-itive', double 't')
• Grammar & Structure: Plural subject "sources" takes plural auxiliary "are becoming" + predicate adjective "competitive".`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Course Assignment Deadline Extension',
    difficulty: 'Easy',
    content: 'The deadline for submitting course assignments has been extended until Friday.',
    expectedAnswer: 'The deadline for submitting course assignments has been extended until Friday.',
    keywords: ['deadline', 'submitting', 'assignments', 'extended', 'friday'],
    explanation: `Sentence Analysis:
• Exact Transcript: "The deadline for submitting course assignments has been extended until Friday."
• Word Count: 11 words
• Tricky Spelling Words:
  - "submitting" (double 't' in '-tting')
  - "assignments" (double 's' twice)
  - "Friday" (Proper noun: MUST be capitalized!)
• Grammar & Structure: Present perfect passive "has been extended" agreeing with singular subject "The deadline".`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Clinical Trials and Patient Recovery',
    difficulty: 'Medium',
    content: 'Clinical trials have demonstrated significant improvements in patient recovery times.',
    expectedAnswer: 'Clinical trials have demonstrated significant improvements in patient recovery times.',
    keywords: ['clinical', 'trials', 'demonstrated', 'significant', 'improvements', 'patient', 'recovery'],
    explanation: `Sentence Analysis:
• Exact Transcript: "Clinical trials have demonstrated significant improvements in patient recovery times."
• Word Count: 10 words
• Tricky Spelling Words:
  - "demonstrated" (demon-strated)
  - "significant" (single 'f', ends with '-ant')
  - "improvements" (plural '-s')
• Grammar & Structure: Present perfect transitive "have demonstrated" with plural direct object "improvements".`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Dissertation Literature Review',
    difficulty: 'Hard',
    content: 'A comprehensive review of the academic literature is required for dissertation proposals.',
    expectedAnswer: 'A comprehensive review of the academic literature is required for dissertation proposals.',
    keywords: ['comprehensive', 'review', 'academic', 'literature', 'required', 'dissertation', 'proposals'],
    explanation: `Sentence Analysis:
• Exact Transcript: "A comprehensive review of the academic literature is required for dissertation proposals."
• Word Count: 12 words
• Tricky Spelling Words:
  - "comprehensive" (ends with '-sive')
  - "literature" (lit-er-a-ture)
  - "dissertation" (double 's', ends in '-tion')
• Grammar & Structure: Passive construction "is required for". The grammatical subject is singular "A comprehensive review", hence singular verb "is".`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Archaeological Excavation Discovery',
    difficulty: 'Hard',
    content: 'Archaeologists discovered ancient ceramic artifacts during their excavation of the historic site.',
    expectedAnswer: 'Archaeologists discovered ancient ceramic artifacts during their excavation of the historic site.',
    keywords: ['archaeologists', 'discovered', 'ceramic', 'artifacts', 'excavation', 'historic'],
    explanation: `Sentence Analysis:
• Exact Transcript: "Archaeologists discovered ancient ceramic artifacts during their excavation of the historic site."
• Word Count: 12 words
• Tricky Spelling Words:
  - "archaeologists" (starts with 'Arch-aeo-', or UK 'Archaeologists')
  - "ceramic" (single 'r', ends with '-ic')
  - "artifacts" (or UK 'artefacts')
  - "excavation" (starts with 'ex-', ends in '-tion')
• Grammar & Structure: Past simple transitive verb "discovered" with temporal prepositional phrase "during their excavation".`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Extracurricular Campus Activities',
    difficulty: 'Easy',
    content: 'All students are encouraged to participate in extracurricular campus activities.',
    expectedAnswer: 'All students are encouraged to participate in extracurricular campus activities.',
    keywords: ['students', 'encouraged', 'participate', 'extracurricular', 'campus', 'activities'],
    explanation: `Sentence Analysis:
• Exact Transcript: "All students are encouraged to participate in extracurricular campus activities."
• Word Count: 10 words
• Tricky Spelling Words:
  - "participate" (starts with 'part-')
  - "extracurricular" (one word: extra-curricular, double 'r' at the end)
  - "activities" (plural with '-ies')
• Grammar & Structure: Passive voice "are encouraged to participate in". Note preposition "in" after participate.`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Contemporary Aesthetic Art',
    difficulty: 'Hard',
    content: 'Contemporary artists often challenge conventional definitions of aesthetic beauty and form.',
    expectedAnswer: 'Contemporary artists often challenge conventional definitions of aesthetic beauty and form.',
    keywords: ['contemporary', 'artists', 'challenge', 'conventional', 'definitions', 'aesthetic', 'beauty'],
    explanation: `Sentence Analysis:
• Exact Transcript: "Contemporary artists often challenge conventional definitions of aesthetic beauty and form."
• Word Count: 11 words
• Tricky Spelling Words:
  - "contemporary" (con-tem-po-ra-ry)
  - "conventional" (con-ven-tion-al)
  - "aesthetic" (ae-sthetic or esthetic)
• Grammar & Structure: Plural subject "Contemporary artists" with frequency adverb "often" and bare infinitive "challenge".`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Balancing Economy and Conservation',
    difficulty: 'Medium',
    content: 'Government policies must balance economic development with environmental conservation efforts.',
    expectedAnswer: 'Government policies must balance economic development with environmental conservation efforts.',
    keywords: ['government', 'policies', 'balance', 'economic', 'development', 'environmental', 'conservation'],
    explanation: `Sentence Analysis:
• Exact Transcript: "Government policies must balance economic development with environmental conservation efforts."
• Word Count: 10 words
• Tricky Spelling Words:
  - "government" (contains 'n' before 'ment': govern-ment)
  - "policies" (plural of policy)
  - "environmental" (en-vi-ron-men-tal)
  - "conservation" (con-ser-va-tion)
• Grammar & Structure: Modal verb "must balance X with Y". Both nouns are qualified by adjectives ("economic", "environmental").`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Physiological Stress Regulation',
    difficulty: 'Hard',
    content: 'The physiological response to psychological stress involves complex hormonal regulation.',
    expectedAnswer: 'The physiological response to psychological stress involves complex hormonal regulation.',
    keywords: ['physiological', 'response', 'psychological', 'stress', 'involves', 'hormonal', 'regulation'],
    explanation: `Sentence Analysis:
• Exact Transcript: "The physiological response to psychological stress involves complex hormonal regulation."
• Word Count: 10 words
• Tricky Spelling Words:
  - "physiological" (phys-i-o-log-i-cal)
  - "psychological" (starts with silent 'p': psych-o-log-i-cal)
  - "hormonal" (hor-mon-al)
• Grammar & Structure: Singular subject "response" takes singular verb "involves". Two paired Greek-derived adjectives ("physiological", "psychological").`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Scientific Statistical Analysis',
    difficulty: 'Medium',
    content: 'Careful statistical analysis is essential before drawing valid scientific conclusions.',
    expectedAnswer: 'Careful statistical analysis is essential before drawing valid scientific conclusions.',
    keywords: ['statistical', 'analysis', 'essential', 'drawing', 'valid', 'scientific', 'conclusions'],
    explanation: `Sentence Analysis:
• Exact Transcript: "Careful statistical analysis is essential before drawing valid scientific conclusions."
• Word Count: 10 words
• Tricky Spelling Words:
  - "statistical" (sta-tis-ti-cal)
  - "analysis" (singular ends in '-is', not '-es')
  - "essential" (double 's')
  - "conclusions" (ends with '-sions')
• Grammar & Structure: Preposition "before" followed by gerund "drawing" + direct object noun phrase "valid scientific conclusions".`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'International Trade Agreements',
    difficulty: 'Hard',
    content: 'International trade agreements have a profound impact on domestic manufacturing industries.',
    expectedAnswer: 'International trade agreements have a profound impact on domestic manufacturing industries.',
    keywords: ['international', 'trade', 'agreements', 'profound', 'impact', 'domestic', 'manufacturing', 'industries'],
    explanation: `Sentence Analysis:
• Exact Transcript: "International trade agreements have a profound impact on domestic manufacturing industries."
• Word Count: 11 words
• Tricky Spelling Words:
  - "agreements" (double 'e')
  - "profound" (pro-found)
  - "manufacturing" (man-u-fac-tur-ing)
  - "industries" (plural ends in '-ies')
• Grammar & Structure: Collocation "have a profound impact on". Plural subject "agreements" takes plural verb "have".`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Academic Advisor Consultations',
    difficulty: 'Medium',
    content: 'Students who experience difficulties should consult their academic advisors as early as possible.',
    expectedAnswer: 'Students who experience difficulties should consult their academic advisors as early as possible.',
    keywords: ['students', 'experience', 'difficulties', 'consult', 'academic', 'advisors', 'possible'],
    explanation: `Sentence Analysis:
• Exact Transcript: "Students who experience difficulties should consult their academic advisors as early as possible."
• Word Count: 13 words
• Tricky Spelling Words:
  - "difficulties" (double 'f', ends in '-ies')
  - "advisors" (or 'advisers')
  - "possible" (double 's', ends in '-ible')
• Grammar & Structure: Relative clause "who experience difficulties" defining "Students", followed by modal predicate "should consult ... as early as possible".`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Railway Weather Disruptions',
    difficulty: 'Medium',
    content: 'The unexpected weather conditions caused substantial delays to intercity railway services.',
    expectedAnswer: 'The unexpected weather conditions caused substantial delays to intercity railway services.',
    keywords: ['unexpected', 'weather', 'conditions', 'caused', 'substantial', 'delays', 'railway', 'services'],
    explanation: `Sentence Analysis:
• Exact Transcript: "The unexpected weather conditions caused substantial delays to intercity railway services."
• Word Count: 11 words
• Tricky Spelling Words:
  - "weather" (often confused with 'whether')
  - "conditions" (con-di-tions)
  - "substantial" (sub-stan-tial, ends with '-tial')
  - "railway" (rail-way)
• Grammar & Structure: Past simple transitive "caused" with direct object "substantial delays" + prepositional complement "to intercity railway services".`
  },
  {
    moduleType: 'listening',
    questionType: 'Write From Dictation',
    title: 'Migrating Whale Behavior',
    difficulty: 'Hard',
    content: 'Marine biologists observed unexpected behavioral patterns among migrating whale populations.',
    expectedAnswer: 'Marine biologists observed unexpected behavioral patterns among migrating whale populations.',
    keywords: ['marine', 'biologists', 'observed', 'behavioral', 'patterns', 'migrating', 'populations'],
    explanation: `Sentence Analysis:
• Exact Transcript: "Marine biologists observed unexpected behavioral patterns among migrating whale populations."
• Word Count: 10 words
• Tricky Spelling Words:
  - "biologists" (bio-lo-gists)
  - "behavioral" (or UK 'behavioural')
  - "patterns" (double 't')
  - "migrating" (mi-grat-ing)
  - "populations" (pop-u-la-tions)
• Grammar & Structure: Past simple transitive verb "observed" with complex noun phrase "unexpected behavioral patterns" and preposition "among".`
  }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB. Checking existing Write From Dictation questions...');
    const existing = await Question.find({ moduleType: 'listening', questionType: 'Write From Dictation' });
    console.log(`Found ${existing.length} existing Write From Dictation questions.`);

    let addedCount = 0;
    for (const q of wfdQuestions) {
      const found = await Question.findOne({
        moduleType: 'listening',
        questionType: 'Write From Dictation',
        content: q.content
      });
      if (!found) {
        await Question.create(q);
        addedCount++;
        console.log(`Added WFD question: "${q.title}" (${q.difficulty})`);
      } else {
        console.log(`WFD question already exists: "${q.title}"`);
      }
    }
    console.log(`Successfully completed seeding! Added ${addedCount} new questions.`);
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error seeding Write From Dictation questions:', err);
    process.exit(1);
  });

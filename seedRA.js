const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('./models/Question');

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://linusundaresan_db_user:kgOWInL6QDDj6RpC@ace-english-prod.tnd9kqi.mongodb.net/ptetool';

const longReadAloudQuestions = [
  {
    moduleType: 'speaking',
    questionType: 'Read Aloud',
    content: 'The transition toward renewable energy represents one of the most significant technological transformations of the modern era. As nations strive to curtail greenhouse gas emissions and satisfy international environmental accords, capital investments in solar photovoltaic systems, offshore wind farms, and hydroelectric infrastructures have expanded dramatically. However, seamlessly integrating intermittent power sources into conventional national electrical grids requires substantial breakthroughs in battery storage capacity and sophisticated predictive algorithms to balance fluctuating electricity supply with consumer demand.'
  },
  {
    moduleType: 'speaking',
    questionType: 'Read Aloud',
    content: 'Neuroscientists have conclusively established that the human brain exhibits an extraordinary degree of structural and functional neuroplasticity throughout life. This dynamic capacity enables complex neural pathways to reorganize continuously in response to novel learning experiences, cognitive stimulation, and environmental modifications. When adults actively engage in intellectually demanding disciplines, acquire foreign languages, or undergo rigorous musical training, synaptic connections strengthen significantly, offering vital defensive buffers against age-related neurodegenerative decline.'
  },
  {
    moduleType: 'speaking',
    questionType: 'Read Aloud',
    content: 'The integration of artificial intelligence and deep learning algorithms into diagnostic medicine is rapidly revolutionizing modern healthcare delivery. By analyzing colossal volumes of high-resolution radiographic imaging, computerized tomographic scans, and genomic sequences, advanced neural networks can identify subtle pathological abnormalities far earlier and with greater precision than traditional manual methodologies, thereby empowering clinicians to devise personalized therapeutic regimens tailored specifically to individual patient profiles.'
  },
  {
    moduleType: 'speaking',
    questionType: 'Read Aloud',
    content: 'Marine ecosystems across the planet are confronting unprecedented anthropogenic pressures driven by accelerating agricultural runoff, oceanic plastic pollution, and rising seawater temperatures. These compounding environmental stressors severely disrupt delicate coral reef architectures and marine biodiversity, precipitating widespread species displacement while endangering vital coastal fisheries that supply sustenance and economic livelihoods for hundreds of millions of people worldwide.'
  },
  {
    moduleType: 'speaking',
    questionType: 'Read Aloud',
    content: 'The demographic shift from agrarian economies to industrialized manufacturing societies during the late eighteenth and nineteenth centuries generated profound societal reorganizations. Millions of rural laborers migrated into rapidly expanding urban centers, fundamentally transforming municipal infrastructures, labor regulations, and social stratification, while inadvertently producing severe overcrowding, novel public health emergencies, and urgent calls for institutional legislative reform.'
  },
  {
    moduleType: 'speaking',
    questionType: 'Read Aloud',
    content: 'Quantum computing leverages the mind-bending principles of quantum mechanics, such as superposition and entanglement, to execute computational calculations at speeds fundamentally unimaginable with classical silicon microprocessors. By manipulating quantum bits, or qubits, these emerging supercomputers possess the revolutionary capacity to simulate intricate molecular structures for pharmaceutical breakthroughs and solve complex logistical optimization equations in fractions of a second.'
  },
  {
    moduleType: 'speaking',
    questionType: 'Read Aloud',
    content: 'For decades, classical genetics operated under the deterministic assumption that biological traits were exclusively governed by fixed nucleotide sequences encoded within organismal DNA. However, the burgeoning discipline of epigenetics has revolutionized our understanding by demonstrating that external environmental exposures, including nutritional habits and chronic psychological stress, can alter chromatin architecture and activate or silence specific genes without modifying the underlying genetic sequence.'
  },
  {
    moduleType: 'speaking',
    questionType: 'Read Aloud',
    content: 'The exploration of deep planetary bodies within our solar system has entered an exhilarating epoch propelled by autonomous robotic probes, sophisticated orbiters, and hypersensitive spectrometers. Investigating the sub-surface liquid oceans of icy moons such as Europa and Enceladus yields profound insights into chemical prebiotic conditions, fundamentally shifting our scientific understanding of habitability beyond terrestrial planetary boundaries.'
  }
];

const seedLongQuestions = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB.');

    for (const q of longReadAloudQuestions) {
      // Check if question with identical content already exists
      const existing = await Question.findOne({ content: q.content, questionType: 'Read Aloud' });
      if (!existing) {
        await Question.create(q);
        console.log(`Added long question (${q.content.split(' ').length} words): "${q.content.substring(0, 50)}..."`);
      } else {
        console.log(`Question already exists: "${q.content.substring(0, 40)}..."`);
      }
    }

    const total = await Question.countDocuments({ questionType: 'Read Aloud' });
    console.log(`Total Read Aloud questions in database now: ${total}`);
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedLongQuestions();

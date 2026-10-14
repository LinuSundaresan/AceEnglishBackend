const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('./models/Question');

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://linusundaresan_db_user:kgOWInL6QDDj6RpC@ace-english-prod.tnd9kqi.mongodb.net/ptetool';

const listeningFIBQuestions = [
  {
    moduleType: 'listening',
    questionType: 'Listening: Fill in the Blanks',
    title: 'Deep-Sea Hydrothermal Vents and Chemosynthesis',
    difficulty: 'Medium',
    content: `Prior to the discovery of hydrothermal vents in 1977, biological science presumed that all marine [blank_1] ultimately depended on sunlight for metabolic energy. However, deep-sea expeditions revealed extraordinary biological communities flourishing along abyssal tectonic fissures. Here, subterranean magma superheats seawater, discharging dense plumes enriched with hydrogen [blank_2]. Specialized bacteria exploit this chemical compound, converting dissolved carbon into organic biomass through an extraordinary process called [blank_3]. These microscopic organisms establish the primary nutritional foundation supporting giant tube worms and ghost crabs in absolute [blank_4].`,
    expectedAnswer: `Prior to the discovery of hydrothermal vents in 1977, biological science presumed that all marine ecosystems ultimately depended on sunlight for metabolic energy. However, deep-sea expeditions revealed extraordinary biological communities flourishing along abyssal tectonic fissures. Here, subterranean magma superheats seawater, discharging dense plumes enriched with hydrogen sulfide. Specialized bacteria exploit this chemical compound, converting dissolved carbon into organic biomass through an extraordinary process called chemosynthesis. These microscopic organisms establish the primary nutritional foundation supporting giant tube worms and ghost crabs in absolute darkness.`,
    prompt: `You will hear a recording. Type the missing words in each blank.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'ecosystems',
        explanation: 'Plural noun needed following "all marine". Listen for the distinct plural /z/ marker at the end of the word. Common error: singular "ecosystem".'
      },
      {
        index: 2,
        correctAnswer: 'sulfide',
        explanation: 'Chemical noun "sulfide" (or UK "sulphide"). Forms the compound "hydrogen sulfide" (H2S). Common error: "sulfate" or "sulfite".'
      },
      {
        index: 3,
        correctAnswer: 'chemosynthesis',
        explanation: 'Academic scientific noun. Biological conversion of one or more carbon-containing molecules into organic matter using the oxidation of inorganic compounds.'
      },
      {
        index: 4,
        correctAnswer: 'darkness',
        explanation: 'Abstract noun indicating complete absence of light at abyssal ocean depths (over 2,500 meters below sea level).'
      }
    ],
    explanation: `PTE Academic Scoring & Vocabulary Analysis:
• Blank 1: "ecosystems" (Plural Noun) — Context clue: "all marine [blank]" indicates a countable plural noun. Dropping the final 's' loses the point.
• Blank 2: "sulfide" (Noun) — Collocation: "hydrogen sulfide", the geothermal gas emitted by hydrothermal chimneys.
• Blank 3: "chemosynthesis" (Noun) — Distinctive biological terminology contrasted with photosynthesis in deep marine science.
• Blank 4: "darkness" (Noun) — Prepositional phrase: "in absolute darkness".

PTE Exam Tip:
Always check noun agreement. In PTE Listening FIB, over 40% of point deductions occur because test-takers miss the plural "-s" or past-tense "-ed".`
  },
  {
    moduleType: 'listening',
    questionType: 'Listening: Fill in the Blanks',
    title: 'Perovskite Solar Cells and Photovoltaic Innovation',
    difficulty: 'Hard',
    content: `Traditional silicon solar panels have dominated the renewable energy market for decades, yet manufacturing costs and material constraints have prompted physicists to seek viable [blank_1]. Among the most promising emerging materials are perovskites, synthetic mineral structures renowned for their remarkable light-harvesting [blank_2]. Laboratory prototypes incorporating perovskites have achieved dramatic increases in power conversion [blank_3] over an exceptionally brief development period. Nevertheless, commercial deployment remains restricted by environmental [blank_4], particularly rapid degradation when the sensitive crystal lattice is exposed to atmospheric moisture and prolonged ultraviolet radiation.`,
    expectedAnswer: `Traditional silicon solar panels have dominated the renewable energy market for decades, yet manufacturing costs and material constraints have prompted physicists to seek viable alternatives. Among the most promising emerging materials are perovskites, synthetic mineral structures renowned for their remarkable light-harvesting efficiency. Laboratory prototypes incorporating perovskites have achieved dramatic increases in power conversion efficiency over an exceptionally brief development period. Nevertheless, commercial deployment remains restricted by environmental instability, particularly rapid degradation when the sensitive crystal lattice is exposed to atmospheric moisture and prolonged ultraviolet radiation.`,
    prompt: `You will hear a recording. Type the missing words in each blank.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'alternatives',
        explanation: 'Plural noun "alternatives" following the adjective "viable". Common mistake: singular "alternative".'
      },
      {
        index: 2,
        correctAnswer: 'capabilities',
        explanation: 'Plural noun "capabilities". Refers to functional attributes or potential of perovskite minerals.'
      },
      {
        index: 3,
        correctAnswer: 'efficiency',
        explanation: 'Uncountable noun "efficiency". Key academic photovoltaic collocation: "power conversion efficiency".'
      },
      {
        index: 4,
        correctAnswer: 'instability',
        explanation: 'Abstract noun "instability" (or durability/vulnerability). Chemical tendency to break down when exposed to ambient moisture.'
      }
    ],
    explanation: `PTE Academic Scoring & Vocabulary Analysis:
• Blank 1: "alternatives" — Collocation: "viable alternatives". Plural form matches physicists seeking multiple solutions.
• Blank 2: "capabilities" — Collocation: "light-harvesting capabilities".
• Blank 3: "efficiency" — Standard physics phrase: "power conversion efficiency".
• Blank 4: "instability" — Suffix: "-ity" forming an abstract noun; antonym of "stability".

PTE Strategy:
Type continuously while listening. If you are unsure of spelling, type the phonetic letters immediately in the scratchpad, and correct the spelling during the 1-2 minutes after the recording concludes.`
  },
  {
    moduleType: 'listening',
    questionType: 'Listening: Fill in the Blanks',
    title: 'Cognitive Neuroplasticity and Adult Brain Adaptation',
    difficulty: 'Medium',
    content: `For much of the twentieth century, the prevailing scientific consensus maintained that the adult mammalian brain was structurally [blank_1] once childhood development ended. However, modern neuroimaging technologies have completely overturned this dogma, demonstrating that neural circuitry retains lifelong neuroplasticity. When individuals acquire demanding skills, such as mastering a foreign language or complex musical [blank_2], specialized brain regions undergo pronounced anatomical reorganizations. Neurons forge novel synaptic connections and strengthen existing dendritic pathways through repeated [blank_3]. This adaptive capability highlights that cognitive reserve can be actively augmented throughout adulthood, providing vital protection against neurodegenerative [blank_4].`,
    expectedAnswer: `For much of the twentieth century, the prevailing scientific consensus maintained that the adult mammalian brain was structurally fixed once childhood development ended. However, modern neuroimaging technologies have completely overturned this dogma, demonstrating that neural circuitry retains lifelong neuroplasticity. When individuals acquire demanding skills, such as mastering a foreign language or complex musical instruments, specialized brain regions undergo pronounced anatomical reorganizations. Neurons forge novel synaptic connections and strengthen existing dendritic pathways through repeated stimulation. This adaptive capability highlights that cognitive reserve can be actively augmented throughout adulthood, providing vital protection against neurodegenerative diseases.`,
    prompt: `You will hear a recording. Type the missing words in each blank.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'fixed',
        explanation: 'Past participle adjective "fixed" indicating an unchangeable or static neurological state.'
      },
      {
        index: 2,
        correctAnswer: 'instruments',
        explanation: 'Plural noun "instruments". Common mistake: singular "instrument".'
      },
      {
        index: 3,
        correctAnswer: 'stimulation',
        explanation: 'Noun "stimulation" denoting continuous electrical or cognitive activation.'
      },
      {
        index: 4,
        correctAnswer: 'diseases',
        explanation: 'Plural noun "diseases" following the adjective "neurodegenerative". Common mistake: "disease" (dropping the plural suffix).'
      }
    ],
    explanation: `PTE Academic Scoring & Vocabulary Analysis:
• Blank 1: "fixed" — Adjective describing rigid biological state. Note the "-ed" ending pronounced as /t/.
• Blank 2: "instruments" — Collocation: "musical instruments". Plural form is mandatory.
• Blank 3: "stimulation" — Suffix: "-tion" indicating process or condition.
• Blank 4: "diseases" — Collocation: "neurodegenerative diseases" (such as Alzheimer's and Parkinson's).

Spelling Tip:
Listen closely for terminal consonants. In English, speakers often drop final /s/ or /t/ sounds before another consonant; use syntax to verify whether the word should be plural or past tense.`
  },
  {
    moduleType: 'listening',
    questionType: 'Listening: Fill in the Blanks',
    title: 'Urban Heat Islands and Sustainable Architecture',
    difficulty: 'Easy',
    content: `Metropolitan areas frequently experience significantly higher ambient temperatures than surrounding rural landscapes, a phenomenon known as the urban heat island effect. Dense concentrations of concrete, asphalt, and steel absorb solar radiation during daylight hours and release thermal energy [blank_1] during the night. Furthermore, the scarcity of vegetative canopy severely curtails natural evaporative cooling. In response, modern urban planners are integrating biophilic design strategies, such as installing extensive green roofs and planting reflective street [blank_2]. Incorporating porous pavements also permits stormwater infiltration, thereby replenishing local groundwater tables and reducing urban surface [blank_3]. Ultimately, these sustainable interventions yield cooler city environments and substantially reduce air conditioning [blank_4].`,
    expectedAnswer: `Metropolitan areas frequently experience significantly higher ambient temperatures than surrounding rural landscapes, a phenomenon known as the urban heat island effect. Dense concentrations of concrete, asphalt, and steel absorb solar radiation during daylight hours and release thermal energy slowly during the night. Furthermore, the scarcity of vegetative canopy severely curtails natural evaporative cooling. In response, modern urban planners are integrating biophilic design strategies, such as installing extensive green roofs and planting reflective street canopies. Incorporating porous pavements also permits stormwater infiltration, thereby replenishing local groundwater tables and reducing urban surface runoff. Ultimately, these sustainable interventions yield cooler city environments and substantially reduce air conditioning expenditure.`,
    prompt: `You will hear a recording. Type the missing words in each blank.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'slowly',
        explanation: 'Adverb "slowly" modifying the verb phrase "release thermal energy".'
      },
      {
        index: 2,
        correctAnswer: 'canopies',
        explanation: 'Plural noun "canopies". Note the spelling change from singular "canopy" to plural "-ies".'
      },
      {
        index: 3,
        correctAnswer: 'runoff',
        explanation: 'Compound noun "runoff" referring to water flowing over surface ground into sewer systems.'
      },
      {
        index: 4,
        correctAnswer: 'expenditure',
        explanation: 'Noun "expenditure" or "consumption" referring to energy or monetary costs.'
      }
    ],
    explanation: `PTE Academic Scoring & Vocabulary Analysis:
• Blank 1: "slowly" (Adverb) — Explains the gradual rate of thermal release by thermal mass.
• Blank 2: "canopies" (Plural Noun) — Rule: nouns ending in consonant + 'y' become '-ies'.
• Blank 3: "runoff" (Compound Noun) — Collocation: "surface runoff".
• Blank 4: "expenditure" (Noun) — Collocation: "air conditioning expenditure".`
  },
  {
    moduleType: 'listening',
    questionType: 'Listening: Fill in the Blanks',
    title: 'Behavioral Economics and Choice Architecture',
    difficulty: 'Medium',
    content: `Classical microeconomic models operate on the assumption that consumers behave as perfectly rational agents who methodically evaluate all available options to maximize their personal [blank_1]. In contrast, behavioral economists examine how psychological heuristics and cognitive biases systematically distort everyday financial decisions. For example, individuals consistently exhibit loss aversion, reacting twice as intensely to monetary losses as they do to equivalent [blank_2]. Recognizing these universal cognitive vulnerabilities, policymakers utilize subtle interventions known as nudges. By altering default settings in pension schemes or modifying the layout of cafeteria [blank_3], institutions steer individuals toward beneficial choices without restricting their freedom of [blank_4].`,
    expectedAnswer: `Classical microeconomic models operate on the assumption that consumers behave as perfectly rational agents who methodically evaluate all available options to maximize their personal utility. In contrast, behavioral economists examine how psychological heuristics and cognitive biases systematically distort everyday financial decisions. For example, individuals consistently exhibit loss aversion, reacting twice as intensely to monetary losses as they do to equivalent gains. Recognizing these universal cognitive vulnerabilities, policymakers utilize subtle interventions known as nudges. By altering default settings in pension schemes or modifying the layout of cafeteria counters, institutions steer individuals toward beneficial choices without restricting their freedom of choice.`,
    prompt: `You will hear a recording. Type the missing words in each blank.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'utility',
        explanation: 'Economic noun "utility" meaning satisfaction, benefit, or value derived from consumption.'
      },
      {
        index: 2,
        correctAnswer: 'gains',
        explanation: 'Plural noun "gains". Paired with "losses" in prospect theory: "losses vs gains".'
      },
      {
        index: 3,
        correctAnswer: 'counters',
        explanation: 'Plural noun "counters" referring to cafeteria food display tables.'
      },
      {
        index: 4,
        correctAnswer: 'choice',
        explanation: 'Noun "choice". Idiomatic phrase: "freedom of choice".'
      }
    ],
    explanation: `PTE Academic Scoring & Vocabulary Analysis:
• Blank 1: "utility" — Core economic terminology ("maximize personal utility").
• Blank 2: "gains" — Contrasted directly with "monetary losses" in the preceding clause.
• Blank 3: "counters" — Common noun; cafeteria food stations.
• Blank 4: "choice" — Fixed academic expression: "freedom of choice" (libertarian paternalism).`
  },
  {
    moduleType: 'listening',
    questionType: 'Listening: Fill in the Blanks',
    title: 'Permafrost Degradation and Methane Feedback Loops',
    difficulty: 'Hard',
    content: `In high-latitude Arctic tundra regions, vast expanses of ground remain permanently frozen beneath the surface layer, locking away immense subterranean stores of organic carbon. However, accelerated global warming is causing this ancient permafrost to thaw at unprecedented [blank_1]. As the frozen soils soften, dormant anaerobic microorganisms awaken and decompose millennia-old plant and animal matter. This biochemical decomposition produces substantial volumes of carbon dioxide and potent [blank_2] gas. When these emissions escape into the atmosphere, they amplify the greenhouse effect, thereby driving further polar warming in a dangerous self-reinforcing [blank_3]. Climate scientists warn that crossing this critical ecological tipping point could render international emission targets virtually impossible to [blank_4].`,
    expectedAnswer: `In high-latitude Arctic tundra regions, vast expanses of ground remain permanently frozen beneath the surface layer, locking away immense subterranean stores of organic carbon. However, accelerated global warming is causing this ancient permafrost to thaw at unprecedented rates. As the frozen soils soften, dormant anaerobic microorganisms awaken and decompose millennia-old plant and animal matter. This biochemical decomposition produces substantial volumes of carbon dioxide and potent methane gas. When these emissions escape into the atmosphere, they amplify the greenhouse effect, thereby driving further polar warming in a dangerous self-reinforcing cycle. Climate scientists warn that crossing this critical ecological tipping point could render international emission targets virtually impossible to achieve.`,
    prompt: `You will hear a recording. Type the missing words in each blank.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'rates',
        explanation: 'Plural noun "rates" following the adjective "unprecedented". Collocation: "at unprecedented rates".'
      },
      {
        index: 2,
        correctAnswer: 'methane',
        explanation: 'Noun "methane" (CH4), greenhouse gas. Spelling trap: single "t", ending with "-ane".'
      },
      {
        index: 3,
        correctAnswer: 'cycle',
        explanation: 'Noun "cycle". Academic collocation: "self-reinforcing cycle" or "feedback loop".'
      },
      {
        index: 4,
        correctAnswer: 'achieve',
        explanation: 'Infinitive verb "achieve" following "impossible to". Collocation: "achieve targets". Spelling trap: "i before e except after c" (achieve, not acheive).'
      }
    ],
    explanation: `PTE Academic Scoring & Vocabulary Analysis:
• Blank 1: "rates" — Collocation: "at unprecedented rates". Plural is essential.
• Blank 2: "methane" — Key atmospheric chemistry term.
• Blank 3: "cycle" — Collocation: "self-reinforcing cycle".
• Blank 4: "achieve" — Classic English spelling trap: "i-e" order. Writing "acheive" yields 0 points for this blank.`
  },
  {
    moduleType: 'listening',
    questionType: 'Listening: Fill in the Blanks',
    title: 'Radiocarbon Dating and Neolithic Archaeology',
    difficulty: 'Medium',
    content: `The development of radiocarbon dating in the mid-twentieth century transformed archaeology from an interpretive discipline reliant on stylistic stratigraphy into an empirical science with chronological [blank_1]. The underlying physics relies on the steady cosmic production of carbon-14 in the upper atmosphere, which is subsequently assimilated by living organisms through [blank_2]. Upon an organism's death, radiocarbon absorption ceases, and the unstable isotopes decay into nitrogen at a known exponential half-life of roughly 5,730 years. By measuring the remaining ratio of carbon-14 to stable carbon isotopes using accelerator mass [blank_3], geochronologists can determine the specimen's age with remarkable accuracy, fundamentally rewriting the chronology of early Neolithic [blank_4].`,
    expectedAnswer: `The development of radiocarbon dating in the mid-twentieth century transformed archaeology from an interpretive discipline reliant on stylistic stratigraphy into an empirical science with chronological precision. The underlying physics relies on the steady cosmic production of carbon-14 in the upper atmosphere, which is subsequently assimilated by living organisms through respiration. Upon an organism's death, radiocarbon absorption ceases, and the unstable isotopes decay into nitrogen at a known exponential half-life of roughly 5,730 years. By measuring the remaining ratio of carbon-14 to stable carbon isotopes using accelerator mass spectrometry, geochronologists can determine the specimen's age with remarkable accuracy, fundamentally rewriting the chronology of early Neolithic settlements.`,
    prompt: `You will hear a recording. Type the missing words in each blank.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'precision',
        explanation: 'Noun "precision" denoting mathematical or chronological exactness. Spelling trap: single "s", "-sion" ending.'
      },
      {
        index: 2,
        correctAnswer: 'respiration',
        explanation: 'Biological noun "respiration" (or photosynthesis/metabolism). Suffix "-tion".'
      },
      {
        index: 3,
        correctAnswer: 'spectrometry',
        explanation: 'Scientific measurement noun: "accelerator mass spectrometry" (AMS dating).'
      },
      {
        index: 4,
        correctAnswer: 'settlements',
        explanation: 'Plural noun "settlements" referring to ancient Neolithic agricultural communities.'
      }
    ],
    explanation: `PTE Academic Scoring & Vocabulary Analysis:
• Blank 1: "precision" — Collocation: "chronological precision".
• Blank 2: "respiration" — Biological process through which living matter takes in organic carbon.
• Blank 3: "spectrometry" — High-level academic terminology used in geochemical dating labs.
• Blank 4: "settlements" — Plural noun indicating prehistoric human villages.`
  },
  {
    moduleType: 'listening',
    questionType: 'Listening: Fill in the Blanks',
    title: 'Acoustic Phonetics and Dialect Variation',
    difficulty: 'Easy',
    content: `Linguists who specialize in acoustic phonetics employ computer software to analyze the physical sound waves generated during human speech. By decomposing continuous spoken audio into visual spectrographs, researchers can measure vowel formants, consonant closure durations, and subtle variations in vocal [blank_1]. These objective measurements reveal that regional accents are not haphazard corruptions of language, but rather highly structured phonological systems governed by unconscious phonetic [blank_2]. Furthermore, longitudinal acoustic surveys indicate that sound changes often spread through social networks via peer imitation, gradually transforming the speech patterns of entire geographic [blank_3]. Understanding these acoustic variations helps software engineers develop more inclusive and accurate voice recognition [blank_4].`,
    expectedAnswer: `Linguists who specialize in acoustic phonetics employ computer software to analyze the physical sound waves generated during human speech. By decomposing continuous spoken audio into visual spectrographs, researchers can measure vowel formants, consonant closure durations, and subtle variations in vocal pitch. These objective measurements reveal that regional accents are not haphazard corruptions of language, but rather highly structured phonological systems governed by unconscious phonetic rules. Furthermore, longitudinal acoustic surveys indicate that sound changes often spread through social networks via peer imitation, gradually transforming the speech patterns of entire geographic populations. Understanding these acoustic variations helps software engineers develop more inclusive and accurate voice recognition algorithms.`,
    prompt: `You will hear a recording. Type the missing words in each blank.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'pitch',
        explanation: 'Noun "pitch" denoting the perceived fundamental frequency of the speaker voice.'
      },
      {
        index: 2,
        correctAnswer: 'rules',
        explanation: 'Plural noun "rules" following the adjective "phonetic". Note the plural /z/ ending.'
      },
      {
        index: 3,
        correctAnswer: 'populations',
        explanation: 'Plural noun "populations" referring to communities living in specified geographic areas.'
      },
      {
        index: 4,
        correctAnswer: 'algorithms',
        explanation: 'Plural computer science noun "algorithms". Spelling: "algo-rithms".'
      }
    ],
    explanation: `PTE Academic Scoring & Vocabulary Analysis:
• Blank 1: "pitch" — Musical and phonetic term for frequency.
• Blank 2: "rules" — Grammatical / phonological system rules.
• Blank 3: "populations" — Demographic noun in the plural.
• Blank 4: "algorithms" — Technical noun in voice AI: "voice recognition algorithms".`
  },
  {
    moduleType: 'listening',
    questionType: 'Listening: Fill in the Blanks',
    title: 'Epigenetics and Environmental Gene Regulation',
    difficulty: 'Hard',
    content: `For decades after Watson and Crick elucidated the double-helix structure of DNA, classical genetics operated under the premise that our phenotypic traits were irrevocably predetermined by our inherited genomic [blank_1]. However, the burgeoning discipline of epigenetics has revealed a vastly more dynamic biological paradigm. Epigenetic mechanisms, such as DNA methylation and histone modification, act as chemical switches that alter gene expression without mutating the underlying nucleotide [blank_2]. Environmental exposures—including nutritional deficiencies, chronic psychosocial stress, and exposure to airborne toxins—can induce lasting molecular alterations that dictate which cellular pathways are silenced or [blank_3]. Most remarkably, emerging mammalian studies demonstrate that certain epigenetic tags can bypass gametic reprogramming and be transmitted across multiple [blank_4].`,
    expectedAnswer: `For decades after Watson and Crick elucidated the double-helix structure of DNA, classical genetics operated under the premise that our phenotypic traits were irrevocably predetermined by our inherited genomic sequence. However, the burgeoning discipline of epigenetics has revealed a vastly more dynamic biological paradigm. Epigenetic mechanisms, such as DNA methylation and histone modification, act as chemical switches that alter gene expression without mutating the underlying nucleotide sequence. Environmental exposures—including nutritional deficiencies, chronic psychosocial stress, and exposure to airborne toxins—can induce lasting molecular alterations that dictate which cellular pathways are silenced or activated. Most remarkably, emerging mammalian studies demonstrate that certain epigenetic tags can bypass gametic reprogramming and be transmitted across multiple generations.`,
    prompt: `You will hear a recording. Type the missing words in each blank.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'sequence',
        explanation: 'Noun "sequence" denoting the order of nucleotides in DNA.'
      },
      {
        index: 2,
        correctAnswer: 'sequence',
        explanation: 'Noun "sequence". Collocation: "underlying nucleotide sequence".'
      },
      {
        index: 3,
        correctAnswer: 'activated',
        explanation: 'Past participle adjective "activated" paired with "silenced" (silenced or activated).'
      },
      {
        index: 4,
        correctAnswer: 'generations',
        explanation: 'Plural noun "generations" following the quantifier "multiple".'
      }
    ],
    explanation: `PTE Academic Scoring & Vocabulary Analysis:
• Blank 1: "sequence" — Genomic sequence (A, T, C, G order).
• Blank 2: "sequence" — "nucleotide sequence".
• Blank 3: "activated" — Parallel passive structure with "silenced": "silenced or activated".
• Blank 4: "generations" — Transgenerational epigenetic inheritance across "multiple generations".`
  },
  {
    moduleType: 'listening',
    questionType: 'Listening: Fill in the Blanks',
    title: 'Autonomous Navigation and Computer Vision',
    difficulty: 'Medium',
    content: `Developing fully autonomous vehicles requires solving complex computational challenges in spatial perception and real-time decision-making. Self-driving cars depend on a multifaceted sensor suite comprising radar, high-resolution cameras, and lidar units that emit millions of laser pulses per second to generate dense three-dimensional [blank_1]. Sophisticated deep neural networks process this sensory stream to detect lane boundaries, classify pedestrians, and predict the trajectory of nearby [blank_2]. However, severe meteorological conditions, such as blinding blizzards or torrential downpours, introduce optical noise that can obscure sensor visibility and degrade localization [blank_3]. Consequently, roboticists are developing redundant multi-modal fusion architectures to maintain vehicular safety during adverse environmental [blank_4].`,
    expectedAnswer: `Developing fully autonomous vehicles requires solving complex computational challenges in spatial perception and real-time decision-making. Self-driving cars depend on a multifaceted sensor suite comprising radar, high-resolution cameras, and lidar units that emit millions of laser pulses per second to generate dense three-dimensional maps. Sophisticated deep neural networks process this sensory stream to detect lane boundaries, classify pedestrians, and predict the trajectory of nearby vehicles. However, severe meteorological conditions, such as blinding blizzards or torrential downpours, introduce optical noise that can obscure sensor visibility and degrade localization accuracy. Consequently, roboticists are developing redundant multi-modal fusion architectures to maintain vehicular safety during adverse environmental conditions.`,
    prompt: `You will hear a recording. Type the missing words in each blank.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'maps',
        explanation: 'Plural noun "maps" (or point clouds). Collocation: "three-dimensional maps".'
      },
      {
        index: 2,
        correctAnswer: 'vehicles',
        explanation: 'Plural noun "vehicles" denoting surrounding cars and trucks.'
      },
      {
        index: 3,
        correctAnswer: 'accuracy',
        explanation: 'Noun "accuracy" denoting spatial precision. Collocation: "localization accuracy".'
      },
      {
        index: 4,
        correctAnswer: 'conditions',
        explanation: 'Plural noun "conditions". Collocation: "adverse environmental conditions".'
      }
    ],
    explanation: `PTE Academic Scoring & Vocabulary Analysis:
• Blank 1: "maps" — 3D maps generated by Lidar sensors.
• Blank 2: "vehicles" — Surrounding traffic objects. Plural form required.
• Blank 3: "accuracy" — Technical measure: "localization accuracy".
• Blank 4: "conditions" — Collocation: "adverse environmental conditions".`
  }
];

async function seedListeningFIB() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB successfully.');

    // Remove existing Listening FIB questions to prevent duplicates
    const deleteResult = await Question.deleteMany({
      moduleType: 'listening',
      questionType: { $in: ['Listening: Fill in the Blanks', 'Fill in the Blanks (Listening)'] }
    });
    console.log(`Cleared ${deleteResult.deletedCount} existing Listening FIB questions.`);

    const inserted = await Question.insertMany(listeningFIBQuestions);
    console.log(`Successfully seeded ${inserted.length} Listening: Fill in the Blanks questions!`);

    inserted.forEach((q, idx) => {
      console.log(` [${idx + 1}] "${q.title}" (${q.difficulty}) - ${q.blanks.length} blanks`);
    });

    await mongoose.disconnect();
    console.log('MongoDB connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding Listening FIB questions:', error);
    process.exit(1);
  }
}

seedListeningFIB();

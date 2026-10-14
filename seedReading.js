const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('./models/Question');

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://linusundaresan_db_user:kgOWInL6QDDj6RpC@ace-english-prod.tnd9kqi.mongodb.net/ptetool';

const readingQuestions = [
  // ==========================================
  // 1. Reading & Writing: Fill in the Blanks (Dropdown)
  // ==========================================
  {
    moduleType: 'reading',
    questionType: 'Reading & Writing: Fill in the Blanks',
    title: 'Marine Ecosystems & Coral Bleaching',
    difficulty: 'Medium',
    content: `Coral reefs are among the most biodiverse ecosystems on the planet, often referred to as the rainforests of the sea. However, rising sea surface temperatures have posed severe [blank_1] to their survival. When ocean waters become excessively warm, corals experience physiological stress and [blank_2] the microscopic algae living symbiotically within their tissues. Without these photosynthetic organisms, corals lose their vibrant coloration and vital energy [blank_3]. Although corals can recover from mild thermal anomalies, prolonged elevated temperatures inevitably lead to widespread mortality, with profound ecological and economic [blank_4] for coastal communities worldwide.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'threats',
        options: ['threats', 'remedies', 'alliances', 'expansions'],
        explanation: 'Collocation and context: Rising temperatures pose severe "threats" to survival. Words like remedies or expansions contradict the negative warning.'
      },
      {
        index: 2,
        correctAnswer: 'expel',
        options: ['expel', 'embrace', 'nurture', 'contain'],
        explanation: 'Biological definition: Under thermal stress, corals "expel" (eject/discharge) symbiotic zooxanthellae algae, triggering bleaching.'
      },
      {
        index: 3,
        correctAnswer: 'sources',
        options: ['sources', 'drains', 'barriers', 'impediments'],
        explanation: 'Natural collocation: Algae provide up to 90% of the coral\'s vital energy "sources".'
      },
      {
        index: 4,
        correctAnswer: 'consequences',
        options: ['consequences', 'precedents', 'substitutes', 'incentives'],
        explanation: 'Collocation: Widespread mortality carries profound ecological and economic "consequences" (outcomes/ramifications).'
      }
    ],
    explanation: `Passage analysis: Discusses how climate-driven sea warming disrupts symbiosis between corals and zooxanthellae. Key academic collocations: "pose severe threats", "expel algae", "energy sources", and "economic consequences".`,
    expectedAnswer: `1: threats, 2: expel, 3: sources, 4: consequences`
  },
  {
    moduleType: 'reading',
    questionType: 'Reading & Writing: Fill in the Blanks',
    title: 'The Evolution of Cognitive Psychology',
    difficulty: 'Hard',
    content: `During the mid-twentieth century, psychology underwent a profound paradigm shift commonly known as the cognitive revolution. Prior to this movement, the dominant behaviorist school of thought had largely [blank_1] internal mental processes, arguing that only observable behavior could be scientifically quantified. However, pioneering linguists and computer scientists began to demonstrate that human memory, perception, and problem-solving could be systematically [blank_2]. By drawing an analogy between human cognition and computational data processing, researchers developed models to test how information is encoded, stored, and [blank_3]. This transition fundamentally reshaped the discipline, paving the way for contemporary neuroscience to investigate the biological mechanisms that [blank_4] human thought.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'dismissed',
        options: ['dismissed', 'championed', 'scrutinized', 'amplified'],
        explanation: 'Historical context: Behaviorism strictly disregarded or "dismissed" unobservable internal mental states.'
      },
      {
        index: 2,
        correctAnswer: 'investigated',
        options: ['investigated', 'fabricated', 'suppressed', 'deterred'],
        explanation: 'Context: Cognitive pioneers showed that internal processes could be empirically and systematically "investigated" (researched).'
      },
      {
        index: 3,
        correctAnswer: 'retrieved',
        options: ['retrieved', 'abandoned', 'confiscated', 'prohibited'],
        explanation: 'Information processing triplet: In computational cognitive models, information is "encoded, stored, and retrieved".'
      },
      {
        index: 4,
        correctAnswer: 'underpin',
        options: ['underpin', 'undermine', 'obstruct', 'dilute'],
        explanation: 'Academic meaning: Biological neural mechanisms "underpin" (support or serve as the foundational basis of) human thought.'
      }
    ],
    explanation: `Cognitive Revolution: Behaviorists dismissed unobservable states until cognitive scientists proved internal processes could be investigated using computer analogies (encode, store, retrieve), which now underpin neuroscience.`,
    expectedAnswer: `1: dismissed, 2: investigated, 3: retrieved, 4: underpin`
  },
  {
    moduleType: 'reading',
    questionType: 'Reading & Writing: Fill in the Blanks',
    title: 'Renewable Microgrids & Energy Transition',
    difficulty: 'Medium',
    content: `As decentralized renewable power generation continues to expand, conventional centralized electrical grids are struggling to maintain grid stability. Renewable resources such as solar photovoltaic panels and wind turbines are inherently [blank_1], producing fluctuating amounts of electricity depending on atmospheric conditions. To address this challenge, electrical engineers have designed localized microgrids capable of operating either in tandem with the national utility grid or [blank_2] in "island mode". These smart microgrids integrate battery energy storage systems and intelligent algorithms to [blank_3] real-time supply and demand. By localizing generation and consumption, communities can significantly enhance their energy resilience and [blank_4] their carbon footprint.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'intermittent',
        options: ['intermittent', 'continuous', 'redundant', 'stationary'],
        explanation: 'Renewable engineering term: Solar and wind depend on weather and are inherently "intermittent" (not steady/continuous).'
      },
      {
        index: 2,
        correctAnswer: 'autonomously',
        options: ['autonomously', 'reluctantly', 'haphazardly', 'incidentally'],
        explanation: 'Grid capability: Microgrids can run connected to the grid or "autonomously" (independently without external control) in island mode.'
      },
      {
        index: 3,
        correctAnswer: 'balance',
        options: ['balance', 'complicate', 'deteriorate', 'surpass'],
        explanation: 'Technical function: Smart microgrid algorithms "balance" power supply against dynamic consumer demand.'
      },
      {
        index: 4,
        correctAnswer: 'curtail',
        options: ['curtail', 'aggravate', 'inflate', 'prolong'],
        explanation: 'Environmental objective: The ultimate goal is to "curtail" (reduce/diminish) carbon footprints.'
      }
    ],
    explanation: `Microgrids transition: Renewable power is intermittent; microgrids operate autonomously to balance fluctuations and curtail emissions.`,
    expectedAnswer: `1: intermittent, 2: autonomously, 3: balance, 4: curtail`
  },
  {
    moduleType: 'reading',
    questionType: 'Reading & Writing: Fill in the Blanks',
    title: 'Economic Globalization and Supply Chains',
    difficulty: 'Medium',
    content: `Modern international trade relies heavily on complex global supply chains that span multiple continents. For decades, multinational corporations optimized their logistics networks strictly for efficiency and cost reduction, adopting just-in-time manufacturing [blank_1] that kept inventory levels as low as possible. While this approach dramatically reduced warehousing expenses, it left production systems highly [blank_2] to geopolitical shocks and sudden transport bottlenecks. Recent global crises have forced industrial leaders to re-evaluate these models and shift their strategic emphasis from pure cost minimization toward supply chain [blank_3]. As a result, businesses are now investing heavily in local supplier diversification and nearshoring initiatives to [blank_4] against future logistical disruptions.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'practices',
        options: ['practices', 'hindrances', 'illusions', 'anomalies'],
        explanation: 'Business terminology: Companies adopt manufacturing "practices" or methodologies.'
      },
      {
        index: 2,
        correctAnswer: 'vulnerable',
        options: ['vulnerable', 'immune', 'indifferent', 'impervious'],
        explanation: 'Grammar and meaning: Keeping zero buffer inventory leaves companies "vulnerable" (susceptible) to shocks.'
      },
      {
        index: 3,
        correctAnswer: 'resilience',
        options: ['resilience', 'negligence', 'stagnation', 'friction'],
        explanation: 'Supply chain strategy: The shift is toward "resilience" (the ability to recover and withstand shocks).'
      },
      {
        index: 4,
        correctAnswer: 'safeguard',
        options: ['safeguard', 'jeopardize', 'surrender', 'deprecate'],
        explanation: 'Collocation: Companies nearshore and diversify to "safeguard" (protect) against future disruptions.'
      }
    ],
    explanation: `Supply chain evolution: Just-in-time manufacturing practices left firms vulnerable, prompting a pivot toward supply chain resilience to safeguard operations.`,
    expectedAnswer: `1: practices, 2: vulnerable, 3: resilience, 4: safeguard`
  },
  {
    moduleType: 'reading',
    questionType: 'Reading & Writing: Fill in the Blanks',
    title: 'Architectural Acoustics & Concert Halls',
    difficulty: 'Hard',
    content: `Designing a world-class auditorium requires an intricate balance between architectural aesthetics and physical acoustics. Sound waves generated on stage propagate outward and encounter walls, ceilings, and balconies, which either absorb, reflect, or [blank_1] acoustic energy. If surfaces are too smooth and parallel, listeners experience harsh, flutter echoes that severely [blank_2] auditory clarity. Conversely, excessive soft cladding absorbs high frequencies prematurely, leaving the music sounding dull and lifeless. Acoustic engineers therefore use convex diffusers and specialized timber panels to achieve optimal reverberation times, ensuring that both orchestral symphonies and delicate vocal performances are delivered with utmost [blank_3] across every seat in the [blank_4].`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'scatter',
        options: ['scatter', 'congeal', 'evaporate', 'condense'],
        explanation: 'Acoustic physics: Materials either absorb, reflect, or "scatter" (disperse/diffuse) sound energy.'
      },
      {
        index: 2,
        correctAnswer: 'degrade',
        options: ['degrade', 'elevate', 'purify', 'reinforce'],
        explanation: 'Context: Uncontrolled echoes ruin or "degrade" auditory clarity.'
      },
      {
        index: 3,
        correctAnswer: 'fidelity',
        options: ['fidelity', 'distortion', 'futility', 'hostility'],
        explanation: 'High audio quality: Music delivered with high "fidelity" (accuracy and purity of sound reproduction).'
      },
      {
        index: 4,
        correctAnswer: 'auditorium',
        options: ['auditorium', 'observatory', 'laboratory', 'greenhouse'],
        explanation: 'Setting: The entire passage is discussing a concert hall or "auditorium".'
      }
    ],
    explanation: `Architectural Acoustics: Walls absorb, reflect or scatter sound. Unwanted echoes degrade clarity, so diffusers ensure high fidelity throughout the auditorium.`,
    expectedAnswer: `1: scatter, 2: degrade, 3: fidelity, 4: auditorium`
  },

  // ==========================================
  // 2. Reading: Fill in the Blanks (Drag & Drop)
  // ==========================================
  {
    moduleType: 'reading',
    questionType: 'Reading: Fill in the Blanks',
    title: 'Photosynthesis & Solar Energy Capture',
    difficulty: 'Medium',
    content: `Plants, algae, and cyanobacteria perform photosynthesis, a biochemical process that converts solar irradiance into chemical energy. Inside plant leaves, specialized cellular organelles called chloroplasts harbor chlorophyll pigments that selectively [blank_1] specific wavelengths of blue and red light while reflecting green. This harvested electromagnetic energy is subsequently utilized to split water molecules, generating oxygen as a byproduct while driving chemical reactions that synthesize glucose. Glucose serves as the primary metabolic [blank_2] that sustains plant growth and forms the foundational basis of terrestrial food [blank_3]. Without this planetary biological engine, Earth's atmospheric oxygen levels would swiftly [blank_4], rendering the biosphere inhospitable for aerobic organisms.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'absorb',
        explanation: 'Chlorophyll pigments "absorb" blue and red light while reflecting green light.'
      },
      {
        index: 2,
        correctAnswer: 'fuel',
        explanation: 'Glucose acts as a chemical "fuel" or energy source for cellular respiration.'
      },
      {
        index: 3,
        correctAnswer: 'chains',
        explanation: 'Common ecological collocation: terrestrial food "chains" or webs.'
      },
      {
        index: 4,
        correctAnswer: 'plummet',
        explanation: 'Without oxygen replenishment, atmospheric levels would rapidly "plummet" (fall sharply).'
      }
    ],
    distractors: ['radiate', 'escalate', 'substances'],
    explanation: `Biological mechanism: Chlorophyll pigments absorb light, glucose acts as metabolic fuel, sustaining food chains, preventing oxygen levels from plummeting. Extra words: radiate, escalate, substances.`,
    expectedAnswer: `1: absorb, 2: fuel, 3: chains, 4: plummet`
  },
  {
    moduleType: 'reading',
    questionType: 'Reading: Fill in the Blanks',
    title: 'Urban Heat Islands & Microclimates',
    difficulty: 'Medium',
    content: `The phenomenon known as the urban heat island effect occurs when metropolitan centers experience significantly higher ambient temperatures than nearby rural landscapes. Dark asphalt pavements and concrete skyscrapers absorb immense amounts of daytime solar radiation and [blank_1] it slowly back into the night air. Furthermore, the extensive removal of natural vegetation reduces cooling through evapotranspiration. To counteract this thermal accumulation, civil engineers recommend planting rooftop gardens, installing reflective surfaces, and expanding urban canopy cover. These sustainable interventions can [blank_2] summer cooling demands, lower municipal power consumption, and notably [blank_3] living conditions for vulnerable residents during extreme heatwaves.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'release',
        explanation: 'Dense structures store heat and slowly "release" (radiate/emit) it into the cooler evening air.'
      },
      {
        index: 2,
        correctAnswer: 'curb',
        explanation: 'Green interventions help "curb" (restrain/reduce) skyrocketing summer cooling electricity needs.'
      },
      {
        index: 3,
        correctAnswer: 'improve',
        explanation: 'Urban cooling measures substantially "improve" comfort and living conditions for citizens.'
      }
    ],
    distractors: ['magnify', 'retain', 'worsen', 'isolate'],
    explanation: `Urban climate: Buildings release stored heat; interventions curb energy demands and improve urban conditions. Extra distractors: magnify, retain, worsen, isolate.`,
    expectedAnswer: `1: release, 2: curb, 3: improve`
  },
  {
    moduleType: 'reading',
    questionType: 'Reading: Fill in the Blanks',
    title: 'The Great Migration of the Serengeti',
    difficulty: 'Easy',
    content: `Every year, more than one and a half million wildebeest, accompanied by hundreds of thousands of zebras and gazelles, embark on a clockwise journey across the Serengeti ecosystem in search of fresh pasture and water. This epic seasonal trek is predominantly [blank_1] by the availability of rainfall and mineral-rich grasses. Along the perilous route, herds must navigate dangerous river crossings where predatory crocodiles lie in wait. Despite heavy casualties, this continual herd movement is indispensable for the savanna landscape; their grazing stimulates new plant growth, while their droppings deposit organic [blank_2] that enriches the soil. Biologists consider this phenomenon one of the most spectacular wildlife [blank_3] remaining on Earth.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'governed',
        explanation: 'Ecological migration cycles are "governed" (determined/dictated) by rainfall patterns.'
      },
      {
        index: 2,
        correctAnswer: 'nutrients',
        explanation: 'Animal dung returns organic "nutrients" (fertilizing minerals) to soil.'
      },
      {
        index: 3,
        correctAnswer: 'spectacles',
        explanation: 'A breathtaking sight in nature is termed a wildlife "spectacle".'
      }
    ],
    distractors: ['prevented', 'pollutants', 'disasters', 'prolonged'],
    explanation: `Wildlife Migration: Migration is governed by rain, droppings enrich nutrients, forming one of Earth's great spectacles. Distractors: prevented, pollutants, disasters, prolonged.`,
    expectedAnswer: `1: governed, 2: nutrients, 3: spectacles`
  },
  {
    moduleType: 'reading',
    questionType: 'Reading: Fill in the Blanks',
    title: 'Linguistic Relativity & Spatial Perception',
    difficulty: 'Hard',
    content: `The hypothesis of linguistic relativity proposes that the vocabulary and structural grammar of a spoken language shape how its native speakers conceptualize the world. In English and other European languages, speakers describe spatial positions using egocentric coordinates such as "to my left" or "behind you". In contrast, certain indigenous Australian languages employ absolute cardinal directions in every scenario, describing an object as lying "to the north-northwest". Psychological experiments demonstrate that speakers of these cardinal languages maintain an extraordinarily accurate internal compass, being able to pinpoint direction even in windowless rooms. These findings suggest that language actively [blank_1] habitual cognitive processing rather than merely serving as a passive [blank_2] for preexisting ideas.`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'influences',
        explanation: 'Linguistic relativity suggests language active "influences" (modifies/conditions) cognitive thought.'
      },
      {
        index: 2,
        correctAnswer: 'conduit',
        explanation: 'Language is more than just a passive "conduit" (channel/medium) through which thoughts pass.'
      }
    ],
    distractors: ['hinders', 'barrier', 'reverses', 'substitute'],
    explanation: `Linguistic relativity: Language influences thought rather than being a mere conduit. Distractors: hinders, barrier, reverses, substitute.`,
    expectedAnswer: `1: influences, 2: conduit`
  },
  {
    moduleType: 'reading',
    questionType: 'Reading: Fill in the Blanks',
    title: 'Artificial Intelligence & Medical Diagnostics',
    difficulty: 'Medium',
    content: `In recent years, deep learning algorithms have demonstrated remarkable capabilities in medical imaging diagnostics. By training on hundreds of thousands of annotated radiographic scans, convolutional neural networks can identify subtle pathological abnormalities that might elude the human eye. Early trials show that AI systems can detect malignant tumors in mammograms and retinal disease in fundus photographs with diagnostic accuracy that rivals experienced radiologists. Nevertheless, medical ethicists emphasize that automated algorithms should serve as decision-support tools rather than autonomous replacements for physicians. Clinical judgment, patient empathy, and holistic context remain human strengths that no algorithm can easily [blank_1]. Ultimately, the integration of algorithmic precision with clinician oversight promises to [blank_2] diagnostic workflows and improve patient [blank_3].`,
    blanks: [
      {
        index: 1,
        correctAnswer: 'replicate',
        explanation: 'Empathy and human clinical acumen are qualities algorithms cannot easily "replicate" (duplicate/copy).'
      },
      {
        index: 2,
        correctAnswer: 'streamline',
        explanation: 'Integrating AI helps "streamline" (optimize and accelerate) busy hospital diagnostic pipelines.'
      },
      {
        index: 3,
        correctAnswer: 'outcomes',
        explanation: 'Medical goal collocation: improving patient "outcomes" (health results and recovery).'
      }
    ],
    distractors: ['impede', 'surrender', 'dangers', 'distort'],
    explanation: `Medical AI: Algorithms cannot replicate human empathy, but they streamline workflows to improve patient outcomes. Distractors: impede, surrender, dangers, distort.`,
    expectedAnswer: `1: replicate, 2: streamline, 3: outcomes`
  },

  // ==========================================
  // 3. Reading: Re-order Paragraphs (ROP)
  // ==========================================
  {
    moduleType: 'reading',
    questionType: 'Re-order Paragraphs',
    title: 'Renewable Energy & Smart Grids',
    difficulty: 'Medium',
    content: 'The text boxes in the left panel have been restored in a random order. Restore the original order by dragging text boxes from the left panel to the right panel or using the arrow buttons.',
    paragraphs: [
      {
        id: '1',
        text: 'The transition toward renewable energy sources like wind and solar has gathered unprecedented momentum across the globe.',
        order: 1
      },
      {
        id: '2',
        text: 'However, unlike conventional fossil-fuel power stations, these green energy generators are inherently intermittent, depending heavily on prevailing weather conditions.',
        order: 2
      },
      {
        id: '3',
        text: 'To address this unpredictability, electrical engineers have developed intelligent smart grid systems equipped with real-time digital sensors.',
        order: 3
      },
      {
        id: '4',
        text: 'These advanced networks can instantly balance electricity supply and fluctuating demand, preventing blackouts while maximizing the utilization of clean power.',
        order: 4
      }
    ],
    correctOrder: ['1', '2', '3', '4'],
    topicSentenceIndex: 1,
    explanation: `Logic & Cohesion Analysis:
• Sentence 1 (Topic Sentence): Independent statement introducing global momentum behind renewable energy. Contains no referents or transition words.
• Sentence 2 follows 1: Uses the contrast marker "However" and referent "these green energy generators" pointing back to wind and solar. Introduces the challenge of intermittency.
• Sentence 3 follows 2: The phrase "To address this unpredictability" directly tackles the weather intermittency mentioned in 2, introducing "smart grid systems".
• Sentence 4 follows 3: "These advanced networks" refers back to smart grid systems, concluding with their operational benefits.`,
    expectedAnswer: '1 -> 2 -> 3 -> 4'
  },
  {
    moduleType: 'reading',
    questionType: 'Re-order Paragraphs',
    title: 'Language Acquisition in Infants',
    difficulty: 'Medium',
    content: 'The text boxes in the left panel have been restored in a random order. Restore the original order by dragging text boxes from the left panel to the right panel or using the arrow buttons.',
    paragraphs: [
      {
        id: '1',
        text: 'Long before infants utter their first intelligible words, they engage in sophisticated acoustic analysis of their surrounding linguistic environment.',
        order: 1
      },
      {
        id: '2',
        text: 'During the first six months of life, babies possess the extraordinary ability to distinguish phonetic contrasts across all human languages.',
        order: 2
      },
      {
        id: '3',
        text: 'As they approach their first birthday, however, this universal perceptual capacity gradually narrows to reflect only the native sounds they hear regularly.',
        order: 3
      },
      {
        id: '4',
        text: 'Neuroscientists refer to this developmental pruning as perceptual narrowing, which optimizes the brain for mastering native grammar and syntax.',
        order: 4
      }
    ],
    correctOrder: ['1', '2', '3', '4'],
    topicSentenceIndex: 1,
    explanation: `Logic & Cohesion Analysis:
• Sentence 1 (Topic Sentence): Independent statement introducing infant acoustic speech perception.
• Sentence 2 follows 1: Chronological flow starting with "During the first six months of life" and universal phonetic discrimination.
• Sentence 3 follows 2: Continues the timeline with "As they approach their first birthday, however", contrasting the broad capacity with narrowing to native sounds.
• Sentence 4 follows 3: The phrase "this developmental pruning" names and explains the perceptual narrowing phenomenon described in 3.`,
    expectedAnswer: '1 -> 2 -> 3 -> 4'
  },
  {
    moduleType: 'reading',
    questionType: 'Re-order Paragraphs',
    title: 'Historical Impact of the Printing Press',
    difficulty: 'Hard',
    content: 'The text boxes in the left panel have been restored in a random order. Restore the original order by dragging text boxes from the left panel to the right panel or using the arrow buttons.',
    paragraphs: [
      {
        id: '1',
        text: 'Prior to the mid-fifteenth century, European manuscripts were copied entirely by hand, making books luxurious artifacts accessible only to nobility and the clergy.',
        order: 1
      },
      {
        id: '2',
        text: 'This monopoly on written knowledge was permanently shattered when Johannes Gutenberg introduced movable metal type printing in Mainz, Germany.',
        order: 2
      },
      {
        id: '3',
        text: 'His revolutionary mechanical innovation slashed the production time of manuscripts from months of labor to mere days.',
        order: 3
      },
      {
        id: '4',
        text: 'Consequently, scientific treatises, classical philosophy, and religious texts disseminated rapidly across the continent, laying the intellectual groundwork for the Enlightenment.',
        order: 4
      }
    ],
    correctOrder: ['1', '2', '3', '4'],
    topicSentenceIndex: 1,
    explanation: `Logic & Cohesion Analysis:
• Sentence 1 (Topic Sentence): Independent historical background introducing medieval hand-copied books and restricted access.
• Sentence 2 follows 1: "This monopoly on written knowledge" refers directly to books being restricted to nobility/clergy in 1, introducing Gutenberg's movable type.
• Sentence 3 follows 2: "His revolutionary mechanical innovation" references Gutenberg's invention and highlights the reduction in manuscript production time.
• Sentence 4 follows 3: "Consequently" marks the profound societal outcome of rapid book production, fueling the Enlightenment.`,
    expectedAnswer: '1 -> 2 -> 3 -> 4'
  },
  {
    moduleType: 'reading',
    questionType: 'Re-order Paragraphs',
    title: 'Deep-Sea Exploration & Ancient Shipwrecks',
    difficulty: 'Hard',
    content: 'The text boxes in the left panel have been restored in a random order. Restore the original order by dragging text boxes from the left panel to the right panel or using the arrow buttons.',
    paragraphs: [
      {
        id: '1',
        text: 'Deep-sea ocean floor exploration has long posed extreme physical challenges due to crushing hydrostatic pressure and pitch-black conditions.',
        order: 1
      },
      {
        id: '2',
        text: 'In recent decades, autonomous underwater vehicles (AUVs) equipped with multi-beam sonar mapping have revolutionized this challenging field.',
        order: 2
      },
      {
        id: '3',
        text: 'Using these robotic vessels, marine archaeologists have located dozens of ancient shipwrecks preserved in deep oxygen-depleted seabed zones.',
        order: 3
      },
      {
        id: '4',
        text: 'Artifacts recovered from such submerged sites offer irreplaceable insights into ancient maritime trade routes and seafaring civilizations.',
        order: 4
      },
      {
        id: '5',
        text: 'As underwater robotics continue to advance in battery endurance and AI navigation, scientists anticipate unveiling even deeper mysteries from the abyss.',
        order: 5
      }
    ],
    correctOrder: ['1', '2', '3', '4', '5'],
    topicSentenceIndex: 1,
    explanation: `Logic & Cohesion Analysis:
• Sentence 1 (Topic Sentence): Introduces deep-sea ocean exploration and its severe physical hurdles.
• Sentence 2 follows 1: Introduces technological solutions: "autonomous underwater vehicles (AUVs)".
• Sentence 3 follows 2: "Using these robotic vessels" references the AUVs, describing the discovery of ancient shipwrecks in anoxic zones.
• Sentence 4 follows 3: "Artifacts recovered from such submerged sites" links directly to the shipwrecks discovered in 3.
• Sentence 5 follows 4: Concluding vision regarding the future of underwater robotics and upcoming discoveries.`,
    expectedAnswer: '1 -> 2 -> 3 -> 4 -> 5'
  },
  {
    moduleType: 'reading',
    questionType: 'Re-order Paragraphs',
    title: 'The Urban Heat Island Effect',
    difficulty: 'Easy',
    content: 'The text boxes in the left panel have been restored in a random order. Restore the original order by dragging text boxes from the left panel to the right panel or using the arrow buttons.',
    paragraphs: [
      {
        id: '1',
        text: 'Metropolitan cities worldwide frequently register ambient temperatures several degrees higher than their surrounding rural countryside.',
        order: 1
      },
      {
        id: '2',
        text: 'This thermal disparity, known as the urban heat island effect, is largely caused by dense asphalt and concrete structures absorbing solar radiation throughout the day.',
        order: 2
      },
      {
        id: '3',
        text: 'The solar heat trapped by these building materials is further compounded by vehicular exhaust and air conditioning heat rejection.',
        order: 3
      },
      {
        id: '4',
        text: 'To counteract these sweltering microclimates, urban planners are mandating green vegetative rooftops, permeable pavements, and expanded canopy cover.',
        order: 4
      }
    ],
    correctOrder: ['1', '2', '3', '4'],
    topicSentenceIndex: 1,
    explanation: `Logic & Cohesion Analysis:
• Sentence 1 (Topic Sentence): Independent statement describing higher temperatures in metropolitan cities compared to rural areas.
• Sentence 2 follows 1: "This thermal disparity" explicitly terms the phenomenon as the "urban heat island effect" and identifies concrete/asphalt causes.
• Sentence 3 follows 2: "The solar heat trapped by these building materials" continues directly from asphalt/concrete absorption and adds compounding factors.
• Sentence 4 follows 3: "To counteract these sweltering microclimates" introduces actionable architectural remedies.`,
    expectedAnswer: '1 -> 2 -> 3 -> 4'
  },
  {
    moduleType: 'reading',
    questionType: 'Re-order Paragraphs',
    title: 'Artificial Intelligence in Radiology',
    difficulty: 'Medium',
    content: 'The text boxes in the left panel have been restored in a random order. Restore the original order by dragging text boxes from the left panel to the right panel or using the arrow buttons.',
    paragraphs: [
      {
        id: '1',
        text: 'In contemporary healthcare, diagnostic radiological imaging plays a decisive role in identifying oncological tumors and internal lesions.',
        order: 1
      },
      {
        id: '2',
        text: 'However, the exponential surge in high-resolution MRI and CT scans generated daily has placed unprecedented cognitive strain on hospital radiologists.',
        order: 2
      },
      {
        id: '3',
        text: 'To relieve this diagnostic bottleneck, medical researchers have trained deep convolutional networks on millions of verified patient scans.',
        order: 3
      },
      {
        id: '4',
        text: 'Rather than replacing clinicians, these algorithmic systems serve as vigilant assistants, flagging suspicious anomalies with remarkable speed and consistency.',
        order: 4
      }
    ],
    correctOrder: ['1', '2', '3', '4'],
    topicSentenceIndex: 1,
    explanation: `Logic & Cohesion Analysis:
• Sentence 1 (Topic Sentence): Independent opening highlighting the crucial role of radiology in modern healthcare.
• Sentence 2 follows 1: "However" signals the problem: exponential scan volume overwhelming human radiologists.
• Sentence 3 follows 2: "To relieve this diagnostic bottleneck" references the radiologist overload and introduces deep convolutional networks.
• Sentence 4 follows 3: "Rather than replacing clinicians, these algorithmic systems..." clarifies the collaborative role of the AI systems described in 3.`,
    expectedAnswer: '1 -> 2 -> 3 -> 4'
  },
  // ==========================================
  // 4. Multiple Choice, Single Answer (Reading)
  // ==========================================
  {
    moduleType: 'reading',
    questionType: 'Multiple Choice, Single Answer',
    title: 'Epigenetics and Cellular Memory',
    difficulty: 'Medium',
    content: `For decades, classical genetics operated under the premise that an organism's traits and developmental trajectory were strictly determined by the fixed sequence of nucleotide bases in its DNA. However, the burgeoning field of epigenetics has fundamentally disrupted this deterministic framework. Epigenetic mechanisms—such as DNA methylation and histone acetylation—alter chromatin architecture and dictate which genes are transcriptionally active or silenced without modifying the underlying genomic code. Crucially, these chemical tags can be dynamically reshaped by external environmental inputs, including nutritional deficiencies, chronic psychological stress, and exposure to toxic contaminants. Perhaps most astonishingly, recent biomedical investigations suggest that certain epigenetic modifications can be transmitted across generations via germ cells, providing a plausible mechanism for transgenerational cellular memory. While evolutionary biologists continue to debate the evolutionary durability of these non-genomic inheritances, epigenetics has undoubtedly dismantled the long-standing dichotomy between nature and nurture, showing that lived environmental experiences can leave enduring molecular impressions upon genetic expression.`,
    prompt: `According to the passage, what is the primary significance of epigenetic mechanisms in understanding genetics?`,
    options: [
      `They establish that external environmental influences can alter genetic expression without changing the DNA sequence itself.`,
      `They prove that the fixed sequence of nucleotide bases changes whenever an organism experiences chronic psychological stress.`,
      `They demonstrate that transgenerational inheritance has completely superseded traditional Darwinian natural selection.`,
      `They reveal that chemical tags such as histone acetylation permanently disable cellular transcription across all tissue types.`
    ],
    expectedAnswer: `They establish that external environmental influences can alter genetic expression without changing the DNA sequence itself.`,
    explanation: `Detailed Answer & Distractor Breakdown:
• Correct Option: "They establish that external environmental influences can alter genetic expression without changing the DNA sequence itself."
  Evidence from Passage: The passage states that epigenetic mechanisms "dictate which genes are transcriptionally active or silenced without modifying the underlying genomic code" and that "chemical tags can be dynamically reshaped by external environmental inputs."
• Distractor B: Incorrect because the text explicitly clarifies that epigenetics alters gene expression "without modifying the underlying genomic code", meaning the nucleotide sequence itself remains unchanged.
• Distractor C: Incorrect because the text only states that evolutionary biologists "continue to debate the evolutionary durability of these non-genomic inheritances"—it does not state that epigenetics has superseded Darwinian selection.
• Distractor D: Incorrect because the passage states tags alter chromatin and dictate which genes are active or silenced dynamically, not that they permanently disable transcription across all tissue types.`
  },
  {
    moduleType: 'reading',
    questionType: 'Multiple Choice, Single Answer',
    title: 'Exoplanetary Atmospheres and Biosignatures',
    difficulty: 'Hard',
    content: `The discovery of thousands of extrasolar planets over the past two decades has transitioned astronomy from an era of exoplanet detection to one of detailed atmospheric characterization. Utilizing space observatories equipped with high-precision transmission spectroscopy, astrophysicists analyze the subtle dimming of starlight as a planet transits across the face of its host star. When starlight filters through the planet's gaseous envelope, specific chemical compounds absorb characteristic wavelengths, leaving spectroscopic fingerprints. Among the sought-after targets are potential biosignatures—gaseous combinations such as methane and molecular oxygen in chemical disequilibrium, which on Earth are sustained primarily by biological activity. Nonetheless, astrobiologists urge extreme caution against premature declarations of extraterrestrial life. Non-biological abiotic processes, such as photolysis induced by stellar ultraviolet flares, can generate false-positive biosignatures under geochemical conditions alien to our solar system. Consequently, establishing true habitability requires comprehensive planetary contextualization, evaluating the star's magnetic temperament alongside the planet's atmospheric composition and surface geochemistry.`,
    prompt: `Why do astrobiologists urge caution when interpreting potential atmospheric biosignatures on exoplanets?`,
    options: [
      `Transmission spectroscopy cannot measure absorption wavelengths when planets transit their host stars.`,
      `Abiotic photochemical mechanisms can mimic biological signs by producing identical chemical gases without the presence of life.`,
      `Host stars inevitably absorb all gases from the gaseous envelope before instruments can detect disequilibrium.`,
      `Extraterrestrial life forms do not consume methane or release molecular oxygen in detectable quantities.`
    ],
    expectedAnswer: `Abiotic photochemical mechanisms can mimic biological signs by producing identical chemical gases without the presence of life.`,
    explanation: `Detailed Answer & Distractor Breakdown:
• Correct Option: "Abiotic photochemical mechanisms can mimic biological signs by producing identical chemical gases without the presence of life."
  Evidence from Passage: The passage cautions that "Non-biological abiotic processes, such as photolysis induced by stellar ultraviolet flares, can generate false-positive biosignatures under geochemical conditions alien to our solar system."
• Distractor A: Incorrect because transmission spectroscopy is precisely the high-precision technique currently utilized to detect these absorption wavelengths.
• Distractor C: Incorrect because the text does not state that stars absorb the planets' atmospheric gases.
• Distractor D: Incorrect because the text discusses how chemical disequilibrium of methane and oxygen is what scientists look for, not that alien life cannot produce them.`
  },
  {
    moduleType: 'reading',
    questionType: 'Multiple Choice, Single Answer',
    title: 'Urban Agglomeration and Economic Resiliency',
    difficulty: 'Medium',
    content: `Economists have long observed that human economic activity tends to concentrate disproportionately in densely populated metropolitan areas, a phenomenon known as agglomeration economies. By clustering together, enterprises benefit from pooled specialized labor markets, rapid knowledge spillovers, and close proximity to ancillary supply networks. These geographic advantages typically foster elevated rates of patent generation, business incubation, and productivity gains that outpace those of suburban or rural regions. Nevertheless, agglomeration is not an unalloyed benefit. As population density intensifies, negative externalities—notably skyrocketing real estate rents, chronic traffic congestion, localized environmental degradation, and widening socioeconomic inequality—can erode the very economic dynamism that fueled the city's initial ascent. When the marginal congestion costs imposed by hyper-density surpass the productivity benefits of spatial proximity, metropolitan centers risk stagnation unless local municipal governance proactively invests in mass transit infrastructure and affordable housing.`,
    prompt: `Which of the following best expresses the main point of the passage?`,
    options: [
      `Suburban and rural economies consistently outperform metropolitan centers because they are immune to congestion costs.`,
      `Metropolitan agglomeration delivers substantial economic efficiencies, but unchecked density costs can eventually undermine these gains.`,
      `The sole reason corporations cluster in dense cities is to avoid investing in proprietary employee training.`,
      `Technological innovation in urban centers is entirely driven by private enterprise rather than public transit investments.`
    ],
    expectedAnswer: `Metropolitan agglomeration delivers substantial economic efficiencies, but unchecked density costs can eventually undermine these gains.`,
    explanation: `Detailed Answer & Distractor Breakdown:
• Correct Option: "Metropolitan agglomeration delivers substantial economic efficiencies, but unchecked density costs can eventually undermine these gains."
  Evidence from Passage: The passage outlines both the powerful benefits of clustering (labor pools, spillovers, productivity) and the counterbalance ("Nevertheless, agglomeration is not an unalloyed benefit... When marginal congestion costs surpass productivity benefits, metropolitan centers risk stagnation").
• Distractor A: Contradicted by the text, which states productivity gains in metropolitan areas "outpace those of suburban or rural regions."
• Distractor C: Erroneous generalization; companies cluster for labor pools, knowledge spillovers, and supply networks, not exclusively to avoid training costs.
• Distractor D: Not supported by the text; transit is mentioned as a vital municipal investment to mitigate congestion.`
  },
  {
    moduleType: 'reading',
    questionType: 'Multiple Choice, Single Answer',
    title: 'Permafrost Thaw and Global Carbon Feedbacks',
    difficulty: 'Hard',
    content: `Spanning vast expanses of Siberia, Alaska, and northern Canada, Arctic permafrost serves as one of the planet's most formidable terrestrial carbon vaults. For tens of thousands of years, sub-zero temperatures have locked away an estimated 1,500 billion metric tons of organic matter—nearly double the quantity of carbon currently suspended in Earth's atmosphere. As anthropogenic greenhouse gas emissions drive polar temperatures upward at more than twice the global average rate, this permanently frozen ground is undergoing unprecedented degradation. As the permafrost thaws, previously immobilized microbial communities awaken and decompose ancient plant and animal remains, liberating carbon dioxide in aerated dry soils and methane in waterlogged anaerobic thermokarst lakes. Methane is particularly pernicious, exerting a warming impact approximately twenty-eight to thirty-six times greater than carbon dioxide over a century-long timeframe. This process forms a potent self-reinforcing climate feedback loop: warming causes permafrost to thaw, which releases greenhouse gases that catalyze additional atmospheric warming, accelerating further thawing independent of human mitigation efforts.`,
    prompt: `Based on the text, why is the release of methane from thawing permafrost considered particularly alarming?`,
    options: [
      `Methane prevents polar microbial communities from decomposing ancient organic plant matter.`,
      `Methane possesses a greenhouse warming potential roughly thirty times more potent than carbon dioxide over a century.`,
      `Methane immediately transforms aerated arctic soils into arid, uninhabitable deserts.`,
      `Methane release completely halts the formation of thermokarst lakes throughout northern Siberia.`
    ],
    expectedAnswer: `Methane possesses a greenhouse warming potential roughly thirty times more potent than carbon dioxide over a century.`,
    explanation: `Detailed Answer & Distractor Breakdown:
• Correct Option: "Methane possesses a greenhouse warming potential roughly thirty times more potent than carbon dioxide over a century."
  Evidence from Passage: The passage states: "Methane is particularly pernicious, exerting a warming impact approximately twenty-eight to thirty-six times greater than carbon dioxide over a century-long timeframe."
• Distractor A: Contradicted; microbial communities are the ones releasing the methane by actively decomposing organic matter.
• Distractor C: Fabricated claim not mentioned in the text; waterlogged soils form thermokarst lakes, not arid deserts.
• Distractor D: Contradicted; methane is released within waterlogged thermokarst lakes rather than stopping their formation.`
  },
  {
    moduleType: 'reading',
    questionType: 'Multiple Choice, Single Answer',
    title: 'The Spread of Movable Type in Renaissance Europe',
    difficulty: 'Easy',
    content: `Johannes Gutenberg's mid-fifteenth-century mechanization of movable metal type is widely heralded as a watershed moment in Western intellectual history. Prior to the printing press, the preservation and dissemination of texts relied on monastic scriptoria, where scribes painstakingly hand-copied manuscripts onto expensive vellum parchment. This manual process severely restricted literacy and kept written knowledge confined to ecclesiastical elites and royal courts. The advent of movable type dramatically curtailed book production expenditures and accelerated output by several orders of magnitude. Within decades, printing workshops sprang up across key trade routes in Germany, Italy, and France, producing millions of affordable treatises, pamphlets, and classical translations. This democratization of the written word not only catalyzed the Protestant Reformation and the Scientific Revolution by enabling scholars to cross-examine standardized texts across distant borders, but also fostered the emergence of national vernacular languages at the expense of ecclesiastical Latin.`,
    prompt: `What was an immediate consequence of Gutenberg's invention of movable type according to the passage?`,
    options: [
      `A dramatic reduction in book manufacturing costs accompanied by an exponential increase in text output.`,
      `The total disappearance of secular universities throughout Renaissance Germany and France.`,
      `A legal ban on printing in vernacular languages in favor of strictly preserving monastic Latin manuscripts.`,
      `An international agreement among monarchs to restrict printing workshops to royal courts.`
    ],
    expectedAnswer: `A dramatic reduction in book manufacturing costs accompanied by an exponential increase in text output.`,
    explanation: `Detailed Answer & Distractor Breakdown:
• Correct Option: "A dramatic reduction in book manufacturing costs accompanied by an exponential increase in text output."
  Evidence from Passage: The text notes that "The advent of movable type dramatically curtailed book production expenditures and accelerated output by several orders of magnitude."
• Distractor B: False and absurd; printing stimulated scholarship and the Scientific Revolution.
• Distractor C: Contradicted; the passage states that printing fostered the rise of vernacular languages rather than banning them.
• Distractor D: Contradicted; printing workshops spread rapidly across commercial trade routes, democratizing access rather than restricting it to courts.`
  },
  {
    moduleType: 'reading',
    questionType: 'Multiple Choice, Single Answer',
    title: 'Slow-Wave Sleep and Memory Consolidation',
    difficulty: 'Medium',
    content: `While popular culture often views sleep as a passive state of physiological dormancy, cognitive neuroscience has revealed that it is an active, highly orchestrated period of neural computation. In particular, slow-wave sleep (SWS)—the deepest non-rapid eye movement stage characterized by synchronized, low-frequency delta oscillations in the neocortex—plays an indispensable role in memory consolidation. During wakefulness, novel declarative memories (such as factual knowledge and autobiographical episodes) are initially encoded and temporarily indexed within the hippocampus. However, hippocampal storage capacity is finite and inherently vulnerable to interference from subsequent learning. During slow-wave sleep, high-frequency neural bursts known as sharp-wave ripples fire within the hippocampus, reactivating the newly acquired memory traces. These memory signals are synchronously transmitted to the neocortex, where they are gradually integrated into long-term semantic knowledge networks. This offline neural dialogue effectively clears temporary hippocampal buffers, preserving vital knowledge while simultaneously preparing the brain to encode new information upon awakening.`,
    prompt: `According to cognitive neuroscientists, what is the primary role of sharp-wave ripples during slow-wave sleep?`,
    options: [
      `To induce rapid eye movements and prevent neocortical neural synchronization.`,
      `To permanently erase declarative memories so that factual knowledge cannot be recalled.`,
      `To reactivate temporary hippocampal memory traces and facilitate their transfer to the neocortex for long-term storage.`,
      `To slow down overall cerebral metabolism to ensure physiological dormancy.`
    ],
    expectedAnswer: `To reactivate temporary hippocampal memory traces and facilitate their transfer to the neocortex for long-term storage.`,
    explanation: `Detailed Answer & Distractor Breakdown:
• Correct Option: "To reactivate temporary hippocampal memory traces and facilitate their transfer to the neocortex for long-term storage."
  Evidence from Passage: The passage explains that during SWS, "high-frequency neural bursts known as sharp-wave ripples fire within the hippocampus, reactivating the newly acquired memory traces. These memory signals are synchronously transmitted to the neocortex, where they are gradually integrated into long-term semantic knowledge networks."
• Distractor A: Incorrect; SWS is non-REM sleep characterized by low-frequency delta oscillations, not rapid eye movements.
• Distractor B: Contradicted; the ripples preserve and consolidate memories into long-term storage, rather than permanently erasing them.
• Distractor D: Misses the cognitive neuroscience finding; sleep is active neural computation for memory transfer rather than simple passive dormancy.`
  },

  // ==========================================
  // 5. Multiple Choice, Multiple Answers (Reading)
  // ==========================================
  {
    moduleType: 'reading',
    questionType: 'Multiple Choice, Multiple Answers',
    title: 'Hydrothermal Vents and Chemosynthesis',
    difficulty: 'Hard',
    content: `In 1977, marine geologists aboard the research submersible Alvin discovered hydrothermal vents along the Galapagos Rift, radically overturning fundamental biological dogmas regarding the preconditions for complex life. Until this historic expedition, scientists presumed that all multicellular life forms were fundamentally contingent upon solar irradiance and photosynthetic primary production. At abyssal depths exceeding 2,500 meters, complete absence of sunlight creates perpetual frigidity and crushing hydrostatic pressure. Yet clustering around these mineral-rich thermal plumes were thriving communities of giant vestimentiferan tube worms, vent crabs, and blind shrimp. Rather than utilizing sunlight, primary production in these ecosystems is driven by specialized chemolithoautotrophic bacteria. These extremophilic microorganisms metabolize dissolved hydrogen sulfide discharged by the sub-seafloor volcanic conduits, converting inorganic sulfur compounds into organic cellular energy. Many benthic organisms, most notably Riftia pachyptila tube worms, lack digestive tracts altogether; instead, they maintain dense intracellular colonies of symbiotic chemotrophic bacteria within a specialized vascular organ called the trophosome. The discovery not only expanded terrestrial ecological parameters but also revolutionized astrobiological speculation regarding potential extraterrestrial biospheres within the subsurface oceans of icy moons such as Europa and Enceladus.`,
    prompt: `Which of the following statements regarding hydrothermal vent ecosystems are supported by the passage?`,
    options: [
      `Chemolithoautotrophic bacteria generate organic matter by oxidizing dissolved hydrogen sulfide rather than harnessing solar energy.`,
      `Prior to the 1977 Alvin expedition, scientists assumed that all complex organisms directly or indirectly depended on photosynthesis.`,
      `Riftia pachyptila tube worms possess highly sophisticated digestive systems to hunt deep-sea crustaceans.`,
      `The discovery of chemosynthesis caused astrobiologists to dismiss the possibility of life on the moons Europa and Enceladus.`,
      `Symbiotic bacteria residing inside the trophosome of tube worms provide cellular nourishment to their host.`,
      `Hydrothermal vent chimneys emit freezing freshwater that dilutes the salinity of abyssal oceanic basins.`
    ],
    expectedAnswers: [
      `Chemolithoautotrophic bacteria generate organic matter by oxidizing dissolved hydrogen sulfide rather than harnessing solar energy.`,
      `Prior to the 1977 Alvin expedition, scientists assumed that all complex organisms directly or indirectly depended on photosynthesis.`,
      `Symbiotic bacteria residing inside the trophosome of tube worms provide cellular nourishment to their host.`
    ],
    expectedAnswer: `Chemolithoautotrophic bacteria generate organic matter by oxidizing dissolved hydrogen sulfide rather than harnessing solar energy., Prior to the 1977 Alvin expedition, scientists assumed that all complex organisms directly or indirectly depended on photosynthesis., Symbiotic bacteria residing inside the trophosome of tube worms provide cellular nourishment to their host.`,
    explanation: `Pearson PTE Multiple Answers Analysis (Scoring: +1 correct, -1 incorrect, min 0):
• Correct Option 1: "Chemolithoautotrophic bacteria generate organic matter by oxidizing dissolved hydrogen sulfide..."
  Evidence: "These extremophilic microorganisms metabolize dissolved hydrogen sulfide discharged by the sub-seafloor volcanic conduits, converting inorganic sulfur compounds into organic cellular energy."
• Correct Option 2: "Prior to the 1977 Alvin expedition, scientists assumed that all complex organisms directly or indirectly depended on photosynthesis."
  Evidence: "Until this historic expedition, scientists presumed that all multicellular life forms were fundamentally contingent upon solar irradiance and photosynthetic primary production."
• Correct Option 5: "Symbiotic bacteria residing inside the trophosome of tube worms provide cellular nourishment to their host."
  Evidence: "Riftia pachyptila tube worms, lack digestive tracts altogether; instead, they maintain dense intracellular colonies of symbiotic chemotrophic bacteria within a specialized vascular organ called the trophosome."
• Distractor 3: False; the text explicitly states tube worms "lack digestive tracts altogether".
• Distractor 4: Contradicted; the discovery "revolutionized astrobiological speculation regarding potential extraterrestrial biospheres" on Europa and Enceladus, rather than dismissing it.
• Distractor 6: Contradicted; vents produce "mineral-rich thermal plumes", not freezing freshwater.`
  },
  {
    moduleType: 'reading',
    questionType: 'Multiple Choice, Multiple Answers',
    title: 'Roman Concrete and Volcanic Ash Longevity',
    difficulty: 'Medium',
    content: `The extraordinary preservation of ancient Roman maritime breakwaters, harbors, and monuments—many remaining structurally intact after two millennia of relentless wave bombardment—has long captivated structural engineers and materials scientists. Unlike modern Portland concrete, which steadily degrades, cracks, and deteriorates when continuously exposed to saline marine environments, Roman concrete (opus caementicium) possesses a remarkable capacity for autogenous self-healing and progressive strengthening over centuries. Recent mineralogical analyses have deciphered the sophisticated geochemical secret underlying this longevity. Ancient Roman engineers blended volcanic ash from the Pozzuoli region (pozzolana) with slaked lime (calcium hydroxide), seawater, aggregate chunks, and volcanic tuff. When seawater continuously percolates through the porous matrix of submerged Roman piers, it dissolves vulnerable volcanic components and stimulates the crystallization of rare interlocking minerals, specifically aluminous tobermorite and phillipsite. Rather than eroding the concrete, this ongoing hydrothermal chemical interaction causes dense mineral plates to knit together microscopic fissures, reinforcing the internal crystalline framework. Consequently, marine exposure paradoxically enhances rather than impairs the mechanical load-bearing integrity of Roman maritime works over deep time.`,
    prompt: `Based on the passage, which of the following statements about Roman concrete (opus caementicium) are TRUE?`,
    options: [
      `Unlike contemporary Portland concrete, Roman concrete exhibits superior durability when submerged in marine environments.`,
      `The inclusion of pozzolanic volcanic ash enabled unique chemical reactions upon contact with percolating seawater.`,
      `The continuous infiltration of saline water gradually weakens the load-bearing framework of Roman maritime structures.`,
      `The crystallization of aluminous tobermorite and phillipsite helps seal microscopic fissures within the material.`,
      `Modern Portland cement was discovered to be identical in composition to Roman opus caementicium.`,
      `Ancient Roman engineers completely avoided using seawater during their initial mortar preparation.`
    ],
    expectedAnswers: [
      `Unlike contemporary Portland concrete, Roman concrete exhibits superior durability when submerged in marine environments.`,
      `The inclusion of pozzolanic volcanic ash enabled unique chemical reactions upon contact with percolating seawater.`,
      `The crystallization of aluminous tobermorite and phillipsite helps seal microscopic fissures within the material.`
    ],
    expectedAnswer: `Unlike contemporary Portland concrete, Roman concrete exhibits superior durability when submerged in marine environments., The inclusion of pozzolanic volcanic ash enabled unique chemical reactions upon contact with percolating seawater., The crystallization of aluminous tobermorite and phillipsite helps seal microscopic fissures within the material.`,
    explanation: `Pearson PTE Multiple Answers Analysis:
• Correct Option 1: "Unlike contemporary Portland concrete, Roman concrete exhibits superior durability..."
  Evidence: "Unlike modern Portland concrete, which steadily degrades, cracks... Roman concrete possesses a remarkable capacity for autogenous self-healing and progressive strengthening."
• Correct Option 2: "The inclusion of pozzolanic volcanic ash enabled unique chemical reactions..."
  Evidence: "Ancient Roman engineers blended volcanic ash from the Pozzuoli region (pozzolana)... when seawater continuously percolates through the porous matrix... it stimulates the crystallization of rare interlocking minerals."
• Correct Option 4: "The crystallization of aluminous tobermorite and phillipsite helps seal microscopic fissures..."
  Evidence: "...causes dense mineral plates to knit together microscopic fissures, reinforcing the internal crystalline framework."
• Distractor 3: Contradicted; marine exposure "paradoxically enhances rather than impairs the mechanical load-bearing integrity."
• Distractor 5: False; modern Portland concrete degrades in saline water, while Roman concrete is distinct and self-strengthening.
• Distractor 6: Contradicted; Roman engineers explicitly blended volcanic ash with "slaked lime, seawater, aggregate chunks, and volcanic tuff."`
  },
  {
    moduleType: 'reading',
    questionType: 'Multiple Choice, Multiple Answers',
    title: 'Neuroplasticity and the Adult Hippocampus',
    difficulty: 'Hard',
    content: `For most of the twentieth century, conventional neuroanatomy subscribed to the dogma of the "fixed adult brain," a deterministic paradigm positing that the human central nervous system ceased generating new neurons following early childhood maturation. Any subsequent neural damage or age-related cell loss was deemed permanent and irreversible. However, the paradigm was overturned during the late 1990s by landmark discoveries in adult neurogenesis and synaptic plasticity. Researchers demonstrated that the adult mammalian brain retains the remarkable capability to remodel synaptic connections in response to experiential demands and environmental stimuli. Most significantly, active neurogenesis—the birth, migration, and functional integration of newly formed neurons—was definitively confirmed to persist throughout adulthood within the subgranular zone of the dentate gyrus in the hippocampus and the subventricular zone. Sustained aerobic exercise, complex intellectual engagement, and enriched sensory environments have been shown to upregulate the expression of brain-derived neurotrophic factor (BDNF), thereby accelerating neurogenesis and synaptic resilience. Conversely, chronic unmanaged psychological distress and prolonged exposure to elevated glucocorticoids markedly suppress hippocampal cell proliferation, predisposing individuals to cognitive deficits and affective disorders.`,
    prompt: `Which of the following claims about neuroplasticity and adult neurogenesis are confirmed in the passage?`,
    options: [
      `Twentieth-century neuroscientists believed that neuron generation permanently terminated after childhood.`,
      `Aerobic physical exercise and intellectually stimulating environments promote the upregulation of BDNF.`,
      `Chronic stress and sustained glucocorticoid exposure increase the production of new hippocampal neurons.`,
      `Adult neurogenesis occurs exclusively in the primary visual cortex of the occipital lobe.`,
      `The adult brain can dynamically reorganize its synaptic connectivity in response to new environmental experiences.`,
      `Brain-derived neurotrophic factor (BDNF) causes rapid decay of long-term memory traces.`
    ],
    expectedAnswers: [
      `Twentieth-century neuroscientists believed that neuron generation permanently terminated after childhood.`,
      `Aerobic physical exercise and intellectually stimulating environments promote the upregulation of BDNF.`,
      `The adult brain can dynamically reorganize its synaptic connectivity in response to new environmental experiences.`
    ],
    expectedAnswer: `Twentieth-century neuroscientists believed that neuron generation permanently terminated after childhood., Aerobic physical exercise and intellectually stimulating environments promote the upregulation of BDNF., The adult brain can dynamically reorganize its synaptic connectivity in response to new environmental experiences.`,
    explanation: `Pearson PTE Multiple Answers Analysis:
• Correct Option 1: "Twentieth-century neuroscientists believed that neuron generation permanently terminated after childhood."
  Evidence: "For most of the twentieth century, conventional neuroanatomy subscribed to the dogma... positing that the human central nervous system ceased generating new neurons following early childhood maturation."
• Correct Option 2: "Aerobic physical exercise and intellectually stimulating environments promote the upregulation of BDNF."
  Evidence: "Sustained aerobic exercise, complex intellectual engagement, and enriched sensory environments have been shown to upregulate the expression of brain-derived neurotrophic factor (BDNF)."
• Correct Option 5: "The adult brain can dynamically reorganize its synaptic connectivity in response to new environmental experiences."
  Evidence: "...the adult mammalian brain retains the remarkable capability to remodel synaptic connections in response to experiential demands and environmental stimuli."
• Distractor 3: Contradicted; chronic stress and glucocorticoids "markedly suppress hippocampal cell proliferation", not increase it.
• Distractor 4: False; adult neurogenesis occurs in the "subgranular zone of the dentate gyrus in the hippocampus and the subventricular zone", not the primary visual cortex.
• Distractor 6: False; BDNF accelerates neurogenesis and synaptic resilience, not memory trace decay.`
  },
  {
    moduleType: 'reading',
    questionType: 'Multiple Choice, Multiple Answers',
    title: 'The Silk Road and the Rise of Maritime Trade',
    difficulty: 'Medium',
    content: `Throughout the Classical and Medieval eras, the trans-Eurasian overland routes collectively termed the Silk Road functioned as the primary commercial and cultural conduits connecting East Asia, the Mediterranean basin, and Europe. Caravans traversing the treacherous Central Asian deserts transported not only high-value silk, porcelain, spices, and precious metals, but also technological innovations including papermaking, movable type concepts, and gunpowder. However, by the late fourteenth and fifteenth centuries, several converging factors precipitated the gradual decline of the overland caravans. The fragmentation of the Mongol Empire and the subsequent emergence of hostile regional dynasties dramatically heightened geopolitical instability and tariff extortion along continental trade corridors. Concurrently, pioneering European maritime navigators developed sturdier ocean-going caravels, astrolabes, and magnetic navigational techniques, unlocking direct sea lanes around the Cape of Good Hope to the Indian Ocean. Maritime transit dramatically slashed transit durations, eliminated exorbitant intermediary tolls charged by regional overland potentates, and permitted the bulk haulage of heavy cargo that pack animals could never carry economically. Consequently, global mercantile dominance decisively migrated from continental Eurasian oases to oceanic harbor cities.`,
    prompt: `According to the passage, which factors contributed to the decline of overland Silk Road trade routes?`,
    options: [
      `Heightened political volatility and excessive tariff taxation following the disintegration of the Mongol Empire.`,
      `The total worldwide collapse in international demand for silk, spices, and porcelain.`,
      `Technological advancements in naval architecture and navigation that enabled direct oceanic trade routes.`,
      `The capacity of oceanic vessels to transport bulk cargo far more cost-effectively than pack animals.`,
      `A permanent international ban enacted by European monarchs prohibiting all trade with Asian markets.`,
      `The complete geographical drying up of the Indian Ocean during the fifteenth century.`
    ],
    expectedAnswers: [
      `Heightened political volatility and excessive tariff taxation following the disintegration of the Mongol Empire.`,
      `Technological advancements in naval architecture and navigation that enabled direct oceanic trade routes.`,
      `The capacity of oceanic vessels to transport bulk cargo far more cost-effectively than pack animals.`
    ],
    expectedAnswer: `Heightened political volatility and excessive tariff taxation following the disintegration of the Mongol Empire., Technological advancements in naval architecture and navigation that enabled direct oceanic trade routes., The capacity of oceanic vessels to transport bulk cargo far more cost-effectively than pack animals.`,
    explanation: `Pearson PTE Multiple Answers Analysis:
• Correct Option 1: "Heightened political volatility and excessive tariff taxation following the disintegration of the Mongol Empire."
  Evidence: "The fragmentation of the Mongol Empire and the subsequent emergence of hostile regional dynasties dramatically heightened geopolitical instability and tariff extortion."
• Correct Option 3: "Technological advancements in naval architecture and navigation that enabled direct oceanic trade routes."
  Evidence: "Concurrently, pioneering European maritime navigators developed sturdier ocean-going caravels, astrolabes, and magnetic navigational techniques, unlocking direct sea lanes."
• Correct Option 4: "The capacity of oceanic vessels to transport bulk cargo far more cost-effectively than pack animals."
  Evidence: "...permitted the bulk haulage of heavy cargo that pack animals could never carry economically."
• Distractor 2: Contradicted; demand for luxury goods remained extremely high throughout the age of discovery.
• Distractor 5: False; monarchs funded voyages to expand Asian trade, not prohibit it.
• Distractor 6: Physically absurd and completely unmentioned.`
  },
  {
    moduleType: 'reading',
    questionType: 'Multiple Choice, Multiple Answers',
    title: 'Marine Bioluminescence and Adaptive Functions',
    difficulty: 'Medium',
    content: `Bioluminescence—the biochemical emission of visible light by living organisms—is an exceptionally widespread phenomenon across marine taxa, occurring in over 75% of deep-sea pelagic species. Unlike incandescence, bioluminescence is categorized as "cold light" because virtually 80% to 90% of the energy consumed is converted directly into radiant luminescence with negligible heat dissipation. The catalytic reaction fundamentally involves the oxidation of a light-emitting substrate molecule called luciferin, accelerated by the enzyme luciferase or a photoprotein in the presence of dissolved oxygen. In oceanic environments devoid of downwelling sunlight, marine organisms deploy bioluminescence for diverse adaptive functions. Many predatory bathypelagic anglerfish utilize light-emitting photophores dangling from modified cranial lures to attract curious prey directly toward their jaws. Conversely, numerous mesopelagic fish and squid employ counterillumination: photophores arranged along their ventral (underside) surfaces emit downward-directed light that precisely matches the intensity and wavelength of downwelling solar rays, effectively erasing their shadows and rendering them invisible to predators hunting from below. Furthermore, some dinoflagellates and jellyfish release sudden blinding flashes or luminescent clouds to deter or distract approaching predators, functioning as a burglar alarm that alerts secondary predators to attack the initial aggressor.`,
    prompt: `Which of the following functions of bioluminescence in marine life are described in the passage?`,
    options: [
      `Generating intense thermal heat to boil and digest captured prey.`,
      `Luring unsuspecting prey organisms toward the predator's mouth.`,
      `Camouflaging an organism's silhouette against surface illumination through counterillumination.`,
      `Deterring attackers by emitting sudden flashes or luminescent decoy clouds.`,
      `Absorbing radiant ultraviolet radiation to drive photosynthetic sugar synthesis.`,
      `Heating deep ocean currents to facilitate egg incubation during winter months.`
    ],
    expectedAnswers: [
      `Luring unsuspecting prey organisms toward the predator's mouth.`,
      `Camouflaging an organism's silhouette against surface illumination through counterillumination.`,
      `Deterring attackers by emitting sudden flashes or luminescent decoy clouds.`
    ],
    expectedAnswer: `Luring unsuspecting prey organisms toward the predator's mouth., Camouflaging an organism's silhouette against surface illumination through counterillumination., Deterring attackers by emitting sudden flashes or luminescent decoy clouds.`,
    explanation: `Pearson PTE Multiple Answers Analysis:
• Correct Option 2: "Luring unsuspecting prey organisms toward the predator's mouth."
  Evidence: "Many predatory bathypelagic anglerfish utilize light-emitting photophores dangling from modified cranial lures to attract curious prey directly toward their jaws."
• Correct Option 3: "Camouflaging an organism's silhouette against surface illumination through counterillumination."
  Evidence: "photophores arranged along their ventral surfaces emit downward-directed light... erasing their shadows and rendering them invisible to predators hunting from below."
• Correct Option 4: "Deterring attackers by emitting sudden flashes or luminescent decoy clouds."
  Evidence: "Furthermore, some dinoflagellates and jellyfish release sudden blinding flashes or luminescent clouds to deter or distract approaching predators..."
• Distractor 1: Contradicted; bioluminescence produces "negligible heat dissipation" (cold light).
• Distractor 5: Contradicted; it is a biochemical light emission reaction, not photosynthesis.
• Distractor 6: Contradicted; cold light cannot heat ocean currents.`
  },
  {
    moduleType: 'reading',
    questionType: 'Multiple Choice, Multiple Answers',
    title: 'Algorithmic Bias in Machine Learning Systems',
    difficulty: 'Hard',
    content: `As artificial intelligence and predictive machine learning models are increasingly integrated into high-stakes institutional decision-making—such as criminal justice risk assessments, mortgage lending, and automated recruitment—scholars have raised urgent concerns regarding algorithmic bias. A common misconception posits that computational algorithms are inherently objective and immune to human prejudice simply because they execute mathematical equations. In reality, machine learning models derive their predictive weights inductively from historical training datasets. If the historical data reflects deep-seated socio-economic inequalities, discriminatory hiring patterns, or unrepresentative sampling demographics, the resulting algorithmic models will systematically codify, amplify, and perpetuate those exact systemic disparities under a veneer of mathematical neutrality. Furthermore, proxy variables frequently undermine fairness audits; even when sensitive attributes such as race, ethnicity, or gender are explicitly omitted from the feature matrix, machine learning classifiers can infer those protected categories via correlated proxies like geographic postal codes, educational institutions, or linguistic nuances. Mitigating algorithmic bias therefore necessitates rigorous pre-processing demographic parity audits, continuous post-deployment model interpretability evaluations, and representative data curation.`,
    prompt: `Which of the following statements about algorithmic bias are supported by the passage?`,
    options: [
      `Machine learning models are intrinsically unbiased because mathematical calculations eliminate all subjective distortion.`,
      `Algorithms trained on historical datasets can systematically institutionalize past human prejudices and inequalities.`,
      `Excluding sensitive attributes like race does not guarantee fairness because algorithms can infer them through proxy variables.`,
      `Mitigating algorithmic bias requires rigorous data auditing, representative sampling, and model interpretability checks.`,
      `Predictive risk algorithms have been legally outlawed from all financial and employment sectors worldwide.`,
      `Machine learning classifiers are solely capable of processing numerical tables and cannot evaluate language or resumes.`
    ],
    expectedAnswers: [
      `Algorithms trained on historical datasets can systematically institutionalize past human prejudices and inequalities.`,
      `Excluding sensitive attributes like race does not guarantee fairness because algorithms can infer them through proxy variables.`,
      `Mitigating algorithmic bias requires rigorous data auditing, representative sampling, and model interpretability checks.`
    ],
    expectedAnswer: `Algorithms trained on historical datasets can systematically institutionalize past human prejudices and inequalities., Excluding sensitive attributes like race does not guarantee fairness because algorithms can infer them through proxy variables., Mitigating algorithmic bias requires rigorous data auditing, representative sampling, and model interpretability checks.`,
    explanation: `Pearson PTE Multiple Answers Analysis:
• Correct Option 2: "Algorithms trained on historical datasets can systematically institutionalize past human prejudices..."
  Evidence: "If the historical data reflects deep-seated socio-economic inequalities... the resulting algorithmic models will systematically codify, amplify, and perpetuate those exact systemic disparities."
• Correct Option 3: "Excluding sensitive attributes like race does not guarantee fairness because algorithms can infer them through proxy variables."
  Evidence: "...even when sensitive attributes such as race, ethnicity, or gender are explicitly omitted... classifiers can infer those protected categories via correlated proxies like geographic postal codes..."
• Correct Option 4: "Mitigating algorithmic bias requires rigorous data auditing, representative sampling, and model interpretability checks."
  Evidence: "Mitigating algorithmic bias therefore necessitates rigorous pre-processing demographic parity audits, continuous post-deployment model interpretability evaluations, and representative data curation."
• Distractor 1: Contradicted; the text labels the idea that algorithms are inherently objective as a "common misconception".
• Distractor 5: Contradicted; the models are "increasingly integrated into high-stakes institutional decision-making", not outlawed.
• Distractor 6: Contradicted; models analyze "linguistic nuances" and automated resumes.`
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB. Checking existing Reading questions...');

    // Delete any previous reading questions to avoid duplicates on re-run
    const deleted = await Question.deleteMany({ moduleType: 'reading' });
    console.log(`Cleaned up ${deleted.deletedCount} existing reading questions.`);

    const inserted = await Question.insertMany(readingQuestions);
    console.log(`Successfully seeded ${inserted.length} official PTE Reading questions!`);
    console.log(' - Dropdown (R&W FIB):', inserted.filter(q => q.questionType.includes('Reading & Writing')).length);
    console.log(' - Drag & Drop (R FIB):', inserted.filter(q => q.questionType === 'Reading: Fill in the Blanks').length);
    console.log(' - Re-order Paragraphs (ROP):', inserted.filter(q => q.questionType === 'Re-order Paragraphs').length);
    console.log(' - Multiple Choice, Single Answer (MCSA):', inserted.filter(q => q.questionType === 'Multiple Choice, Single Answer').length);
    console.log(' - Multiple Choice, Multiple Answers (MCMA):', inserted.filter(q => q.questionType === 'Multiple Choice, Multiple Answers').length);

    process.exit(0);
  } catch (err) {
    console.error('Failed to seed reading questions:', err);
    process.exit(1);
  }
}

seed();

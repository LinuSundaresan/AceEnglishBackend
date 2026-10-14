const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('./models/Question');

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://linusundaresan_db_user:kgOWInL6QDDj6RpC@ace-english-prod.tnd9kqi.mongodb.net/ptetool';

const sstQuestions = [
  {
    moduleType: 'listening',
    questionType: 'Summarize Spoken Text',
    title: 'Circadian Rhythms and Sleep Physiology',
    difficulty: 'Medium',
    content: `Circadian rhythms are roughly twenty-four-hour biological cycles governed by an internal biochemical pacemaker located in the suprachiasmatic nucleus of the brain. This central biological clock orchestrates essential physiological functions, including core body temperature fluctuations, immune system defense mechanisms, and hormone secretions such as melatonin and cortisol.

Light exposure detected by specialized retinal ganglion cells provides the primary environmental cue, synchronizing our internal clock with the Earth's natural solar cycle. However, modern lifestyles characterized by artificial lighting and persistent exposure to blue light from electronic devices severely disrupt this delicate evolutionary equilibrium.

Chronic disruption of circadian alignment is not merely an inconvenience; medical researchers have firmly linked it to elevated risks of metabolic syndrome, cardiovascular disease, impaired cognitive performance, and chronic mood disorders. Consequently, chronobiologists recommend consistent sleep-wake schedules and reducing evening digital screen exposure to safeguard biological synchronization and long-term vitality.`,
    expectedAnswer: `Circadian rhythms are twenty-four-hour biological cycles regulated by the brain's internal pacemaker that synchronize bodily functions with natural daylight. However, modern artificial lighting and digital screens disrupt this clock, leading to serious health complications like cardiovascular disease and cognitive impairment. Therefore, maintaining consistent sleep schedules and minimizing evening screen exposure are vital for health.`,
    keywords: [
      'circadian rhythms',
      'suprachiasmatic nucleus',
      'internal clock',
      'melatonin',
      'light exposure',
      'blue light',
      'disruption',
      'cardiovascular disease',
      'sleep schedule',
      'synchronization'
    ],
    explanation: `Key Lecture Points:
1. Definition of circadian rhythms (24-hour biological cycles coordinated by the brain's pacemaker).
2. The role of natural light in synchronizing physiological processes like temperature and melatonin.
3. The adverse impact of artificial lighting and electronic screens causing circadian misalignment.
4. Serious long-term health risks (heart disease, metabolic disorders, cognitive decline) and practical recommendations (fixed sleep schedules, reduced screen time).`
  },
  {
    moduleType: 'listening',
    questionType: 'Summarize Spoken Text',
    title: 'Ocean Acidification and Coral Reef Ecosystems',
    difficulty: 'Hard',
    content: `Ocean acidification is widely recognized as the insidious twin of climate change, driven by the atmospheric absorption of anthropogenic carbon dioxide emissions. The world's oceans have absorbed roughly thirty percent of human-generated carbon dioxide since the onset of the Industrial Revolution, resulting in significant alterations to marine chemical equilibrium.

When carbon dioxide dissolves in seawater, it forms carbonic acid, which subsequently releases hydrogen ions and lowers ocean pH levels. This chemical reaction critically diminishes the availability of carbonate ions, the fundamental building blocks that calcifying marine organisms—such as reef-building corals, mollusks, and microscopic plankton—require to fabricate their protective calcium carbonate shells and structural skeletons.

Without sufficient carbonate concentrations, corals exhibit stunted growth, weakened skeletal density, and accelerated dissolution rates. Because coral reefs sustain approximately twenty-five percent of all marine biodiversity and protect vulnerable coastlines from severe storm erosion, continued acidification threatens catastrophic ecological collapse and endangers coastal fishing economies worldwide.`,
    expectedAnswer: `Ocean acidification occurs when oceans absorb excess atmospheric carbon dioxide, forming carbonic acid and significantly lowering seawater pH. This chemical shift depletes carbonate ions essential for corals and mollusks to construct protective shells. As corals weaken and dissolve, the loss of these vital ecosystems jeopardizes marine biodiversity, coastal storm defense, and global fishing livelihoods.`,
    keywords: [
      'ocean acidification',
      'carbon dioxide',
      'carbonic acid',
      'pH levels',
      'carbonate ions',
      'corals',
      'calcium carbonate',
      'marine biodiversity',
      'calcifying organisms',
      'fisheries'
    ],
    explanation: `Key Lecture Points:
1. Oceans absorb roughly 30% of anthropogenic CO2, causing chemical imbalances.
2. The formation of carbonic acid reduces ocean pH and depletes carbonate ions.
3. Calcifying organisms like corals cannot build or maintain their skeletons and shells.
4. Ecological and economic impacts: collapse of marine habitats that shelter 25% of biodiversity, loss of storm barriers, and threats to commercial fisheries.`
  },
  {
    moduleType: 'listening',
    questionType: 'Summarize Spoken Text',
    title: 'The Evolution of Human Language',
    difficulty: 'Medium',
    content: `Linguists and evolutionary anthropologists have long debated the precise timeline and evolutionary mechanisms that gave rise to complex human speech. While rudimentary vocal communications exist throughout the animal kingdom, human language possesses recursive syntax, symbolic abstraction, and open-ended generative grammar, allowing infinite novel expressions from finite acoustic elements.

Paleoanthropological evidence indicates that anatomical modifications in the human vocal tract, particularly the descent of the larynx and enlargement of the thoracic spinal cord, were critical precursors enabling sophisticated phonetic articulation. Simultaneously, neurological advancements, notably the expansion of Broca's and Wernicke's cortical areas, facilitated symbolic comprehension and speech processing.

Furthermore, genetic discoveries concerning the FOXP2 gene indicate that targeted molecular mutations significantly accelerated linguistic motor control. Ultimately, language was not merely an evolutionary accident; it co-evolved alongside complex social structures, enabling collaborative foraging, generational transmission of tool-making techniques, and the cohesion of early hunter-gatherer societies.`,
    expectedAnswer: `Human language is unique due to its recursive syntax and abstract symbolism, distinguishing it from animal communication. Its emergence resulted from anatomical changes in the vocal tract, neurological development in specialized brain regions, and genetic mutations such as the FOXP2 gene. These adaptations co-evolved with social structures, facilitating cultural transmission, cooperative hunting, and societal cohesion.`,
    keywords: [
      'human language',
      'evolution',
      'syntax',
      'larynx',
      'vocal tract',
      'Broca',
      'Wernicke',
      'FOXP2',
      'social structures',
      'communication'
    ],
    explanation: `Key Lecture Points:
1. Distinctive features of human language: recursive syntax, symbolic abstraction, open-ended grammar.
2. Physical adaptations: descent of the larynx and expanded vocal tract anatomy.
3. Neurological and genetic factors: Broca's/Wernicke's areas and mutations in the FOXP2 gene.
4. Socio-evolutionary context: Co-evolution with cooperative hunting, tool making, and community bonding.`
  },
  {
    moduleType: 'listening',
    questionType: 'Summarize Spoken Text',
    title: 'Urban Heat Islands and Microclimatic Mitigation',
    difficulty: 'Easy',
    content: `The urban heat island effect is an environmental phenomenon where metropolitan regions experience significantly higher atmospheric temperatures than adjacent rural surroundings. This thermal disparity stems primarily from urban geometry and construction materials. Dense concrete pavements, brick buildings, and dark asphalt roadways possess high thermal mass, absorbing intense solar radiation throughout the day and releasing it slowly into the evening air.

In addition, the scarcity of natural vegetation limits evaporative cooling, while concentrated anthropogenic heat emissions from vehicle engines, industrial manufacturing, and residential air conditioning units exacerbate the thermal burden. The consequences include heightened peak energy demands, elevated concentrations of ground-level ozone, and elevated mortality rates during severe summer heatwaves.

To mitigate this urban microclimatic crisis, environmental architects advocate for strategic green infrastructure. Installing reflective 'cool roofs', planting extensive canopy trees along urban corridors, and integrating vertical living gardens substantially reduce surface heat absorption, lowering municipal temperatures and enhancing urban liveability.`,
    expectedAnswer: `Urban heat islands occur when metropolitan areas become much hotter than surrounding rural regions due to heat-absorbing asphalt and concrete, lack of vegetation, and waste heat from air conditioning. This increases energy consumption and health risks during heatwaves. Consequently, urban planners recommend green infrastructure, such as reflective cool roofs and urban tree corridors, to lower temperatures.`,
    keywords: [
      'urban heat island',
      'temperatures',
      'concrete',
      'asphalt',
      'solar radiation',
      'vegetation',
      'evaporative cooling',
      'cool roofs',
      'green infrastructure',
      'mitigation'
    ],
    explanation: `Key Lecture Points:
1. Definition and cause: Metropolitan areas are warmer due to concrete and asphalt absorbing heat.
2. Contributing factors: Lack of plant cover and waste heat from vehicles and air conditioners.
3. Negative outcomes: Surging electricity consumption, smog formation, and health hazards.
4. Solutions: Cool roofs, street trees, and living walls to mitigate heat.`
  },
  {
    moduleType: 'listening',
    questionType: 'Summarize Spoken Text',
    title: 'Artificial Neural Networks and Deep Learning',
    difficulty: 'Hard',
    content: `Artificial neural networks, the structural bedrock of modern deep learning, are computational architectures loosely inspired by the interconnected neuronal pathways of the biological human brain. These systems consist of interconnected processing nodes arranged into sequential layers: an input layer receiving raw sensory data, multiple hidden layers extracting abstract representations, and an output layer predicting classifications.

During the training phase, neural networks adjust synaptic weighting parameters through an optimization algorithm known as backpropagation. By calculating mathematical gradients of the prediction error, the network iteratively refines its internal weights to minimize loss, allowing it to master complex non-linear relationships without explicit rule-based programming.

This deep representation learning has yielded monumental breakthroughs in computer vision, autonomous vehicular navigation, natural language translation, and automated medical radiology. Nonetheless, substantial challenges persist, particularly the 'black box' opacity of deep models, which obscures interpretability, alongside their immense computational requirements and vulnerability to adversarial dataset distortions.`,
    expectedAnswer: `Artificial neural networks are computational models inspired by biological brain neurons, structured in interconnected layers to process data and extract patterns. Through backpropagation, these networks adjust mathematical weights to minimize error, achieving significant advancements in computer vision and natural language processing. However, issues regarding algorithmic opacity, high computational demands, and dataset vulnerabilities continue to pose challenges.`,
    keywords: [
      'artificial neural networks',
      'deep learning',
      'neurons',
      'layers',
      'backpropagation',
      'optimization',
      'computer vision',
      'natural language',
      'black box',
      'opacity'
    ],
    explanation: `Key Lecture Points:
1. Neural networks emulate brain neurons with input, hidden, and output layers.
2. Backpropagation optimizes synaptic weights by minimizing prediction errors.
3. Breakthrough applications in computer vision, robotics, translation, and healthcare.
4. Ongoing challenges: opacity (the black box problem), resource intensity, and vulnerability to noise.`
  },
  {
    moduleType: 'listening',
    questionType: 'Summarize Spoken Text',
    title: 'Memory Consolidation and Slow-Wave Sleep',
    difficulty: 'Medium',
    content: `Cognitive neuroscientists have unraveled the critical role that nocturnal sleep plays in the biological stabilization of newly acquired memories. During waking hours, initial learning experiences are rapidly encoded within the hippocampus, a brain structure that acts as a temporary, finite buffer for daily biographical and declarative information.

However, during deep, slow-wave non-REM sleep, a remarkable neurological process known as memory consolidation takes place. Synchronized low-frequency brain oscillations, called slow waves, coordinate a two-way dialogue between the hippocampus and the neocortex. Under this coordinated rhythm, memory traces are systematically replayed, compressed, and transferred into long-term neocortical storage networks.

This sleep-dependent transfer not only shields fragile memories from subsequent daytime interference, but it also frees up hippocampal capacity for encoding new experiences the following day. Chronic sleep deprivation severely impedes this neural replay, markedly degrading learning efficiency, conceptual integration, and long-term memory retention in students and professionals alike.`,
    expectedAnswer: `Sleep is essential for memory consolidation, transitioning newly acquired knowledge from temporary hippocampal storage to long-term neocortical networks. During slow-wave sleep, synchronized neural oscillations facilitate the replay and stabilization of memories, preventing forgetting and restoring learning capacity. Conversely, sleep deprivation disrupts this transfer process, significantly impairing academic retention, cognitive performance, and daily learning capabilities.`,
    keywords: [
      'memory consolidation',
      'slow-wave sleep',
      'hippocampus',
      'neocortex',
      'oscillations',
      'neural replay',
      'long-term memory',
      'sleep deprivation',
      'declarative memory',
      'cognitive performance'
    ],
    explanation: `Key Lecture Points:
1. The hippocampus serves as a temporary buffer for daytime memory encoding.
2. Slow-wave sleep drives memory consolidation via synchronized neural oscillations.
3. Memories are transferred to the neocortex for permanent, protected storage.
4. Sleep deprivation interrupts this vital neural replay, causing memory deterioration and learning impairment.`
  }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB. Checking existing listening questions...');
    const existing = await Question.find({ moduleType: 'listening', questionType: 'Summarize Spoken Text' });
    console.log(`Found ${existing.length} existing Summarize Spoken Text questions.`);

    let addedCount = 0;
    for (const q of sstQuestions) {
      const found = await Question.findOne({ content: q.content });
      if (!found) {
        await Question.create(q);
        addedCount++;
        console.log(`Added SST question: "${q.title}" (${q.difficulty})`);
      } else {
        console.log(`SST question already exists: "${q.title}"`);
      }
    }
    console.log(`Successfully completed seeding! Added ${addedCount} new questions.`);
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error seeding listening questions:', err);
    process.exit(1);
  });

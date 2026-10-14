const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('./models/Question');

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://linusundaresan_db_user:kgOWInL6QDDj6RpC@ace-english-prod.tnd9kqi.mongodb.net/ptetool';

const writingQuestions = [
  // Summarize Written Text Questions
  {
    moduleType: 'writing',
    questionType: 'Summarize Written Text',
    content: `A boiling liquid expanding vapor explosion (BLEVE) is an explosion caused by the rupture of a vessel containing a pressurized liquid that has reached temperatures above its boiling point at atmospheric pressure. Because the boiling point of a liquid is higher when the liquid is under greater pressure, the liquid inside the tank stays liquefied as long as the vessel remains intact.

However, if the vessel's integrity is compromised—most commonly due to external fire heating the tank and weakening the vessel walls—the pressure drops rapidly. As the pressure decreases, the liquid boils violently and instantaneously flashes into vapor. The sudden expansion produces a shock wave that tears the vessel apart and propels metal fragments outward at tremendous speeds.

If the liquid is flammable, as is often the case with liquefied petroleum gas (LPG) storage tanks, the massive cloud of vapor instantly ignites upon release, creating an enormous fireball. Firefighters are trained to identify the warning signs of an impending BLEVE, which include a rising pitch from the safety relief valve and discoloration of the tank shell, necessitating immediate evacuation.`,
    expectedAnswer: `A boiling liquid expanding vapor explosion occurs when a pressurized container ruptures under extreme heat, causing superheated liquid to flash violently into vapor and resulting in devastating shockwaves and potential fireballs that demand immediate evacuation.`,
    keywords: [
      'boiling liquid expanding vapor explosion',
      'BLEVE',
      'rupture',
      'pressurized liquid',
      'pressure',
      'vapor',
      'fireball',
      'evacuation',
      'vessel',
      'explosion'
    ]
  },
  {
    moduleType: 'writing',
    questionType: 'Summarize Written Text',
    content: `Urban green spaces, such as public parks, rooftop gardens, and tree-lined streets, play a crucial role in mitigating the adverse environmental effects of rapid urbanization. One of the most prominent benefits is the reduction of the urban heat island effect, wherein concrete structures and asphalt roads absorb and retain solar heat, creating significantly higher temperatures compared to surrounding rural areas. Vegetation counteracts this by providing natural shade and cooling the surrounding atmosphere through evapotranspiration.

Beyond temperature regulation, urban vegetation serves as a vital natural filter for air pollutants. Leaves and foliage trap particulate matter like dust and smoke while absorbing harmful gases including nitrogen dioxide and sulfur dioxide. Furthermore, root systems improve stormwater management by absorbing runoff, thereby alleviating pressure on municipal drainage infrastructures during heavy precipitation.

In addition to ecological benefits, numerous psychological studies have demonstrated that regular interaction with green spaces reduces cortisol levels, alleviates mental fatigue, and improves community well-being. Consequently, urban planners increasingly prioritize integrating biodiversity and accessible recreational zones into metropolitan infrastructure designs.`,
    expectedAnswer: `Urban green spaces play an essential role in metropolitan areas by mitigating the heat island effect, filtering air pollutants, managing stormwater runoff, and enhancing the psychological well-being of urban residents.`,
    keywords: [
      'urban green spaces',
      'parks',
      'urban heat island',
      'vegetation',
      'evapotranspiration',
      'air pollutants',
      'stormwater',
      'well-being',
      'urban planners'
    ]
  },
  {
    moduleType: 'writing',
    questionType: 'Summarize Written Text',
    content: `The development of antibiotics in the mid-twentieth century was undoubtedly one of the greatest triumphs in medical history, transforming previously lethal bacterial infections into easily treatable conditions and extending the human lifespan by decades. However, the widespread and indiscriminate use of these antimicrobial agents in human healthcare and agriculture has accelerated the emergence of antibiotic-resistant bacteria, widely referred to as superbugs.

Bacteria possess an extraordinary capacity to adapt to environmental pressures. Through natural selection and horizontal gene transfer, resistant strains survive treatment and multiply, rendering standard therapies ineffective. According to international health agencies, antimicrobial resistance now poses an existential threat to global public health, potentially leading to millions of deaths annually if alternative treatments are not rapidly identified.

Addressing this impending crisis requires a comprehensive, coordinated approach. Governments must enforce stringent regulations to curb the overprescription of antibiotics in clinical practice and outlaw their routine use as growth promoters in livestock. Concurrently, pharmaceutical investments must be revitalized to foster research into novel antimicrobial compounds, phage therapies, and rapid diagnostic technologies.`,
    expectedAnswer: `Although antibiotics revolutionised modern healthcare, the emergence of antimicrobial resistance due to misuse poses a grave global health threat that necessitates stringent regulatory control and urgent investment in innovative therapies.`,
    keywords: [
      'antibiotics',
      'antimicrobial resistance',
      'superbugs',
      'bacteria',
      'overprescription',
      'agriculture',
      'global health',
      'alternative treatments',
      'regulations'
    ]
  },
  {
    moduleType: 'writing',
    questionType: 'Summarize Written Text',
    content: `Artificial intelligence (AI) has rapidly transitioned from theoretical laboratory experiments into practical diagnostic tools within modern healthcare systems. Machine learning algorithms, particularly deep neural networks trained on millions of medical images, can now detect anomalies such as malignant tumors, retinal disease, and pulmonary abnormalities with an accuracy that often rivals or exceeds seasoned radiologists and specialists.

The primary advantage of diagnostic AI lies in its speed and tirelessness. AI systems can process massive volumes of complex radiological scans in fractions of a second, triaging critical emergency cases so patients with life-threatening conditions receive expedited care. Moreover, predictive algorithms analyze electronic health records to forecast patient deterioration hours before clinical symptoms manifest, allowing for preemptive intervention.

Despite these remarkable strides, the integration of AI in medicine faces significant ethical and regulatory hurdles. The 'black box' problem, where clinicians cannot easily interpret how an algorithm derived a specific diagnosis, raises accountability concerns. Furthermore, algorithmic biases stemming from unrepresentative clinical training datasets could exacerbate healthcare disparities, emphasizing that AI should serve as an augmentative tool rather than an autonomous replacement for human practitioners.`,
    expectedAnswer: `While artificial intelligence enhances medical diagnosis through unprecedented speed and accuracy in detecting diseases, unresolved challenges regarding algorithmic transparency, ethical accountability, and clinical bias necessitate that it functions as a supportive tool rather than an independent replacement for doctors.`,
    keywords: [
      'artificial intelligence',
      'diagnostic tools',
      'healthcare',
      'machine learning',
      'radiologists',
      'speed',
      'black box',
      'bias',
      'ethical'
    ]
  },
  {
    moduleType: 'writing',
    questionType: 'Summarize Written Text',
    content: `Honeybees are widely recognized as indispensable ecological cornerstones, responsible for pollinating approximately one-third of the crops consumed by human populations worldwide, including fruits, nuts, vegetables, and commercial seed crops. Their collective foraging behavior ensures botanical genetic diversity and sustains agricultural productivity worth hundreds of billions of dollars annually to the global economy.

In recent years, however, commercial beekeepers and conservation biologists have sounded alarms over Colony Collapse Disorder (CCD), an alarming phenomenon characterized by worker bees abruptly abandoning their hives, leaving behind the queen, food reserves, and immature brood. Researchers have determined that CCD is rarely attributable to a single cause; rather, it stems from a synergistic confluence of environmental stressors.

Chief among these factors is the pervasive application of neonicotinoid pesticides, which impair honeybee navigation, memory, and foraging efficiency. Habitat destruction and monoculture farming practices further deprive bees of varied nutritional forage, weakening their immune defenses and leaving them vulnerable to parasitic mites such as Varroa destructor and viral infections. Protecting these vital pollinators requires reducing chemical pesticide reliance, creating pollinator-friendly floral corridors, and supporting sustainable agroecological methods.`,
    expectedAnswer: `Honeybees play an essential role in global agriculture and biodiversity, but their populations are severely threatened by Colony Collapse Disorder caused by a combination of pesticide exposure, habitat destruction, and parasitic infestations, requiring immediate sustainable conservation practices.`,
    keywords: [
      'honeybees',
      'pollinating',
      'crops',
      'Colony Collapse Disorder',
      'pesticides',
      'neonicotinoids',
      'habitat destruction',
      'parasites',
      'conservation'
    ]
  },

  // Write Essay Questions
  {
    moduleType: 'writing',
    questionType: 'Essay',
    content: `Some people believe that university education should be free for all students, regardless of their financial background. Others argue that students should pay for their tertiary education because the benefits mainly accrue to the individual. Discuss both views and give your own opinion.`,
    expectedAnswer: `Model Outline:
- Introduction: Paraphrase topic; state thesis that tertiary education brings profound national economic benefits and should be state-funded.
- Body Paragraph 1 (Counter-perspective): High earning potential for graduates; burden on taxpayers; potential strain on government budgets.
- Body Paragraph 2 (Primary perspective): Meritocratic access removes socioeconomic barriers; fosters technological innovation and skilled workforce.
- Body Paragraph 3 (Compromise / Depth): Income-contingent repayments or targeted national scholarships.
- Conclusion: Restate thesis with recommendation for publicly supported tertiary education.`,
    keywords: [
      'university education',
      'free education',
      'tuition fees',
      'taxpayers',
      'economic growth',
      'socioeconomic barriers',
      'tertiary',
      'higher learning',
      'government funding',
      'meritocracy'
    ]
  },
  {
    moduleType: 'writing',
    questionType: 'Essay',
    content: `With the rise of artificial intelligence and automated technology, many traditional jobs are disappearing. In your opinion, will artificial intelligence create more opportunities than it destroys, or will it lead to widespread unemployment? Provide reasons and examples to support your viewpoint.`,
    expectedAnswer: `Model Outline:
- Introduction: Introduce the rise of AI and automation; state stance that AI will transform rather than eliminate net labor opportunities, creating new industries.
- Body Paragraph 1: Displacement of routine, manual, and repetitive administrative roles (e.g. data entry, telemarketing).
- Body Paragraph 2: Generation of novel sectors in software development, machine learning maintenance, data ethics, and human-AI collaboration.
- Body Paragraph 3: The essential role of reskilling initiatives and adaptive educational frameworks.
- Conclusion: Reiterate that while short-term displacement is inevitable, long-term societal progress depends on proactive transition management.`,
    keywords: [
      'artificial intelligence',
      'automation',
      'employment',
      'unemployment',
      'job creation',
      'workforce',
      'technological revolution',
      'reskilling',
      'productivity',
      'opportunities'
    ]
  },
  {
    moduleType: 'writing',
    questionType: 'Essay',
    content: `Many developing countries are increasingly relying on tourism as a primary driver of economic growth. Do the advantages of expanding the tourism industry outweigh its disadvantages? Support your opinion with relevant examples.`,
    expectedAnswer: `Model Outline:
- Introduction: Introduce the global expansion of tourism; present position that benefits outweigh drawbacks if managed sustainably.
- Body Paragraph 1: Economic advantages: foreign exchange influx, infrastructure development, local hospitality employment.
- Body Paragraph 2: Disadvantages: environmental degradation, overcrowding, cultural commodification.
- Body Paragraph 3: Sustainable tourism practices as a solution to mitigate drawbacks.
- Conclusion: Summarize main points and recommend balanced, community-centric eco-tourism policies.`,
    keywords: [
      'tourism',
      'economic growth',
      'developing nations',
      'employment',
      'infrastructure',
      'environmental degradation',
      'cultural preservation',
      'sustainability',
      'hospitality'
    ]
  },
  {
    moduleType: 'writing',
    questionType: 'Essay',
    content: `It has become common practice for companies to offer employees the option of remote working. While some praise the flexibility, others argue that remote work undermines teamwork and company culture. Discuss both sides and present your own perspective.`,
    expectedAnswer: `Model Outline:
- Introduction: The shift toward remote and hybrid work models; declare thesis that flexibility enhances productivity while hybrid structures safeguard culture.
- Body Paragraph 1: Benefits of remote work: reduced commute stress, work-life balance, access to global talent pools.
- Body Paragraph 2: Criticisms: isolation, communication friction, erosion of spontaneous innovation and corporate cohesion.
- Body Paragraph 3: The hybrid compromise as the ideal contemporary workplace standard.
- Conclusion: Conclude that adaptable arrangements with regular in-person alignment yield optimal results.`,
    keywords: [
      'remote work',
      'telecommuting',
      'flexibility',
      'productivity',
      'work-life balance',
      'teamwork',
      'collaboration',
      'company culture',
      'hybrid model'
    ]
  },
  {
    moduleType: 'writing',
    questionType: 'Essay',
    content: `Some people argue that technological devices like smartphones and computers have diminished face-to-face communication skills among young people. To what extent do you agree or disagree with this statement?`,
    expectedAnswer: `Model Outline:
- Introduction: Discuss ubiquity of digital communication devices; state strong agreement that interpersonal skills have deteriorated among youths.
- Body Paragraph 1: Replacement of verbal dialogue with instant messaging and emojis leads to weakened empathy, reduced conversational stamina, and inability to read non-verbal cues.
- Body Paragraph 2: Social anxiety in face-to-face contexts and shortened attention spans.
- Body Paragraph 3: Counter-argument acknowledging global connectivity, yet contrasting it with authentic interpersonal competence.
- Conclusion: Reaffirm stance and suggest structured digital detox and communicative education.`,
    keywords: [
      'smartphones',
      'technology',
      'face-to-face communication',
      'interpersonal skills',
      'social media',
      'empathy',
      'young people',
      'digital connectivity',
      'conversation'
    ]
  }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB. Checking existing writing questions...');
    const existing = await Question.find({ moduleType: 'writing' });
    console.log(`Found ${existing.length} existing writing questions.`);
    if (existing.length === 0) {
      await Question.insertMany(writingQuestions);
      console.log(`Successfully seeded ${writingQuestions.length} PTE Writing questions!`);
    } else {
      console.log('Writing questions already present. Adding any missing ones...');
      for (const q of writingQuestions) {
        const found = await Question.findOne({ content: q.content });
        if (!found) {
          await Question.create(q);
          console.log(`Added question: ${q.questionType} - ${q.content.substring(0, 40)}...`);
        }
      }
      console.log('Finished updating writing questions.');
    }
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error seeding writing questions:', err);
    process.exit(1);
  });

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('./models/Question');

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://linusundaresan_db_user:kgOWInL6QDDj6RpC@ace-english-prod.tnd9kqi.mongodb.net/ptetool';

const hcsQuestions = [
  {
    moduleType: 'listening',
    questionType: 'Highlight Correct Summary',
    title: 'Memory Consolidation and Slow-Wave Sleep',
    difficulty: 'Medium',
    content: `When we acquire new declarative information during wakefulness, memories are initially encoded in the hippocampus, a temporary, high-capacity neural buffer. However, these fragile memory traces are highly susceptible to retroactive interference and decay unless they undergo systemic consolidation. Neuroimaging and electrophysiological studies demonstrate that this essential stabilization occurs predominantly during non-rapid eye movement, or slow-wave sleep. During this deep slumber phase, coordinated tripartite oscillations emerge: cortical slow oscillations synchronize with thalamocortical sleep spindles and hippocampal sharp-wave ripples. This precise electrical dialogue drives the active replay and gradual reactivation of newly learned memory ensembles, progressively transferring the informational representations from the hippocampus to distributed neocortical networks for long-term storage. Furthermore, experimental sleep deprivation immediately following learning significantly blunts this synaptic reorganization, producing marked deficits in subsequent recall performance. Therefore, slow-wave sleep serves as an active neurobiological mechanism rather than a passive restorative state for long-term memory fidelity.`,
    prompt: `You will hear a recording. Click on the paragraph that best relates to the recording.`,
    options: [
      `Declarative memories are temporarily stored in the hippocampus during wakefulness and are subsequently consolidated during slow-wave sleep through synchronized neural oscillations that transfer information to neocortical networks for permanent retention, a process impaired by sleep deprivation.`,
      `The hippocampus serves as the brain's sole repository for all declarative memories, which are protected from decay primarily during rapid eye movement sleep through constant synaptic reactivation and emotional dream processing.`,
      `Slow-wave sleep operates as a passive period of neurochemical cleansing where toxic metabolites are flushed from neocortical networks, allowing the hippocampus to store unlimited daytime memories without structural reorganization.`,
      `Although sleep deprivation reduces cognitive alertness during daytime learning, electrophysiological research proves that memory transfer from the thalamus to the neocortex continues unhindered regardless of sleep duration.`
    ],
    expectedAnswer: `Declarative memories are temporarily stored in the hippocampus during wakefulness and are subsequently consolidated during slow-wave sleep through synchronized neural oscillations that transfer information to neocortical networks for permanent retention, a process impaired by sleep deprivation.`,
    explanation: `Detailed Pedagogical Breakdown:

• Why Option A is CORRECT:
Option A accurately captures all foundational points of the lecture: (1) declarative memories initially buffer in the hippocampus, (2) systemic consolidation occurs during slow-wave (non-REM) sleep, (3) synchronized tripartite oscillations transfer information to the neocortex for long-term storage, and (4) sleep deprivation hinders this consolidation.

• Distractor Flaw Analysis:
- Option B is INCORRECT: It falsely claims the hippocampus is the 'sole repository' (the lecture explains memories transfer to the neocortex) and incorrectly attributes consolidation to 'rapid eye movement (REM) sleep' rather than slow-wave sleep.
- Option C is INCORRECT: It characterizes sleep as a 'passive period' and invents 'toxic metabolite flushing' (an extraneous fact from unrelated glymphatic studies), contradicting the speaker's emphasis that sleep is an 'active neurobiological mechanism'.
- Option D is INCORRECT: It states memory transfer proceeds 'unhindered regardless of sleep duration', which directly contradicts the evidence that sleep deprivation produces marked deficits in synaptic reorganization and recall.

Key Academic Collocations:
• declarative memory (explicit recall of facts and events)
• systemic consolidation (reorganization of memory from temporary to permanent brain regions)
• tripartite oscillations (three synchronized electrical wave patterns)
• neocortical networks (outer cerebral cortex responsible for long-term knowledge)

PTE Exam Strategy:
In Highlight Correct Summary, beware of options that substitute related neuroscientific terms (e.g., swapping slow-wave sleep for REM sleep) or introduce extreme claims ('sole repository', 'unhindered regardless of sleep').`
  },
  {
    moduleType: 'listening',
    questionType: 'Highlight Correct Summary',
    title: 'Deep-Sea Hydrothermal Vents and Chemosynthesis',
    difficulty: 'Hard',
    content: `Prior to the serendipitous discovery of deep-sea hydrothermal vents along the Galápagos Rift in 1977, biological dogma asserted that all planetary ecosystems ultimately depended on solar radiation driving photosynthetic energy conversion. The discovery of vibrant benthic communities thriving at abyssal depths of over two thousand meters, plunged in utter darkness and under crushing hydrostatic pressures, shattered this foundational paradigm. Geothermal seawater emerging from tectonic fissures at temperatures exceeding three hundred degrees Celsius is heavily enriched with toxic dissolved minerals, most notably hydrogen sulfide. Rather than perishing in this hostile environment, specialized lithoautotrophic bacteria exploit the chemical bond energy of hydrogen sulfide, oxidizing it to synthesize organic carbon molecules from dissolved carbon dioxide. This process, termed chemosynthesis, forms the primary energetic foundation supporting enormous biomasses of giant hydrothermal tube worms, hydrothermal crabs, and bivalves. Because these organisms host endosymbiotic bacteria within dedicated vascular organs, they flourish completely uncoupled from surface sunlight.`,
    prompt: `You will hear a recording. Click on the paragraph that best relates to the recording.`,
    options: [
      `The discovery of abyssal hydrothermal vent ecosystems overturned the belief that all life relies on solar photosynthesis, revealing that chemosynthetic bacteria utilize hydrogen sulfide to produce organic matter that sustains dense benthic communities.`,
      `Hydrothermal vents in the Galápagos Rift support diverse benthic marine species because extreme hydrostatic pressure accelerates photosynthetic reactions beneath volcanic rock layers.`,
      `Deep-sea tube worms and crabs have adapted to toxic geothermal water by abandoning biological oxidation entirely and consuming inorganic volcanic minerals directly without microbial assistance.`,
      `While vent bacteria oxidize toxic hydrogen sulfide, the overall biomass of hydrothermal communities remains exceptionally sparse because chemical bond energy yields far less metabolic fuel than solar radiation.`
    ],
    expectedAnswer: `The discovery of abyssal hydrothermal vent ecosystems overturned the belief that all life relies on solar photosynthesis, revealing that chemosynthetic bacteria utilize hydrogen sulfide to produce organic matter that sustains dense benthic communities.`,
    explanation: `Detailed Pedagogical Breakdown:

• Why Option A is CORRECT:
Option A encapsulates the core scientific breakthrough: the discovery disproved the paradigm of universal reliance on photosynthesis and demonstrated that chemosynthetic bacteria convert hydrogen sulfide into organic carbon, supporting rich abyssal ecosystems independent of sunlight.

• Distractor Flaw Analysis:
- Option B is INCORRECT: It asserts that deep vents utilize 'accelerated photosynthetic reactions beneath volcanic rock', which is physically impossible in complete darkness and contradicts the definition of chemosynthesis.
- Option C is INCORRECT: It falsely claims vent organisms survive 'without microbial assistance', directly contradicting the speaker's statement that animals depend on endosymbiotic bacteria.
- Option D is INCORRECT: It claims the biomass is 'exceptionally sparse', whereas the lecture specifically notes that vents support 'enormous biomasses' of thriving organisms.

Key Academic Collocations:
• benthic communities (organisms inhabiting the ocean floor)
• lithoautotrophic bacteria (microbes deriving energy from inorganic mineral oxidation)
• endosymbiotic relationship (mutually beneficial internal cellular partnership)
• uncoupled from solar radiation (independent of sunlight-driven energy cycles)

PTE Exam Strategy:
Identify the revolutionary finding or paradigm shift in the opening and closing sentences of the lecture. An accurate summary must reflect both the conceptual impact and the primary biological mechanism.`
  },
  {
    moduleType: 'listening',
    questionType: 'Highlight Correct Summary',
    title: 'Behavioral Economics and Choice Architecture',
    difficulty: 'Medium',
    content: `Traditional neoclassical economic theory presupposes that human beings operate as perfectly rational agents who methodically weigh marginal utility, evaluate all probabilistic outcomes, and execute decisions that optimize their personal well-being. Behavioral economics has thoroughly dismantled this idealized 'Homo economicus' archetype by documenting widespread cognitive biases, heuristic shortcuts, and systemic inertia. A prominent application developed by Richard Thaler and Cass Sunstein is 'choice architecture,' often operationalized through the concept of 'nudging.' Nudge theory posits that subtle alterations in the decision-making environment can predictably steer human behavior without forbidding any choices or altering economic incentives. For example, transitioning employee pension schemes from an 'opt-in' format to an automatic 'opt-out' enrollment default dramatic increased savings participation from forty percent to over ninety percent. Because individuals retain full autonomy to opt out if they desire, choice architecture achieves beneficial social and public policy objectives under the philosophy of libertarian paternalism while preserving individual liberty.`,
    prompt: `You will hear a recording. Click on the paragraph that best relates to the recording.`,
    options: [
      `Behavioral economics challenges neoclassical assumptions of human rationality by showing that choice architecture, such as default opt-out enrollment, can significantly steer positive decisions while maintaining individual freedom.`,
      `Neoclassical economics accurately models retirement planning, but governments must introduce mandatory financial regulations and penalties because voluntary nudging produces negligible behavioral changes.`,
      `Choice architecture restricts individual freedom by legally forcing citizens into automatic pension schemes that completely eliminate the ability to opt out or adjust savings contributions.`,
      `Opt-out default settings have failed to increase pension enrollments because human decision-makers consistently calculate optimal marginal utility regardless of environmental presentation.`
    ],
    expectedAnswer: `Behavioral economics challenges neoclassical assumptions of human rationality by showing that choice architecture, such as default opt-out enrollment, can significantly steer positive decisions while maintaining individual freedom.`,
    explanation: `Detailed Pedagogical Breakdown:

• Why Option A is CORRECT:
Option A articulates both sides of the lecture: the departure from neoclassical rationality and the efficacy of choice architecture/nudging (exemplified by default retirement enrollment), while highlighting the preservation of individual liberty (libertarian paternalism).

• Distractor Flaw Analysis:
- Option B is INCORRECT: It claims nudging produces 'negligible behavioral changes' (contradicting the 40% to 90% jump) and advocates mandatory regulatory penalties, which contradicts the core premise of nudging.
- Option C is INCORRECT: It claims choice architecture 'restricts freedom' and 'completely eliminates the ability to opt out', which is the exact opposite of what the speaker explains ('individuals retain full autonomy to opt out').
- Option D is INCORRECT: It falsely claims opt-out settings 'failed' and that humans consistently calculate optimal marginal utility, which the lecture explicitly refutes.

Key Academic Collocations:
• neoclassical economic theory (traditional framework assuming perfect rationality)
• choice architecture (designing environments in which people make decisions)
• libertarian paternalism (influencing behavior to improve lives while respecting liberty)
• heuristic shortcuts (cognitive rules of thumb prone to systematic bias)

PTE Exam Strategy:
Watch out for 180-degree factual inversions. Distractors often take a key concept (e.g. autonomy / opt-out) and assert that it was eliminated or failed.`
  },
  {
    moduleType: 'listening',
    questionType: 'Highlight Correct Summary',
    title: 'The Neolithic Agricultural Transition and Health Paradox',
    difficulty: 'Hard',
    content: `For decades, the advent of agriculture during the Neolithic Revolution roughly ten thousand years ago was celebrated in popular historical narratives as an unmitigated triumph of human ingenuity that instantaneously liberated humanity from the precarious hardships of foraging. However, modern bioarchaeological investigations and paleopathological analyses of skeletal remains paint a far more paradoxical and sobering reality. When comparing pre-agricultural hunter-gatherer skeletons with early agrarian remains, osteologists observe a marked deterioration across key physiological health indicators. Early farming populations exhibit pronounced increases in linear enamel hypoplasia and porotic hyperostosis, which signal chronic childhood nutritional stress and systemic iron-deficiency anemia. Furthermore, transition from diverse wild game and forage plants to a carbohydrate-heavy monoculture diet dominated by domesticated cereals triggered an explosion in severe dental caries and jaw bone osteomyelitis. Compounding these dietary deficiencies, dense, permanent village settlements living in close proximity to domesticated livestock facilitated the rapid zoonotic transmission of infectious pathogens, resulting in recurrent epidemics and diminished average life expectancies.`,
    prompt: `You will hear a recording. Click on the paragraph that best relates to the recording.`,
    options: [
      `Bioarchaeological evidence reveals that the Neolithic shift to farming, rather than providing immediate improvements in well-being, led to severe nutritional deficiencies, dental decay from carbohydrate monocultures, and increased infectious disease from dense sedentary living.`,
      `The Neolithic Revolution immediately doubled average human life expectancy and eradicated childhood anemia by providing early agrarian communities with stable, diverse animal protein sources.`,
      `Skeletal analyses show that pre-agricultural hunter-gatherers suffered far worse enamel hypoplasia and dental caries than Neolithic farmers because wild forage lacked domesticated cereal grains.`,
      `While early agricultural communities faced minor dental issues, the domestication of livestock completely shielded human populations from infectious zoonotic epidemics through cross-immunity.`
    ],
    expectedAnswer: `Bioarchaeological evidence reveals that the Neolithic shift to farming, rather than providing immediate improvements in well-being, led to severe nutritional deficiencies, dental decay from carbohydrate monocultures, and increased infectious disease from dense sedentary living.`,
    explanation: `Detailed Pedagogical Breakdown:

• Why Option A is CORRECT:
Option A comprehensively captures the central paradox presented in the lecture: bioarchaeological skeletal findings demonstrate that early agriculture brought nutritional deficits (anemia/hypoplasia), dental decay from cereal monocultures, and epidemic disease from dense settlements and livestock proximity.

• Distractor Flaw Analysis:
- Option B is INCORRECT: It asserts that life expectancy 'doubled' and anemia was 'eradicated', which is diametrically opposed to the speaker's findings of diminished life expectancy and elevated iron-deficiency anemia.
- Option C is INCORRECT: It reverses the comparison by claiming hunter-gatherers had worse dental health and enamel defects than farmers.
- Option D is INCORRECT: It claims livestock domestication 'shielded populations from epidemics', whereas the speaker explicitly notes it 'facilitated rapid zoonotic transmission' and recurrent epidemics.

Key Academic Collocations:
• bioarchaeological investigation (study of human biological remains in archaeological contexts)
• linear enamel hypoplasia (developmental defects in teeth indicating physiological stress)
• zoonotic transmission (pathogens jumping between animals and humans)
• carbohydrate-heavy monoculture (farming reliant on single high-starch staple crops)

PTE Exam Strategy:
Pay careful attention to comparative relationships (e.g., hunter-gatherers vs. early farmers). Ensure the summary matches the actual direction of contrast described by the lecturer.`
  },
  {
    moduleType: 'listening',
    questionType: 'Highlight Correct Summary',
    title: 'Mycorrhizal Fungal Networks and Forest Ecology',
    difficulty: 'Easy',
    content: `Beneath the forest floor lies a vast, intricate subterranean network commonly referred to by ecologists as the 'Wood Wide Web.' This mutualistic infrastructure is formed by mycorrhizal fungi whose microscopically thin fungal filaments, or hyphae, infiltrate and wrap around the root systems of forest trees. Through this underground biological internet, disparate trees within a forest ecosystem are physically and biochemically interconnected. The relationship is fundamentally symbiotic: trees provide the fungi with synthesized carbohydrates produced through foliar photosynthesis, while fungi supply trees with otherwise inaccessible soil nutrients, primarily phosphorus and nitrogen, alongside vital moisture. Crucially, research led by forest ecologists demonstrates that this mycorrhizal network does not operate merely for individual trade; it actively redistributes resources from healthy, mature canopy trees to struggling, shaded understory saplings. Furthermore, when a tree is attacked by defoliating insect pests, it transmits biochemical warning signals through the hyphal conduits, prompting neighboring trees to preemptively synthesize toxic defensive compounds.`,
    prompt: `You will hear a recording. Click on the paragraph that best relates to the recording.`,
    options: [
      `Mycorrhizal fungal networks form a subterranean symbiotic system that connects forest trees, facilitating mutual nutrient exchange, resource redistribution to vulnerable saplings, and biochemical warning signals against pest infestations.`,
      `Mycorrhizal fungi act as parasitic organisms that slowly drain vital phosphorus and nitrogen from forest trees, causing widespread defoliation and root rot throughout mature canopy ecosystems.`,
      `Subterranean fungal hyphae prevent neighboring trees from sharing soil moisture and nutrients, thereby fostering aggressive Darwinian competition that limits forest biodiversity.`,
      `While trees supply fungi with photosynthetic sugars, the fungal network is incapable of transmitting biochemical signals or redistributing resources between different tree species.`
    ],
    expectedAnswer: `Mycorrhizal fungal networks form a subterranean symbiotic system that connects forest trees, facilitating mutual nutrient exchange, resource redistribution to vulnerable saplings, and biochemical warning signals against pest infestations.`,
    explanation: `Detailed Pedagogical Breakdown:

• Why Option A is CORRECT:
Option A accurately summarizes the symbiotic nature of mycorrhizal networks: mutual nutrient exchange (sugars for minerals), redistribution of resources to disadvantaged understory saplings, and the transmission of biochemical defense warnings against pests.

• Distractor Flaw Analysis:
- Option B is INCORRECT: It labels fungi as 'parasitic organisms' that cause 'widespread defoliation', directly contradicting the symbiotic (mutualistic) character explained in the lecture.
- Option C is INCORRECT: It asserts that fungi prevent trees from sharing nutrients and foster 'aggressive competition', which is the opposite of the cooperative resource redistribution described.
- Option D is INCORRECT: It claims the network is 'incapable of transmitting biochemical signals', directly contradicting the speaker's account of pest warning transmission.

Key Academic Collocations:
• mycorrhizal fungi (beneficial fungi associating with plant roots)
• mutualistic infrastructure (biological systems providing reciprocal benefits)
• biochemical warning signals (molecular cues alerting neighboring organisms)
• understory saplings (young immature trees growing beneath the canopy)

PTE Exam Strategy:
Summaries of ecological passages frequently test whether you understood if a relationship is cooperative/symbiotic or competitive/parasitic. Eliminate options that mischaracterize biological symbiosis.`
  },
  {
    moduleType: 'listening',
    questionType: 'Highlight Correct Summary',
    title: 'Algorithmic Transparency and AI Governance',
    difficulty: 'Hard',
    content: `As artificial intelligence and machine learning architectures become deeply embedded within critical societal domains—such as credit lending, medical triage, employment screening, and judicial sentencing—the opacity of complex neural networks poses profound ethical and legal challenges. Deep learning models often function as opaque 'black boxes' whose multi-layered parameter weights make it nearly impossible even for their creators to discern the precise causal reasoning underlying a specific automated decision. This lack of algorithmic transparency creates fertile ground for systemic historical biases to be inadvertently reinforced and codified under the guise of computational objectivity. To counteract these risks, computer scientists and legal scholars advocate for the implementation of 'explainable AI' frameworks alongside rigorous statutory governance, such as the European Union's Artificial Intelligence Act. These regulatory measures mandate independent algorithmic auditing, clear lines of human accountability, and the legal 'right to explanation' whenever automated decision systems significantly affect individual civil rights and socioeconomic opportunities.`,
    prompt: `You will hear a recording. Click on the paragraph that best relates to the recording.`,
    options: [
      `The opaque 'black box' nature of deep learning models risks perpetuating hidden algorithmic biases, prompting calls for explainable AI frameworks and regulatory mandates that ensure auditing, accountability, and the right to an explanation.`,
      `Modern neural networks have achieved complete transparency, eliminating societal discrimination in credit scoring and employment decisions without any requirement for regulatory oversight.`,
      `Explainable AI frameworks have been banned by European regulators because independent algorithmic auditing slows down technological innovation in commercial machine learning.`,
      `Judicial sentencing and credit lending systems rely exclusively on human intuition because algorithmic decision systems are legally prohibited from processing personal data.`
    ],
    expectedAnswer: `The opaque 'black box' nature of deep learning models risks perpetuating hidden algorithmic biases, prompting calls for explainable AI frameworks and regulatory mandates that ensure auditing, accountability, and the right to an explanation.`,
    explanation: `Detailed Pedagogical Breakdown:

• Why Option A is CORRECT:
Option A accurately captures both the problem and the proposed remedy: deep learning opacity ('black box') risks entrenching historical biases, which drives the demand for explainable AI and legal frameworks (e.g. EU AI Act) requiring audits, accountability, and explainability.

• Distractor Flaw Analysis:
- Option B is INCORRECT: It claims neural networks have achieved 'complete transparency' and 'eliminated discrimination', the exact opposite of what the speaker warned.
- Option C is INCORRECT: It claims explainable AI was 'banned by European regulators', which directly contradicts the fact that the EU AI Act mandates these exact accountability measures.
- Option D is INCORRECT: It asserts algorithms are 'legally prohibited from processing personal data' and that systems rely exclusively on human intuition, contradicting the entire lecture's discussion of algorithmic deployment in lending and justice.

Key Academic Collocations:
• algorithmic transparency (openness regarding how software decisions are made)
• black-box opacity (inability to view internal causal decision logic)
• explainable AI (methods and techniques that make machine learning outputs interpretable)
• algorithmic auditing (independent evaluation of code for fairness and bias)

PTE Exam Strategy:
In technical/policy lectures, identify the tension (the problem of black-box bias) and the synthesis/solution (explainable AI and governance mandates). The correct summary must integrate both components.`
  },
  {
    moduleType: 'listening',
    questionType: 'Highlight Correct Summary',
    title: 'Gravitational Lensing and Dark Matter Mapping',
    difficulty: 'Hard',
    content: `Although dark matter accounts for roughly eighty-five percent of the total matter in the universe, it emits, absorbs, and reflects zero electromagnetic radiation, making it completely undetectable by conventional optical or radio telescopes. Astrophysicists map its invisible cosmic architecture primarily through gravitational lensing, an observational phenomenon predicted by Albert Einstein's General Theory of Relativity. According to general relativity, mass curves the fabric of spacetime around itself. When light emitted by a distant background galaxy traverses the gravitational field generated by an intervening massive galaxy cluster, the curvature of spacetime bends the trajectories of the incoming photons, acting like a gargantuan cosmic magnifying glass. By measuring the minute tangential shear and distorted gravitational arcs observed in background galactic images, astronomers reconstruct high-resolution, three-dimensional topographical maps of the lensing cluster's invisible mass distribution. These gravitational lensing surveys provide incontrovertible empirical evidence for the existence of cold dark matter and illuminate the vast cosmic web that underpins large-scale galactic evolution.`,
    prompt: `You will hear a recording. Click on the paragraph that best relates to the recording.`,
    options: [
      `Because dark matter does not interact with light, astronomers rely on gravitational lensing—the spacetime curvature induced by massive clusters that bends background photons—to map the invisible distribution of dark matter across cosmic scales.`,
      `Dark matter can now be observed directly through high-powered optical and radio telescopes due to recent advances in electromagnetic radiation amplification.`,
      `Gravitational lensing disproves Einstein's Theory of General Relativity by demonstrating that photons travel in absolute straight lines regardless of nearby gravitational mass.`,
      `While gravitational lensing magnifies distant background galaxies, it cannot provide any quantitative data regarding the topographical location or mass of invisible matter.`
    ],
    expectedAnswer: `Because dark matter does not interact with light, astronomers rely on gravitational lensing—the spacetime curvature induced by massive clusters that bends background photons—to map the invisible distribution of dark matter across cosmic scales.`,
    explanation: `Detailed Pedagogical Breakdown:

• Why Option A is CORRECT:
Option A precisely summarizes the physical challenge (dark matter emits no light) and the gravitational solution (Einsteinian spacetime curvature bending photons into distorted arcs to map the invisible cosmic mass distribution).

• Distractor Flaw Analysis:
- Option B is INCORRECT: It claims dark matter can be 'observed directly through optical and radio telescopes', which contradicts the foundational premise that it emits/reflects zero electromagnetic radiation.
- Option C is INCORRECT: It states gravitational lensing 'disproves General Relativity' and that photons travel in straight lines, which is completely untrue.
- Option D is INCORRECT: It claims gravitational lensing 'cannot provide quantitative data', directly contradicting the fact that astronomers use it to reconstruct high-resolution 3D maps.

Key Academic Collocations:
• gravitational lensing (bending of light paths around massive celestial objects)
• general theory of relativity (Einstein's geometric theory of gravitation)
• spacetime curvature (warping of space and time by mass-energy)
• invisible mass distribution (spatial layout of non-luminous matter)

PTE Exam Strategy:
Pay special attention to introductory paradoxes: "Although X cannot be detected directly, scientists map it through Y." The correct summary will consistently bridge this relationship.`
  },
  {
    moduleType: 'listening',
    questionType: 'Highlight Correct Summary',
    title: 'Urban Heat Island Effect and Biophilic Architecture',
    difficulty: 'Easy',
    content: `Metropolitan areas across the globe experience significantly higher ambient temperatures than surrounding rural landscapes, a climatological phenomenon termed the Urban Heat Island effect. This thermal elevation is driven primarily by the replacement of natural vegetated land cover with dense impervious surfaces—such as asphalt roadways, concrete pavements, and masonry buildings—which exhibit low albedo and high thermal mass. During daylight hours, these artificial materials absorb enormous quantities of solar radiation, slowly releasing thermal energy into the urban boundary layer throughout the night. To combat this urban overheating, urban planners and architects are increasingly adopting biophilic design principles. Incorporating extensive green roofs covered in sedum plants enhances natural evapotranspiration, which cools localized air temperatures and cuts building air conditioning energy consumption by up to twenty percent. Furthermore, strategically planting continuous shade tree canopies and applying high-albedo reflective coatings to building envelopes reduces surface temperatures and dramatically mitigates pedestrian heat stress during extreme heatwaves.`,
    prompt: `You will hear a recording. Click on the paragraph that best relates to the recording.`,
    options: [
      `The Urban Heat Island effect, caused by the absorption of solar heat by impervious concrete and asphalt surfaces, can be effectively mitigated through biophilic interventions like green roofs, reflective coatings, and urban tree canopies.`,
      `Biophilic architecture has proven ineffective at lowering metropolitan temperatures because reflective roof coatings absorb more thermal radiation than traditional asphalt.`,
      `The Urban Heat Island effect is caused primarily by excessive tree canopy cover in city centers, which traps nighttime humidity and prevents wind ventilation.`,
      `While green roofs reduce stormwater runoff, they have zero impact on ambient urban temperatures or building cooling energy demands.`
    ],
    expectedAnswer: `The Urban Heat Island effect, caused by the absorption of solar heat by impervious concrete and asphalt surfaces, can be effectively mitigated through biophilic interventions like green roofs, reflective coatings, and urban tree canopies.`,
    explanation: `Detailed Pedagogical Breakdown:

• Why Option A is CORRECT:
Option A succinctly summarizes the cause of the Urban Heat Island effect (solar absorption by concrete and asphalt) and the multi-pronged biophilic solutions (green roofs, reflective coatings, and street tree canopies).

• Distractor Flaw Analysis:
- Option B is INCORRECT: It claims biophilic architecture is 'ineffective' and that reflective coatings absorb more heat, which contradicts the stated cooling benefits.
- Option C is INCORRECT: It absurdly blames 'excessive tree canopy cover' for causing the Urban Heat Island effect.
- Option D is INCORRECT: It claims green roofs have 'zero impact' on ambient temperatures or cooling demands, directly contradicting the 20% air conditioning reduction mentioned in the recording.

Key Academic Collocations:
• urban heat island effect (metropolitan thermal elevation compared to rural surroundings)
• impervious surfaces (artificial materials that prevent water penetration and store heat)
• biophilic design principles (incorporating nature into built urban environments)
• evapotranspiration (natural process cooling air through plant water evaporation)

PTE Exam Strategy:
Summaries of environmental passages must balance cause (impervious materials absorbing solar heat) and solution (biophilic interventions like green roofs). Look for the option that links both without exaggerating or falsifying data.`
  }
];

const seedHCS = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('Connected successfully to MongoDB.');

    let addedCount = 0;
    let existingCount = 0;

    for (const q of hcsQuestions) {
      const existing = await Question.findOne({
        moduleType: 'listening',
        questionType: 'Highlight Correct Summary',
        title: q.title
      });

      if (!existing) {
        await Question.create(q);
        addedCount++;
        console.log(`+ Added HCS Question: "${q.title}" (${q.difficulty})`);
      } else {
        existingCount++;
        console.log(`= HCS Question already exists: "${q.title}"`);
      }
    }

    console.log(`\nSeeding Complete! Added: ${addedCount}, Existing: ${existingCount}, Total: ${hcsQuestions.length}`);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding Highlight Correct Summary questions:', error);
    process.exit(1);
  }
};

seedHCS();

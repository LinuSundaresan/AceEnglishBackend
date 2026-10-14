const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('./models/Question');

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://linusundaresan_db_user:kgOWInL6QDDj6RpC@ace-english-prod.tnd9kqi.mongodb.net/ptetool';

const listeningMCMAQuestions = [
  {
    moduleType: 'listening',
    questionType: 'Multiple Choice, Multiple Answers',
    title: 'Exoplanetary Atmospheres and Biosignatures',
    difficulty: 'Medium',
    content: `Recent developments in transit transmission spectroscopy have transformed our ability to characterize the atmospheres of exoplanets. When an exoplanet passes in front of its host star, a minute fraction of the starlight filters through the planet's atmospheric fringes. Atmospheric constituents, such as methane, water vapor, and carbon dioxide, absorb light at discrete, characteristic wavelengths, creating distinctive absorption spectra that astronomers can decode from terrestrial and orbital observatories. However, identifying definitive biosignatures—gaseous markers unambiguously produced by biological processes rather than abiotic geological activity—remains a daunting challenge. For instance, while atmospheric methane was previously heralded as a strong bio-indicator, planetary geochemists have demonstrated that hydrothermal serpentinization reactions and volcanic outgassing can yield substantial methane reservoirs in completely sterile planetary environments. Consequently, astrobiologists emphasize that no single gas can serve as a smoking gun; instead, researchers require simultaneous detection of multiple gases in pronounced thermodynamic disequilibrium, such as the co-occurrence of methane and molecular oxygen, alongside thorough atmospheric modeling of stellar radiation.`,
    prompt: `Which TWO of the following statements are supported by the speaker regarding exoplanet research?`,
    options: [
      `Methane detection alone is no longer considered conclusive proof of extraterrestrial life.`,
      `Transit transmission spectroscopy measures light emitted directly by exoplanets rather than starlight.`,
      `Abiotic geological processes can generate significant quantities of atmospheric methane.`,
      `Serpentinization reactions occur only on planets with confirmed active volcanism.`,
      `Terrestrial observatories have been completely replaced by space-based spectroscopic telescopes.`
    ],
    expectedAnswers: [
      `Methane detection alone is no longer considered conclusive proof of extraterrestrial life.`,
      `Abiotic geological processes can generate significant quantities of atmospheric methane.`
    ],
    explanation: `Option Analysis & Audio Evidence:
• Option A is CORRECT: The speaker states that 'while atmospheric methane was previously heralded as a strong bio-indicator... astrobiologists emphasize that no single gas can serve as a smoking gun'.
• Option B is INCORRECT: The spectroscopy measures 'starlight filtering through the planet's atmospheric fringes', not light emitted directly by exoplanets.
• Option C is CORRECT: The lecture notes that 'hydrothermal serpentinization reactions and volcanic outgassing can yield substantial methane reservoirs in completely sterile planetary environments'.
• Option D is INCORRECT: Serpentinization and volcanism are listed as distinct abiotic processes; the lecture does not say serpentinization requires volcanism.
• Option E is INCORRECT: The speaker specifies that data is decoded from both 'terrestrial and orbital observatories', meaning ground telescopes remain essential.

Key Vocabulary & Collocations:
• transit transmission spectroscopy (astrophysical optical method)
• biosignature (chemical indicator of biological activity)
• abiotic geological activity (non-living physical and chemical planetary processes)
• thermodynamic disequilibrium (state indicating ongoing metabolic replenishing)`
  },
  {
    moduleType: 'listening',
    questionType: 'Multiple Choice, Multiple Answers',
    title: 'The Bronze Age Collapse in the Eastern Mediterranean',
    difficulty: 'Hard',
    content: `Around 1200 BCE, the sophisticated, interconnected civilizations of the Late Bronze Age Aegean and Near East—including the Mycenaeans of Greece, the Hittite Empire in Anatolia, and the New Kingdom of Egypt—suffered a catastrophic systemic collapse. Within a span of barely half a century, grand palatial centers were violently burned, centralized administrative bureaucracies dissolved, and widespread literacy in Linear B and cuneiform vanished. Early twentieth-century historians predominantly attributed this rapid disintegration to sudden invasions by enigmatic seafaring raiders collectively dubbed the 'Sea Peoples'. Modern archaeological excavations and paleoclimatic studies, however, present a far more nuanced, multi-causal model known as 'systems collapse'. High-resolution sediment cores and speleothem data reveal that a prolonged megadrought gripped the eastern Mediterranean for over a century, precipitating widespread agricultural failure and severe famine. This ecological distress was compounded by disruptions in vital maritime trade routes that supplied tin and copper necessary for bronze smelting. Furthermore, internal peasant rebellions and frequent seismic activity created cascading societal vulnerabilities, rendering these tightly centralized states incapable of absorbing external military shocks.`,
    prompt: `Which TWO factors are highlighted by modern researchers as contributing to the systemic collapse of Bronze Age civilizations?`,
    options: [
      `A prolonged regional megadrought that triggered severe agricultural failures.`,
      `The widespread adoption of iron weaponry replacing bronze before 1200 BCE.`,
      `The disruption of critical maritime supply routes for essential bronze smelting metals.`,
      `The total permanent disappearance of farming populations across the Mediterranean.`,
      `Exclusive military invasions carried out by nomadic horse tribes from Central Asia.`
    ],
    expectedAnswers: [
      `A prolonged regional megadrought that triggered severe agricultural failures.`,
      `The disruption of critical maritime supply routes for essential bronze smelting metals.`
    ],
    explanation: `Option Analysis & Audio Evidence:
• Option A is CORRECT: The speaker highlights that 'a prolonged megadrought gripped the eastern Mediterranean for over a century, precipitating widespread agricultural failure and severe famine'.
• Option B is INCORRECT: The passage does not claim iron weaponry replaced bronze prior to 1200 BCE.
• Option C is CORRECT: The lecture states ecological distress was 'compounded by disruptions in vital maritime trade routes that supplied tin and copper necessary for bronze smelting'.
• Option D is INCORRECT: Peasant populations revolted and suffered, but they did not permanently disappear from the entire Mediterranean.
• Option E is INCORRECT: Invasions by the 'Sea Peoples' were seafaring, not nomadic horse riders, and modern researchers favor a multi-causal model over singular external invasion.

Key Vocabulary & Collocations:
• systems collapse (interlocking societal and ecological breakdown)
• paleoclimatic data (historical climate information derived from ice or sediment)
• speleothem data (mineral deposits in caves used for dating past climates)
• cascading vulnerabilities (interdependent weaknesses magnifying disaster)`
  },
  {
    moduleType: 'listening',
    questionType: 'Multiple Choice, Multiple Answers',
    title: 'Urban Microclimates and Biophilic Architecture',
    difficulty: 'Easy',
    content: `Modern urbanization has drastically transformed local microclimates through the phenomenon known as the Urban Heat Island effect. Massive expanses of asphalt, concrete, and masonry absorb daytime solar radiation and re-radiate thermal energy throughout the night, driving ambient temperatures in city cores up to five to ten degrees Celsius higher than neighboring rural peripheries. To counter this intensifying thermal burden, architects and city planners are adopting biophilic design principles. Two key architectural interventions have demonstrated measurable success. First, extensive green roofs vegetated with drought-tolerant succulent plants utilize evapotranspiration to actively cool ambient air while lowering building HVAC energy consumption by up to twenty-five percent. Second, high-albedo reflective roof coatings and permeable urban pavements bounce incoming solar irradiance back into the atmosphere before heat can be retained. Additionally, integrating vertical vegetated facades and continuous street-tree canopies has been shown to reduce pedestrian heat stress and dramatically mitigate localized stormwater runoff during severe precipitation events.`,
    prompt: `According to the lecture, which TWO benefits are associated with implementing green roofs and biophilic architecture in metropolitan areas?`,
    options: [
      `Significant reduction in building cooling energy expenditure.`,
      `Total elimination of nighttime thermal radiation from asphalt roads.`,
      `Substantial mitigation of localized stormwater runoff during heavy rain.`,
      `Complete elimination of the need for permeable paving materials in road construction.`,
      `An immediate doubling of retail foot traffic in downtown shopping districts.`
    ],
    expectedAnswers: [
      `Significant reduction in building cooling energy expenditure.`,
      `Substantial mitigation of localized stormwater runoff during heavy rain.`
    ],
    explanation: `Option Analysis & Audio Evidence:
• Option A is CORRECT: The speaker mentions green roofs 'utilize evapotranspiration to actively cool ambient air while lowering building HVAC energy consumption by up to twenty-five percent'.
• Option B is INCORRECT: Green roofs reduce thermal burdens, but asphalt roadways still absorb heat; the word 'total elimination' is an extreme distractor.
• Option C is CORRECT: The speaker notes that vegetated facades and tree canopies 'dramatically mitigate localized stormwater runoff during severe precipitation events'.
• Option D is INCORRECT: The lecture advocates for permeable pavements, not eliminating them.
• Option E is INCORRECT: Retail foot traffic is never discussed in the context of biophilic interventions.

Key Vocabulary & Collocations:
• urban heat island effect (metropolitan thermal elevation)
• evapotranspiration (water loss from plants cooling local atmosphere)
• high-albedo coatings (reflective materials with high solar reflectance)
• biophilic design (integrating natural elements into human-built spaces)`
  },
  {
    moduleType: 'listening',
    questionType: 'Multiple Choice, Multiple Answers',
    title: 'Cognitive Reserve and Neuroplasticity in Aging',
    difficulty: 'Medium',
    content: `For decades, clinical neurologists were puzzled by post-mortem examinations showing extensive Alzheimer's-type neuropathology—such as amyloid plaques and neurofibrillary tangles—in the brains of elderly individuals who had demonstrated sharp, unimpaired cognitive performance right up until death. This clinical paradox led to the formulation of the 'cognitive reserve' hypothesis. Cognitive reserve refers to the brain's resilience and capacity to improvise, adapt, and recruit alternate neural pathways when confronting age-related physiological damage. Longitudinal neuroimaging studies demonstrate that cognitive reserve is not fixed genetically; rather, it is actively cultivated across a person's lifespan. Sustained engagement in intellectually demanding occupations, bilingualism, continuous education, and active social interaction foster denser synaptic connectivity and functional redundancy in the prefrontal cortex. As a result, when standard neuronal networks suffer localized degradation, individuals with high cognitive reserve effortlessly detour neural signals through compensatory circuits, effectively postponing the clinical onset of dementia symptoms for several years.`,
    prompt: `Which TWO conclusions can be drawn from the speaker's discussion of cognitive reserve?`,
    options: [
      `Observable cognitive impairment does not always match the physical degree of brain pathology.`,
      `Cognitive reserve is determined entirely at birth and cannot be enhanced through adult habits.`,
      `Engaging in intellectually complex activities and bilingualism helps delay the onset of dementia symptoms.`,
      `Amyloid plaques and neurofibrillary tangles dissolve completely in highly educated individuals.`,
      `The prefrontal cortex ceases all synaptic activity when alternate neural circuits are recruited.`
    ],
    expectedAnswers: [
      `Observable cognitive impairment does not always match the physical degree of brain pathology.`,
      `Engaging in intellectually complex activities and bilingualism helps delay the onset of dementia symptoms.`
    ],
    explanation: `Option Analysis & Audio Evidence:
• Option A is CORRECT: The speaker describes the paradox of post-mortem examinations revealing 'extensive neuropathology... in individuals who had demonstrated sharp, unimpaired cognitive performance'.
• Option B is INCORRECT: The speaker explicitly clarifies that cognitive reserve is 'not fixed genetically; rather, it is actively cultivated across a person's lifespan'.
• Option C is CORRECT: The lecture states 'intellectually demanding occupations, bilingualism... foster denser synaptic connectivity... effectively postponing the clinical onset of dementia symptoms'.
• Option D is INCORRECT: Plaques and tangles remain physically present; cognitive reserve provides compensatory routing, not biochemical dissolution.
• Option E is INCORRECT: The prefrontal cortex retains functional redundancy rather than halting synaptic activity.

Key Vocabulary & Collocations:
• cognitive reserve (neurocognitive resilience to structural brain damage)
• neurofibrillary tangles (pathological protein accumulations in neurons)
• functional redundancy (spare neural capacity that can duplicate lost functions)
• compensatory neural circuits (alternative pathways activated to circumvent damaged areas)`
  },
  {
    moduleType: 'listening',
    questionType: 'Multiple Choice, Multiple Answers',
    title: 'Deep-Sea Hydrothermal Vents and Chemosynthesis',
    difficulty: 'Hard',
    content: `Prior to the serendipitous discovery of hydrothermal vents along the Galápagos Rift in 1977, biological dogma asserted that virtually all complex life on Earth was fundamentally dependent on solar energy harnessed through photosynthetic primary production. Hydrothermal ecosystems shattered this paradigm. Located kilometers beneath the ocean surface in perpetual darkness and under crushing hydrostatic pressure, these volcanic vents spew mineral-laden hydrothermal fluid reaching temperatures exceeding four hundred degrees Celsius. Despite these extreme conditions, dense communities of giant tube worms, blind shrimp, and vent crabs thrive around the chimneys. The foundational energy base sustaining these prolific ecosystems is driven entirely by chemotrophic bacteria. These extremophiles utilize chemosynthesis, oxidizing toxic dissolved hydrogen sulfide and methane emitted by the vents to synthesize organic compounds without a single photon of sunlight. Furthermore, many higher organisms have evolved obligate symbiotic relationships with these bacteria. For instance, the giant tube worm Riftia pachyptila lacks a mouth, gut, or digestive tract entirely, instead relying exclusively on billions of endosymbiotic sulfur-oxidizing bacteria harbored within a specialized internal organ called the trophosome.`,
    prompt: `Which TWO statements accurately describe the biological characteristics of hydrothermal vent ecosystems?`,
    options: [
      `Primary biological energy is produced by bacteria through chemical oxidation rather than sunlight.`,
      `Giant tube worms consume sulfur bacteria using specialized external tentacles and digestive tracts.`,
      `The fluid emitted from hydrothermal chimneys never exceeds fifty degrees Celsius.`,
      `Certain resident marine organisms possess neither mouth nor gut, relying on internal symbiotic bacteria.`,
      `Hydrothermal vents validated the classical theory that all complex life requires solar photosynthesis.`
    ],
    expectedAnswers: [
      `Primary biological energy is produced by bacteria through chemical oxidation rather than sunlight.`,
      `Certain resident marine organisms possess neither mouth nor gut, relying on internal symbiotic bacteria.`
    ],
    explanation: `Option Analysis & Audio Evidence:
• Option A is CORRECT: The speaker explains that chemotrophic bacteria 'utilize chemosynthesis, oxidizing toxic dissolved hydrogen sulfide and methane... without a single photon of sunlight'.
• Option B is INCORRECT: Giant tube worms lack any digestive tract whatsoever; they do not ingest bacteria through tentacles.
• Option C is INCORRECT: The speaker notes the fluids reach 'temperatures exceeding four hundred degrees Celsius'.
• Option D is CORRECT: The lecture highlights that the giant tube worm 'lacks a mouth, gut, or digestive tract entirely, instead relying exclusively on billions of endosymbiotic sulfur-oxidizing bacteria harbored within a specialized internal organ called the trophosome'.
• Option E is INCORRECT: The discovery 'shattered this paradigm', disproving that all complex life requires sunlight.

Key Vocabulary & Collocations:
• chemosynthesis (biological synthesis of organic compounds using inorganic chemical energy)
• hydrothermal vent (fissure in planetary surface releasing geothermally heated water)
• endosymbiotic bacteria (symbionts living within host tissues or organs)
• trophosome (specialized organ housing symbiotic sulfur bacteria in vestimentiferan tube worms)`
  },
  {
    moduleType: 'listening',
    questionType: 'Multiple Choice, Multiple Answers',
    title: 'The Behavioral Economics of Nudge Theory',
    difficulty: 'Medium',
    content: `Traditional neoclassical economic theory presupposed that humans are rational actors—the hypothetical 'Homo economicus'—who consistently compute expected utility to make optimal financial and personal decisions. However, empirical behavioral economics has systematically demonstrated that human cognition is constrained by cognitive biases, heuristics, and mental inertia. In response, economists Richard Thaler and Cass Sunstein introduced 'Nudge Theory' under the philosophical framework of 'libertarian paternalism'. A nudge alters the choice architecture—the physical or digital environment in which choices are presented—to predictably steer people's behavior toward beneficial outcomes without forbidding any options or altering economic incentives. A prime real-world application is automatic enrollment in workplace retirement savings plans. Under opt-in schemes, employee participation languished around forty percent due to procrastination. When organizations switched to default automatic enrollment with an easy opt-out mechanism, participation surged past ninety percent. Critics sometimes raise ethical concerns regarding paternalistic manipulation and transparency; nevertheless, behavioral insight teams worldwide have successfully deployed nudges in public health campaigns, tax compliance, and organ donation registration.`,
    prompt: `Which TWO features distinguish 'nudges' according to behavioral economic principles?`,
    options: [
      `They modify how choices are arranged without prohibiting alternative decisions.`,
      `They mandate heavy financial penalties and taxes to guarantee compliance.`,
      `They require citizens to undergo formal economic utility assessments before deciding.`,
      `They leverage default choices to overcome procrastination and psychological inertia.`,
      `They have been banned by public administration bodies due to transparency issues.`
    ],
    expectedAnswers: [
      `They modify how choices are arranged without prohibiting alternative decisions.`,
      `They leverage default choices to overcome procrastination and psychological inertia.`
    ],
    explanation: `Option Analysis & Audio Evidence:
• Option A is CORRECT: A nudge 'alters the choice architecture... to predictably steer people's behavior toward beneficial outcomes without forbidding any options or altering economic incentives'.
• Option B is INCORRECT: Nudges explicitly do not rely on financial penalties or altering economic incentives.
• Option C is INCORRECT: No formal utility tests are required for citizens.
• Option D is CORRECT: The speaker illustrates how automatic default enrollment surged participation from 40% to 90% by overcoming procrastination and mental inertia.
• Option E is INCORRECT: Nudges have not been banned; behavioral teams 'worldwide have successfully deployed nudges in public health campaigns, tax compliance, and organ donation'.

Key Vocabulary & Collocations:
• choice architecture (the contextual presentation and ordering of available options)
• libertarian paternalism (guiding choices for welfare while retaining full individual freedom to opt out)
• default effect (tendency to stick with the pre-set option due to mental inertia)
• opt-in vs opt-out (mechanisms requiring active registration vs automatic inclusion)`
  }
];

const listeningMCSAQuestions = [
  {
    moduleType: 'listening',
    questionType: 'Multiple Choice, Single Answer',
    title: 'The James Webb Space Telescope and Infrared Astronomy',
    difficulty: 'Medium',
    content: `The James Webb Space Telescope represents an unprecedented technological leap in observational astrophysics. Unlike its predecessor Hubble, which operated primarily across ultraviolet and optical wavelengths, Webb observes predominantly in the near- and mid-infrared spectrum. This deliberate spectral choice is crucial for two principal reasons. First, because the universe is expanding at an accelerating rate, light emitted by the very earliest stars and protogalaxies over thirteen billion years ago has undergone cosmological redshift, stretching the original visible wavelengths into the longer infrared regime. Second, infrared radiation possesses the physical capability to penetrate the dense, opaque clouds of interstellar gas and cosmic dust that envelop stellar nurseries. By peering through these cosmic dust veils, Webb enables astronomers to directly witness the embryonic birth of protoplanetary disks and the earliest structural assembly of galaxies in the infant universe.`,
    prompt: `What is the primary reason the James Webb Space Telescope was designed specifically to observe infrared radiation?`,
    options: [
      `To shield its primary mirrors from extreme temperature variations caused by direct solar radiation.`,
      `To capture ancient light stretched by cosmological redshift and penetrate opaque interstellar dust.`,
      `To drastically reduce construction and launch expenditures compared with optical observatories.`,
      `To maintain an orbit closer to Earth while avoiding atmospheric moisture interference.`
    ],
    expectedAnswer: `To capture ancient light stretched by cosmological redshift and penetrate opaque interstellar dust.`,
    explanation: `Option Analysis & Audio Evidence:
• Option B is CORRECT: The speaker explains two key reasons: first, light from the earliest stars 'has undergone cosmological redshift, stretching the original visible wavelengths into the longer infrared regime'; second, 'infrared radiation possesses the physical capability to penetrate the dense, opaque clouds of interstellar gas and cosmic dust'.
• Option A is INCORRECT: The infrared focus is for scientific observation of distant objects, not mirror protection.
• Option C is INCORRECT: Cost reduction is not mentioned and Webb was historically more complex and expensive.
• Option D is INCORRECT: Webb is stationed far from Earth at the L2 Lagrange point, not in low Earth orbit.

Key Vocabulary & Collocations:
• cosmological redshift (wavelength elongation due to cosmic expansion)
• stellar nurseries (molecular gas clouds where new stars coalesce)
• protoplanetary disks (rotating circumstellar matter forming planetary systems)`
  },
  {
    moduleType: 'listening',
    questionType: 'Multiple Choice, Single Answer',
    title: 'Supply Chain Bullwhip Effect in Global Logistics',
    difficulty: 'Hard',
    content: `In operations management, the 'bullwhip effect' describes a systemic supply chain phenomenon where minor fluctuations in end-consumer retail demand generate progressively larger and wildly distorted swings in demand forecasts upstream at the wholesale, distributor, and manufacturing tiers. Imagine a retail store experiences a temporary five percent spike in consumer demand for a beverage. Anticipating future shortages, the retailer orders ten percent more from the regional distributor. The distributor, observing this surge and wanting safety buffer stock, orders twenty percent more from the manufacturer. Finally, the manufacturer orders raw materials expecting a massive thirty percent market expansion. This distortion is primarily fueled by lack of supply chain transparency, delayed information sharing, batched order processing, and panic rationing. To alleviate the bullwhip effect, leading global enterprises are transitioning to vendor-managed inventory and real-time point-of-sale data integration, ensuring that all supply chain tiers synchronize their production with actual consumer consumption rather than lagging intermediary estimates.`,
    prompt: `According to the speaker, what is the fundamental cause of the bullwhip effect in supply networks?`,
    options: [
      `Sudden geopolitical trade tariffs imposed on essential raw materials.`,
      `Magnified upstream order distortions driven by delayed information and safety buffer stockpiling.`,
      `A permanent decline in overall consumer purchasing power across retail sectors.`,
      `Physical bottlenecks and mechanical breakdowns at major international maritime shipping ports.`
    ],
    expectedAnswer: `Magnified upstream order distortions driven by delayed information and safety buffer stockpiling.`,
    explanation: `Option Analysis & Audio Evidence:
• Option B is CORRECT: The speaker defines the bullwhip effect as minor fluctuations generating 'progressively larger and wildly distorted swings in demand forecasts upstream' caused by 'lack of supply chain transparency, delayed information sharing... and panic rationing'.
• Option A is INCORRECT: Tariffs are never mentioned as the cause of this behavioral forecasting phenomenon.
• Option C is INCORRECT: The distortion occurs regardless of whether baseline demand goes up or down.
• Option D is INCORRECT: Physical port equipment failures are external physical constraints, whereas the bullwhip effect is an informational and behavioral dynamic.

Key Vocabulary & Collocations:
• bullwhip effect (demand forecast distortion amplifying upstream)
• point-of-sale integration (real-time checkout scanning data transmitted to suppliers)
• safety buffer stock (extra inventory retained to mitigate stockout risks)`
  },
  {
    moduleType: 'listening',
    questionType: 'Multiple Choice, Single Answer',
    title: 'Crows, Tool Use, and Avian Cognition',
    difficulty: 'Easy',
    content: `For generations, tool fabrication and sophisticated causal reasoning were considered unique hallmarks that separated Homo sapiens from the rest of the animal kingdom. However, comparative ethologists studying New Caledonian crows have radically overturned this human-centric belief. In laboratory experiments, these corvids routinely demonstrate meta-tool use—selecting a short stick to retrieve a longer stick that is subsequently used to reach a piece of food. Even more impressively, crows have displayed the spontaneous capacity to bend straight pliable wire into functional hooks to extract grub from deep vertical cylinders, an insight requiring deliberate causal foresight rather than trial-and-error conditioning. Neurologists attribute this cognitive flexibility to the avian nidopallium, a densely packed forebrain structure that performs executive functions analogous to the mammalian prefrontal cortex, proving that complex intelligence evolved along distinct evolutionary lineages.`,
    prompt: `What does the speaker's discussion of New Caledonian crows demonstrate about animal intelligence?`,
    options: [
      `Avian tool use is strictly driven by rote trial-and-error conditioning without cognitive understanding.`,
      `Corvids possess deliberate causal reasoning, foresight, and advanced tool fabrication abilities.`,
      `Birds require direct visual imitation of human handlers in order to modify unfamiliar materials.`,
      `Complex intelligence can only evolve in organisms possessing an expanded mammalian prefrontal cortex.`
    ],
    expectedAnswer: `Corvids possess deliberate causal reasoning, foresight, and advanced tool fabrication abilities.`,
    explanation: `Option Analysis & Audio Evidence:
• Option B is CORRECT: The lecture highlights that crows demonstrate 'meta-tool use', bend wire into hooks with 'deliberate causal foresight rather than trial-and-error conditioning', and display executive functions.
• Option A is INCORRECT: The speaker explicitly rejects trial-and-error conditioning as the sole explanation.
• Option C is INCORRECT: The experiments tested 'spontaneous capacity' without human demonstration.
• Option D is INCORRECT: The speaker shows the avian nidopallium performs executive functions 'analogous to the mammalian prefrontal cortex', proving intelligence evolved along distinct pathways.

Key Vocabulary & Collocations:
• meta-tool use (using a tool to acquire another tool)
• causal foresight (anticipating physical outcomes before taking action)
• avian nidopallium (forebrain structure responsible for avian executive functioning)`
  },
  {
    moduleType: 'listening',
    questionType: 'Multiple Choice, Single Answer',
    title: 'The Tragedy of the Commons and Sustainable Resource Governance',
    difficulty: 'Medium',
    content: `In 1968, ecologist Garrett Hardin published his seminal essay 'The Tragedy of the Commons', positing that individuals acting independently and rationally according to their own self-interest will inevitably deplete and spoil shared, finite natural resources—such as open pastures, fisheries, and clean atmosphere. Hardin argued that the only viable remedies were either strict centralized state regulation or complete privatization of the commons. However, political economist Elinor Ostrom, who was later awarded the Nobel Prize in Economic Sciences, challenged Hardin's rigid dichotomy through decades of fieldwork across Swiss alpine meadows, Spanish irrigation networks, and Turkish coastal fisheries. Ostrom demonstrated that local communities frequently establish robust, self-governing institutions that successfully manage common-pool resources sustainably without top-down government mandates or private property rights, provided there are clear community boundaries, collective decision-making, and graduated sanctions for non-compliance.`,
    prompt: `What was Elinor Ostrom's primary critique of Garrett Hardin's 'Tragedy of the Commons' model?`,
    options: [
      `She argued that common-pool natural resources are limitless and immune to human overexploitation.`,
      `She demonstrated that local user communities can effectively govern shared resources without state control or privatization.`,
      `She claimed that nationalization by centralized state bureaucracies is the only fair conservation method.`,
      `She asserted that commercial privatization always produces superior ecological outcomes compared to communal management.`
    ],
    expectedAnswer: `She demonstrated that local user communities can effectively govern shared resources without state control or privatization.`,
    explanation: `Option Analysis & Audio Evidence:
• Option B is CORRECT: The speaker states Ostrom 'demonstrated that local communities frequently establish robust, self-governing institutions that successfully manage common-pool resources sustainably without top-down government mandates or private property rights'.
• Option A is INCORRECT: Ostrom did not claim resources are limitless; she studied how finite resources are conserved.
• Option C is INCORRECT: State nationalization was Hardin's proposal, which Ostrom showed was not the only option.
• Option D is INCORRECT: Ostrom challenged the claim that privatization was necessary.

Key Vocabulary & Collocations:
• common-pool resources (shared natural assets prone to rivalry and depletion)
• self-governing institutions (community-managed rule-making bodies)
• graduated sanctions (proportionate penalties that increase with repeated infractions)`
  },
  {
    moduleType: 'listening',
    questionType: 'Multiple Choice, Single Answer',
    title: 'Quantum Computing and Superposition',
    difficulty: 'Hard',
    content: `Classical computing architecture is built upon the deterministic manipulation of bits, which represent information strictly as binary states of either zero or one. In contrast, quantum computers harness the counterintuitive principles of quantum mechanics, utilizing quantum bits, or 'qubits'. Due to the physical principle of superposition, a qubit is not confined to being either a zero or a one; instead, it can exist in a linear combination of both states simultaneously until an observation or measurement is performed. When multiple qubits are coupled through quantum entanglement, the computational capacity scales exponentially rather than linearly with each added qubit. Consequently, quantum algorithms like Shor's algorithm for prime factorization and Grover's algorithm for unstructured database searches can solve specialized, intractable mathematical problems in seconds that would require classical supercomputers thousands of years to compute.`,
    prompt: `What fundamental physical property allows quantum computers to perform certain calculations exponentially faster than classical computers?`,
    options: [
      `The replacement of silicon semiconductors with high-voltage superconducting transformers.`,
      `The ability of qubits to exist in superposition states and undergo quantum entanglement.`,
      `The elimination of algorithmic programming languages in favor of analog continuous signals.`,
      `The continuous storage of permanent data without requiring cryogenic cooling systems.`
    ],
    expectedAnswer: `The ability of qubits to exist in superposition states and undergo quantum entanglement.`,
    explanation: `Option Analysis & Audio Evidence:
• Option B is CORRECT: The speaker explains that 'due to the physical principle of superposition, a qubit... can exist in a linear combination of both states simultaneously' and 'when multiple qubits are coupled through quantum entanglement, the computational capacity scales exponentially'.
• Option A is INCORRECT: The distinction is fundamentally quantum mechanical, not merely higher electrical voltage.
• Option C is INCORRECT: Quantum computers use specialized quantum algorithms (e.g. Shor's and Grover's algorithms).
• Option D is INCORRECT: Cryogenic cooling is actually required for most quantum hardware, and permanent storage is not the speed advantage cited.

Key Vocabulary & Collocations:
• superposition (quantum property of existing across multiple states concurrently)
• quantum entanglement (non-local physical correlation between interconnected particles)
• intractable mathematical problems (problems requiring excessive computational time classically)`
  },
  {
    moduleType: 'listening',
    questionType: 'Multiple Choice, Single Answer',
    title: 'The Circadian Clock in Plants and Photoperiodism',
    difficulty: 'Medium',
    content: `Just like mammals, terrestrial plants possess sophisticated endogenous circadian clocks that coordinate physiological processes with day-night cycles. This temporal synchronization is particularly evident in photoperiodism—the biological response of an organism to seasonal changes in the relative lengths of light and dark periods. In angiosperms, specialized photoreceptor proteins, such as phytochromes that detect red and far-red light, inform the circadian mechanism whether the day is lengthening or shortening. This molecular clock controls the precise seasonal timing of flowering, starch storage degradation at night to prevent starvation before dawn, and stomatal opening for gas exchange. By anticipating predictable daily and seasonal transitions rather than merely reacting to environmental changes post facto, plants maximize their photosynthetic efficiency and ensure reproductive success.`,
    prompt: `What is the primary evolutionary advantage of the circadian clock in terrestrial plants?`,
    options: [
      `It enables plants to proactively anticipate seasonal and daily changes rather than simply reacting after they occur.`,
      `It allows angiosperms to produce flowers continuously regardless of seasonal daylight duration.`,
      `It enables plants to absorb carbon dioxide and perform photosynthesis in complete darkness at night.`,
      `It completely prevents herbivorous insects from feeding on foliage throughout the year.`
    ],
    expectedAnswer: `It enables plants to proactively anticipate seasonal and daily changes rather than simply reacting after they occur.`,
    explanation: `Option Analysis & Audio Evidence:
• Option A is CORRECT: The speaker explicitly states: 'By anticipating predictable daily and seasonal transitions rather than merely reacting to environmental changes post facto, plants maximize their photosynthetic efficiency and ensure reproductive success.'
• Option B is INCORRECT: The clock controls precise *seasonal* timing of flowering based on photoperiodism, not continuous non-stop flowering.
• Option C is INCORRECT: Plants cannot photosynthesize in complete darkness; they degrade stored starch at night to prevent starvation.
• Option D is INCORRECT: Pest prevention is not stated as the primary evolutionary role.

Key Vocabulary & Collocations:
• photoperiodism (developmental response to the length of daylight versus darkness)
• phytochromes (photoreceptor pigments sensitive to red and far-red light)
• post facto (after the fact / purely reactive)`
  }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB. Seeding Listening MCMA & MCSA Questions...');

    // Seed MCMA
    let mcmaAdded = 0;
    for (const q of listeningMCMAQuestions) {
      const existing = await Question.findOne({
        moduleType: 'listening',
        questionType: q.questionType,
        title: q.title
      });
      if (!existing) {
        await Question.create(q);
        mcmaAdded++;
        console.log(`+ Added MCMA Question: "${q.title}" (${q.difficulty})`);
      } else {
        console.log(`= MCMA Question already exists: "${q.title}"`);
      }
    }

    // Seed MCSA
    let mcsaAdded = 0;
    for (const q of listeningMCSAQuestions) {
      const existing = await Question.findOne({
        moduleType: 'listening',
        questionType: q.questionType,
        title: q.title
      });
      if (!existing) {
        await Question.create(q);
        mcsaAdded++;
        console.log(`+ Added MCSA Question: "${q.title}" (${q.difficulty})`);
      } else {
        console.log(`= MCSA Question already exists: "${q.title}"`);
      }
    }

    console.log(`Seeding Complete! Added ${mcmaAdded} MCMA questions and ${mcsaAdded} MCSA questions.`);
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error seeding questions:', err);
    process.exit(1);
  });

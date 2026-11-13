export type AccentKey = 'cyan' | 'pink' | 'violet' | 'orange';

export interface RoboticsCategory {
  id: string;
  name: string;
  accent: AccentKey;
  statusLabel: string;
  shortDescription: string;
  fullDescription: string;
  challengeFocus: string[];
  technicalSpecs: Array<{ label: string; value: string }>;
  participationNotes: string;
  glyphType: 'combat' | 'industrial' | 'aerial' | 'underwater' | 'ground' | 'ai';
}

export interface MissionTrack {
  id: string;
  playerSlot: string;
  codeName: string;
  name: string;
  categoryTag: string;
  isReferenceExample: boolean;
  difficulty: 'Entry' | 'Intermediate' | 'Advanced' | 'Configurable';
  accent: AccentKey;
  shortDescription: string;
  overview: string;
  objective: string;
  requirements: string[];
  challenges: string[];
  rules: string[];
  completionCriteria: string[];
  hardwareSummary: string;
}

export interface GameLevel {
  id: number;
  code: string;
  title: string;
  subtitle: string;
  accent: AccentKey;
  defaultProgress: number;
  defaultStatus: 'Unlocked' | 'In Progress' | 'Locked';
  summary: string;
  deliverables: string[];
  achievementTitle: string;
}

export interface TimelineMilestone {
  id: string;
  phase: string;
  title: string;
  dateLabel: string;
  summary: string;
  details: string[];
  accent: AccentKey;
}

export interface LeaderboardEntry {
  rank: number;
  teamName: string;
  playerLead: string;
  trackCategory: 'Gesture-Controlled' | 'Maze Navigation' | 'Autonomous Systems';
  completedMissions: number;
  totalMissions: number;
  achievementStatus: string;
  score: number;
}

export interface RuleGroup {
  id: string;
  title: string;
  summary: string;
  statusNote: string;
  items: string[];
}

export interface ContactCoordinator {
  id: string;
  name: string;
  role: string;
  department: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  accent: AccentKey;
}

export const EVENT_CONFIG = {
  brandName: 'SpecteQ',
  editionYear: '2027',
  fullTitle: 'SPECTEQ 2027',
  subtitle: 'THE BOT COMPETITION',
  tagline: 'BUILD. BATTLE. DOMINATE.',
  heroDescription:
    'Enter the ultimate robotics arena. Learn, experiment, engineer your machines, and compete to achieve the highest score.',
  venuePlaceholder: 'Coastal Robotics Convention Center · Venue TBD (2027)',
  datesPlaceholder: '2027 Season Schedule · Dates Configurable',
  organizerPlaceholder: 'SpecteQ Robotics Organizing Committee',
  queryFormUrlPlaceholder: '#register',
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Instagram', href: '#contact' },
    { label: 'LinkedIn', href: '#contact' },
    { label: 'Discord', href: '#contact' },
  ],
};

export const JOURNEY_STAGES = [
  {
    id: 'learn',
    step: '01',
    title: 'Learn',
    specteqTerm: 'Training Missions',
    description:
      'Players onboard into Level 01 workshops covering embedded microcontrollers, sensor fusion, wireless protocols, and motor control.',
  },
  {
    id: 'build',
    step: '02',
    title: 'Build',
    specteqTerm: 'Player Build',
    description:
      'Gaming Teams unlock their hardware chassis in Level 02, integrate sensors, and flash custom firmware for their selected mission.',
  },
  {
    id: 'test',
    step: '03',
    title: 'Test',
    specteqTerm: 'Scrutiny & Calibration',
    description:
      'Teams calibrate control loops, run obstacle trials, and validate hardware compliance ahead of arena qualification.',
  },
  {
    id: 'compete',
    step: '04',
    title: 'Compete',
    specteqTerm: 'The Robotics Arena',
    description:
      'Qualified bots enter Level 03 — Final Boss matches to climb the High Score Leaderboard and earn Champion Player honors.',
  },
];

export const PDF_VOCABULARY_MAP = [
  { standard: 'Participants', specteq: 'Players' },
  { standard: 'Teams', specteq: 'Gaming Teams' },
  { standard: 'Workshops', specteq: 'Missions' },
  { standard: 'Learning Stages', specteq: 'Levels' },
  { standard: 'Project Completion', specteq: 'Mission Complete' },
  { standard: 'Final Competition', specteq: 'The Robotics Arena' },
  { standard: 'Winners', specteq: 'High Score Champions' },
];

export const ROBOTICS_CATEGORIES: RoboticsCategory[] = [
  {
    id: 'combat-robotics',
    name: 'Combat Robotics',
    accent: 'pink',
    statusLabel: 'Category Terminal · Configurable 2027 Track',
    shortDescription:
      'High-torque kinetic engineering, reinforced chassis fabrication, and tactical arena control systems.',
    fullDescription:
      'Combat Robotics challenges Gaming Teams to engineer durable, responsive electromechanical platforms built for controlled head-to-head arena encounters. Exact weight classes and weapon/kinetic safety limits for 2027 remain configurable pending the official rulebook.',
    challengeFocus: [
      'Structural impact resilience and armor geometry',
      'High-current brushless drivetrain and thermal management',
      'Low-latency radio link fail-safes and emergency kill switches',
    ],
    technicalSpecs: [
      { label: 'Weight Class', value: 'TBD — 2027 Official Spec' },
      { label: 'Power Bus', value: 'Configurable (LiPo Safety Mandatory)' },
      { label: 'Control Link', value: '2.4 GHz Failsafe Required' },
    ],
    participationNotes:
      'Participation guidelines and scrutiny inspection checklists will be published prior to Level 02 hardware lock.',
    glyphType: 'combat',
  },
  {
    id: 'industrial-automation',
    name: 'Industrial Automation',
    accent: 'orange',
    statusLabel: 'Category Terminal · Configurable 2027 Track',
    shortDescription:
      'Precision pick-and-place manipulators, conveyor synchronization, and repeatable kinematic accuracy.',
    fullDescription:
      'Industrial Automation focuses on multi-axis motion control, actuator repeatability, and automated material handling workflows modeled on modern smart factories.',
    challengeFocus: [
      'Inverse kinematics and multi-DOF arm calibration',
      'Object sorting using optical or proximity sensing',
      'Cycle-time optimization under strict repeatability tolerances',
    ],
    technicalSpecs: [
      { label: 'Actuation', value: 'Servo / Stepper Closed-Loop (TBD)' },
      { label: 'Payload Target', value: 'TBD — 2027 Official Spec' },
      { label: 'Interface', value: 'Onboard Microcontroller / PLC' },
    ],
    participationNotes:
      'Teams complete guided actuator training missions before attempting automated sorting trials.',
    glyphType: 'industrial',
  },
  {
    id: 'aerial-robotics',
    name: 'Aerial Robotics',
    accent: 'cyan',
    statusLabel: 'Category Terminal · Configurable 2027 Track',
    shortDescription:
      'Stabilized flight controllers, optical flow hovering, and autonomous waypoint navigation.',
    fullDescription:
      'Aerial Robotics explores vertical flight dynamics, PID attitude stabilization, and constrained indoor/arena obstacle traversal using compact multi-rotor airframes.',
    challengeFocus: [
      'IMU sensor fusion and flight attitude tuning',
      'Propeller guard safety and lightweight frame design',
      'Precision landing pad detection and gate traversal',
    ],
    technicalSpecs: [
      { label: 'Airframe Class', value: 'Micro / Ducted Arena Frame (TBD)' },
      { label: 'Flight Zone', value: 'Netted Arena Enclosure' },
      { label: 'Autonomy Level', value: 'Assisted or Full Autonomous (TBD)' },
    ],
    participationNotes:
      'All aerial builds require mandatory prop-guard certification during Level 02 inspection.',
    glyphType: 'aerial',
  },
  {
    id: 'underwater-robotics',
    name: 'Underwater Robotics',
    accent: 'violet',
    statusLabel: 'Category Terminal · Configurable 2027 Track',
    shortDescription:
      'Waterproof pressure housings, neutral buoyancy trim, and hydrodynamic thruster control.',
    fullDescription:
      'Underwater Robotics introduces marine engineering principles including sealed electronics enclosures, tethered or untethered thruster vectoring, and submerged task manipulation.',
    challengeFocus: [
      'IP68 enclosure sealing and leak-detection telemetry',
      'Buoyancy balancing and 3-axis thruster mixing',
      'Submerged ring retrieval or beacon alignment',
    ],
    technicalSpecs: [
      { label: 'Environment', value: 'Test Tank / Aquatic Bay (TBD)' },
      { label: 'Sealing Standard', value: 'Pressure-Tested Hull Required' },
      { label: 'Tether / Power', value: 'TBD — 2027 Official Spec' },
    ],
    participationNotes:
      'Dry-bench waterproofing verification is mandatory before any tank immersion test.',
    glyphType: 'underwater',
  },
  {
    id: 'autonomous-ground',
    name: 'Autonomous Ground Systems',
    accent: 'cyan',
    statusLabel: 'Category Terminal · Core Reference Domain',
    shortDescription:
      'Sensor-guided rovers, maze pathfinding algorithms, and gesture-driven wireless mobility.',
    fullDescription:
      'Autonomous Ground Systems anchors the core SpecteQ participant journey — bridging microcontroller fundamentals, ultrasonic/IR sensor arrays, wireless gesture links, and algorithmic maze navigation.',
    challengeFocus: [
      'Real-time wall detection and path-planning logic',
      'Wireless transmitter-to-rover gesture interpretation',
      'Closed-loop wheel odometry and obstacle avoidance',
    ],
    technicalSpecs: [
      { label: 'Reference Examples', value: 'Gesture Car & Maze Robot' },
      { label: 'Compute', value: 'Onboard Microcontroller Only' },
      { label: 'Arena Footprint', value: 'Configurable 2027 Track Spec' },
    ],
    participationNotes:
      'Ideal entry pathway for Level 01 Training Missions and Level 02 Bot Unlocking.',
    glyphType: 'ground',
  },
  {
    id: 'ai-intelligent-systems',
    name: 'AI & Intelligent Systems',
    accent: 'pink',
    statusLabel: 'Category Terminal · Configurable 2027 Track',
    shortDescription:
      'Edge computer vision, adaptive decision pipelines, and real-time environmental perception.',
    fullDescription:
      'AI & Intelligent Systems merges embedded robotics hardware with lightweight machine learning inference on edge accelerators for visual tracking, gesture classification, and adaptive strategy.',
    challengeFocus: [
      'Low-latency vision pipelines on edge compute boards',
      'Real-time classification of arena markers or gestures',
      'Sensor fusion combining vision with inertial feedback',
    ],
    technicalSpecs: [
      { label: 'Compute Target', value: 'Edge AI / Embedded SBC (TBD)' },
      { label: 'Inference Mode', value: 'Local Onboard Execution Only' },
      { label: 'Telemetry', value: 'Offline Verification During Trials' },
    ],
    participationNotes:
      'Cloud offloading is restricted in standard arena rounds unless explicitly stated in 2027 rules.',
    glyphType: 'ai',
  },
];

export const MISSION_TRACKS: MissionTrack[] = [
  {
    id: 'mission-gesture-car',
    playerSlot: 'PLAYER 01',
    codeName: 'CONTROL THE MACHINE',
    name: 'Gesture-Controlled Car',
    categoryTag: 'Reference Mission · Autonomous Ground Systems',
    isReferenceExample: true,
    difficulty: 'Entry',
    accent: 'cyan',
    shortDescription:
      'Control your robotic car with hand gestures. Learn wireless links, accelerometers, and responsive motor control.',
    overview:
      'From the SpecteQ event concept document: participants build a robotic vehicle that interprets hand-tilt gestures via a wearable transmitter and translates them into smooth, accurate multi-directional driving.',
    objective:
      'Complete the designated obstacle driving course using reliable wireless gesture-based control.',
    requirements: [
      'Wearable hand-gesture transmitter unit with IMU / accelerometer sensing (PDF reference concept)',
      'Onboard microcontroller and wireless RF/transceiver link to the rover chassis',
      'Dual-channel motor driver controlling differential or four-wheel drive',
      'Confirmed 2027 chassis dimensions and battery cap: [TBD — Pending 2027 Rulebook]',
    ],
    challenges: [
      'Forward and backward throttle modulation',
      'Crisp left and right steering response without signal jitter',
      'Accurate gesture threshold calibration to prevent false triggers',
      'Navigating slalom cones and tight corners on the arena obstacle course',
    ],
    rules: [
      'Only gesture-based wireless input is permitted during official runs (no standard RC joysticks).',
      'Hardware must pass Level 02 wiring and battery safety inspection.',
      'Exact course lap limits and penalty seconds: [TBD — 2027 Official Spec].',
    ],
    completionCriteria: [
      'Demonstrate calibrated forward, reverse, left, and right gesture states',
      'Maintain stable wireless link across full arena length',
      'Cross the finish gate within the qualifying time window',
    ],
    hardwareSummary: 'IMU Gesture Glove · Wireless Transceiver · Motor Driver · 4WD/2WD Chassis',
  },
  {
    id: 'mission-pacman-maze',
    playerSlot: 'PLAYER 02',
    codeName: 'ESCAPE THE MAZE',
    name: 'PAC-MAN Maze Robot',
    categoryTag: 'Reference Mission · Autonomous Navigation',
    isReferenceExample: true,
    difficulty: 'Intermediate',
    accent: 'pink',
    shortDescription:
      'Navigate a sensor-guided maze challenge inspired by classic arcade labyrinths. Plan a path and reach the finish.',
    overview:
      'From the SpecteQ event concept document: Gaming Teams engineer an autonomous maze-solving robot capable of detecting walls, avoiding dead ends, and executing a programmed navigation strategy from start cell to target exit.',
    objective:
      'Complete the arena maze challenge autonomously using onboard sensors and programmed pathfinding.',
    requirements: [
      'Onboard distance/wall-detection sensors (ultrasonic, ToF, or IR array)',
      'Autonomous microcontroller executing maze-solving logic (wall-follow, flood-fill, or A*)',
      'Compact turning radius suited to arena corridor widths',
      'Confirmed 2027 maze grid dimensions and run timer: [TBD — Pending 2027 Rulebook]',
    ],
    challenges: [
      'Reliable maze-wall detection under arena lighting conditions',
      'Path planning and junction decision-making without external guidance',
      'Dynamic obstacle avoidance and dead-end recovery',
      'Minimizing total traversal time on the final scored run',
    ],
    rules: [
      'Robot must operate 100% autonomously once placed at the starting gate.',
      'No manual remote intervention or offboard computation allowed during scored runs.',
      'Wall-contact penalties and retry allowances: [TBD — 2027 Official Spec].',
    ],
    completionCriteria: [
      'Detect left, front, and right corridor walls accurately',
      'Navigate autonomously from start node to designated exit zone',
      'Record an official verified run in The Robotics Arena',
    ],
    hardwareSummary: 'Sensor Array · Autonomous MCU · Encoder Motors · Compact Maze Chassis',
  },
  {
    id: 'mission-2027-custom',
    playerSlot: 'PLAYER 03',
    codeName: '2027 CONFIRMED TRACK SLOT',
    name: '2027 Championship Track (Configurable)',
    categoryTag: '2027 Expansion Slot · Editable Data Schema',
    isReferenceExample: false,
    difficulty: 'Configurable',
    accent: 'violet',
    shortDescription:
      'Dedicated data-driven mission slot prepared for newly confirmed SpecteQ 2027 competition categories.',
    overview:
      'SpecteQ 2027 supports modular mission packs across Combat Robotics, Industrial Automation, Aerial, Underwater, and Edge AI. This slot is intentionally left unfabricated until 2027 organizers lock official problem statements.',
    objective:
      '[TBD — Official 2027 Problem Statement to be published by the SpecteQ Organizing Committee.]',
    requirements: [
      'Configurable hardware envelope [TBD — 2027 Official Spec]',
      'Level 01 Training Mission completion prerequisite',
      'Mandatory Level 02 safety and firmware scrutiny pass',
    ],
    challenges: [
      'Challenge parameters will populate directly from the centralized mission configuration',
      'Arena scoring weights and qualification heats [TBD — 2027 Official Spec]',
    ],
    rules: [
      'Governed by the SpecteQ 2027 General Participation and Safety Standards.',
      'Track-specific rules pending final organizer confirmation.',
    ],
    completionCriteria: [
      'Complete onboarding and team verification',
      'Pass technical inspection prior to Robotics Arena entry',
    ],
    hardwareSummary: 'Configurable Platform · Modular Sensor Bay · 2027 Official Spec Pending',
  },
];

export const GAME_LEVELS: GameLevel[] = [
  {
    id: 0,
    code: 'LEVEL 00',
    title: 'INSERT COIN',
    subtitle: 'Player Registration & Onboarding',
    accent: 'cyan',
    defaultProgress: 100,
    defaultStatus: 'Unlocked',
    summary:
      'Every participant enters SpecteQ as a Player. Register your Gaming Team, choose your initial mission track, and receive your Player ID credentials to begin the journey.',
    deliverables: [
      'Submit player & Gaming Team roster',
      'Select preferred robotics mission track',
      'Receive onboarding packet and workshop schedule',
    ],
    achievementTitle: 'Coin Inserted · Player Onboarded',
  },
  {
    id: 1,
    code: 'LEVEL 01',
    title: 'TRAINING',
    subtitle: 'Learn the Game · Training Missions',
    accent: 'violet',
    defaultProgress: 65,
    defaultStatus: 'In Progress',
    summary:
      'Workshops are transformed into hands-on Training Missions. Master microcontroller fundamentals, sensor calibration, wireless links, and motor driver circuits.',
    deliverables: [
      'Complete electronics & firmware fundamentals mission',
      'Calibrate sensor inputs and actuator response',
      'Pass basic bench-test checkpoint to unlock build phase',
    ],
    achievementTitle: 'Level 01 Cleared · Systems Trained',
  },
  {
    id: 2,
    code: 'LEVEL 02',
    title: 'BUILD',
    subtitle: 'Unlock Your Bot · Player Build',
    accent: 'pink',
    defaultProgress: 30,
    defaultStatus: 'Locked',
    summary:
      'Transition from training bench to real engineering. Assemble your robot chassis, integrate sensors, flash autonomous or gesture control firmware, and verify Mission Complete.',
    deliverables: [
      'Assemble mechanical chassis and power distribution',
      'Flash and tune mission control algorithms',
      'Pass hardware scrutiny and pre-arena test trials',
    ],
    achievementTitle: 'Bot Unlocked · Mission Complete',
  },
  {
    id: 3,
    code: 'LEVEL 03',
    title: 'FINAL BOSS',
    subtitle: 'Enter The Robotics Arena',
    accent: 'orange',
    defaultProgress: 0,
    defaultStatus: 'Locked',
    summary:
      'The ultimate showdown. Deploy your engineered machine inside The Robotics Arena, compete in timed heats and knockout rounds, and claim High Score Champion status.',
    deliverables: [
      'Complete official arena qualification heat',
      'Compete in Final Boss arena challenges',
      'Log official High Score on the SpecteQ Leaderboard',
    ],
    achievementTitle: 'High Score Champion',
  },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: 't1',
    phase: 'Phase 01',
    title: 'Registration',
    dateLabel: 'Date TBD · 2027 Season Open',
    summary: 'Player and Gaming Team registration opens across all announced mission tracks.',
    details: [
      'Solo or Gaming Team sign-ups (team size configurable per 2027 rules)',
      'Initial mission track selection and organizer confirmation',
    ],
    accent: 'cyan',
  },
  {
    id: 't2',
    phase: 'Phase 02',
    title: 'Player Onboarding',
    dateLabel: 'Date TBD · Level 00 Briefing',
    summary: 'Official kickoff briefing, rulebook walkthrough, and Player ID issuance.',
    details: [
      'Mission briefing and safety orientation',
      'Kit distribution / hardware specification confirmation',
    ],
    accent: 'violet',
  },
  {
    id: 't3',
    phase: 'Phase 03',
    title: 'Training Missions',
    dateLabel: 'Date TBD · Level 01 Workshops',
    summary: 'Guided interactive workshops covering sensors, embedded code, and motor control.',
    details: [
      'Hands-on microcontroller and sensor lab sessions',
      'Mentor office hours for firmware debugging',
    ],
    accent: 'pink',
  },
  {
    id: 't4',
    phase: 'Phase 04',
    title: 'Robot Development',
    dateLabel: 'Date TBD · Level 02 Build Sprint',
    summary: 'Gaming Teams fabricate, wire, and program their competition bots.',
    details: [
      'Chassis assembly, wiring, and power system integration',
      'Control loop tuning and autonomous strategy iteration',
    ],
    accent: 'orange',
  },
  {
    id: 't5',
    phase: 'Phase 05',
    title: 'Testing & Scrutiny',
    dateLabel: 'Date TBD · Pre-Arena Check',
    summary: 'Dry-run arena practice, hardware compliance checks, and calibration.',
    details: [
      'Dimensions, battery safety, and wireless link inspection',
      'Practice runs on official calibration tracks',
    ],
    accent: 'cyan',
  },
  {
    id: 't6',
    phase: 'Phase 06',
    title: 'Final Robotics Arena',
    dateLabel: 'Date TBD · Level 03 Main Event',
    summary: 'Live qualification heats and Final Boss competition inside The Robotics Arena.',
    details: [
      'Time trials, maze runs, and head-to-head finals',
      'Live leaderboard scoring by official marshals',
    ],
    accent: 'pink',
  },
  {
    id: 't7',
    phase: 'Phase 07',
    title: 'Results & Awards',
    dateLabel: 'Date TBD · Closing Ceremony',
    summary: 'High Score Champions crowned and Achievement Unlocked honors awarded.',
    details: [
      'Top Gaming Teams recognized on the official Hall of Champions',
      'Certificates and engineering awards presented',
    ],
    accent: 'orange',
  },
];

export const ARENA_ZONES = [
  {
    id: 'zone-scrutiny',
    zoneLabel: 'Zone 01 · Pit Bay & Scrutiny',
    title: 'Hardware Calibration & Safety Gate',
    description:
      'Every bot undergoes pre-match voltage, chassis dimension, and wireless failsafe verification before entering the active arena floor.',
    specs: 'Mandatory Inspection · Calibration Bench Access',
  },
  {
    id: 'zone-qualifiers',
    zoneLabel: 'Zone 02 · Qualification Circuit',
    title: 'Timed Trials & Mission Scoring',
    description:
      'Gaming Teams execute scored runs across designated mission obstacles or maze corridors to seed into the championship bracket.',
    specs: 'Timed Precision Runs · Marshal Verified',
  },
  {
    id: 'zone-finals',
    zoneLabel: 'Zone 03 · Final Boss Stage',
    title: 'Championship Showdown',
    description:
      'Top-seeded machines face escalated arena challenges for the highest score and the SpecteQ 2027 High Score Champion title.',
    specs: 'Finals Bracket · High Score Crown',
  },
];

export const DEMO_LEADERBOARD: LeaderboardEntry[] = [
  {
    rank: 1,
    teamName: 'Neon Vector',
    playerLead: 'Demo Team A',
    trackCategory: 'Maze Navigation',
    completedMissions: 4,
    totalMissions: 4,
    achievementStatus: 'High Score Champion (Demo)',
    score: 2840,
  },
  {
    rank: 2,
    teamName: 'Bayside Pulse',
    playerLead: 'Demo Team B',
    trackCategory: 'Gesture-Controlled',
    completedMissions: 4,
    totalMissions: 4,
    achievementStatus: 'Mission Complete (Demo)',
    score: 2690,
  },
  {
    rank: 3,
    teamName: 'Oceanic Servo',
    playerLead: 'Demo Team C',
    trackCategory: 'Autonomous Systems',
    completedMissions: 3,
    totalMissions: 4,
    achievementStatus: 'Level 03 Finalist (Demo)',
    score: 2450,
  },
  {
    rank: 4,
    teamName: 'Sunset Kinetics',
    playerLead: 'Demo Team D',
    trackCategory: 'Gesture-Controlled',
    completedMissions: 3,
    totalMissions: 4,
    achievementStatus: 'Level 02 Cleared (Demo)',
    score: 2210,
  },
  {
    rank: 5,
    teamName: 'Coral Circuit',
    playerLead: 'Demo Team E',
    trackCategory: 'Maze Navigation',
    completedMissions: 3,
    totalMissions: 4,
    achievementStatus: 'Level 02 Cleared (Demo)',
    score: 2045,
  },
  {
    rank: 6,
    teamName: 'Hyperdrive Lab',
    playerLead: 'Demo Team F',
    trackCategory: 'Autonomous Systems',
    completedMissions: 2,
    totalMissions: 4,
    achievementStatus: 'Training Complete (Demo)',
    score: 1810,
  },
];

export const RULE_GROUPS: RuleGroup[] = [
  {
    id: 'general',
    title: 'General Participation Rules',
    summary: 'Eligibility, player conduct, and fair-play standards across all four SpecteQ levels.',
    statusNote: 'Core Framework Confirmed · 2027 Addenda Configurable',
    items: [
      'All participants enter SpecteQ as Players and must complete registration before Level 01 onboarding.',
      'Respectful conduct, pit-bay safety, and adherence to marshal instructions are mandatory throughout the event.',
      'Eligibility scope (institution/open-division criteria) for 2027: [Placeholder — Pending 2027 Official Rulebook].',
    ],
  },
  {
    id: 'team',
    title: 'Team Requirements',
    summary: 'Formation rules for Gaming Teams, captain designation, and pit crew limits.',
    statusNote: 'Team Size Caps Configurable for 2027',
    items: [
      'Participants may compete in designated Gaming Teams with one nominated Team Lead for official check-in.',
      'Minimum and maximum members per Gaming Team: [Placeholder — Configurable 2027 Rule].',
      'Cross-track multi-entry policies and substitution rules: [Placeholder — Pending Organizer Confirmation].',
    ],
  },
  {
    id: 'missions',
    title: 'Mission Rules',
    summary: 'Guidelines governing Training Missions, Level 02 builds, and track-specific runs.',
    statusNote: 'Aligned with SpecteQ Level Progression',
    items: [
      'Teams must complete required Level 01 Training Mission checkpoints to unlock Level 02 build verification.',
      'Each mission track specifies whether human-in-the-loop control (e.g., gesture interface) or full autonomy is required.',
      'Confirmed 2027 track-specific constraints and penalty matrices: [Placeholder — Published Per Confirmed Track].',
    ],
  },
  {
    id: 'robot-specs',
    title: 'Robot Specifications',
    summary: 'Hardware safety, battery enclosures, onboard compute, and arena preservation constraints.',
    statusNote: 'Safety Standards Mandatory · Exact Limits TBD',
    items: [
      'Robots must pass physical scrutiny inspection prior to entering The Robotics Arena.',
      'All batteries must be securely mounted with accessible power isolation switches; exposed wiring is prohibited.',
      'Arena-damaging sharp edges, uncontained projectiles, or hazardous materials are strictly disallowed.',
      'Exact maximum weight, footprint (mm), and voltage ceilings for 2027: [Placeholder — Official 2027 Hardware Sheet].',
    ],
  },
  {
    id: 'competition',
    title: 'Competition Guidelines',
    summary: 'Match flow, scrutiny calls, time-trial restarts, and referee decisions.',
    statusNote: 'Arena Protocol Framework',
    items: [
      'Teams must report to the staging bay ahead of their scheduled heat or forfeit the slot.',
      'Calibration windows prior to official scored runs are strictly timed by Arena Marshals.',
      'Number of official attempts, timeout allowances, and dispute resolution procedure: [Placeholder — 2027 Match Rules].',
    ],
  },
  {
    id: 'scoring',
    title: 'Scoring Criteria',
    summary: 'How mission completion, run time, accuracy, and level bonuses determine High Score rankings.',
    statusNote: 'Formula Weights Configurable for 2027',
    items: [
      'Leaderboard placement combines verified Mission Complete checkpoints and official Robotics Arena performance.',
      'Time bonuses, obstacle/wall-contact deductions, and tie-breaker criteria: [Placeholder — 2027 Scoring Matrix].',
      'Top-scoring Gaming Teams in each confirmed category earn the High Score Champion title.',
    ],
  },
];

export const CONTACT_COORDINATORS: ContactCoordinator[] = [
  {
    id: 'coord-1',
    name: 'Event Lead (Placeholder)',
    role: 'Competition Director & Governance',
    department: 'General Inquiries & Registration',
    phonePlaceholder: '+1 (555) 010-2027 (Configurable)',
    emailPlaceholder: 'command@specteq2027.example',
    accent: 'cyan',
  },
  {
    id: 'coord-2',
    name: 'Technical Marshal (Placeholder)',
    role: 'Robotics Arena & Scrutiny Lead',
    department: 'Hardware Specs & Mission Rules',
    phonePlaceholder: '+1 (555) 011-2027 (Configurable)',
    emailPlaceholder: 'arena@specteq2027.example',
    accent: 'pink',
  },
  {
    id: 'coord-3',
    name: 'Pit Coordinator (Placeholder)',
    role: 'Workshops & Team Logistics',
    department: 'Level 01 Missions & Pit Bays',
    phonePlaceholder: '+1 (555) 012-2027 (Configurable)',
    emailPlaceholder: 'logistics@specteq2027.example',
    accent: 'violet',
  },
];

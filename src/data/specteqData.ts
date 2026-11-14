export type AccentKey = 'cyan' | 'pink' | 'violet' | 'orange';

export interface MissionTrack {
  id: string;
  playerSlot: string;
  codeName: string;
  name: string;
  missionType: string;
  categoryTag: string;
  isReferenceExample: boolean;
  difficulty: 'Entry' | 'Intermediate' | 'Manual Control';
  accent: AccentKey;
  shortDescription: string;
  overview: string;
  objective: string;
  objectivesList?: string[];
  winningCondition?: string;
  requirements: string[];
  challenges: string[];
  rules: string[];
  completionCriteria: string[];
  hardwareSummary: string;
  visualType: 'gesture' | 'maze' | 'robo-heist';
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
  trackCategory: 'Gesture-Controlled' | 'Maze Navigation' | 'ROBO HEIST';
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

export const ASSET_PATHS = {
  background: './assets/aistudio/BG_0816284a.png',
  logo: './assets/aistudio/logo_7d034baf.png',
  hardwareBlueprint: './assets/aistudio/Hardware_architcture_blueprint_b810e078.png',
};

export const EVENT_CONFIG = {
  brandName: 'SpecteQ',
  editionYear: '2027',
  fullTitle: 'SpecteQ 2027',
  subtitle: 'THE BOT COMPETITION',
  tagline: 'Build. Battle. Dominate.',
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
      'Gaming Teams unlock their hardware chassis in Level 02, integrate sensors or mechanical grippers, and tune control systems for their selected mission.',
  },
  {
    id: 'test',
    step: '03',
    title: 'Test',
    specteqTerm: 'Scrutiny & Calibration',
    description:
      'Teams calibrate control loops, run arena trials, and validate hardware compliance ahead of arena qualification.',
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

export const MISSION_TRACKS: MissionTrack[] = [
  {
    id: 'mission-gesture-car',
    playerSlot: 'PLAYER 01',
    codeName: 'CONTROL THE MACHINE',
    name: 'Gesture-Controlled Car',
    missionType: 'Wireless Gesture Control',
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
    visualType: 'gesture',
  },
  {
    id: 'mission-pacman-maze',
    playerSlot: 'PLAYER 02',
    codeName: 'ESCAPE THE MAZE',
    name: 'PAC-MAN Maze Robot',
    missionType: 'Autonomous Sensor Navigation',
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
    visualType: 'maze',
  },
  {
    id: 'mission-robo-heist',
    playerSlot: 'PLAYER 03',
    codeName: 'GRIPPER OBJECT COLLECTION',
    name: 'ROBO HEIST',
    missionType: 'Manual Robotics / Gripper-Based Object Collection',
    categoryTag: 'Manual Robotics · Gripper-Based Object Collection',
    isReferenceExample: false,
    difficulty: 'Manual Control',
    accent: 'orange',
    shortDescription:
      'Operate a manual gripper-equipped robot to locate, collect, and deposit coloured tiles matching your assigned team colour within the round timer.',
    overview:
      'Teams operate manually controlled robots equipped with mechanical grippers. Each team or robot is assigned a specific colour while the arena contains multiple coloured tiles distributed across different locations.',
    objective:
      'Collect all tiles matching your assigned team colour with your mechanical gripper and deposit them into the designated colour slot within the specified time limit.',
    objectivesList: [
      'Navigate the arena using manual robot control.',
      'Identify and collect tiles matching the team’s assigned colour using the robot’s gripper.',
      'Transport the collected tiles through the arena.',
      'Deposit the tiles into the designated collection slot for that colour.',
      'Complete the task within the specified time limit.',
    ],
    winningCondition:
      'The competition takes place across multiple rounds. The first team to successfully complete the required collection and deposit task wins the round. The overall winner is determined by performance across the multiple rounds, according to the final competition scoring rules.',
    requirements: [
      'Compact manually operated robotic vehicle with responsive drivetrain',
      'Mechanical gripper assembly capable of gripping and releasing arena tiles securely',
      'Assigned team colour identification and manual operator control link',
      'Exact tile dimensions, round duration, and arena layout: [TBD — Final Competition Specs]',
    ],
    challenges: [
      'Precision manual driving between distributed tile pickup zones',
      'Reliable gripper alignment, pickup, and drop-off inside designated colour slots',
      'Navigating contested arena routes under round countdown pressure',
      'Maintaining consistent performance across multiple competition rounds',
    ],
    rules: [
      'Teams must operate the robot strictly via manual control.',
      'Only tiles matching the team’s assigned colour count toward the team’s designated collection slot.',
      'Detailed round structure, scoring rules, and arena dimensions: [TBD — Official 2027 Rulebook].',
    ],
    completionCriteria: [
      'Collect assigned coloured tiles using the mechanical gripper',
      'Transport and deposit tiles into the matching designated collection slot',
      'Finish within the specified round time limit to contend for round victory',
    ],
    hardwareSummary: 'Manual Drivetrain · Mechanical Gripper · Colour Slot Targeting',
    visualType: 'robo-heist',
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
      'Workshops are transformed into hands-on Training Missions. Master microcontroller fundamentals, sensor calibration, wireless links, and mechanical actuation.',
    deliverables: [
      'Complete electronics & firmware fundamentals mission',
      'Calibrate sensor inputs and actuator / gripper response',
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
      'Transition from training bench to real engineering. Assemble your robot chassis, integrate sensors or grippers, tune your control system, and verify Mission Complete.',
    deliverables: [
      'Assemble mechanical chassis and power distribution',
      'Flash and tune mission control algorithms or manual gripper linkages',
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
      'The ultimate showdown. Deploy your engineered machine inside The Robotics Arena, compete in timed heats and multi-round matches, and claim High Score Champion status.',
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
      'Mentor office hours for firmware and mechanical debugging',
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
      'Chassis assembly, gripper/sensor integration, and wiring',
      'Control loop tuning and strategy iteration',
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
      'Dimensions, battery safety, and control link inspection',
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
      'Time trials, maze runs, and multi-round ROBO HEIST finals',
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
      'Every bot undergoes pre-match voltage, chassis dimension, and control failsafe verification before entering the active arena floor.',
    specs: 'Mandatory Inspection · Calibration Bench Access',
  },
  {
    id: 'zone-qualifiers',
    zoneLabel: 'Zone 02 · Qualification Circuit',
    title: 'Timed Trials & Mission Scoring',
    description:
      'Gaming Teams execute scored runs across designated mission obstacles, maze corridors, or tile collection zones to seed into the championship bracket.',
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
    trackCategory: 'ROBO HEIST',
    completedMissions: 3,
    totalMissions: 4,
    achievementStatus: 'Round Winner (Demo)',
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
    teamName: 'Vault Grippers',
    playerLead: 'Demo Team F',
    trackCategory: 'ROBO HEIST',
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
      'Each mission track specifies whether manual control (such as ROBO HEIST), gesture input, or full autonomy is required.',
      'Confirmed 2027 track-specific constraints and penalty matrices: [Placeholder — Published Per Confirmed Track].',
    ],
  },
  {
    id: 'robot-specs',
    title: 'Robot Specifications',
    summary: 'Hardware safety, battery enclosures, onboard systems, and arena preservation constraints.',
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
    summary: 'Match flow, scrutiny calls, time-trial restarts, multi-round finals, and referee decisions.',
    statusNote: 'Arena Protocol Framework',
    items: [
      'Teams must report to the staging bay ahead of their scheduled heat or forfeit the slot.',
      'Calibration windows prior to official scored runs are strictly timed by Arena Marshals.',
      'Number of official rounds, timeout allowances, and dispute resolution procedure: [Placeholder — 2027 Match Rules].',
    ],
  },
  {
    id: 'scoring',
    title: 'Scoring Criteria',
    summary: 'How mission completion, run time, round wins, and level bonuses determine High Score rankings.',
    statusNote: 'Formula Weights Configurable for 2027',
    items: [
      'Leaderboard placement combines verified Mission Complete checkpoints and official Robotics Arena performance.',
      'Time bonuses, round win weights, and tie-breaker criteria: [Placeholder — 2027 Scoring Matrix].',
      'Top-scoring Gaming Teams in each confirmed mission earn the High Score Champion title.',
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

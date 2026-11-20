// All site copy lives here. Edit text, not markup.

/** A `key: value` row rendered in the config pane of the hero's product window. */
export type ConfigLine = [key: string, value: string];
/** A use case: heading plus one-line description. */
export type UseCase = [title: string, description: string];

export interface PipelineFile {
  label: string;
  cmd: string;
  comment: string;
  lines: ConfigLine[];
}

export interface PlatformStep {
  name: string;
  tag: string;
  body: string;
  points: string[];
}

export interface Sector {
  name: string;
  short: string;
  deploy: string;
  title: string;
  body: string;
  uses: UseCase[];
}

export interface Device {
  name: string;
  app: string;
  hw: string;
  ask: string;
  reply: string;
  title: string;
  body: string;
  uses: string[];
}

export interface DeployMode {
  name: string;
  hint: string;
  code: string;
  boundary: string;
  egress: string;
  ring: string;
  body: string;
  tags: string[];
}

export const ACCENT = '#2F4BFF'; // brand accent — swap for #1F1F1F / #0F7A5C / #6D3BFF / #FA520F
export const EMAIL = 'hello@kernellabs.ai';
export const LOCATION = 'Lagos · Working with teams globally';
export const RUN_ID = 'run #4817';

export const FILES: PipelineFile[] = [
  {
    label: 'Tune',
    cmd: 'tune --config tune.yaml',
    comment: '# post-train an open-weight base on your data',
    lines: [
      ['base_model', 'llama-3.1-70b · qwen-2.5 · mistral'],
      ['datasets', 'internal://records, internal://reports'],
      ['privacy', 'de-identify: true · egress: none'],
      ['stages', 'sft → preference_tuning → rl'],
      ['adapters', 'lora · merge_on_release'],
      ['reward', 'expert_feedback + task_checks'],
      ['owner', 'you'],
    ],
  },
  {
    label: 'Eval',
    cmd: 'eval --suite domain',
    comment: '# your tasks, your bar',
    lines: [
      ['suite', 'built from real workflows'],
      ['graders', 'domain experts + rubric models'],
      ['red_team', 'safety, misuse, data leakage'],
      ['baseline', 'current process + base model'],
      ['gate', 'block release on regression'],
      ['report', 'signed, versioned, auditable'],
    ],
  },
  {
    label: 'Distill',
    cmd: 'distill --target phone',
    comment: '# shrink it to fit in a pocket',
    lines: [
      ['teacher', 'clinical-assist-large'],
      ['student', 'compact · same task, same voice'],
      ['targets', 'phone · laptop · edge gateway'],
      ['quantize', 'low-bit, hardware aware'],
      ['runtime', 'on-device · offline'],
      ['updates', 'signed, over the air'],
    ],
  },
  {
    label: 'Deploy',
    cmd: 'deploy --target on-prem',
    comment: '# ship to your perimeter',
    lines: [
      ['target', 'vpc | on-prem | air-gapped | device'],
      ['serving', 'optimized runtime · quantized'],
      ['access', 'sso · rbac · audit log'],
      ['monitoring', 'drift + quality alerts'],
      ['retrain', 'continuous, on new data'],
      ['handover', 'weights + pipelines + runbooks'],
    ],
  },
];

export const PIPE: UseCase[] = [
  ['Foundry', 'Data mapped, cleaned and versioned'],
  ['Tune', 'Post-training on your data'],
  ['Eval', 'Domain suite and red-team'],
  ['Distill', 'Small model for devices'],
  ['Deploy', 'Serving inside your perimeter'],
];

export const STEPS: PlatformStep[] = [
  {
    name: 'Data foundry',
    tag: 'Ingest · clean · structure',
    body: 'We map, clean and structure the data you already own: documents, records, transactions, logs, sensor streams and transcripts. Nothing leaves your environment.',
    points: [
      'Ingestion and de-identification pipelines',
      'Synthetic data for rare and critical cases',
      'Versioned datasets with full lineage',
    ],
  },
  {
    name: 'Post-training',
    tag: 'SFT · preference tuning · RL',
    body: 'We adapt strong open-weight models to your domain with supervised fine-tuning, preference optimization and reinforcement learning against your own definition of a good answer.',
    points: [
      'Supervised fine-tuning and LoRA adapters',
      'Preference tuning and RL from expert feedback',
      'Distillation into small models for devices',
    ],
  },
  {
    name: 'Evaluation',
    tag: 'Benchmarks · red-teaming',
    body: 'Every model ships with an evaluation suite built from your real work, so you know exactly what it does well and where it must not be trusted.',
    points: [
      'Task benchmarks drawn from your workflows',
      'Red-teaming and safety review',
      'Regression gates on every release',
    ],
  },
  {
    name: 'Deployment',
    tag: 'Serve · monitor · hand over',
    body: 'We deploy where your data lives, from a data centre to a single phone, optimize for that hardware, and hand over the weights with everything needed to retrain them.',
    points: [
      'Optimized serving, quantization and compilation',
      'Monitoring, drift detection and retraining loops',
      'Complete weight and pipeline handover',
    ],
  },
];

export const SECTORS: Sector[] = [
  {
    name: 'Healthcare',
    short: 'healthcare',
    deploy: 'On-premises',
    title: 'Clinical intelligence that never leaves the hospital.',
    body: 'Models trained on your records, reports and protocols to support clinicians and cut administrative load, with patient data kept inside your walls.',
    uses: [
      ['Clinical documentation', 'Draft notes, summaries and discharge letters from encounters.'],
      ['Triage and referral support', 'Surface urgency and route patients to the right care.'],
      ['Coding and claims review', 'Read records and flag errors before submission.'],
    ],
  },
  {
    name: 'Finance',
    short: 'finance',
    deploy: 'Private cloud or on-premises',
    title: 'Models that know your customers, your risk and your rules.',
    body: 'Banks, insurers, fintechs and payment companies get specialized models trained on their own transactions, documents and policies, with customer data kept under their control.',
    uses: [
      ['Fraud and anomaly detection', 'Catch suspicious transactions and account takeovers in real time.'],
      ['KYC and AML review', 'Extract, verify and flag across onboarding documents and watchlists.'],
      ['Credit and underwriting', 'Score thin-file customers and draft risk memos in your house format.'],
      ['Customer support agents', 'Resolve disputes and queries in the languages your customers speak.'],
    ],
  },
  {
    name: 'Energy',
    short: 'energy',
    deploy: 'Private cloud + edge',
    title: 'Models that understand your grid, wells and assets.',
    body: 'Turn years of telemetry, maintenance logs and engineering reports into systems that predict failures, plan capacity and explain their reasoning.',
    uses: [
      ['Predictive maintenance', 'Spot failing equipment early from sensor and log data.'],
      ['Load and outage forecasting', 'Plan generation and dispatch with grid-aware models.'],
      ['Engineering knowledge search', 'Ask questions across decades of technical documents.'],
    ],
  },
  {
    name: 'Defence & security',
    short: 'defence',
    deploy: 'Air-gapped',
    title: 'Sovereign models for missions that cannot touch a public API.',
    body: 'Fully disconnected deployment, strict access control and complete auditability for analysis, planning and decision support.',
    uses: [
      ['Intelligence analysis', 'Triage and summarize large volumes of reporting.'],
      ['Secure translation', 'Multilingual translation that never leaves the network.'],
      ['Logistics and readiness', 'Plan supply, maintenance and readiness from live data.'],
    ],
  },
  {
    name: 'Agriculture',
    short: 'agriculture',
    deploy: 'On-device + edge',
    title: 'Intelligence for farms, supply chains and food security.',
    body: 'Models that combine field, weather and market data to help growers and distributors decide better, even where there is no signal.',
    uses: [
      ['Crop and yield advisory', 'Recommendations grounded in local soil and weather.'],
      ['Storage and supply planning', 'Reduce post-harvest loss with better forecasts.'],
      ['Offline local-language advisory', 'Guidance on a basic phone, in the farmer’s own language.'],
    ],
  },
  {
    name: 'Public sector',
    short: 'public sector',
    deploy: 'On-premises',
    title: 'AI that serves citizens and keeps national data at home.',
    body: 'Sovereign models for governments and agencies that need modern AI without sending sensitive records abroad.',
    uses: [
      ['Records and case processing', 'Clear backlogs with assisted review and routing.'],
      ['Citizen service assistants', 'Answer questions about services, accurately and in context.'],
      ['Policy research', 'Search, compare and draft from legislation and reports.'],
    ],
  },
];

export const DEVICES: Device[] = [
  {
    name: 'Phones',
    app: 'Field Assist',
    hw: 'MID-RANGE ANDROID AND IOS',
    ask: 'Child has fever and fast breathing. What should I check first?',
    reply: 'Count breaths for one full minute and check for chest indrawing. Here is the referral checklist.',
    title: 'An expert in every pocket, with or without signal.',
    body: 'Health workers, bank agents and field teams get a specialized assistant that runs fully on the phone, so it works in rural areas and keeps sensitive data on the device.',
    uses: [
      'Offline clinical guidance for community health workers',
      'On-device document capture and KYC for agents',
      'Voice assistants in local languages',
    ],
  },
  {
    name: 'Laptops',
    app: 'Private Copilot',
    hw: 'STANDARD BUSINESS LAPTOPS',
    ask: 'Summarize the three riskiest clauses in this contract.',
    reply: 'Clause 7.2 caps liability below your policy. Clause 9 allows unilateral renewal. Clause 12 moves jurisdiction.',
    title: 'Private copilots that never phone home.',
    body: 'A compact model trained on your documents runs entirely on the machine. Legal, finance and security teams get real AI help without sending a single file to the cloud.',
    uses: [
      'Drafting and search across sensitive files',
      'Analysis assistants for regulated teams',
      'Meeting notes and summaries without the cloud',
    ],
  },
  {
    name: 'Edge & sensors',
    app: 'Substation Gateway',
    hw: 'INDUSTRIAL EDGE GATEWAYS',
    ask: 'Transformer T3 vibration changed overnight. Is this a concern?',
    reply: 'The pattern matches early bearing wear seen in past logs. Schedule an inspection this week.',
    title: 'Intelligence right next to the equipment.',
    body: 'Small models run on gateways and embedded boards beside your assets, reacting in real time and working even when the link to headquarters drops.',
    uses: [
      'Anomaly detection at substations, wells and plants',
      'Visual quality inspection on the production line',
      'Crop and livestock monitoring on farm gateways',
    ],
  },
  {
    name: 'Vehicles & drones',
    app: 'Inspection Drone',
    hw: 'ON-BOARD COMPUTE MODULES',
    ask: 'Flag anything unusual along this pipeline segment.',
    reply: 'Two possible corrosion spots at markers 14 and 22. Images saved for review.',
    title: 'Autonomy that keeps working out of range.',
    body: 'Compact vision and language models run on board, so inspection, navigation and diagnostics keep going far from any network.',
    uses: [
      'Pipeline and power line inspection',
      'On-board perception and navigation aids',
      'Fleet diagnostics and maintenance alerts',
    ],
  },
];

export const MODES: DeployMode[] = [
  {
    name: 'Private cloud',
    hint: 'VPC',
    code: 'target: vpc',
    boundary: 'YOUR CLOUD ACCOUNT',
    egress: 'no data or weights held by Kernel Labs',
    ring: '#C9B98F',
    body: 'The full stack runs inside your own cloud account. We operate with scoped access and never hold your data or your weights.',
    tags: ['your cloud account', 'scoped access', 'fastest to start'],
  },
  {
    name: 'On-premises',
    hint: 'DATA CENTRE',
    code: 'target: on-prem',
    boundary: 'YOUR DATA CENTRE',
    egress: 'egress: none',
    ring: ACCENT,
    body: 'Deployed on your own GPUs in your own data centre, managed alongside your team or handed over completely.',
    tags: ['your hardware', 'sso + rbac', 'full audit log'],
  },
  {
    name: 'Air-gapped',
    hint: 'ISOLATED',
    code: 'target: air-gapped',
    boundary: 'DISCONNECTED NETWORK',
    egress: 'physically isolated',
    ring: ACCENT,
    body: 'Fully disconnected systems for classified, clinical or remote environments, with offline updates and signed releases.',
    tags: ['offline updates', 'signed releases', 'no network'],
  },
  {
    name: 'On-device',
    hint: 'EDGE',
    code: 'target: device',
    boundary: 'THE DEVICE ITSELF',
    egress: 'data never leaves the device',
    ring: ACCENT,
    body: 'A distilled small model ships inside your app or firmware and runs on the phone, laptop or edge board. Updates arrive signed when a connection is available.',
    tags: ['works offline', 'instant response', 'no per-query cost'],
  },
];

export const MARQUEE_WORDS: string[] = [
  'Healthcare',
  'Finance',
  'Energy',
  'Defence',
  'Agriculture',
  'Public sector',
  'Telecom',
  'Insurance',
];

export const ROTATING: string[] = [
  'healthcare.',
  'finance.',
  'energy.',
  'defence.',
  'agriculture.',
  'government.',
  'healthcare.',
];

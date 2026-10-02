import zelvraImg from '../assets/images/zelvra_diverse_jewelry_ui_1790962338546.jpg';
import learnifyItImg from '../assets/images/learnify_new_ui_v2_1790962611248.jpg';
import lacHeatingImg from '../assets/images/lac_heating_new_ui_v2_1790962599267.jpg';
import medquviaImg from '../assets/images/medquvia_new_ui_1790962049837.jpg';
import eldTripImg from '../assets/images/eld_trip_planner_ui_1790950055045.jpg';
import aspireDashImg from '../assets/images/aspire_dashboard_new_ui_v2_1790962482563.jpg';
import pokemonAppImg from '../assets/images/pokemon_explorer_ui_1790952711430.jpg';
import nsTravelsImg from '../assets/images/ns_travel_luxury_v2_1790961819519.jpg';

export interface ImpactMilestone {
  id: string;
  tag: string;
  metric: string;
  title: string;
  description: string;
  badge: string;
  iconType: 'wallet' | 'scan' | 'shield' | 'layers';
  architectureDetails: {
    problemStatement: string;
    systemDesign: string[];
    quantifiedOutcomes: { label: string; value: string }[];
  };
}

export interface StackCategory {
  id: string;
  title: string;
  iconType: 'code' | 'git-branch' | 'palette' | 'check-circle' | 'database' | 'cpu';
  description: string;
  skills: {
    name: string;
    categoryTag: string;
    dotColor: string;
  }[];
}

export interface PersonalProject {
  id: string;
  title: string;
  category: string;
  statusLabel: string;
  statusColor: 'emerald' | 'blue';
  description: string;
  tags: string[];
  image: string;
  liveDomain: string;
  primaryActionLabel: string;
  primaryActionUrl: string;
  secondaryActionLabel: string;
  secondaryActionUrl?: string;
  architectureSpec: {
    architecturePattern: string;
    latencyProfile: string;
    deploymentTarget: string;
    coreModules: { name: string; spec: string }[];
    engineeringHighlights: string[];
  };
}

export interface ProductionSystem {
  id: string;
  organization: string;
  scaleLabel: string;
  title: string;
  narrativeParts: {
    text: string;
    bold?: boolean;
  }[];
  metrics: {
    kicker: string;
    value: string;
    subtext: string;
  }[];
  tags: string[];
  consoleTitle: string;
  consoleVersion: string;
  consoleType: 'flow' | 'table';
  consoleNodes: {
    stepTitle: string;
    badgeText: string;
  }[];
  verificationText: string;
}

export const HERO_METRICS = [
  {
    value: '4+ Yrs',
    label: 'Production Experience',
  },
  {
    value: '₹120Cr+',
    label: 'Disbursed Volume',
  },
  {
    value: '4+ Years',
    label: 'SDE Experience',
  },
  {
    value: 'Gurugram, India',
    label: 'Current Location',
  },
];

export const IMPACT_MILESTONES: ImpactMilestone[] = [
  {
    id: 'reject-relook',
    tag: 'REJECT / RELOOK WORKFLOW',
    metric: '₹80Cr+',
    title: 'Reject / Relook Workflow',
    description:
      'Created the Reject / Relook Workflow to intelligently re-evaluate loan applications rejected due to minor formatting errors (Aadhaar, PAN, DOB mismatches), unlocking ₹120Cr+ in disbursed loan volume within the first month for the bank.',
    badge: 'Axis Bank & Freecharge Scale',
    iconType: 'wallet',
    architectureDetails: {
      problemStatement:
        'High-intent loan applicants were permanently dropping out of the origination funnel due to deterministic OCR mismatches between PAN, Aadhaar, and CKYC records.',
      systemDesign: [
        'State-machine driven delta reconciliation layer intercepting soft-reject transitions.',
        'Maker-Checker diff console with side-by-side OCR bounding-box confidence overlays.',
        'Idempotent retry queue re-injecting validated payloads back into the Axis Bank BRE pipeline.',
      ],
      quantifiedOutcomes: [
        { label: 'First-Month Recovered Volume', value: '₹120Cr+' },
        { label: 'False-Reject Salvage Rate', value: '64.2%' },
        { label: 'Re-Evaluation Latency', value: '<1.2s' },
      ],
    },
  },
  {
    id: 'document-automation',
    tag: 'DOCUMENT & OPS-MAKER AUTOMATION',
    metric: '-80%',
    title: 'Automated Document Processing',
    description:
      'Built intelligent client-side document verification, OCR pre-flight parsing, and Ops-Maker task automation to resolve malformed inputs prior to cloud submission, reducing sales-team manual rework by 80%.',
    badge: 'Automated Doc Ops & Workflow',
    iconType: 'scan',
    architectureDetails: {
      problemStatement:
        'Field sales agents frequently uploaded blurred, skewed, or incorrect KYC documents, triggering expensive downstream cloud OCR failures and manual back-office loops.',
      systemDesign: [
        'Client-side pre-flight image diagnostics evaluating Laplacian variance (blur) and luminance histograms.',
        'Real-time automated document extraction pipeline with structured schema validation.',
        'Automated Ops-Maker queue assignment with pre-populated field extraction.',
      ],
      quantifiedOutcomes: [
        { label: 'Manual Rework Reduction', value: '-80%' },
        { label: 'First-Pass KYC Approval', value: '94.8%' },
        { label: 'Ops Turnaround Speedup', value: '3.8x' },
      ],
    },
  },
  {
    id: 'nesl-estamping',
    tag: 'NESL DIGITAL E-STAMPING',
    metric: '₹5Cr',
    title: 'NeSL Digital E-Stamping',
    description:
      'Moved the whole physical process of the stamping flow to the digital NeSL process, eliminating physical stamp paper expiry risks and storage logistics, saving ~₹5 Crore annually for Axis Bank by generating stamp papers digitally in real-time.',
    badge: 'Axis Bank Annual Savings',
    iconType: 'shield',
    architectureDetails: {
      problemStatement:
        'Physical stamp paper inventory across branches incurred working-capital lockup, state-wise denomination shortages, and physical expiry write-offs.',
      systemDesign: [
        'Real-time cryptographic handshake with NeSL Digital Document Execution (DDE) APIs.',
        'Dynamic PDF merge engine embedding state-specific e-stamp certificates into loan agreements.',
        'Automated audit trail and cryptographic hash verification for institutional compliance.',
      ],
      quantifiedOutcomes: [
        { label: 'Annual Direct Cost Savings', value: '₹5 Crore' },
        { label: 'Paper Inventory Spoilage', value: '0%' },
        { label: 'Execution Time', value: '<4.5s' },
      ],
    },
  },
  {
    id: 'enterprise-cloud-vault',
    tag: 'PROCLOZ ENTERPRISE SCALE',
    metric: '2 Apps • 100+ B2B Clients',
    title: 'EVYA Payroll & Costen Travel Suite (Procloz)',
    description:
      'Built 2 applications from scratch—EVYA Payroll Management and Costen Travel & Expense Management—alongside a secure cloud file storage vault supporting chunked blob uploads (2GB+) and role-based ACLs for 100+ Enterprise B2B clients.',
    badge: 'Procloz Enterprise Scale',
    iconType: 'layers',
    architectureDetails: {
      problemStatement:
        'Enterprise corporate clients required robust, zero-to-one payroll computation and travel expense management platforms with secure cloud document archiving and strict RBAC controls.',
      systemDesign: [
        'Built 2 enterprise applications from scratch: EVYA Payroll Management and Costen Travel & Expense Management, successfully onboarding 100+ corporate clients.',
        'Engineered secure cloud file storage vault supporting chunked blob uploads (2GB+) with SHA-256 integrity verification.',
        'Implemented end-to-end encryption, role-based access control (RBAC) matrix, and multi-tenant document management workflows.',
      ],
      quantifiedOutcomes: [
        { label: 'Applications Built from Scratch', value: '2 Apps (EVYA & Costen)' },
        { label: 'Active Enterprise Clients', value: '100+ B2B Clients' },
        { label: 'Max Upload Capacity', value: '2GB+ Chunked' },
      ],
    },
  },
];

export const STACK_CATEGORIES: StackCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend & Modern Web',
    iconType: 'code',
    description:
      'Core client platforms built for high Core Web Vitals fidelity and deterministic rendering.',
    skills: [
      { name: 'React.js', categoryTag: 'UI CORE', dotColor: '#2563EB' },
      { name: 'Next.js 14', categoryTag: 'SSR/APP', dotColor: '#0F172A' },
      { name: 'TypeScript', categoryTag: 'TYPED', dotColor: '#1E3A8A' },
      { name: 'JavaScript (ES6+)', categoryTag: 'ENGINE', dotColor: '#D97706' },
      { name: 'Modern HTML5/CSS3', categoryTag: 'DOM', dotColor: '#DC2626' },
    ],
  },
  {
    id: 'state',
    title: 'State & Concurrency',
    iconType: 'git-branch',
    description:
      'Complex transactional states, multi-step loan journeys, and background threads.',
    skills: [
      { name: 'Redux Toolkit (RTK)', categoryTag: 'STATE', dotColor: '#7C3AED' },
      { name: 'TanStack Query', categoryTag: 'CACHE', dotColor: '#DC2626' },
      { name: 'RESTful APIs', categoryTag: 'IO', dotColor: '#059669' },
      { name: 'Axios Interceptors', categoryTag: 'NET', dotColor: '#2563EB' },
      { name: 'Web Workers', categoryTag: 'THREADS', dotColor: '#475569' },
    ],
  },
  {
    id: 'design-systems',
    title: 'Design Systems & UI',
    iconType: 'palette',
    description:
      'Atomic UI frameworks and accessible component libraries complying with WCAG 2.1.',
    skills: [
      { name: 'Tailwind CSS', categoryTag: 'UTILITY', dotColor: '#0284C7' },
      { name: 'Material UI (MUI)', categoryTag: 'SYSTEM', dotColor: '#2563EB' },
      { name: 'Ant Design', categoryTag: 'ENTERPRISE', dotColor: '#1D4ED8' },
      { name: 'Headless UI', categoryTag: 'PRIMITIVE', dotColor: '#475569' },
      { name: 'WCAG Accessibility', categoryTag: 'A11Y', dotColor: '#059669' },
    ],
  },
  {
    id: 'testing',
    title: 'Testing & Reliability',
    iconType: 'check-circle',
    description:
      'Comprehensive quality gates preventing regressions across asynchronous and critical workflows.',
    skills: [
      { name: 'Jest', categoryTag: 'RUNNER', dotColor: '#DC2626' },
      { name: 'React Testing Library (RTL)', categoryTag: 'DOM TEST', dotColor: '#E11D48' },
      { name: 'Automated CI Gates', categoryTag: 'PIPELINE', dotColor: '#475569' },
      { name: 'SonarQube Gates', categoryTag: 'STATIC', dotColor: '#2563EB' },
      { name: 'Husky Pre-commits', categoryTag: 'HOOKS', dotColor: '#0F172A' },
      { name: 'Unit & Integration Testing', categoryTag: 'COVERAGE', dotColor: '#059669' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Databases',
    iconType: 'database',
    description:
      'High-performance server-side services, relational models, cloud databases, and document stores.',
    skills: [
      { name: 'Supabase', categoryTag: 'POSTGRES', dotColor: '#059669' },
      { name: 'Node.js', categoryTag: 'RUNTIME', dotColor: '#16A34A' },
      { name: 'Express.js', categoryTag: 'SERVER', dotColor: '#0F172A' },
      { name: 'MongoDB', categoryTag: 'NOSQL', dotColor: '#15803D' },
      { name: 'MSSQL Relational Schemas', categoryTag: 'SQL', dotColor: '#2563EB' },
      { name: 'REST & GraphQL APIs', categoryTag: 'SCHEMA', dotColor: '#7C3AED' },
    ],
  },
  {
    id: 'developer-productivity',
    title: 'Modern Web & Developer Productivity',
    iconType: 'cpu',
    description:
      'High-performance developer harnesses and productivity-enhancing workflow tooling.',
    skills: [
      { name: 'Developer Productivity Tools', categoryTag: 'WORKSPACE', dotColor: '#1E3A8A' },
      { name: 'Distributed Web Modules', categoryTag: 'ARCHITECTURE', dotColor: '#D97706' },
      { name: 'Custom Workflow Engines', categoryTag: 'SYSTEM', dotColor: '#2563EB' },
      { name: 'Cursor IDE', categoryTag: 'AI IDE', dotColor: '#0F172A' },
      { name: 'GitHub Copilot', categoryTag: 'ASSIST', dotColor: '#475569' },
    ],
  },
];

export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    id: 'zelvra-silver',
    title: 'Zelvra Silver Jewelry',
    category: 'E-Commerce & Digital Experience',
    statusLabel: 'Live Client Platform',
    statusColor: 'emerald',
    description:
      'Bespoke modern e-commerce storefront for a high-end sterling silver jewelry brand with Supabase backend catalog management, dynamic cart state, fluid animations, and sub-second page transitions.',
    tags: ['Next.js', 'React', 'Supabase', 'Tailwind CSS', 'TanStack Query'],
    image: zelvraImg,
    liveDomain: 'zelvra-vq41.vercel.app',
    primaryActionLabel: 'Live Demo',
    primaryActionUrl: 'https://zelvra-vq41.vercel.app/',
    secondaryActionLabel: 'Architecture Spec',
    architectureSpec: {
      architecturePattern: 'Hybrid SSR + Supabase Postgres Database & Auth',
      latencyProfile: 'LCP 0.8s · CLS 0.00 · INP 34ms',
      deploymentTarget: 'Vercel Edge Network + Supabase Cloud',
      coreModules: [
        { name: 'Supabase Catalog & Auth', spec: 'Relational catalog synchronization and secure customer session management.' },
        { name: 'Optimistic Cart Synchronizer', spec: 'Zero-latency local mutation paired with background inventory reservation.' },
        { name: 'Checkout Pipeline', spec: 'PCI-compliant payment intent orchestration with webhook reconciliation.' },
      ],
      engineeringHighlights: [
        'Integrated Supabase Postgres backend for real-time inventory tracking and order fulfillment logging.',
        'Engineered responsive image sets with AVIF/WebP negotiation for high-DPI jewelry macro photography.',
      ],
    },
  },
  {
    id: 'learnify-solutions',
    title: 'Learnify Solutions',
    category: 'EdTech & Professional IT Training',
    statusLabel: 'Live Production Web',
    statusColor: 'emerald',
    description:
      'Official corporate web platform for Learnify Solutions, a premier IT training institute providing professional certification courses and hands-on training across networking, cloud computing, cybersecurity, and enterprise infrastructure.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'IT Curriculum'],
    image: learnifyItImg,
    liveDomain: 'learnify-solutions.com',
    primaryActionLabel: 'Learnify Site',
    primaryActionUrl: 'https://www.learnify-solutions.com/',
    secondaryActionLabel: 'Architecture Spec',
    architectureSpec: {
      architecturePattern: 'Enterprise EdTech Portal & IT Certification Hub',
      latencyProfile: 'TTFB 38ms · 100/100 Lighthouse SEO',
      deploymentTarget: 'Vercel Edge & Global CDN (learnify-solutions.com)',
      coreModules: [
        { name: 'IT Training & Networking Curriculum', spec: 'Structured course modules covering Cisco CCNA/CCNP, Cloud Computing, Linux administration, and cybersecurity.' },
        { name: 'Corporate Enrollment Portal', spec: 'Streamlined student registration and batch inquiry management backed by Supabase.' },
        { name: 'Certification Verification Vault', spec: 'Secure credential validation ledger for alumni and corporate partners.' },
      ],
      engineeringHighlights: [
        'Built dedicated IT training domain architecture emphasizing high-intent student acquisition and course discoverability.',
        'Optimized for fast-loading mobile and desktop curriculum browsing with zero layout shift.',
      ],
    },
  },
  {
    id: 'lac-heating-uk',
    title: 'LAC Heating Company UK',
    category: 'Industrial Web & Engineering',
    statusLabel: 'Enterprise Web Platform',
    statusColor: 'emerald',
    description:
      'Commercial heating, ventilation, and air conditioning engineering portal deployed for UK enterprises with real-time system performance telemetry and automated commercial dispatch.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Cloudflare'],
    image: lacHeatingImg,
    liveDomain: 'lac-heating-company.vercel.app',
    primaryActionLabel: 'Live Demo',
    primaryActionUrl: 'https://lac-heating-company.vercel.app/',
    secondaryActionLabel: 'System Overview',
    architectureSpec: {
      architecturePattern: 'Multi-Region Enterprise Service Portal & Dispatch Router',
      latencyProfile: 'TTFB 42ms (UK Edge) · 99.99% Availability',
      deploymentTarget: 'Vercel & Cloudflare Edge (lac-heating-company.vercel.app)',
      coreModules: [
        { name: 'Commercial B2B Estimator', spec: 'Rule-based BTU/kW thermal load calculator for industrial facilities.' },
        { name: 'Emergency Engineer Dispatch', spec: 'UK postcode geo-routing matching certified commercial heating engineers.' },
        { name: 'Compliance Vault', spec: 'Automated ISO & commercial HVAC inspection certificate workflow.' },
      ],
      engineeringHighlights: [
        'Achieved 100/100 Lighthouse Performance & SEO scores for competitive UK commercial HVAC search queries.',
        'Engineered modular service architecture covering industrial boiler installation, plant room maintenance, and energy audits.',
      ],
    },
  },
  {
    id: 'medquvia-health',
    title: 'MedQuvia Health Portal',
    category: 'HealthTech & Enterprise',
    statusLabel: 'Live on Railway',
    statusColor: 'emerald',
    description:
      'Digital health growth platform designed to convert patient searches into confirmed appointments. Features 24/7 online booking, instant SMS confirmations, and a secure private doctor management portal.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'RESTful APIs'],
    image: medquviaImg,
    liveDomain: 'medquvia-production.up.railway.app',
    primaryActionLabel: 'Live Demo',
    primaryActionUrl: 'https://medquvia-production.up.railway.app/',
    secondaryActionLabel: 'Architecture Spec',
    architectureSpec: {
      architecturePattern: 'RBAC Clinical Operations & Encrypted EHR Platform',
      latencyProfile: 'API p95 < 65ms · Real-Time Slot Locking',
      deploymentTarget: 'Railway Cloud Containers (medquvia-production.up.railway.app)',
      coreModules: [
        { name: 'Clinical Triage & Scheduling', spec: 'Concurrency-safe doctor slot locking preventing double-bookings.' },
        { name: 'Encrypted Patient Dossier', spec: 'Field-level encryption for diagnostic history, vitals, and prescriptions.' },
        { name: 'Practitioner Telemetry Console', spec: 'Unified patient queue management and consultation notes composer.' },
      ],
      engineeringHighlights: [
        'Built strict Role-Based Access Control (Patient, Physician, Clinical Admin) via signed JWT refresh rotation.',
        'Designed indexed MongoDB aggregation pipelines for sub-50ms longitudinal patient history lookup.',
      ],
    },
  },
  {
    id: 'ns-travels',
    title: 'NS Travel (Luxury Tours)',
    category: 'Luxury Tourism & Charters',
    statusLabel: 'Production Live (Dubai)',
    statusColor: 'emerald',
    description:
      'High-end tour and charter orchestration platform for a premier Dubai client. Features curated luxury packages (Yacht Charters, Desert Safaris, Jet Ski Adventures), a real-time combo builder, and instant WhatsApp concierge integration.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Luxury UI'],
    image: nsTravelsImg,
    liveDomain: 'ns-travels-sigma.vercel.app',
    primaryActionLabel: 'Live Platform',
    primaryActionUrl: 'https://ns-travels-sigma.vercel.app/',
    secondaryActionLabel: 'Architecture Spec',
    architectureSpec: {
      architecturePattern: 'Next.js Edge + Global Distribution Architecture',
      latencyProfile: 'TTFB < 40ms (Middle East Edge) · Sub-second Booking Pipeline',
      deploymentTarget: 'Vercel Edge & Cloud CDN (Dubai Region Optimized)',
      coreModules: [
        { name: 'Dynamic Package Orchestrator', spec: 'Multi-category luxury tour management with real-time availability and pricing.' },
        { name: 'Intelligent Combo Builder', spec: 'Rules-based engine for building custom luxury tour bundles and excursions.' },
        { name: 'WhatsApp Concierge Link', spec: 'Direct lead-to-agent conversion pipeline for high-value private charters.' },
      ],
      engineeringHighlights: [
        'Implemented a premium dark-mode aesthetic with high-fidelity asset loading and fluid transitions.',
        'Engineered a performant multi-attribute filtering system for curated packages across diverse Dubai landscapes.',
      ],
    },
  },
  {
    id: 'eld-trip-planner',
    title: 'ELD Trip Planner',
    category: 'Logistics & Fleet Compliance',
    statusLabel: 'Production Web',
    statusColor: 'emerald',
    description:
      'Intelligent compliance route planner and Hours of Service (HOS) scheduler for commercial transport, computing mandatory driver rest cycles, fuel stops, and dispatch timelines.',
    tags: ['React', 'Leaflet/Mapbox', 'TypeScript', 'Fleet Telemetry', 'Algorithms'],
    image: eldTripImg,
    liveDomain: 'eld-trip-planner-ten.vercel.app',
    primaryActionLabel: 'Live Demo',
    primaryActionUrl: 'https://eld-trip-planner-ten.vercel.app/',
    secondaryActionLabel: 'System Overview',
    architectureSpec: {
      architecturePattern: 'Deterministic Graph Routing + FMCSA HOS State Engine',
      latencyProfile: 'Route Computation < 180ms for 2,500+ Mile Corridors',
      deploymentTarget: 'Vercel Edge (eld-trip-planner-ten.vercel.app)',
      coreModules: [
        { name: 'FMCSA HOS Cycle Solver', spec: 'Enforces 11-hour driving, 14-hour on-duty, and 30-minute break mandates.' },
        { name: 'Spatial Stop Optimizer', spec: 'Injects mandatory fuel stops every 1,000 miles along geodesic polylines.' },
        { name: 'ELD Log Grid Renderer', spec: 'Automated 24-hour FMCSA graph-grid duty status visualizer.' },
      ],
      engineeringHighlights: [
        'Implemented custom polyline segment interpolation to pinpoint exact rest coordinates prior to HOS violation.',
        'Renders interactive multi-day ELD log sheets with zero layout thrashing.',
      ],
    },
  },
  {
    id: 'pokemon-explorer',
    title: 'Pokemon Explorer App',
    category: 'Interactive Web & API Explorer',
    statusLabel: 'Live Production App',
    statusColor: 'emerald',
    description:
      'Interactive high-speed Pokemon exploration and telemetry application featuring client-side fuzzy search caching, paginated sprite grids, and comparative base-stat radar analysis.',
    tags: ['Next.js', 'PokeAPI', 'TypeScript', 'Tailwind CSS', 'Client Cache'],
    image: pokemonAppImg,
    liveDomain: 'pokemon-app-xi-eight.vercel.app',
    primaryActionLabel: 'Pokemon App',
    primaryActionUrl: 'https://pokemon-app-xi-eight.vercel.app/',
    secondaryActionLabel: 'Architecture Spec',
    architectureSpec: {
      architecturePattern: 'Next.js 14 App Router + PokeAPI REST Aggregator',
      latencyProfile: 'TTFB 45ms · Client-side Fuzzy Search < 5ms',
      deploymentTarget: 'Vercel Edge (pokemon-app-xi-eight.vercel.app)',
      coreModules: [
        { name: 'PokeAPI Aggregator', spec: 'Server-side data fetching and normalization of evolutionary chains and movesets.' },
        { name: 'Fuzzy Client Cache', spec: 'Local storage caching layer for indexed Pokemon name search and sprite pre-fetching.' },
        { name: 'Radar Stat Visualizer', spec: 'Interactive base-stat comparison engine using SVG-based radar charts.' },
      ],
      engineeringHighlights: [
        'Optimized paginated asset delivery for 1,000+ sprites with zero CLS.',
        'Engineered responsive type-based filtering system with instant UI re-reconciliation.',
      ],
    },
  },
  {
    id: 'aspire-financial',
    title: 'Aspire Financial Dashboard',
    category: 'Fintech & Capital Operations',
    statusLabel: 'Live Platform',
    statusColor: 'emerald',
    description:
      'Executive business analytics and multi-currency capital operations dashboard featuring dynamic cash flow charting, transaction indexing, and instant report generation.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Chart.js', 'Real-time KPIs'],
    image: aspireDashImg,
    liveDomain: 'aspire-dashboard-uyoj.vercel.app',
    primaryActionLabel: 'Live Demo',
    primaryActionUrl: 'https://aspire-dashboard-uyoj.vercel.app/',
    secondaryActionLabel: 'System Overview',
    architectureSpec: {
      architecturePattern: 'High-Frequency Financial Telemetry & Ledger Aggregator',
      latencyProfile: '60fps Canvas Charting · 50k+ Ledger Rows',
      deploymentTarget: 'Vercel Edge (aspire-dashboard-uyoj.vercel.app)',
      coreModules: [
        { name: 'Multi-Currency Treasury Engine', spec: 'Real-time FX normalization across USD, SGD, EUR, and INR accounts.' },
        { name: 'Corporate Card Spend Controls', spec: 'Granular velocity limits, merchant category locks, and burn alerts.' },
        { name: 'Executive Cashflow Visualizer', spec: 'Hardware-accelerated canvas time-series charts with cohort filtering.' },
      ],
      engineeringHighlights: [
        'Engineered tabular-numeral financial tables with instant client-side multi-column sorting and export.',
        'Zero-flicker state transitions across complex date-range and cost-center cohorts.',
      ],
    },
  },
];

export const PRODUCTION_SYSTEMS: ProductionSystem[] = [
  {
    id: 'maximus-loan-engine',
    organization: 'Freecharge / Axis Bank',
    scaleLabel: 'Scale: Multi-Crore Fintech',
    title: 'Maximus Distributed Digital Loan Origination Engine',
    narrativeParts: [
      {
        text: 'Architected and engineered the multi-journey origination pipeline facilitating end-to-end paperless lending for Axis Bank. Integrated distributed compliance pipelines including ',
      },
      { text: 'Automated Document Verification', bold: true },
      { text: ', ' },
      { text: 'NeSL E-Stamping', bold: true },
      { text: ', and ' },
      { text: 'Integrated Fraud Detection', bold: true },
      {
        text: ' into a unified, high-availability state machine.',
      },
    ],
    metrics: [
      {
        kicker: 'CAPITAL THROUGHPUT',
        value: '₹120Cr+ Disbursed',
        subtext: 'Achieved in first 45 days post-launch',
      },
      {
        kicker: 'PIPELINE RELIABILITY',
        value: '99.9% Success Rate',
        subtext: 'End-to-end Data Validation & Integrity',
      },
    ],
    tags: [
      'React',
      'Redux Toolkit',
      'TypeScript',
      'Document Processing',
      'Security Protocols',
      'Identity Verification',
    ],
    consoleTitle: 'DISTRIBUTED SYSTEM TOPOLOGY',
    consoleVersion: 'STABLE-PROD',
    consoleType: 'flow',
    consoleNodes: [
      {
        stepTitle: '1. Intelligent Intake',
        badgeText: 'Client-side Validation',
      },
      {
        stepTitle: '2. Integration Layer',
        badgeText: 'Parallel Async Processing',
      },
      {
        stepTitle: '3. Core Ledger',
        badgeText: 'Real-time Synchronization',
      },
    ],
    verificationText:
      'Audited & signed-off for production scale by institutional risk teams.',
  },
  {
    id: 'costen-travel-evya-payroll',
    organization: 'Procloz Enterprise',
    scaleLabel: 'Scale: 100+ Enterprise Corporations',
    title: 'Costen Travel & Expense Suite & EVYA Payroll Management System',
    narrativeParts: [
      {
        text: 'Architected and engineered two core enterprise SaaS systems: ',
      },
      { text: 'Costen Travel & Expense Management System', bold: true },
      {
        text: ' for corporate itinerary booking, policy-enforced per-diems, and automated receipt reimbursement; alongside ',
      },
      { text: 'EVYA Payroll Management System', bold: true },
      {
        text: ', executing multi-tenant statutory compliance, automated salary calculations, tax filings, and bank disbursement files across ',
      },
      { text: '100+ enterprise corporations', bold: true },
      {
        text: '.',
      },
    ],
    metrics: [
      {
        kicker: 'EXPENSE & TRAVEL AUTOMATION',
        value: '100+ Enterprise Orgs',
        subtext: 'Automated corporate policy & reimbursement',
      },
      {
        kicker: 'EVYA STATUTORY PAYROLL',
        value: '100% Tax Compliance',
        subtext: 'Multi-tenant payroll, PF/ESI/TDS & payout',
      },
    ],
    tags: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Node.js',
      'RESTful Microservices',
      'Multi-Tenant RBAC',
    ],
    consoleTitle: 'TRAVEL, EXPENSE & PAYROLL TOPOLOGY',
    consoleVersion: 'PROCLOZ-V2',
    consoleType: 'table',
    consoleNodes: [
      {
        stepTitle: 'Travel & Expense Engine',
        badgeText: 'Per-Diem & Receipt OCR',
      },
      {
        stepTitle: 'Multi-Tier Approvals',
        badgeText: 'Manager & Finance Hierarchy',
      },
      {
        stepTitle: 'EVYA Payroll Ledger',
        badgeText: 'Statutory Tax & Bank API',
      },
    ],
    verificationText: 'Enterprise-grade financial auditability & statutory compliance.',
  },
  {
    id: 'veru-workforce-engine',
    organization: 'Koenig Solutions',
    scaleLabel: 'Scale: 500+ Internal Operators',
    title: 'VERU Enterprise Workforce Management System',
    narrativeParts: [
      {
        text: 'Engineered the core Enterprise Workforce Management platform (VERU) featuring modular architecture for ',
      },
      { text: 'Attendance Management, Training & Compliance', bold: true },
      {
        text: ', and ',
      },
      { text: 'Travel Expense tracking', bold: true },
      {
        text: '. Orchestrated complex relational workflows serving 500+ operators daily with high-availability systems.',
      },
    ],
    metrics: [
      {
        kicker: 'MODULAR ARCHITECTURE',
        value: 'Attendance & Training',
        subtext: 'Unified workforce lifecycle',
      },
      {
        kicker: 'ENTERPRISE TRAVEL',
        value: 'Expense Management',
        subtext: 'Automated reimbursement flow',
      },
    ],
    tags: ['React', 'Node.js', 'MSSQL', 'Redux', 'Enterprise SaaS'],
    consoleTitle: 'WORKFORCE MANAGEMENT MODULES',
    consoleVersion: 'VERU-V2',
    consoleType: 'table',
    consoleNodes: [
      {
        stepTitle: 'Attendance & Leave',
        badgeText: 'Biometric & Shift Logic',
      },
      {
        stepTitle: 'Training Portal',
        badgeText: 'Compliance & Certification',
      },
      {
        stepTitle: 'Expense Tracker',
        badgeText: 'Travel & Reimbursement',
      },
    ],
    verificationText: 'Proven stability across continuous internal shifts.',
  },
];

export const ADDITIONAL_REPOSITORIES = [
  {
    name: 'Zelvra Silver Jewelry Storefront',
    url: 'https://zelvra-vq41.vercel.app/',
    description: 'Bespoke modern e-commerce storefront for high-end sterling silver jewelry with Supabase backend catalog management.',
    language: 'Next.js / Supabase',
    stars: 'Live',
    category: 'E-Commerce Platform',
  },
  {
    name: 'Learnify Solutions Corporate IT Training',
    url: 'https://www.learnify-solutions.com/',
    description: 'Official corporate platform for Learnify Solutions providing professional IT and networking certification courses.',
    language: 'Next.js / Tailwind',
    stars: 'Live',
    category: 'EdTech & IT Training',
  },
  {
    name: 'MedQuvia Digital Health Portal',
    url: 'https://medquvia-production.up.railway.app/',
    description: 'Full-stack healthcare consultation and clinical operations portal deployed on Railway with encrypted patient records.',
    language: 'React / Node / MongoDB',
    stars: 'Live',
    category: 'HealthTech Enterprise',
  },
  {
    name: 'NS Travel (Luxury Tours)',
    url: 'https://ns-travels-sigma.vercel.app/',
    description: 'Luxury tour and charter booking platform for a Dubai client with curated packages and combo builder.',
    language: 'Next.js / Tailwind',
    stars: 'Live',
    category: 'Luxury Tourism (Dubai)',
  },
  {
    name: 'LAC Heating Company UK',
    url: 'https://lac-heating-company.vercel.app/',
    description: 'Commercial HVAC and industrial heating engineering portal for UK enterprises with automated dispatch workflows.',
    language: 'Next.js / TypeScript',
    stars: 'Live',
    category: 'Industrial Web',
  },
  {
    name: 'ELD Trip Planner & HOS Scheduler',
    url: 'https://eld-trip-planner-ten.vercel.app/',
    description: 'FMCSA Hours of Service (HOS) compliance route planner computing mandatory rest cycles, fuel stops, and 24-hour ELD log sheets.',
    language: 'React / TypeScript',
    stars: 'Live',
    category: 'Logistics & Algorithms',
  },
  {
    name: 'Pokemon Explorer App',
    url: 'https://pokemon-app-xi-eight.vercel.app/',
    description: 'Interactive high-speed Pokemon exploration application featuring client-side search caching, stat telemetry, and pagination.',
    language: 'Next.js / PokeAPI',
    stars: 'Live',
    category: 'Interactive Web App',
  },
  {
    name: 'Aspire Financial Dashboard',
    url: 'https://aspire-dashboard-uyoj.vercel.app/',
    description: 'Executive business analytics and multi-currency capital operations dashboard with dynamic cashflow charting.',
    language: 'React / Vite / Chart.js',
    stars: 'Live',
    category: 'Fintech Analytics',
  },
  {
    name: 'GitHub Engineering Profile (@Shivank23)',
    url: 'https://github.com/Shivank23',
    description: 'Explore all 20+ open-source repositories, MCP agent harnesses, and distributed web system modules on GitHub.',
    language: 'TypeScript / Full Stack',
    stars: '20+ Repos',
    category: 'GitHub Profile',
  },
];

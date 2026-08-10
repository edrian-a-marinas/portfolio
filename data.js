const NAV_LINKS = [
  { label: 'Skills',         href: '#skills'         },
  { label: 'Experience',     href: '#experience'     },
  { label: 'Projects',       href: '#projects'       },
  { label: 'Education',      href: '#education'      },
  { label: 'Certifications', href: '#certifications' },
]

const CONTACTS = [
  {
    label: 'edrian.a.marinas@gmail.com',
    href:  'mailto:edrian.a.marinas@gmail.com',
    icon:  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="m4 8 8 6 8-6"/></svg>,
  },
  {
    label: '+63 985 470 3444',
    href:  'tel:+639854703444',
    icon:  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.97.72 2.9a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.18-1.18a2 2 0 0 1 2.11-.45c.93.35 1.9.59 2.9.72A2 2 0 0 1 22 16.92z"/></svg>,
  },
  {
    label: 'LinkedIn',
    href:  'https://linkedin.com/in/edrian-a-marinas',
    icon:  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'GitHub',
    href:  'https://github.com/edrian-a-marinas',
    icon:  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>,
  },
]

const SKILLS = [
  { category: 'Back-end',  tags: ['Python', 'FastAPI', 'Django', 'Node.js', 'Celery', 'REST APIs', 'SQLAlchemy', 'Alembic', 'AI/ML', 'LangChain', 'pandas', 'scikit-learn', 'PyTorch', 'Pytest', 'Pydantic', 'WebSocket', 'Webhooks'] },
  { category: 'Front-end', tags: ['TypeScript','React.js', 'TanStack (Query, Router, Table)', 'Zod', 'JavaScript', 'HTML/CSS',  'TailwindCSS', 'Radix UI', 'Vite'] },  
  { category: 'Database',  tags: ['PostgreSQL', 'pgvector', 'SQL', 'Redis', 'MongoDB', 'NoSQL', 'MySQL', 'Supabase'] },
  { category: 'Tools',     tags: ['AWS (EC2, RDS, S3, IAM, ALB, SQS)', 'Docker', 'Git', 'GitHub Actions (CI/CD pipelines)', 'Postman', 'Linux/CLI', 'Caddy (reverse proxy)'] },
  { category: 'Concepts',  tags: ['Performance Optimization', 'Redis and Client-Side Caching', 'Data Validations', 'CORS','Role-Based Access Control (RBAC)', 'Migrations', 'Rate Limiting', 'Security Headers', 'Background Task Processing', 'Auth (cookies/JWT/oAuth)', 'LLM API Integration', 'RAG Architecture'] },
]

const EXPERIENCE = [
  {
    org:  'SupSoft Tech',
    date: 'March 2026 – June 2026',
    role: 'Full Stack Developer Intern (500 hours)',
    live: null,
    demo: null,
    bullets: [
      "Solved full-stack issues that spanned both frontend and backend, developing a habit of verifying data at its source.",
      "Reduced backend and database load using end-to-end caching, database indexing, and pagination across the stack.",
      "Reviewed codebases of our org's large, established apps alongside seniors, and picked up real lessons on how to maintain and scale a project as it grows.",
      "Enforced access control and permission checks at the API level rather than relying on the interface alone, securing endpoints against direct requests and bypass attempts.",
      "Validated data at every layer — frontend and backend — to prevent invalid or inconsistent data from reaching the database.",
      "Ran automated tests and manual endpoint checks before every push, with QA reviewing and questioning pull requests before merging through the team's CI/CD pipeline.",
    ],
  },
]

const PROJECTS = [
  {
    name:     'SiteSync',
    live:     'https://getsitesync.vercel.app',
    demo:      'https://drive.google.com/file/d/1l8umfMvtsFmqvmx9zrP3nbgHdjgkLYcd/view?usp=sharing',
    github:   'https://github.com/edrian-a-marinas/sitesync-api', 
    docs:     [
      { label: 'Brief', href: 'https://github.com/edrian-a-marinas/sitesync-client/blob/main/brief.md' },
      { label: 'Roadmap', href: 'https://github.com/edrian-a-marinas/sitesync-client/blob/main/roadmap.md' },
    ],
    year:     'July 2026',
    subtitle: 'Construction Site Management Platform — RBAC (Owner, PM, Worker)',
    bullets: [
      'Designed 77 REST API endpoints across 16 relational database tables in a monolithic FastAPI backend, using SQLAlchemy models and Alembic-managed migrations for consistent, scalable code organization.',
      'Built a cache-first Redis layer with TTL and pattern-based invalidation, offloaded report generation, AI queries, and ML retraining to Celery workers via AWS SQS, and added real-time WebSocket notifications backed by MongoDB, with Slack webhook alerts on incidents.',
      'Built a LangChain + pgvector RAG AI LLM API assistant with semantic similarity search over embedded records, and trained 3 RandomForest models on 2,955 seeded daily logs and 8,521 material records spanning 2024–2026 to predict and forecast project risk.',
      'Deployed via manually SSH-configured AWS EC2 running 5 Dockerized services, with RDS/S3 for database/storage, backed by a GitHub Actions CI/CD pipeline that runs 492 pytest tests with 91% coverage across all core business before auto-deploying to production EC2',
      'Built a role-gated React/TypeScript with server-driven pagination, using TanStack Query to cache to prevent redundant backend hits. with useMutations — keeping data live without manual refreshes — and Zod to validate all forms client-side before any request is sent.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Alembic', 'Redis', 'Celery', 'WebSocket', 'Webhooks','AWS (EC2, RDS, S3, SQS)', 'Docker', 'pandas','scikit-learn', 'PyTorch', 'Pytest', 'TypeScript', 'React', 'TanStack (Query, Router, Table)', 'Zod'],
  },
  {
    name:     'SkyLink',
    live:     'https://skylink-ph.vercel.app',
    demo:     'https://drive.google.com/file/d/1qPAw76EiD4wf2H8K3PXTD4AjTSnyFDEk/view?usp=drive_link',
    github:   'https://github.com/edrian-a-marinas/skylink-api', 
    year:     'May 2026',
    subtitle: 'Skylink — Flight Booking & Reservation Management — RBAC (Admin, Passenger)',
    bullets: [
      'Designed 65 REST API endpoints across 15 relational database tables, structured into a modular routers/services/schemas architecture with SQLAlchemy models and Alembic-managed migrations.',
      'Built a Redis-backed caching layer with pattern-based invalidation on flight search, per-endpoint rate limiting with automatic in-memory fallback.',
      'Trained Linear/Logistic Regression models on 986 seeded bookings for revenue forecasting, demand prediction, and cancellation risk scoring — plus rule-based dynamic pricing and anomaly detection.',
      'Built a multi-step booking flow (seat selection, passenger details, payment) with TanStack Query caching and client-side validation before requests reach the backend.',
      'Wrote 306 Pytest tests automated through a CI/CD pipeline, and integrated Google OAuth alongside JWT-based authentication and account verification.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Alembic', 'Redis', 'Pydantic', 'SlowAPI', 'Pytest', 'Render', 'Supabase', 'Google OAuth', 'Vercel', 'TypeScript', 'React', 'TanStack Query', 'Zod'],
  },
  {
    name:     'TransacScope',
    live:     'https://transacscope.vercel.app',
    demo:     'https://drive.google.com/file/d/1fXCICTBrgaCmMWBpuK1JLUi5SkQ1x5tR/view?usp=sharing',
    github:   'https://github.com/edrian-a-marinas/TransacScope',
    year:     'Apr 2026',
    subtitle: 'Business Finance Management — RBAC (Super Admin, Admin, Standard User)',
    bullets: [
      'Developed 39 secured REST API endpoints across 11 database tables, managing 1,000+ transactions.',
      'Integrated an AI financial assistant with role-aware scoping, keyword filtering, and session-scoped context caching.',
      'Implemented in-memory caching (TTL + Invalidation), connection pooling, rate limiting, and Tanstack Query.',
      'Enforced role-based access control (Super Admin, Admin, Standard User) at the API level, not just the UI — with endpoints for promoting, demoting, activating, and deactivating user accounts.',
      'Enforced email verification on registration using a 6-digit code with resend cooldown and max-send limits before account activation.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Pydantic', 'Pytest', 'Email Verification', 'Render', 'Supabase', 'Vercel', 'TypeScript', 'React', 'Tanstack Query', 'Zod'],
  },
]

const EXTRA_PROJECTS = [
  {
    name:     'BirdCare (Capstone Project)',
    live:     'https://birdcares.online',
    demo:     'https://drive.google.com/file/d/18t69WY0AAbqG-ekjdDqnoxnfqISeCxHw/view',
    github:   null,
    year:     'Nov 2025',
    subtitle: 'Environment Monitoring App with IoT',
    bullets: [
      'Developed BirdCare: mobile app for real-time monitoring and alerting of bird care conditions.',
      'Built threshold alerts and graph visualizations for real-time and historical data.',
      'Developed threshold-based alerts to notify users when environmental readings exceed safe ranges.',
    ],
    stack: ['Python', 'FastAPI', 'REST API', 'React', 'Firebase', 'IoT', 'Rasberrypi Pico W'],
  },
    {
    name:     'Ask Edrian',
    live:     'https://edrian-ai-profile-assistant.vercel.app',
    demo:     'https://drive.google.com/file/d/1Vy7cWOe9JEnhf4KeGjeI-g6dNRZ-LtMr/view?usp=sharing',
    github:   'https://github.com/edrian-a-marinas/Personal-AI-Profile-Assistant',
    year:     'Jan 2026',
    subtitle: 'AI-powered personal chatbot',
    bullets: [
      'Built a personal AI chatbot, powered by Groq AI, that answers questions about me.',
      'Implemented backend AI processing with API endpoints and a responsive frontend for interactive chat.',
    ],
    stack: ['Python', 'FastAPI', 'REST API', 'React', 'Groq', 'REST API', 'JavaScript'],
  },
  {
    name:     'Water Level & Temperature Monitoring',
    live:     null,
    demo:     'https://drive.google.com/file/d/1YUDYgXpGBsNw0J_L0D35D3lgeAxLEUCc/view?usp=sharing',
    github:   'https://github.com/edrian-a-marinas/water_monitoring_mysql',
    year:     'May 2025',
    subtitle: 'Real-time water level and temperature monitoring with IoT and desktop GUI',
    bullets: [
      'Built a real-time monitoring system using a Raspberry Pi Pico W with an HCSR04 ultrasonic sensor and DS18B20 temperature sensor, transmitting live readings via TCP/IP over Wi-Fi.',
      'Developed a desktop GUI in Python (Tkinter + Matplotlib) that receives sensor data, displays live graphs, and categorizes water level and temperature into alert states.',
      'All readings are automatically logged into a MySQL database via a dedicated connector module, with critical alerts (very low/empty water) visually flagged on the graph.',
    ],
    stack: ['Python', 'Tkinter', 'Matplotlib', 'MySQL', 'Raspberry Pi Pico W', 'MicroPython', 'TCP/IP'],
  },
]

const EDUCATION = [
  {
    school: 'Our Lady of Fatima University',
    degree: 'Bachelor of Science in Information Technology',
    date: '2022 – 2026',
    certUrl: '/docs/graduation_certificate.pdf',
    achievements: [
      { text: 'BirdCare — capstone project nominated for Best in Capstone (see Projects above for full details)', type: 'gallery', key: 'BirdCare (Capstone Project)' },
      { text: 'CodeChum certificate — Integrated Programming Technologies (Python), First Finisher', type: 'cert', key: 'Integrated Programming Technologies (Python) · CodeChum · Academic Course' },
      { text: 'Final GWA: 1.85 (1.0 highest, 3.0 lowest)', type: 'plain' },
    ],
  },
  { school: 'Arellano University', degree: 'STEM Strand', date: '2020 – 2022' },
]

const CERTIFICATIONS = [
  { name: 'IT Specialist – Python · Certiport Pearson',                                                                   year: '2026', images: ['certs/cert1.webp'] },
  { name: 'Digital Fabric: AI Imperatives and Risk, Quantum Computing, and Automated Business · Seminar and Convention',  year: '2025', images: ['certs/cert2.webp'] },
  { name: 'Python Essentials 1 & 2 Course · Cisco NetAcad',                                                               year: '2024', images: ['certs/cert3a.webp', 'certs/cert3b.webp'] },
  { name: 'Backend & Frontend Web Development · Udemy',                                                                   year: '2024', images: ['certs/cert4.webp'] },
  { name: 'Integrated Programming Technologies (Python) · CodeChum · Academic Course',                                   year: '2025', images: ['certs/cert5.webp'] },
]
const GALLERY = {
  'SiteSync': [
    'gallery/sitesync/1.webp',
    'gallery/sitesync/2.webp',
    'gallery/sitesync/3.webp',
    'gallery/sitesync/4.webp',
    'gallery/sitesync/5.webp',
    'gallery/sitesync/6.webp',
    'gallery/sitesync/7.webp',
    'gallery/sitesync/8.webp',
    'gallery/sitesync/9.webp',
    'gallery/sitesync/10.webp',
  ],
    'SkyLink': [
    'gallery/skylink/1.webp',
    'gallery/skylink/2.webp',
    'gallery/skylink/3.webp',
    'gallery/skylink/4.webp',
    'gallery/skylink/5.webp',
    'gallery/skylink/6.webp',
    'gallery/skylink/7.webp',
    'gallery/skylink/8.webp',
    'gallery/skylink/9.webp',
    'gallery/skylink/10.webp',
    'gallery/skylink/11.webp',

  ],
  'TransacScope': [
    'gallery/transacscope/1.webp',
    'gallery/transacscope/2.webp',
    'gallery/transacscope/3.webp',
    'gallery/transacscope/4.webp',
    'gallery/transacscope/5.webp',
    'gallery/transacscope/6.webp',
    'gallery/transacscope/7.webp',
    'gallery/transacscope/8.webp',
    'gallery/transacscope/9.webp',
    'gallery/transacscope/10.webp',
  ],
  'BirdCare (Capstone Project)':[
    'gallery/birdcare/1.webp',
    'gallery/birdcare/2.webp',
    'gallery/birdcare/3.webp',
    'gallery/birdcare/4.webp',
    'gallery/birdcare/5.webp',
    'gallery/birdcare/6.webp',
  ],
  'Ask Edrian': [
    'gallery/ask-edrian/1.webp',
  ],
  'Water Level & Temperature Monitoring': [
    'gallery/water-monitoring/1.webp',
    'gallery/water-monitoring/2.webp',
    'gallery/water-monitoring/3.webp',
    'gallery/water-monitoring/4.webp',
  ],
}

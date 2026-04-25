// data.js — edit this file to update your portfolio content.

const NAV_LINKS = [
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Education',  href: '#education'  },
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
  { category: 'Back-end',  tags: ['Python', 'FastAPI', 'REST APIs', 'Pydantic', 'asyncpg', 'SQLAlchemy'] },
  { category: 'Front-end', tags: ['TypeScript', 'React', 'JavaScript', 'Zod', 'Vite', 'Tailwind', 'HTML/CSS'] },  
  { category: 'Database',  tags: ['PostgreSQL', 'MySQL', 'SQL', 'Supabase', 'DB Modeling', 'Schemas'] },
  { category: 'Tools',     tags: ['Git', 'GitHub Actions (CI/CD)', 'Postman', 'Vercel', 'Render', 'Linux/CLI', 'VS Code'] },
  { category: 'Concepts',  tags: ['Role-Based Access Control', 'Authentication (JWT)', 'Row-Level Security (RLS)', 'End-to-End Type Safety', 'Schema Validation', 'Rate Limiting', 'CORS', 'Secrets Management', 'Security Headers'] },
]

const PROJECTS = [
  {
    name:     'TransacScope',
    live:     'https://transacscope.vercel.app',
    demo:     'https://drive.google.com/file/d/1fXCICTBrgaCmMWBpuK1JLUi5SkQ1x5tR/view?usp=sharing',
    github:   'https://github.com/edrian-a-marinas/TransacScope',
    year:     '2026',
    subtitle: 'Role-Based Business Finance & Transaction Management System',
    bullets: [
      'A finance management web-app adaptable to any business, where admins can fully manage categories, users, and roles to fit their operations.',
      'Implements role-based access control (Super Admin, Admin, Standard User) with JWT authentication, email verification, and backend rate limiting to prevent brute-force attacks.',
      '37 secured REST API endpoints across 11 database tables — covering transaction CRUD, deletion workflows, notifications, audit logs, and report generation. Tested via Postman with Bearer token auth.',
      'Production-hardened backend — CORS restrictions, trusted host validation, security headers (X-Frame-Options, HSTS, CSP), and environment-based debug gating.',      
      'End-to-end type safety and data validation via Pydantic (backend) and Zod (frontend) — database constraints: CHECK, FK integrity, ENUMs, and partial unique indexes.',
    ],
    stack: ['Python', 'FastAPI', 'REST API', 'Pydantic', 'PostgreSQL', 'TypeScript', 'React', 'Zod', 'Axios', 'Vite'],
  },
  {
    name:     'Ask Edrian',
    live:     'https://edrian-ai-profile-assistant.vercel.app',
    demo:     'https://drive.google.com/file/d/1Vy7cWOe9JEnhf4KeGjeI-g6dNRZ-LtMr/view?usp=sharing',
    github:   'https://github.com/edrian-a-marinas/Personal-AI-Profile-Assistant',
    year:     '2026',
    subtitle: 'AI-powered personal chatbot that answers questions about me',
    bullets: [
      'Built a personal AI chatbot using FastAPI and React, powered by Groq AI — answers questions about my skills, background, projects, and personal details.',
      'Implemented keyword-based fast responses for common queries (greetings, date, jokes) for instant replies, with Groq AI as the fallback for open-ended and complex questions.',
    ],
    stack: ['Python', 'FastAPI', 'REST API', 'React', 'Groq', 'REST API', 'JavaScript'],
  },
]

const EXTRA_PROJECTS = [
  {
    name:     'Water Level & Temperature Monitoring',
    live:     null,
    demo:     'https://drive.google.com/file/d/1YUDYgXpGBsNw0J_L0D35D3lgeAxLEUCc/view?usp=sharing',
    github:   'https://github.com/edrian-a-marinas/water_monitoring_mysql',
    year:     '2025',
    subtitle: 'Real-time water level and temperature monitoring with IoT and desktop GUI',
    bullets: [
      'Built a real-time monitoring system using a Raspberry Pi Pico W with an HCSR04 ultrasonic sensor and DS18B20 temperature sensor, transmitting live readings via TCP/IP over Wi-Fi.',
      'Developed a desktop GUI in Python (Tkinter + Matplotlib) that receives sensor data, displays live graphs, and categorizes water level and temperature into alert states.',
      'All readings are automatically logged into a MySQL database via a dedicated connector module, with critical alerts (very low/empty water) visually flagged on the graph.',
    ],
    stack: ['Python', 'Tkinter', 'Matplotlib', 'MySQL', 'Raspberry Pi Pico W', 'MicroPython', 'TCP/IP'],
  },
  {
    name:     'Payroll CLI',
    live:     null,
    demo:     'https://drive.google.com/file/d/1T2wwMvsthXSfjcYccfNE6KXKw8S-nATm/view',
    github:   'https://github.com/edrian-a-marinas/payroll_CLI_postgreSQL',
    year:     '2024',
    subtitle: 'Command-line Payroll & Employee Management System with PostgreSQL',
    bullets: [
      'Built a menu-driven CLI system in Python for full employee CRUD — managing status, departments, and job assignments across a relational PostgreSQL schema.',
      'Implemented payroll generation with overtime and deduction calculations, duplicate period prevention, and summary reports with total and average net pay.',
      'Designed a normalized database schema across 5 tables (employees, departments, jobs, payroll_periods, payroll_records) with FK constraints and safe deletion handling.',
    ],
    stack: ['Python', 'PostgreSQL', 'asyncpg', 'SQL', 'CLI'],
  },
]

const EXPERIENCE = [
  {
    org:  'CertiCode (SupSoft Tech)',
    date: 'March 2026 – Present',
    role: 'Full Stack Developer Intern',
    live: null,
    demo: null,
    bullets: [
      'Developed and maintained RESTful APIs and backend services, implementing core business logic, secured endpoints, and async processing for optimized performance.',
      'Designed and structured database models, schemas, and tables with clean relational architecture.',
      'Enforced end-to-end data validation and type safety across database, backend, and frontend layers to prevent invalid data from reaching the database.',
      'Implemented role-based access control with distinct admin and user permissions for authentication and authorization.',
      'Integrated third-party payment gateway APIs, handling secure transaction flows and persisting payment status to the database.',
      'Connected backend APIs to frontend interfaces using Axios and TypeScript, ensuring type-safe client-server communication.',
      'Contributed as part of a team to develop features, utilizing GitHub for version control, Jira for task management, and GitHub Actions for CI/CD pipelines.',
    ],
  },
  {
    org:  'Our Lady of Fatima University',
    date: 'Sept 2025 – Nov 2025',
    role: 'Software Developer',
    live: null,
    demo: 'https://drive.google.com/file/d/18t69WY0AAbqG-ekjdDqnoxnfqISeCxHw/view',
    bullets: [
      'Built a React PWA with FastAPI backend, enabling bird owners to monitor live environmental data through a mobile-friendly dashboard.',
      'Integrated Firebase as the real-time data layer, consuming IoT sensor readings and displaying temperature, humidity, CO₂, and more.',
      'Developed threshold-based alerts to notify users when environmental readings exceed safe ranges.',
      'Implemented historical data logging and live graph visualizations for tracking past and current sensor readings.',
    ],
  },
]

const EDUCATION = [
  { school: 'Our Lady of Fatima University', degree: 'Bachelor of Science in Information Technology', date: '2022 – 2026' },
  { school: 'Arellano University',           degree: 'STEM Strand',                                  date: '2020 – 2022' },
]

const CERTIFICATIONS = [
  { name: 'IT Specialist – Python · Certiport Pearson',                                                                   year: '2026', images: ['certs/cert1.webp'] },
  { name: 'Digital Fabric: AI Imperatives and Risk, Quantum Computing, and Automated Business · Seminar and Convention',  year: '2025', images: ['certs/cert2.webp'] },
  { name: 'Python Essentials 1 & 2 Course · Cisco NetAcad',                                                               year: '2024', images: ['certs/cert3a.webp', 'certs/cert3b.webp'] },
  { name: 'Backend & Frontend Web Development · Udemy',                                                                   year: '2024', images: ['certs/cert4.webp'] },
  { name: 'Integrated Programming Technologies (Python) · CodeChum · Academic Course',                                   year: '2025', images: ['certs/cert5.webp'] },
]

// Add your screenshot filenames here per project.
const GALLERY = {
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
  'Ask Edrian': [
    'gallery/ask-edrian/1.webp',
  ],
  'Water Level & Temperature Monitoring': [
    'gallery/water-monitoring/1.webp',
    'gallery/water-monitoring/2.webp',
    'gallery/water-monitoring/3.webp',
    'gallery/water-monitoring/4.webp',
  ],
  'Payroll CLI': [
    null
  ],
}
// App.jsx — edit the DATA section at the top to update your portfolio.
const { useState, useEffect } = React
// ── DATA ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
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
  { category: 'Back-end',  tags: ['Python', 'FastAPI', 'REST APIs', 'Pydantic', 'asyncpg', 'Type Annotations'] },
  { category: 'Database',  tags: ['PostgreSQL', 'MySQL', 'SQL', 'Supabase', 'DB Modeling'] },
  { category: 'Front-end', tags: ['TypeScript', 'React', 'Zod', 'Vite', 'JavaScript', 'HTML/CSS', 'Tailwind'] },
  { category: 'Tools',     tags: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'Linux/CLI', 'VS Code'] },
  { category: 'Concepts',  tags: ['Role-Based Access Control', 'Authentication (JWT)', 'End-to-End Type Safety', 'Schema Validation', 'Rate Limiting', 'CORS', 'Secrets Management', 'Security Headers'] },
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
      'Enforced password security — 90-day expiry with a forced change gate, 7-day reuse prevention via password history, and a protected demo account with role-locked access.',
      '13 modal components handling the full user interaction layer — including multi-step flows, role-gated views, and real-time notification deep-linking.',
      'End-to-end type safety and data validation via Pydantic (backend) and Zod (frontend) — database constraints: CHECK, FK integrity, ENUMs, and partial unique indexes.',
      'Production-hardened backend — CORS restrictions, trusted host validation, security headers (X-Frame-Options, HSTS, CSP), and environment-based debug gating.',
    ],
    stack: ['Python', 'FastAPI', 'Pydantic', 'PostgreSQL', 'React', 'TypeScript', 'Zod', 'Axios', 'Vite'],
  },
  {
    name:     'Personal AI Profile Assistant',
    live:     null,
    demo:     'https://drive.google.com/file/d/1QnFidwca1VCwhxpipPuqP6FI_3ptGXBt/view?usp=sharing',
    github:   'https://github.com/edrian-a-marinas/Personal-AI-Profile-Assistant',
    year:     '2026',
    subtitle: 'AI-powered personal chatbot that answers questions about me',
    bullets: [
      'Built a personal AI chatbot using FastAPI and React, powered by a locally-running Ollama model — answers questions about my skills, background, and personal details.',
      'Handles complex and open-ended questions via the Ollama AI backend, running entirely locally on-device without any external API calls.',
      'Implemented fast predefined responses for common queries (greetings, age, contacts) for instant replies without hitting the AI model.',
    ],
    stack: ['Python', 'FastAPI', 'React', 'Ollama', 'REST API', 'JavaScript'],
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
    role: 'Software Developer · Capstone Project',
    org:  'BirdCare – Smart Cage for Optimal Environmental Management',
    date: 'Mar 2025 – Nov 2025',
    live: 'https://birdcares.online/',
    demo: 'https://drive.google.com/file/d/18t69WY0AAbqG-ekjdDqnoxnfqISeCxHw/view',
    bullets: [
      'Developed an installable mobile app (PWA) using React.js connected to a FastAPI back-end, enabling bird owners to monitor real-time sensor readings, receive threshold alerts, watch a live ESP32-CAM video feed, and access historical data logs.',
      'Integrated a multi-sensor IoT network (BME680, SCD40, MQ135, PMS5003, JSN-SR04T ultrasonic) via a Raspberry Pi Pico W, transmitting environmental data — temperature, humidity, CO₂, NH₃, VOCs, particulate matter, food and water levels — to Firebase in real time.',
    ],
  },
]
const EDUCATION = [
  { school: 'Our Lady of Fatima University', degree: 'Bachelor of Science in Information Technology', date: '2022 – 2026' },
  { school: 'Arellano University',           degree: 'STEM Strand',                                  date: '2020 – 2022'    },
]
const CERTIFICATIONS = [
  { name: 'IT Specialist – Python · Certiport Pearson',                                                                   year: '2026', images: ['certs/cert1.webp'] },
  { name: 'Digital Fabric: AI Imperatives and Risk, Quantum Computing, and Automated Business · Seminar and Convention',  year: '2025', images: ['certs/cert2.webp'] },
  { name: 'Python Essentials 1 & 2 Course · Cisco NetAcad',                                                               year: '2024', images: ['certs/cert3a.webp', 'certs/cert3b.webp'] },
  { name: 'Backend & Frontend Web Development · Udemy',                                                                   year: '2024', images: 'certs/cert4.webp' },
  { name: 'Integrated Programming Technologies (Python) · CodeChum · Academic Course',                                   year: '2025', images: 'certs/cert5.webp' },
]
// ── ICONS ─────────────────────────────────────────────────────────────────────
const IconExternal = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)
const IconVideo = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2"/>
  </svg>
)
const IconGitHub = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="11" height="11">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
  </svg>
)
// ── LIGHTBOX ──────────────────────────────────────────────────────────────────
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(0,0,0,0.75)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px', backdropFilter: 'blur(4px)',
      }}
    >
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '340px', width: '100%' }}>
        <img
          src={src} alt={alt}
          style={{ width: '100%', borderRadius: '12px', display: 'block', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}
        />
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '-14px', right: '-14px',
            width: '32px', height: '32px', borderRadius: '50%',
            background: 'white', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            fontSize: '16px', color: '#333', fontWeight: 700,
          }}
          aria-label="Close"
        >×</button>
      </div>
    </div>
  )
}
// ── NAV ───────────────────────────────────────────────────────────────────────
function Nav({ hoveredSection, activeSection }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <nav>
      <div className="nav-inner">
        <a className="nav-name" href="#hero" onClick={e => scrollTo(e, '#hero')}>
          {isMobile ? 'Edrian' : 'Edrian Mariñas'}
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map(link => {
            const id = link.href.slice(1)
            const isActive = isMobile ? activeSection === id : hoveredSection === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={isActive ? 'active' : ''}
                  onClick={e => scrollTo(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
// ── SECTION WRAPPER ───────────────────────────────────────────────────────────
function S({ id, onHover, children }) {
  return (
    <section
      id={id}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      {children}
    </section>
  )
}
// ── SECTIONS ──────────────────────────────────────────────────────────────────
function Hero({ onPhotoClick, onHover }) {
  return (
    <section id="hero" onMouseEnter={() => onHover(null)}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-name">Edrian Aldrin C. Mariñas</h1>
            <p className="hero-title">Software Developer · Metro Manila, PH</p>
            <p className="hero-bio">
              Experienced in building APIs using Python and FastAPI, working with databases
              PostgreSQL and MySQL, and integrating React frontends with backend services.
              Focused on end-to-end data integrity — from database constraints and schema
              validation to runtime type safety — to catch errors at every layer before
              they reach production.
            </p>
            <div className="hero-contacts">
              {CONTACTS.map(c => (
                <a
                  key={c.label}
                  className="contact-pill"
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {c.icon}{c.label}
                </a>
              ))}
              <a className="contact-pill contact-pill--resume" href="resume_marinas.pdf" download>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Resume
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap" onClick={onPhotoClick} title="Click to zoom">
            <img src="Edrian2x2.jpg" alt="Edrian Mariñas" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}
function Skills({ onHover }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  if (isMobile) return <MobileSkills onHover={onHover} S={S} />
  return (
    <S id="skills" onHover={onHover}>
      <div className="container">
        <p className="section-label">Skills</p>
        <div className="skills-grid desktop-reveal">
          {SKILLS.map(group => (
            <React.Fragment key={group.category}>
              <span className="skill-cat">{group.category}</span>
              <div className="skill-tags">
                {group.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </S>
  )
}
function ProjectCard({ p }) {
  return (
    <div className="project-card desktop-reveal">
      <div className="project-top">
        <span className="project-name">{p.name}</span>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {p.live && (
            <a className="project-live" href={p.live} target="_blank" rel="noopener noreferrer">
              <IconExternal /> Live Demo
            </a>
          )}
          {p.demo && (
            <a className="project-demo" href={p.demo} target="_blank" rel="noopener noreferrer">
              <IconVideo /> Demo Vid
            </a>
          )}
          {p.github && (
            <a className="project-github" href={p.github} target="_blank" rel="noopener noreferrer">
              <IconGitHub /> GitHub
            </a>
          )}
        </div>
      </div>
      <p className="project-subtitle">
        {p.subtitle}{p.year && <span className="project-year"> · {p.year}</span>}
      </p>
      <ul className="project-bullets">
        {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <div className="project-stack">
        {p.stack.map(s => <span key={s} className="stack-tag">{s}</span>)}
      </div>
    </div>
  )
}
function Projects({ onHover }) {
  const [expanded, setExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
  const allProjects = [...PROJECTS, ...EXTRA_PROJECTS]
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  if (isMobile) return (
    <MobileProjects onHover={onHover} allProjects={allProjects} S={S} />
  )
  return (
    <S id="projects" onHover={onHover}>
      <div className="container">
        <p className="section-label">Projects</p>
        {PROJECTS.map(p => <ProjectCard key={p.name} p={p} />)}
        {EXTRA_PROJECTS.length > 0 && (
          <>
            <div className={`extra-projects ${expanded ? 'extra-projects--open' : ''}`}>
              <div className="extra-projects-inner">
                {EXTRA_PROJECTS.map(p => <ProjectCard key={p.name} p={p} />)}
              </div>
            </div>
            <button
              className="see-more-btn"
              style={{ marginTop: expanded ? '20px' : '0' }}
              onClick={() => setExpanded(prev => !prev)}
            >
              <span>{expanded ? 'Hide projects' : 'See more projects'}</span>
              <svg
                className={`see-more-chevron ${expanded ? 'see-more-chevron--up' : ''}`}
                fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
          </>
        )}
      </div>
    </S>
  )
}
function Experience({ onHover }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  if (isMobile) return <MobileExperience onHover={onHover} S={S} />
  return (
    <S id="experience" onHover={onHover}>
      <div className="container">
        <p className="section-label">Experience</p>
        {EXPERIENCE.map(e => (
          <div key={e.role + e.org} className="project-card desktop-reveal" style={{ marginBottom: '20px' }}>
            <div className="project-top">
              <div>
                <p className="exp-role">{e.role}</p>
                <p className="exp-org">{e.org} · <span className="exp-date">{e.date}</span></p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {e.live && (
                  <a className="project-live" href={e.live} target="_blank" rel="noopener noreferrer">
                    <IconExternal /> Live Demo
                  </a>
                )}
                {e.demo && (
                  <a className="project-demo" href={e.demo} target="_blank" rel="noopener noreferrer">
                    <IconVideo /> Demo Vid
                  </a>
                )}
              </div>
            </div>
            <ul className="exp-bullets" style={{ marginTop: '12px' }}>
              {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </S>
  )
}
function Education({ onHover }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  if (isMobile) return <MobileEducation onHover={onHover} S={S} />
  return (
    <S id="education" onHover={onHover}>
      <div className="container">
        <p className="section-label">Education</p>
        {EDUCATION.map(e => (
          <div key={e.school} className="edu-item desktop-reveal">
            <div>
              <p className="edu-school">{e.school}</p>
              <p className="edu-degree">{e.degree}</p>
            </div>
            <span className="edu-date">{e.date}</span>
          </div>
        ))}
      </div>
    </S>
  )
}
function Certifications({ onHover }) {
  const [imgIdx, setImgIdx] = useState(null)
  const [touchStartX, setTouchStartX] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
  const [preview, setPreview] = useState(null) // { src, x, y }
  const allImgs = CERTIFICATIONS.flatMap(c =>
    Array.isArray(c.images) ? c.images : c.images ? [c.images] : []
  )
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  const handleKey = React.useCallback(e => {
    if (imgIdx === null) return
    if (e.key === 'ArrowRight') setImgIdx(i => (i + 1) % allImgs.length)
    if (e.key === 'ArrowLeft')  setImgIdx(i => (i - 1 + allImgs.length) % allImgs.length)
    if (e.key === 'Escape')     setImgIdx(null)
  }, [imgIdx, allImgs.length])
  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])
  const openCert = (c) => {
    const firstImg = Array.isArray(c.images) ? c.images[0] : c.images
    const idx = allImgs.indexOf(firstImg)
    if (idx !== -1) setImgIdx(idx)
  }
  const handleCertMouseMove = (e, src) => {
    setPreview({ src, x: e.clientX, y: e.clientY })
  }
  const handleCertMouseLeave = () => setPreview(null)
  if (isMobile) return (
    <MobileCertifications
      onHover={onHover} S={S}
      imgIdx={imgIdx} setImgIdx={setImgIdx}
      allImgs={allImgs} openCert={openCert}
      touchStartX={touchStartX} setTouchStartX={setTouchStartX}
    />
  )
  return (
    <S id="certifications" onHover={onHover}>
      {/* Floating preview */}
      {preview && (
        <div style={{
          position: 'fixed',
          left: preview.x + 18,
          top: preview.y - 80,
          zIndex: 998,
          pointerEvents: 'none',
          background: 'white',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
          padding: '6px',
          width: '220px',
          transition: 'opacity 0.15s',
        }}>
          <img
            src={preview.src}
            alt="Certificate preview"
            style={{ width: '100%', borderRadius: '6px', display: 'block' }}
          />
        </div>
      )}
      {imgIdx !== null && (
        <div className="cert-lightbox-overlay" onClick={() => setImgIdx(null)}>
          <div
            className="cert-lightbox-inner"
            onClick={e => e.stopPropagation()}
            onTouchStart={e => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={e => {
              if (touchStartX === null) return
              const diff = touchStartX - e.changedTouches[0].clientX
              if (diff > 40)  setImgIdx(i => (i + 1) % allImgs.length)
              if (diff < -40) setImgIdx(i => (i - 1 + allImgs.length) % allImgs.length)
              setTouchStartX(null)
            }}
          >
            <img src={allImgs[imgIdx]} alt="Certificate" className="cert-lightbox-img" />
            <button className="cert-lightbox-btn cert-lightbox-btn--prev" onClick={() => setImgIdx(i => (i - 1 + allImgs.length) % allImgs.length)}>‹</button>
            <button className="cert-lightbox-btn cert-lightbox-btn--next" onClick={() => setImgIdx(i => (i + 1) % allImgs.length)}>›</button>
            <p className="cert-lightbox-counter">{imgIdx + 1} / {allImgs.length}</p>
          </div>
        </div>
      )}
      <div className="container">
        <p className="section-label">Certifications &amp; Training</p>
        <div className="cert-list desktop-reveal">
          {CERTIFICATIONS.map(c => {
            const firstImg = Array.isArray(c.images) ? c.images[0] : c.images
            return (
              <div
                key={c.name}
                className={`cert-item ${c.images ? 'cert-item--clickable' : ''}`}
                onClick={() => c.images && openCert(c)}
                onMouseMove={c.images ? e => handleCertMouseMove(e, firstImg) : undefined}
                onMouseLeave={c.images ? handleCertMouseLeave : undefined}
                style={{ cursor: c.images ? 'pointer' : 'default' }}
              >
                <div className="cert-dot" />
                <div>
                  <p className="cert-name">{c.name}</p>
                  <p className="cert-year">{c.year}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </S>
  )
}
function Footer() {
  const footerContacts = CONTACTS.filter(c =>
    c.href.startsWith('mailto:') || c.label === 'LinkedIn'
  )
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <footer>
      <div className="footer-contacts">
        {footerContacts.map(c => (
          <a
            key={c.label}
            className="contact-pill"
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {c.icon}{c.label}
          </a>
        ))}
      </div>
      <p className="footer-copy">Edrian Aldrin C. Mariñas · Metro Manila, PH</p>
      <button onClick={scrollToTop} className="back-to-top">
        <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" width="14" height="14">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
        Back to top
      </button>
    </footer>
  )
}
// ── APP ───────────────────────────────────────────────────────────────────────
function App() {
  const [hoveredSection, setHoveredSection] = useState(null)
  const [activeSection, setActiveSection]   = useState(null)
  const [lightbox, setLightbox] = useState(false)
  useMobileScrollReveal()
  useDesktopScrollReveal()

  // Mobile: highlight nav link based on which section is in view
  useEffect(() => {
    if (window.innerWidth > 600) return
    const ids = NAV_LINKS.map(l => l.href.slice(1))
    const observers = []
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <>
      {lightbox && (
        <Lightbox
          src="Edrian2x2.jpg"
          alt="Edrian Mariñas"
          onClose={() => setLightbox(false)}
        />
      )}
      <Nav hoveredSection={hoveredSection} activeSection={activeSection} />
      <Hero       onPhotoClick={() => setLightbox(true)} onHover={setHoveredSection} />
      <Skills     onHover={setHoveredSection} />
      <Projects   onHover={setHoveredSection} />
      <Experience onHover={setHoveredSection} />
      <Education  onHover={setHoveredSection} />
      <Certifications onHover={setHoveredSection} />
      <Footer />
    </>
  )
}
// ── MOUNT ─────────────────────────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
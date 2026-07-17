// components/Hero.jsx

function Hero({ onPhotoClick, onHover }) {
  return (
    <section id="hero" onMouseEnter={() => onHover(null)}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-name">Edrian Aldrin C. Mariñas</h1>
            <p className="hero-title">Software Developer · Metro Manila, PH</p>
            <p className="hero-bio">
              Strong expertise in Python, primarily building backend services with FastAPI and PostgreSQL, with experience in MongoDB and Redis, and integrating React frontends with TanStack Query. Skilled in full-stack data validation, API-level security, and using caching and indexing to keep full-stack performance efficient at scale. Comfortable building and integrating machine learning models into production systems.
            </p>
            <div className="hero-contacts">
              <a className="contact-pill contact-pill--resume" href="docs/resume_marinas.pdf" target="_blank" rel="noopener noreferrer">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
                Resume
              </a>
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
            </div>
          </div>
          <div className="hero-photo-wrap" onClick={onPhotoClick} title="Click to zoom">
            <img src="gallery/Edrian2x2.jpg" alt="Edrian Mariñas" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}
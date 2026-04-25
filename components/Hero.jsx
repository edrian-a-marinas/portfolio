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
              <a className="contact-pill contact-pill--resume" href="docs/resume_marinas.pdf" target="_blank" rel="noopener noreferrer">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
                Resume
              </a>
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
// components/Experience.jsx
const { useState, useEffect } = React

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
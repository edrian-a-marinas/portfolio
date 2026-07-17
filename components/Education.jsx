// components/Education.jsx
const { useState, useEffect } = React

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
              <p className="edu-degree">
                {e.certUrl ? (
                  <a
                    href={e.certUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="edu-degree-link"
                  >
                    {e.degree}
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                ) : (
                  e.degree
                )}
              </p>
            </div>
            <span className="edu-date">{e.date}</span>
          </div>
        ))}
      </div>
    </S>
  )
}
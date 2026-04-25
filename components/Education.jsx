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
              <p className="edu-degree">{e.degree}</p>
            </div>
            <span className="edu-date">{e.date}</span>
          </div>
        ))}
      </div>
    </S>
  )
}
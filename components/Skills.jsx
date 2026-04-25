// components/Skills.jsx
const { useState, useEffect } = React

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
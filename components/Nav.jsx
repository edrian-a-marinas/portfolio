// components/Nav.jsx
const { useState, useEffect } = React

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
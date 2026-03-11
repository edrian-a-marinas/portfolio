// mobile.jsx — Mobile-only components

function MobileProjectCard({ p }) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const CHAR_LIMIT = 300

  const fullText = p.bullets.join(' ')
  const needsTruncation = fullText.length > CHAR_LIMIT

  const visibleBullets = () => {
    if (isExpanded || !needsTruncation) return p.bullets
    let count = 0
    const result = []
    for (const b of p.bullets) {
      if (count + b.length > CHAR_LIMIT) {
        const remaining = CHAR_LIMIT - count
        if (remaining > 60) result.push(b.slice(0, remaining) + '…')
        break
      }
      result.push(b)
      count += b.length
    }
    return result
  }

  return (
    <div className="project-card">
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
        {visibleBullets().map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      {needsTruncation && (
        <button
          className="see-more-btn"
          style={{ marginBottom: '12px' }}
          onClick={() => setIsExpanded(prev => !prev)}
        >
          <span>{isExpanded ? 'Show less' : 'See more'}</span>
          <svg
            className={`see-more-chevron ${isExpanded ? 'see-more-chevron--up' : ''}`}
            fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
      )}
      <div className="project-stack">
        {p.stack.map(s => <span key={s} className="stack-tag">{s}</span>)}
      </div>
    </div>
  )
}

function MobileProjects({ onHover, allProjects, S }) {
  const [carouselIdx, setCarouselIdx] = React.useState(0)
  const [animClass, setAnimClass]     = React.useState('')
  const [touchStart, setTouchStart]   = React.useState(null)

  const goTo = (nextIdx) => {
    if (nextIdx === carouselIdx) return
    const dir = nextIdx > carouselIdx ? 'carousel-slide-left' : 'carousel-slide-right'
    setAnimClass(dir)
    setTimeout(() => {
      setCarouselIdx(nextIdx)
      setAnimClass('')
    }, 220)
  }

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX)
  const handleTouchEnd = (e) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (diff > 40)  goTo(Math.min(carouselIdx + 1, allProjects.length - 1))
    if (diff < -40) goTo(Math.max(carouselIdx - 1, 0))
    setTouchStart(null)
  }

  return (
    <S id="projects" onHover={onHover}>
      <div className="container">
        <p className="section-label">Projects</p>
        <div
          key={carouselIdx}
          className={`carousel-track ${animClass}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <MobileProjectCard p={allProjects[carouselIdx]} />
        </div>
        <div className="carousel-dots">
          {allProjects.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === carouselIdx ? 'carousel-dot--active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="carousel-nav">
          <button
            className="carousel-arrow"
            onClick={() => goTo(Math.max(carouselIdx - 1, 0))}
            disabled={carouselIdx === 0}
          >‹</button>
          <span className="carousel-counter">{carouselIdx + 1} / {allProjects.length}</span>
          <button
            className="carousel-arrow"
            onClick={() => goTo(Math.min(carouselIdx + 1, allProjects.length - 1))}
            disabled={carouselIdx === allProjects.length - 1}
          >›</button>
        </div>
      </div>
    </S>
  )
}

function MobileExperience({ onHover, S }) {
  const CHAR_LIMIT = 300

  return (
    <S id="experience" onHover={onHover}>
      <div className="container">
        <p className="section-label">Experience</p>
        {EXPERIENCE.map(e => {
          const fullText = e.bullets.join(' ')
          const needsTruncation = fullText.length > CHAR_LIMIT
          return <MobileExpCard key={e.role + e.org} e={e} needsTruncation={needsTruncation} />
        })}
      </div>
    </S>
  )
}

function MobileExpCard({ e, needsTruncation }) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const CHAR_LIMIT = 300

  const visibleBullets = () => {
    if (isExpanded || !needsTruncation) return e.bullets
    let count = 0
    const result = []
    for (const b of e.bullets) {
      if (count + b.length > CHAR_LIMIT) {
        const remaining = CHAR_LIMIT - count
        if (remaining > 60) result.push(b.slice(0, remaining) + '…')
        break
      }
      result.push(b)
      count += b.length
    }
    return result
  }

  return (
    <div className="project-card" style={{ marginBottom: '20px' }}>
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
        {visibleBullets().map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      {needsTruncation && (
        <button
          className="see-more-btn"
          style={{ marginTop: '12px' }}
          onClick={() => setIsExpanded(prev => !prev)}
        >
          <span>{isExpanded ? 'Show less' : 'See more'}</span>
          <svg
            className={`see-more-chevron ${isExpanded ? 'see-more-chevron--up' : ''}`}
            fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
      )}
    </div>
  )
}

function useMobileScrollReveal() {
  React.useEffect(() => {
    if (window.innerWidth > 600) return

    // Split every text node into word spans
    const wrap = (el) => {
      el.childNodes.forEach(node => {
        if (node.nodeType === 3 && node.textContent.trim()) {
          const words = node.textContent.split(' ')
          const frag = document.createDocumentFragment()
          words.forEach((w, i) => {
            const span = document.createElement('span')
            span.className = 'word-reveal'
            span.textContent = w
            frag.appendChild(span)
            if (i < words.length - 1) frag.appendChild(document.createTextNode(' '))
          })
          node.replaceWith(frag)
        } else if (node.nodeType === 1 && !['SCRIPT','STYLE','SVG'].includes(node.tagName)) {
          wrap(node)
        }
      })
    }

    document.querySelectorAll('p, li, h1, h2, span.skill-cat, span.tag, span.stack-tag, .edu-school, .edu-degree, .project-name, .project-subtitle, .exp-role, .exp-org, .cert-name').forEach(el => {
      wrap(el)
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('word-reveal--visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.word-reveal').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 20) * 18}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
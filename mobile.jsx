// mobile.jsx — Mobile-only components and scroll-reveal hooks

// ── Icons ────────────────────────────────────────────────────────────────────
const IconExternal = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="11" height="11">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)
const IconVideo = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="11" height="11">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2"/>
  </svg>
)
const IconGitHub = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="11" height="11">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
  </svg>
)

// ── Tab bar icons ─────────────────────────────────────────────────────────────
const TabIconHome = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9"/>
  </svg>
)
const TabIconCode = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline strokeLinecap="round" strokeLinejoin="round" points="16 18 22 12 16 6"/>
    <polyline strokeLinecap="round" strokeLinejoin="round" points="8 6 2 12 8 18"/>
  </svg>
)
const TabIconBriefcase = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect strokeLinecap="round" strokeLinejoin="round" x="2" y="7" width="20" height="14" rx="2"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line strokeLinecap="round" x1="12" y1="12" x2="12" y2="12"/>
  </svg>
)
const TabIconFolder = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
)
const TabIconMore = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="19" cy="12" r="1.5" fill="currentColor" stroke="none"/>
  </svg>
)

// ── Helpers ───────────────────────────────────────────────────────────────────
function truncateCertName(name, limit = 48) {
  if (name.length <= limit) return name
  return name.slice(0, limit).trimEnd() + '…'
}
function abbreviateDegree(degree) {
  return degree.replace('Bachelor of Science', 'B.S.')
}

// ── Mobile Bottom Tab Bar ─────────────────────────────────────────────────────
const NAV_TABS = [
  { id: 'hero',       label: 'Home',     Icon: TabIconHome },
  { id: 'skills',     label: 'Skills',   Icon: TabIconCode },
  { id: 'experience', label: 'Work',     Icon: TabIconBriefcase },
  { id: 'projects',   label: 'Projects', Icon: TabIconFolder },
]

function MobileTabBar({ activeSection }) {
  const [clicked, setClicked] = React.useState(null)

  const scrollTo = (id) => {
    // Immediately highlight the clicked tab — don't wait for scroll
    setClicked(id)

    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 56
    window.scrollTo({ top: y, behavior: 'smooth' })

    // Once scroll settles, let activeSection take over again
    // Clear clicked after a generous timeout (smooth scroll ~600ms max)
    setTimeout(() => setClicked(null), 800)
  }

  const TAB_IDS = NAV_TABS.map(t => t.id)
  // clicked wins immediately; fall back to scroll-tracked activeSection
  const current = clicked || (TAB_IDS.includes(activeSection) ? activeSection : null)

  return (
    <nav className="mobile-tab-bar" role="navigation" aria-label="Main navigation">
      {NAV_TABS.map(({ id, label, Icon }) => (
        <button
          key={id}
          className={`mobile-tab${current === id ? ' active' : ''}`}
          onClick={() => scrollTo(id)}
          aria-label={label}
        >
          <Icon />
          <span>{label}</span>
          <div className="mobile-tab-bar-dot" />
        </button>
      ))}
    </nav>
  )
}

// ── MobileProjectCard ─────────────────────────────────────────────────────────
function MobileProjectCard({ p, onGalleryChange }) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [galleryOpen, setGalleryOpen] = React.useState(false)
  const images = GALLERY[p.name] || []
  const previewImg = images[0] || null
  const CHAR_LIMIT = 260
  const fullText = p.bullets.join(' ')
  const needsTruncation = fullText.length > CHAR_LIMIT
 
  const openGallery = () => {
    setGalleryOpen(true)
    onGalleryChange && onGalleryChange(true)
  }
  const closeGallery = () => {
    setGalleryOpen(false)
    onGalleryChange && onGalleryChange(false)
  }
 
  const visibleBullets = () => {
    if (isExpanded || !needsTruncation) return p.bullets
    let count = 0
    const result = []
    for (const b of p.bullets) {
      if (count + b.length > CHAR_LIMIT) {
        const remaining = CHAR_LIMIT - count
        if (remaining > 50) result.push(b.slice(0, remaining) + '…')
        break
      }
      result.push(b)
      count += b.length
    }
    return result
  }
  return (
    <div className="project-card">
      {galleryOpen && images.length > 0 && (
        <GalleryModal images={images} startIdx={0} projectName={p.name} onClose={closeGallery} />
      )}
      {previewImg && (
        <div className="project-preview-wrap" onClick={openGallery}>
          <img src={previewImg} alt={`${p.name} preview`} className="project-preview-img" />
          {images.length > 1 && (
            <div className="project-preview-badge">+{images.length - 1} more</div>
          )}
        </div>
      )}
      <div className="project-top">
        <span className="project-name">{p.name}</span>
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
            className={`see-more-chevron${isExpanded ? ' see-more-chevron--up' : ''}`}
            fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
      )}
      <div className="project-actions">
        {p.live   && <a className="project-live"   href={p.live}   target="_blank" rel="noopener noreferrer"><IconExternal /> Live Demo</a>}
        {p.demo   && <a className="project-demo"   href={p.demo}   target="_blank" rel="noopener noreferrer"><IconVideo /> Demo Vid</a>}
        {p.github && <a className="project-github" href={p.github} target="_blank" rel="noopener noreferrer"><IconGitHub /> GitHub</a>}
      </div>
      <div className="project-stack">
        {p.stack.map(s => <span key={s} className="stack-tag">{s}</span>)}
      </div>
    </div>
  )
}

// ── MobileProjects (Carousel) ─────────────────────────────────────────────────
function MobileProjects({ onHover, allProjects, S }) {
  const [carouselIdx, setCarouselIdx] = React.useState(0)
  const [animClass, setAnimClass]     = React.useState('')
  const [touchStart, setTouchStart]   = React.useState(null)
  const [showHint, setShowHint]       = React.useState(true)
  const [galleryOpen, setGalleryOpen] = React.useState(false)
 
  const goTo = (nextIdx) => {
    if (nextIdx === carouselIdx || nextIdx < 0 || nextIdx >= allProjects.length) return
    const dir = nextIdx > carouselIdx ? 'carousel-slide-left' : 'carousel-slide-right'
    setAnimClass(dir)
    setShowHint(false)
    setTimeout(() => {
      setCarouselIdx(nextIdx)
      setAnimClass('')
    }, 200)
  }
 
  const handleTouchStart = (e) => {
    if (galleryOpen) return
    setTouchStart(e.touches[0].clientX)
  }
  const handleTouchEnd = (e) => {
    if (galleryOpen || touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (diff >  40) goTo(carouselIdx + 1)
    if (diff < -40) goTo(carouselIdx - 1)
    setTouchStart(null)
  }
 
  return (
    <S id="projects" onHover={onHover}>
      <div className="container">
        <p className="section-label">Projects</p>
        <div
          key={carouselIdx}
          className={`carousel-track${animClass ? ` ${animClass}` : ''}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <MobileProjectCard
            p={allProjects[carouselIdx]}
            onGalleryChange={setGalleryOpen}
          />
        </div>
        <div className="carousel-dots">
          {allProjects.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === carouselIdx ? ' carousel-dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
        <div className="carousel-nav">
          <button
            className="carousel-arrow"
            onClick={() => goTo(carouselIdx - 1)}
            disabled={carouselIdx === 0}
            aria-label="Previous project"
          >‹</button>
          <span className="carousel-counter">{carouselIdx + 1} / {allProjects.length}</span>
          <button
            className="carousel-arrow"
            onClick={() => goTo(carouselIdx + 1)}
            disabled={carouselIdx === allProjects.length - 1}
            aria-label="Next project"
          >›</button>
        </div>
      </div>
    </S>
  )
}

// ── MobileExpCard ─────────────────────────────────────────────────────────────
function MobileExpCard({ e }) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const CHAR_LIMIT = 260
  const fullText = e.bullets.join(' ')
  const needsTruncation = fullText.length > CHAR_LIMIT

  const visibleBullets = () => {
    if (isExpanded || !needsTruncation) return e.bullets
    let count = 0
    const result = []
    for (const b of e.bullets) {
      if (count + b.length > CHAR_LIMIT) {
        const remaining = CHAR_LIMIT - count
        if (remaining > 50) result.push(b.slice(0, remaining) + '…')
        break
      }
      result.push(b)
      count += b.length
    }
    return result
  }

  return (
    <div className="project-card" style={{ marginBottom: '16px' }}>
      <div className="project-top">
        <div style={{ flex: 1 }}>
          <p className="exp-role">{e.role}</p>
          <p className="exp-org">
            {e.org}
            {e.date && <> · <span className="exp-date">{e.date}</span></>}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '7px', flexShrink: 0 }}>
          {e.live && (
            <a className="project-live" href={e.live} target="_blank" rel="noopener noreferrer">
              <IconExternal /> Live
            </a>
          )}
          {e.demo && (
            <a className="project-demo" href={e.demo} target="_blank" rel="noopener noreferrer">
              <IconVideo /> Demo
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
            className={`see-more-chevron${isExpanded ? ' see-more-chevron--up' : ''}`}
            fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
      )}
    </div>
  )
}

// ── MobileExperience ──────────────────────────────────────────────────────────
function MobileExperience({ onHover, S }) {
  return (
    <S id="experience" onHover={onHover}>
      <div className="container">
        <p className="section-label">Experience</p>
        {EXPERIENCE.map(e => (
          <MobileExpCard key={e.role + e.org} e={e} />
        ))}
      </div>
    </S>
  )
}

// ── MobileEducation ───────────────────────────────────────────────────────────
function MobileEducation({ onHover, S }) {
  return (
    <S id="education" onHover={onHover}>
      <div className="container">
        <p className="section-label">Education</p>
        {EDUCATION.map(e => (
          <div key={e.school} className="edu-item">
            <div>
              <p className="edu-school">{e.school}</p>
              <p className="edu-degree">{abbreviateDegree(e.degree)}</p>
            </div>
            <span className="edu-date">{e.date}</span>
          </div>
        ))}
      </div>
    </S>
  )
}

// ── MobileSkills (only Concepts is collapsible) ──────────────────────────────
function MobileSkillGroup({ group }) {
  const isAccordion = group.category.toLowerCase() === 'concepts'
  const [open, setOpen] = React.useState(false)

  return (
    <div className="mobile-skill-group">
      <div
        className={`mobile-skill-header${isAccordion ? ' mobile-skill-header--accordion' : ''}`}
        onClick={isAccordion ? () => setOpen(prev => !prev) : undefined}
        role={isAccordion ? 'button' : undefined}
        aria-expanded={isAccordion ? open : undefined}
      >
        <span className="mobile-skill-cat">{group.category}</span>
        {isAccordion && (
          <svg
            className={`mobile-skill-chevron${open ? ' mobile-skill-chevron--open' : ''}`}
            fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        )}
      </div>

      {isAccordion ? (
        <div className={`mobile-skill-body mobile-skill-body--collapsible${open ? ' mobile-skill-body--open' : ''}`}>
          <div className="mobile-skill-body-inner">
            <div className="skill-tags">
              {group.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </div>
        </div>
      ) : (
        <div className="mobile-skill-body">
          <div className="skill-tags">
            {group.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>
        </div>
      )}
    </div>
  )
}

function MobileSkills({ onHover, S }) {
  return (
    <S id="skills" onHover={onHover}>
      <div className="container">
        <p className="section-label">Skills</p>
        <div className="mobile-skills">
          {SKILLS.map(group => (
            <MobileSkillGroup key={group.category} group={group} />
          ))}
        </div>
      </div>
    </S>
  )
}

// ── MobileCertifications ──────────────────────────────────────────────────────
function MobileCertifications({ onHover, S, imgIdx, setImgIdx, allImgs, openCert, touchStartX, setTouchStartX }) {
  return (
    <React.Fragment>
      {imgIdx !== null && (
        <div className="cert-lightbox-overlay" onClick={() => setImgIdx(null)}>
          <div
            className="cert-lightbox-inner"
            onClick={e => e.stopPropagation()}
            onTouchStart={e => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={e => {
              if (touchStartX === null) return
              const diff = touchStartX - e.changedTouches[0].clientX
              if (diff >  40) setImgIdx(i => (i + 1) % allImgs.length)
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

      <S id="certifications" onHover={onHover}>
        <div className="container">
          <p className="section-label">Certifications &amp; Training</p>
          <div className="cert-list">
            {CERTIFICATIONS.map(c => (
              <div
                key={c.name}
                className={`cert-item${c.images ? ' cert-item--clickable' : ''}`}
                onClick={() => c.images && openCert(c)}
                style={{ cursor: c.images ? 'pointer' : 'default' }}
              >
                <div className="cert-dot" />
                <div>
                  <p className="cert-name">{truncateCertName(c.name)}</p>
                  <p className="cert-year">{c.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </S>
    </React.Fragment>
  )
}

// ── Scroll Reveal Hooks ───────────────────────────────────────────────────────
function useMobileScrollReveal() {
  React.useEffect(() => {
    if (window.innerWidth > 600) return

    const TARGETS = 'p, li, h1, h2, span.skill-cat, span.tag, span.stack-tag, .edu-school, .edu-degree, .project-name, .project-subtitle, .exp-role, .exp-org, .cert-name'

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

    document.querySelectorAll(TARGETS).forEach(el => wrap(el))

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('word-reveal--visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' })

    document.querySelectorAll('.word-reveal').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 20) * 16}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

function useDesktopScrollReveal() {
  React.useEffect(() => {
    if (window.innerWidth <= 600) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('desktop-reveal--visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })

    document.querySelectorAll('.desktop-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
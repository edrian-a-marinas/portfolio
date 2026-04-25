// components/Projects.jsx
const { useState, useEffect } = React

// ── Icons (used only in project cards) ───────────────────────────────────────
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

// ── ProjectCard — entire card is clickable if project has gallery images ──────

function ProjectCard({ p }) {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const images     = GALLERY[p.name] || []
  const previewImg = images[0] || null
  const hasGallery = images.length > 0

  return (
    <div className="project-card desktop-reveal">
      {galleryOpen && (
        <GalleryModal
          images={images}
          startIdx={0}
          projectName={p.name}
          onClose={() => setGalleryOpen(false)}
        />
      )}

      {previewImg && (
        <div
        className={`project-preview-wrap${hasGallery ? ' project-preview-wrap--clickable' : ''}`}
        onClick={hasGallery ? () => setGalleryOpen(true) : undefined}
        >
          <img src={previewImg} alt={`${p.name} preview`} className="project-preview-img" />
          {images.length > 1 && (
            <div className="project-preview-badge">+{images.length - 1} more</div>
          )}
          {hasGallery && (
            <div className="project-preview-hint">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="13" height="13">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              View Gallery
            </div>
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
        {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>

      {/* stopPropagation so link clicks don't open gallery */}
      <div className="project-actions" onClick={e => e.stopPropagation()}>
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

      <div className="project-stack" onClick={e => e.stopPropagation()}>
        {p.stack.map(s => <span key={s} className="stack-tag">{s}</span>)}
      </div>
    </div>
  )
}

// ── Projects section ──────────────────────────────────────────────────────────
function Projects({ onHover }) {
  const [expanded, setExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
  const allProjects = [...PROJECTS, ...EXTRA_PROJECTS]

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  if (isMobile) return <MobileProjects onHover={onHover} allProjects={allProjects} S={S} />

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
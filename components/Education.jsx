// components/Education.jsx
const { useState, useEffect } = React

function Education({ onHover }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const [galleryProject, setGalleryProject] = useState(null)
  const [certImg, setCertImg]               = useState(null)
  if (isMobile) return <MobileEducation onHover={onHover} S={S} />
  return (
    <S id="education" onHover={onHover}>
      {galleryProject && (
        <GalleryModal
          images={GALLERY[galleryProject] || []}
          startIdx={0}
          projectName={galleryProject}
          onClose={() => setGalleryProject(null)}
        />
      )}
      {certImg && (
        <div className="cert-lightbox-overlay" onClick={() => setCertImg(null)}>
          <div className="cert-lightbox-inner" onClick={e => e.stopPropagation()}>
            <img
              src={(CERTIFICATIONS.find(c => c.name === certImg)?.images || [])[0]}
              alt={certImg}
              className="cert-lightbox-img"
            />
          </div>
        </div>
      )}
      <div className="container">
        <p className="section-label">Education</p>
        {EDUCATION.map(e => (
          <div key={e.school} className="edu-item desktop-reveal">
            <div>
              <p className="edu-title">
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
                  <span className="edu-degree-text">{e.degree}</span>
                )}
                {' — '}{e.school}
              </p>
              {e.achievements && (
                <ul className="edu-achievements">
                  {e.achievements.map(a => (
                    <li
                      key={a.text}
                      className={a.type !== 'plain' ? 'edu-achievement--clickable' : ''}
                      onClick={a.type === 'gallery' ? () => setGalleryProject(a.key)
                             : a.type === 'cert'    ? () => setCertImg(a.key)
                             : undefined}
                    >
                      {a.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <span className="edu-date">{e.date}</span>
          </div>
        ))}
      </div>
    </S>
  )
}
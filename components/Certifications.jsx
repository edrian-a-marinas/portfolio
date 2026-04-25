// components/Certifications.jsx
const { useState, useEffect } = React

function Certifications({ onHover }) {
  const [imgIdx, setImgIdx]       = useState(null)
  const [touchStartX, setTouchStartX] = useState(null)
  const [isMobile, setIsMobile]   = useState(window.innerWidth <= 600)
  const [preview, setPreview]     = useState(null)

  const allImgs = CERTIFICATIONS.flatMap(c =>
    Array.isArray(c.images) ? c.images : c.images ? [c.images] : []
  )

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleKey = React.useCallback(e => {
    if (imgIdx === null) return
    if (e.key === 'ArrowRight') setImgIdx(i => (i + 1) % allImgs.length)
    if (e.key === 'ArrowLeft')  setImgIdx(i => (i - 1 + allImgs.length) % allImgs.length)
    if (e.key === 'Escape')     setImgIdx(null)
  }, [imgIdx, allImgs.length])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  const openCert = (c) => {
    const firstImg = Array.isArray(c.images) ? c.images[0] : c.images
    const idx = allImgs.indexOf(firstImg)
    if (idx !== -1) setImgIdx(idx)
  }

  const handleCertMouseMove = (e, src) => setPreview({ src, x: e.clientX, y: e.clientY })
  const handleCertMouseLeave = () => setPreview(null)

  if (isMobile) return (
    <MobileCertifications
      onHover={onHover} S={S}
      imgIdx={imgIdx} setImgIdx={setImgIdx}
      allImgs={allImgs} openCert={openCert}
      touchStartX={touchStartX} setTouchStartX={setTouchStartX}
    />
  )

  return (
    <S id="certifications" onHover={onHover}>
      {preview && (
        <div style={{
          position: 'fixed',
          left: preview.x + 18,
          top: (() => {
            const previewHeight = 340
            const spaceBelow = window.innerHeight - preview.y
            return spaceBelow < previewHeight
              ? preview.y - previewHeight + 20
              : preview.y - 80
          })(),
          zIndex: 998,
          pointerEvents: 'none',
          background: 'white',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
          padding: '6px',
          width: '500px',
          transition: 'opacity 0.15s',
        }}>
          <img src={preview.src} alt="Certificate preview" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
        </div>
      )}

      {imgIdx !== null && (
        <div className="cert-lightbox-overlay" onClick={() => setImgIdx(null)}>
          <div
            className="cert-lightbox-inner"
            onClick={e => e.stopPropagation()}
            onTouchStart={e => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={e => {
              if (touchStartX === null) return
              const diff = touchStartX - e.changedTouches[0].clientX
              if (diff > 40)  setImgIdx(i => (i + 1) % allImgs.length)
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

      <div className="container">
        <p className="section-label">Certifications &amp; Training</p>
        <div className="cert-list desktop-reveal">
          {CERTIFICATIONS.map(c => {
            const firstImg = Array.isArray(c.images) ? c.images[0] : c.images
            return (
              <div key={c.name} className="cert-item">
                <div className="cert-dot" />
                <div
                  className={c.images ? 'cert-item--clickable' : ''}
                  onClick={() => c.images && openCert(c)}
                  onMouseMove={c.images ? e => handleCertMouseMove(e, firstImg) : undefined}
                  onMouseLeave={c.images ? handleCertMouseLeave : undefined}
                  style={{ cursor: c.images ? 'pointer' : 'default' }}
                >
                  <p className="cert-name">{c.name}</p>
                  <p className="cert-year">{c.year}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </S>
  )
}
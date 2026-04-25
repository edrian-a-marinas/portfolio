// components/modals.jsx
const { useState, useEffect, useRef } = React

function Portal({ children, onClick }) {
  const el = useRef(document.createElement('div'))
  useEffect(() => {
    const node = el.current
    // Always centered — same on mobile and desktop
    node.style.cssText = 'position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);backdrop-filter:blur(4px);padding:12px;'
    document.body.appendChild(node)
    return () => document.body.removeChild(node)
  }, [])
  el.current.onclick = onClick
    ? (e) => { if (e.target === e.currentTarget) onClick(e) }
    : null
  return ReactDOM.createPortal(children, el.current)
}

/* ── Lightbox (hero photo / cert viewer) ── */
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [])
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 999,
      background: 'rgba(0,0,0,0.75)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px', backdropFilter: 'blur(4px)',
    }}>
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '340px', width: '100%' }}>
        <img src={src} alt={alt} style={{
          width: '100%', borderRadius: '12px', display: 'block',
          boxShadow: '0 24px 64px rgba(0,0,0,0.4)'
        }} />
        <button onClick={onClose} style={{
          position: 'absolute', top: '-14px', right: '-14px',
          width: '32px', height: '32px', borderRadius: '50%',
          background: 'white', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)', fontSize: '16px', color: '#333', fontWeight: 700,
        }} aria-label="Close">×</button>
      </div>
    </div>
  )
}

/* ── GalleryModal ── */
const ZOOM_SCALE = 2.5

function GalleryModal({ images, onClose, startIdx = 0, projectName = 'Project Gallery' }) {
  const [idx, setIdx]             = useState(startIdx)
  const [zoomed, setZoomed]       = useState(false)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const [touchStartX, setTouchX]  = useState(null)
  const thumbsRef                 = useRef(null)
  const imgRef                    = useRef(null)
  const wrapRef                   = useRef(null)
  const isMobile                  = window.innerWidth <= 600

  const resetZoom = () => { setZoomed(false); setTranslate({ x: 0, y: 0 }) }
  const prev = () => { resetZoom(); setIdx(i => (i - 1 + images.length) % images.length) }
  const next = () => { resetZoom(); setIdx(i => (i + 1) % images.length) }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') { if (zoomed) resetZoom(); else onClose() }
      if (!zoomed && e.key === 'ArrowRight') next()
      if (!zoomed && e.key === 'ArrowLeft')  prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [images.length, zoomed])

  useEffect(() => {
    if (!thumbsRef.current) return
    const el = thumbsRef.current.children[idx]
    if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [idx])

  const handleImgClick = (e) => {
    if (isMobile) return
    if (zoomed) { resetZoom(); return }
    const img  = imgRef.current
    const wrap = wrapRef.current
    if (!img || !wrap) return
    const imgRect  = img.getBoundingClientRect()
    const wrapRect = wrap.getBoundingClientRect()
    const clickX = e.clientX - imgRect.left
    const clickY = e.clientY - imgRect.top
    const cx = clickX - imgRect.width  / 2
    const cy = clickY - imgRect.height / 2
    let tx = cx * (1 - ZOOM_SCALE)
    let ty = cy * (1 - ZOOM_SCALE)
    const scaledW = imgRect.width  * ZOOM_SCALE
    const scaledH = imgRect.height * ZOOM_SCALE
    const maxTx   = (scaledW - wrapRect.width)  / 2
    const maxTy   = (scaledH - wrapRect.height) / 2
    tx = Math.max(-maxTx, Math.min(maxTx, tx))
    ty = Math.max(-maxTy, Math.min(maxTy, ty))
    setTranslate({ x: tx, y: ty })
    setZoomed(true)
  }

  return (
    <Portal onClick={zoomed ? resetZoom : onClose}>
      <div
        className="pgm-card"
        onClick={e => e.stopPropagation()}
        onTouchStart={e => {
          // Stop propagation so carousel doesn't pick up this swipe
          e.stopPropagation()
          if (!zoomed) setTouchX(e.touches[0].clientX)
        }}
        onTouchEnd={e => {
          e.stopPropagation()
          if (touchStartX === null || zoomed) return
          const d = touchStartX - e.changedTouches[0].clientX
          if (d > 40)  next()
          if (d < -40) prev()
          setTouchX(null)
        }}
        onTouchMove={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="pgm-header">
          <span className="pgm-title">{projectName} Gallery</span>
          <button className="pgm-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        {/* Body */}
        <div className="pgm-body">
          <div
            ref={wrapRef}
            className={`pgm-img-wrap${zoomed ? ' pgm-img-wrap--zoomed' : ''}`}
            onClick={handleImgClick}
            title={!isMobile ? (zoomed ? 'Click to zoom out' : 'Click to zoom in') : undefined}
          >
            <img
              key={idx}
              ref={imgRef}
              src={images[idx]}
              alt={`${projectName} ${idx + 1}`}
              className="pgm-main-img"
              draggable={false}
              style={zoomed
                ? { transform: `translate(${translate.x}px, ${translate.y}px) scale(${ZOOM_SCALE})` }
                : {}}
            />
            {!zoomed && !isMobile && (
              <div className="pgm-zoom-hint">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="14" height="14">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/>
                  <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
                Zoom in
              </div>
            )}
          </div>

          {!zoomed && images.length > 1 && (
            <div className="pgm-thumbs" ref={thumbsRef}>
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Thumb ${i + 1}`}
                  className={`pgm-thumb${i === idx ? ' pgm-thumb--active' : ''}`}
                  onClick={() => { resetZoom(); setIdx(i) }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {!zoomed && images.length > 1 && (
          <div className="pgm-footer">
            <button className="pgm-btn" onClick={prev}>← Prev</button>
            <span className="pgm-counter">{idx + 1} of {images.length}</span>
            <button className="pgm-btn" onClick={next}>Next →</button>
          </div>
        )}
      </div>
    </Portal>
  )
}
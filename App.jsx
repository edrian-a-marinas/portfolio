// App.jsx — main app shell. Edit data.js to update portfolio content.
const { useState, useEffect } = React

// ── Section wrapper (shared utility) ─────────────────────────────────────────
function S({ id, onHover, children }) {
  return (
    <section
      id={id}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      {children}
    </section>
  )
}

// ── All section IDs in page order ─────────────────────────────────────────────
const ALL_SECTION_IDS = ['hero', 'skills', 'experience', 'projects', 'education', 'certifications']

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  const [hoveredSection, setHoveredSection] = useState(null)
  const [activeSection, setActiveSection]   = useState('hero')
  const [lightbox, setLightbox]             = useState(false)
  const isMobile = window.innerWidth <= 600

  useMobileScrollReveal()
  useDesktopScrollReveal()

  // ── Active section: scroll-position based (reliable, works up AND down) ──
  useEffect(() => {
    const OFFSET = 80

    const getActive = () => {
      let active = ALL_SECTION_IDS[0]
      for (const id of ALL_SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= OFFSET) active = id
      }
      return active
    }

    const onScroll = () => setActiveSection(getActive())

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {lightbox && (
        <Lightbox
          src="gallery/Edrian2x2.jpg"
          alt="Edrian Mariñas"
          onClose={() => setLightbox(false)}
        />
      )}

      <Nav hoveredSection={hoveredSection} activeSection={activeSection} />

      <Hero           onPhotoClick={() => setLightbox(true)} onHover={setHoveredSection} />
      <Skills         onHover={setHoveredSection} />
      <Experience     onHover={setHoveredSection} />
      <Projects       onHover={setHoveredSection} />
      <Education      onHover={setHoveredSection} />
      <Certifications onHover={setHoveredSection} />
      <Footer />

      {isMobile && <MobileTabBar activeSection={activeSection} />}
    </>
  )
}

// ── Mount ─────────────────────────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
// components/Footer.jsx

function Footer() {
  const footerContacts = CONTACTS.filter(c =>
    c.href.startsWith('mailto:') || c.label === 'LinkedIn'
  )
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer>
      <div className="footer-contacts">
        {footerContacts.map(c => (
          <a
            key={c.label}
            className="contact-pill"
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {c.icon}{c.label}
          </a>
        ))}
      </div>
      <p className="footer-copy">Edrian Aldrin C. Mariñas · Metro Manila, PH</p>
      <button onClick={scrollToTop} className="back-to-top">
        <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" width="14" height="14">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
        Back to top
      </button>
    </footer>
  )
}
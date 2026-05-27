import { useState } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'App Preview', href: '#screenshots' },
  { label: 'Waitlist', href: '#waitlist' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  function handleClick(e, href) {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <div className={styles.logo} aria-label="Godspeedz">
        GODSPEEDZ
      </div>

      {/* Desktop links */}
      <div className={styles.links}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={styles.link}
            onClick={(e) => handleClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Hamburger button — mobile only */}
      <button
        className={styles.hamburger}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span className={`${styles.bar} ${open ? styles.barTop : ''}`} />
        <span className={`${styles.bar} ${open ? styles.barMid : ''}`} />
        <span className={`${styles.bar} ${open ? styles.barBot : ''}`} />
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={(e) => handleClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'App Preview', href: '#screenshots' },
  { label: 'Waitlist', href: '#waitlist' },
]

export default function Navbar() {
  function handleClick(e, href) {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <div className={styles.logo} aria-label="Godspeedz">
        GODSPEEDZ
      </div>
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
    </nav>
  )
}

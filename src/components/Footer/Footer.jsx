import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo} aria-label="Godspeedz">
        GODSPEEDZ
      </div>

      <p className={styles.copy}>© 2026 Godspeedz. Launching Soon.</p>
    </footer>
  )
}

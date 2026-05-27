import styles from './Hero.module.css'
import dashboardImg from '../../assets/screenshots/dashboard.png'

export default function Hero() {
  function scrollToWaitlist(e) {
    e.preventDefault()
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Decorative background text */}
      <div className={styles.bgText} aria-hidden="true">RIDE</div>

      <div className={styles.grid}>
        {/* Left column */}
        <div className={styles.left}>
          <div className={styles.tag} aria-label="Coming soon">
            <div className={styles.tagDot} aria-hidden="true" />
            Coming Soon — Join the Waitlist
          </div>

          <h1 className={styles.heading}>
            YOUR BIKE.<br />
            <span className={styles.accent}>YOUR RIDE.</span><br />
            ONE APP.
          </h1>

          <p className={styles.sub}>
            Track fuel, rides, documents, and service — all for every bike you own.
            Never get fined for an expired PUC again.
          </p>

          <a href="#waitlist" className={`btn-primary ${styles.ctaBtn}`} onClick={scrollToWaitlist}>
            Join the Waitlist →
          </a>
        </div>

        {/* Right column — real dashboard screenshot */}
        <div className={styles.mockupCol}>
          <div className={styles.phoneShell} aria-label="Godspeedz app dashboard preview" role="img">
            <div className={styles.phoneNotch}><div className={styles.phoneNotchPill} /></div>
            <img
              src={dashboardImg}
              alt="Godspeedz dashboard screen"
              className={styles.dashboardImg}
            />
            <div className={styles.phoneHome} />
          </div>
        </div>
      </div>
    </section>
  )
}

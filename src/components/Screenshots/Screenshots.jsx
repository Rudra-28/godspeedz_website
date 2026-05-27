import { useReveal } from '../../hooks/useReveal'
import styles from './Screenshots.module.css'

import dashboardImg   from '../../assets/screenshots/dashboard.png'
import bikeSummaryImg from '../../assets/screenshots/Bike Summary.png'
import documentsImg   from '../../assets/screenshots/Documents.png'
import fuelLogImg     from '../../assets/screenshots/Fuel_log.png'
import notificationImg from '../../assets/screenshots/Notification.png'

const screens = [
  {
    id: 'dashboard',
    src: dashboardImg,
    label: 'Dashboard',
    caption: 'Your full ride summary at a glance',
  },
  {
    id: 'notifications',
    src: notificationImg,
    label: 'Smart Reminders',
    caption: 'Alerts before documents expire',
  },
  {
    id: 'fuel',
    src: fuelLogImg,
    label: 'Fuel Tracker',
    caption: 'Log fill-ups and track your exact kmpl',
  },
  {
    id: 'bike-summary',
    src: bikeSummaryImg,
    label: 'Bike Summary',
    caption: 'Every detail about your ride',
  },
  {
    id: 'documents',
    src: documentsImg,
    label: 'Document Vault',
    caption: 'PUC, insurance, RC — always accessible',
  },
]

function ScreenCard({ screen, index }) {
  const revealRef = useReveal(index * 80)

  return (
    <div ref={revealRef} className={`${styles.card} reveal`}>
      <div className={styles.phoneShell}>
        {/* Notch */}
        <div className={styles.notch}>
          <div className={styles.notchPill} />
        </div>

        {/* Image area */}
        <div className={styles.imageArea}>
          {screen.src ? (
            <img
              src={screen.src}
              alt={`${screen.label} screen`}
              className={styles.screenshot}
              loading="lazy"
            />
          ) : (
            <div className={styles.placeholder} aria-label={`Placeholder for ${screen.label} screenshot`}>
              <div className={styles.placeholderIcon} aria-hidden="true">📱</div>
              <div className={styles.placeholderLabel}>{screen.label}</div>
              <div className={styles.placeholderHint}>
                Drop your screenshot here
              </div>
              <div className={styles.placeholderFile}>
                <code>src/assets/screenshots/{screen.id}.png</code>
              </div>
            </div>
          )}
        </div>

        {/* Home indicator */}
        <div className={styles.homeIndicator} />
      </div>

      {/* Caption below phone */}
      <div className={styles.caption}>
        <span className={styles.captionLabel}>{screen.label}</span>
        <span className={styles.captionText}>{screen.caption}</span>
      </div>
    </div>
  )
}

export default function Screenshots() {
  const headerRef = useReveal(0)

  return (
    <section id="screenshots" className={styles.section} aria-labelledby="screenshots-title">
      <div className={styles.inner}>
        <div ref={headerRef} className="reveal">
          <p className="section-eyebrow">App Preview</p>
          <h2 className="section-title" id="screenshots-title">SEE IT IN ACTION</h2>
          <p className="section-desc">
            Every screen designed for riders — minimal taps, maximum clarity.
          </p>
        </div>

        <div className={styles.grid}>
          {screens.map((screen, i) => (
            <ScreenCard key={screen.id} screen={screen} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

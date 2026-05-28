import styles from './AppBanner.module.css'

export default function AppBanner() {
  return (
    <section className={styles.section} aria-label="App availability">
      <div className={styles.inner}>

        <div className={styles.textCol}>
          <p className={styles.eyebrow}>Available Soon</p>
          <h2 className={styles.heading}>COMING TO YOUR PHONE</h2>
          <p className={styles.sub}>
            Godspeedz is launching on Android and iOS. One app for every bike you own —
            built for the road, designed for India.
          </p>
        </div>

        <div className={styles.badgeCol}>
          <div className={styles.badge}>
            <div className={styles.badgeIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.54 3.99zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
            </div>
            <div className={styles.badgeText}>
              <span className={styles.badgeSub}>Coming Soon on</span>
              <span className={styles.badgeName}>iOS</span>
            </div>
          </div>

          <div className={styles.badge}>
            <div className={styles.badgeIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <path d="M17.523 15.341a4.87 4.87 0 0 1-2.01.44 4.91 4.91 0 0 1-2.01-.44l-5.85 3.38a1 1 0 0 0 .5 1.87h14.72a1 1 0 0 0 .5-1.87l-5.85-3.38zM3 7.5A1.5 1.5 0 0 0 1.5 9v6A1.5 1.5 0 0 0 3 16.5h.5v-9H3zm18 0h-.5v9h.5A1.5 1.5 0 0 0 22.5 15V9A1.5 1.5 0 0 0 21 7.5zM7.5 3.62 6.09 2.21a.5.5 0 0 0-.71.71L6.85 4.4A6.47 6.47 0 0 0 5.5 8h13a6.47 6.47 0 0 0-1.35-3.6l1.47-1.48a.5.5 0 1 0-.71-.71L16.5 3.62A6.52 6.52 0 0 0 12 2a6.52 6.52 0 0 0-4.5 1.62zM10 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
            </div>
            <div className={styles.badgeText}>
              <span className={styles.badgeSub}>Coming Soon on</span>
              <span className={styles.badgeName}>Android</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

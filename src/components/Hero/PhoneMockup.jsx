import styles from './PhoneMockup.module.css'

const reminders = [
  {
    color: 'var(--red)',
    name: 'Insurance — RE Classic',
    date: 'Expires 15 Jan 2025',
    badge: '3 days',
    badgeBg: 'var(--red)',
    badgeColor: '#fff',
  },
  {
    color: 'var(--amber)',
    name: 'PUC Certificate',
    date: 'Expires 10 Feb 2025',
    badge: '27 days',
    badgeBg: 'var(--amber)',
    badgeColor: '#0A0F1A',
  },
  {
    color: 'var(--green)',
    name: 'RC Book',
    date: 'No expiry',
    badge: 'Valid',
    badgeBg: '#0F3320',
    badgeColor: 'var(--green)',
  },
]

const navItems = [
  { label: 'Home', active: true },
  { label: 'Rides', active: false },
  { label: 'Garage', active: false },
  { label: 'Profile', active: false },
]

export default function PhoneMockup() {
  return (
    <div className={styles.mockup} aria-label="Godspeedz app preview" role="img">
      <div className={styles.frame}>
        {/* Notch */}
        <div className={styles.notch}>
          <div className={styles.notchPill} />
        </div>

        {/* Screen */}
        <div className={styles.screen}>
          {/* Top bar */}
          <div className={styles.topbar}>
            <span className={styles.topbarTitle}>Good morning, Rahul 🏍️</span>
            <span className={styles.notifBadge} aria-label="3 notifications">3</span>
          </div>

          <div className={styles.body}>
            {/* Reminder card */}
            <div className={styles.reminderCard}>
              <div className={styles.reminderLabel}>Upcoming Reminders</div>
              {reminders.map((r) => (
                <div key={r.name} className={styles.reminderItem}>
                  <div className={styles.rDot} style={{ background: r.color }} />
                  <div className={styles.rInfo}>
                    <div className={styles.rName}>{r.name}</div>
                    <div className={styles.rDate}>{r.date}</div>
                  </div>
                  <div
                    className={styles.rBadge}
                    style={{ background: r.badgeBg, color: r.badgeColor }}
                  >
                    {r.badge}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className={styles.statRow}>
              <div className={styles.statCard}>
                <div className={styles.statLabel}>Last KMPL</div>
                <div className={styles.statValue}>41.3</div>
                <div className={styles.statSub}>+3.1 vs avg</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statLabel}>This Month</div>
                <div className={styles.statValue} style={{ fontSize: 16 }}>₹3,240</div>
                <div className={styles.statSub} style={{ color: 'var(--gunmetal)' }}>fuel spend</div>
              </div>
            </div>

            {/* Start ride button */}
            <div className={styles.startBtn}>Start a Ride</div>

            {/* Quick actions */}
            <div className={styles.quickActions}>
              {[
                { icon: '⛽', label: 'Log Fuel' },
                { icon: '🔧', label: 'Service' },
                { icon: '📄', label: 'Docs' },
              ].map((qa) => (
                <div key={qa.label} className={styles.qaBtn}>
                  <div className={styles.qaIcon}>{qa.icon}</div>
                  <div className={styles.qaLabel}>{qa.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div className={styles.phoneNav}>
            {navItems.map((item) => (
              <div key={item.label} className={styles.pnavItem}>
                <div
                  className={styles.pnavDot}
                  style={{ background: item.active ? 'var(--orange)' : 'transparent' }}
                />
                <div
                  className={styles.pnavLabel}
                  style={{ color: item.active ? 'var(--orange)' : 'var(--gunmetal)' }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

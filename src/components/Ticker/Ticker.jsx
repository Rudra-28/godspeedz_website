import styles from './Ticker.module.css'

const items = [
  'Fuel Tracker',
  'Ride Logs',
  'PUC Reminders',
  'Insurance Alerts',
  'Service Scheduler',
  'Multi-Bike Support',
  'Document Vault',
]

// Duplicate for seamless loop
const allItems = [...items, ...items]

export default function Ticker() {
  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.inner}>
        {allItems.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot}>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

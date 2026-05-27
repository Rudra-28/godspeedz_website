import { useReveal } from '../../hooks/useReveal'
import styles from './Features.module.css'

const features = [
  {
    icon: '⛽',
    title: 'Fuel Tracker',
    desc: 'Log every fill-up in seconds. Track your exact kmpl over time, compare across bikes, and spot when something\'s off.',
    tag: 'Per bike tracking',
  },
  {
    icon: '📍',
    title: 'Ride Logger',
    desc: 'Every ride logged — distance, duration, route. Ride with your buddy and track each other\'s live location in real time. Your complete riding history in one place.',
    tag: 'Live buddy tracking',
  },
  {
    icon: '📄',
    title: 'Document Vault',
    desc: 'PUC, insurance, RC — stored securely and accessible in 2 taps. Traffic stop? You\'re ready in seconds.',
    tag: 'Always accessible',
  },
  {
    icon: '🔔',
    title: 'Smart Reminders',
    desc: 'Get notified 30 days, 7 days, and 1 day before any document expires or service is due. Never get caught again.',
    tag: 'Zero missed deadlines',
  },
  {
    icon: '🔧',
    title: 'Service Tracker',
    desc: 'Log every service, oil change and repair. Know what\'s been done and what\'s due next. Keep your bike in peak condition.',
    tag: 'Full service history',
  },
  {
    icon: '🏍️',
    title: 'Multi-Bike Garage',
    desc: 'Own 2 bikes? 3? Add them all. Switch between bikes in one tap. Every bike tracked independently.',
    tag: 'Unlimited bikes',
  },
]

export default function Features() {
  const headerRef = useReveal(0)
  const gridRef = useReveal(100)

  return (
    <section id="features" className={styles.section} aria-labelledby="features-title">
      <div className={styles.inner}>
        <div ref={headerRef} className="reveal">
          <p className="section-eyebrow">What Godspeedz Does</p>
          <h2 className="section-title" id="features-title">BUILT FOR RIDERS, BY A RIDER</h2>
          <p className="section-desc">
            Every feature built around one goal — you spend more time riding, less time worrying.
          </p>
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {features.map((f) => (
            <article key={f.title} className={styles.card}>
              <span className={styles.icon} role="img" aria-label={f.title}>{f.icon}</span>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.desc}>{f.desc}</p>
              <span className={styles.tag}>{f.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

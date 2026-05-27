import { useReveal } from '../../hooks/useReveal'
import styles from './Problem.module.css'

const painPoints = [
  {
    number: '01',
    icon: '🚔',
    title: 'Fined for expired PUC',
    desc: 'You forgot when it expires. The traffic cop didn\'t. ₹10,000 challan for something that costs ₹60 to renew on time.',
  },
  {
    number: '02',
    icon: '📋',
    title: 'Documents everywhere',
    desc: 'Insurance in email, PUC in the glove box, RC in a drawer. Good luck finding what you need when traffic police stops you.',
  },
  {
    number: '03',
    icon: '⛽',
    title: 'No idea about mileage',
    desc: 'Is your bike giving 40 kmpl or 30? You\'ve never tracked it. You\'re spending thousands extra on fuel and don\'t even know it.',
  },
  {
    number: '04',
    icon: '🔧',
    title: 'Missed service = engine damage',
    desc: 'You meant to service it last month. Engine wear from skipped oil changes costs 10x more than a basic service. Every time.',
  },
]

export default function Problem() {
  const headerRef = useReveal(0)
  const gridRef = useReveal(100)

  return (
    <section className={styles.section} aria-labelledby="problem-title">
      <div className={styles.inner}>
        <div ref={headerRef} className="reveal">
          <p className="section-eyebrow">The Problem</p>
          <h2 className="section-title" id="problem-title">EVERY BIKER KNOWS THIS PAIN</h2>
          <p className="section-desc">
            20 crore+ bikes on Indian roads. Zero dedicated tools to manage them. Until now.
          </p>
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {painPoints.map((p) => (
            <article key={p.number} className={styles.card}>
              <div className={styles.number} aria-hidden="true">{p.number}</div>
              <div className={styles.icon} role="img" aria-label={p.title}>{p.icon}</div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

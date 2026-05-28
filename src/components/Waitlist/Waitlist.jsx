import { useState, useEffect } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { supabase } from '../../lib/supabase'
import styles from './Waitlist.module.css'

const CITIES = [
  'Mumbai', 'Thane', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune',
  'Chennai', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Surat',
  'Lucknow', 'Chandigarh', 'Indore', 'Bhopal', 'Nagpur',
  'Other',
]

const BIKE_BRANDS = [
  'Royal Enfield', 'Bajaj', 'Honda', 'Hero', 'TVS',
  'KTM', 'Yamaha', 'Suzuki', 'Kawasaki', 'Triumph',
  'Harley-Davidson', 'BMW', 'Ducati', 'Other',
]

const perks = [
  'Free to join',
  'Early access priority',
  'No spam, ever',
  'Built for Indian bikers',
]

export default function Waitlist() {
  const revealRef = useReveal(0)

  const [form, setForm] = useState({
    email: '',
    name: '',
    city: '',
    bike_brand: '',
    num_bikes: '',
  })
  const [source, setSource] = useState('direct')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [position, setPosition] = useState(null)
  const [error, setError] = useState('')

  // Capture ?source= from URL silently
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const s = params.get('source')
    if (s) setSource(s)
  }, [])

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!form.email || !form.email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)

    const payload = {
      email: form.email.trim().toLowerCase(),
      city: form.city || null,
      bike_brand: form.bike_brand || null,
      source,
    }

    const { error: sbError } = await supabase
      .from('waitlist')
      .insert([payload])

    setLoading(false)

    if (sbError) {
      if (sbError.code === '23505') {
        setError("You're already on the list! We'll notify you at launch.")
      } else {
        setError('Something went wrong. Please try again.')
        console.error('Supabase error:', sbError)
      }
      return
    }

    setSubmitted(true)
  }

  return (
    <section id="waitlist" className={styles.section} aria-labelledby="waitlist-title">
      <div ref={revealRef} className={`${styles.inner} reveal`}>
        <p className="section-eyebrow">Join the Waitlist</p>
        <h2 className="section-title" id="waitlist-title">
          BE THE FIRST TO RIDE WITH GODSPEEDZ
        </h2>
        <p className={`section-desc ${styles.desc}`}>
          We're launching soon! Drop your email to get early access, unlimited ride management
          for a limited time, and exclusive early access to the app.
        </p>

        {!submitted ? (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>

            {/* Row 1 — Email only */}
            <div className={styles.field}>
              <label className={styles.label} htmlFor="wl-email">
                Email <span className={styles.required}>*</span>
              </label>
              <input
                id="wl-email"
                type="email"
                name="email"
                className={styles.input}
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            {/* Row 2 — City + Bike Brand */}
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="wl-city">
                  City
                </label>
                <select
                  id="wl-city"
                  name="city"
                  className={styles.select}
                  value={form.city}
                  onChange={handleChange}
                >
                  <option value="">Select your city</option>
                  {CITIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="wl-bike">
                  Bike Brand
                </label>
                <select
                  id="wl-bike"
                  name="bike_brand"
                  className={styles.select}
                  value={form.bike_brand}
                  onChange={handleChange}
                >
                  <option value="">Select your bike</option>
                  {BIKE_BRANDS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            {error && (
              <p className={styles.errorMsg} role="alert">{error}</p>
            )}

            <button
              type="submit"
              className={`btn-primary ${styles.submitBtn}`}
              disabled={loading}
            >
              {loading ? 'Joining...' : 'Get Early Access →'}
            </button>

          </form>
        ) : (
          <div className={styles.successBox} role="status" aria-live="polite">
            <div className={styles.successIcon}>✓</div>
            <div className={styles.successText}>
              <strong>You're on the list!</strong>
              {position && (
                <span className={styles.position}>
                  You're <span className={styles.positionNum}>#{position}</span> on the waitlist
                </span>
              )}
              <span>We'll notify you the moment we launch.</span>
            </div>
          </div>
        )}

        <div className={styles.perks}>
          {perks.map((perk) => (
            <div key={perk} className={styles.perk}>
              <div className={styles.perkDot} aria-hidden="true" />
              <span>{perk}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

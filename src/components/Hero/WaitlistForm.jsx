import { useState } from 'react'
import styles from './WaitlistForm.module.css'

export default function WaitlistForm({ id = 'hero', buttonLabel = 'Notify Me' }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError(true)
      setTimeout(() => setError(false), 1500)
      return
    }
    setSubmitted(true)
    setEmail('')
    // TODO: Replace with real API call (Mailchimp, Airtable, Supabase, etc.)
  }

  return (
    <div className={styles.wrapper}>
      {!submitted ? (
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          noValidate
          aria-label="Join waitlist form"
        >
          <input
            type="email"
            id={`${id}-email`}
            className={`${styles.input} ${error ? styles.inputError : ''}`}
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
            aria-required="true"
            disabled={submitted}
          />
          <button type="submit" className="btn-primary">
            {buttonLabel}
          </button>
        </form>
      ) : null}

      {submitted && (
        <div className={styles.successMsg} role="status" aria-live="polite">
          <span aria-hidden="true">✓</span> You're on the list! We'll notify you at launch.
        </div>
      )}
    </div>
  )
}

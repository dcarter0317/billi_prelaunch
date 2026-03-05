'use client'

import { useState } from 'react'

export default function EarlyAccessForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const toFriendlyError = (raw: unknown) => {
    const text = String(raw ?? '')
    if (/early_access_email_key|duplicate key|unique constraint/i.test(text)) {
      return 'This email is already on the waitlist.'
    }
    return 'Unable to join the waitlist right now. Please try again.'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage("✓ You're on the waitlist!")
        setEmail('')
        setName('')
      } else {
        setMessage(toFriendlyError(data?.error))
      }
    } catch {
      setMessage('Server error. Please try again in a moment.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md px-4">
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-4 border border-tertiary rounded-3xl md:rounded-4xl px-4 md:px-6 py-4 md:py-5"
      >    
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4">
          <svg
            className="hidden md:block h-6 w-6 shrink-0 text-tertiary"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent outline-none border border-tertiary md:border-0 rounded px-3 py-2 md:px-0 md:py-0 text-sm md:text-base"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="whitespace-nowrap rounded-full border border-tertiary bg-tertiary px-5 py-2 font-bold text-black disabled:opacity-50 text-sm md:text-base"
          >
            {loading ? 'Sending...' : 'Get Access'}
          </button>
        </div>
      </form>

      {message && (
        <p className={`mt-3 text-sm ${message.includes('✓') ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </div>
  )
}
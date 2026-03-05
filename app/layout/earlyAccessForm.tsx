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
    <>
      <section className='flex flex-col items-center justify-center gap-2'>
         <form onSubmit={handleSubmit} className="relative flex flex-col gap-4 w-full max-w-xl border border-tertiary/30 rounded-4xl pl-4 pr-1 py-1">
            <div className="flex items-center gap-4">
                <svg
                className="h-6 w-6 shrink-0 text-tertiary"
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
                className="flex-1 bg-transparent outline-none"
                required
                />
                <button
                type="submit"
                disabled={loading}
                className="whitespace-nowrap rounded-full border border-tertiary bg-tertiary px-5 py-2 font-bold text-white disabled:opacity-50"
                >
                {loading ? 'Sending...' : 'Get Early Access'}
                </button>
            </div>
            </form>
            <div>
            {message && <p className={message.includes('✓') ? 'text-green-400' : 'text-red-400'}>{message}</p>}
            </div>
      </section>
    </>
  )
}
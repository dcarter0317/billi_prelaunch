import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const hero = () => {
  return (
    <>
      <section className="flex flex-col items-center text-center py-16">
        <p className="text-tertiary text-sm uppercase font-bold mb-8 rounded-md border border-tertiary px-4 py-2">join the waitlist</p>
        <h1 className="text-7xl font-extrabold mb-6">Take Control of Every Bill. <br /> <span className="text-tertiary">Effortlessly.</span></h1>
        <p className="text-secondary text-lg">Experience the premium bank-like aesthetic of automated bill tracking.<br />No more late fees, just perfect financial clarity.</p>
      </section>
      <section className="flex items-center justify-center">
        <form action="" className="relative flex items-center w-full max-w-md border border-tertiary rounded-4xl px-6 py-5">
          <svg
            className="h-6 w-6 shrink-0 text-tertiary"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Envelope"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input
            placeholder="Enter your email address"
            type="text"
            className="flex-1 min-w-65 bg-transparent outline-none pl-4 pr-36"
          />
          <Link href="" className="absolute right-2 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border font-bold border-tertiary bg-tertiary px-5 py-2">
            Get Early Access
          </Link>
        </form>
      </section>
       <section className="flex items-center justify-center space-x-4 py-6">
          <Image src="/assets/Pre-Order-App-Store-Badge.svg" alt="Pre-Order-App-Store-Badge" width={120} height={40} />
          <Image src="/assets/PreRegisterOnGooglePlayBadge.svg" alt="Pre-Register-On-Google-Play-Badge" width={120} height={40} />
        </section>
    </>
  )
}

export default hero
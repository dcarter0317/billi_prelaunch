"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const header = () => {
  const [loading, setLoading] = useState(false)
  return (
    <>
    <section className="flex items-center justify-between px-6 py-2 mt-3 border-b border-gray-600">
      <Link href="/">
        <Image src="/assets/billi-header-logo-dark.svg" alt="Billi Logo" width={100} height={40} />
      </Link>
      <nav className="flex space-x-16 items-center">
        <Link className='hover:text-white/50' href="#features">Features</Link>
        <Link className='hover:text-white/50' href="#security">Security</Link>
        <Link className='hover:text-white/50' href="mailto:info@dcartdevelopment.com?subject=Contact%20Billi%20Inquiry">Contact</Link>
     </nav>
    </section>
    </>
  )
}

export default header   
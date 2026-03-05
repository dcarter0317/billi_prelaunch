import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const header = () => {
  return (
    <>
    <section className="flex items-center justify-between px-6 py-2 mt-3 border-b border-gray-600">
      <Link href="/">
        <Image src="/assets/billi-header-logo-dark.svg" alt="Billi Logo" width={100} height={40} />
      </Link>
      <nav className="flex space-x-16 items-center">
        <Link href="#features">Features</Link>
        <Link href="#security">Security</Link>
        <Link href="#contact">Contact</Link>
        <Link href="" className="rounded-full border font-bold border-tertiary bg-tertiary px-6 py-2">
          Get Early Access
        </Link>
     </nav>
    </section>
    </>
  )
}

export default header   
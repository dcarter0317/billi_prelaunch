import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
   <>
     <section className="flex items-center justify-between px-6 pt-6 mt-3 border-t border-gray-600">
       <Link href="/">
        <Image src="/assets/billi-header-logo-dark.svg" alt="Billi Logo" width={100} height={40} />
       </Link>
       <nav className="flex space-x-8 text-secondary items-center hover:text-primary">
        <Link href="#privacy">Privacy Policy</Link>
        <Link href="#terms">Terms of Service</Link>
        <Link href="#contact">Contact Us</Link>
       </nav>
      </section>
      <section className="text-center text-sm text-secondary mb-8">
        &copy; {new Date().getFullYear()} Billi is a product of Dcart Development. All rights reserved. Available now for early access on iOS and Android.
      </section>
    </>
  )
}

export default Footer
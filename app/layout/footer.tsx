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
          <nav className="flex space-x-8 text-secondary items-center">
            <Link className='hover:text-white' href="./assets/billi-privacy-policy.pdf">Privacy Policy</Link>
            <Link className='hover:text-white' href="./assets/billi-terms-of-service.pdf">Terms of Service</Link>
            <Link className='hover:text-white' href="mailto:info@dcartdevelopment.com?subject=Contact%20Billi%20Inquiry">Contact</Link>
          </nav>
      </section>
      <section className="text-center text-sm text-secondary mb-8">
        &copy; {new Date().getFullYear()} Billi is a product of Dcart Development. All rights reserved. Available now for early access on iOS and Android.
      </section>
    </>
  )
}

export default Footer
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
   <>
      <section className="flex flex-col md:flex-row items-center justify-around md:justify-between px-6 py-4 mt-3 border-b border-gray-600 gap-4 md:gap-0">
       <Link href="/">
        <Image src="/assets/billi-header-logo-dark.svg" alt="Billi Logo" width={100} height={40} />
       </Link>
          <nav className="flex space-x-8 text-secondary items-center">
            <Link className='hover:text-white' href="./assets/billi-privacy-policy.pdf">Privacy Policy</Link>
            <Link className='hover:text-white' href="./assets/billi-terms-of-service.pdf">Terms of Service</Link>
            <Link className='hover:text-white' href="mailto:info@dcartdevelopment.com?subject=Contact%20Billi%20Inquiry">Contact</Link>
          </nav>
      </section>
      <section className="text-center text-sm text-secondary my-8">
        &copy; {new Date().getFullYear()} Billi is a product of Dcart Development. All rights reserved.
      </section>
    </>
  )
}

export default Footer
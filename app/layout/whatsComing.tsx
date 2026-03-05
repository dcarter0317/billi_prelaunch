import React from 'react'
import cardGrid from './cardGrid'
import Image from 'next/image'
import CardGrid from './cardGrid'

const whatsComing = () => {
  return (
    <>

     <section id="security" className="flex items-center justify-between py-16 max-w-7xl mx-auto px-5">
       <div>
          <h2 className="text-3xl font-bold mb-2">What's Coming</h2>
          <p className="text-secondary mb-6">
            Billi is more than just a tracker. It's a financial bodyguard designed with precision and high-level security.
          </p>
       </div>
      <div className="flex space-x-4">
        <Image src="/assets/apple-logo.svg" alt="Apple Logo" width={24} height={24} />
        <Image src="/assets/android-logo.svg" alt="Android Logo" width={24} height={24} />
      </div>
     </section>
     <section>
       <CardGrid />
     </section>
    </>
  )
}

export default whatsComing
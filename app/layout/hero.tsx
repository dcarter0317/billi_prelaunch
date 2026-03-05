import React from 'react'
import Image from 'next/image'
import EarlyAccessForm from './earlyAccessForm'

const hero = () => {
  return (
    <>
      <section className="flex flex-col items-center text-center py-16">
        <div className='flex items-center gap-4 mb-4 rounded-md border border-tertiary px-4 py-2'>
          <Image src="/assets/bullet-point.svg" alt="Bullet Point" width={8} height={8} />
          <p className="text-tertiary text-sm uppercase font-bold">join the waitlist</p>
        </div>
        <h1 className="text-7xl font-extrabold mb-6">Take Control of Every Bill. <br /> <span className="text-tertiary">Effortlessly.</span></h1>
        <p className="text-secondary text-lg">Experience the premium bank-like aesthetic of automated bill tracking.<br />No more late fees, just perfect financial clarity.</p>
      </section>
      <section className="flex items-center justify-center py-6"> 
           <EarlyAccessForm />
      </section>
      <section className="flex items-center justify-center space-x-4 py-6">
        <Image src="/assets/Pre-Order-App-Store-Badge.svg" alt="Pre-Order-App-Store-Badge" width={120} height={40} />
        <Image src="/assets/PreRegisterOnGooglePlayBadge.svg" alt="Pre-Register-On-Google-Play-Badge" width={120} height={40} />
      </section>
    </>
  )
}

export default hero
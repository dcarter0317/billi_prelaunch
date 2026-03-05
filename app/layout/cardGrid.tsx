import React from 'react'
import Image from 'next/image'

const cardGrid = () => {
  return (
   <>
     <section className="flex flex-col items-center py-16">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-6  max-w-7xl mx-auto">
          <div className='bg-[rgba(15,23,42,0.4)] py-6 px-8 rounded-3xl border border-tertiary'>
            <Image src="/assets/intelligent-icon.svg" alt="intelligent-icon.svg" width={64} height={64} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Intelligent Tracking</h3>
            <p className="text-secondary">Automatic pay-period filtering ensures you only see what's relevant to your current bank balance.</p>
          </div>         
          <div className='bg-[rgba(15,23,42,0.4)] py-6 px-8 rounded-3xl border border-tertiary'>
            <Image src="/assets/flexible-icon.svg" alt="flexible-icon.svg" width={64} height={64} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Flexible Recurrence</h3>
            <p className="text-secondary">Whether it's weekly, bi-weekly, or custom cycles, Billi supports 8+ payment types for total flexibility.</p>
          </div>         
          <div className='bg-[rgba(15,23,42,0.4)] py-6 px-8 rounded-3xl border border-tertiary'>
            <Image src="/assets/bank-level-icon.svg" alt="bank-level-icon.svg" width={64} height={64} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Bank-Level Security</h3>
            <p className="text-secondary">Your data is encrypted end-to-end. Biometric lock and secure sync keep your financial life private.</p>
          </div>         
       </div>
   </section>
   </>
  )
}

export default cardGrid
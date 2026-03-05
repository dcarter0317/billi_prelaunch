import React from 'react'
import Image from 'next/image'

const feature = () => {
  return (
    <>
    <section id="features" className="flex items-center justify-center mt-12 md:mt-24 px-4 md:px-6">
        <div className="relative w-full max-w-5xl">
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-100 w-306 -translate-x-1/2 -translate-y-[calc(50%+200px)] bg-[url('/assets/Overlay-Blur.png')] bg-contain bg-center bg-no-repeat" />
          <div className="relative z-10 w-full h-64 md:h-97.5 overflow-hidden rounded-2xl md:rounded-3xl">
            <Image
              src="/assets/feature-img.svg"
              alt="Feature Mockup"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1224px) 90vw, 1224px"
              className="object-contain"
              priority
            />
          </div>
        </div>
     </section>
    </>
  )
}

export default feature
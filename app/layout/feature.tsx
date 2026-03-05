import React from 'react'
import Image from 'next/image'

const feature = () => {
  return (
    <>
    <section id="features" className="flex items-center justify-center mt-24">
        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-100 w-306 -translate-x-1/2 -translate-y-[calc(50%+200px)] bg-[url('/assets/Overlay-Blur.png')] bg-contain bg-center bg-no-repeat" />
          <div className="relative z-10 h-97.5 w-5xl overflow-hidden rounded-3xl">
            <Image
              src="/assets/feature-img.svg"
              alt="Feature Mockup"
              fill
              sizes="(max-width: 1224px) 100vw, 1224px"
              className="object-cover"
            />
          </div>
        </div>
     </section>
    </>
  )
}

export default feature
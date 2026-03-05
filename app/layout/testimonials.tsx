import React from 'react'
import Image from 'next/image'

const testimonials = () => {
  return (
    <>
      <section className="flex flex-col items-center text-center py-16">
        <Image src="/assets/testimonial-quote.svg" alt="Testimonial Quote" width={32} height={32} className="mb-6" />
        <blockquote className="text-3xl max-w-200">
          "I used to live in constant fear of missing a due date. Late fees were my monthly tax for being busy. Billi changed everything before I even launched it."
        </blockquote>
        <p className="text-lg mt-8 font-bold">Tina Perez</p>
        <p className="text-sm text-secondary">Beta Tester & Program Manager</p>
      </section>
    </>
  )
}

export default testimonials

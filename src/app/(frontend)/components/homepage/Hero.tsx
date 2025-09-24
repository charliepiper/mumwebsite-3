'use client'

import { Star, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const cards = [
    {
      title: 'Venture Funds',
      subtitle: 'Launch & manage funds of any size',
      img: 'https://images.unsplash.com/photo-1700481512398-df3b88152d95?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG5hdHVyZSUyMHNjb3RsYW5kfGVufDB8fDB8fHww',
    },
    {
      title: 'Rolling Funds',
      subtitle: 'Accept new capital quarterly',
      img: 'https://images.unsplash.com/photo-1710959038139-627442d2558f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Syndicates',
      subtitle: 'Raise capital on a deal-by-deal basis',
      img: 'https://images.unsplash.com/photo-1655572491019-4d3cc39f8462?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Content */}
      <div className="flex flex-col items-center text-center px-6 pt-28 pb-16">
        <h1 className="text-5xl md:text-6xl text-gray-900 leading-tight">
          Evelin Kallas <br /> Natural Homeopathy
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl text-lg">
          Gentle and holistic healing with homeopathy — tailored remedies for your mind, body, and
          spirit.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex space-x-4">
          <button className="rounded-full bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800 transition">
            Book a Session
          </button>
          <button className="rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50 transition">
            Learn More
          </button>
        </div>

        {/* Rating */}
        <div className="mt-8 flex flex-col items-center">
          <div className="flex space-x-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-500" />
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">4.9/5 from 1,230 patients</p>
        </div>
      </div>

      {/* Grid of Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 pb-20"
      >
        {cards.map((card, i) => (
          <div key={i} className="relative rounded overflow-hidden group cursor-pointer">
            {/* Background image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-150 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay content (title, subtitle, chevron) */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              {/* Text block */}
              <div>
                <h3 className="text-white font-semibold text-lg">{card.title}</h3>
                <p className="mt-1 text-white/90 text-sm leading-snug">{card.subtitle}</p>
              </div>

              {/* Arrow button (top-right) */}
              <div className="absolute top-4 right-4">
                <div className="bg-white rounded-full p-2 shadow-md group-hover:bg-gray-100 transition">
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

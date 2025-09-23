'use client'

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Content */}
      <div className="flex flex-col items-center text-center px-6 pt-28 pb-16">
        <h1 className="text-5xl md:text-6xl  text-gray-900 leading-tight">
          Evelin Kalls <br /> Natural Homeopathy
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

      {/* Scroll-effect Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1627899475366-6df29213a044?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMHNjb3RsYW5kfGVufDB8fDB8fHww"
          alt="Homeopathy treatment"
          className="rounded-xl shadow-lg border max-w-5xl mx-auto"
        />
      </motion.div>
    </section>
  )
}

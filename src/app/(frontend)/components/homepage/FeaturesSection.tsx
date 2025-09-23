'use client'

import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'
import Image from 'next/image'

export default function FeatureSection() {
  return (
    <section className="bg-white my-10 py-20 px-6">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl text-gray-900">Natural Healing, Within Reach</h2>
        <p className="mt-4 text-lg text-gray-600">
          Take charge of your wellbeing with simple, effective, and holistic homeopathic remedies by
          Evelin Kalls.
        </p>
      </div>

      {/* Main Bento Item */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto max-w-6xl rounded-xl bg-gray-50 border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left Text Content */}
        <div className="flex-1 p-8 md:p-12 flex flex-col ">
          <div className="flex items-center mb-4">
            <Leaf className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Personalized Homeopathy</h3>
          <p className="mt-3 text-gray-600">Remedies designed uniquely for you</p>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative pt-8 pl-8">
          <Image
            src="https://images.unsplash.com/photo-1551807683-84c10488185f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
            alt="Homeopathy example"
            width={2070}
            height={1380}
            className="w-full h-full object-cover rounded-tl-xl"
          />
        </div>
      </motion.div>
    </section>
  )
}

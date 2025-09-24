'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Leaf,
  GraduationCap,
  Heart,
  Users,
  FileText,
  Sparkles,
  ChevronDown,
} from 'lucide-react'
import Link from 'next/link'

type MenuItem = {
  label: string
  desc: string
  href: string
  icon: React.ElementType
}

type MenuSection = {
  title: string
  items: MenuItem[]
}

type MenuCallout = {
  title: string
  desc: string
  action?: string
  href: string
}

type MenuConfigEntry = {
  layout: string
  sections: MenuSection[]
  callout?: MenuCallout
}

const menuConfig: Record<string, MenuConfigEntry> = {
  About: {
    layout: 'grid',
    sections: [
      {
        title: 'ABOUT',
        items: [
          {
            label: 'Our Philosophy',
            desc: 'Holistic approach to healing',
            href: '#',
            icon: Sparkles,
          },
          {
            label: 'Meet Evelin',
            desc: 'Learn more about Evelin Kallas',
            href: '#',
            icon: Users,
          },
          {
            label: 'Testimonials',
            desc: 'Stories from happy clients',
            href: '#',
            icon: Heart,
          },
        ],
      },
    ],
  },
  Services: {
    layout: 'split', // left = items, right = callout
    sections: [
      {
        title: 'SERVICES',
        items: [
          {
            label: 'Consultations',
            desc: 'One-on-one health sessions',
            href: '#',
            icon: Leaf,
          },
          {
            label: 'Natural Remedies',
            desc: 'Personalized care plans',
            href: '#',
            icon: BookOpen,
          },
          {
            label: 'Emotional Wellbeing',
            desc: 'Balance body & spirit',
            href: '#',
            icon: Heart,
          },
        ],
      },
    ],
    callout: {
      title: 'Ready to heal naturally?',
      desc: 'Book a consultation tailored to your needs today.',
      action: 'Book Consultation',
      href: '#',
    },
  },
  Resources: {
    layout: 'two-col', // left multiple blocks, right CTA
    sections: [
      {
        title: 'RESOURCES',
        items: [
          {
            label: 'Blog',
            desc: 'Articles on natural healing',
            href: '#',
            icon: FileText,
          },
          {
            label: 'Guides',
            desc: 'Step-by-step healing resources',
            href: '#',
            icon: BookOpen,
          },
          {
            label: 'Workshops',
            desc: 'Learn holistic practices',
            href: '#',
            icon: GraduationCap,
          },
        ],
      },
    ],
    callout: {
      title: 'Join Our Community',
      desc: 'Connect with others exploring homeopathy and wellbeing.',
      href: '#',
    },
  },
}

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col justify-center">
            <span className="text-xl text-[#041F54] leading-tight">Evelin Kallas</span>
            <span className="text-xs text-gray-500 ">Homeopathy</span>
          </Link>

          {/* Nav Items */}
          <div className="hidden md:flex space-x-6 relative">
            {Object.keys(menuConfig).map((menu) => {
              const config = menuConfig[menu as keyof typeof menuConfig]
              return (
                <div
                  key={menu}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(menu)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center gap-1 px-2 py-1 text-gray-700 hover:text-[#041F54] font-medium transition">
                    {menu}
                    <motion.div
                      animate={{ rotate: activeMenu === menu ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeMenu === menu && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-3 w-[700px] bg-white rounded shadow-xl border border-gray-100 z-50"
                      >
                        {/* Layout variations */}
                        {config.layout === 'grid' && (
                          <div className="p-6 grid grid-cols-3 gap-6">
                            {config.sections[0].items.map((item) => (
                              <Link
                                href={item.href}
                                key={item.label}
                                className="p-4 rounded hover:bg-gray-50 transition"
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <item.icon
                                    className="w-5 h-5 text-[#041F54]"
                                    aria-hidden="true"
                                  />
                                  <span className="font-medium text-gray-900">{item.label}</span>
                                </div>
                                <p className="text-sm text-gray-500 leading-snug ml-8">
                                  {item.desc}
                                </p>
                              </Link>
                            ))}
                          </div>
                        )}

                        {config.layout === 'split' && (
                          <div className="flex">
                            <div className="flex-1 p-6 grid gap-4">
                              {config.sections[0].items.map((item) => (
                                <Link
                                  href={item.href}
                                  key={item.label}
                                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition"
                                >
                                  <item.icon
                                    className="w-5 h-5 mt-1 text-[#041F54]"
                                    aria-hidden="true"
                                  />
                                  <div>
                                    <p className="font-medium text-gray-900">{item.label}</p>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Callout */}
                            <div className="w-1/3 bg-gray-50 p-6 rounded-tr rounded-br flex flex-col justify-center">
                              <h4 className="text-lg font-semibold text-[#041F54]">
                                {config.callout?.title}
                              </h4>
                              <p className="text-sm text-gray-600 mt-2">{config.callout?.desc}</p>
                              <Link
                                href={config.callout?.href || '#'}
                                className="mt-4 inline-block px-4 py-2 bg-[#041F54] text-white rounded hover:bg-[#041F54]/90 transition"
                              >
                                {config.callout?.action}
                              </Link>
                            </div>
                          </div>
                        )}

                        {config.layout === 'two-col' && (
                          <div className="flex">
                            <div className="flex-1 p-6 grid grid-cols-2 gap-6">
                              {config.sections[0].items.map((item) => (
                                <Link
                                  href={item.href}
                                  key={item.label}
                                  className="p-4 rounded hover:bg-gray-50 transition"
                                >
                                  <div className="flex items-center gap-3 mb-2">
                                    <item.icon
                                      className="w-5 h-5 text-[#041F54]"
                                      aria-hidden="true"
                                    />
                                    <span className="font-medium text-gray-900">{item.label}</span>
                                  </div>
                                  <p className="text-sm text-gray-500 pl-8">{item.desc}</p>
                                </Link>
                              ))}
                            </div>

                            {/* Right CTA */}
                            <div className="w-1/3 bg-gray-50 p-6 rounded-tr-xl rounded-br-xl">
                              <h4 className="text-lg font-semibold text-[#041F54]">
                                {config.callout?.title}
                              </h4>
                              <p className="text-sm text-gray-600 mt-2">{config.callout?.desc}</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="#"
              className="px-5 py-2 bg-[#041F54] text-white rounded hover:bg-[#041F54]/90 transition"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

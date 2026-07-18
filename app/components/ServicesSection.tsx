'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Brand Strategy & Identity',
    description: 'We define what your brand stands for, who it speaks to, and how it dominates its category — before a single pixel is placed.',
  },
  {
    number: '02',
    title: 'Web Design & Development',
    description: 'High-performance websites and web apps built with modern stacks — fast, accessible, and engineered to convert.',
  },
  {
    number: '03',
    title: 'Performance Marketing',
    description: 'Data-backed paid media, SEO, and growth campaigns that drive measurable ROI across every channel.',
  },
  {
    number: '04',
    title: 'Product & UX Design',
    description: 'User-centred digital products designed from insight to interface — built for retention, not just aesthetics.',
  },
  {
    number: '05',
    title: 'Content & Creative',
    description: 'Compelling copy, motion, and visual content that communicates authority and earns audience attention.',
  },
  {
    number: '06',
    title: 'Analytics & Intelligence',
    description: 'Custom dashboards, data pipelines, and insight frameworks that turn raw numbers into competitive advantage.',
  },
]

export default function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="services" className="relative overflow-hidden py-28" style={{ backgroundColor: '#101010' }}>
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <motion.p
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="text-white/[0.025] font-black uppercase whitespace-nowrap"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(80px, 14vw, 200px)',
            letterSpacing: '0.05em',
          }}
        >
          STRATEGY · DESIGN · TECHNOLOGY · STRATEGY · DESIGN · TECHNOLOGY ·
        </motion.p>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div ref={headerRef} className="mb-20">
          <div className="flex items-baseline gap-4 flex-wrap">
            <motion.span
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={headerInView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 1.0, ease: [0.23, 1, 0.32, 1] }}
              className="text-white leading-none"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: 'clamp(48px, 6vw, 88px)',
              }}
            >
              Services
            </motion.span>
            <motion.span
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={headerInView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 1.0, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="text-white/60 leading-none"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 200,
                fontSize: 'clamp(22px, 2.5vw, 36px)',
                letterSpacing: '0.1em',
              }}
            >
              &amp; Expertise
            </motion.span>
          </div>
        </div>

        <div>
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
              className="group flex items-center gap-8 md:gap-16 py-8 border-b cursor-pointer"
              style={{ borderColor: 'rgba(255,255,255,0.05)' }}
            >
              <div
                className="text-[#0066ff] shrink-0 w-12 text-sm"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 200, letterSpacing: '0.1em' }}
              >
                {service.number}
              </div>

              <div className="flex-1 min-w-0">
                <h3
                  className="text-white group-hover:text-[#0066ff] transition-colors duration-500 mb-1"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 800,
                    fontSize: 'clamp(18px, 1.8vw, 26px)',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-white/60 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {service.description}
                </p>
              </div>

              <div className="shrink-0 text-white/60 group-hover:text-[#0066ff] group-hover:translate-x-2 transition-all duration-500 text-xl">
                →
              </div>

              <div
                className="absolute left-0 right-0 h-full bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

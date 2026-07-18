'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CTASection() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: '#ffffff', minHeight: '420px' }}
    >
      <div className="flex flex-col lg:flex-row min-h-[420px]">

        {/* ── LEFT — content ── */}
        <div className="relative z-10 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20 lg:w-[52%]">

          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-10"
          >
            <span className="text-black text-2xl leading-none" style={{ fontFamily: 'var(--font-sans)', fontWeight: 800 }}>MADOX</span>
            <span style={{ color: '#0066ff', fontWeight: 800, fontSize: '1.5rem', lineHeight: 1 }}>.</span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="leading-[1.1]"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: 'clamp(32px, 4vw, 56px)',
                color: '#0066ff',
              }}
            >
              Built It?<br />
              Now Let's Market It!
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="text-gray-600 leading-[1.75] mb-10 max-w-md"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '15px' }}
          >
            From the team that understands your tech stack to the marketing experts who know your audience. Complete your digital success story with <strong className="text-gray-900">MADOX</strong>.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-lead-modal'))}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ fontFamily: 'var(--font-sans)', backgroundColor: '#0066ff' }}
            >
              Complete Your Success Story
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a
              href="tel:+442079460321"
              className="text-sm font-medium text-gray-500 hover:text-[#0066ff] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              or Call Us →
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT — image ── */}
        <div className="relative lg:w-[48%] min-h-[380px] overflow-hidden">
          <img
            src="/images/portfolio/digital-marketing-strategy.avif"
            alt="Digital Marketing Strategy"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Subtle left-side fade to white for blend */}
          <div
            className="absolute inset-y-0 left-0 w-24 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
          />

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="absolute bottom-8 right-8 bg-white rounded-2xl px-6 py-4 shadow-xl"
            style={{ zIndex: 10 }}
          >
            <p className="text-gray-400 text-[10px] tracking-[0.25em] uppercase mb-1" style={{ fontFamily: 'var(--font-sans)' }}>Growth Partner</p>
            <p className="text-gray-900 font-bold text-sm" style={{ fontFamily: 'var(--font-sans)' }}>200+ Brands. One Agency.</p>
          </motion.div>

          {/* Stats pill */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="absolute top-8 right-8 bg-white/95 rounded-xl px-5 py-3 shadow-lg flex items-center gap-3"
            style={{ zIndex: 10 }}
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0066ff' }} />
            <p className="text-gray-900 font-semibold text-sm" style={{ fontFamily: 'var(--font-sans)' }}>18+ Years of Results</p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

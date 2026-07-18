'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '18+',  label: 'Years in Business' },
  { value: '200+', label: 'Brands Served' },
  { value: '50+',  label: 'Industries' },
  { value: '100%', label: 'Client Committed' },
]

const brandNames = ['Malabar Gold', 'Tata Power', 'Vivo', 'Black+Decker', 'Hero Electric', 'Karam Safety']

export default function WhySection() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ backgroundColor: '#0a0908' }}>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 py-28 md:py-36">

        {/* ── HEADER ROW ── */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-20 mb-20">

          {/* LEFT — text block */}
          <div className="lg:w-[55%]">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px" style={{ backgroundColor: '#0066ff' }} />
              <span className="text-[11px] tracking-[0.45em] uppercase font-semibold" style={{ fontFamily: 'var(--font-sans)', color: '#0066ff' }}>
                Who We Are · About
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
                transition={{ duration: 1.0, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="text-white leading-[1.1]"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  fontSize: 'clamp(24px, 2.8vw, 40px)',
                }}
              >
                Results-Obsessed.<br />
                <span style={{ color: '#0066ff' }}>Data-Backed.</span><br />
                Since 2006.
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="text-white/60 leading-[1.85] mb-6"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '16px' }}
            >
              A results-obsessed agency delivering measurable growth since 2006 — across{' '}
              <span className="text-white font-semibold">50+ industries</span> and{' '}
              <span className="text-white font-semibold">200+ brands</span> across India.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.42, ease: [0.23, 1, 0.32, 1] }}
              className="text-white/45 leading-[1.85] mb-10"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '15px' }}
            >
              Trusted by India's biggest names. We build brands. We drive growth.
            </motion.p>

            {/* Brand tags */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.54 }}
              className="flex flex-wrap gap-2"
            >
              {brandNames.map((b) => (
                <span
                  key={b}
                  className="text-[11px] tracking-wide px-3 py-1.5 rounded-full text-white/60"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.03)',
                  }}
                >
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — stats */}
          <div className="lg:w-[45%] grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.65, delay: 0.2 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="relative p-6 md:p-8 rounded-2xl overflow-hidden group"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,102,255,0.08) 0%, transparent 70%)' }}
                />
                <span
                  className="block leading-none mb-3"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 800,
                    fontSize: 'clamp(26px, 3vw, 38px)',
                    color: '#ffffff',
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="text-white/50 text-[11px] uppercase tracking-[0.2em]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="h-px mb-16"
          style={{ originX: 0, background: 'linear-gradient(90deg, #0066ff, rgba(0,102,255,0.15), transparent)' }}
        />

        {/* ── MISSION & VISION ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="relative rounded-2xl p-8 overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="absolute top-0 left-0 w-20 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.6">
                <circle cx="9" cy="9" r="7"/>
                <path d="M9 6v3.5l2.5 1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-semibold mb-3 text-white/50" style={{ fontFamily: 'var(--font-sans)' }}>
              Our Mission
            </p>
            <p className="text-white/80 leading-[1.85]" style={{ fontFamily: 'var(--font-sans)', fontSize: '15px' }}>
              To empower businesses to achieve their full potential by delivering{' '}
              <span className="text-white font-semibold">tailored marketing solutions</span>{' '}
              that drive measurable results.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.72, ease: [0.23, 1, 0.32, 1] }}
            className="relative rounded-2xl p-8 overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="absolute top-0 left-0 w-20 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.6">
                <path d="M9 2l1.8 4L15 7l-3 2.9.7 4.1L9 12l-3.7 2 .7-4.1L3 7l4.2-1L9 2z"/>
              </svg>
            </div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-semibold mb-3 text-white/50" style={{ fontFamily: 'var(--font-sans)' }}>
              Our Vision
            </p>
            <p className="text-white/80 leading-[1.85]" style={{ fontFamily: 'var(--font-sans)', fontSize: '15px' }}>
              To be the most trusted marketing partner, known for{' '}
              <span className="text-white font-semibold">innovation, speed, and unwavering commitment</span>{' '}
              to client success.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

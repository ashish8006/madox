'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const heroBrands = [
  'Malabar Gold & Diamonds',
  'Tata Power DDL',
  'Vivo Mobiles',
  'Black+Decker',
  'Karam Safety',
  'CRC Group',
  'SBP Housing',
  'Hero Electric',
  'Bonfiglioli',
  'VVIP Group',
  'Roto Pumps',
  'Radico Khaitan',
  'Exotica Drinks',
  'Multifit Plywood',
  'Grandthum',
]

function BrandSlider({ mounted }: { mounted: boolean }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setActive(prev => (prev + 1) % heroBrands.length)
    }, 2500)
    return () => clearInterval(t)
  }, [])

  const visible = [
    heroBrands[active % heroBrands.length],
    heroBrands[(active + 1) % heroBrands.length],
    heroBrands[(active + 2) % heroBrands.length],
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={mounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
      className="hidden md:flex absolute bottom-10 right-10 md:right-16 flex-col gap-3 w-56 md:w-64"
    >
      {/* Label */}
      <p
        className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-1"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        Trusted by
      </p>

      {/* Cards */}
      <div className="flex flex-col gap-2 overflow-hidden">
        <AnimatePresence mode="popLayout">
          {visible.map((brand, i) => (
            <motion.div
              key={`${brand}-${active}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: i === 0 ? 1 : i === 1 ? 0.6 : 0.3, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: i * 0.05 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: i === 0
                  ? '1px solid rgba(0,102,255,0.5)'
                  : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Blue dot */}
              <div
                className="shrink-0 w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: i === 0 ? '#0066ff' : 'rgba(255,255,255,0.3)' }}
              />
              <p
                className="text-white truncate text-sm"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: i === 0 ? 700 : 400,
                  opacity: i === 0 ? 1 : 0.7,
                }}
              >
                {brand}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1.5 mt-1">
        {heroBrands.map((_, i) => (
          <div
            key={i}
            className="h-px transition-all duration-300"
            style={{
              width: i === active ? 20 : 8,
              backgroundColor: i === active ? '#0066ff' : 'rgba(255,255,255,0.2)',
              borderRadius: 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen">
      <div className="h-full overflow-hidden">

        {/* ── Video background ── */}
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ backgroundColor: '#050a12' }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: 'scale(1.05)' }}
          >
            <source
              src="/video/madox-home-hero-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* ── Dark overlay + gradient ── */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(10,9,8,0.97) 0%, rgba(10,9,8,0.55) 45%, rgba(5,10,18,0.4) 100%)',
          }}
        />

        {/* ── Hero content ── */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="flex flex-col items-start text-left px-6 md:px-10 lg:px-16 max-w-4xl w-full">
            <motion.p
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={mounted ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="text-[11px] tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-sans)', color: '#ffffff' }}
            >
              Madox Communications · Est. 2006
            </motion.p>

            <motion.h1
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={mounted ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 1.1, delay: 0.55, ease: [0.23, 1, 0.32, 1] }}
              className="text-white leading-[0.9] mb-1"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: 'clamp(36px, 8vw, 80px)',
              }}
            >
              Make Brands
            </motion.h1>

            <motion.h1
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={mounted ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 1.1, delay: 0.75, ease: [0.23, 1, 0.32, 1] }}
              className="leading-[0.9] mb-8"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: 'clamp(36px, 8vw, 80px)',
                color: '#0066ff',
              }}
            >
              Win.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
              className="text-white/60 text-sm leading-relaxed max-w-lg mb-8"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              We operate at the intersection of creativity and <strong className="text-white/80 font-bold">performance</strong> — building brands that dominate their markets with data-backed precision.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 14 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => window.dispatchEvent(new CustomEvent('open-lead-modal'))}
              className="flex items-center gap-3 group"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <span
                className="flex items-center gap-3 px-6 py-3 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#0066ff' }}
              >
                Consult Our Strategy Team
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </motion.button>
          </div>

          <BrandSlider mounted={mounted} />
        </div>



      </div>
    </section>
  )
}

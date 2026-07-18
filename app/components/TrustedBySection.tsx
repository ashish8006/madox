'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const brandsRow1 = [
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
]

const brandsRow2 = [
  'Roto Pumps',
  'Radico Khaitan',
  'Exotica Drinks',
  'Multifit Plywood',
  'Grandthum',
  'Athens City',
  'Prim Resorts',
  'Detailing Mafia',
  'Aero City',
  'Waimea',
]

function BrandPill({ name }: { name: string }) {
  return (
    <div
      className="shrink-0 flex items-center px-7 py-4 rounded-full"
      style={{
        border: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <span
        className="text-white/80 whitespace-nowrap"
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
          fontSize: '15px',
          letterSpacing: '0.01em',
        }}
      >
        {name}
      </span>
    </div>
  )
}

function MarqueeRow({ brands, direction }: { brands: string[]; direction: 'left' | 'right' }) {
  const doubled = [...brands, ...brands]
  const cls = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
  return (
    <div className="overflow-hidden w-full">
      <div className={`flex gap-4 w-max ${cls}`} style={{ animationDuration: '25s' }}>
        {doubled.map((name, i) => (
          <BrandPill key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  )
}

export default function TrustedBySection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: '#0a0908' }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Blue glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,102,255,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 mb-12 md:mb-16" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-24">

          {/* Left — stat + label */}
          <div className="shrink-0">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="text-[11px] tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: 'var(--font-sans)', color: '#0066ff' }}
            >
              Trusted By
            </motion.p>

            <div className="overflow-hidden">
              <motion.div
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
                transition={{ duration: 1.0, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              >
                <span
                  className="block text-white leading-none"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 800,
                    fontSize: 'clamp(80px, 12vw, 160px)',
                    color: '#0066ff',
                  }}
                >
                  200+
                </span>
                <span
                  className="block text-white leading-[0.9]"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 800,
                    fontSize: 'clamp(48px, 7vw, 100px)',
                  }}
                >
                  Brands.
                </span>
              </motion.div>
            </div>
          </div>

          {/* Right — description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="md:pb-4 max-w-md"
          >
            {/* Accent line */}
            <div className="w-10 h-px mb-6" style={{ backgroundColor: '#0066ff' }} />
            <p
              className="text-white/60 leading-[1.8]"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(15px, 1.4vw, 18px)',
              }}
            >
              From national giants to ambitious startups —{' '}
              <span className="text-white/90">real estate, FMCG, hospitality, finance, manufacturing</span>{' '}
              and more.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Scrolling brand rows */}
      <div className="flex flex-col gap-4 relative z-10">
        <MarqueeRow brands={brandsRow1} direction="left" />
        <MarqueeRow brands={brandsRow2} direction="right" />
      </div>
    </section>
  )
}

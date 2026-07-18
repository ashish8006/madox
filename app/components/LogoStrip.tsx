'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const ticker = [
  { name: 'The New York Times',      style: 'serif' },
  { name: 'Forbes',                  style: 'sans'  },
  { name: 'Architectural Digest',    style: 'serif' },
  { name: 'The Wall Street Journal', style: 'sans'  },
  { name: 'Financial Times',         style: 'serif' },
  { name: 'Vogue Living',            style: 'sans'  },
]
const loop = [...ticker, ...ticker]

// Served from Next.js public folder — no CORS, no auth, instant local load
const VIDEO_SRC = 'https://findrealestate.com/videos/why-us.mp4'
const POSTER    = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=70'

export default function LogoStrip() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef    = useRef<HTMLDivElement>(null)
  const inView     = useInView(textRef, { once: true, margin: '-120px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const videoScale    = useTransform(scrollYProgress, [0, 1], [1.07, 1.0])
  const overlayDarken = useTransform(scrollYProgress, [0, 0.5], [0.5, 0.68])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: '90vh', minHeight: '580px' }}
    >

      {/* ── Video layer ─────────────────────────────────── */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 z-0 origin-center overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={POSTER}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Dark gradient overlay ────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(6,5,4,0.55) 0%, rgba(6,5,4,0.3) 45%, rgba(6,5,4,0.75) 100%)',
          opacity: overlayDarken,
        }}
      />

      {/* ── Top gold rule ────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 z-20 section-line" />

      {/* ── Centered editorial text ──────────────────────── */}
      <div
        ref={textRef}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="text-[10px] tracking-[0.55em] uppercase text-[#c9a96e] mb-8"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Exceptional Living
        </motion.p>

        <div className="overflow-hidden mb-1">
          <motion.h2
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
            transition={{ duration: 1.15, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="text-white leading-[0.9]"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: 'clamp(44px, 7.5vw, 112px)',
            }}
          >
            Where Luxury
          </motion.h2>
        </div>

        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
            transition={{ duration: 1.15, delay: 0.34, ease: [0.23, 1, 0.32, 1] }}
            className="leading-[0.9]"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: 'clamp(44px, 7.5vw, 112px)',
              color: '#c9a96e',
            }}
          >
            Meets Legacy.
          </motion.h2>
        </div>

        <motion.a
          href="#properties"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.72 }}
          className="group inline-flex items-center gap-4 text-[11px] tracking-[0.35em] uppercase text-white/60 hover:text-white transition-colors duration-500"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <span>Explore Properties</span>
          <span
            className="block h-px bg-current transition-all duration-500"
            style={{ width: 32 }}
          />
        </motion.a>
      </div>

      {/* ── Press ticker anchored to bottom ─────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="section-line" />
        <div
          className="relative py-4 overflow-hidden"
          style={{
            background: 'rgba(6,5,4,0.72)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Edge fades */}
          <div
            className="absolute left-0 inset-y-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(6,5,4,1), transparent)' }}
          />
          <div
            className="absolute right-0 inset-y-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, rgba(6,5,4,1), transparent)' }}
          />

          <motion.div
            className="flex items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            style={{ width: 'max-content' }}
          >
            {loop.map((item, i) => (
              <span key={i} className="shrink-0 flex items-center">
                <span
                  className="whitespace-nowrap text-white/60 px-10"
                  style={{
                    fontFamily:    'var(--font-sans)',
                    fontSize:      '10px',
                    fontWeight:    400,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                  } as React.CSSProperties}
                >
                  {item.name}
                </span>
                <span style={{ color: '#c9a96e', opacity: 0.25, fontSize: '5px' }}>◆</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  )
}

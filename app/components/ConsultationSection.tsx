'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const IMAGE = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85'

export default function ConsultationSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // "CONSULTATION" fully visible at start → fades out by 0.45
  const bgTextOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])

  // Image starts almost invisible → fully visible by 0.55
  const imageOpacity = useTransform(scrollYProgress, [0, 0.55], [0.12, 1])

  // Image box grows from 0.72 → 1.0 (zoom-out / expand effect)
  const imageScale = useTransform(scrollYProgress, [0, 0.7], [0.72, 1.0])

  // Content overlay fades in after image is visible
  const contentOpacity = useTransform(scrollYProgress, [0.55, 0.82], [0, 1])
  const contentY       = useTransform(scrollYProgress, [0.55, 0.82], [16, 0])

  // Arrow fades in at the end
  const arrowOpacity = useTransform(scrollYProgress, [0.78, 0.95], [0, 1])

  return (
    <section
      ref={sectionRef}
      style={{ height: '200vh' }}
      className="relative"
    >
      {/* ── Sticky viewport ── */}
      <div
        className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: '#1e1410' }}
      >

        {/* ── Giant "CONSULTATION" background watermark ── */}
        <motion.div
          style={{ opacity: bgTextOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 select-none"
        >
          <span
            className="font-black uppercase tracking-[0.08em] whitespace-nowrap"
            style={{
              fontSize: 'clamp(48px, 10vw, 160px)',
              color: 'rgba(255,255,255,0.09)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            INNOVATION
          </span>
        </motion.div>

        {/* ── Image container — fades in and scales out ── */}
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="absolute inset-0 z-20 overflow-hidden"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${IMAGE}')` }}
          />

          {/* Subtle dark tint so text is readable */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.15) 100%)' }}
          />

          {/* ── Content overlay — appears when image is expanded ── */}
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="absolute top-12 left-12 md:top-16 md:left-16"
          >
            {/* Headline */}
            <h2
              className="text-white leading-[1.05] mb-8"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 56px)',
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
              }}
            >
              Have an Idea<br />
              Let's{' '}
              <span style={{ color: 'rgba(255,255,255,0.45)' }}>Build It</span>
            </h2>

            {/* CTA button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-white border border-white/40 hover:border-white hover:bg-white/10 px-6 py-3 transition-all duration-400 group"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
              }}
            >
              <span>Consultation</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M1 5H9M6 2L9 5L6 8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* ── Arrow at bottom ── */}
        <motion.div
          style={{ opacity: arrowOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.4"
            >
              <path d="M10 3L10 17M4 11L10 17L16 11" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

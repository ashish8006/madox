'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence, Variants } from 'framer-motion'

const STRIPS = 14

const slides = [
  {
    number: '01',
    eyebrow: 'What Drives Us',
    title: 'INNOVATION',
    body: 'Embracing cutting-edge trends to offer the best solutions and stay ahead of the curve.',
    img: '/images/portfolio/artificial-intelligence1.avif',
  },
  {
    number: '02',
    eyebrow: 'What Drives Us',
    title: 'SPEED',
    body: 'Delivering results with efficiency and urgency — meeting deadlines, exceeding expectations.',
    img: '/images/portfolio/artificial-intelligence2.avif',
  },
  {
    number: '03',
    eyebrow: 'What Drives Us',
    title: 'PARTNERSHIP',
    body: 'Collaborating closely with clients as an extension of their team, fostering trust and open communication.',
    img: '/images/portfolio/artificial-intelligence3.jpg',
  },
  {
    number: '04',
    eyebrow: 'What Drives Us',
    title: 'INTEGRITY',
    body: 'Upholding transparency, honesty, and ethical conduct in all interactions and business practices.',
    img: '/images/portfolio/artificial-intelligence4.jpg',
  },
]

function BlindImage({
  src,
  posStyle,
  entryDelay = 0,
}: {
  src: string
  posStyle: React.CSSProperties
  entryDelay?: number
}) {
  return (
    <div style={{ ...posStyle, position: 'absolute', overflow: 'hidden' }}>
      {Array.from({ length: STRIPS }, (_, i) => {
        const bgPositionY = `${(i / (STRIPS - 1)) * 100}%`
        return (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: `${(i / STRIPS) * 100}%`,
              height: `${100 / STRIPS}%`,
              backgroundImage: `url(${src})`,
              backgroundSize: `100% ${STRIPS * 100}%`,
              backgroundPosition: `50% ${bgPositionY}`,
              backgroundRepeat: 'no-repeat',
              transformOrigin: 'center',
            }}
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: 1,
              transition: { delay: entryDelay + i * 0.042, duration: 0.52, ease: [0.23, 1, 0.32, 1] },
            }}
            exit={{
              scaleY: 0,
              transition: { delay: (STRIPS - 1 - i) * 0.028, duration: 0.38, ease: [0.23, 1, 0.32, 1] },
            }}
          />
        )
      })}
    </div>
  )
}

const textVariants: Variants = {
  enter: (dir: number) => ({ clipPath: dir >= 0 ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)', opacity: 0 }),
  center: { clipPath: 'inset(0% 0 0% 0)', opacity: 1, transition: { duration: 0.85, ease: [0.23, 1, 0.32, 1] } },
  exit: (dir: number) => ({ clipPath: dir >= 0 ? 'inset(0 0 100% 0)' : 'inset(100% 0 0 0)', opacity: 0, transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] } }),
}

export default function PropertiesSection() {
  const sectionRef          = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const [direction, setDir] = useState(1)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(Math.floor(v * slides.length), slides.length - 1)
    if (next !== active) { setDir(next > active ? 1 : -1); setActive(next) }
  })

  const slide = slides[active]

  return (
    <section id="properties" ref={sectionRef} style={{ height: `${slides.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col md:flex-row" style={{ backgroundColor: '#080c14' }}>

        {/* ── LEFT — text panel ── */}
        <div className="relative flex flex-col justify-center w-full md:w-[44%] shrink-0 px-6 md:px-14 lg:px-20 pt-20 pb-4 md:py-0 z-10">

          {/* Blue vertical accent */}
          <div
            className="absolute left-8 top-1/2 -translate-y-1/2 w-px"
            style={{ height: '32%', background: 'linear-gradient(to bottom, transparent, #0066ff 30%, #0066ff 70%, transparent)', opacity: 0.6 }}
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={active} custom={direction} variants={textVariants} initial="enter" animate="center" exit="exit">

              {/* Ghost number */}
              <p style={{
                fontFamily: 'var(--font-sans)', fontWeight: 800,
                fontSize: 'clamp(52px, 7vw, 90px)',
                color: 'rgba(0,102,255,0.12)', lineHeight: 1, marginBottom: '4px',
              }}>
                {slide.number}
              </p>

              <p className="text-[#0066ff] text-[10px] tracking-[0.5em] uppercase mb-5" style={{ fontFamily: 'var(--font-sans)' }}>
                {slide.eyebrow}
              </p>

              <h2 className="text-white mb-6" style={{
                fontFamily: 'var(--font-sans)', fontWeight: 800,
                fontSize: 'clamp(28px, 3.5vw, 52px)',
                letterSpacing: '-0.02em', lineHeight: 1.0,
              }}>
                {slide.title}
              </h2>

              <p className="text-white/60 text-sm leading-[1.85] max-w-[280px]" style={{ fontFamily: 'var(--font-sans)' }}>
                {slide.body}
              </p>

              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-lead-modal'))}
                className="mt-10 inline-flex items-center gap-3 group"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#0066ff] group-hover:text-white transition-colors duration-500">
                  Work With Us
                </span>
                <span className="block h-px w-8 bg-[#0066ff] group-hover:w-14 group-hover:bg-white transition-all duration-500" />
              </button>

            </motion.div>
          </AnimatePresence>

          {/* Counter */}
          <div className="absolute bottom-10 left-20 flex items-center gap-3">
            <span className="text-white/50 text-[11px] tracking-widest" style={{ fontFamily: 'var(--font-sans)' }}>
              {String(active + 1).padStart(2, '0')}
            </span>
            <div className="relative w-14 h-px bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#0066ff]"
                animate={{ width: `${((active + 1) / slides.length) * 100}%` }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              />
            </div>
            <span className="text-white/50 text-[11px] tracking-widest" style={{ fontFamily: 'var(--font-sans)' }}>
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* ── RIGHT — blind image ── */}
        <div className="relative flex-1 overflow-hidden min-h-[40vh] md:min-h-0">
          <AnimatePresence mode="wait">
            <motion.div key={active} className="absolute inset-0">

              {/* Main full image with blind strips */}
              <BlindImage
                src={slide.img}
                posStyle={{ top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}
                entryDelay={0}
              />

              {/* Gradient overlays on top of image */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  zIndex: 2,
                  background: 'linear-gradient(to right, #080c14 0%, rgba(8,12,20,0.15) 25%, transparent 60%)',
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  zIndex: 2,
                  background: 'linear-gradient(to top, rgba(8,12,20,0.75) 0%, transparent 40%)',
                }}
              />

            </motion.div>
          </AnimatePresence>

          {/* Ghost title at bottom */}
          <div className="absolute bottom-10 left-8 right-8 z-20 pointer-events-none select-none">
            <AnimatePresence mode="wait">
              <motion.span
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)', fontWeight: 800,
                  fontSize: 'clamp(36px, 6vw, 88px)',
                  color: 'rgba(255,255,255,0.07)',
                  letterSpacing: '-0.04em', lineHeight: 1,
                }}
              >
                {slide.title}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Dot nav */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
            {slides.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: i === active ? 24 : 6,
                  backgroundColor: i === active ? '#0066ff' : 'rgba(255,255,255,0.25)',
                }}
                transition={{ duration: 0.3 }}
                style={{ width: 3, borderRadius: 2 }}
              />
            ))}
          </div>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 section-line" />
    </section>
  )
}

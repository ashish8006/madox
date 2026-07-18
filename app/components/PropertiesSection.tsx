'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'

const STRIPS = 14

const slides = [
  {
    eyebrow: 'Curated Portfolio',
    lines: ['EXCEPTIONAL', 'PROPERTIES'],
    body: "Discover an unparalleled collection of the world's most extraordinary homes, each selected for architectural distinction, prime location, and enduring value.",
    img1: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85',
    img2: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85',
  },
  {
    eyebrow: 'Sky Residences',
    lines: ['PRIVATE', 'PENTHOUSES'],
    body: "Sky-high sanctuaries above the world's great cities — each penthouse defined by seamless design, sweeping vistas, and an uncompromising standard of luxury.",
    img1: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85',
    img2: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85',
  },
  {
    eyebrow: 'Coastal Estates',
    lines: ['WATERFRONT', 'ESTATES'],
    body: "Where the horizon meets your threshold. Oceanfront residences of rare distinction — offering privacy, natural beauty, and immediate access to open water.",
    img1: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=85',
    img2: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85',
  },
  {
    eyebrow: 'Heritage & History',
    lines: ['HISTORIC', 'VILLAS'],
    body: "Centuries of artistry preserved and renewed. Our historic estate portfolio spans the wine regions, hilltop fortresses, and classical villas of Europe and beyond.",
    img1: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=900&q=85',
    img2: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=85',
  },
]

// ── Blind image: slices image into STRIPS horizontal bands,
//    each animating scaleY 0→1 on enter and 1→0 on exit with a stagger
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
        // Each strip shows a horizontal slice of the full image via background-image
        const bgPositionY = STRIPS <= 1 ? '0%' : `${(i / (STRIPS - 1)) * 100}%`

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
              transition: {
                delay: entryDelay + i * 0.042,
                duration: 0.52,
                ease: [0.23, 1, 0.32, 1],
              },
            }}
            exit={{
              scaleY: 0,
              transition: {
                // reverse order on exit — bottom strips close first
                delay: (STRIPS - 1 - i) * 0.028,
                duration: 0.38,
                ease: [0.23, 1, 0.32, 1],
              },
            }}
          />
        )
      })}
    </div>
  )
}

// ── Text transition: clip-path wipe up/down based on scroll direction
const textVariants = {
  enter: (dir: number) => ({
    clipPath: dir >= 0 ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)',
    opacity: 0,
  }),
  center: {
    clipPath: 'inset(0% 0 0% 0)',
    opacity: 1,
    transition: { duration: 0.85, ease: [0.23, 1, 0.32, 1] },
  },
  exit: (dir: number) => ({
    clipPath: dir >= 0 ? 'inset(0 0 100% 0)' : 'inset(100% 0 0 0)',
    opacity: 0,
    transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
  }),
}

export default function PropertiesSection() {
  const sectionRef              = useRef<HTMLElement>(null)
  const [active, setActive]     = useState(0)
  const [direction, setDir]     = useState(1)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(Math.floor(v * slides.length), slides.length - 1)
    if (next !== active) {
      setDir(next > active ? 1 : -1)
      setActive(next)
    }
  })

  const slide = slides[active]

  return (
    <section
      id="properties"
      ref={sectionRef}
      style={{ height: `${slides.length * 100}vh` }}
      className="relative"
    >
      {/* Sticky viewport */}
      <div
        className="sticky top-0 h-screen overflow-hidden flex"
        style={{ backgroundColor: '#0d0f0e' }}
      >

        {/* ══ LEFT — text panel ═══════════════════════════ */}
        <div className="relative flex flex-col justify-center w-[40%] shrink-0 px-16 md:px-20">

          {/* Vertical gold accent */}
          <div
            className="absolute left-10 top-1/2 -translate-y-1/2 w-px"
            style={{
              height: '36%',
              background: 'linear-gradient(to bottom, transparent, #c9a96e 25%, #c9a96e 75%, transparent)',
              opacity: 0.5,
            }}
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <p
                className="text-[#c9a96e] text-[10px] tracking-[0.5em] uppercase mb-5"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {slide.eyebrow}
              </p>

              <h2
                className="text-white leading-[0.86] mb-8"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontStyle: 'normal',
                  fontWeight: 800,
                  fontSize: 'clamp(52px, 7.5vw, 116px)',
                  letterSpacing: '-0.01em',
                }}
              >
                {slide.lines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>

              <p
                className="text-white/60 text-sm leading-[1.85] max-w-[260px]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {slide.body}
              </p>

              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-4 group w-fit"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] group-hover:text-white transition-colors duration-500">
                  View Collection
                </span>
                <span className="block h-px w-8 bg-[#c9a96e] group-hover:w-14 group-hover:bg-white transition-all duration-500" />
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Slide counter */}
          <div className="absolute bottom-12 left-20 flex items-center gap-3" style={{ fontFamily: 'var(--font-sans)' }}>
            <span className="text-white/60 text-[11px] tracking-widest">
              {String(active + 1).padStart(2, '0')}
            </span>
            <div className="relative w-16 h-px bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#c9a96e]"
                animate={{ width: `${((active + 1) / slides.length) * 100}%` }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              />
            </div>
            <span className="text-white/60 text-[11px] tracking-widest">
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* ══ RIGHT — overlapping blind images ════════════ */}
        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={active} className="absolute inset-0">

              {/* img2 — large, right-anchored, behind */}
              <BlindImage
                src={slide.img2}
                posStyle={{
                  right: 0,
                  top: '5%',
                  width: '70%',
                  height: '82%',
                  zIndex: 1,
                }}
                entryDelay={0}
              />

              {/* img1 — smaller, left-of-panel, in front */}
              <BlindImage
                src={slide.img1}
                posStyle={{
                  left: '3%',
                  top: '20%',
                  width: '48%',
                  height: '60%',
                  zIndex: 2,
                }}
                entryDelay={0.08}
              />

            </motion.div>
          </AnimatePresence>

          {/* Right-edge fade */}
          <div
            className="absolute inset-y-0 right-0 w-10 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, transparent, #0d0f0e)' }}
          />
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 section-line" />
    </section>
  )
}

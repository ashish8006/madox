'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pressNames = [
  'The New York Times',
  'Forbes',
  'Architectural Digest',
  'The Wall Street Journal',
  'Financial Times',
  'Vogue Living',
  'The New York Times',
  'Forbes',
  'Architectural Digest',
  'The Wall Street Journal',
  'Financial Times',
  'Vogue Living',
]

export default function LogoStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-black relative overflow-hidden">
      <div className="section-line" />

      <div className="py-16 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-center gap-10"
        >
          <p
            className="text-white/30 text-[11px] tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
          >
            As featured in
          </p>

          <div className="w-full overflow-hidden">
            <motion.div
              className="flex gap-16 items-center"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ width: 'max-content' }}
            >
              {pressNames.map((name, i) => (
                <span
                  key={i}
                  className="shrink-0 text-white/25 text-sm font-light whitespace-nowrap"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    letterSpacing: '0.2em',
                  }}
                >
                  {name}
                  <span className="ml-16 text-white/10">·</span>
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="section-line" />
    </section>
  )
}

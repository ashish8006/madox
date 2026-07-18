'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const lines = [
  "Your life's changing. Don't just find a",
  "place — find what's next. We help you",
  'move forward with clarity, confidence,',
  'and the right agent by your side.',
]

export default function WhySection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section
      ref={ref}
      className="relative py-36 md:py-48 overflow-hidden"
      style={{ backgroundColor: '#0a0908' }}
    >
      {/* Subtle gold grid */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row md:items-start gap-16 md:gap-32">

          {/* Left — heading */}
          <div className="md:w-2/5 shrink-0">
            {/* Eyebrow line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              style={{ originX: 0 }}
              className="w-10 h-px bg-[#c9a96e] mb-8"
            />

            {/* "Why" — small sans label */}
            <motion.p
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="text-[11px] tracking-[0.4em] uppercase text-[#c9a96e] mb-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Why
            </motion.p>

            {/* "FIND" — large serif italic */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
                transition={{ duration: 1.1, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
                className="text-white leading-[0.88]"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  fontSize: 'clamp(72px, 10vw, 140px)',
                }}
              >
                MADOX<span style={{ color: '#0066ff' }}>.</span>
              </motion.h2>
            </div>
          </div>

          {/* Right — body text, line by line reveal */}
          <div className="md:w-3/5 flex flex-col justify-end pt-2 md:pt-16">
            <div className="flex flex-col gap-0">
              {lines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.p
                    initial={{ clipPath: 'inset(0 0 100% 0)' }}
                    animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
                    transition={{
                      duration: 1.0,
                      delay: 0.45 + i * 0.12,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="text-white/70 leading-[1.35]"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 300,
                      fontSize: 'clamp(22px, 2.6vw, 38px)',
                    }}
                  >
                    {line}
                  </motion.p>
                </div>
              ))}
            </div>

            {/* Subtle CTA link */}
            <motion.a
              href="#properties"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-12 inline-flex items-center gap-4 group w-fit"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#c9a96e] group-hover:text-white transition-colors duration-500">
                Explore Properties
              </span>
              <motion.span
                className="block h-px bg-[#c9a96e] group-hover:bg-white transition-colors duration-500"
                initial={{ width: 32 }}
                whileHover={{ width: 56 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                style={{ width: 32 }}
              />
            </motion.a>
          </div>

        </div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-line" />
    </section>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const BG = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85'

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-48 noise" style={{ minHeight: '60vh' }}>
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url('${BG}')`,
          y: bgY,
        }}
      />

      <div
        className="absolute inset-0 z-10"
        style={{ background: 'rgba(10,9,8,0.82)' }}
      />

      <div className="relative z-20 flex flex-col items-center text-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-10"
        >
          <span className="text-[#c9a96e] text-2xl font-thin leading-none" style={{ letterSpacing: '-0.02em' }}>+</span>
        </motion.div>

        <motion.h2
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="text-white mb-6 leading-[0.95]"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: 'clamp(48px, 7vw, 110px)',
          }}
        >
          Ready to Begin?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="text-white/60 text-sm leading-relaxed max-w-md mb-14"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Let us begin a private conversation about your ambitions. Our advisors are available to guide you toward your next extraordinary home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#contact"
            className="text-[11px] tracking-[0.2em] uppercase px-10 py-4 transition-opacity duration-500 hover:opacity-80"
            style={{
              fontFamily: 'var(--font-sans)',
              backgroundColor: '#c9a96e',
              color: '#0a0908',
            }}
          >
            Schedule Consultation
          </a>
          <a
            href="tel:+18005559999"
            className="text-[11px] tracking-[0.2em] uppercase px-10 py-4 border border-white/30 text-white hover:border-white/60 transition-colors duration-500"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Call Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

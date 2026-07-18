'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const stats = [
  { value: '$4.2B', label: 'In Transactions' },
  { value: '1,200+', label: 'Properties Sold' },
  { value: '32', label: 'Global Markets' },
  { value: '18 yrs', label: 'Of Excellence' },
]

const MAIN_IMAGE = 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80'
const ACCENT_IMAGE = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80'

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const contentInView = useInView(contentRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const mainY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section ref={sectionRef} id="about" className="relative py-28 overflow-hidden" style={{ backgroundColor: '#0a0908' }}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-16 items-start">

          <div className="w-full md:w-1/2 relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <motion.img
                src={MAIN_IMAGE}
                alt="Luxury property interior"
                style={{ y: mainY }}
                className="w-full h-full object-cover scale-110"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(10,9,8,0.4) 100%)' }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="absolute -bottom-6 -right-6 md:-right-10 w-48 overflow-hidden shadow-2xl"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={ACCENT_IMAGE}
                alt="Accent property"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="absolute top-6 left-6 p-4"
              style={{ backgroundColor: '#c9a96e', width: 100 }}
            >
              <p
                className="text-[9px] tracking-[0.15em] uppercase text-black leading-snug"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
              >
                No.1 Luxury<br />Agency 2024
              </p>
            </motion.div>
          </div>

          <div ref={contentRef} className="w-full md:w-1/2 flex flex-col justify-center md:pt-12">
            <motion.p
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={contentInView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              className="text-[11px] tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-sans)', color: '#c9a96e' }}
            >
              Our Story
            </motion.p>

            <motion.h2
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={contentInView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 1.0, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="text-white mb-2 leading-[0.95]"
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(40px, 5vw, 72px)',
              }}
            >
              Redefining
            </motion.h2>

            <motion.h2
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={contentInView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 1.0, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="text-white mb-10 leading-[0.95]"
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(40px, 5vw, 72px)',
              }}
            >
              Luxury Living
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="text-white/50 text-sm leading-[1.9] mb-12"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              For nearly two decades, LuxeEstate has been the trusted advisor to the world's most discerning individuals, families, and institutions. We operate at the intersection of art, architecture, and ambition — curating an unparalleled portfolio of extraordinary homes across the globe's most coveted addresses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-2 gap-8 mb-12"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-white leading-none mb-1"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: 'clamp(28px, 3vw, 44px)',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-white/30 text-xs tracking-widest uppercase"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={contentInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="group flex items-center gap-3 text-sm text-white/60 hover:text-[#c9a96e] transition-colors duration-500 w-fit"
              style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.1em' }}
            >
              Meet Our Advisors
              <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  )
}

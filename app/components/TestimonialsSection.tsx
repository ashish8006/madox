'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: 'MADOX didn\'t just redesign our website — they rebuilt our entire digital presence. Revenue from organic channels tripled within six months.',
    author: 'Sarah Chen',
    role: 'CEO, NovaTech Solutions',
    location: 'San Francisco & Singapore',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=70',
  },
  {
    quote: 'The strategy they brought to our rebrand was unlike anything we had seen. They understood our market better than agencies we\'d worked with for years.',
    author: 'Rafael Montoya',
    role: 'Founder, Montoya Ventures',
    location: 'São Paulo & Miami',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=70',
  },
  {
    quote: 'From the first discovery call to launch day, the MADOX team operated with a level of precision and creative intelligence that set a new benchmark for us.',
    author: 'Isabelle Marchetti',
    role: 'CMO, Luminos Digital',
    location: 'Milan & London',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=70',
  },
  {
    quote: 'Our app went from 10k to 280k monthly active users in under a year. MADOX\'s performance marketing and UX work was the decisive factor.',
    author: 'Edward Blackwood',
    role: 'Product Director, Archway Labs',
    location: 'Edinburgh & New York',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=70',
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  const navigate = (next: number) => {
    setDirection(next > active ? 1 : -1)
    setActive(next)
  }

  const prev = () => navigate(active === 0 ? testimonials.length - 1 : active - 1)
  const next = () => navigate(active === testimonials.length - 1 ? 0 : active + 1)

  return (
    <section className="relative py-32 overflow-hidden" style={{ backgroundColor: '#080808' }}>
      <div className="max-w-[900px] mx-auto px-8 text-center">

        <div className="relative min-h-[320px] flex items-center justify-center mb-12">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60, clipPath: 'inset(0 100% 0 0)' }}
              animate={{ opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0)' }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex gap-3 mb-10">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: '#0066ff' }}
                  />
                ))}
              </div>

              <blockquote
                className="text-white leading-[1.4] mb-10"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  fontSize: 'clamp(22px, 3.5vw, 48px)',
                }}
              >
                "{testimonials[active].quote}"
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="section-line mb-8 mx-auto w-24" />

        <AnimatePresence mode="wait">
          <motion.div
            key={`author-${active}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col items-center gap-1"
          >
            <p
              className="text-white/80 text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {testimonials[active].author}
            </p>
            <p
              className="text-white/60 text-xs tracking-widest"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {testimonials[active].role} · {testimonials[active].location}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-8 mt-14">
          <button
            onClick={prev}
            className="text-white/60 hover:text-[#0066ff] transition-colors duration-400 text-xl px-4"
            aria-label="Previous"
          >
            ←
          </button>

          <div className="flex gap-3">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => navigate(i)}
                className="relative w-10 h-10 rounded-full overflow-hidden transition-all duration-500"
                style={{
                  outline: i === active ? '1.5px solid #0066ff' : '1.5px solid transparent',
                  outlineOffset: '2px',
                  opacity: i === active ? 1 : 0.35,
                }}
                aria-label={`Testimonial ${i + 1}`}
              >
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            className="text-white/60 hover:text-[#0066ff] transition-colors duration-400 text-xl px-4"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

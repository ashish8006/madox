'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const BG_IMAGE = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85'

const fields = [
  { id: 'name',    label: 'Full Name',    type: 'text',  placeholder: 'John Smith'          },
  { id: 'email',   label: 'Email',        type: 'email', placeholder: 'john@example.com'    },
  { id: 'phone',   label: 'Phone',        type: 'tel',   placeholder: '+1 (555) 000-0000'   },
  { id: 'comment', label: 'Message',      type: 'text',  placeholder: 'How can we help you?', textarea: true },
]

function CallbackForm({ mounted }: { mounted: boolean }) {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', comment: '' })
  const [submitted, setSubmit] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmit(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={mounted ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.0, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
      className="w-full max-w-sm flex flex-col"
      style={{ maxHeight: 'calc(100vh - 5rem)', marginTop: 'auto' }}
    >
      {/* Card */}
      <div
        className="relative px-8 pt-10 pb-8 md:px-10 md:pt-12 md:pb-10 overflow-y-auto"
        style={{
          background: 'rgba(10,9,8,0.72)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(201,169,110,0.35)',
          borderLeft: '1px solid rgba(255,255,255,0.06)',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          scrollbarWidth: 'none',
        }}
      >
        {/* Top gold accent line */}
        <div
          className="absolute top-0 left-8 right-8 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #c9a96e 40%, #c9a96e 60%, transparent)' }}
        />

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-10 text-center"
          >
            {/* Gold check circle */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
              style={{ border: '1px solid #c9a96e' }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#c9a96e" strokeWidth="1.5">
                <path d="M4 11L9 16L18 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p
              className="text-white leading-snug mb-2"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '22px' }}
            >
              Thank you.
            </p>
            <p className="text-white/60 text-xs tracking-wide" style={{ fontFamily: 'var(--font-sans)' }}>
              An advisor will reach out within 24 hours.
            </p>
          </motion.div>
        ) : (
          <>
            {/* Heading */}
            <div className="mt-14 mb-8">
              <p
                className="text-[#c9a96e] text-[9px] tracking-[0.45em] uppercase mb-3"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Expert Consultation
              </p>
              <h3
                className="text-white leading-[1.05]"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  fontSize: 'clamp(20px, 2vw, 26px)',
                }}
              >
                Get a Call Back<br />
                <span style={{ color: '#c9a96e' }}>from our Experts</span>
              </h3>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {fields.map((f) => (
                <div key={f.id} className="flex flex-col gap-1.5">
                  <label
                    htmlFor={f.id}
                    className="text-[9px] tracking-[0.35em] uppercase text-white/60"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {f.label}
                  </label>

                  {f.textarea ? (
                    <textarea
                      id={f.id}
                      rows={3}
                      required
                      value={form[f.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      placeholder={f.placeholder}
                      className="bg-transparent text-white text-sm resize-none outline-none transition-colors duration-400"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        borderBottom: '1px solid rgba(255,255,255,0.12)',
                        paddingBottom: '8px',
                      }}
                      onFocus={(e) => (e.target.style.borderBottomColor = '#c9a96e')}
                      onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.12)')}
                    />
                  ) : (
                    <input
                      id={f.id}
                      type={f.type}
                      required
                      value={form[f.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      placeholder={f.placeholder}
                      className="bg-transparent text-white text-sm outline-none transition-colors duration-400"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        borderBottom: '1px solid rgba(255,255,255,0.12)',
                        paddingBottom: '8px',
                      }}
                      onFocus={(e) => (e.target.style.borderBottomColor = '#c9a96e')}
                      onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.12)')}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="mt-2 w-full py-3.5 text-black text-[11px] tracking-[0.3em] uppercase font-medium transition-opacity duration-300 hover:opacity-85"
                style={{ fontFamily: 'var(--font-sans)', backgroundColor: '#c9a96e' }}
              >
                Request Call Back
              </button>
            </form>
          </>
        )}
      </div>
    </motion.div>
  )
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mouse, setMouse]     = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    setMounted(true)
    const handleMouse = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 0.2,
        y: (e.clientY / window.innerHeight - 0.5) * 0.2,
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0])
  const heroY       = useTransform(scrollYProgress, [0, 0.22], ['0%', '-4%'])
  const bigOpacity  = useTransform(scrollYProgress, [0.22, 0.44, 0.78, 0.92], [0, 1, 1, 0])
  const bigScale    = useTransform(scrollYProgress, [0.22, 0.50], [0.95, 1])
  const bigY        = useTransform(scrollYProgress, [0.44, 0.92], ['0%', '-18%'])
  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])

  return (
    <section ref={sectionRef} style={{ height: '400vh' }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── Background image with mouse parallax ── */}
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${BG_IMAGE}')`,
            x: mounted ? mouse.x * 30 : 0,
            y: mounted ? mouse.y * 30 : 0,
            scale: 1.08,
          }}
          transition={{ type: 'tween', duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        />

        {/* ── Dark gradient overlay ── */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(10,9,8,0.95) 0%, rgba(10,9,8,0.55) 45%, rgba(10,9,8,0.25) 100%)',
          }}
        />

        {/* ── Phase 1: Hero content (fades on scroll) ── */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-0 z-20 flex items-end pt-16"
        >
          <div className="w-full max-w-[1400px] mx-auto px-10 md:px-16 pt-24 pb-16 md:pt-28 md:pb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">

            {/* LEFT — editorial headline */}
            <div className="flex flex-col">
              <motion.p
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={mounted ? { clipPath: 'inset(0 0 0% 0)' } : {}}
                transition={{ duration: 1.0, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="text-[11px] tracking-[0.35em] uppercase mb-4"
                style={{ fontFamily: 'var(--font-sans)', color: '#c9a96e' }}
              >
                Madox Communications · Est. 2006
              </motion.p>

              <motion.h1
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={mounted ? { clipPath: 'inset(0 0 0% 0)' } : {}}
                transition={{ duration: 1.1, delay: 0.55, ease: [0.23, 1, 0.32, 1] }}
                className="text-white leading-[0.9] mb-1"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  fontSize: 'clamp(56px, 9vw, 80px)',
                }}
              >
                Make Brands
              </motion.h1>

              <motion.h1
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={mounted ? { clipPath: 'inset(0 0 0% 0)' } : {}}
                transition={{ duration: 1.1, delay: 0.75, ease: [0.23, 1, 0.32, 1] }}
                className="leading-[0.9] mb-8"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  fontSize: 'clamp(56px, 9vw, 80px)',
                  color: '#c9a96e',
                }}
              >
                Win.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
                className="flex items-center gap-6"
              >
                <p
                  className="text-white/60 text-sm leading-relaxed max-w-lg hidden lg:block"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  We operate at the intersection of creativity and <strong className="text-white/80 font-bold">performance</strong> — building brands that dominate their markets with data-backed precision.
                </p>
              </motion.div>
            </div>

            {/* RIGHT — callback form */}
            <CallbackForm mounted={mounted} />
          </div>
        </motion.div>

        {/* ── Phase 2: Large brand text — single fade in, no double fade ── */}
        <motion.div
          style={{ opacity: bigOpacity, scale: bigScale, y: bigY }}
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none select-none"
        >
          <div
            className="text-center uppercase"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: 'clamp(60px, 14vw, 200px)',
              lineHeight: 0.82,
              letterSpacing: '-0.03em',
            }}
          >
            <div>
              <span style={{ color: '#ffffff' }}>MADOX</span><span style={{ color: '#0066ff' }}>.</span>
            </div>
          </div>
        </motion.div>

        {/* ── Scroll hint ── */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2"
          style={{ opacity: hintOpacity }}
        >
          <span
            className="text-white/60 text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Scroll
          </span>
          <motion.div
            className="w-px bg-white/60"
            animate={{ height: [16, 40, 16], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: [0.23, 1, 0.32, 1] }}
          />
        </motion.div>

      </div>
    </section>
  )
}

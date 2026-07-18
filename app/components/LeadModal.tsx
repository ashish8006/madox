'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonial = {
  quote: 'MADOX completely transformed our digital presence. Within 4 months we saw a 3.2× increase in qualified leads and our brand finally felt world-class.',
  author: 'Sarah Chen',
  role: 'CEO, NovaTech Solutions',
  avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=70',
}

const clients = ['AMERICAN EXPRESS', 'DELOITTE', 'SAMSUNG', 'STRIPE', 'NOTION']

export default function LeadModal() {
  const [open, setOpen]           = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm]           = useState({ name: '', email: '', phone: '', project: '' })
  const [scrollCount, setScrollCount] = useState(0)

  useEffect(() => {
    let fired = false

    const fire = () => {
      if (fired) return
      fired = true
      setOpen(true)
    }

    // Trigger after 5 seconds
    const timer = setTimeout(fire, 5000)

    // OR after 5 scroll events
    const onScroll = () => {
      setScrollCount(prev => {
        const next = prev + 1
        if (next >= 5) fire()
        return next
      })
    }

    const onManualOpen = () => setOpen(true)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('open-lead-modal', onManualOpen)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('open-lead-modal', onManualOpen)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9990] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-4xl flex overflow-hidden rounded-2xl shadow-2xl"
            style={{ maxHeight: '92vh', overflowY: 'auto' }}
          >
            {/* ── LEFT — dark social proof panel ── */}
            <div
              className="hidden md:flex flex-col justify-between w-[42%] shrink-0 p-10 overflow-hidden relative"
              style={{
                background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1a3a 60%, #0a0f1e 100%)',
              }}
            >
              {/* Blue glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 30%, rgba(0,102,255,0.18) 0%, transparent 70%)' }}
              />

              <div className="relative z-10">
                {/* Heading */}
                <p className="text-white/50 text-[11px] tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'var(--font-sans)' }}>
                  Leaving Already?
                </p>
                <h2 className="text-white leading-[1.15] mb-8" style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'clamp(20px, 2.2vw, 28px)' }}>
                  Hear from brands that chose{' '}
                  <span style={{ color: '#0066ff' }}>MADOX</span>
                </h2>

                {/* Testimonial card */}
                <div
                  className="rounded-xl p-6"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {/* Quote icon */}
                  <svg width="28" height="20" viewBox="0 0 28 20" fill="#0066ff" className="mb-4 opacity-80">
                    <path d="M0 20V12C0 5.373 4.373 1 11 0l1.5 2C9.167 3 7.167 5.333 6.5 8H11v12H0zm16 0V12c0-6.627 4.373-11 11-12l1.5 2c-3.333 1-5.333 3.333-6 6H27v12H16z"/>
                  </svg>
                  <p className="text-white/80 text-sm leading-[1.7] mb-5" style={{ fontFamily: 'var(--font-sans)' }}>
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <img src={testimonial.avatar} alt={testimonial.author} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <p className="text-white text-sm font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>{testimonial.author}</p>
                      <p className="text-white/50 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trusted by */}
              <div className="relative z-10 mt-8">
                <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                  Trusted by global brands
                </p>
                <div className="flex flex-wrap gap-3">
                  {clients.map(c => (
                    <span
                      key={c}
                      className="text-white/40 text-[10px] tracking-widest border border-white/10 px-2.5 py-1 rounded-md"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT — white form panel ── */}
            <div className="flex-1 bg-white flex flex-col overflow-y-auto">
              {/* Header */}
              <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                <p className="text-gray-800 text-base leading-snug" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Share Your Requirements
                </p>
                <p className="text-gray-500 text-sm mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                  Help our experts understand your objectives and create your customised plan.
                </p>
              </div>

              {submitted ? (
                <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: '#0066ff' }}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="2.2">
                      <path d="M5 14L11 20L23 8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-gray-900 text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-sans)' }}>We'll be in touch!</h3>
                  <p className="text-gray-500 text-sm max-w-xs" style={{ fontFamily: 'var(--font-sans)' }}>
                    Expect a response within 2 hours. Our strategists are already reviewing your request.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col px-8 py-6 gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1">
                      <label className="text-gray-500 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="text-gray-900 text-sm outline-none pb-2 transition-colors"
                        style={{ fontFamily: 'var(--font-sans)', borderBottom: '1.5px solid #e5e7eb' }}
                        onFocus={e => (e.target.style.borderBottomColor = '#0066ff')}
                        onBlur={e => (e.target.style.borderBottomColor = '#e5e7eb')}
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                      <label className="text-gray-500 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Company Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="text-gray-900 text-sm outline-none pb-2 transition-colors"
                        style={{ fontFamily: 'var(--font-sans)', borderBottom: '1.5px solid #e5e7eb' }}
                        onFocus={e => (e.target.style.borderBottomColor = '#0066ff')}
                        onBlur={e => (e.target.style.borderBottomColor = '#e5e7eb')}
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1">
                      <label className="text-gray-500 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Contact Number *</label>
                      <input
                        required
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="text-gray-900 text-sm outline-none pb-2 transition-colors"
                        style={{ fontFamily: 'var(--font-sans)', borderBottom: '1.5px solid #e5e7eb' }}
                        onFocus={e => (e.target.style.borderBottomColor = '#0066ff')}
                        onBlur={e => (e.target.style.borderBottomColor = '#e5e7eb')}
                      />
                    </div>
                  </div>

                  {/* Project */}
                  <div className="flex flex-col gap-1">
                    <label className="text-gray-500 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Describe your project</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your goals and what you're looking to achieve..."
                      value={form.project}
                      onChange={e => setForm({ ...form, project: e.target.value })}
                      className="text-gray-900 text-sm outline-none resize-none pt-1 transition-colors"
                      style={{ fontFamily: 'var(--font-sans)', borderBottom: '1.5px solid #e5e7eb' }}
                      onFocus={e => (e.target.style.borderBottomColor = '#0066ff')}
                      onBlur={e => (e.target.style.borderBottomColor = '#e5e7eb')}
                    />
                  </div>

                  {/* Trust badge */}
                  <div
                    className="flex items-center gap-3 rounded-lg px-4 py-3"
                    style={{ backgroundColor: '#fffbeb', border: '1px solid #fde68a' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 1L11.39 6.26L17 7.27L13 11.14L13.9 17L9 14.27L4.1 17L5 11.14L1 7.27L6.61 6.26L9 1Z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-gray-700 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
                      Fast 2-hour response, fully <strong>NDA-protected.</strong>
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-white text-sm font-semibold tracking-wide transition-opacity hover:opacity-90"
                    style={{ fontFamily: 'var(--font-sans)', backgroundColor: '#0066ff' }}
                  >
                    Get a Free Consultation →
                  </button>
                </form>
              )}
            </div>

            {/* ── Close button ── */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 1L13 13M13 1L1 13" strokeLinecap="round"/>
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

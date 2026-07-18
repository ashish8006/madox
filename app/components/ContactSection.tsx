'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const contactDetails = [
  {
    label: 'Headquarters',
    value: '14 Finsbury Square, London, EC2A 1BR',
  },
  {
    label: 'Phone',
    value: '+44 20 7946 0321',
  },
  {
    label: 'Email',
    value: 'hello@madox.io',
  },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-28" style={{ backgroundColor: '#0a0908' }}>
      <div className="section-line mb-0" />

      <div className="max-w-[1400px] mx-auto px-8 pt-20" ref={ref}>
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">

          <div className="w-full md:w-1/2">
            <motion.p
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              className="text-[11px] tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-sans)', color: '#0066ff' }}
            >
              Get in Touch
            </motion.p>

            <motion.h2
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 1.0, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="text-white mb-8 leading-[0.95]"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: 'clamp(36px, 4vw, 64px)',
              }}
            >
              Let's Build Something Great
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="text-white/60 text-sm leading-[1.9] mb-14"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Whether you're launching a product, scaling a brand, or rethinking your digital strategy — we'd love to hear about it. Drop us a message and we'll get back within 24 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col gap-8"
            >
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <p
                    className="text-white/60 text-[10px] tracking-[0.3em] uppercase mb-1.5"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {detail.label}
                  </p>
                  <p
                    className="text-white/70 text-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {detail.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col items-start justify-center h-full py-16"
              >
                <p
                  className="text-white mb-4 leading-none"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 300,
                    fontSize: 'clamp(36px, 4vw, 60px)',
                  }}
                >
                  Thank you.
                </p>
                <p
                  className="text-white/60 text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  We will be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-10"
              >
                <div>
                  <label
                    className="block text-white/60 text-[10px] tracking-[0.3em] uppercase mb-3"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent text-white text-sm pb-3 border-b border-white/10 focus:border-[#0066ff] outline-none transition-colors duration-500 placeholder:text-white/60"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label
                    className="block text-white/60 text-[10px] tracking-[0.3em] uppercase mb-3"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent text-white text-sm pb-3 border-b border-white/10 focus:border-[#0066ff] outline-none transition-colors duration-500 placeholder:text-white/60"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    className="block text-white/60 text-[10px] tracking-[0.3em] uppercase mb-3"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent text-white text-sm pb-3 border-b border-white/10 focus:border-[#0066ff] outline-none transition-colors duration-500 resize-none placeholder:text-white/60"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-[11px] tracking-[0.2em] uppercase transition-opacity duration-500 hover:opacity-80"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    backgroundColor: '#0066ff',
                    color: '#0a0908',
                  }}
                >
                  Send Inquiry
                </button>
              </motion.form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

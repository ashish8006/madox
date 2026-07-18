'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Search', href: '#properties' },
  { label: 'Properties', href: '#properties' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/6 transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}
      >
        <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
          <a href="#" className="shrink-0 flex items-baseline">
            <span
              className="text-black text-xl leading-none"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 800 }}
            >
              MADOX
            </span>
            <span style={{ color: '#0066ff', fontWeight: 800, fontSize: '1.25rem', lineHeight: 1 }}>.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-[13px] tracking-widest uppercase text-black/60 hover:text-black transition-colors duration-300"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-black group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="text-[11px] tracking-[0.2em] uppercase text-black border border-black px-5 py-2.5 hover:bg-black hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Private Inquiries
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="block w-6 h-px bg-black"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-px bg-black"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="block w-6 h-px bg-black"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="text-4xl text-black hover:text-[#c9a96e] transition-colors"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[11px] tracking-[0.2em] uppercase text-black border border-black px-8 py-3 mt-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Private Inquiries
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

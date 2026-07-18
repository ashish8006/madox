'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Work', href: '#properties', hasDropdown: true, dropdownType: 'work' },
  { label: 'Services', href: '#services', hasDropdown: true, dropdownType: 'services' },
  { label: 'Industries', href: '#', hasDropdown: true, dropdownType: 'industries' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#insights' },
]

const portfolioItems = [
  {
    name: 'VVIP Group',
    description: 'A premium real-estate brand experience built for India\'s elite residential market.',
    image: '/images/portfolio/vvipgrop.png',
    url: 'https://www.vvipgroup.in',
  },
  {
    name: 'The Pinnacle',
    description: 'High-impact digital presence for a luxury hospitality and lifestyle destination.',
    image: '/images/portfolio/thepinacle.png',
    url: 'https://www.thepinnacle.live/',
  },
  {
    name: 'Liamtra',
    description: 'End-to-end brand identity and web platform for a global travel tech company.',
    image: '/images/portfolio/liamtra.png',
    url: 'https://liamtra.com/',
  },
  {
    name: 'Germanfy',
    description: 'Conversion-optimised digital strategy and branding for an ed-tech startup.',
    image: '/images/portfolio/germanfy.png',
    url: 'https://www.germanfy.com/',
  },
]

const serviceColumns = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0066ff" strokeWidth="1.5"><rect x="2" y="3" width="16" height="12" rx="2"/><path d="M7 17h6M10 15v2"/></svg>
    ),
    title: 'Product & Engineering',
    items: ['Product Design', 'Application Development', 'Software Development', 'QA and Testing', 'DevOps', 'Product Management'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0066ff" strokeWidth="1.5"><circle cx="10" cy="10" r="7"/><path d="M10 3v7l4 2"/></svg>
    ),
    title: 'Digital Marketing',
    items: ['Brand Identity & Logo Design', 'Google Search & Performance Max', 'Meta & Instagram Advertising', 'OOH & Outdoor Campaigns', 'Social Media Management', 'Creative & Print Advertising', 'Landing Page Development', 'YouTube & Video Campaigns'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0066ff" strokeWidth="1.5"><path d="M3 10c0-4 3-7 7-7s7 3 7 7"/><path d="M3 10c0 4 3 7 7 7s7-3 7-7"/><path d="M3 10h14M10 3c-2 2-3 4-3 7s1 5 3 7M10 3c2 2 3 4 3 7s-1 5-3 7"/></svg>
    ),
    title: 'Digital Transformation',
    items: ['Legacy Application Modernization', 'Blockchain', 'Cloud', 'Cybersecurity', 'IoT', 'AR/VR'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0066ff" strokeWidth="1.5"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h6a2 2 0 012 2v4M9 3v14m0 0h6a2 2 0 002-2V9M9 17H5a2 2 0 01-2-2V9m0 0h14"/></svg>
    ),
    title: 'Consulting Services',
    items: ['IT Consulting', 'Software Consulting', 'FinTech Consulting', 'Mobile Consulting', 'Big Data', 'Analytics & Intelligence'],
  },
]

const industryColumns = [
  [
    'Healthcare', 'Wearables', 'Fitness', 'On-Demand', 'ECommerce',
    'Construction', 'Politics', 'EMobility', 'Logistics',
  ],
  [
    'Finance', 'Entertainment', 'Education', 'Events', 'Manufacturing',
    'Energy', 'OTT', 'Food Delivery', 'Supply Chain',
  ],
  [
    'Restaurant', 'Travel', 'Real Estate', 'Magazine & Newspaper', 'Social Media',
    'Aviation', 'CSR', 'Retail', 'Telecom',
  ],
]

function IndustriesDropdown({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
      className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-50"
      style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-0">
          {industryColumns.map((col, ci) => (
            <div
              key={ci}
              className={ci < 2 ? 'pr-10 border-r border-gray-100 mr-10' : ''}
            >
              {col.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={onClose}
                  className="flex items-center justify-between py-3 text-sm text-gray-700 hover:text-[#0066ff] border-b border-gray-100 group transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff] opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span>{item}</span>
                  </div>
                  <span className="text-gray-300 group-hover:text-[#0066ff] transition-colors text-xs">+</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-gray-100 px-8 py-4 flex items-center justify-between" style={{ backgroundColor: '#fffbeb' }}>
        <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--font-sans)' }}>
          <strong>Didn't find what you're looking for?</strong> Let us know your needs, and we'll tailor a solution just for you.
        </p>
        <a
          href="#contact"
          onClick={onClose}
          className="shrink-0 ml-8 px-6 py-3 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          style={{ fontFamily: 'var(--font-sans)', backgroundColor: '#0066ff' }}
        >
          Schedule Free Consultation
        </a>
      </div>
    </motion.div>
  )
}

function WorkDropdown({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
      className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-50"
      style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Portfolio items — 2 columns of items */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            {portfolioItems.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
              >
                {/* Thumbnail */}
                <div className="shrink-0 w-20 h-16 rounded-lg overflow-hidden border border-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Text */}
                <div className="min-w-0">
                  <p className="text-gray-900 font-bold text-sm mb-1 group-hover:text-[#0066ff] transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Right — Featured / CTA */}
          <div className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#0066ff] mb-3 font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>
                Featured Work
              </p>
              <h3 className="text-gray-900 font-bold text-lg leading-snug mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                200+ brands trust MADOX to build what matters.
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                From FMCG giants to ambitious startups — see how we've driven measurable growth across industries.
              </p>
            </div>
            <a
              href="#properties"
              onClick={onClose}
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#0066ff] hover:underline"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              View All Case Studies →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-gray-100 px-8 py-4 flex items-center justify-between" style={{ backgroundColor: '#fffbeb' }}>
        <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--font-sans)' }}>
          <strong>Want results like these?</strong> Let's talk about your project and build something you'll be proud of.
        </p>
        <a
          href="#contact"
          onClick={onClose}
          className="shrink-0 ml-8 px-6 py-3 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          style={{ fontFamily: 'var(--font-sans)', backgroundColor: '#0066ff' }}
        >
          Start a Project
        </a>
      </div>
    </motion.div>
  )
}

function ServiceDropdown({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
      className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-50"
      style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        {/* Columns */}
        <div className="grid grid-cols-4 gap-8 mb-0">
          {serviceColumns.map((col) => (
            <div key={col.title}>
              {/* Category header */}
              <div className="flex items-center gap-2 mb-5">
                {col.icon}
                <span
                  className="text-[11px] tracking-[0.15em] uppercase font-bold text-gray-900"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {col.title}
                </span>
              </div>
              {/* Items */}
              <ul className="flex flex-col gap-0">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      onClick={onClose}
                      className="flex items-center justify-between py-2.5 text-sm text-gray-600 hover:text-[#0066ff] border-b border-gray-100 group transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      <span>{item}</span>
                      <span className="text-gray-300 group-hover:text-[#0066ff] transition-colors text-xs">+</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA bar */}
      <div
        className="border-t border-gray-100 px-8 py-4 flex items-center justify-between"
        style={{ backgroundColor: '#fffbeb' }}
      >
        <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--font-sans)' }}>
          <strong>Didn't find what you're looking for?</strong> Let us know your needs, and we'll tailor a solution just for you.
        </p>
        <a
          href="#contact"
          onClick={onClose}
          className="shrink-0 ml-8 px-6 py-3 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          style={{ fontFamily: 'var(--font-sans)', backgroundColor: '#0066ff' }}
        >
          Schedule Free Consultation
        </a>
      </div>
    </motion.div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [scrolled, setScrolled]       = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const open  = (type: string) => setActiveDropdown(type)
  const close  = () => setActiveDropdown(null)

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/6 transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}
      >
        <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between relative">
          {/* Logo */}
          <a href="#" className="shrink-0 flex items-baseline">
            <span className="text-black text-xl leading-none" style={{ fontFamily: 'var(--font-sans)', fontWeight: 800 }}>
              MADOX
            </span>
            <span style={{ color: '#0066ff', fontWeight: 800, fontSize: '1.25rem', lineHeight: 1 }}>.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => open(link.dropdownType!)}
                  onMouseLeave={close}
                >
                  <button
                    className="flex items-center gap-1 text-[13px] tracking-widest uppercase text-black/60 hover:text-black transition-colors duration-300 relative"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {link.label}
                    <svg
                      width="10" height="10" viewBox="0 0 10 10" fill="none"
                      stroke="currentColor" strokeWidth="1.5"
                      className={`transition-transform duration-200 ${activeDropdown === link.dropdownType ? 'rotate-180' : ''}`}
                    >
                      <path d="M2 3.5L5 6.5L8 3.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className={`absolute bottom-0 left-0 h-px bg-[#0066ff] transition-all duration-300 ${activeDropdown === link.dropdownType ? 'w-full' : 'w-0'}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.dropdownType && (
                      <div
                        className="fixed left-0 right-0"
                        style={{ top: 64 }}
                        onMouseEnter={() => open(link.dropdownType!)}
                        onMouseLeave={close}
                      >
                        {link.dropdownType === 'work'
                          ? <WorkDropdown onClose={close} />
                          : link.dropdownType === 'industries'
                          ? <IndustriesDropdown onClose={close} />
                          : <ServiceDropdown onClose={close} />
                        }
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative text-[13px] tracking-widest uppercase text-black/60 hover:text-black transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-black group-hover:w-full transition-all duration-500" />
                </a>
              )
            )}
            <a
              href="#contact"
              className="text-[11px] tracking-[0.2em] uppercase text-white px-5 py-2.5 rounded-full transition-opacity duration-300 hover:opacity-85"
              style={{ fontFamily: 'var(--font-sans)', backgroundColor: '#0066ff' }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-1.5"
            aria-label="Toggle menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} className="block w-6 h-px bg-black" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} className="block w-6 h-px bg-black" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} className="block w-6 h-px bg-black" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
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
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
                className="text-4xl text-black hover:text-[#0066ff] transition-colors"
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
              className="text-[11px] tracking-[0.2em] uppercase text-white px-8 py-3 mt-4 rounded-full"
              style={{ fontFamily: 'var(--font-sans)', backgroundColor: '#0066ff' }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

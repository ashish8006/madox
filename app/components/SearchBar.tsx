'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const types = ['Buy', 'Rent', 'Invest']
const locations = ['New York', 'Beverly Hills', 'Miami', 'London', 'Paris', 'Dubai']
const priceRanges = ['Under $2M', '$2M – $5M', '$5M – $15M', '$15M+']

export default function SearchBar() {
  const [activeType, setActiveType] = useState('Buy')

  return (
    <section className="relative z-20 pb-0">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.23, 1, 0.32, 1] }}
          className="bg-[#111111]/95 backdrop-blur-xl border border-white/5 p-2"
        >
          {/* Type tabs */}
          <div className="flex gap-1 p-4 pb-2 border-b border-white/5 mb-4">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`text-xs tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-300 ${
                  activeType === type
                    ? 'bg-[#0066ff] text-black font-medium'
                    : 'text-white/60 hover:text-white/70'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Search inputs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5 mx-4 mb-4">
            <div className="bg-[#111111] px-5 py-4">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2">Location</div>
              <select className="w-full bg-transparent text-white/70 text-sm outline-none appearance-none cursor-pointer">
                <option className="bg-[#111111]">Any Location</option>
                {locations.map((l) => (
                  <option key={l} className="bg-[#111111]">{l}</option>
                ))}
              </select>
            </div>

            <div className="bg-[#111111] px-5 py-4">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2">Price Range</div>
              <select className="w-full bg-transparent text-white/70 text-sm outline-none appearance-none cursor-pointer">
                <option className="bg-[#111111]">Any Price</option>
                {priceRanges.map((p) => (
                  <option key={p} className="bg-[#111111]">{p}</option>
                ))}
              </select>
            </div>

            <div className="bg-[#111111] px-5 py-4">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2">Property Type</div>
              <select className="w-full bg-transparent text-white/70 text-sm outline-none appearance-none cursor-pointer">
                <option className="bg-[#111111]">All Types</option>
                <option className="bg-[#111111]">Penthouse</option>
                <option className="bg-[#111111]">Villa</option>
                <option className="bg-[#111111]">Estate</option>
                <option className="bg-[#111111]">Mansion</option>
              </select>
            </div>

            <button className="bg-[#0066ff] hover:bg-[#3385ff] transition-colors duration-300 flex items-center justify-center gap-3 group py-4 px-6">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="8" cy="8" r="5.5" stroke="black" strokeWidth="1.5"/>
                <path d="M13 13L16 16" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-black text-xs tracking-[0.2em] uppercase font-medium">Search</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

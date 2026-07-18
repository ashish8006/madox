'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Property {
  id: number
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: string
  tag: string
  image: string
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Maison de Lumière',
    location: 'Côte d\'Azur, France',
    price: '$24,500,000',
    beds: 7,
    baths: 9,
    sqft: '12,400',
    tag: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
  },
  {
    id: 2,
    title: 'The Residences at One Central',
    location: 'Manhattan, New York',
    price: '$18,900,000',
    beds: 5,
    baths: 6,
    sqft: '8,200',
    tag: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
  },
  {
    id: 3,
    title: 'Villa Serenissima',
    location: 'Tuscany, Italy',
    price: '$11,200,000',
    beds: 6,
    baths: 7,
    sqft: '9,800',
    tag: 'Historic',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    id: 4,
    title: 'Cliff House',
    location: 'Malibu, California',
    price: '$32,000,000',
    beds: 8,
    baths: 10,
    sqft: '15,600',
    tag: 'Oceanfront',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
  },
  {
    id: 5,
    title: 'The Grand Chateau',
    location: 'Geneva, Switzerland',
    price: '$42,000,000',
    beds: 10,
    baths: 12,
    sqft: '22,000',
    tag: 'Estate',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80',
  },
  {
    id: 6,
    title: 'Sky Penthouse',
    location: 'Dubai, UAE',
    price: '$28,700,000',
    beds: 6,
    baths: 8,
    sqft: '11,300',
    tag: 'New Listing',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
]

interface PropertyCardProps {
  property: Property
  aspectClass: string
  delay: number
}

function PropertyCard({ property, aspectClass, delay }: PropertyCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
      animate={inView ? { clipPath: 'inset(0 0 0% 0)', opacity: 1 } : {}}
      transition={{ duration: 1.0, delay, ease: [0.23, 1, 0.32, 1] }}
      className={`property-card relative overflow-hidden cursor-pointer group ${aspectClass}`}
    >
      <img
        src={property.image}
        alt={property.title}
        className="property-card-img absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(10,9,8,0.85) 0%, rgba(10,9,8,0.3) 50%, rgba(10,9,8,0.1) 100%)',
        }}
      />

      <div
        className="absolute top-4 left-4 px-3 py-1 text-[10px] tracking-[0.2em] uppercase"
        style={{
          fontFamily: 'var(--font-sans)',
          backgroundColor: '#c9a96e',
          color: '#0a0908',
        }}
      >
        {property.tag}
      </div>

      <div className="absolute top-4 right-4 text-right">
        <span
          className="text-[#c9a96e] text-sm font-medium"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {property.price}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
        <h3
          className="text-white text-xl leading-tight mb-1"
          style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400 }}
        >
          {property.title}
        </h3>
        <p
          className="text-white/50 text-xs tracking-widest uppercase mb-3"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {property.location}
        </p>
        <div className="flex items-center gap-4 text-white/40 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
          <span>{property.beds} Beds</span>
          <span className="text-white/20">·</span>
          <span>{property.baths} Baths</span>
          <span className="text-white/20">·</span>
          <span>{property.sqft} sq ft</span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span
          className="text-white/60 text-xs tracking-widest"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          → View
        </span>
      </div>
    </motion.div>
  )
}

export default function PropertiesSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="properties" className="relative py-24" style={{ backgroundColor: '#0a0908' }}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div ref={headerRef} className="mb-16">
          <motion.p
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={headerInView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="text-[11px] tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-sans)', color: '#c9a96e' }}
          >
            Our Portfolio
          </motion.p>
          <div className="flex items-baseline gap-4 flex-wrap">
            <motion.span
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={headerInView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 1.0, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="text-white leading-none"
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(52px, 7vw, 100px)',
              }}
            >
              Exceptional
            </motion.span>
            <motion.span
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={headerInView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 1.0, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="leading-none text-transparent"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 100,
                fontSize: 'clamp(52px, 7vw, 100px)',
                WebkitTextStroke: '1px rgba(255,255,255,0.3)',
              } as React.CSSProperties}
            >
              Properties
            </motion.span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-2/3">
              <PropertyCard property={properties[0]} aspectClass="aspect-[3/4]" delay={0} />
            </div>
            <div className="w-1/3 flex flex-col gap-4">
              <PropertyCard property={properties[1]} aspectClass="aspect-square" delay={0.1} />
              <PropertyCard property={properties[2]} aspectClass="aspect-square" delay={0.2} />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/3 flex flex-col gap-4">
              <PropertyCard property={properties[3]} aspectClass="aspect-square" delay={0.1} />
              <PropertyCard property={properties[4]} aspectClass="aspect-square" delay={0.2} />
            </div>
            <div className="w-2/3">
              <PropertyCard property={properties[5]} aspectClass="aspect-[3/4]" delay={0} />
            </div>
          </div>
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          <a
            href="#contact"
            className="text-[11px] tracking-[0.25em] uppercase text-white/50 border border-white/10 px-10 py-4 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors duration-500"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            View All Properties
          </a>
        </motion.div>
      </div>
    </section>
  )
}

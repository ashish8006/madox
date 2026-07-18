'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const articles = [
  {
    id: 1,
    category: 'Project Stories',
    title: 'Embodied carbon in heritage buildings: A counterintuitive case',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=85',
    align: 'left' as const,
  },
  {
    id: 2,
    category: 'Design Insights',
    title: 'Why we still draw by hand before we draw on screen',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
    align: 'right' as const,
  },
  {
    id: 3,
    category: 'Market Intelligence',
    title: 'The quiet return of the classical facade in urban architecture',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=85',
    align: 'left' as const,
  },
]

function ArticleRow({ article }: { article: typeof articles[0] }) {
  const rowRef   = useRef<HTMLDivElement>(null)
  const cardRef  = useRef<HTMLDivElement>(null)
  const cardInView = useInView(cardRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start end', 'end start'],
  })

  // Image zooms in as row enters / travels through viewport
  const scale = useTransform(scrollYProgress, [0, 1], [1.0, 1.18])
  // Subtle upward parallax on the image
  const y     = useTransform(scrollYProgress, [0, 1], ['4%', '-4%'])

  const isLeft = article.align === 'left'

  return (
    <div ref={rowRef} className="relative overflow-hidden" style={{ height: '70vh', minHeight: '480px' }}>

      {/* ── Full-width zooming background image ── */}
      <motion.div
        className="absolute inset-0"
        style={{ scale, y }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${article.image}')` }}
        />
      </motion.div>

      {/* ── Frosted content card ── */}
      <div
        className={`absolute inset-y-0 flex items-center px-8 md:px-16 ${
          isLeft ? 'left-0' : 'right-0'
        }`}
      >
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
          animate={cardInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="relative flex flex-col justify-center"
          style={{
            width: 'clamp(300px, 38vw, 560px)',
            padding: 'clamp(36px, 4vw, 60px)',
            background: 'rgba(234, 230, 224, 0.88)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          }}
        >
          {/* Eyebrow */}
          <p
            className="text-black/50 text-[10px] tracking-[0.4em] uppercase mb-5"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {article.category}
          </p>

          {/* Title */}
          <h3
            className="text-black leading-[1.2] mb-8"
            style={{
              fontFamily: 'var(--font-sans)',
              fontStyle: 'normal',
              fontWeight: 800,
              fontSize: 'clamp(20px, 2.4vw, 32px)',
            }}
          >
            {article.title}
          </h3>

          {/* Read button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-black border border-black/30 hover:border-black hover:bg-black hover:text-white px-5 py-2.5 transition-all duration-400 group"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <span>Read</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M1 5H9M6 2L9 5L6 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

    </div>
  )
}

export default function InsightsSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView   = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section className="relative" style={{ backgroundColor: '#f0ede8' }}>

      {/* Section header */}
      <div ref={titleRef} className="max-w-350 mx-auto px-8 md:px-16 py-20 md:py-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="text-black/40 text-[10px] tracking-[0.45em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Journal
          </motion.p>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 1.0, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-black leading-[0.9]"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: 'clamp(44px, 6vw, 88px)',
              }}
            >
              Stories &amp;
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ duration: 1.0, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: 'clamp(44px, 6vw, 88px)',
                color: '#c9a96e',
              }}
            >
              Insights
            </motion.h2>
          </div>
        </div>

        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="group inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-black/50 hover:text-black transition-colors duration-400 self-end pb-2"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <span>View All Articles</span>
          <span className="block h-px w-6 bg-current group-hover:w-10 transition-all duration-500" />
        </motion.a>
      </div>

      {/* Article rows */}
      <div className="flex flex-col">
        {articles.map((article) => (
          <ArticleRow key={article.id} article={article} />
        ))}
      </div>

      {/* Bottom rule */}
      <div className="section-line mt-0" />
    </section>
  )
}

'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const BG_IMAGE = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
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
  const heroY = useTransform(scrollYProgress, [0, 0.22], ['0%', '-4%'])

  const bigOpacity = useTransform(scrollYProgress, [0.22, 0.44], [0, 1])
  const bigScale = useTransform(scrollYProgress, [0.22, 0.50], [0.9, 1])

  const solidOpacity = useTransform(scrollYProgress, [0.36, 0.56], [1, 0])
  const clipOpacity = useTransform(scrollYProgress, [0.50, 0.68], [0, 1])

  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])

  return (
    <section ref={sectionRef} style={{ height: '400vh' }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">

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

        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(10,9,8,0.9) 0%, rgba(10,9,8,0.5) 40%, rgba(10,9,8,0.2) 100%)',
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-0 z-20 flex flex-col justify-end px-12 pb-20 md:px-20 md:pb-28"
        >
          <motion.p
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={mounted ? { clipPath: 'inset(0 0 0% 0)' } : {}}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="text-[11px] tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-sans)', color: '#c9a96e' }}
          >
            The Art of
          </motion.p>

          <motion.h1
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={mounted ? { clipPath: 'inset(0 0 0% 0)' } : {}}
            transition={{ duration: 1.1, delay: 0.55, ease: [0.23, 1, 0.32, 1] }}
            className="text-white leading-[0.9] mb-1"
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(64px, 10vw, 148px)',
            }}
          >
            Exceptional
          </motion.h1>

          <motion.h1
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={mounted ? { clipPath: 'inset(0 0 0% 0)' } : {}}
            transition={{ duration: 1.1, delay: 0.75, ease: [0.23, 1, 0.32, 1] }}
            className="leading-[0.9] mb-10"
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(64px, 10vw, 148px)',
              color: '#c9a96e',
            }}
          >
            Living.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <p
              className="text-white/40 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Where architectural mastery meets the finest craftsmanship in the world's most coveted addresses.
            </p>
            <a
              href="#properties"
              className="shrink-0 text-[11px] tracking-[0.2em] uppercase border border-white/30 text-white px-6 py-3 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors duration-500"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              View Properties
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: bigOpacity, scale: bigScale }}
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none select-none"
        >
          <div
            className="relative text-center font-black uppercase"
            style={{ fontSize: 'clamp(72px, 18vw, 260px)', lineHeight: 0.82, letterSpacing: '-0.03em' }}
          >
            <div className="invisible" aria-hidden>
              <div>LUXE</div>
              <div>ESTATE</div>
            </div>

            <motion.div
              style={{ opacity: solidOpacity }}
              className="absolute inset-0 text-white"
            >
              <div>LUXE</div>
              <div>ESTATE</div>
            </motion.div>

            <motion.div
              className="absolute inset-0"
              style={{ opacity: clipOpacity }}
            >
              <div
                style={{
                  backgroundImage: `url('${BG_IMAGE}')`,
                  backgroundSize: '100vw 100vh',
                  backgroundPosition: 'center center',
                  backgroundAttachment: 'fixed',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                } as React.CSSProperties}
              >
                <div>LUXE</div>
                <div>ESTATE</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2"
          style={{ opacity: hintOpacity }}
        >
          <span
            className="text-white/30 text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Scroll
          </span>
          <motion.div
            className="w-px bg-white/20"
            animate={{ height: [16, 40, 16], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: [0.23, 1, 0.32, 1] }}
          />
        </motion.div>

      </div>
    </section>
  )
}

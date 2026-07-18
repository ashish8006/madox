'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const PARTICLE_COUNT = 90
    const MAX_DIST       = 160
    const BLUE           = '0, 102, 255'
    const WHITE          = '255, 255, 255'

    let particles: Particle[] = []
    let raf: number
    let W = 0, H = 0

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    const init = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x:      Math.random() * W,
        y:      Math.random() * H,
        vx:     (Math.random() - 0.5) * 0.5,
        vy:     (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.8 + 0.6,
        alpha:  Math.random() * 0.6 + 0.3,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > MAX_DIST) continue

          const t = 1 - dist / MAX_DIST
          const isBlue = (i + j) % 5 === 0

          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = isBlue
            ? `rgba(${BLUE}, ${t * 0.55})`
            : `rgba(${WHITE}, ${t * 0.12})`
          ctx.lineWidth = isBlue ? 0.8 : 0.5
          ctx.stroke()
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${WHITE}, ${p.alpha})`
        ctx.fill()
      }

      // Move particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    init()
    draw()

    window.addEventListener('resize', () => { resize(); init() })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', () => { resize(); init() })
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  )
}

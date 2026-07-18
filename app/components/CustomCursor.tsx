'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null)
  const ringRef  = useRef<HTMLDivElement>(null)
  const pos      = useRef({ x: -100, y: -100 })
  const ring     = useRef({ x: -100, y: -100 })
  const raf      = useRef<number>(0)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onEnter = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [role="button"], input, textarea, select')) {
        setHovered(true)
      }
    }

    const onLeave = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [role="button"], input, textarea, select')) {
        setHovered(false)
      }
    }

    const onDown  = () => setClicked(true)
    const onUp    = () => setClicked(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onEnter)
    window.addEventListener('mouseout',  onLeave)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
      }

      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12)

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`
      }

      raf.current = requestAnimationFrame(tick)
    }

    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('mouseout',  onLeave)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
        style={{
          width:           hovered ? 8 : 6,
          height:          hovered ? 8 : 6,
          borderRadius:    '50%',
          backgroundColor: hovered ? '#0066ff' : '#ffffff',
          transition:      'width 0.2s, height 0.2s, background-color 0.2s',
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none will-change-transform"
        style={{
          width:        hovered ? 48 : clicked ? 20 : 36,
          height:       hovered ? 48 : clicked ? 20 : 36,
          borderRadius: '50%',
          border:       `1.5px solid ${hovered ? '#0066ff' : 'rgba(255,255,255,0.6)'}`,
          transition:   'width 0.25s cubic-bezier(0.23,1,0.32,1), height 0.25s cubic-bezier(0.23,1,0.32,1), border-color 0.2s',
        }}
      />
    </>
  )
}

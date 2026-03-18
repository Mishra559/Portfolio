import { useEffect, useRef } from 'react'

export function Cursor(): JSX.Element {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    let animId: number

    const onMove = (e: MouseEvent): void => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
    }

    const animate = (): void => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`
        ringRef.current.style.top = `${ring.current.y}px`
      }
      animId = requestAnimationFrame(animate)
    }

    const onHoverIn = (): void => {
      dotRef.current?.classList.add('scale-[3]')
    }
    const onHoverOut = (): void => {
      dotRef.current?.classList.remove('scale-[3]')
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onHoverIn)
      el.addEventListener('mouseleave', onHoverOut)
    })

    animate()

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-3 h-3 bg-acid rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 mix-blend-difference"
        style={{ willChange: 'left, top' }}
      />
      <div
        ref={ringRef}
        className="fixed w-10 h-10 border border-acid rounded-full pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 opacity-40"
        style={{ willChange: 'left, top' }}
      />
    </>
  )
}

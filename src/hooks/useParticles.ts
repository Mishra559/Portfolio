import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  life: number
  decay: number
}

function createParticle(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 1.5 + 0.3,
    life: Math.random(),
    decay: Math.random() * 0.003 + 0.001,
  }
}

export function useParticles(count = 120): React.RefObject<HTMLCanvasElement> {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0
    let H = 0
    let animId: number
    const particles: Particle[] = []

    function resize(): void {
      W = canvas!.width = window.innerWidth
      H = canvas!.height = window.innerHeight
    }

    function init(): void {
      resize()
      particles.length = 0
      for (let i = 0; i < count; i++) {
        particles.push(createParticle(W, H))
      }
    }

    function drawConnections(): void {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx!.beginPath()
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.strokeStyle = `rgba(200,255,0,${(1 - dist / 120) * 0.08})`
            ctx!.lineWidth = 0.5
            ctx!.stroke()
          }
        }
      }
    }

    function animate(): void {
      ctx!.clearRect(0, 0, W, H)

      for (const p of particles) {
        p.x += p.vx + (mouseRef.current.x / W - 0.5) * 0.25
        p.y += p.vy + (mouseRef.current.y / H - 0.5) * 0.25
        p.life -= p.decay

        if (p.life <= 0 || p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
          Object.assign(p, createParticle(W, H))
        }

        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(200,255,0,${p.life * 0.35})`
        ctx!.fill()
      }

      drawConnections()
      animId = requestAnimationFrame(animate)
    }

    const onMouseMove = (e: MouseEvent): void => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    init()
    animate()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [count])

  return canvasRef
}

import { useRef, useCallback } from 'react'

interface TiltHandlers {
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void
  onMouseLeave: () => void
}

export function useTilt(maxDeg = 14): [React.RefObject<HTMLDivElement>, TiltHandlers] {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `perspective(800px) rotateY(${x * maxDeg}deg) rotateX(${-y * maxDeg}deg) scale(1.03)`
      el.style.setProperty('--shine-x', `${e.clientX - rect.left}px`)
      el.style.setProperty('--shine-y', `${e.clientY - rect.top}px`)
    },
    [maxDeg]
  )

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)'
  }, [])

  return [ref, { onMouseMove, onMouseLeave }]
}

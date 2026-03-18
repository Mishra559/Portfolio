import { useScrollReveal } from '@/hooks/useScrollReveal'

interface SectionHeaderProps {
  num: string
  title: string
}

export function SectionHeader({ num, title }: SectionHeaderProps): JSX.Element {
  const ref = useScrollReveal()

  return (
    <div ref={ref} className="reveal flex items-baseline gap-5 mb-16">
      <span className="font-mono text-[0.72rem] text-acid tracking-[0.15em] uppercase shrink-0">
        {num}
      </span>
      <h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] tracking-[0.02em]">
        {title}
      </h2>
      <div className="flex-1 h-px bg-white/10 mb-[6px]" />
    </div>
  )
}

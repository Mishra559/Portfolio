import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from './SectionHeader'
import { ACHIEVEMENTS } from '@/data'

export function Achievements(): JSX.Element {
  const ref = useScrollReveal()

  return (
    <section id="achievements" className="bg-bg-2 relative z-10">
      <div className="max-w-[1200px] mx-auto px-12 py-[100px]">
        <SectionHeader num="05" title="ACHIEVEMENTS" />

        <div
          ref={ref}
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.title}
              className="bg-surface border border-white/[0.06] rounded-[12px] p-7 relative overflow-hidden transition-all duration-200 hover:-translate-y-[5px] hover:border-acid/25 group"
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-acid/[0.04] rounded-bl-full" />

              <span className="text-[2rem] block mb-4">{ach.icon}</span>
              <div className="font-display text-[1.4rem] tracking-[0.02em] mb-[6px]">
                {ach.title}
              </div>
              <div className="font-mono text-[0.7rem] text-white/35 tracking-[0.08em] mb-3">
                {ach.subtitle}
              </div>
              <div
                className={`font-mono text-[0.88rem] tracking-[2px] ${
                  ach.decorationColor ?? 'text-acid'
                }`}
              >
                {ach.decoration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from './SectionHeader'

const BULLETS = [
  'Developed and debugged software modules within a professional codebase under senior supervision — hands-on exposure to real production systems.',
  'Maintained clean Git workflows across collaborative development using GitHub — feature branches, code reviews, and structured commit history.',
  'Diagnosed and resolved logic bugs across existing modules, improving code reliability and runtime performance.',
  'Operated within a structured SDLC environment with daily standups, sprint reviews, and formal code review processes.',
]

export function Experience(): JSX.Element {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="bg-bg relative z-10">
      <div className="max-w-[1200px] mx-auto px-12 py-[100px]">
        <SectionHeader num="04" title="EXPERIENCE" />

        <div className="relative pl-10">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-acid via-cyan-400 to-transparent" />
          {/* Timeline dot */}
          <div className="absolute left-[-5px] top-3 w-[11px] h-[11px] bg-acid rounded-full shadow-[0_0_20px_#c8ff00]" />

          <div
            ref={ref}
            className="reveal bg-surface border border-white/[0.06] rounded-[14px] p-9 relative overflow-hidden"
          >
            {/* Watermark */}
            <div
              className="absolute right-[-10px] bottom-[-10px] font-display text-[8rem] text-acid/[0.03] leading-none pointer-events-none tracking-[-0.05em]"
              aria-hidden="true"
            >
              INTERN
            </div>

            {/* Header */}
            <div className="flex flex-wrap justify-between items-start gap-3 mb-6">
              <div>
                <div className="font-display text-[2.2rem] tracking-[0.02em] leading-none mb-2">
                  Jaiprakash Associates Limited
                </div>
                <div className="font-mono text-[0.75rem] text-acid tracking-[0.1em] uppercase">
                  Software Intern · Rewa, MP
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-mono text-[0.7rem] px-4 py-[6px] rounded-full border border-white/15 bg-surface-2 text-white/40">
                  Mar 2024 – Apr 2024
                </span>
                <span className="font-mono text-[0.68rem] text-white/30">
                  📍 Rewa, Madhya Pradesh
                </span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-3 relative z-10">
              {BULLETS.map((bullet, i) => (
                <li
                  key={i}
                  className="text-[0.9rem] text-white/50 pl-5 relative leading-[1.65]"
                >
                  <span className="absolute left-0 top-[1px] text-acid font-mono text-[0.8rem]">
                    ▸
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

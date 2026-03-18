import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from './SectionHeader'

const CHIPS = [
  { label: '2021 – 2025', highlight: false },
  { label: 'CGPA: 7.6', highlight: true },
  { label: 'Data Structures', highlight: false },
  { label: 'DBMS', highlight: false },
  { label: 'OOP · Java', highlight: false },
  { label: 'OS · Networks', highlight: false },
]

export function Education(): JSX.Element {
  const ref = useScrollReveal()

  return (
    <section id="education" className="bg-bg relative z-10">
      <div className="max-w-[1200px] mx-auto px-12 py-[100px]">
        <SectionHeader num="06" title="EDUCATION" />

        <div
          ref={ref}
          className="reveal bg-surface border border-white/[0.06] rounded-[14px] p-10 flex flex-col md:flex-row items-start md:items-center gap-9 relative overflow-hidden"
        >
          {/* Watermark */}
          <div
            className="absolute right-[-20px] top-[-10px] font-display text-[7rem] text-cyan-400/[0.03] pointer-events-none leading-none tracking-[-0.04em]"
            aria-hidden="true"
          >
            B.TECH
          </div>

          {/* Badge */}
          <div className="w-20 h-20 shrink-0 rounded-full bg-acid/[0.06] border-2 border-acid/20 flex items-center justify-center text-[2.2rem]">
            🎓
          </div>

          <div className="relative z-10">
            <div className="font-display text-[1.8rem] tracking-[0.02em] mb-[6px]">
              Barkatullah University
            </div>
            <div className="text-white/50 text-[0.9rem] mb-5">
              B.Tech in Computer Science &amp; Engineering · Bhopal, MP
            </div>
            <div className="flex flex-wrap gap-2">
              {CHIPS.map((chip) => (
                <span
                  key={chip.label}
                  className={`font-mono text-[0.72rem] px-[14px] py-[5px] rounded-full border ${
                    chip.highlight
                      ? 'bg-acid/[0.08] border-acid/25 text-acid'
                      : 'bg-surface-2 border-white/[0.06] text-white/70'
                  }`}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

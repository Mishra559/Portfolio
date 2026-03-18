import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from './SectionHeader'
import { SKILLS } from '@/data'
import type { SkillTag } from '@/types'

function Tag({ tag }: { tag: SkillTag }): JSX.Element {
  const base =
    'font-mono text-[0.7rem] px-[10px] py-1 rounded-[3px] border transition-all duration-200 cursor-default hover:-translate-y-px'
  if (tag.variant === 'core')
    return (
      <span
        className={`${base} bg-acid/[0.07] border-acid/25 text-acid hover:bg-acid/15`}
      >
        {tag.name}
      </span>
    )
  if (tag.variant === 'blue')
    return (
      <span
        className={`${base} bg-cyan-400/[0.07] border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/15`}
      >
        {tag.name}
      </span>
    )
  return (
    <span
      className={`${base} bg-surface-2 border-white/[0.06] text-white/80 hover:border-white/20`}
    >
      {tag.name}
    </span>
  )
}

export function Skills(): JSX.Element {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="bg-bg relative z-10">
      <div className="max-w-[1200px] mx-auto px-12 py-[100px]">
        <SectionHeader num="02" title="SKILLS" />

        <div
          ref={ref}
          className="reveal grid grid-cols-2 md:grid-cols-6 gap-3"
        >
          {SKILLS.map((group) => (
            <div
              key={group.label}
              className={`bg-surface border border-white/[0.06] rounded-[10px] p-[22px] transition-all duration-200 hover:border-white/10 hover:-translate-y-[3px] hover:bg-surface-2 ${
                group.span === 3
                  ? 'col-span-2 md:col-span-3'
                  : group.span === 2
                    ? 'col-span-2'
                    : 'col-span-2 md:col-span-1'
              }`}
            >
              <span className="text-[1.8rem] mb-3 block">{group.icon}</span>
              <div className="font-mono text-[0.65rem] text-acid uppercase tracking-[0.15em] mb-4">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-[6px]">
                {group.tags.map((tag) => (
                  <Tag key={tag.name} tag={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

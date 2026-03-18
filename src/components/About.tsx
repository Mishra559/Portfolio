import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useGitHub } from '@/hooks/useGitHub'
import { SectionHeader } from './SectionHeader'
import { LANG_COLORS } from '@/data'
import { motion } from 'framer-motion'

function StatCard({
  value,
  label,
  loading,
}: {
  value: string | number
  label: string
  loading?: boolean
}): JSX.Element {
  return (
    <div className="bg-surface border border-white/[0.06] rounded-lg p-6 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-acid/40">
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-acid to-cyan-400 scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
      <div className="font-display text-[3rem] text-acid leading-none mb-1">
        {loading ? (
          <span className="text-white/20 animate-pulse text-2xl">...</span>
        ) : (
          value
        )}
      </div>
      <div className="font-mono text-[0.68rem] text-white/40 uppercase tracking-[0.1em]">
        {label}
      </div>
    </div>
  )
}

export function About(): JSX.Element {
  const { stats, loading } = useGitHub()
  const textRef = useScrollReveal()
  const statsRef = useScrollReveal()
  const langsRef = useScrollReveal()

  const totalLangs = stats
    ? Object.values(stats.languages).reduce((a, b) => a + b, 0) || 1
    : 1

  return (
    <section id="about" className="bg-bg-2 relative z-10">
      <div className="max-w-[1200px] mx-auto px-12 py-[100px]">
        <SectionHeader num="01" title="ABOUT" />

        {/* GitHub Stats */}
        <div
          ref={statsRef}
          className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          <StatCard
            value={stats?.repos ?? 0}
            label="Public Repos"
            loading={loading}
          />
          <StatCard
            value={stats?.stars ?? 0}
            label="Total Stars"
            loading={loading}
          />
          <StatCard
            value={stats?.followers ?? 0}
            label="Followers"
            loading={loading}
          />
          <StatCard value="5★" label="HackerRank Java" />
        </div>

        {/* About text + language bars */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div ref={textRef} className="reveal">
            <p className="text-white/60 text-[1.05rem] leading-[1.8] mb-4">
              CS graduate building{' '}
              <strong className="text-white">
                backend systems that scale
              </strong>{' '}
              — from REST APIs to database-driven applications. Comfortable in
              the full stack, obsessive about clean code.
            </p>
            <p className="text-white/60 text-[1.05rem] leading-[1.8] mb-4">
              Proficient in{' '}
              <span className="inline-block bg-acid/10 border border-acid/25 rounded px-2 py-px text-acid font-mono text-[0.85em]">
                Java
              </span>
              ,{' '}
              <span className="inline-block bg-acid/10 border border-acid/25 rounded px-2 py-px text-acid font-mono text-[0.85em]">
                Spring Boot
              </span>{' '}
              and{' '}
              <span className="inline-block bg-acid/10 border border-acid/25 rounded px-2 py-px text-acid font-mono text-[0.85em]">
                SQL
              </span>
              . Shipped live projects, survived a real internship, earned 5
              stars on HackerRank.
            </p>
            <p className="text-white/40 text-[0.95rem] leading-[1.7]">
              Seeking entry-level opportunities as a Java Backend or Full Stack
              Developer. Based in Hyderabad. Available immediately.
            </p>
          </div>

          {/* Language bars */}
          <div ref={langsRef} className="reveal">
            <div className="font-mono text-[0.65rem] text-white/30 uppercase tracking-[0.12em] mb-5">
              {stats ? 'Live from GitHub' : 'Language Distribution'}
            </div>
            <div className="flex flex-col gap-4">
              {(stats
                ? Object.entries(stats.languages)
                : [
                    ['Java', 55],
                    ['JavaScript', 30],
                    ['SQL', 10],
                    ['HTML', 5],
                  ]
              ).map(([lang, count], i) => {
                const pct =
                  typeof count === 'number'
                    ? stats
                      ? Math.round((count / totalLangs) * 100)
                      : count
                    : 0
                const color =
                  LANG_COLORS[lang] ?? 'linear-gradient(90deg,#888,#444)'
                return (
                  <motion.div
                    key={lang}
                    className="flex flex-col gap-[6px]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between">
                      <span className="font-mono text-[0.75rem] text-white tracking-[0.05em]">
                        {lang}
                      </span>
                      <span className="font-mono text-[0.7rem] text-white/40">
                        {pct}%
                      </span>
                    </div>
                    <div className="h-[4px] bg-surface-2 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        transition={{
                          delay: i * 0.1 + 0.2,
                          duration: 1.2,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

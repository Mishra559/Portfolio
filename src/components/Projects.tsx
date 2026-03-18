import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from './SectionHeader'
import { ProjectCard } from './ProjectCard'
import { PROJECTS } from '@/data'
import type { FilterCategory } from '@/types'
import { motion, AnimatePresence } from 'framer-motion'

const FILTERS: { label: string; value: FilterCategory }[] = [
  { label: 'All Projects', value: 'all' },
  { label: '⚙ Backend', value: 'backend' },
  { label: '🌐 Full Stack', value: 'fullstack' },
]

export function Projects(): JSX.Element {
  const [filter, setFilter] = useState<FilterCategory>('all')
  const filterRef = useScrollReveal()

  const filtered =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="projects" className="bg-bg-2 relative z-10">
      <div className="max-w-[1200px] mx-auto px-12 py-[100px]">
        <SectionHeader num="03" title="PROJECTS" />

        {/* Filter buttons */}
        <div ref={filterRef} className="reveal flex flex-wrap gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`font-mono text-[0.7rem] tracking-[0.1em] uppercase px-5 py-2 rounded-[3px] border transition-all duration-200 ${
                filter === f.value
                  ? 'bg-acid text-black border-acid font-semibold'
                  : 'bg-transparent border-white/10 text-white/40 hover:border-acid hover:text-acid'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

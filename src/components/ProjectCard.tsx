import { useTilt } from '@/hooks/useTilt'
import type { Project } from '@/types'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const [ref, tiltHandlers] = useTilt(14)

  return (
    <div
      ref={ref}
      {...tiltHandlers}
      className="bg-surface border border-white/[0.06] rounded-[14px] p-8 relative overflow-hidden flex flex-col group transition-[box-shadow,border-color] duration-300 hover:border-acid/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
      style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
    >
      {/* Shine overlay */}
      <div
        className="absolute inset-0 rounded-[14px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(400px circle at var(--shine-x, 50%) var(--shine-y, 50%), rgba(200,255,0,0.06), transparent 60%)',
        }}
      />

      {/* Top bar */}
      <div className="flex justify-between items-start mb-5 relative z-10">
        <span className="font-mono text-[0.65rem] text-acid tracking-[0.15em]">
          PROJECT {project.num}
        </span>
        <span className="font-mono text-[0.62rem] px-[10px] py-1 rounded-full bg-surface-2 border border-white/[0.06] text-white/40 uppercase tracking-[0.08em]">
          {project.category}
        </span>
      </div>

      {/* Name */}
      <div className="font-display text-[1.8rem] tracking-[0.02em] mb-4 leading-none relative z-10">
        {project.name}
      </div>

      {/* Description */}
      <p className="text-white/50 text-[0.87rem] leading-[1.65] flex-1 mb-6 relative z-10">
        {project.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-[6px] mb-6 relative z-10">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[0.67rem] px-[9px] py-[3px] rounded-[3px] bg-cyan-400/[0.06] border border-cyan-400/15 text-cyan-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2 relative z-10">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-[6px] font-mono text-[0.7rem] tracking-[0.08em] uppercase py-[10px] rounded-md bg-acid text-black font-bold transition-all hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(200,255,0,0.3)]"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-[6px] font-mono text-[0.7rem] tracking-[0.08em] uppercase py-[10px] rounded-md bg-transparent border border-white/15 text-white transition-all hover:border-acid hover:text-acid"
        >
          <Github size={13} />
          GitHub
        </a>
      </div>
    </div>
  )
}

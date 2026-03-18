import { useTyping } from '@/hooks/useTyping'
import { useParticles } from '@/hooks/useParticles'
import { TYPING_PHRASES } from '@/data'
import { motion } from 'framer-motion'

export function Hero(): JSX.Element {
  const typed = useTyping(TYPING_PHRASES)
  const canvasRef = useParticles(120)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-20 px-12 overflow-hidden"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none opacity-60"
      />

      {/* Scanline */}
      <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-acid to-transparent opacity-30 animate-scan pointer-events-none z-10" />

      {/* Grid bg */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
        }}
      />

      {/* Scroll indicator */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10 hidden md:flex">
        <div className="w-px h-20 bg-gradient-to-b from-acid to-transparent animate-scroll-pulse" />
        <span className="font-mono text-[0.62rem] tracking-[0.15em] text-white/30 uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-mono text-[0.72rem] tracking-[0.2em] text-cyan-400 uppercase mb-5"
        >
          // Java Full Stack Developer · Hyderabad, India
        </motion.div>

        {/* Name */}
        <h1 className="font-display leading-[0.88] tracking-[0.01em] mb-0">
          <motion.span
            className="block text-[clamp(5rem,14vw,13rem)]"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            ANSHUL
          </motion.span>

          {/* Glitch name */}
          <motion.span
            className="block text-[clamp(5rem,14vw,13rem)] relative glitch-name"
            data-text="MISHRA"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              WebkitTextStroke: '2px #c8ff00',
              color: 'transparent',
            }}
          >
            MISHRA
          </motion.span>
        </h1>

        {/* Bottom row */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="max-w-md">
            <p className="text-white/60 text-[1rem] leading-[1.7] mb-4">
              <strong className="text-white font-semibold">
                Backend-first engineer
              </strong>{' '}
              with a passion for clean APIs and scalable systems. Spring Boot,
              REST, Java — building things that actually work.
            </p>
            <p className="font-mono text-[0.8rem] text-acid">
              ${' '}
              <span>{typed}</span>
              <span className="animate-blink">_</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="font-mono text-[0.78rem] tracking-[0.1em] uppercase px-7 py-[14px] bg-acid text-black rounded-[3px] font-bold transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)]"
            >
              View Projects ↗
            </a>
            <a
              href="#contact"
              className="font-mono text-[0.78rem] tracking-[0.1em] uppercase px-7 py-[14px] border border-white/20 text-white rounded-[3px] transition-all hover:border-acid hover:text-acid"
            >
              Hire Me
            </a>
            <a
              href="https://github.com/Mishra559"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[0.78rem] tracking-[0.1em] uppercase px-7 py-[14px] border border-white/20 text-white rounded-[3px] transition-all hover:border-acid hover:text-acid"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

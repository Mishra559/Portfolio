import { useState, type FormEvent } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from './SectionHeader'
import { Mail, Github, Linkedin } from 'lucide-react'

const CONTACT_LINKS = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'anshulmq@gmail.com',
    href: 'mailto:anshulmq@gmail.com',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'github.com/Mishra559',
    href: 'https://github.com/Mishra559',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/anshul-mishra-8167b8206/',
    href: 'https://linkedin.com',
  },
]

export function Contact(): JSX.Element {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setSent(true)
    ;(e.target as HTMLFormElement).reset()
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="contact" className="bg-bg-2 relative z-10">
      <div className="max-w-[1200px] mx-auto px-12 py-[100px]">
        <SectionHeader num="07" title="CONTACT" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div ref={leftRef} className="reveal">
            <h3 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[0.02em] mb-6">
              Let&apos;s build
              <br />
              <span className="text-acid">something</span>
              <br />
              great.
            </h3>
            <p className="text-white/50 text-[0.95rem] leading-[1.7] mb-8">
              Actively seeking Java / Full Stack Developer roles. Open to
              relocation. I respond fast.
            </p>
            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http') ? 'noreferrer' : undefined
                  }
                  className="flex items-center gap-4 px-5 py-4 bg-surface border border-white/[0.06] rounded-[10px] text-white no-underline transition-all hover:border-acid hover:translate-x-[6px]"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-white/60 shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[0.62rem] text-white/30 uppercase tracking-[0.1em]">
                      {link.label}
                    </div>
                    <div className="text-[0.9rem] font-medium mt-[2px]">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form
            ref={rightRef as React.RefObject<HTMLFormElement>}
            className="reveal flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            {[
              { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
            ].map((field) => (
              <div key={field.id} className="flex flex-col gap-[6px]">
                <label
                  htmlFor={field.id}
                  className="font-mono text-[0.65rem] text-white/35 uppercase tracking-[0.1em]"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="bg-surface border border-white/[0.06] rounded-lg px-4 py-3 text-white font-body text-[0.9rem] outline-none transition-colors focus:border-acid placeholder:text-white/20"
                />
              </div>
            ))}
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="message"
                className="font-mono text-[0.65rem] text-white/35 uppercase tracking-[0.1em]"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hi Anshul, I'd like to..."
                required
                rows={5}
                className="bg-surface border border-white/[0.06] rounded-lg px-4 py-3 text-white font-body text-[0.9rem] outline-none transition-colors focus:border-acid resize-none placeholder:text-white/20"
              />
            </div>
            <button
              type="submit"
              className={`self-start font-mono font-bold text-[0.8rem] tracking-[0.1em] uppercase px-8 py-[15px] rounded-lg border-none cursor-pointer transition-all hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(200,255,0,0.3)] ${
                sent
                  ? 'bg-cyan-400 text-black'
                  : 'bg-acid text-black'
              }`}
            >
              {sent ? 'Sent ✓' : 'Send Message ↗'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

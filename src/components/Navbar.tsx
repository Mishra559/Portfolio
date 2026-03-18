import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/data'

export function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-12 py-[18px] flex items-center justify-between border-b border-white/[0.06] transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="font-display text-2xl tracking-widest text-acid leading-none"
      >
        AM.
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-9 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-mono text-[0.7rem] text-white/50 no-underline tracking-[0.12em] uppercase relative group transition-colors hover:text-acid"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-acid scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[0.7rem] tracking-[0.1em] uppercase px-5 py-[9px] border border-acid text-acid rounded-[3px] transition-all hover:bg-acid hover:text-black"
        >
          ↓ Resume
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden border border-white/20 text-white px-2 py-1 rounded text-sm"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-b border-white/10 md:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-mono text-xs text-white/60 uppercase tracking-widest px-6 py-4 border-b border-white/[0.06] hover:text-acid hover:bg-surface-2 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

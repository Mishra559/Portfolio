export function Footer(): JSX.Element {
  return (
    <footer className="px-12 py-7 border-t border-white/[0.06] flex flex-wrap justify-between items-center gap-3 relative z-10">
      <div className="font-mono text-[0.7rem] text-white/30 tracking-[0.05em]">
        Designed &amp; Built by{' '}
        <span className="text-acid">Anshul Mishra</span> — 2025
      </div>
      <div className="font-mono text-[0.7rem] text-white/30 tracking-[0.05em]">
        Java · Spring Boot · Open to Work{' '}
        <span className="text-acid">·</span> Hyderabad, India
      </div>
    </footer>
  )
}

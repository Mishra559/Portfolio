import { MARQUEE_ITEMS } from '@/data'

export function Marquee(): JSX.Element {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="border-t border-b border-white/[0.06] overflow-hidden bg-surface relative z-10">
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-display text-[2.5rem] px-10 py-[18px] whitespace-nowrap tracking-[0.05em] ${
              item.accent === true
                ? 'text-acid'
                : item.accent === 'cyan'
                  ? 'text-cyan-400'
                  : 'text-white/25'
            }`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}

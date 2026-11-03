const ICONS = [
  // Generic placeholder marks — swap for real client logos later.
  (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 4h12l-6 8-6-8Zm0 16h12l-6-8-6 8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" />
    </svg>
  ),
  (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="9" cy="12" r="6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
]

/**
 * Auto-scrolling strip of client logo placeholders, moving continuously
 * right to left. Swap `icon`/name pairs in `trustedLogos` for real client
 * marks later.
 */
export default function LogoMarquee({ names }) {
  const doubled = [...names, ...names]

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <ul className="flex w-max animate-marquee items-center gap-10">
        {doubled.map((name, index) => {
          const Icon = ICONS[index % ICONS.length]
          return (
            <li
              key={`${name}-${index}`}
              className="flex shrink-0 items-center gap-2 text-sm font-medium text-ink-soft"
            >
              <Icon className="h-5 w-5 text-ink-soft" aria-hidden="true" />
              {name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

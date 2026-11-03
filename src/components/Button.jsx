import { Link } from 'react-router-dom'

const VARIANT_CLASSES = {
  primary: 'bg-cream text-ink pl-6 pr-1.5 py-1.5',
  secondary: 'bg-transparent text-ink border border-ink/25 px-6 py-3 hover:border-ink',
  dark: 'bg-ink text-cream pl-6 pr-1.5 py-1.5',
  // Self-contained outline style for use on colored/accent backgrounds
  // (e.g. inside a "Popular" pricing card) — never mix with `secondary`
  // via an override className, since equal-specificity Tailwind utilities
  // can lose that tie-break unpredictably.
  outlineLight: 'bg-transparent text-cream border border-cream/40 px-6 py-3 hover:border-cream',
}

/**
 * Shared CTA button. `primary`/`dark` render as a pill with a trailing
 * circular arrow accent (the site's standard CTA shape); `secondary` is a
 * plain outlined pill. Renders a react-router <Link>, an <a>, or a
 * <button> depending on which of `to`/`href` is supplied.
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  const hasArrow = variant === 'primary' || variant === 'dark'
  const classes = `inline-flex items-center justify-center gap-3 rounded-full text-sm font-medium transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] ${VARIANT_CLASSES[variant]} ${className}`

  const content = (
    <>
      {children}
      {hasArrow && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay text-cream">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 13 13 3M13 3H5M13 3v8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}

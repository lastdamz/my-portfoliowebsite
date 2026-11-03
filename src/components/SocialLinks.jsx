const socialLinks = [
  { label: 'Instagram', initial: 'IG', href: 'https://instagram.com' },
  { label: 'LinkedIn', initial: 'IN', href: 'https://linkedin.com' },
  { label: 'Dribbble', initial: 'DR', href: 'https://dribbble.com' },
  { label: 'X', initial: 'X', href: 'https://x.com' },
]

/**
 * Row of circular social links, used on the Contact page.
 */
export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-3">
      {socialLinks.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-xs font-medium text-ink-soft transition-colors hover:border-clay hover:text-clay"
          >
            {social.initial}
          </a>
        </li>
      ))}
    </ul>
  )
}

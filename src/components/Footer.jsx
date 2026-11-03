import { NavLink } from 'react-router-dom'
import { navLinks, siteMeta } from '../data/siteData'
import Button from './Button'

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Behance', href: 'https://www.behance.net/tonderaidamz' },
  { label: 'X', href: 'https://x.com' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-page">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <p className="font-display text-2xl text-ink">{siteMeta.name}</p>
            <p className="mt-3 text-ink-soft">{siteMeta.tagline}</p>
            <p className="mt-2 text-sm text-muted">
              A {siteMeta.role.toLowerCase()} and {siteMeta.secondaryRole.toLowerCase()} focused
              on building clean, intuitive brand systems that solve real problems.
            </p>
            <Button to="/contact" className="mt-6">
              Get in touch
            </Button>
          </div>

          <div className="flex gap-16">
            <nav aria-label="Sitemap">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Menu</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink to={link.path} className="text-ink-soft hover:text-ink">
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Social">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                Social
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink-soft hover:text-ink"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <p className="mt-16 text-sm text-muted">
          © {new Date().getFullYear()} Copyright — {siteMeta.name}
        </p>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none px-4 pb-2 text-center font-display text-[13vw] font-semibold leading-[0.9] tracking-tight text-ink/5 sm:text-[8vw]"
      >
        {siteMeta.name}
      </p>
    </footer>
  )
}

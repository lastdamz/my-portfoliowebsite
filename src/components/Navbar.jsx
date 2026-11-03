import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks, siteMeta } from '../data/siteData'
import Button from './Button'
import MobileMenu from './MobileMenu'

/**
 * Sticky top navigation: logo left, links center, CTA right.
 *
 * MobileMenu is rendered as a sibling of <header>, not a child of it —
 * <header> uses backdrop-blur (a backdrop-filter), which creates a new
 * containing block for `position: fixed` descendants in modern browsers.
 * Nesting the full-screen menu overlay inside it would constrain the
 * overlay to the header's own ~72px height instead of the viewport.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  // The dedicated "Get in touch" button already covers this action —
  // showing it again in the link list would just duplicate it.
  const primaryLinks = navLinks.filter((link) => link.path !== '/contact')

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <NavLink to="/" className="font-display text-xl text-ink" aria-label={`${siteMeta.name} home`}>
            {siteMeta.name}
          </NavLink>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {primaryLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-clay' : 'text-ink-soft hover:text-ink'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button to="/contact" className="px-5 py-2.5 text-xs">
              Get in touch
            </Button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-ink/20"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d={menuOpen ? 'M2 2l12 12M14 2 2 14' : 'M0 3h16M0 8h16M0 13h16'}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} navLinks={primaryLinks} />
    </>
  )
}

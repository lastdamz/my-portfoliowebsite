import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import Button from './Button'

/**
 * Full-screen mobile nav overlay, shown when `open` is true. Closes via
 * the header's hamburger/X toggle, the close button here, tapping the
 * backdrop, or pressing Escape.
 */
export default function MobileMenu({ open, onClose, navLinks }) {
  useEffect(() => {
    if (!open) return
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] overflow-y-auto bg-cream/55 backdrop-blur-2xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="fixed right-6 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-cream/80"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 2l12 12M14 2 2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <motion.nav
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="flex min-h-full flex-col items-center justify-center gap-8 px-6 py-24"
            onClick={(event) => event.stopPropagation()}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `text-3xl font-display ${isActive ? 'text-clay' : 'text-ink'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" onClick={onClose} className="mt-4">
              Get in touch
            </Button>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

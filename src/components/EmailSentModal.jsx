import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Glassmorphism success popup shown after the Contact form sends via
 * EmailJS. Auto-dismisses after a few seconds, or can be closed manually.
 */
export default function EmailSentModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          role="status"
          aria-live="polite"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
            className="flex w-full max-w-xs flex-col items-center gap-4 rounded-[1.75rem] border border-white/15 bg-white/10 p-8 text-center shadow-2xl shadow-black/40 backdrop-blur-2xl"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 16 }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-clay text-cream"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12.5 10 17l9-10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
            <div>
              <p className="text-lg font-medium text-ink">Email Sent</p>
              <p className="mt-1 text-sm text-ink-soft">
                Thanks for reaching out — expect a reply within minutes.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-sm font-medium text-clay underline-offset-4 hover:underline"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

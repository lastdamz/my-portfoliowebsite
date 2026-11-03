import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * Full-screen image viewer for gallery items. `item` is null when closed.
 */
export default function Lightbox({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-[1.5rem] bg-cream"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[70vh] w-full object-contain bg-black"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-ink"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col gap-2 p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-clay">
                {item.category}
              </span>
              <h3 className="text-xl text-ink">{item.title}</h3>
              {item.description && (
                <p className="text-sm text-ink-soft">{item.description}</p>
              )}
              {!item.isUpload && (
                <Link
                  to={`/portfolio/${item.id}`}
                  className="mt-2 text-sm font-medium text-clay underline-offset-4 hover:underline"
                >
                  View full case study →
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

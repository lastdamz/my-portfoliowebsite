import { forwardRef } from 'react'
import { motion } from 'framer-motion'

/**
 * Single gallery tile: image with a hover overlay showing title/category.
 * Clicking opens the item in the Lightbox. Every tile shares the same
 * aspect ratio by default so the grid gap stays even at every breakpoint.
 *
 * Forwards its ref because AnimatePresence's popLayout mode needs DOM
 * access to pin exiting cards in place — without it they jump around
 * the grid while fading out.
 */
const GalleryCard = forwardRef(function GalleryCard(
  { item, index = 0, onView, className = 'aspect-[4/5]' },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15, delay: 0 } }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className={`group relative overflow-hidden rounded-2xl bg-cream-soft ${className}`}
    >
      <button type="button" onClick={() => onView(item)} className="block h-full w-full">
        <img
          src={item.image}
          alt={`${item.title} — ${item.category}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <span className="text-xs font-medium uppercase tracking-[0.1em] text-clay opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {item.category}
          </span>
          <h3 className="mt-1 translate-y-2 text-base text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:text-lg">
            {item.title}
          </h3>
        </div>
      </button>
    </motion.div>
  )
})

export default GalleryCard

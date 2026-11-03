import { motion } from 'framer-motion'
import { values, portfolioGalleryImages } from '../data/siteData'

/**
 * "Why Work With Me" — a heading with a mixed grid of image tiles and
 * one solid highlighted tile, built from the studio's core values.
 */
export default function ApproachShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-md"
        >
          <span className="text-sm font-semibold text-clay">Why Work With Me</span>
          <h2 className="mt-2 text-4xl leading-[1.15] text-ink sm:text-5xl">
            Every Order Gets the Same Standard
          </h2>
        </motion.div>
        <p className="max-w-sm text-sm text-ink-soft">
          Four things every client can count on, whether it's a single flyer or a full brand
          package.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {values.map((item, index) => (
          <Tile key={item.title} item={item} image={portfolioGalleryImages[index]} index={index} />
        ))}
      </div>
    </section>
  )
}

function Tile({ item, image, index }) {
  const highlighted = index === 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[1.75rem] p-6 ${
        highlighted ? 'bg-clay' : ''
      }`}
    >
      {!highlighted && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        </>
      )}
      <h3 className={`relative text-xl ${highlighted ? 'text-ink' : 'text-white'}`}>
        {item.title}
      </h3>
      <p className={`relative mt-1 max-w-xs text-sm ${highlighted ? 'text-ink/80' : 'text-white/80'}`}>
        {item.description}
      </p>
    </motion.div>
  )
}

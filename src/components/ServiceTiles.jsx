import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from './Button'
import { serviceCatalog } from '../data/siteData'

/**
 * "Design Solutions Built to Grow With Your Brand" — heading + CTA
 * followed by a grid of service tiles, one rendered as a solid accent
 * card instead of an image.
 */
export default function ServiceTiles() {
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
          <span className="text-sm font-semibold text-clay">Services</span>
          <h2 className="mt-2 text-4xl leading-[1.15] text-ink sm:text-5xl">
            Design Solutions Built to Grow Your Brand
          </h2>
        </motion.div>
        <Button to="/services" className="shrink-0">
          Visit the Store
        </Button>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {serviceCatalog.map((tile, index) => {
          const highlighted = index === 1
          return (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl p-6 ${
                highlighted ? 'bg-clay' : ''
              }`}
            >
              {!highlighted && (
                <>
                  <img src={tile.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </>
              )}
              <Link to={`/services#${tile.id}`} className="relative">
                <h3 className={`text-lg ${highlighted ? 'text-ink' : 'text-white'}`}>
                  {tile.title}
                </h3>
              </Link>
              <p
                className={`relative mt-1 max-w-xs text-sm ${
                  highlighted ? 'text-ink/80' : 'text-white/80'
                }`}
              >
                {tile.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

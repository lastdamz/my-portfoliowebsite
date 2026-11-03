import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { bioTeaser, siteMeta } from '../data/siteData'

/**
 * Bio teaser card: portrait on one side, heading + blurb + "Read more"
 * link on the other.
 */
export default function BioTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="grid gap-8 rounded-[2rem] bg-cream-soft p-8 md:grid-cols-[0.9fr_1.1fr] md:p-14"
      >
        <div className="overflow-hidden rounded-2xl">
          <img src={bioTeaser.image} alt={bioTeaser.alt} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <span className="font-display text-5xl leading-none text-clay/40" aria-hidden="true">
            "
          </span>
          <span className="-mt-6 text-sm font-semibold text-clay">Behind the Work</span>
          <h2 className="text-3xl leading-[1.2] text-ink sm:text-4xl">{bioTeaser.heading}</h2>
          <p className="text-sm leading-relaxed text-ink-soft">{bioTeaser.description}</p>
          <div className="mt-2 flex items-center gap-3 border-t border-line pt-4">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-ink">{siteMeta.name}</span>
              <span className="text-xs text-muted">{siteMeta.role}</span>
            </div>
            <Link
              to="/about"
              className="ml-auto text-sm font-medium text-clay underline-offset-4 hover:underline"
            >
              Read more →
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'
import Button from './Button'
import { portfolioGalleryImages, processLabels } from '../data/siteData'

/**
 * "Behind the Designs" showcase: centered heading + CTA, a scrolling
 * 3D image carousel, and a 4-label process row underneath.
 */
export default function PortfolioShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="overflow-hidden rounded-[2rem] bg-cream-soft pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 text-center"
        >
          <span className="text-base font-semibold text-clay">Behind the Designs</span>
          <h2 className="text-4xl leading-[1.15] text-ink sm:text-5xl">
            Curious What Else I've Created?
          </h2>
          <p className="mt-1 text-sm text-ink-soft">
            Explore more brand identities, packaging, and digital design work in my extended
            portfolio.
          </p>

          <Button to="/portfolio" variant="dark" className="mt-3">
            See more Work
          </Button>
        </motion.div>

        <div className="mt-10">
          <ImageCarousel images={portfolioGalleryImages} />
        </div>

        <ul className="mx-auto grid max-w-3xl grid-cols-2 gap-y-8 px-6 sm:grid-cols-4">
          {processLabels.map((label, index) => (
            <li key={label} className="text-center">
              <span className="text-sm font-semibold text-clay">
                #{String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-1 text-sm text-ink-soft">{label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

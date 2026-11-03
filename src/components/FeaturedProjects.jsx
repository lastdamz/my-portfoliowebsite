import { motion } from 'framer-motion'
import FeaturedProjectCard from './FeaturedProjectCard'
import { portfolioItems } from '../data/siteData'

/**
 * "Design That Leaves a Lasting Impression" — one large featured
 * portfolio piece followed by two smaller ones side by side.
 */
export default function FeaturedProjects() {
  const [featured, second, third] = portfolioItems

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="text-sm font-semibold text-clay">Featured Work</span>
        <h2 className="mt-2 text-4xl leading-[1.15] text-ink sm:text-5xl">
          Design That Leaves a Lasting Impression
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-6">
        <FeaturedProjectCard project={featured} large />
        <div className="grid gap-6 sm:grid-cols-2">
          <FeaturedProjectCard project={second} />
          <FeaturedProjectCard project={third} />
        </div>
      </div>
    </section>
  )
}

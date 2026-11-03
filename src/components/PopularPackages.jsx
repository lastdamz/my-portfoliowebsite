import { motion } from 'framer-motion'
import ServicePackageCard from './ServicePackageCard'
import Button from './Button'
import { serviceCatalog } from '../data/siteData'

const featuredServiceIds = ['logo-design', 'social-media-design', 'ux-ui-design']

/**
 * "Popular Packages" — a teaser of one popular package from three
 * different service categories, each orderable straight from Home.
 */
export default function PopularPackages() {
  const featured = featuredServiceIds
    .map((id) => serviceCatalog.find((service) => service.id === id))
    .filter(Boolean)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-xl text-center"
      >
        <span className="text-sm font-semibold text-clay">The Store</span>
        <h2 className="mt-2 text-4xl leading-[1.15] text-ink sm:text-5xl">Popular Packages</h2>
        <p className="mt-4 text-sm text-ink-soft">
          A few of the most-ordered packages. Browse the full store for every service and price.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {featured.map((service, index) => {
          const pkg = service.packages.find((p) => p.popular) || service.packages[0]
          return (
            <ServicePackageCard key={service.id} serviceTitle={service.title} pkg={pkg} index={index} />
          )
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Button to="/services">See All Services</Button>
      </div>
    </section>
  )
}

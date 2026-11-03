import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from './Button'
import { serviceCatalog } from '../data/siteData'

/**
 * "What I Can Design For You" — heading + CTA, then an image-led grid of
 * service categories. No pricing here by design — this section sells the
 * craft, not the checkout; pricing lives on the Services/store page.
 */
export default function ServicesSection() {
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
            What I Can Design For You
          </h2>
        </motion.div>
        <Button to="/services" className="shrink-0">
          Browse the Store
        </Button>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCatalog.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <Link
              to={`/services#${service.id}`}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.5rem]"
            >
              <img
                src={service.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:from-black/95" />

              <span className="absolute left-6 top-6 font-display text-sm text-white/50">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative p-6">
                <h3 className="text-xl text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-clay opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Explore
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

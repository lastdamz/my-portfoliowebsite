import { motion } from 'framer-motion'
import { testimonials } from '../data/siteData'

/**
 * Client quote cards — social proof between the portfolio and the store.
 */
export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-xl text-center"
      >
        <span className="text-sm font-semibold text-clay">Client Words</span>
        <h2 className="mt-2 text-4xl leading-[1.15] text-ink sm:text-5xl">
          What Clients Are Saying
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex flex-col gap-4 rounded-2xl bg-cream-soft p-7"
          >
            <span className="text-3xl text-clay" aria-hidden="true">
              "
            </span>
            <blockquote className="text-sm leading-relaxed text-ink-soft">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-auto text-sm">
              <span className="font-medium text-ink">{testimonial.name}</span>
              <span className="text-ink-soft"> — {testimonial.role}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}

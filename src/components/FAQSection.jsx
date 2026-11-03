import { motion } from 'framer-motion'
import Button from './Button'
import FAQAccordion from './FAQAccordion'
import { faqs } from '../data/siteData'

/**
 * Two-column FAQ block: label/heading/subtitle + CTA on one side, the
 * accordion list on the other. Reused on Home, Projects, and Contact
 * with different copy.
 */
export default function FAQSection({
  label = 'Frequently Asked Questions',
  title = 'Answers to Common Questions',
  subtitle = "A few things people usually ask before we start working together.",
  ctaLabel = 'Contact me',
  ctaTo = '/contact',
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-sm font-semibold text-clay">{label}</span>
          <h2 className="mt-2 text-4xl leading-[1.15] text-ink sm:text-5xl">{title}</h2>
          <p className="mt-4 max-w-sm text-sm text-ink-soft">{subtitle}</p>
          <Button to={ctaTo} className="mt-6">
            {ctaLabel}
          </Button>
        </motion.div>

        <FAQAccordion items={faqs} />
      </div>
    </section>
  )
}

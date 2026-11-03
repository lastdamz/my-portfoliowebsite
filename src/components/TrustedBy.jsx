import { motion } from 'framer-motion'
import LogoMarquee from './LogoMarquee'
import { trustedLogos } from '../data/siteData'

/**
 * "Trusted by brands I've helped shape" — label on the left, an
 * auto-scrolling strip of client marks on the right.
 */
export default function TrustedBy() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
      >
        <span className="w-40 shrink-0 text-sm font-medium leading-snug text-ink-soft">
          Trusted by brands I've helped shape
        </span>
        <div className="min-w-0 flex-1">
          <LogoMarquee names={trustedLogos} />
        </div>
      </motion.div>
    </section>
  )
}

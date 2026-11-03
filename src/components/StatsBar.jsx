import { motion } from 'framer-motion'
import { stats } from '../data/siteData'

/**
 * Quick-scan trust bar — hard numbers a first-time visitor can verify
 * social proof from in under two seconds, before reading anything else.
 */
export default function StatsBar() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 pb-4 md:px-6">
      <div className="grid grid-cols-2 gap-6 rounded-[1.75rem] bg-cream-soft px-6 py-8 sm:grid-cols-4 sm:px-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="text-center sm:text-left"
          >
            <p className="font-display text-3xl text-clay sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-xs text-ink-soft sm:text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

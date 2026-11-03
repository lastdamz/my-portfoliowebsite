import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { portfolioItems } from '../data/siteData'

/**
 * "Latest Work & Collaborations" — a compact row-based list variant
 * of the portfolio data, each row linking through to the Portfolio page.
 */
export default function LatestProjectsList() {
  const items = portfolioItems.slice(0, 4)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-sm font-semibold text-clay">Recent Work</span>
          <h2 className="mt-2 text-4xl leading-[1.15] text-ink sm:text-5xl">
            Latest Work &amp; Collaborations
          </h2>
          <p className="mt-4 max-w-sm text-sm text-ink-soft">
            A look at what I've been working on lately — systems, stories, and creative
            partnerships.
          </p>
        </motion.div>

        <ul className="flex flex-col divide-y divide-line border-t border-line">
          {items.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                to={`/portfolio/${project.id}`}
                className="group flex items-center justify-between gap-4 py-6"
              >
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-clay">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-lg text-ink">{project.title}</h3>
                </div>
                <span className="flex shrink-0 items-center gap-2 rounded-full border border-ink/20 py-1.5 pl-4 pr-1.5 text-sm text-ink transition-colors group-hover:border-clay">
                  View
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-clay text-cream">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3 13 13 3M13 3H5M13 3v8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

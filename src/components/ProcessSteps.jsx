import { motion } from 'framer-motion'
import { processSteps } from '../data/siteData'

/**
 * "My Process, Step by Step" — a connected vertical timeline with
 * numbered nodes, rather than a plain divided list.
 */
export default function ProcessSteps() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
      <div className="mb-16 text-center">
        <span className="text-sm font-semibold text-clay">My Process</span>
        <h2 className="mt-2 text-4xl text-ink sm:text-5xl">Step by Step</h2>
      </div>

      <ol className="relative flex flex-col gap-12">
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-clay/60 via-line to-transparent sm:left-7"
        />
        {processSteps.map((step, index) => (
          <motion.li
            key={step.number}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative flex gap-6 pl-0 sm:gap-8"
          >
            <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream-soft font-display text-lg text-clay ring-4 ring-page sm:h-14 sm:w-14">
              {step.number}
            </span>
            <div className="pt-1">
              <h3 className="text-lg text-ink sm:text-xl">{step.title}</h3>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}

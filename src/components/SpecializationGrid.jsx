import { motion } from 'framer-motion'
import { specializations } from '../data/siteData'

/**
 * "What I Specialize In" — three showcase tiles with a poster image and
 * a title/description overlay.
 */
export default function SpecializationGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-xl text-center"
      >
        <span className="text-sm font-semibold text-clay">Specialization</span>
        <h2 className="mt-2 text-4xl leading-[1.15] text-ink sm:text-5xl">What I Specialize In</h2>
      </motion.div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {specializations.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl"
          >
            <img
              src={item.poster}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="relative p-5">
              <h3 className="text-lg text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-white/80">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

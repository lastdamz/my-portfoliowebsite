import { motion } from 'framer-motion'

/**
 * Full-bleed rounded image hero used at the top of About/Projects/Contact.
 * `tint` picks a duotone gradient direction so each page reads distinctly.
 */
const TINTS = {
  orange: 'from-clay/70 via-orange-800/50 to-black/70',
  violet: 'from-fuchsia-600/60 via-purple-800/50 to-black/70',
  teal: 'from-teal-600/60 via-slate-800/50 to-black/70',
}

export default function PageHero({ label, title, subtitle, image, alt, tint = 'orange' }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 md:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[2rem] p-8 sm:min-h-[480px] md:p-14"
      >
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover grayscale contrast-125"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${TINTS[tint]} mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

        <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              {label}
            </span>
            <h1 className="mt-3 text-5xl text-white sm:text-6xl md:text-7xl">{title}</h1>
          </div>
          {subtitle && (
            <p className="max-w-xs text-sm leading-relaxed text-white/85 sm:text-right">
              {subtitle}
            </p>
          )}
        </div>
      </motion.div>
    </section>
  )
}

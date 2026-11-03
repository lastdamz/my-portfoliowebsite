import { motion } from 'framer-motion'
import Button from './Button'

const TINTS = {
  orange: 'from-clay/70 via-orange-800/50 to-black/70',
  violet: 'from-fuchsia-600/60 via-purple-800/50 to-black/70',
  teal: 'from-teal-600/60 via-slate-800/50 to-black/70',
}

/**
 * Full-bleed rounded image banner with a centered label/heading/subtitle
 * and a CTA button. Reused across pages wherever the design calls for a
 * "let's talk" break between content sections.
 */
export default function CTABanner({
  label,
  title,
  subtitle,
  image,
  alt,
  tint = 'orange',
  ctaLabel = 'Get in touch',
  ctaTo = '/contact',
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative isolate flex min-h-[380px] flex-col items-center justify-center gap-4 overflow-hidden rounded-[2rem] p-8 text-center sm:min-h-[440px] md:p-14"
      >
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover grayscale contrast-125"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${TINTS[tint]} mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

        <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-clay">
          {label}
        </span>
        <h2 className="relative max-w-lg text-4xl leading-[1.15] text-white sm:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="relative max-w-md text-sm leading-relaxed text-white/80">{subtitle}</p>
        )}
        <div className="relative mt-2">
          <Button to={ctaTo}>{ctaLabel}</Button>
        </div>
      </motion.div>
    </section>
  )
}

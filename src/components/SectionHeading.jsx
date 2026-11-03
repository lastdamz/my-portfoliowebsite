import { motion } from 'framer-motion'

/**
 * Reusable label + title + subtitle pattern used across most sections.
 * `align` controls text alignment; `light` swaps to light text for dark sections.
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  light = false,
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const textColor = light ? 'text-cream' : 'text-ink'
  const mutedColor = light ? 'text-cream/70' : 'text-ink-soft'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}
    >
      {label && (
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
          {label}
        </span>
      )}
      {title && (
        <h2 className={`text-3xl font-normal sm:text-4xl md:text-5xl ${textColor}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`text-base leading-relaxed sm:text-lg ${mutedColor}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

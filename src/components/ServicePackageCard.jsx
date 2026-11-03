import { motion } from 'framer-motion'
import Button from './Button'
import { buildWhatsAppLink, buildEmailLink } from '../utils/orderLinks'

/**
 * A single orderable package within a service category. Both CTAs open a
 * pre-filled WhatsApp chat or email draft with the service/package details.
 */
export default function ServicePackageCard({ serviceTitle, pkg, index = 0 }) {
  const whatsappHref = buildWhatsAppLink({ serviceTitle, packageName: pkg.name, price: pkg.price })
  const emailHref = buildEmailLink({ serviceTitle, packageName: pkg.name, price: pkg.price })

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`relative flex h-full min-w-0 flex-col gap-5 overflow-hidden rounded-[1.75rem] p-6 pt-8 transition-shadow duration-300 sm:p-7 sm:pt-9 ${
        pkg.popular
          ? 'bg-gradient-to-b from-clay to-orange-700 text-cream shadow-2xl shadow-clay/30 lg:scale-[1.03]'
          : 'border border-line bg-cream-soft text-ink hover:shadow-xl hover:shadow-black/20'
      }`}
    >
      {pkg.popular && (
        <span className="absolute left-1/2 top-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-cream shadow-md sm:px-4 sm:py-1.5 sm:text-xs">
          Most Popular
        </span>
      )}

      <div className="min-w-0">
        <h3 className="truncate text-lg font-medium">{pkg.name}</h3>
        <p className={`mt-1 text-sm ${pkg.popular ? 'text-cream/80' : 'text-ink-soft'}`}>
          Turnaround: {pkg.turnaround}
        </p>
      </div>

      <p className="flex flex-wrap items-baseline gap-1">
        <span className="text-base font-medium opacity-80 sm:text-lg">$</span>
        <span className="font-display text-4xl leading-none sm:text-5xl">{pkg.price}</span>
        <span className="text-sm font-normal opacity-70">/ order</span>
      </p>

      <span
        className={`block h-px w-full ${pkg.popular ? 'bg-cream/20' : 'bg-line'}`}
        aria-hidden="true"
      />

      <ul className="flex flex-col gap-3 text-sm">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={`mt-0.5 shrink-0 ${pkg.popular ? 'text-cream' : 'text-clay'}`}
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
              <path
                d="M5 8.2 7 10.2 11 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="min-w-0 break-words">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-2.5 pt-2">
        <Button
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          variant={pkg.popular ? 'dark' : 'primary'}
          className="w-full justify-center"
        >
          Order via WhatsApp
        </Button>
        <a
          href={emailHref}
          className={`flex w-full items-center justify-center gap-2 rounded-full border py-3 text-sm font-medium transition-colors ${
            pkg.popular
              ? 'border-cream/40 text-cream hover:border-cream'
              : 'border-line text-ink-soft hover:border-clay hover:text-clay'
          }`}
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="m2 4 6 4.5L14 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Order via Email
        </a>
      </div>
    </motion.div>
  )
}

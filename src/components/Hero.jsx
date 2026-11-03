import { motion } from 'framer-motion'
import Button from './Button'
import { heroServices, portfolioItems, siteMeta } from '../data/siteData'
import { buildWhatsAppLink } from '../utils/orderLinks'

const floatingPieces = portfolioItems.slice(0, 3)

/**
 * Home hero: a typographic, motion-led composition — animated gradient
 * glow behind the studio's core statement, with real work samples
 * floating as proof rather than a stock photo.
 */
export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 md:px-6">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-cream-soft px-6 py-16 sm:px-10 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 animate-drift rounded-full bg-clay/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 animate-drift rounded-full bg-orange-700/20 blur-3xl"
          style={{ animationDelay: '3s' }}
        />

        <div className="relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" aria-hidden="true" />
              Graphic Design Studio
            </span>

            <h1 className="mt-6 text-4xl leading-[1.1] text-ink sm:text-5xl md:text-6xl">
              I help small businesses look{' '}
              <span className="text-clay">premium</span> so they can attract
              customers online.
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Logos, flyers, social media graphics, and cover art built to make a
              small business look like it belongs at the top of its industry.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/portfolio">View My Work</Button>
              <Button href={buildWhatsAppLink({})} target="_blank" rel="noreferrer" variant="secondary">
                Get a Free Quote
              </Button>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-8">
              {heroServices.map((service) => (
                <li key={service.number} className="text-sm text-ink-soft">
                  <span className="mr-2 text-clay">{service.number}</span>
                  {service.title}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="relative hidden h-[420px] lg:block">
            {floatingPieces.map((piece, index) => (
              <motion.div
                key={piece.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: 'easeOut' }}
                className="absolute w-56 animate-float overflow-hidden rounded-2xl shadow-2xl shadow-black/40"
                style={{
                  top: `${index * 26}%`,
                  left: `${index * 22}%`,
                  transform: `rotate(${(index - 1) * 6}deg)`,
                  animationDelay: `${index * 0.6}s`,
                  zIndex: floatingPieces.length - index,
                }}
              >
                <img
                  src={piece.image}
                  alt={`${piece.title} preview`}
                  className="aspect-[4/3] w-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

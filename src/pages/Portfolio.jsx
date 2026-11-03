import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import GalleryCard from '../components/GalleryCard'
import Lightbox from '../components/Lightbox'
import CTABanner from '../components/CTABanner'
import FAQSection from '../components/FAQSection'
import { pageHeroes, portfolioItems, serviceCatalog, ctaBanners } from '../data/siteData'

const filters = ['All', ...serviceCatalog.map((service) => service.title)]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [viewing, setViewing] = useState(null)

  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeFilter),
    [activeFilter],
  )

  return (
    <>
      <PageHero
        label="Selected Work"
        title="Portfolio"
        subtitle="Logos, flyers, banners, social media graphics, and cover art — a look at the work."
        image={pageHeroes.portfolio.image}
        alt={pageHeroes.portfolio.alt}
        tint="teal"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
          {filters.map((filter) => {
            const active = activeFilter === filter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative rounded-full border px-4 py-2 text-sm transition-colors ${
                  active
                    ? 'border-transparent text-cream'
                    : 'border-line text-ink-soft hover:border-clay hover:text-clay'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="portfolio-filter-pill"
                    className="absolute inset-0 rounded-full bg-clay shadow-lg shadow-clay/20"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative">{filter}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <GalleryCard key={item.id} item={item} index={index} onView={setViewing} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-sm text-ink-soft">
            No pieces in this category yet.
          </p>
        )}
      </section>

      <CTABanner
        label="Get in Touch"
        title="Ready to Order Your Design?"
        subtitle="Browse the store, pick a package, and get a reply within minutes — not days."
        image={ctaBanners.portfolio.image}
        alt={ctaBanners.portfolio.alt}
        ctaLabel="Browse Services"
        ctaTo="/services"
      />

      <FAQSection label="Frequently Asked Questions" title="Answers to Common Questions" />

      <Lightbox item={viewing} onClose={() => setViewing(null)} />
    </>
  )
}

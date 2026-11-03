import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import ServicePackageCard from '../components/ServicePackageCard'
import FAQSection from '../components/FAQSection'
import { pageHeroes, serviceCatalog } from '../data/siteData'

export default function Services() {
  const [activeId, setActiveId] = useState(serviceCatalog[0].id)
  const sectionRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <PageHero
        label="The Store"
        title="Services"
        subtitle="Pick a service, choose a package, and order directly — no forms, no waiting."
        image={pageHeroes.services.image}
        alt={pageHeroes.services.alt}
        tint="orange"
      />

      <nav
        aria-label="Jump to service"
        className="sticky top-[65px] z-30 border-b border-line bg-page/90 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-4 md:px-6">
          {serviceCatalog.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${
                activeId === service.id
                  ? 'bg-clay text-cream'
                  : 'border border-line text-ink-soft hover:border-clay hover:text-clay'
              }`}
            >
              {service.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="flex flex-col gap-6 py-6">
        {serviceCatalog.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            index={index}
            registerRef={(el) => (sectionRefs.current[service.id] = el)}
          />
        ))}
      </div>

      <FAQSection
        label="Before You Order"
        title="Answers to Common Questions"
        subtitle="A few things worth knowing before you send that first message."
      />
    </>
  )
}

function ServiceSection({ service, index, registerRef }) {
  const reversed = index % 2 === 1

  const intro = (
    <motion.div
      key="intro"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mb-6 overflow-hidden rounded-2xl">
        <img
          src={service.image}
          alt={`Sample of ${service.title} work`}
          className="h-auto w-full"
          loading="lazy"
        />
      </div>
      <span className="text-sm font-semibold text-clay">
        #{String(index + 1).padStart(2, '0')} — {service.tagline}
      </span>
      <h2 className="mt-2 text-3xl leading-[1.15] text-ink sm:text-4xl">{service.title}</h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">{service.description}</p>
    </motion.div>
  )

  const packages = (
    <div key="packages" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {service.packages.map((pkg, pkgIndex) => (
        <ServicePackageCard key={pkg.name} serviceTitle={service.title} pkg={pkg} index={pkgIndex} />
      ))}
    </div>
  )

  // The packages grid always needs the wider track — rather than visually
  // flipping with CSS `order` (which leaves grid-template-columns track
  // widths assigned by source order, not visual order), swap the actual
  // JSX order and the column-width string together so the wide track
  // always follows the packages grid.
  return (
    <section id={service.id} ref={registerRef} className="mx-auto w-full max-w-7xl scroll-mt-32 px-4 py-10 md:px-6">
      <div className="rounded-[2rem] bg-cream-soft p-6 sm:p-8 lg:p-14">
        <div
          className={`grid gap-10 lg:items-center ${
            reversed ? 'lg:grid-cols-[1.2fr_0.8fr]' : 'lg:grid-cols-[0.8fr_1.2fr]'
          }`}
        >
          {reversed ? [packages, intro] : [intro, packages]}
        </div>
      </div>
    </section>
  )
}

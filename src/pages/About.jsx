import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import CTABanner from '../components/CTABanner'
import StatsBar from '../components/StatsBar'
import LatestProjectsList from '../components/LatestProjectsList'
import ServiceTiles from '../components/ServiceTiles'
import Testimonials from '../components/Testimonials'
import { motion } from 'framer-motion'
import { pageHeroes, siteMeta, awards, ctaBanners } from '../data/siteData'

export default function About() {
  return (
    <>
      <PageHero
        label={siteMeta.secondaryRole}
        title="About"
        subtitle="The person behind the work."
        image={pageHeroes.about.image}
        alt={pageHeroes.about.alt}
        tint="violet"
      />

      <StatsBar />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <SectionHeading label="Who I Am" title="Design with Purpose and Personality" />
          <div className="flex flex-col gap-4 text-ink-soft">
            <p>
              I'm {siteMeta.name}, a {siteMeta.role.toLowerCase()} and{' '}
              {siteMeta.secondaryRole.toLowerCase()} who helps small businesses and independent
              artists look as credible as the work they actually do. Every order — logo, flyer,
              interface, or cover art — gets treated like a real design project, not a
              template filled in with new text.
            </p>
            <p>
              Based in Zimbabwe and working with clients everywhere, I care less about a single
              flashy piece and more about building something a business can keep using as it
              grows — consistent, on-brand, and delivered fast enough to actually be useful.
            </p>
            <div>
              <Button to="/contact" variant="secondary">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServiceTiles />

      <LatestProjectsList />

      <Testimonials />

      <CTABanner
        label="Let's Work Together"
        title="Ready to Build Something That Looks the Part?"
        subtitle="If you're looking for thoughtful design and a fast, collaborative process, I'd love to hear from you."
        image={ctaBanners.aboutReady.image}
        alt={ctaBanners.aboutReady.alt}
        tint="violet"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <SectionHeading
          label="Awards & Recognition"
          title="Proud Moments, Shared Success"
          subtitle="A few highlights from the design communities and clients who've recognized the work."
        />
        <ul className="mt-10 divide-y divide-line border-t border-line">
          {awards.map((award, index) => (
            <motion.li
              key={award.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-clay">
                  {award.label}
                </span>
                <h3 className="mt-1 text-lg text-ink">{award.title}</h3>
                <p className="mt-1 max-w-md text-sm text-ink-soft">{award.description}</p>
              </div>
              <span className="text-sm text-muted">{award.year}</span>
            </motion.li>
          ))}
        </ul>
      </section>

      <CTABanner
        label="Get in Touch"
        title="Let's Bring Your Project to Life"
        subtitle="Ready to make something great together? Whether you're starting fresh or leveling up, I'm here to help."
        image={pageHeroes.contact.image}
        alt={pageHeroes.contact.alt}
        tint="teal"
      />
    </>
  )
}

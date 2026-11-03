import { useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import ProjectGrid from '../components/ProjectGrid'
import CTABanner from '../components/CTABanner'
import FAQSection from '../components/FAQSection'
import { portfolioItems, ctaBanners } from '../data/siteData'

/**
 * Full case-study view for a single portfolio piece, reached by clicking
 * "View" on any work card. Shows the brief, a goal statement, an image
 * gallery, and a few other pieces to keep exploring.
 */
export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = portfolioItems.find((item) => item.id === projectId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  if (!project) {
    return <Navigate to="/portfolio" replace />
  }

  const moreProjects = portfolioItems.filter((item) => item.id !== project.id).slice(0, 3)

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-6 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 py-6"
        >
          <div className="flex flex-wrap gap-8 text-sm">
            <Meta label="Client" value={project.client} />
            <Meta label="Category" value={project.category} />
            <Meta label="Year" value={project.year} />
          </div>
          <Button to="/portfolio" variant="secondary">
            All Work
          </Button>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-sm font-semibold text-clay">{project.year}</span>
          <h1 className="mt-2 text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl">
            {project.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 grid gap-6 border-t border-line pt-8 md:grid-cols-[1.4fr_1fr] md:items-start"
        >
          <p className="text-lg leading-relaxed text-ink-soft">{project.description}</p>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Button to="/services">Order This Style</Button>
            <Button to="/portfolio" variant="secondary">
              View All
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem]"
        >
          <img
            src={project.image}
            alt={`Primary cover image for the ${project.title} project`}
            className="h-[420px] w-full object-cover sm:h-[520px]"
          />
        </motion.div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 sm:grid-cols-[auto_1fr]"
        >
          <span className="mt-3 block h-0.5 w-10 bg-clay sm:mt-2" aria-hidden="true" />
          <div>
            <span className="text-sm font-semibold text-clay">Goal</span>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">{project.goal}</p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {project.gallery.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt={`${project.title} detail shot ${index + 1}`}
                className="h-auto w-full"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-semibold text-clay">More Projects</span>
            <h2 className="mt-2 text-4xl leading-[1.15] text-ink sm:text-5xl">Explore More Work</h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm text-ink-soft">Curious to see what else I've been working on?</p>
            <Button to="/portfolio" className="mt-4">
              See more
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <ProjectGrid projects={moreProjects} />
        </div>
      </section>

      <CTABanner
        label="Get in Touch"
        title="Ready to Order Your Design?"
        subtitle="Browse the store, pick a package, and get a reply within hours — not days."
        image={ctaBanners.portfolio.image}
        alt={ctaBanners.portfolio.alt}
        ctaLabel="Browse Services"
        ctaTo="/services"
      />

      <FAQSection label="Frequently Asked Questions" title="Answers to Common Questions" />
    </>
  )
}

function Meta({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.15em] text-muted">{label}</p>
      <p className="mt-1 text-ink">{value}</p>
    </div>
  )
}

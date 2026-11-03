import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * Single project preview card: image, title, category/description, and a
 * "View" link. Used inside ProjectGrid on the Home and Projects pages.
 */
export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex flex-col"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-cream-soft">
        <img
          src={project.image}
          alt={`Cover image for the ${project.title} project`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg text-ink">{project.title}</h3>
          <p className="mt-1 text-sm text-ink-soft">{project.category}</p>
        </div>
        <Link
          to={`/portfolio/${project.id}`}
          className="mt-1 flex items-center gap-2 rounded-full border border-ink/20 py-1 pl-3 pr-1 text-sm font-medium text-ink transition-colors group-hover:border-clay"
        >
          View
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-clay text-cream">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 13 13 3M13 3H5M13 3v8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </motion.article>
  )
}

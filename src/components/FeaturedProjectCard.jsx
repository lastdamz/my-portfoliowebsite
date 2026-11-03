import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * Large image-led project card with a title/description overlay and a
 * "View" link. Used for standout project placements on Home and Projects.
 */
export default function FeaturedProjectCard({ project, large = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-[2rem]"
    >
      <img
        src={project.image}
        alt={`Cover image for the ${project.title} project`}
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
          large ? 'h-[420px] sm:h-[480px]' : 'h-72'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {project.category && (
        <span className="absolute left-6 top-6 rounded-full bg-black/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-white backdrop-blur-sm">
          {project.category}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
        <div>
          {project.client && (
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-clay">
              Client — {project.client}
            </p>
          )}
          <h3 className="mt-1 text-2xl text-white">{project.title}</h3>
          <p className="mt-1 max-w-sm text-sm text-white/75">{project.description}</p>
        </div>
        <Link
          to={`/portfolio/${project.id}`}
          className="flex shrink-0 items-center gap-2 rounded-full bg-cream py-1.5 pl-4 pr-1.5 text-sm font-medium text-ink"
        >
          View
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-clay text-cream">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 13 13 3M13 3H5M13 3v8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </motion.div>
  )
}

import ProjectCard from './ProjectCard'

/**
 * Responsive grid of ProjectCards. `limit` trims the list for teaser
 * placements (e.g. Home page), leave unset to show everything.
 */
export default function ProjectGrid({ projects, limit }) {
  const items = limit ? projects.slice(0, limit) : projects

  return (
    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}

import SectionHeading from './SectionHeading'
import Button from './Button'
import { introPreviewImages } from '../data/siteData'

/**
 * "Behind the Designs" intro teaser: heading + bio blurb + CTA on one
 * side, three grayscale preview shots on the other.
 */
export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="rounded-[2rem] bg-cream-soft p-8 md:p-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Behind the Designs"
            title="Shaping experiences that make life simpler"
            subtitle="I'm a designer focused on building clean, intuitive brand systems that solve real business problems — not just decoration."
          />
          <Button to="/about" variant="secondary" className="shrink-0">
            Let's build something meaningful
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4">
          {introPreviewImages.map((src, index) => (
            <div key={src + index} className="aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src={src}
                alt="Detail shot from a recent brand project"
                className="h-full w-full object-cover grayscale transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

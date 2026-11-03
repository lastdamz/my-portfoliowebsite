import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import StatsBar from '../components/StatsBar'
import AboutPreview from '../components/AboutPreview'
import FeaturedProjects from '../components/FeaturedProjects'
import ApproachShowcase from '../components/ApproachShowcase'
import ServicesSection from '../components/ServicesSection'
import CTABanner from '../components/CTABanner'
import ProcessSteps from '../components/ProcessSteps'
import PortfolioShowcase from '../components/PortfolioShowcase'
import Testimonials from '../components/Testimonials'
import BioTeaser from '../components/BioTeaser'
import PopularPackages from '../components/PopularPackages'
import SpecializationGrid from '../components/SpecializationGrid'
import FAQSection from '../components/FAQSection'
import { ctaBanners } from '../data/siteData'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <StatsBar />
      <AboutPreview />
      <FeaturedProjects />
      <ApproachShowcase />
      <ServicesSection />
      <CTABanner
        label="Start Your Order"
        title="Have a Project in Mind?"
        subtitle="Pick a service, choose a package, and get a reply within minutes — not days."
        image={ctaBanners.home.image}
        alt={ctaBanners.home.alt}
        ctaLabel="Browse Services"
        ctaTo="/services"
      />
      <ProcessSteps />
      <PortfolioShowcase />
      <Testimonials />
      <BioTeaser />
      <PopularPackages />
      <SpecializationGrid />
      <FAQSection />
    </>
  )
}

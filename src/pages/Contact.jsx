import { useState } from 'react'
import emailjs from '@emailjs/browser'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import CTABanner from '../components/CTABanner'
import FAQAccordion from '../components/FAQAccordion'
import SocialLinks from '../components/SocialLinks'
import EmailSentModal from '../components/EmailSentModal'
import { pageHeroes, ctaBanners, faqs, siteMeta } from '../data/siteData'
import { buildWhatsAppLink, buildEmailLink } from '../utils/orderLinks'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | error
  const [showSentModal, setShowSentModal] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        siteMeta.emailJs.serviceId,
        siteMeta.emailJs.templateId,
        {
          // Match these exact keys in the EmailJS template (see the
          // comment on `emailJs` in src/data/siteData.js for the
          // template text to paste into the EmailJS dashboard).
          name: form.name,
          email: form.email,
          message: form.message,
          title: `New enquiry from ${form.name}`,
          reply_to: form.email,
        },
        { publicKey: siteMeta.emailJs.publicKey },
      )
      setStatus('idle')
      setShowSentModal(true)
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Contact"
        subtitle="Have a project in mind? Send the details and get a reply within minutes."
        image={pageHeroes.contact.image}
        alt={pageHeroes.contact.alt}
        tint="teal"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              label="Contact Me"
              title="Let's Create Something Great"
              subtitle="In a hurry? Skip the form and message directly below — usually replies within minutes."
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={buildWhatsAppLink({})} target="_blank" rel="noreferrer">
                Message on WhatsApp
              </Button>
              <Button href={buildEmailLink({})} variant="secondary">
                Email Directly
              </Button>
            </div>
            <dl className="mt-8 flex flex-col gap-3 text-sm">
              <div>
                <dt className="text-muted">WhatsApp</dt>
                <dd className="mt-1 text-ink">{siteMeta.whatsappDisplay}</dd>
              </div>
              <div>
                <dt className="text-muted">Email</dt>
                <dd className="mt-1 text-ink">{siteMeta.email}</dd>
              </div>
            </dl>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <p className="text-sm text-ink-soft">
              Prefer to type out the details first? Fill this in — it goes straight to my
              inbox.
            </p>
            <Field
              id="name"
              label="Your name"
              placeholder="Jane Moyo"
              autoComplete="name"
              required
              value={form.name}
              onChange={handleChange}
            />
            <Field
              id="email"
              label="Your email"
              type="email"
              placeholder="jane@email.com"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
            />
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-ink-soft">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="rounded-xl border border-line bg-cream-soft px-4 py-3 text-ink placeholder:text-muted focus:border-clay focus:outline-none"
                placeholder="Tell me what you need designed, and any deadline."
              />
            </div>

            {status === 'error' && (
              <p role="alert" className="text-sm text-clay">
                Something went wrong sending that — please try WhatsApp or email directly above.
              </p>
            )}

            <Button type="submit" disabled={status === 'sending'} className="self-start">
              {status === 'sending' ? 'Sending…' : 'Submit'}
            </Button>
          </form>
        </div>
      </section>

      <CTABanner
        label="Start Your Order"
        title="Ready to Get Designed?"
        subtitle="Skip the form entirely — browse the store and order a package directly."
        image={ctaBanners.contact.image}
        alt={ctaBanners.contact.alt}
        ctaLabel="Browse Services"
        ctaTo="/services"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-sm font-semibold text-clay">Behind the Designs</span>
            <h2 className="mt-2 text-4xl leading-[1.15] text-ink sm:text-5xl">
              Fast Replies, No Middlemen
            </h2>
            <p className="mt-4 max-w-sm text-sm text-ink-soft">
              Every message goes straight to the designer — no account managers, no ticket
              queue.
            </p>
            <Button to="/about" className="mt-6">
              Read the Story
            </Button>
          </div>

          <FAQAccordion items={faqs} />
        </div>
      </section>

      <EmailSentModal open={showSentModal} onClose={() => setShowSentModal(false)} />
    </>
  )
}

function Field({ id, label, type = 'text', autoComplete, placeholder, value, onChange, required }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-ink-soft">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-xl border border-line bg-cream-soft px-4 py-3 text-ink placeholder:text-muted focus:border-clay focus:outline-none"
      />
    </div>
  )
}

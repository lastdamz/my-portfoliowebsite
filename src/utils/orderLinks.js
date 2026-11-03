import { siteMeta } from '../data/siteData'

/**
 * Builds a wa.me deep link with a pre-filled, well-structured message.
 * Used both for ordering a specific service package and for general
 * contact-form submissions (pass only `name`/`message` for the latter).
 */
export function buildWhatsAppLink({ serviceTitle, packageName, price, name, message } = {}) {
  const lines = ['Hi ' + siteMeta.name + ', I would like to place an order.', '']

  if (serviceTitle) {
    lines.push(`Service: ${serviceTitle}`)
  }
  if (packageName) {
    lines.push(`Package: ${packageName}${price ? ` ($${price})` : ''}`)
  }
  if (name) {
    lines.push(`Name: ${name}`)
  }

  lines.push('', 'Project details:')
  lines.push(message ? message : '[Describe your project, deadline, and any references here]')

  const text = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${siteMeta.whatsapp}?text=${text}`
}

/**
 * Builds a mailto: link with a detailed subject and body, for ordering a
 * service package or sending a general enquiry.
 */
export function buildEmailLink({ serviceTitle, packageName, price, name, email, message } = {}) {
  const subject = serviceTitle
    ? `New Order Inquiry — ${serviceTitle}${packageName ? ` (${packageName} Package)` : ''}`
    : `New Enquiry from ${name || 'website visitor'}`

  const lines = []
  if (serviceTitle) lines.push(`Service: ${serviceTitle}`)
  if (packageName) lines.push(`Package: ${packageName}${price ? ` ($${price})` : ''}`)
  if (name) lines.push(`Name: ${name}`)
  if (email) lines.push(`Email: ${email}`)
  lines.push('', 'Project details:')
  lines.push(message ? message : '[Describe your project, deadline, and any references here]')

  const body = encodeURIComponent(lines.join('\n'))
  return `mailto:${siteMeta.email}?subject=${encodeURIComponent(subject)}&body=${body}`
}

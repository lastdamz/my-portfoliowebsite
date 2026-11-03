// Central content for LAST OF A DYING BREED — graphic design studio & store.
// Swap copy/images/pricing here as the real business details firm up.

// Local images live under src/assets — import them like any other JS
// module and Vite bundles/optimizes them automatically. To add local
// images for another portfolio piece, follow the same pattern: create a
// folder under src/assets/portfolio/<slug>/, import the files here, and
// reference the imported variable (not a string path) in that item below.
import aboutCover from '../assets/portfolio/about/about-cover.jpg'
import contactpageCover from '../assets/portfolio/contacts/cover.jpeg'
import startYourOrder from '../assets/portfolio/contacts/workspace.jpg'
import flyerDesignCover from '../assets/portfolio/services/flyer1.jpg'
import companyProfileCover from '../assets/portfolio/services/companyprofile.jpeg'
import clausemaxCover from '../assets/portfolio/clausemax-platform/cover.jpg'
import clausemaxGallery1 from '../assets/portfolio/clausemax-platform/gallery-1.jpg'
import clausemaxGallery2 from '../assets/portfolio/clausemax-platform/gallery-2.jpg'
import clausemaxGallery3 from '../assets/portfolio/clausemax-platform/gallery-3.jpg'
import clausemaxGallery4 from '../assets/portfolio/clausemax-platform/gallery-4.jpg'
import orytheCover from '../assets/portfolio/orythe-scent/orythecover.jpg'
import orythe1 from '../assets/portfolio/orythe-scent/orythe1.png'
import orytheFlyer1 from '../assets/portfolio/orythe-scent/orythe-flyer-1.jpg'
import orythe2 from '../assets/portfolio/orythe-scent/orythe2.png'
import orytheSocial from '../assets/portfolio/orythe-scent/orythe-social.jpg'
import orythe3 from '../assets/portfolio/orythe-scent/orythe8.jpg'
import orythe4 from '../assets/portfolio/orythe-scent/orythe.jpg'
import orythe5 from '../assets/portfolio/orythe-scent/1.jpg'
import orythe6 from '../assets/portfolio/orythe-scent/ory.jpg'
import coverPadanga from '../assets/portfolio/paDanga/cover-padanga.jpg'
import padangaGallery1 from '../assets/portfolio/paDanga/gallery-1.jpg'
import padangaGallery2 from '../assets/portfolio/paDanga/gallery-2.jpg'
import padangaGallery3 from '../assets/portfolio/paDanga/gallery-3.jpg'
import padangaGallery4 from '../assets/portfolio/paDanga/gallery-4.jpg'
import shxwnCover from '../assets/portfolio/musicCover/cover.jpg'
import shxwnGallery from '../assets/portfolio/musicCover/$hxwn-Cover-art.jpg'
import shxwnGallery2 from '../assets/portfolio/musicCover/winning.jpg'
import shxwnGallery3 from '../assets/portfolio/musicCover/bankrolls.jpg'
import rotachCover from '../assets/portfolio/rotach/rotach-cover.jpg'
import rotachGallery1 from '../assets/portfolio/rotach/rotachyellow.jpg'
import rotachGallery2 from '../assets/portfolio/rotach/rotachred.jpg'
import cakesArenaCover from '../assets/portfolio/cakesArena/cakesArena-cover.jpg'
import cakesArenaGallery1 from '../assets/portfolio/cakesArena/cakesArena.jpg'
import cakesArenaGallery2 from '../assets/portfolio/cakesArena/cakes.jpg'
import arcCover from '../assets/portfolio/Arc Hardware/chiCover.jpg'
import arcGallery1 from '../assets/portfolio/Arc Hardware/arcGallery1.jpg'
import arcGallery2 from '../assets/portfolio/Arc Hardware/arcGallery2.jpg'
import arcGallery3 from '../assets/portfolio/Arc Hardware/arcGallery3.jpg'
import arcGallery4 from '../assets/portfolio/Arc Hardware/arcGallery4.jpg'
import arcGallery5 from '../assets/portfolio/Arc Hardware/arcGallery5.jpg'
import expendablesCover from '../assets/portfolio/Expendables Fitness/expendables-cover.jpg'
import expendablesGallery1 from '../assets/portfolio/Expendables Fitness/expendables1.jpg'
import expendablesGallery2 from '../assets/portfolio/Expendables Fitness/expendables2.jpg'
import expendablesGallery3 from '../assets/portfolio/Expendables Fitness/exp12.jpg'
import expendablesGallery4 from '../assets/portfolio/Expendables Fitness/exp1.jpg'
import expendablesGallery5 from '../assets/portfolio/Expendables Fitness/exp14.jpg'
import expendablesGallery6 from '../assets/portfolio/Expendables Fitness/exp15.jpg'
import balticCover from '../assets/portfolio/balticSea/balticsea-cover.jpg'
import balticGallery1 from '../assets/portfolio/balticSea/balticexplorewith.jpg'
import balticGallery2 from '../assets/portfolio/balticSea/schengen.jpg'
import balticGallery3 from '../assets/portfolio/balticSea/baltic1.jpg'
import balticGallery4 from '../assets/portfolio/balticSea/baltic2.jpg'
import balticGallery5 from '../assets/portfolio/balticSea/baltic3.jpg'
import balticGallery6 from '../assets/portfolio/balticSea/baltic4.jpg'
import eventFlyerCover from '../assets/portfolio/events/eventscover.jpg'





export const siteMeta = {
  name: 'LAST OF A DYING BREED',
  role: 'Graphic Designer',
  secondaryRole: 'Visual Storyteller',
  tagline: 'Design that gets noticed, remembered, and shared.',
  statement: 'I help small businesses look premium so they can attract customers online.',
  email: 'lastmadziwa61@gmail.com',
  whatsapp: '263778867501',
  whatsappDisplay: '+263 77 886 7501',
  location: 'Based in Zimbabwe, working with clients worldwide',
  // EmailJS lets the Contact form send straight to a real inbox (Gmail,
  // Outlook, etc.) with no backend server.
  //
  // The form sends these variables: {{name}}, {{email}}, {{message}},
  // {{title}}. Your EmailJS template must reference those exact names
  // (case-sensitive) or the values show up blank. To fix that:
  // 1. Go to the EmailJS dashboard > Email Templates > your template.
  // 2. Set the Subject field to:      {{title}}
  // 3. Set the Content field to:
  //      New enquiry from your website contact form.
  //
  //      Name: {{name}}
  //      Email: {{email}}
  //
  //      Message:
  //      {{message}}
  // 4. Under Settings on that same template, set "To Email" to your own
  //    inbox address, and "Reply To" to {{email}} so replying goes
  //    straight back to the client instead of to yourself.
  // 5. Save the template.
  emailJs: {
    serviceId: 'service_rxdf17r',
    templateId: 'template_r319ajg',
    publicKey: 'pTW0weVPTbYFPNlQ1',
  },
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Get in touch', path: '/contact' },
]

export const heroServices = [
  {
    number: '01',
    title: 'Logo Design',
    description: 'Distinct marks built to hold up on a phone screen or a billboard.',
  },
  {
    number: '02',
    title: 'Flyers & Banners',
    description: 'Print and digital promo pieces that stop the scroll.',
  },
  {
    number: '03',
    title: 'Social Media Design',
    description: 'Feed-ready graphics that keep a brand looking sharp, daily.',
  },
  {
    number: '04',
    title: 'Cover Art',
    description: 'Album and single artwork built to match the sound.',
  },
]

export const trustedLogos = [
  'Clausemax Platform', 'Orythe', 'Curlben Solutions', 'Expendables Fitness', 'CakesArena', 'Westside Plumbers', 'Kwalu Irrigation', 'Rotach Construction',
]

// The "store" — service categories, each with orderable packages.
export const serviceCatalog = [
  {
    id: 'logo-design',
    title: 'Logo Design',
    tagline: 'A mark that carries the whole brand.',
    description: 'Custom logo concepts built around what makes the business different — not a template.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop',
    packages: [
      {
        name: 'Starter',
        price: 25,
        turnaround: '2-3 days',
        features: ['1 logo concept', '2 rounds of revisions', 'PNG + JPG files'],
      },
      {
        name: 'Standard',
        price: 45,
        turnaround: '3-4 days',
        features: ['3 logo concepts', 'Unlimited revisions', 'Full file formats', 'Basic color palette'],
        popular: true,
      },
      {
        name: 'Premium',
        price: 80,
        turnaround: '4-6 days',
        features: ['3 logo concepts', 'Unlimited revisions', 'Mini brand guide', 'Social media kit', 'Source file included'],
      },
    ],
  },
  {
    id: 'flyer-design',
    title: 'Flyer Design',
    tagline: 'Promo pieces built to get shared.',
    description: 'Event, product, and promo flyers designed for both print and WhatsApp/Instagram sharing.',
    image: flyerDesignCover,
    packages: [
      {
        name: 'Single Flyer',
        price: 15,
        turnaround: '1-2 days',
        features: ['1 flyer design', '2 rounds of revisions', 'Print + digital files'],
      },
      {
        name: 'Flyer Bundle',
        price: 60,
        turnaround: '3-4 days',
        features: ['5 flyer designs', 'Consistent series look', 'Print + digital files'],
        popular: true,
      },
      {
        name: 'Event Pro',
        price: 35,
        turnaround: '2-3 days',
        features: ['1 flyer + 3 social resizes', 'Unlimited revisions', 'Print-ready file'],
      },
    ],
  },
  {
    id: 'banner-design',
    title: 'Banner Design',
    tagline: 'Big impact at billboard size.',
    description: 'Outdoor, storefront, and web banners built to read clearly at any size.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop',
    packages: [
      {
        name: 'Single Banner',
        price: 20,
        turnaround: '1-2 days',
        features: ['1 banner design', '2 rounds of revisions', 'Print-ready file'],
      },
      {
        name: 'Banner Set',
        price: 50,
        turnaround: '3 days',
        features: ['3 matching banners', 'Consistent series look', 'Print + web files'],
        popular: true,
      },
      {
        name: 'Campaign Pack',
        price: 90,
        turnaround: '4-5 days',
        features: ['5 matching banners', 'Multiple size formats', 'Print + web + social files'],
      },
    ],
  },
  {
    id: 'social-media-design',
    title: 'Social Media Design',
    tagline: 'A feed that looks like it belongs to one brand.',
    description: 'Post templates and graphics that keep a page consistent without a design team.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop',
    packages: [
      {
        name: 'Weekly Pack',
        price: 40,
        turnaround: '2-3 days',
        features: ['7 feed posts', '1 template style', '2 rounds of revisions'],
      },
      {
        name: 'Monthly Pack',
        price: 130,
        turnaround: '5-7 days',
        features: ['30 feed posts', '2-3 template styles', 'Content calendar layout'],
        popular: true,
      },
      {
        name: 'Story Pack',
        price: 35,
        turnaround: '2 days',
        features: ['10 story graphics', '1 template style', 'Vertical + square formats'],
      },
    ],
  },
  {
    id: 'music-cover-art',
    title: 'Music Cover Art',
    tagline: 'Artwork that matches the sound.',
    description: 'Single and album cover art built around the mood and genre of the release.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop',
    packages: [
      {
        name: 'Single Cover',
        price: 25,
        turnaround: '2 days',
        features: ['1 cover concept', '2 rounds of revisions', 'Streaming-ready files'],
      },
      {
        name: 'EP / Album Cover',
        price: 45,
        turnaround: '3-4 days',
        features: ['2 cover concepts', 'Unlimited revisions', 'Print + streaming files'],
        popular: true,
      },
      {
        name: 'Cover + Teaser',
        price: 70,
        turnaround: '4-5 days',
        features: ['Cover art', 'Animated teaser for social', 'All platform formats'],
      },
    ],
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    tagline: 'A document that closes deals.',
    description: 'Clean, professional company profiles and proposal decks built to be taken seriously.',
    image: companyProfileCover,
    packages: [
      {
        name: 'Basic',
        price: 60,
        turnaround: '3-4 days',
        features: ['Up to 5 pages', '2 rounds of revisions', 'PDF file'],
      },
      {
        name: 'Standard',
        price: 100,
        turnaround: '4-6 days',
        features: ['Up to 10 pages', 'Unlimited revisions', 'PDF + editable file'],
        popular: true,
      },
      {
        name: 'Premium',
        price: 150,
        turnaround: '6-8 days',
        features: ['15+ pages', 'Unlimited revisions', 'Print-ready + editable files'],
      },
    ],
  },
  {
    id: 'ux-ui-design',
    title: 'UX/UI Design',
    tagline: 'Interfaces people actually enjoy using.',
    description: 'Wireframes, UI screens, and prototypes for websites and apps, priced fairly for the Zimbabwean market without cutting corners on quality.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1000&auto=format&fit=crop',
    packages: [
      {
        name: 'Starter',
        price: 70,
        turnaround: '3-4 days',
        features: ['Up to 4 screens', 'Mobile or desktop, one platform', '2 rounds of revisions'],
      },
      {
        name: 'Standard',
        price: 150,
        turnaround: '5-7 days',
        features: ['Up to 8 screens', 'Wireframes + final UI', 'Clickable prototype', 'Unlimited revisions'],
        popular: true,
      },
      {
        name: 'Premium',
        price: 280,
        turnaround: '8-10 days',
        features: ['Full app or site (12+ screens)', 'UX research & user flows', 'Design system + prototype', 'Unlimited revisions'],
      },
    ],
  },
]

// Portfolio work samples across every service category.
export const portfolioItems = [
  {
    id: 'Orythe Scent logo',
    title: 'ORYTHE SCENT LOGO',
    client: 'Orythe Scent',
    category: 'Logo Design',
    year: '2025',
    description: 'A refined, elegant mark for a luxury fragrance brand.',
    brief: 'Orythé required a visual identity elegant enough for luxury packaging, campaign visuals, and digital platforms while remaining instantly recognizable at every touchpoint.',
    image: orytheCover,
    gallery: [orythe1,orytheFlyer1,orythe2,orytheSocial,orythe3,orythe4,orythe5,orythe6,],
  },

  {
    id: 'CAKES ARENA logo',
    title: 'CAKES ARENA LOGO',
    client: 'Cakes Arena',
    category: 'Logo Design',
    year: '2023',
    description: 'A bold, modern mark for a bakery.',
    brief: 'Solaris Records wanted a logo flexible enough to stamp on merch, vinyl sleeves, and social avatars while still feeling instantly recognizable at thumbnail size.',
    image: cakesArenaCover,
    gallery: [cakesArenaGallery1,cakesArenaGallery2,],
  },

  {
    id: 'ROTACH CONSULTANCY & CONTRACTING logo',
    title: 'ROTACH CONSULTANCY & CONTRACTING LOGO',
    client: 'Rotach Consultancy & Contracting',
    category: 'Logo Design',
    year: '2023',
    description: 'A bold, modern mark for a Contracting Company.',
    brief: 'Solaris Records wanted a logo flexible enough to stamp on merch, vinyl sleeves, and social avatars while still feeling instantly recognizable at thumbnail size.',
    image: rotachCover,
    gallery: [rotachGallery1,rotachGallery2,],
  },

  {
    id: 'EXPENDABLES FITNESS GYM logo',
    title: 'EXPENDABLES FITNESS GYM LOGO',
    client: 'Expendables Fitness Gym',
    category: 'Logo Design',
    year: '2026',
    description: 'A bold, modern mark for a fitness gym.',
    brief: 'Solaris Records wanted a logo flexible enough to stamp on merch, vinyl sleeves, and social avatars while still feeling instantly recognizable at thumbnail size.',
    image: expendablesCover,
    gallery: [expendablesGallery1,expendablesGallery2,expendablesGallery3,expendablesGallery4,expendablesGallery5,expendablesGallery6,],
  },

  {
    id: 'BALTIC SEA MIGRATION CONSULTANCY logo',
    title: 'BALTIC SEA MIGRATION CONSULTANCY LOGO',
    client: 'Baltic Sea Migration Consultancy',
    category: 'Logo Design',
    year: '2026',
    description: 'A bold, modern mark for a migration consultancy.',
    brief: 'Solaris Records wanted a logo flexible enough to stamp on merch, vinyl sleeves, and social avatars while still feeling instantly recognizable at thumbnail size.',
    image: balticCover,
    gallery: [balticGallery1,balticGallery2,balticGallery3,balticGallery4,balticGallery5,balticGallery6,],
  },

  {
    id: 'clausemax-flyer',
    title: 'CLAUSEMAX PLATFORM',
    client: 'Clausemax Platform',
    category: 'Flyer Design',
    year: '2024-2026',
    description: 'A five-part flyer series for a monthly business consultancy company.',
    brief: 'Each flyer needed to feel part of the same series while promoting a different headline act — solved with one flexible layout system and a rotating color treatment.',
    image: clausemaxCover,
    gallery: [clausemaxGallery1, clausemaxGallery2, clausemaxGallery3, clausemaxGallery4],
  },

  {
    id: 'event-flyer',
    title: 'Event Flyer Series',
    client: 'Event flyers',
    category: 'Flyer Design',
    year: '2024-2026',
    description: 'A five-part flyer series for a monthly business consultancy company.',
    brief: 'Each flyer needed to feel part of the same series while promoting a different headline act — solved with one flexible layout system and a rotating color treatment.',
    image: eventFlyerCover,
    gallery: [eventFlyer1, eventFlyer2, eventFlyer3, eventFlyer4],
  },

  {
    id: 'metro-realty-banner',
    title: 'Metro Realty Storefront Banner',
    client: 'Metro Realty',
    category: 'Banner Design',
    year: '2024',
    description: 'A large-format banner for a property office storefront.',
    brief: 'The banner needed to read clearly from across the street while staying consistent with Metro Realty\'s existing brand colors and typography.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    ],
  },
  {
    id: 'PaDanga-ChillSpot',
    title: 'PADANGA CHILLSPOT',
    client: 'PaDanga ChillSpot',
    category: 'Social Media Design',
    year: '2026',
    description: 'A month of social media graphics designed to keep Padanga buzzing.',
    brief: 'Padanga needed a consistent visual system across events, food specials, and weekend experiences — built as a flexible template rather than one-off designs.',
    image: coverPadanga,
    gallery: [
      padangaGallery1,
      padangaGallery2,
      padangaGallery3,
      padangaGallery4,
    ],
  },

  {
    id: 'Arc-Hardware',
    title: 'Arch Hardware',
    client: 'Arch Hardware',
    category: 'Social Media Design',
    year: '2026',
    description: 'A month of social media graphics designed to keep Padanga buzzing.',
    brief: 'Padanga needed a consistent visual system across events, food specials, and weekend experiences — built as a flexible template rather than one-off designs.',
    image: arcCover,
    gallery: [
      arcGallery1,
      arcGallery2,
      arcGallery3,
      arcGallery4,
      arcGallery5,
    ],
  },

  {
    id: '$hxwn-album-cover',
    title: '$hxwn Album Cover',
    client: '$hxwn',
    category: 'Music Cover Art',
    year: '2024',
    description: 'Cover art for a nine-track independent album release.',
    brief: 'The artist wanted artwork that felt cinematic and a little unsettling, matching the tone of the record without leaning on genre clichés.',
    image: shxwnCover,
    gallery: [shxwnGallery,shxwnGallery2,shxwnGallery3,],
  },
  {
    id: 'Mcmel Investments-profile',
    title: 'Mcmel Investments Company Profile',
    client: 'Mcmel Investments ',
    category: 'Company Profile',
    year: '2024',
    description: 'A twelve-page profile used to pitch new retail partners.',
    brief: 'GreenLeaf Foods needed a document confident enough to open doors with larger retailers, built around clean layout and real product photography.',
    image: companyProfileCover,
    gallery: [
      'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=800&auto=format&fit=crop',
    ],
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Brief & Consultation',
    description: 'A quick chat over WhatsApp or email to understand the project, style, and deadline.',
  },
  {
    number: '02',
    title: 'Concept Sketch',
    description: 'First direction shared for feedback before any detailed design work begins.',
  },
  {
    number: '03',
    title: 'Design & Refine',
    description: 'The chosen direction gets built out in full, with attention to every detail.',
  },
  {
    number: '04',
    title: 'Revisions',
    description: 'Feedback rounds included in every package until the design feels right.',
  },
  {
    number: '05',
    title: 'Final Delivery',
    description: 'Every file format needed, delivered and ready to use immediately.',
  },
]

export const portfolioGalleryImages = [
   padangaGallery1,
   clausemaxGallery1,
   padangaGallery2,
   clausemaxGallery2,
   arcGallery1,
   arcGallery2,
   orytheSocial,
   arcGallery3,
   orytheFlyer1,
]

export const processLabels = ['Brief', 'Concept', 'Design', 'Delivery']

export const introPreviewImages = [
  'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=700&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=700&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=700&auto=format&fit=crop',
]

export const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '40+', label: 'Returning Clients' },
  { value: '1-5', label: 'Day Turnaround' },
  { value: '15min', label: 'Avg. Reply Time' },
]

export const awards = [
  {
    year: '2026',
    label: 'Client Spotlight',
    title: '100+ Projects Delivered',
    description: 'Crossed one hundred completed design orders across six service categories.',
  },
  {
    year: '2025',
    label: 'Community Recognition',
    title: 'Featured Local Designer',
    description: 'Highlighted by a regional creative network for consistent, on-time delivery.',
  },
  {
    year: '2024',
    label: 'Repeat Business',
    title: '40+ Returning Clients',
    description: 'Built a client base that keeps coming back for new releases, seasons, and campaigns.',
  },
]

export const values = [
  {
    title: 'Fast Turnaround',
    description: 'Most orders delivered within 1-5 days, without cutting corners on quality.',
  },
  {
    title: 'Real Communication',
    description: 'Direct WhatsApp and email access — no waiting on a ticket queue.',
  },
  {
    title: 'Built to Use',
    description: 'Every file delivered in the formats actually needed for print, web, or social.',
  },
  {
    title: 'Fair Pricing',
    description: 'Package pricing that stays honest whether the client is a solo artist or a growing company.',
  },
]

export const specializations = [
  {
    title: 'Brand & Logo Design',
    description: 'Marks and mini brand kits built to carry a business everywhere it shows up.',
    poster: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Print & Promo',
    description: 'Flyers, banners, and posters designed to get noticed on a wall or a feed.',
    poster: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Music & Media Art',
    description: 'Cover art and social content built around sound, mood, and release timing.',
    poster: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
  },
]

export const testimonials = [
  {
    quote: 'Sent a rough idea over WhatsApp on a Monday and had a finished logo by Wednesday. Exactly what the brand needed.',
    name: 'Tendai M.',
    role: 'Founder, CakesArena',
  },
  {
    quote: 'The flyer series kept our monthly event looking consistent for six months straight. Never missed a deadline.',
    name: 'Machona T.',
    role: 'Event Organizer, Clausemax Platform',
  },
  {
    quote: 'Our company profile finally looks like the business we actually are. Closed two new accounts with it already.',
    name: 'Ropi M.',
    role: 'Director, Mcmel Invest',
  },
]

export const bioTeaser = {
  image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=900&auto=format&fit=crop',
  alt: 'Designer working at a desk with design tools',
  heading: 'Designer. Storyteller. One-Person Studio.',
  description:
    'Every order gets the same attention, whether it is a single flyer or a full company profile. No account managers, no templates pretending to be custom work — just direct communication and design built around what the project actually needs.',
}

export const miniGalleryImages = [
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=900&auto=format&fit=crop',
]

export const ctaBanners = {
  home: {
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1600&auto=format&fit=crop',
    alt: 'Creative studio scene, color-graded in orange tones',
  },
  aboutReady: {
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1600&auto=format&fit=crop',
    alt: 'Design work in progress, color-graded in pink and teal tones',
  },
  aboutBrand: {
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1600&auto=format&fit=crop',
    alt: 'Portrait against a warm orange backdrop',
  },
  services: {
    image: 'https://images.unsplash.com/photo-1470225620780-8ca9a73a5f79?q=80&w=1600&auto=format&fit=crop',
    alt: 'Vinyl record and cover art, color-graded in warm tones',
  },
  portfolio: {
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1600&auto=format&fit=crop',
    alt: 'Portrait lit with dramatic orange rim light',
  },
  contact: {
    image: startYourOrder,
    alt: 'Studio portrait with orange hooded jacket',
  },
}

export const pageHeroes = {
  about: {
    image: aboutCover,
    alt: 'Portrait of the designer, color-graded in violet tones',
  },
  services: {
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1600&auto=format&fit=crop',
    alt: 'Design workspace, color-graded in warm orange tones',
  },
  portfolio: {
    image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1600&auto=format&fit=crop',
    alt: 'Wide landscape shot representing bold creative work',
  },
  contact: {
    image: contactpageCover,
    alt: 'Portrait of the designer, color-graded in teal tones',
  },
}

export const faqs = [
  {
    question: 'How do I place an order?',
    answer:
      'Pick a service and package on the Services page and tap "Order via WhatsApp" or "Order via Email" — it opens a pre-filled message so all that\'s left is adding your project details.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'EcoCash, bank transfer, and USD cash are all accepted. Payment details are confirmed directly over WhatsApp once the brief is agreed on.',
  },
  {
    question: 'How long does a typical order take?',
    answer:
      'Most single designs (logos, flyers, covers) are delivered in 1-4 days. Larger packages like company profiles or monthly social media packs take 5-8 days.',
  },
  {
    question: 'How many revisions do I get?',
    answer:
      'Every package lists its revision count. Standard and Premium tiers across most services include unlimited revisions until the design feels right.',
  },
  {
    question: 'What file formats will I receive?',
    answer:
      'Print-ready PDFs, high-res JPG/PNG for digital use, and source files (AI/PSD) on Premium packages — whatever the project actually needs to be used right away.',
  },
  {
    question: 'Can I request something outside the listed packages?',
    answer:
      "Yes — the packages cover the most common requests, but custom quotes are available for anything bigger or more specific. Just send a message with what's needed.",
  },
]

export const timeline = [
  { year: '2018', title: 'Started freelancing', description: 'Began designing logos and flyers for local businesses part-time.' },
  { year: '2021', title: 'Went full-time', description: 'Left other work behind to focus entirely on design orders.' },
  { year: '2023', title: '50+ music covers', description: 'Became a go-to designer for independent artists and small labels.' },
  { year: '2025', title: '100+ projects', description: 'Crossed one hundred completed orders across every service category.' },
]

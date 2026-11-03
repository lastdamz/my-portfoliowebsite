import { motion } from 'framer-motion'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 pb-24 md:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative isolate flex min-h-[480px] flex-col items-center justify-center gap-4 overflow-hidden rounded-[2rem] p-8 text-center sm:min-h-[560px]"
      >
        <img
          src="https://images.unsplash.com/photo-1520222984843-df35ebc0f24d?q=80&w=1600&auto=format&fit=crop"
          alt="Neon-lit portrait, color-graded in blue and violet tones"
          className="absolute inset-0 h-full w-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/60 via-purple-900/60 to-black/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

        <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-clay">
          Page not found
        </span>
        <h1 className="relative text-6xl text-white sm:text-7xl">404</h1>
        <p className="relative max-w-sm text-sm leading-relaxed text-white/80">
          The page you're looking for doesn't exist — or might've moved.
        </p>
        <div className="relative mt-2">
          <Button to="/">Back to Home</Button>
        </div>
      </motion.div>
    </section>
  )
}

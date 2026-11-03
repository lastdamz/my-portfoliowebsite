import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

const MAX_ANGLE = 42
const EDGE_SCALE_BOOST = 0.45
// How far edge cards fan outward, as a fraction of card width. Grown
// edge cards would otherwise bleed into their neighbours, since the
// flex gap never changes.
const EDGE_PUSH = 0.32
const SPEED_PX_PER_SEC = 55

/**
 * Auto-scrolling 3D "curved gallery" carousel: tall portrait cards slide
 * right to left forever. Cards in the middle sit flat and small; the
 * closer a card gets to either edge, the taller it grows and the harder
 * it rotates inward, so the whole strip reads as a curved band.
 */
export default function ImageCarousel({ images }) {
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const x = useMotionValue(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    // Measure synchronously so the first paint already has real card
    // sizes; the observer then keeps it fresh on resize.
    setContainerWidth(el.clientWidth)
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const cardWidth = containerWidth ? Math.max(96, Math.min(150, containerWidth / 8)) : 130
  const gap = cardWidth * 0.18
  const itemSpan = cardWidth + gap
  const setWidth = images.length * itemSpan

  useEffect(() => {
    if (!setWidth) return
    const controls = animate(x, -setWidth, {
      duration: setWidth / SPEED_PX_PER_SEC,
      ease: 'linear',
      repeat: Infinity,
    })
    return controls.stop
  }, [setWidth, x])

  const doubled = [...images, ...images]

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-16"
      style={{
        perspective: '1200px',
        maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
      }}
    >
      <motion.div
        className="flex items-center"
        style={{ x, gap: `${gap}px`, transformStyle: 'preserve-3d' }}
      >
        {doubled.map((src, index) => (
          <CarouselCard
            key={`${src}-${index}`}
            src={src}
            index={index}
            itemSpan={itemSpan}
            cardWidth={cardWidth}
            containerWidth={containerWidth}
            x={x}
          />
        ))}
      </motion.div>
    </div>
  )
}

function CarouselCard({ src, index, itemSpan, cardWidth, containerWidth, x }) {
  const ratio = useTransform(x, (latest) => {
    if (!containerWidth) return 0
    const left = index * itemSpan + latest
    const center = left + cardWidth / 2
    const distance = center - containerWidth / 2
    return Math.max(-1, Math.min(1, distance / (containerWidth / 2)))
  })

  // Squaring the ratio keeps the five or so middle cards nearly flat and
  // uniform, then ramps the curve up sharply on the outermost cards.
  const rotateY = useTransform(ratio, (r) => -r * Math.abs(r) * MAX_ANGLE)
  const scale = useTransform(ratio, (r) => 1 + r * r * EDGE_SCALE_BOOST)
  const fanOut = useTransform(ratio, (r) => r * Math.abs(r) * cardWidth * EDGE_PUSH)

  return (
    <motion.div
      style={{
        width: cardWidth,
        x: fanOut,
        rotateY,
        scale,
        flexShrink: 0,
        // Keep the rounding proportional to card size, but subtle enough
        // that the full image stays clearly visible.
        borderRadius: cardWidth * 0.1,
      }}
      className="aspect-[9/16] overflow-hidden shadow-xl shadow-black/15"
    >
      <img
        src={src}
        alt="Portfolio detail shot"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </motion.div>
  )
}

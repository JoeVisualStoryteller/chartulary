import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CarouselImage {
  id: number
  src: string
  alt: string
}

interface CarouselProps {
  images: CarouselImage[]
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!images || images.length === 0) {
    return (
      <div className="aspect-video bg-stone rounded-sm flex items-center justify-center border border-iron">
        <p className="text-ash/50 font-serif">Nothing remains here.</p>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="relative aspect-video bg-stone rounded-sm overflow-hidden border border-iron">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              const parent = e.currentTarget.parentElement
              if (parent && !parent.querySelector('.placeholder')) {
                const placeholder = document.createElement('div')
                placeholder.className = 'placeholder w-full h-full flex items-center justify-center bg-stone'
                placeholder.innerHTML = '<p class="text-ash/50 font-serif">Lost to the dark</p>'
                parent.appendChild(placeholder)
              }
            }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-stone/80 hover:bg-stone border border-iron hover:border-crimson hover:glow-crimson rounded-sm flex items-center justify-center text-ash hover:text-crimson-bright text-2xl transition-colors"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-stone/80 hover:bg-stone border border-iron hover:border-crimson hover:glow-crimson rounded-sm flex items-center justify-center text-ash hover:text-crimson-bright text-2xl transition-colors"
              aria-label="Next image"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-crimson' : 'bg-iron'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

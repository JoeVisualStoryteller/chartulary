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
      <div className="aspect-video bg-amber-900 rounded-lg flex items-center justify-center border-4 border-gold">
        <p className="text-parchment/60 font-serif">No images available</p>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="relative aspect-video bg-amber-900 rounded-lg overflow-hidden border-4 border-gold">
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
                placeholder.className = 'placeholder w-full h-full flex items-center justify-center bg-amber-800'
                placeholder.innerHTML = '<p class="text-parchment/60 font-serif">Image placeholder</p>'
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
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-medieval-brown/80 hover:bg-medieval-brown border-2 border-gold rounded-full flex items-center justify-center text-gold text-2xl transition-colors"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-medieval-brown/80 hover:bg-medieval-brown border-2 border-gold rounded-full flex items-center justify-center text-gold text-2xl transition-colors"
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
                index === currentIndex ? 'bg-gold' : 'bg-gold/30'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

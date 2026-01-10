import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LazyImage } from './LazyImage'

interface CarouselImage {
  id: number
  src: string
  alt: string
}

interface CarouselProps {
  images: CarouselImage[]
}

export default function Carousel({ images }: CarouselProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const next = (): void => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prev = (): void => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!images || images.length === 0) {
    return (
      <div className="aspect-video bg-amber-900 dark:bg-amber-950 rounded-lg flex items-center justify-center border-4 border-gold dark:border-gold-bright">
        <p className="text-parchment/60 dark:text-parchment/40 font-serif">No images available</p>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="relative aspect-video bg-amber-900 dark:bg-amber-950 rounded-lg overflow-hidden border-4 border-gold dark:border-gold-bright">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <LazyImage
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-contain"
              placeholderClassName="aspect-video"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-medieval-brown/80 dark:bg-medieval-brown-dark/80 hover:bg-medieval-brown dark:hover:bg-medieval-brown-dark border-2 border-gold dark:border-gold-bright rounded-full flex items-center justify-center text-gold dark:text-gold-bright text-2xl transition-colors"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-medieval-brown/80 dark:bg-medieval-brown-dark/80 hover:bg-medieval-brown dark:hover:bg-medieval-brown-dark border-2 border-gold dark:border-gold-bright rounded-full flex items-center justify-center text-gold dark:text-gold-bright text-2xl transition-colors"
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
                index === currentIndex ? 'bg-gold dark:bg-gold-bright' : 'bg-gold/30 dark:bg-gold-bright/30'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

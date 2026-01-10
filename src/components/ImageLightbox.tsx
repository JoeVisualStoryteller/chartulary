import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FocusLock from 'react-focus-lock'

interface LightboxImage {
  id: number
  src: string
  alt: string
  title?: string
}

interface ImageLightboxProps {
  images: LightboxImage[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}: ImageLightboxProps): JSX.Element | null {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          onPrev()
          break
        case 'ArrowRight':
          onNext()
          break
      }
    }

    const handleBodyScroll = (): void => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    handleBodyScroll()

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose, onNext, onPrev])

  if (!isOpen || !images[currentIndex]) return null

  const currentImage = images[currentIndex]

  return (
    <AnimatePresence>
      {isOpen && (
        <FocusLock>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={onClose}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-3 bg-gold dark:bg-gold-bright text-medieval-brown rounded-full hover:scale-110 transition-transform z-10"
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-medieval-brown/80 dark:bg-medieval-brown-dark/80 text-parchment rounded-lg border-2 border-gold dark:border-gold-bright">
              <span className="font-decorative">
                {currentIndex + 1} / {images.length}
              </span>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onPrev()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-gold dark:bg-gold-bright text-medieval-brown rounded-full hover:scale-110 transition-transform z-10"
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onNext()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-gold dark:bg-gold-bright text-medieval-brown rounded-full hover:scale-110 transition-transform z-10"
                  aria-label="Next image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              {currentImage.title && (
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-decorative text-gold dark:text-gold-bright">
                    {currentImage.title}
                  </h3>
                </div>
              )}
            </motion.div>

            {/* Keyboard Hints */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-sm text-parchment/70 font-serif">
              <span>← → Navigate</span>
              <span>•</span>
              <span>ESC Close</span>
            </div>
          </motion.div>
        </FocusLock>
      )}
    </AnimatePresence>
  )
}

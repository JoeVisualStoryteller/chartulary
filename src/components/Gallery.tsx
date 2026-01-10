import { useState } from 'react'
import { motion } from 'framer-motion'
import { LazyImage } from './LazyImage'
import { ImageLightbox } from './ImageLightbox'

interface GalleryItem {
  id: number
  src: string
  alt: string
  title?: string
}

interface GalleryProps {
  items: GalleryItem[]
}

export default function Gallery({ items }: GalleryProps): JSX.Element {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false)

  const openLightbox = (index: number): void => {
    setSelectedIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = (): void => {
    setIsLightboxOpen(false)
  }

  const nextImage = (): void => {
    setSelectedIndex((prev) => (prev + 1) % items.length)
  }

  const prevImage = (): void => {
    setSelectedIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-[3/4] bg-amber-900 dark:bg-amber-950 rounded-lg overflow-hidden border-4 border-gold dark:border-gold-bright cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <LazyImage
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              placeholderClassName="aspect-[3/4]"
            />
            {item.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-medieval-brown/90 dark:from-medieval-brown-dark/90 to-transparent p-4">
                <p className="text-gold dark:text-gold-bright font-decorative text-center">{item.title}</p>
              </div>
            )}
            {/* Click hint overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-12 h-12 text-gold dark:text-gold-bright"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <ImageLightbox
        images={items}
        currentIndex={selectedIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  )
}

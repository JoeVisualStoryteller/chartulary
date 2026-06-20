import { motion } from 'framer-motion'

interface GalleryItem {
  id: number
  src: string
  alt: string
  title?: string
}

interface GalleryProps {
  images: GalleryItem[]
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4 }}
          className="group relative aspect-[3/4] bg-stone rounded-sm overflow-hidden border border-iron hover:border-crimson hover:glow-crimson transition-[border-color,box-shadow] duration-300"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback for missing images
              e.currentTarget.style.display = 'none'
              const parent = e.currentTarget.parentElement
              if (parent) {
                const placeholder = document.createElement('div')
                placeholder.className = 'w-full h-full flex items-center justify-center bg-stone border border-iron'
                placeholder.innerHTML = `<p class="text-ash/50 font-serif text-center px-4">${item.title || 'Image placeholder'}</p>`
                parent.appendChild(placeholder)
              }
            }}
          />
          {item.title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-knight-black/90 to-transparent p-4">
              <p className="text-ash font-decorative text-center">{item.title}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

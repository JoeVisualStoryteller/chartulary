import { motion } from 'framer-motion'

interface GalleryItem {
  id: number
  src: string
  alt: string
  title?: string
}

interface GalleryProps {
  items: GalleryItem[]
}

export default function Gallery({ items }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative aspect-[3/4] bg-amber-900 rounded-lg overflow-hidden border-4 border-gold"
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
                placeholder.className = 'w-full h-full flex items-center justify-center bg-amber-800'
                placeholder.innerHTML = `<p class="text-parchment/60 font-serif text-center px-4">${item.title || 'Image placeholder'}</p>`
                parent.appendChild(placeholder)
              }
            }}
          />
          {item.title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-medieval-brown/90 to-transparent p-4">
              <p className="text-gold font-decorative text-center">{item.title}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

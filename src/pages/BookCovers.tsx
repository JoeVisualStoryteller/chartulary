import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Gallery from '../components/Gallery'

export default function BookCovers() {
  const bookCovers = [
    { id: 1, src: '/images/book1.jpg', alt: 'Book Cover 1', title: 'Book Title 1' },
    { id: 2, src: '/images/book2.jpg', alt: 'Book Cover 2', title: 'Book Title 2' },
    { id: 3, src: '/images/book3.jpg', alt: 'Book Cover 3', title: 'Book Title 3' },
    // Add more book covers...
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 to-medieval-brown">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-decorative text-center mb-12 text-gold text-shadow"
        >
          Book Covers
        </motion.h1>

        <Gallery items={bookCovers} />

        <div className="mt-12 text-center">
          <Link
            to="/chamber"
            className="inline-block px-8 py-3 bg-gold text-medieval-brown font-decorative rounded-lg hover:bg-amber-500 transition-colors"
          >
            ← Back to Chamber
          </Link>
        </div>
      </div>
    </div>
  )
}

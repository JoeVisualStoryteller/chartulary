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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-knight-black"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-crimson font-decorative text-sm tracking-[0.4em] uppercase mb-4 text-shadow">
            — Bound in Shadow —
          </p>
          <h1 className="text-5xl font-decorative text-ash text-shadow-crimson">
            The Grimoires
          </h1>
          <p className="mt-4 text-lg font-serif text-ash/70 max-w-2xl mx-auto leading-relaxed">
            Every cover is a sealed door. Open one, and the story will not let you go.
          </p>
        </motion.div>

        <Gallery images={bookCovers} />

        <div className="mt-12 text-center">
          <Link
            to="/chamber"
            className="inline-block px-8 py-3 bg-crimson text-ash font-decorative rounded-sm hover:bg-crimson-bright glow-crimson transition-colors"
          >
            ← Return to the Keep
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

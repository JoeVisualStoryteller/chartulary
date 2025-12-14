import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Gallery from '../components/Gallery'

export default function Drawings() {
  const drawings = [
    { id: 1, src: '/images/drawing1.jpg', alt: 'Drawing 1', title: 'Sketch 1' },
    { id: 2, src: '/images/drawing2.jpg', alt: 'Drawing 2', title: 'Sketch 2' },
    { id: 3, src: '/images/drawing3.jpg', alt: 'Drawing 3', title: 'Sketch 3' },
    // Add more drawings...
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 to-medieval-brown">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-decorative text-center mb-12 text-gold text-shadow"
        >
          Drawings
        </motion.h1>

        <Gallery items={drawings} />

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

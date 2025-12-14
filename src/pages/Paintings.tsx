import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Gallery from '../components/Gallery'

export default function Paintings() {
  // Replace with your actual image URLs
  const paintings = [
    { id: 1, src: '/images/painting1.jpg', alt: 'Painting 1', title: 'Untitled 1' },
    { id: 2, src: '/images/painting2.jpg', alt: 'Painting 2', title: 'Untitled 2' },
    { id: 3, src: '/images/painting3.jpg', alt: 'Painting 3', title: 'Untitled 3' },
    // Add more paintings...
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 to-medieval-brown">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-decorative text-center mb-12 text-gold text-shadow"
        >
          Paintings
        </motion.h1>

        <Gallery items={paintings} />

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

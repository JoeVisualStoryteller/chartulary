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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-knight-black"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-decorative text-center mb-4 text-ash text-shadow"
        >
          The <span className="text-crimson text-shadow-crimson">Dark</span> Canvas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center font-serif text-ash/50 mb-12"
        >
          What the brush bled onto canvas. Look long, and it looks back.
        </motion.p>

        <Gallery images={paintings} />

        <div className="mt-12 text-center">
          <Link
            to="/chamber"
            className="font-serif text-ember hover:text-ash transition-colors underline underline-offset-4"
          >
            ← Return to the Keep
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

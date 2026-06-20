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
          <div className="text-crimson font-decorative text-sm tracking-[0.4em] uppercase mb-4 text-shadow">
            — Lines drawn in shadow —
          </div>
          <h1 className="text-5xl font-decorative text-ash text-shadow-crimson">
            The Charcoal Codex
          </h1>
          <p className="mt-6 text-lg font-serif text-ash/70 max-w-2xl mx-auto leading-relaxed">
            Every stroke a scar. Study them, if you dare.
          </p>
        </motion.div>

        <Gallery images={drawings} />

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

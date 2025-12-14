import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Shop() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 to-medieval-brown flex items-center justify-center">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-decorative text-gold mb-8 text-shadow">
            Shop
          </h1>
          <p className="text-3xl font-serif text-parchment mb-12">
            Coming Soon
          </p>
          <p className="text-lg font-serif text-parchment/80 mb-12 max-w-md mx-auto">
            The royal treasury is being prepared. Check back soon for available works and commissions.
          </p>
          <Link
            to="/chamber"
            className="inline-block px-8 py-3 bg-gold text-medieval-brown font-decorative rounded-lg hover:bg-amber-500 transition-colors"
          >
            ← Back to Chamber
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SEOHead } from '../components/SEOHead'

export default function NotFound(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-amber-800 to-medieval-brown dark:from-amber-950 dark:via-medieval-brown-dark dark:to-black flex items-center justify-center px-4">
      <SEOHead
        data={{
          title: 'Page Not Found',
          description: 'The page you are looking for could not be found.',
          url: window.location.href
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        {/* Medieval Scroll */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <svg
            className="w-32 h-32 mx-auto text-gold dark:text-gold-bright"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
            <path d="M7 10h10v2H7zm0 4h7v2H7z"/>
          </svg>
        </motion.div>

        {/* 404 Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-8xl font-decorative text-gold dark:text-gold-bright mb-4 text-shadow"
        >
          404
        </motion.h1>

        {/* Medieval Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-decorative text-parchment mb-4 text-shadow">
            Page Not Found
          </h2>
          <p className="text-lg font-serif text-parchment/80 mb-2">
            Alas, brave traveler! The page thou seekest
          </p>
          <p className="text-lg font-serif text-parchment/80 mb-2">
            hath been lost to the mists of time.
          </p>
          <p className="text-lg font-serif text-parchment/80">
            Mayhaps it never existed in this realm...
          </p>
        </motion.div>

        {/* Navigation Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gold dark:bg-gold-bright text-medieval-brown font-decorative text-lg rounded-lg hover:bg-amber-500 dark:hover:bg-amber-400 transition-colors shadow-lg border-2 border-medieval-brown dark:border-medieval-brown-dark"
            >
              Return to Home
            </motion.button>
          </Link>

          <Link to="/chamber">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-medieval-brown dark:bg-medieval-brown-dark text-gold dark:text-gold-bright font-decorative text-lg rounded-lg hover:bg-medieval-brown/80 dark:hover:bg-medieval-brown-dark/80 transition-colors shadow-lg border-2 border-gold dark:border-gold-bright"
            >
              Enter Chamber
            </motion.button>
          </Link>
        </motion.div>

        {/* Medieval Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 italic text-parchment/60 font-serif"
        >
          <p>"Not all who wander are lost..."</p>
          <p className="text-sm mt-2">But this page certainly is.</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

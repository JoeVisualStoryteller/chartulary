import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Shop() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-to-b from-stone via-knight-black to-black flex items-center justify-center relative overflow-hidden"
    >
      {/* Fog */}
      <div className="fog-layer absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_40%_at_50%_60%,_rgba(74,85,104,0.3)_0%,_transparent_70%)]" />

      <div className="text-center px-4 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-crimson font-decorative text-sm tracking-[0.4em] uppercase mb-6 text-shadow pulse-crimson">
            — Sealed —
          </div>

          <h1 className="text-6xl font-hero text-ash mb-8 text-shadow-crimson">
            The Black Market
          </h1>

          <p className="text-2xl font-serif text-ash/70 mb-6 text-shadow">
            The stalls stand empty. The merchants have not come.
          </p>

          <p className="text-lg font-serif text-ash/50 mb-12 max-w-md mx-auto leading-relaxed">
            No wares are on offer yet. The market opens when the time is right —
            and not a moment before. Return when the lanterns burn.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/chamber"
              className="inline-block px-8 py-3 bg-crimson text-ash font-decorative rounded-sm hover:bg-crimson-bright transition-colors glow-crimson"
            >
              ← Return to the Keep
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

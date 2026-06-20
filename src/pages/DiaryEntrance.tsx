import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function DiaryEntrance() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-to-b from-stone via-knight-black to-black flex items-center justify-center relative overflow-hidden"
    >
      {/* Fog */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="fog-layer absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_70%,_rgba(74,85,104,0.3)_0%,_transparent_70%)]" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <div className="text-crimson font-decorative text-sm tracking-[0.4em] uppercase text-shadow pulse-crimson">
            — You stand at the edge —
          </div>

          <h1 className="text-5xl md:text-6xl font-hero text-ash text-shadow leading-tight">
            The <span className="text-crimson text-shadow-crimson">Threshold</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl font-serif text-ash/70 text-shadow leading-relaxed"
          >
            Beyond this door lie the Chronicles —<br />
            the knight's own hand, set down in the dark.<br />
            Read them, and you cannot unread them.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-base font-serif text-ash/50 text-shadow"
          >
            Cross, or turn back. The choice is yours alone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/diary')}
              className="px-10 py-4 bg-crimson text-ash font-decorative text-xl rounded-sm hover:bg-crimson-bright transition-colors glow-crimson shadow-2xl"
            >
              Cross the Threshold
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/chamber')}
              className="px-10 py-4 bg-stone border border-iron text-ash/70 font-decorative text-xl rounded-sm hover:border-crimson hover:text-ash transition-colors"
            >
              Retreat to the Keep
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

import { motion, useScroll, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

export default function Home() {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const midgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const foregroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      ref={containerRef}
      className="relative h-[300vh] overflow-hidden"
    >
      {/* Background Layer */}
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 bg-gradient-to-b from-stone via-knight-black to-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.8)_100%)]" />
      </motion.div>

      {/* Fog Layer */}
      <motion.div
        style={{ y: midgroundY }}
        className="fixed inset-0 pointer-events-none"
      >
        <div className="fog-layer absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_60%,_rgba(74,85,104,0.3)_0%,_transparent_70%)]" />
      </motion.div>

      {/* Foreground — Content */}
      <motion.div
        style={{ y: foregroundY }}
        className="fixed inset-0 flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-center space-y-8 px-4 max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            className="text-crimson font-hero text-lg tracking-[0.4em] uppercase mb-4 text-shadow"
          >
            — Halt —
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-hero text-ash text-shadow leading-tight">
            Who dares<br />
            <span className="text-crimson text-shadow-crimson">enter here?</span>
          </h1>

          <p className="text-xl font-serif text-ash/70 text-shadow leading-relaxed">
            Beyond this gate lies the keep of the Dark Knight.<br />
            Enter if your resolve holds.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/chamber')}
            className="mt-8 px-12 py-4 bg-crimson text-ash font-decorative text-xl rounded-sm shadow-2xl hover:bg-crimson-bright transition-colors glow-crimson"
          >
            Enter the Keep
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-base font-serif text-ash/50 text-shadow pt-4"
          >
            Or seek the knight's written word —{' '}
            <button
              onClick={() => navigate('/diary-entrance')}
              className="text-ember hover:text-ash transition-colors underline underline-offset-4"
            >
              enter the threshold
            </button>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-crimson pulse-crimson font-decorative text-sm tracking-widest"
      >
        ↓
      </motion.div>
    </motion.div>
  )
}

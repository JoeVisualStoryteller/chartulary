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

  // Parallax transformations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const midgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const foregroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <div ref={containerRef} className="relative h-[300vh] overflow-hidden">
      {/* Background Layer - Slowest */}
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 bg-gradient-to-b from-amber-900 via-amber-800 to-medieval-brown"
      >
        <div className="absolute inset-0 opacity-20">
          {/* Add your background illustration here */}
        </div>
      </motion.div>

      {/* Midground Layer */}
      <motion.div
        style={{ y: midgroundY }}
        className="fixed inset-0 flex items-center justify-center"
      >
        {/* Add castle/walls illustration here */}
      </motion.div>

      {/* Foreground Layer - Fastest */}
      <motion.div
        style={{ y: foregroundY }}
        className="fixed inset-0 flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center space-y-8 px-4"
        >
          <h1 className="text-6xl font-decorative text-gold text-shadow">
            Oi! Halt! Who goes there?
          </h1>
          <p className="text-2xl font-serif text-parchment text-shadow max-w-2xl">
            You have come upon Her Majesty's lair<br />
            Click the entrance if you dare
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/chamber')}
            className="mt-8 px-12 py-4 bg-gold text-medieval-brown font-decorative text-xl rounded-lg shadow-2xl hover:bg-yellow-500 transition-colors"
          >
            Enter the Chamber
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-lg font-serif text-parchment/80 text-shadow pt-8"
          >
            If instead you wish a glance<br />
            of what Her Majesty wrote by chance<br />
            then{' '}
            <button
              onClick={() => navigate('/diary-entrance')}
              className="text-gold hover:underline"
            >
              click where the horses prance
            </button>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-parchment/60 text-sm font-serif"
      >
        Scroll for immersive experience ↓
      </motion.div>
    </div>
  )
}

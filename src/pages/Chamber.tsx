import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

interface NavigationDoor {
  title: string
  path: string
  description: string
}

const doors: NavigationDoor[] = [
  { title: 'Paintings', path: '/paintings', description: 'Oil paintings gallery' },
  { title: 'Drawings', path: '/drawings', description: 'Sketches and drawings' },
  { title: 'Graphic Design', path: '/graphic-design', description: 'Design portfolio' },
  { title: 'Book Covers', path: '/book-covers', description: 'Book cover designs' },
  { title: 'Shop', path: '/shop', description: 'Browse available works' },
]

export default function Chamber() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-medieval-brown relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-radial from-gold/20 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-decorative text-center mb-16 text-gold text-shadow"
        >
          The Chamber
        </motion.h1>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {doors.map((door, index) => (
            <motion.div
              key={door.path}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(door.path)}
              className="relative aspect-[3/4] bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg border-4 border-gold cursor-pointer overflow-hidden group"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-3xl font-decorative text-gold mb-4 group-hover:scale-110 transition-transform">
                  {door.title}
                </h2>
                <p className="text-parchment/80 font-serif">
                  {door.description}
                </p>
              </div>

              {/* Door frame decoration */}
              <div className="absolute inset-0 border-8 border-amber-950/50 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Special Links */}
        <div className="flex flex-col items-center gap-8 mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/diary-entrance')}
            className="flex items-center gap-4 px-8 py-4 bg-amber-900 border-2 border-gold rounded-lg hover:bg-amber-800 transition-colors"
          >
            <span className="text-2xl">🐴</span>
            <span className="font-decorative text-gold text-xl">Visit the Diary</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:your.email@example.com"
            className="flex items-center gap-4 px-8 py-4 bg-amber-900 border-2 border-gold rounded-lg hover:bg-amber-800 transition-colors"
          >
            <span className="text-2xl">🦅</span>
            <span className="font-decorative text-gold text-xl">Send a Raven</span>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/artist-statement')}
            className="text-gold hover:text-amber-500 font-serif underline"
          >
            About the Artist
          </motion.button>
        </div>
      </div>
    </div>
  )
}

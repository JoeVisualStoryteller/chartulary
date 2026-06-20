import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

interface NavigationDoor {
  title: string
  path: string
  description: string
}

const doors: NavigationDoor[] = [
  { title: 'The Dark Canvas', path: '/paintings', description: 'Oil and shadow. What the light refused to show.' },
  { title: 'The Charcoal Codex', path: '/drawings', description: 'Lines scraped from ash. Read them if you dare.' },
  { title: 'The Iron Forge', path: '/graphic-design', description: 'Where raw form is hammered into shape.' },
  { title: 'The Grimoires', path: '/book-covers', description: 'Bound faces of forbidden volumes. Each one a warning.' },
  { title: 'The Black Market', path: '/shop', description: 'Trade in the dark — if your coin is good.' },
]

export default function Chamber() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Fog drifting through the keep */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="fog-layer absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,_rgba(74,85,104,0.25)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-crimson font-decorative text-sm tracking-[0.4em] uppercase mb-4 text-shadow">
            — You stand within —
          </p>
          <h1 className="text-6xl font-hero text-ash text-shadow-crimson">
            The Keep
          </h1>
          <p className="mt-6 text-lg font-serif text-ash/70 text-shadow">
            Five doors. Five trials. Choose, and do not look back.
          </p>
        </motion.div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {doors.map((door, index) => (
            <motion.div
              key={door.path}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(door.path)}
              className="relative aspect-[3/4] bg-stone border border-iron rounded-sm cursor-pointer overflow-hidden group hover:border-crimson hover:glow-crimson transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-3xl font-decorative text-ash mb-4 group-hover:text-crimson-bright transition-colors">
                  {door.title}
                </h2>
                <p className="text-ash/70 font-serif">
                  {door.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Passages beyond the doors */}
        <div className="flex flex-col items-center gap-6 mt-16 font-serif text-ash/50">
          <p>
            The knight keeps chronicles in a darker wing —{' '}
            <button
              onClick={() => navigate('/diary-entrance')}
              className="text-ember hover:text-ash transition-colors underline underline-offset-4"
            >
              cross the Threshold
            </button>
          </p>

          <p>
            Words for the knight travel by wing alone —{' '}
            <a
              href="mailto:your.email@example.com"
              className="text-ember hover:text-ash transition-colors underline underline-offset-4"
            >
              send a raven
            </a>
          </p>

          <p>
            Or learn what binds the one who built this place —{' '}
            <button
              onClick={() => navigate('/artist-statement')}
              className="text-ember hover:text-ash transition-colors underline underline-offset-4"
            >
              read the Knight's Oath
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  )
}

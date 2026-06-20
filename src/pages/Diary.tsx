import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface DiaryEntry {
  id: number
  date: string
  title: string
  content: string
  image?: string
}

const entries: DiaryEntry[] = [
  {
    id: 1,
    date: 'December 13, 2025',
    title: 'A New Beginning',
    content: 'Today marks the beginning of a new journey...',
  },
  // Add more diary entries...
]

export default function Diary() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-decorative text-center mb-4 text-ash text-shadow"
        >
          The Chronicles
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center font-serif text-ash/50 mb-12"
        >
          What the knight records, the dark remembers.
        </motion.p>

        <div className="space-y-12">
          {entries.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-stone border border-iron rounded-sm p-8"
            >
              <time className="text-sm text-ember font-decorative tracking-wide">
                {entry.date}
              </time>
              <h2 className="text-3xl font-decorative text-ash mt-2 mb-4">
                {entry.title}
              </h2>
              {entry.image && (
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="w-full h-64 object-cover rounded-sm mb-4 border border-iron"
                />
              )}
              <p className="text-lg font-serif text-ash/70 leading-relaxed">
                {entry.content}
              </p>
            </motion.article>
          ))}
        </div>

        {entries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl font-serif text-ash/50">
              No record survives. Yet.
            </p>
          </motion.div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/chamber"
            className="font-decorative text-ember hover:text-ash transition-colors underline underline-offset-4"
          >
            ← Return to the Keep
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

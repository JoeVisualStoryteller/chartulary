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
    <div className="min-h-screen bg-gradient-to-b from-parchment to-amber-100">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-decorative text-center mb-12 text-medieval-brown"
        >
          Her Majesty's Diary
        </motion.h1>

        <div className="space-y-12">
          {entries.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 border-4 border-amber-800 rounded-lg p-8 shadow-xl"
            >
              <time className="text-sm text-amber-800 font-serif">
                {entry.date}
              </time>
              <h2 className="text-3xl font-decorative text-medieval-brown mt-2 mb-4">
                {entry.title}
              </h2>
              {entry.image && (
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
              )}
              <p className="text-lg font-serif text-medieval-brown leading-relaxed">
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
            <p className="text-2xl font-serif text-medieval-brown/60">
              The pages are yet to be written...
            </p>
          </motion.div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/chamber"
            className="inline-block px-8 py-3 bg-gold text-medieval-brown font-decorative rounded-lg hover:bg-amber-500 transition-colors"
          >
            ← Back to Chamber
          </Link>
        </div>
      </div>
    </div>
  )
}

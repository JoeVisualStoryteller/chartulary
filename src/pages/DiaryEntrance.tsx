import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function DiaryEntrance() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 to-medieval-brown flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-decorative text-gold text-shadow leading-relaxed">
            Oh, what is that up there I see?<br />
            oh, truly could it possibly be?<br />
            Why it's her majesty's very own Diary!
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl font-serif text-parchment text-shadow"
          >
            A special piece it must be than!<br />
            As you give it a good scan<br />
            decipher only if you can
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <button
              onClick={() => navigate('/diary')}
              className="px-10 py-4 bg-gold text-medieval-brown font-decorative text-xl rounded-lg hover:bg-amber-500 transition-colors shadow-2xl"
            >
              Open the Diary
            </button>

            <button
              onClick={() => navigate('/chamber')}
              className="px-10 py-4 bg-amber-900 border-2 border-gold text-gold font-decorative text-xl rounded-lg hover:bg-amber-800 transition-colors"
            >
              Return to Chamber
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

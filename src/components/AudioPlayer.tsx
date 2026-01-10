import { motion, AnimatePresence } from 'framer-motion'
import { useAudio } from '../contexts/AudioContext'

export function AudioPlayer(): JSX.Element {
  const { isPlaying, volume, isMinimized, togglePlay, setVolume, toggleMinimize } = useAudio()

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-4 right-4 z-40"
    >
      <AnimatePresence mode="wait">
        {isMinimized ? (
          <motion.button
            key="minimized"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={toggleMinimize}
            className="p-4 bg-gold dark:bg-gold-bright text-medieval-brown rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Expand audio player"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
              />
            </svg>
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="bg-parchment dark:bg-parchment-dark p-6 rounded-lg border-4 border-gold dark:border-gold-bright shadow-2xl min-w-[280px]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-decorative text-medieval-brown dark:text-gold-bright">
                Medieval Music
              </h3>
              <button
                onClick={toggleMinimize}
                className="text-medieval-brown dark:text-parchment hover:text-gold dark:hover:text-gold-bright transition-colors"
                aria-label="Minimize audio player"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gold dark:bg-gold-bright text-medieval-brown rounded-full hover:bg-amber-500 dark:hover:bg-amber-400 transition-colors shadow-md"
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </motion.button>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-medieval-brown dark:text-parchment"
                  >
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                  </svg>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="flex-1 h-2 bg-medieval-brown/20 dark:bg-parchment/20 rounded-lg appearance-none cursor-pointer slider"
                    aria-label="Volume control"
                  />
                  <span className="text-sm font-serif text-medieval-brown dark:text-parchment w-10 text-right">
                    {Math.round(volume * 100)}%
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-center text-medieval-brown/70 dark:text-parchment/70 font-serif">
              Add audio file at /public/audio/medieval-music.mp3
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #d4af37;
          cursor: pointer;
        }
        .dark .slider::-webkit-slider-thumb {
          background: #ffd700;
        }
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #d4af37;
          cursor: pointer;
          border: none;
        }
        .dark .slider::-moz-range-thumb {
          background: #ffd700;
        }
      `}</style>
    </motion.div>
  )
}

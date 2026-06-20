import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ArtistStatement() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-to-b from-knight-black via-stone to-knight-black text-ash"
    >
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-crimson font-decorative text-sm tracking-[0.4em] uppercase text-center mb-4 text-shadow">
            — Sworn in Shadow —
          </p>

          <h1 className="text-5xl font-hero text-center mb-12 text-ash text-shadow-crimson">
            The Knight's Oath
          </h1>

          <div className="bg-stone border border-iron rounded-sm p-8 md:p-12 space-y-6 font-serif">
            <p className="text-xl leading-relaxed text-ash">
              [Your name], a [age]-year-old multimedia artist based in [location].
            </p>

            <p className="text-lg leading-relaxed text-ash/70">
              With a background in [your background], I create work that explores
              [your artistic themes and interests].
            </p>

            <p className="text-lg leading-relaxed text-ash/70">
              My practice spans [your mediums - painting, digital art, illustration, etc.],
              with a focus on [your specific focus areas].
            </p>

            <p className="text-lg leading-relaxed text-ash/70">
              Currently pursuing [current goals/education], I am available for commissions
              and collaborative projects.
            </p>

            <div className="pt-8 border-t border-iron text-center">
              <p className="font-decorative text-ash/50 text-sm tracking-widest uppercase mb-3">
                Summon the Knight
              </p>
              <a
                href="mailto:your.email@example.com"
                className="text-ember hover:text-ash transition-colors underline underline-offset-4 text-lg"
              >
                your.email@example.com
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/chamber"
                className="inline-block px-8 py-3 bg-crimson text-ash font-decorative rounded-sm hover:bg-crimson-bright transition-colors glow-crimson"
              >
                Return to the Keep
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ArtistStatement() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-parchment to-amber-100 text-medieval-brown">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-decorative text-center mb-12 text-gold">
            Artist Statement
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 font-serif">
            <p className="text-xl leading-relaxed">
              [Your name], a [age]-year-old multimedia artist based in [location].
            </p>

            <p className="text-lg leading-relaxed">
              With a background in [your background], I create work that explores
              [your artistic themes and interests].
            </p>

            <p className="text-lg leading-relaxed">
              My practice spans [your mediums - painting, digital art, illustration, etc.],
              with a focus on [your specific focus areas].
            </p>

            <p className="text-lg leading-relaxed">
              Currently pursuing [current goals/education], I am available for commissions
              and collaborative projects.
            </p>

            <div className="pt-8 text-center">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-2 text-gold hover:text-amber-600 transition-colors text-lg"
              >
                <span>📧</span>
                <span>your.email@example.com</span>
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/chamber"
              className="inline-block px-8 py-3 bg-gold text-medieval-brown font-decorative rounded-lg hover:bg-amber-500 transition-colors"
            >
              Return to Chamber
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

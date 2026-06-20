import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'

export default function GraphicDesign() {
  const designProjects = [
    {
      title: 'Project 1',
      images: [
        { id: 1, src: '/images/design1-1.jpg', alt: 'Design 1 Image 1' },
        { id: 2, src: '/images/design1-2.jpg', alt: 'Design 1 Image 2' },
      ]
    },
    {
      title: 'Project 2',
      images: [
        { id: 3, src: '/images/design2-1.jpg', alt: 'Design 2 Image 1' },
        { id: 4, src: '/images/design2-2.jpg', alt: 'Design 2 Image 2' },
      ]
    },
    // Add more projects...
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-to-b from-stone to-knight-black"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-decorative text-center mb-4 text-ash text-shadow-crimson"
        >
          The Iron Forge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center font-serif text-ash/70 mb-12 max-w-2xl mx-auto"
        >
          Here the knight hammers form from shadow. Each work was struck in fire.
          Look upon them, and judge what the anvil yields.
        </motion.p>

        <div className="space-y-16 max-w-5xl mx-auto">
          {designProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="text-3xl font-decorative text-crimson mb-6 text-center text-shadow">
                {project.title}
              </h2>
              <Carousel images={project.images} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/chamber"
            className="inline-block px-8 py-3 bg-crimson text-ash font-decorative rounded-sm hover:bg-crimson-bright transition-colors glow-crimson"
          >
            ← Return to the Keep
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

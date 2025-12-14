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
    <div className="min-h-screen bg-gradient-to-b from-amber-900 to-medieval-brown">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-decorative text-center mb-12 text-gold text-shadow"
        >
          Graphic Design
        </motion.h1>

        <div className="space-y-16 max-w-5xl mx-auto">
          {designProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="text-3xl font-decorative text-gold mb-6 text-center">
                {project.title}
              </h2>
              <Carousel images={project.images} />
            </motion.div>
          ))}
        </div>

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

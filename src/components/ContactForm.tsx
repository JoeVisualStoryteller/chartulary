import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export function ContactForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending...' })

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Artist'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      )

      setStatus({ type: 'success', message: 'Message sent successfully!' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto p-8 bg-parchment dark:bg-parchment-dark rounded-lg border-4 border-gold dark:border-gold-bright shadow-xl"
    >
      <h2 className="text-3xl font-decorative text-medieval-brown dark:text-gold-bright mb-6 text-center">
        Send a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-serif font-bold text-medieval-brown dark:text-parchment mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-3 bg-white dark:bg-medieval-brown text-medieval-brown dark:text-parchment border-2 border-gold dark:border-gold-bright rounded focus:outline-none focus:ring-2 focus:ring-gold dark:focus:ring-gold-bright font-serif"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-serif font-bold text-medieval-brown dark:text-parchment mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-3 bg-white dark:bg-medieval-brown text-medieval-brown dark:text-parchment border-2 border-gold dark:border-gold-bright rounded focus:outline-none focus:ring-2 focus:ring-gold dark:focus:ring-gold-bright font-serif"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-serif font-bold text-medieval-brown dark:text-parchment mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="w-full px-4 py-3 bg-white dark:bg-medieval-brown text-medieval-brown dark:text-parchment border-2 border-gold dark:border-gold-bright rounded focus:outline-none focus:ring-2 focus:ring-gold dark:focus:ring-gold-bright font-serif resize-none"
            placeholder="Write your message here..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={status.type === 'loading'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-6 bg-gold dark:bg-gold-bright text-medieval-brown font-decorative text-lg rounded hover:bg-amber-500 dark:hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg"
        >
          {status.type === 'loading' ? 'Sending...' : 'Send Message'}
        </motion.button>

        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded text-center font-serif ${
              status.type === 'success'
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-500'
                : status.type === 'error'
                ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-500'
                : ''
            }`}
          >
            {status.message}
          </motion.div>
        )}

        <p className="text-sm text-center text-medieval-brown/70 dark:text-parchment/70 font-serif">
          Note: To use this form, configure your EmailJS credentials in the ContactForm component.
        </p>
      </form>
    </motion.div>
  )
}

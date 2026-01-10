import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../hooks/useAuth'

export default function AdminLogin(): JSX.Element {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await login(email, password)
      navigate('/admin')
    } catch (err) {
      setError('Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 to-medieval-brown dark:from-amber-950 dark:to-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-parchment dark:bg-parchment-dark p-8 rounded-lg border-4 border-gold dark:border-gold-bright shadow-2xl">
          <h1 className="text-3xl font-decorative text-medieval-brown dark:text-gold-bright mb-6 text-center">
            Admin Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-serif font-bold text-medieval-brown dark:text-parchment mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white dark:bg-medieval-brown text-medieval-brown dark:text-parchment border-2 border-gold dark:border-gold-bright rounded focus:outline-none focus:ring-2 focus:ring-gold dark:focus:ring-gold-bright font-serif"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-serif font-bold text-medieval-brown dark:text-parchment mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white dark:bg-medieval-brown text-medieval-brown dark:text-parchment border-2 border-gold dark:border-gold-bright rounded focus:outline-none focus:ring-2 focus:ring-gold dark:focus:ring-gold-bright font-serif"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded text-red-800 dark:text-red-300 text-sm font-serif">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gold dark:bg-gold-bright text-medieval-brown font-decorative text-lg rounded hover:bg-amber-500 dark:hover:bg-amber-400 disabled:opacity-50 transition-colors shadow-lg"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-medieval-brown/70 dark:text-parchment/70 font-serif">
            Firebase authentication required
          </p>
        </div>
      </motion.div>
    </div>
  )
}

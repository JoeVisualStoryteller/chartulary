import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../hooks/useAuth'

export default function Admin(): JSX.Element {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async (): Promise<void> => {
    await logout()
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 to-medieval-brown dark:from-amber-950 dark:to-black px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-parchment dark:bg-parchment-dark p-8 rounded-lg border-4 border-gold dark:border-gold-bright shadow-2xl"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-decorative text-medieval-brown dark:text-gold-bright">
              Admin Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-medieval-brown dark:bg-medieval-brown-dark text-parchment font-serif rounded hover:opacity-80 transition-opacity"
            >
              Logout
            </button>
          </div>

          <div className="mb-6 p-4 bg-gold/20 dark:bg-gold-bright/20 rounded border border-gold dark:border-gold-bright">
            <p className="font-serif text-medieval-brown dark:text-parchment">
              <strong>Logged in as:</strong> {user?.email}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-medieval-brown rounded-lg border-2 border-gold dark:border-gold-bright">
              <h2 className="text-2xl font-decorative text-medieval-brown dark:text-gold-bright mb-3">
                Diary Management
              </h2>
              <p className="font-serif text-medieval-brown/70 dark:text-parchment/70 mb-4">
                Create and manage diary entries
              </p>
              <button className="px-4 py-2 bg-gold dark:bg-gold-bright text-medieval-brown font-serif rounded hover:bg-amber-500 dark:hover:bg-amber-400 transition-colors">
                Manage Entries
              </button>
            </div>

            <div className="p-6 bg-white dark:bg-medieval-brown rounded-lg border-2 border-gold dark:border-gold-bright">
              <h2 className="text-2xl font-decorative text-medieval-brown dark:text-gold-bright mb-3">
                Gallery Management
              </h2>
              <p className="font-serif text-medieval-brown/70 dark:text-parchment/70 mb-4">
                Upload and organize artworks
              </p>
              <button className="px-4 py-2 bg-gold dark:bg-gold-bright text-medieval-brown font-serif rounded hover:bg-amber-500 dark:hover:bg-amber-400 transition-colors">
                Manage Gallery
              </button>
            </div>

            <div className="p-6 bg-white dark:bg-medieval-brown rounded-lg border-2 border-gold dark:border-gold-bright">
              <h2 className="text-2xl font-decorative text-medieval-brown dark:text-gold-bright mb-3">
                Comments
              </h2>
              <p className="font-serif text-medieval-brown/70 dark:text-parchment/70 mb-4">
                Moderate user comments
              </p>
              <button className="px-4 py-2 bg-gold dark:bg-gold-bright text-medieval-brown font-serif rounded hover:bg-amber-500 dark:hover:bg-amber-400 transition-colors">
                View Comments
              </button>
            </div>

            <div className="p-6 bg-white dark:bg-medieval-brown rounded-lg border-2 border-gold dark:border-gold-bright">
              <h2 className="text-2xl font-decorative text-medieval-brown dark:text-gold-bright mb-3">
                Analytics
              </h2>
              <p className="font-serif text-medieval-brown/70 dark:text-parchment/70 mb-4">
                View site analytics
              </p>
              <button className="px-4 py-2 bg-gold dark:bg-gold-bright text-medieval-brown font-serif rounded hover:bg-amber-500 dark:hover:bg-amber-400 transition-colors">
                View Analytics
              </button>
            </div>

            <div className="p-6 bg-white dark:bg-medieval-brown rounded-lg border-2 border-gold dark:border-gold-bright">
              <h2 className="text-2xl font-decorative text-medieval-brown dark:text-gold-bright mb-3">
                Settings
              </h2>
              <p className="font-serif text-medieval-brown/70 dark:text-parchment/70 mb-4">
                Configure site settings
              </p>
              <button className="px-4 py-2 bg-gold dark:bg-gold-bright text-medieval-brown font-serif rounded hover:bg-amber-500 dark:hover:bg-amber-400 transition-colors">
                Settings
              </button>
            </div>

            <div className="p-6 bg-white dark:bg-medieval-brown rounded-lg border-2 border-gold dark:border-gold-bright">
              <h2 className="text-2xl font-decorative text-medieval-brown dark:text-gold-bright mb-3">
                Documentation
              </h2>
              <p className="font-serif text-medieval-brown/70 dark:text-parchment/70 mb-4">
                View setup instructions
              </p>
              <button className="px-4 py-2 bg-gold dark:bg-gold-bright text-medieval-brown font-serif rounded hover:bg-amber-500 dark:hover:bg-amber-400 transition-colors">
                Read Docs
              </button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-amber-100 dark:bg-amber-900/30 rounded border border-amber-500">
            <h3 className="font-decorative text-lg text-medieval-brown dark:text-gold-bright mb-2">
              Quick Start
            </h3>
            <ul className="list-disc list-inside font-serif text-medieval-brown dark:text-parchment space-y-1 text-sm">
              <li>Configure Firebase in src/config/firebase.ts</li>
              <li>Set up Firestore collections and security rules</li>
              <li>Enable Firebase Authentication</li>
              <li>Create your first admin user in Firebase Console</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

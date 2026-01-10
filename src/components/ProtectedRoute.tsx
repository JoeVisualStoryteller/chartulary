import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps): JSX.Element {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-900 to-medieval-brown dark:from-amber-950 dark:to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gold dark:border-gold-bright mx-auto mb-4"></div>
          <p className="text-parchment font-serif">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />
  }

  return <>{children}</>
}

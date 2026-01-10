import { Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { AudioProvider } from './contexts/AudioContext'
import { AuthProvider } from './hooks/useAuth'
import { ThemeToggle } from './components/ThemeToggle'
import { AudioPlayer } from './components/AudioPlayer'
import { PageTransition } from './components/PageTransition'
import { ProtectedRoute } from './components/ProtectedRoute'
import Home from './pages/Home'
import ArtistStatement from './pages/ArtistStatement'
import Chamber from './pages/Chamber'
import Paintings from './pages/Paintings'
import Drawings from './pages/Drawings'
import GraphicDesign from './pages/GraphicDesign'
import BookCovers from './pages/BookCovers'
import Shop from './pages/Shop'
import DiaryEntrance from './pages/DiaryEntrance'
import Diary from './pages/Diary'
import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin'
import NotFound from './pages/NotFound'
import { initializeAnalytics, trackPageView } from './config/analytics'
import { reportWebVitals } from './utils/reportWebVitals'
import './i18n/config'

function App(): JSX.Element {
  const location = useLocation()

  useEffect(() => {
    initializeAnalytics()
    reportWebVitals()
  }, [])

  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location])

  return (
    <HelmetProvider>
      <ThemeProvider>
        <AudioProvider>
          <AuthProvider>
            <ThemeToggle />
            <AudioPlayer />
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artist-statement" element={<ArtistStatement />} />
                <Route path="/chamber" element={<Chamber />} />
                <Route path="/paintings" element={<Paintings />} />
                <Route path="/drawings" element={<Drawings />} />
                <Route path="/graphic-design" element={<GraphicDesign />} />
                <Route path="/book-covers" element={<BookCovers />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/diary-entrance" element={<DiaryEntrance />} />
                <Route path="/diary" element={<Diary />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <Admin />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </AuthProvider>
        </AudioProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App

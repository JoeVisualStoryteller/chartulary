import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
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

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
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
      </Routes>
    </AnimatePresence>
  )
}

export default App

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react'

interface AudioContextType {
  isPlaying: boolean
  volume: number
  isMinimized: boolean
  togglePlay: () => void
  setVolume: (volume: number) => void
  toggleMinimize: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function useAudio(): AudioContextType {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}

interface AudioProviderProps {
  children: ReactNode
  audioSrc?: string
}

export function AudioProvider({ children, audioSrc = '/audio/medieval-music.mp3' }: AudioProviderProps): JSX.Element {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [volume, setVolumeState] = useState<number>(() => {
    const storedVolume = localStorage.getItem('chartulary-volume')
    return storedVolume ? parseFloat(storedVolume) : 0.5
  })
  const [isMinimized, setIsMinimized] = useState<boolean>(() => {
    const storedMinimized = localStorage.getItem('chartulary-audio-minimized')
    return storedMinimized === 'true'
  })

  useEffect(() => {
    const audio = new Audio(audioSrc)
    audio.loop = true
    audio.volume = volume
    audioRef.current = audio

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [audioSrc])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      localStorage.setItem('chartulary-volume', volume.toString())
    }
  }, [volume])

  useEffect(() => {
    localStorage.setItem('chartulary-audio-minimized', isMinimized.toString())
  }, [isMinimized])

  const togglePlay = (): void => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error)
      })
      setIsPlaying(true)
    }
  }

  const setVolume = (newVolume: number): void => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume))
    setVolumeState(clampedVolume)
  }

  const toggleMinimize = (): void => {
    setIsMinimized(prev => !prev)
  }

  const value: AudioContextType = {
    isPlaying,
    volume,
    isMinimized,
    togglePlay,
    setVolume,
    toggleMinimize
  }

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  )
}

import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { motion, AnimatePresence } from 'framer-motion'

interface EasterEggProps {
  type: 'konami' | 'click' | 'typing'
  trigger?: string
  clickCount?: number
  onActivate?: () => void
}

export function EasterEgg({
  type,
  trigger = 'medieval',
  onActivate
}: EasterEggProps): JSX.Element {
  const [activated, setActivated] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    if (type === 'konami') {
      const konamiCode = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a'
      ]
      let konamiIndex = 0

      const handleKonamiKeyPress = (e: KeyboardEvent): void => {
        if (e.key === konamiCode[konamiIndex]) {
          konamiIndex++
          if (konamiIndex === konamiCode.length) {
            activateEasterEgg('🎮 Konami Code Activated! You found the secret!')
            konamiIndex = 0
          }
        } else {
          konamiIndex = 0
        }
      }

      window.addEventListener('keydown', handleKonamiKeyPress)
      return () => window.removeEventListener('keydown', handleKonamiKeyPress)
    }

    if (type === 'typing') {
      let typedText = ''
      const handleTyping = (e: KeyboardEvent): void => {
        if (e.key.length === 1) {
          typedText += e.key.toLowerCase()
          if (typedText.length > trigger.length) {
            typedText = typedText.slice(-trigger.length)
          }
          if (typedText === trigger.toLowerCase()) {
            activateEasterEgg(`📜 You typed "${trigger}"! A medieval secret revealed!`)
            typedText = ''
          }
        }
      }

      window.addEventListener('keydown', handleTyping)
      return () => window.removeEventListener('keydown', handleTyping)
    }
  }, [type, trigger])

  const activateEasterEgg = (msg: string): void => {
    setActivated(true)
    setMessage(msg)
    triggerConfetti()
    onActivate?.()

    setTimeout(() => {
      setActivated(false)
      setMessage('')
    }, 5000)
  }

  const triggerConfetti = (): void => {
    const duration = 3000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 }

    const randomInRange = (min: number, max: number): number => {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        clearInterval(interval)
        return
      }

      const particleCount = 50 * (timeLeft / duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#d4af37', '#ffd700', '#f4e4c1', '#3d2817']
      })

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#d4af37', '#ffd700', '#f4e4c1', '#3d2817']
      })
    }, 250)
  }

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] max-w-md"
        >
          <div className="bg-parchment dark:bg-parchment-dark border-4 border-gold dark:border-gold-bright rounded-lg p-8 shadow-2xl">
            <div className="text-center">
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="text-6xl mb-4"
              >
                ⚔️
              </motion.div>
              <h3 className="text-2xl font-decorative text-medieval-brown dark:text-gold-bright mb-3">
                Secret Discovered!
              </h3>
              <p className="text-medieval-brown dark:text-parchment font-serif">{message}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface ClickEasterEggProps {
  targetId: string
  clickCount?: number
  onActivate?: () => void
}

export function ClickEasterEgg({
  targetId,
  clickCount = 3,
  onActivate
}: ClickEasterEggProps): JSX.Element {
  const [, setClicks] = useState<number>(0)
  const [activated, setActivated] = useState<boolean>(false)
  const [message] = useState<string>('🚪 You found the secret chamber!')

  useEffect(() => {
    const element = document.getElementById(targetId)
    if (!element) return

    let clickTimeout: NodeJS.Timeout

    const handleClick = (): void => {
      setClicks((prev) => {
        const newCount = prev + 1
        if (newCount >= clickCount) {
          activateSecret()
          return 0
        }
        return newCount
      })

      clearTimeout(clickTimeout)
      clickTimeout = setTimeout(() => {
        setClicks(0)
      }, 2000)
    }

    element.addEventListener('click', handleClick)
    return () => {
      element.removeEventListener('click', handleClick)
      clearTimeout(clickTimeout)
    }
  }, [targetId, clickCount])

  const activateSecret = (): void => {
    setActivated(true)
    triggerConfetti()
    onActivate?.()

    setTimeout(() => {
      setActivated(false)
    }, 5000)
  }

  const triggerConfetti = (): void => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#ffd700', '#f4e4c1', '#3d2817']
    })
  }

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] max-w-md"
        >
          <div className="bg-parchment dark:bg-parchment-dark border-4 border-gold dark:border-gold-bright rounded-lg p-8 shadow-2xl">
            <div className="text-center">
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="text-6xl mb-4"
              >
                🏰
              </motion.div>
              <h3 className="text-2xl font-decorative text-medieval-brown dark:text-gold-bright mb-3">
                Secret Discovered!
              </h3>
              <p className="text-medieval-brown dark:text-parchment font-serif">{message}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

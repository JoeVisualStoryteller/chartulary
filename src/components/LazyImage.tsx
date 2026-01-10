import { useState, useEffect, useRef, ImgHTMLAttributes } from 'react'

interface LazyImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  src: string
  alt: string
  className?: string
  placeholderClassName?: string
}

export function LazyImage({
  src,
  alt,
  className = '',
  placeholderClassName = '',
  ...props
}: LazyImageProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [isInView, setIsInView] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px'
      }
    )

    observer.observe(imgRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleLoad = (): void => {
    setIsLoaded(true)
  }

  const handleError = (): void => {
    setHasError(true)
    setIsLoaded(true)
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${placeholderClassName}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-amber-800 dark:bg-amber-950 animate-pulse" />
      )}

      {hasError ? (
        <div className="w-full h-full flex items-center justify-center bg-amber-800 dark:bg-amber-950 text-parchment dark:text-parchment/70">
          <div className="text-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mx-auto mb-2 opacity-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <p className="text-sm font-serif">Image not available</p>
          </div>
        </div>
      ) : (
        isInView && (
          <img
            src={src}
            alt={alt}
            className={`${className} transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            {...props}
          />
        )
      )}
    </div>
  )
}

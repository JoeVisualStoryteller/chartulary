import ReactGA from 'react-ga4'

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || ''

export function initializeAnalytics(): void {
  if (import.meta.env.PROD && MEASUREMENT_ID) {
    ReactGA.initialize(MEASUREMENT_ID)
  }
}

export function trackPageView(path: string): void {
  if (import.meta.env.PROD) {
    ReactGA.send({ hitType: 'pageview', page: path })
  }
}

export function trackEvent(category: string, action: string, label?: string, value?: number): void {
  if (import.meta.env.PROD) {
    ReactGA.event({
      category,
      action,
      label,
      value
    })
  }
}

import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals'

function sendToAnalytics(metric: Metric): void {
  // Send to your analytics endpoint
  // Example: Google Analytics 4
  if (window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true
    })
  }

  // Log to console in development
  if (import.meta.env.DEV) {
    console.log(metric)
  }
}

export function reportWebVitals(): void {
  onCLS(sendToAnalytics)
  onINP(sendToAnalytics)
  onFCP(sendToAnalytics)
  onLCP(sendToAnalytics)
  onTTFB(sendToAnalytics)
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export interface SEOData {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  author?: string
  publishedTime?: string
}

export function generateMetaTags(data: SEOData): Record<string, string> {
  const baseUrl = 'https://yourusername.github.io/chartulary'
  const {
    title,
    description,
    keywords = 'medieval art, portfolio, paintings, drawings, graphic design',
    image = `${baseUrl}/images/og-image.jpg`,
    url = baseUrl,
    type = 'website',
    author = 'Artist Name',
    publishedTime
  } = data

  return {
    // Basic Meta Tags
    title: `${title} | Chartulary`,
    description,
    keywords,
    author,

    // Open Graph Tags
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:url': url,
    'og:type': type,
    'og:site_name': 'Chartulary',

    // Twitter Card Tags
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,

    // Article Meta (if applicable)
    ...(publishedTime && { 'article:published_time': publishedTime }),
    ...(author && type === 'article' && { 'article:author': author })
  }
}

export function generateStructuredData(type: 'Person' | 'Article', data: Record<string, unknown>): string {
  const baseStructure = {
    '@context': 'https://schema.org'
  }

  if (type === 'Person') {
    return JSON.stringify({
      ...baseStructure,
      '@type': 'Person',
      name: data.name || 'Artist Name',
      jobTitle: data.jobTitle || 'Visual Artist',
      url: data.url || 'https://yourusername.github.io/chartulary',
      sameAs: data.sameAs || [],
      description: data.description || 'Medieval-inspired visual artist and storyteller'
    })
  }

  if (type === 'Article') {
    return JSON.stringify({
      ...baseStructure,
      '@type': 'Article',
      headline: data.headline,
      author: {
        '@type': 'Person',
        name: data.authorName || 'Artist Name'
      },
      datePublished: data.datePublished,
      dateModified: data.dateModified || data.datePublished,
      image: data.image,
      description: data.description
    })
  }

  return ''
}

export function getCanonicalUrl(path: string): string {
  const baseUrl = 'https://yourusername.github.io/chartulary'
  return `${baseUrl}${path}`
}

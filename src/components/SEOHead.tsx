import { Helmet } from 'react-helmet-async'
import { SEOData, generateMetaTags, getCanonicalUrl, generateStructuredData } from '../utils/seo'

interface SEOHeadProps {
  data: SEOData
  canonicalPath?: string
  structuredData?: {
    type: 'Person' | 'Article'
    data: Record<string, unknown>
  }
}

export function SEOHead({ data, canonicalPath, structuredData }: SEOHeadProps): JSX.Element {
  const metaTags = generateMetaTags(data)
  const canonicalUrl = canonicalPath ? getCanonicalUrl(canonicalPath) : undefined

  return (
    <Helmet>
      {/* Title */}
      <title>{metaTags.title}</title>

      {/* Basic Meta Tags */}
      <meta name="description" content={metaTags.description} />
      <meta name="keywords" content={metaTags.keywords} />
      <meta name="author" content={metaTags.author} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={metaTags['og:title']} />
      <meta property="og:description" content={metaTags['og:description']} />
      <meta property="og:image" content={metaTags['og:image']} />
      <meta property="og:url" content={metaTags['og:url']} />
      <meta property="og:type" content={metaTags['og:type']} />
      <meta property="og:site_name" content={metaTags['og:site_name']} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={metaTags['twitter:card']} />
      <meta name="twitter:title" content={metaTags['twitter:title']} />
      <meta name="twitter:description" content={metaTags['twitter:description']} />
      <meta name="twitter:image" content={metaTags['twitter:image']} />

      {/* Article Meta (if applicable) */}
      {metaTags['article:published_time'] && (
        <meta property="article:published_time" content={metaTags['article:published_time']} />
      )}
      {metaTags['article:author'] && (
        <meta property="article:author" content={metaTags['article:author']} />
      )}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {generateStructuredData(structuredData.type, structuredData.data)}
        </script>
      )}
    </Helmet>
  )
}

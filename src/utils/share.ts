export interface ShareData {
  url: string
  title: string
  description?: string
  imageUrl?: string
}

export function generateTwitterShareUrl(data: ShareData): string {
  const params = new URLSearchParams({
    url: data.url,
    text: `${data.title}${data.description ? ` - ${data.description}` : ''}`
  })
  return `https://twitter.com/intent/tweet?${params.toString()}`
}

export function generateFacebookShareUrl(data: ShareData): string {
  const params = new URLSearchParams({
    u: data.url
  })
  return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`
}

export function generatePinterestShareUrl(data: ShareData): string {
  if (!data.imageUrl) {
    throw new Error('Pinterest sharing requires an image URL')
  }
  const params = new URLSearchParams({
    url: data.url,
    media: data.imageUrl,
    description: data.description || data.title
  })
  return `https://pinterest.com/pin/create/button/?${params.toString()}`
}

export function generateLinkedInShareUrl(data: ShareData): string {
  const params = new URLSearchParams({
    url: data.url
  })
  return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      const result = document.execCommand('copy')
      textArea.remove()
      return result
    }
  } catch (error) {
    console.error('Failed to copy to clipboard:', error)
    return false
  }
}

export function openShareWindow(url: string, title: string): void {
  const width = 600
  const height = 400
  const left = (window.innerWidth - width) / 2
  const top = (window.innerHeight - height) / 2

  window.open(
    url,
    title,
    `width=${width},height=${height},left=${left},top=${top},toolbar=0,menubar=0,location=0,status=0`
  )
}

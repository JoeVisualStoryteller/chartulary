import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ShareData,
  generateTwitterShareUrl,
  generateFacebookShareUrl,
  generatePinterestShareUrl,
  copyToClipboard,
  openShareWindow
} from '../utils/share'

interface ShareButtonsProps {
  data: ShareData
  showPinterest?: boolean
}

export function ShareButtons({ data, showPinterest = false }: ShareButtonsProps): JSX.Element {
  const [copied, setCopied] = useState<boolean>(false)

  const handleShare = (platform: 'twitter' | 'facebook' | 'pinterest'): void => {
    let url = ''
    let title = ''

    switch (platform) {
      case 'twitter':
        url = generateTwitterShareUrl(data)
        title = 'Share on Twitter'
        break
      case 'facebook':
        url = generateFacebookShareUrl(data)
        title = 'Share on Facebook'
        break
      case 'pinterest':
        if (!data.imageUrl) return
        url = generatePinterestShareUrl(data)
        title = 'Share on Pinterest'
        break
    }

    openShareWindow(url, title)
  }

  const handleCopyLink = async (): Promise<void> => {
    const success = await copyToClipboard(data.url)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-serif text-medieval-brown dark:text-parchment">Share:</span>

      {/* Twitter */}
      <motion.button
        onClick={() => handleShare('twitter')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 bg-[#1DA1F2] text-white rounded-full hover:opacity-90 transition-opacity"
        aria-label="Share on Twitter"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      </motion.button>

      {/* Facebook */}
      <motion.button
        onClick={() => handleShare('facebook')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 bg-[#4267B2] text-white rounded-full hover:opacity-90 transition-opacity"
        aria-label="Share on Facebook"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </motion.button>

      {/* Pinterest (only if image is provided) */}
      {showPinterest && data.imageUrl && (
        <motion.button
          onClick={() => handleShare('pinterest')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 bg-[#E60023] text-white rounded-full hover:opacity-90 transition-opacity"
          aria-label="Share on Pinterest"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
          </svg>
        </motion.button>
      )}

      {/* Copy Link */}
      <motion.button
        onClick={handleCopyLink}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`p-2 ${
          copied
            ? 'bg-green-600 dark:bg-green-500'
            : 'bg-gold dark:bg-gold-bright'
        } text-medieval-brown rounded-full hover:opacity-90 transition-all`}
        aria-label="Copy link"
      >
        {copied ? (
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        )}
      </motion.button>

      {copied && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="text-sm font-serif text-green-600 dark:text-green-400"
        >
          Copied!
        </motion.span>
      )}
    </div>
  )
}

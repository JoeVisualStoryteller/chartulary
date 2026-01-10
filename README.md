# Chartulary

An interactive, scroll-based multimedia portfolio website inspired by medieval aesthetics and immersive storytelling.

## 🎨 Features

### Core Features
- **Parallax Scrolling** - Multi-layer parallax effects on the home page
- **Interactive Navigation** - Medieval-themed chamber hub with door-style navigation
- **Gallery Components** - Responsive image galleries for artwork
- **Carousel System** - Image carousels for design portfolios
- **Scroll Animations** - Smooth Framer Motion animations throughout
- **Responsive Design** - Mobile-friendly layouts with desktop enhancements
- **Medieval Theme** - Custom Tailwind CSS theme with parchment, gold, and brown colors

### New Interactive Features
- **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
- **Contact Form** - EmailJS-powered contact form with validation
- **Audio Player** - Floating medieval music player with volume controls
- **Page Transitions** - Smooth route transitions with Framer Motion
- **Image Lazy Loading** - Optimized image loading with Intersection Observer
- **Image Lightbox** - Full-screen image viewer with keyboard navigation
- **Search & Filter** - Filter galleries by category, year, and tags
- **SEO & Metadata** - Comprehensive meta tags and Open Graph support
- **Social Sharing** - Share buttons for Twitter, Facebook, Pinterest
- **Easter Eggs** - Hidden interactive elements (Konami code, typing triggers)

### Admin Features
- **Firebase Integration** - Backend for dynamic content management
- **Admin Dashboard** - Protected admin panel with authentication
- **Comment System** - Moderated comments on diary entries
- **Analytics** - Google Analytics 4 integration with Web Vitals tracking
- **Internationalization** - Multi-language support (English, Spanish, French)

### Technical Excellence
- **Performance Optimized** - Code splitting, compression, minification
- **Accessibility** - WCAG AA compliant with keyboard navigation
- **Custom 404 Page** - Medieval-themed error page
- **Sitemap & robots.txt** - SEO-friendly crawling configuration

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Tailwind CSS v3** - Utility-first styling
- **Google Fonts** - Cinzel decorative font

## 📁 Project Structure

```
chartulary/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Gallery.tsx
│   │   └── Carousel.tsx
│   ├── pages/          # Route pages
│   │   ├── Home.tsx
│   │   ├── Chamber.tsx
│   │   ├── Paintings.tsx
│   │   ├── Drawings.tsx
│   │   ├── GraphicDesign.tsx
│   │   ├── BookCovers.tsx
│   │   ├── Shop.tsx
│   │   ├── DiaryEntrance.tsx
│   │   ├── Diary.tsx
│   │   └── ArtistStatement.tsx
│   ├── App.tsx         # Main app with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Quick Start (Local Development)

```bash
# 1. Copy environment template
cp .env.example .env.local

# 2. Add your credentials to .env.local (see QUICK_START.md)

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open http://localhost:3000/chartulary/
```

### Deployment (GitHub Pages)

This project uses **secure environment variables** for all credentials. No secrets are committed to the repository.

**Option 1: Automatic (GitHub Actions)**
```bash
# 1. Add secrets to GitHub (Settings → Secrets → Actions)
# 2. Push to main branch
git push origin main
# GitHub Actions automatically builds and deploys
```

**Option 2: Manual (Local)**
```bash
# Uses your .env.local credentials
npm run build
npm run deploy
```

📚 **Full Instructions**: See [QUICK_START.md](QUICK_START.md) and [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

## 🎯 Site Map

- `/` - Home page with parallax scroll intro
- `/artist-statement` - About the artist
- `/chamber` - Central navigation hub
- `/paintings` - Oil paintings gallery
- `/drawings` - Drawings/sketches gallery
- `/graphic-design` - Design portfolio with carousels
- `/book-covers` - Book cover designs
- `/shop` - Coming soon placeholder
- `/diary-entrance` - Story transition to diary
- `/diary` - Journal/blog entries

## 🎨 Customization

### Colors

Edit [tailwind.config.js](tailwind.config.js) to customize the theme:

```js
colors: {
  'medieval-brown': '#3d2817',
  'parchment': '#f4e4c1',
  'gold': '#d4af37',
}
```

### Content

1. **Artist Info**: Update [src/pages/ArtistStatement.tsx](src/pages/ArtistStatement.tsx)
2. **Images**: Add your artwork to `/public/images/`
3. **Gallery Data**: Update the image arrays in each gallery page
4. **Diary Entries**: Add entries to [src/pages/Diary.tsx](src/pages/Diary.tsx)

### Adding Images

Create an `images` folder in `public/`:

```bash
mkdir -p public/images
```

Then reference images in your components:
```tsx
{ id: 1, src: '/images/your-image.jpg', alt: 'Description', title: 'Title' }
```

## 📝 Configuration Checklist

### Required Setup

- [ ] **Environment Variables** - Copy `.env.example` to `.env.local` and add credentials
- [ ] **Firebase** - Create project, enable Auth/Firestore/Storage, set security rules
- [ ] **EmailJS** - Create account, add service, create template
- [ ] **Google Analytics** - Create GA4 property, get Measurement ID
- [ ] **GitHub Secrets** - Add all environment variables as repository secrets
- [ ] **URLs** - Update `robots.txt` and `sitemap.xml` with your GitHub Pages URL
- [ ] **Audio** - Add medieval music file to `/public/audio/medieval-music.mp3`

### Content Customization

- [ ] Replace placeholder text in ArtistStatement
- [ ] Add your artwork images to `/public/images/`
- [ ] Update image arrays in gallery pages with your art
- [ ] Customize colors in `tailwind.config.js`
- [ ] Add custom illustrations for parallax layers

### Optional Enhancements

- [ ] Configure Firebase admin user for CMS access
- [ ] Set up email templates in EmailJS
- [ ] Add more languages in i18n config
- [ ] Customize 404 page with your branding
- [ ] Add more easter eggs for interactive fun

## 🎭 Inspiration

Inspired by [jessieconlisk.com](https://jessieconlisk.com/) - a theatrical, scroll-based portfolio with medieval storytelling.

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

---

Built with React, TypeScript, Framer Motion, and Tailwind CSS v3
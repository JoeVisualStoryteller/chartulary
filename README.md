# Chartulary

An interactive, scroll-based multimedia portfolio website inspired by medieval aesthetics and immersive storytelling.

## 🎨 Features

- **Parallax Scrolling** - Multi-layer parallax effects on the home page
- **Interactive Navigation** - Medieval-themed chamber hub with door-style navigation
- **Gallery Components** - Responsive image galleries for artwork
- **Carousel System** - Image carousels for design portfolios
- **Scroll Animations** - Smooth Framer Motion animations throughout
- **Responsive Design** - Mobile-friendly layouts with desktop enhancements
- **Medieval Theme** - Custom Tailwind CSS theme with parchment, gold, and brown colors

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

### Installation

1. Navigate to the project directory:
```bash
cd /home/footlover/Documents/Github/chartulary
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to the URL shown (typically http://localhost:3000)

### Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

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

## 📝 Next Steps

1. **Add Your Content**
   - Replace placeholder text in ArtistStatement
   - Add your artwork images to `/public/images/`
   - Update image arrays in gallery pages

2. **Customize Design**
   - Add custom illustrations for parallax layers
   - Adjust color scheme in Tailwind config
   - Modify fonts (currently using Cinzel)

3. **Enhance Features**
   - Add lightbox functionality for images
   - Implement image lazy loading
   - Add metadata and SEO tags
   - Create custom 404 page

4. **Deploy**
   - GitHub Pages
   - Vercel
   - Netlify
   - Any static hosting service

## 🎭 Inspiration

Inspired by [jessieconlisk.com](https://jessieconlisk.com/) - a theatrical, scroll-based portfolio with medieval storytelling.

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

---

Built with React, TypeScript, Framer Motion, and Tailwind CSS v3
# Quick Start Guide

## Run the Development Server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser!

## What You'll See

Your portfolio site is already set up with all the pages from the Jessie Conlisk analysis:

### Pages Ready to Customize:

1. **Home (`/`)** - Parallax scroll intro with medieval poetry
2. **Chamber (`/chamber`)** - Main navigation hub with door-style links
3. **Paintings (`/paintings`)** - Gallery for your paintings
4. **Drawings (`/drawings`)** - Gallery for your drawings
5. **Graphic Design (`/graphic-design`)** - Portfolio with carousels
6. **Book Covers (`/book-covers`)** - Book cover showcase
7. **Shop (`/shop`)** - "Coming Soon" placeholder
8. **Diary Entrance (`/diary-entrance`)** - Transition page with poetry
9. **Diary (`/diary`)** - Blog/journal entries
10. **Artist Statement (`/artist-statement`)** - Your bio page

## First Steps to Customize

### 1. Update Your Artist Info

Edit [src/pages/ArtistStatement.tsx](src/pages/ArtistStatement.tsx):

```tsx
// Replace these placeholders:
[Your name] → Your actual name
[age] → Your age
[location] → Your location
[your background] → Your education/experience
your.email@example.com → Your actual email
```

### 2. Add Your Images

Create placeholder images or add real ones:

```bash
# The folder is already created at:
public/images/

# Add files like:
# public/images/painting1.jpg
# public/images/drawing1.jpg
# public/images/design1-1.jpg
# etc.
```

### 3. Update Gallery Data

Edit each gallery page to reference your images:

**Example - [src/pages/Paintings.tsx](src/pages/Paintings.tsx):**

```tsx
const paintings = [
  { id: 1, src: '/images/painting1.jpg', alt: 'Sunset Landscape', title: 'Sunset Over Mountains' },
  { id: 2, src: '/images/painting2.jpg', alt: 'Portrait', title: 'Lady in Blue' },
  // Add more...
]
```

Do the same for:
- [src/pages/Drawings.tsx](src/pages/Drawings.tsx)
- [src/pages/GraphicDesign.tsx](src/pages/GraphicDesign.tsx)
- [src/pages/BookCovers.tsx](src/pages/BookCovers.tsx)

### 4. Customize Colors

Edit [tailwind.config.js](tailwind.config.js):

```js
colors: {
  'medieval-brown': '#3d2817',  // Change this
  'parchment': '#f4e4c1',       // Change this
  'gold': '#d4af37',            // Change this
}
```

### 5. Add Diary Entries

Edit [src/pages/Diary.tsx](src/pages/Diary.tsx):

```tsx
const entries: DiaryEntry[] = [
  {
    id: 1,
    date: 'December 13, 2025',
    title: 'Your First Entry',
    content: 'Your thoughts here...',
    image: '/images/diary1.jpg', // optional
  },
  // Add more entries...
]
```

## Key Features Already Built

### Parallax Scrolling (Home Page)

The home page uses Framer Motion's `useScroll` and `useTransform` for multi-layer parallax:

- Background layer moves slowest
- Midground moves medium speed
- Foreground moves fastest

You can add custom illustrations to each layer in [src/pages/Home.tsx](src/pages/Home.tsx).

### Gallery Component

Reusable gallery with:
- Responsive grid layout
- Hover animations
- Image error handling with placeholders

### Carousel Component

Image carousel with:
- Left/right arrow navigation
- Smooth transitions
- Dot indicators
- Error handling

### Responsive Design

All pages are mobile-friendly with Tailwind's responsive classes:
- `md:` - Tablets (768px+)
- `lg:` - Desktops (1024px+)

## Testing Different Routes

Navigate to these URLs in your browser:

```
http://localhost:3000/
http://localhost:3000/chamber
http://localhost:3000/paintings
http://localhost:3000/drawings
http://localhost:3000/graphic-design
http://localhost:3000/book-covers
http://localhost:3000/shop
http://localhost:3000/diary-entrance
http://localhost:3000/diary
http://localhost:3000/artist-statement
```

## Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

Preview it locally:

```bash
npm run preview
```

## Deploy Options

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update [vite.config.ts](vite.config.ts):
```ts
export default defineConfig({
  base: '/chartulary/', // Your repo name
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

### Vercel (Recommended)

1. Push to GitHub
2. Visit https://vercel.com
3. Import your repository
4. Deploy automatically!

### Netlify

1. Drag and drop the `dist/` folder at https://netlify.com/drop
2. Or connect your GitHub repo for automatic deploys

## Troubleshooting

### Images not showing?

Make sure:
1. Images are in `public/images/`
2. Paths start with `/` like `/images/your-image.jpg`
3. File names match exactly (case-sensitive)

### Animations not working?

Check that Framer Motion is installed:
```bash
npm list framer-motion
```

### Tailwind styles not applying?

Run the dev server again:
```bash
npm run dev
```

## Next Enhancements

Consider adding:

1. **Image Lightbox** - Click to view full-size
2. **Lazy Loading** - Better performance for many images
3. **Contact Form** - EmailJS or similar
4. **Analytics** - Google Analytics or Plausible
5. **SEO** - Meta tags, Open Graph images
6. **404 Page** - Custom not-found page
7. **Loading States** - Skeleton loaders
8. **Smooth Scrolling** - Between sections
9. **Custom Cursors** - Medieval-themed pointer
10. **Background Music** - Optional ambient audio

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Router Docs](https://reactrouter.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Vite Docs](https://vitejs.dev/)

---

Have fun building your portfolio!

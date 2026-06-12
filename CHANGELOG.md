# Changelog

All notable changes to Chartulary are documented here.
Follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) with [Semantic Versioning](https://semver.org/).

- **MAJOR**: breaking structural changes (routing architecture, full redesign)
- **MINOR**: new features (new page, new component, new section)
- **PATCH**: fixes and content updates (image swap, copy edit, bug fix)

---

## [1.0.1] — 2026-06-12

### Fixed
- Enabled GitHub Pages to serve from `prod` branch
- Rolled back Firebase integration that broke production rendering

## [1.0.0] — 2026-06-11

### Added
- 10-page medieval-themed portfolio SPA: Home, Chamber, Paintings, Drawings, Graphic Design, Book Covers, Shop, Diary Entrance, Diary, Artist Statement
- Parallax home page with 3-layer scroll animation (Framer Motion `useScroll` + `useTransform`, 300vh container)
- Chamber navigation hub with door-style 5-card grid
- Reusable `Gallery` component — responsive 3-column grid with hover zoom and `whileInView` stagger
- Reusable `Carousel` component — 16:9 with dots, arrows, and `AnimatePresence` transitions
- Custom Tailwind theme: `medieval-brown` (#3d2817), `parchment` (#f4e4c1), `gold` (#d4af37), Cinzel font
- Client-side routing via React Router v6 with basename `/chartulary` for GitHub Pages
- GitHub Pages deployment via gh-pages to `prod` branch
- `public/404.html` SPA routing workaround for GitHub Pages sub-path refreshes

### State at release
- All gallery images are placeholder — real artwork not yet uploaded
- Artist name, bio, and email are template text
- Shop page is a coming-soon stub

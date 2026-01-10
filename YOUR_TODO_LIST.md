# Your Todo List - Chartulary Setup

This is your personal checklist of tasks to complete the Chartulary setup.

---

## 🚀 Phase 1: Get Credentials (30-45 minutes)

### Firebase Setup
- [ ] Go to https://console.firebase.google.com
- [ ] Create new project (name: "chartulary-portfolio" or similar)
- [ ] Enable Authentication → Email/Password provider
- [ ] Enable Firestore Database (production mode)
- [ ] Copy/paste the security rules from [CREDENTIALS_SETUP.md](CREDENTIALS_SETUP.md#enable-firestore-database) section 6
- [ ] Enable Storage
- [ ] Copy/paste the storage rules from [CREDENTIALS_SETUP.md](CREDENTIALS_SETUP.md#enable-storage) section 6
- [ ] Get your Firebase config (Project Settings → Your apps → Web)
- [ ] Save these 6 values somewhere safe:
  - `apiKey`
  - `authDomain`
  - `projectId`
  - `storageBucket`
  - `messagingSenderId`
  - `appId`

### EmailJS Setup
- [ ] Go to https://emailjs.com
- [ ] Sign up for free account
- [ ] Verify your email
- [ ] Add email service (connect Gmail/Outlook/etc.)
- [ ] Create email template (copy template from [CREDENTIALS_SETUP.md](CREDENTIALS_SETUP.md#create-email-template))
- [ ] Save these 3 values:
  - Service ID (from Email Services page)
  - Template ID (from Email Templates page)
  - Public Key (from Account → General)

### Google Analytics Setup
- [ ] Go to https://analytics.google.com
- [ ] Create new property
- [ ] Add web data stream
- [ ] Save this 1 value:
  - Measurement ID (format: G-XXXXXXXXXX)

**✅ After this phase, you'll have all 10 credential values**

---

## 💻 Phase 2: Local Development Setup (5 minutes)

- [ ] Open terminal in chartulary directory
- [ ] Run: `cp .env.example .env.local`
- [ ] Open `.env.local` in your editor
- [ ] Paste your 10 credential values into `.env.local`:
```bash
VITE_FIREBASE_API_KEY=paste_here
VITE_FIREBASE_AUTH_DOMAIN=paste_here
VITE_FIREBASE_PROJECT_ID=paste_here
VITE_FIREBASE_STORAGE_BUCKET=paste_here
VITE_FIREBASE_MESSAGING_SENDER_ID=paste_here
VITE_FIREBASE_APP_ID=paste_here

VITE_EMAILJS_SERVICE_ID=paste_here
VITE_EMAILJS_TEMPLATE_ID=paste_here
VITE_EMAILJS_PUBLIC_KEY=paste_here

VITE_GA_MEASUREMENT_ID=paste_here
```
- [ ] Save `.env.local`
- [ ] Run: `npm install` (if not already done)
- [ ] Run: `npm run dev`
- [ ] Test that site loads at http://localhost:3000/chartulary/

**✅ After this phase, you can develop locally with all features working**

---

## 🔐 Phase 3: GitHub Secrets Setup (10 minutes)

- [ ] Go to your GitHub repository
- [ ] Navigate to: Settings → Secrets and variables → Actions
- [ ] Click "New repository secret"
- [ ] Add these 10 secrets one by one (copy from your `.env.local`):

1. Name: `VITE_FIREBASE_API_KEY` → Value: (your Firebase API key)
2. Name: `VITE_FIREBASE_AUTH_DOMAIN` → Value: (your Firebase auth domain)
3. Name: `VITE_FIREBASE_PROJECT_ID` → Value: (your Firebase project ID)
4. Name: `VITE_FIREBASE_STORAGE_BUCKET` → Value: (your Firebase storage bucket)
5. Name: `VITE_FIREBASE_MESSAGING_SENDER_ID` → Value: (your Firebase sender ID)
6. Name: `VITE_FIREBASE_APP_ID` → Value: (your Firebase app ID)
7. Name: `VITE_EMAILJS_SERVICE_ID` → Value: (your EmailJS service ID)
8. Name: `VITE_EMAILJS_TEMPLATE_ID` → Value: (your EmailJS template ID)
9. Name: `VITE_EMAILJS_PUBLIC_KEY` → Value: (your EmailJS public key)
10. Name: `VITE_GA_MEASUREMENT_ID` → Value: (your GA measurement ID)

**✅ After this phase, GitHub Actions can build and deploy automatically**

---

## 🌐 Phase 4: Update URLs (5 minutes)

### Update robots.txt
- [ ] Open `public/robots.txt`
- [ ] Replace `yourusername` with your GitHub username
- [ ] Should look like: `https://YOUR_USERNAME.github.io/chartulary/sitemap.xml`
- [ ] Save file

### Update sitemap.xml
- [ ] Open `public/sitemap.xml`
- [ ] Find/replace all `yourusername.github.io` with your actual GitHub username
- [ ] Save file

**✅ After this phase, search engines can properly crawl your site**

---

## 🎵 Phase 5: Add Medieval Music (Optional, 5 minutes)

- [ ] Find a medieval music MP3 file (royalty-free or your own)
- [ ] Create folder: `public/audio/`
- [ ] Save music file as: `public/audio/medieval-music.mp3`
- [ ] Test audio player works on your site

**Suggested sources for royalty-free medieval music:**
- https://pixabay.com/music/search/medieval/
- https://freesound.org/search/?q=medieval
- https://incompetech.com/ (search "medieval")

**✅ After this phase, audio player will work**

---

## 👤 Phase 6: Create Firebase Admin User (10 minutes)

- [ ] Go to Firebase Console → Authentication → Users
- [ ] Click "Add user"
- [ ] Enter your email and password (remember these!)
- [ ] Copy the **User UID** (looks like: `abc123xyz456...`)
- [ ] Go to Firestore Database
- [ ] Click "Start collection"
- [ ] Collection ID: `users`
- [ ] Document ID: paste the **User UID**
- [ ] Add field: `email` (string) = your email
- [ ] Add field: `role` (string) = `admin`
- [ ] Click "Save"

**✅ After this phase, you can log into the admin dashboard**

---

## 🚢 Phase 7: Deploy to GitHub Pages (5 minutes)

### Option A: Automatic (Recommended)
- [ ] Make sure all GitHub Secrets are added (Phase 3)
- [ ] Make sure URLs are updated (Phase 4)
- [ ] Commit all changes:
```bash
git add .
git commit -m "Add secure credentials and complete setup"
git push origin main
```
- [ ] Go to GitHub → Actions tab
- [ ] Watch the deployment workflow run
- [ ] Once complete, visit: `https://YOUR_USERNAME.github.io/chartulary/`

### Option B: Manual
- [ ] Make sure `.env.local` has all credentials
- [ ] Run: `npm run build`
- [ ] Run: `npm run deploy`
- [ ] Wait for deployment to complete
- [ ] Visit: `https://YOUR_USERNAME.github.io/chartulary/`

**✅ After this phase, your site is live!**

---

## ✅ Phase 8: Test Everything (15 minutes)

### Test Dark Mode
- [ ] Visit your deployed site
- [ ] Click the sun/moon toggle (top right)
- [ ] Verify theme switches
- [ ] Refresh page
- [ ] Verify theme persists

### Test Contact Form
- [ ] Go to the contact page
- [ ] Fill out the form
- [ ] Click "Send Message"
- [ ] Check your email (connected to EmailJS)
- [ ] Verify you received the email

### Test Admin Login
- [ ] Go to: `/admin/login`
- [ ] Enter the email/password you created in Firebase
- [ ] Verify you're redirected to admin dashboard
- [ ] Try logging out

### Test Audio Player
- [ ] Click the music icon (if you added audio in Phase 5)
- [ ] Verify music plays/pauses
- [ ] Test volume control
- [ ] Refresh page and verify state persists

### Test Image Lightbox
- [ ] Go to any gallery page (paintings, drawings, etc.)
- [ ] Click on an image
- [ ] Verify lightbox opens full-screen
- [ ] Use arrow keys to navigate
- [ ] Press Escape to close

### Test Search/Filter
- [ ] On a gallery page, use the search box
- [ ] Type something
- [ ] Verify images filter correctly

### Test Analytics
- [ ] Visit several pages on your site
- [ ] Go to Google Analytics dashboard
- [ ] Click "Realtime" view
- [ ] Verify your visits are showing up

### Test 404 Page
- [ ] Go to: `/this-page-does-not-exist`
- [ ] Verify the medieval-themed 404 page appears
- [ ] Click "Return to Home" button

### Test Easter Eggs
- [ ] Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
- [ ] Verify confetti appears
- [ ] Try typing "medieval" on the home page
- [ ] See what happens! 🎉

**✅ After this phase, you know everything works!**

---

## 🎨 Phase 9: Customize Content (Ongoing)

### Replace Placeholder Content
- [ ] Update `src/pages/ArtistStatement.tsx` with your bio
- [ ] Add your artwork images to `public/images/`
- [ ] Update image arrays in gallery pages:
  - `src/pages/Paintings.tsx`
  - `src/pages/Drawings.tsx`
  - `src/pages/GraphicDesign.tsx`
  - `src/pages/BookCovers.tsx`

### Customize Colors (Optional)
- [ ] Edit `tailwind.config.js` colors section
- [ ] Update medieval-brown, parchment, gold colors
- [ ] Run `npm run dev` to see changes

### Add Diary Entries (Optional)
- [ ] Once Firebase is set up, use admin panel
- [ ] Go to `/admin` (after logging in)
- [ ] Create diary entries through the CMS
- [ ] Or manually add to Firestore Database

**✅ After this phase, the site is truly yours!**

---

## 📊 Quick Reference

### Total Time Estimate
- Phase 1: 30-45 minutes (one-time credential setup)
- Phase 2: 5 minutes (local development)
- Phase 3: 10 minutes (GitHub secrets)
- Phase 4: 5 minutes (update URLs)
- Phase 5: 5 minutes (optional audio)
- Phase 6: 10 minutes (admin user)
- Phase 7: 5 minutes (deploy)
- Phase 8: 15 minutes (testing)
- **Total: 1.5 - 2 hours** (then it's done forever!)

### What You Can Skip
- Phase 5 (audio) - Site works without it
- Phase 6 (admin user) - Only needed if you want to use the CMS
- Phase 9 (customization) - Can do later anytime

### Priority Order
1. **Must Do First**: Phases 1-4 (get credentials, set up GitHub)
2. **Must Do Before Deploy**: Phase 7 (deploy the site)
3. **Should Do Soon**: Phase 6 (admin user), Phase 8 (testing)
4. **Can Do Anytime**: Phase 5 (audio), Phase 9 (content)

---

## 🆘 Need Help?

**Check these guides:**
- **Getting credentials**: [CREDENTIALS_SETUP.md](CREDENTIALS_SETUP.md)
- **Quick setup**: [QUICK_START.md](QUICK_START.md)
- **Detailed deployment**: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **Security questions**: [SECURITY.md](SECURITY.md)

**Common issues:**
- Build fails → Check that all 10 GitHub Secrets are added
- Contact form doesn't work → Verify EmailJS credentials
- Can't log in to admin → Check Firebase admin user was created correctly
- Analytics not tracking → Verify GA4 Measurement ID is correct

---

## ✨ You're Almost There!

Once you complete Phases 1-7, your site will be live with:
- 🌗 Dark/light mode
- 📧 Working contact form
- 🎵 Audio player (if you add music)
- 🔒 Secure admin panel
- 📊 Analytics tracking
- 🖼️ Interactive galleries with lightbox
- 🔍 Search and filtering
- 🌍 Multi-language support
- 🎨 Easter eggs and fun surprises

**You've got this!** 🎉

---

*Last updated: After secure credential implementation*

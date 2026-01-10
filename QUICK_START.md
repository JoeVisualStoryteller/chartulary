# Quick Start Guide

## For Local Development

```bash
# 1. Copy environment template
cp .env.example .env.local

# 2. Add your credentials to .env.local
# (See DEPLOYMENT_GUIDE.md for where to get these)

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open http://localhost:3000/chartulary/
```

---

## For GitHub Pages Deployment

### One-Time Setup

1. **Add GitHub Secrets** (Settings → Secrets → Actions):
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_GA_MEASUREMENT_ID`

2. **Update URLs** in:
   - `public/robots.txt`
   - `public/sitemap.xml`

### Deploy

```bash
# Push to main branch - GitHub Actions handles the rest
git push origin main
```

OR

```bash
# Manual deployment (uses your .env.local)
npm run deploy
```

---

## Credentials Checklist

### Firebase
- [ ] Created Firebase project
- [ ] Enabled Authentication (Email/Password)
- [ ] Enabled Firestore
- [ ] Enabled Storage
- [ ] Set security rules
- [ ] Created admin user in Firestore

### EmailJS
- [ ] Created EmailJS account
- [ ] Added email service
- [ ] Created template
- [ ] Got service ID, template ID, public key

### Google Analytics
- [ ] Created GA4 property
- [ ] Got Measurement ID (G-XXXXXXXXXX)

---

## Security

✅ **What's Safe:**
- All credentials in `.env.local` (gitignored)
- All credentials in GitHub Secrets (encrypted)
- No secrets in source code

❌ **Never Commit:**
- `.env.local` file
- Actual API keys in code
- Firebase admin credentials

---

For detailed instructions, see [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

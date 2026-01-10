# Deployment Guide - Chartulary

This guide explains how to securely deploy Chartulary to GitHub Pages with masked credentials.

## Security Strategy

All sensitive credentials are stored as **GitHub Secrets** and injected during the build process via GitHub Actions. No secrets are committed to the repository.

---

## Setup Instructions

### 1. Local Development Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your actual credentials in `.env.local`:
   ```bash
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=AIzaSy...
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=1:123456789:web:abc123

   # EmailJS Configuration
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=user_abc123xyz

   # Google Analytics
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

**IMPORTANT**: `.env.local` is gitignored and will NEVER be committed.

---

### 2. GitHub Secrets Configuration

To deploy via GitHub Actions, add your credentials as repository secrets:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each of these secrets:

| Secret Name | Description | Example |
|------------|-------------|---------|
| `VITE_FIREBASE_API_KEY` | Firebase API Key | `AIzaSy...` |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain | `project.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | Firebase Project ID | `my-project-123` |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket | `project.appspot.com` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase Sender ID | `123456789` |
| `VITE_FIREBASE_APP_ID` | Firebase App ID | `1:123:web:abc` |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS Service ID | `service_abc123` |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS Template ID | `template_xyz789` |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS Public Key | `user_abc123xyz` |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics ID | `G-XXXXXXXXXX` |

---

### 3. Deployment Process

#### Automatic Deployment (Recommended)

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically deploys when you push to `main`:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Actions will:
1. Install dependencies
2. Inject secrets as environment variables
3. Build the project
4. Deploy to the `prod` branch (GitHub Pages source)

#### Manual Deployment (Local)

If you prefer to deploy manually from your local machine:

```bash
# Build with your local .env.local credentials
npm run build

# Deploy to prod branch
npm run deploy
```

**Note**: Manual deployment uses your `.env.local` file, so credentials won't be exposed in the repository.

---

### 4. Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)

2. Enable **Authentication** → Email/Password provider

3. Enable **Firestore Database**:
   - Start in production mode
   - Apply these security rules:

   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /diaryEntries/{entry} {
         allow read: if resource.data.published == true;
         allow write: if request.auth != null &&
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
       }
       match /comments/{comment} {
         allow read: if resource.data.approved == true;
         allow create: if true; // Guest comments
         allow update, delete: if request.auth != null &&
                                get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
       }
       match /galleryImages/{image} {
         allow read: if true;
         allow write: if request.auth != null &&
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
       }
       match /users/{userId} {
         allow read: if request.auth != null && request.auth.uid == userId;
         allow write: if false; // Only create users via Firebase Console
       }
     }
   }
   ```

4. Enable **Storage**:
   - Apply these security rules:

   ```javascript
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /images/{allPaths=**} {
         allow read: if true;
         allow write: if request.auth != null;
       }
     }
   }
   ```

5. Get your Firebase config:
   - Go to **Project Settings** → **General** → **Your apps** → **Web**
   - Copy the config values to your `.env.local` or GitHub Secrets

6. Create your first admin user:
   - Go to **Authentication** → **Users** → **Add user**
   - Add email/password
   - Go to **Firestore Database** → **Create collection** `users`
   - Add document with ID = the user's UID:
     ```json
     {
       "email": "your@email.com",
       "role": "admin"
     }
     ```

---

### 5. EmailJS Setup

1. Create account at [emailjs.com](https://emailjs.com)
2. Add email service (Gmail, Outlook, etc.)
3. Create email template:
   - Use variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Get your credentials from **Account** → **API Keys**
5. Add to `.env.local` or GitHub Secrets

---

### 6. Google Analytics Setup

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to `.env.local` or GitHub Secrets
4. Add this to `public/index.html` (optional, for enhanced tracking):
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

### 7. Update URLs

Before deploying, update these files with your actual GitHub Pages URL:

1. **public/robots.txt**:
   ```
   Sitemap: https://YOUR_USERNAME.github.io/chartulary/sitemap.xml
   ```

2. **public/sitemap.xml**:
   - Replace all `https://yourusername.github.io/chartulary/` with your actual URL

---

## Verification Checklist

After deployment, verify:

- [ ] Site loads at `https://YOUR_USERNAME.github.io/chartulary/`
- [ ] Dark/light mode toggle works
- [ ] Contact form sends emails (test it!)
- [ ] Audio player loads (add music file to `/public/audio/medieval-music.mp3`)
- [ ] Admin login works (`/chartulary/admin/login`)
- [ ] All routes work (no 404s)
- [ ] Firebase operations work (if configured)
- [ ] Analytics tracking works (check GA4 dashboard)

---

## Troubleshooting

### Build Fails in GitHub Actions
- Verify all secrets are added correctly in GitHub Settings
- Check GitHub Actions logs for specific error messages
- Ensure secret names match exactly (case-sensitive)

### Firebase Not Working
- Check browser console for Firebase errors
- Verify Firebase config is correct
- Check Firestore security rules
- Ensure admin user exists in `users` collection

### Contact Form Not Sending
- Verify EmailJS credentials
- Check EmailJS dashboard for delivery status
- Test with a simple message first

### Analytics Not Tracking
- Check that GA4 Measurement ID is correct
- Verify site is in production mode (`import.meta.env.PROD`)
- Check GA4 Realtime view for events

---

## Security Notes

### What's Safe to Expose?

**Firebase Config**:
- Firebase client config (API key, project ID, etc.) can be public
- Security is enforced through Firebase Security Rules, not by hiding the config
- However, we use environment variables for cleaner management

**EmailJS Public Key**:
- Safe to expose (it's client-side)
- Rate limiting is handled by EmailJS

**Google Analytics**:
- Measurement ID is public by design
- It's in the client-side JavaScript anyway

### What Must Stay Secret?

- Firebase Admin SDK credentials (NOT used in this project)
- Email service passwords (handled by EmailJS)
- GitHub Personal Access Tokens (auto-generated by Actions)

---

## Manual Deployment (Alternative Method)

If you don't want to use GitHub Actions, you can deploy manually:

1. Set up `.env.local` with your credentials
2. Build locally: `npm run build`
3. Deploy: `npm run deploy`

This method keeps credentials on your local machine and never exposes them.

---

## Support

For issues or questions:
- Check GitHub Actions logs
- Review Firebase console for errors
- Test locally with `npm run dev`
- Check browser console for client-side errors

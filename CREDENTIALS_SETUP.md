# Credentials Setup Guide

This guide walks you through getting all the credentials you need for Chartulary.

## 📋 Credentials Checklist

You need credentials from 3 services:
- [ ] Firebase (6 values)
- [ ] EmailJS (3 values)
- [ ] Google Analytics (1 value)

---

## 1️⃣ Firebase Setup

### Create Firebase Project

1. Go to https://console.firebase.google.com
2. Click "Add project"
3. Enter project name (e.g., "chartulary-portfolio")
4. Disable Google Analytics for now (we'll use GA4 separately)
5. Click "Create project"

### Enable Authentication

1. In Firebase Console, click "Authentication"
2. Click "Get started"
3. Click "Email/Password" → Enable → Save

### Enable Firestore Database

1. Click "Firestore Database"
2. Click "Create database"
3. Start in **production mode**
4. Choose a location (closest to your users)
5. After creation, click "Rules" tab
6. Replace with these rules:

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
      allow create: if true;
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
      allow write: if false;
    }
  }
}
```

7. Click "Publish"

### Enable Storage

1. Click "Storage"
2. Click "Get started"
3. Use the default rules for now
4. Choose same location as Firestore
5. After creation, click "Rules" tab
6. Replace with these rules:

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

7. Click "Publish"

### Get Firebase Config

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click the web icon `</>`
4. Register app (nickname: "chartulary-web")
5. Copy the config object:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",              // ← VITE_FIREBASE_API_KEY
  authDomain: "project.firebaseapp.com",  // ← VITE_FIREBASE_AUTH_DOMAIN
  projectId: "project-123",       // ← VITE_FIREBASE_PROJECT_ID
  storageBucket: "project.appspot.com",   // ← VITE_FIREBASE_STORAGE_BUCKET
  messagingSenderId: "123456789", // ← VITE_FIREBASE_MESSAGING_SENDER_ID
  appId: "1:123:web:abc"          // ← VITE_FIREBASE_APP_ID
};
```

### Create Admin User

1. Go to "Authentication" → "Users"
2. Click "Add user"
3. Enter your email and password
4. Copy the **User UID** (e.g., `abc123xyz...`)
5. Go to "Firestore Database"
6. Click "Start collection"
7. Collection ID: `users`
8. Document ID: paste the **User UID**
9. Add fields:
   - Field: `email` | Type: string | Value: your email
   - Field: `role` | Type: string | Value: `admin`
10. Click "Save"

✅ **Firebase Complete!** You now have 6 values.

---

## 2️⃣ EmailJS Setup

### Create EmailJS Account

1. Go to https://emailjs.com
2. Click "Sign Up" (free tier is fine)
3. Verify your email

### Add Email Service

1. Click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. For Gmail:
   - Click "Connect Account"
   - Sign in with Google
   - Allow EmailJS permissions
5. Service is now connected
6. **Copy the Service ID** (e.g., `service_abc123`)
   - This is `VITE_EMAILJS_SERVICE_ID`

### Create Email Template

1. Click "Email Templates"
2. Click "Create New Template"
3. Template Name: "Contact Form"
4. Subject: `New message from {{from_name}}`
5. Content:
```
You have a new message from your portfolio!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent via Chartulary Contact Form
```

6. Click "Save"
7. **Copy the Template ID** (e.g., `template_xyz789`)
   - This is `VITE_EMAILJS_TEMPLATE_ID`

### Get Public Key

1. Click "Account" (top right)
2. Go to "General" tab
3. Find "Public Key"
4. **Copy the Public Key** (e.g., `user_abc123xyz`)
   - This is `VITE_EMAILJS_PUBLIC_KEY`

### Test It

1. Click "Email Templates"
2. Click "Test" on your template
3. Fill in test data
4. Send test email
5. Check your email inbox

✅ **EmailJS Complete!** You now have 3 values.

---

## 3️⃣ Google Analytics Setup

### Create GA4 Property

1. Go to https://analytics.google.com
2. Click "Start measuring" (or "Admin" if you have existing properties)
3. Click "Create Account"
4. Account name: "Chartulary"
5. Check sharing options → Next
6. Property name: "Chartulary Portfolio"
7. Time zone: (your location)
8. Currency: (your currency)
9. Click "Next"
10. Business information: Select options → Create

### Get Measurement ID

1. After creation, go to "Admin" (bottom left)
2. Under "Property", click "Data Streams"
3. Click "Add stream" → "Web"
4. Website URL: `https://yourusername.github.io`
5. Stream name: "Chartulary GitHub Pages"
6. Click "Create stream"
7. **Copy the Measurement ID** (format: `G-XXXXXXXXXX`)
   - This is `VITE_GA_MEASUREMENT_ID`

### Optional: Enhanced Tracking

For better tracking, add this to `index.html` (after getting Measurement ID):

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

✅ **Google Analytics Complete!** You now have 1 value.

---

## 🎉 All Credentials Collected!

You now have all 10 values:

### Firebase (6)
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

### EmailJS (3)
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### Google Analytics (1)
- `VITE_GA_MEASUREMENT_ID`

---

## 📝 What to Do Next

### Option 1: Local Development

Create `.env.local`:
```bash
cp .env.example .env.local
```

Edit `.env.local` and paste your values:
```bash
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=project-123
VITE_FIREBASE_STORAGE_BUCKET=project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123:web:abc

VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abc123xyz

VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Test:
```bash
npm run dev
```

### Option 2: GitHub Deployment

Go to your GitHub repository:
1. Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add each of the 10 secrets above
4. Push to main branch
5. GitHub Actions will build and deploy

---

## 🔒 Security Reminders

- ✅ `.env.local` is gitignored (safe on your computer)
- ✅ GitHub Secrets are encrypted (safe in GitHub)
- ❌ Never commit `.env.local` to git
- ❌ Never share your `.env.local` file
- ❌ Never post credentials publicly

---

## ✅ Verification

After setup, test these features:

1. **Contact Form**: Send a test message
   - Should receive email at your EmailJS connected account

2. **Admin Login**: Go to `/admin/login`
   - Use the email/password you created in Firebase Auth
   - Should redirect to admin dashboard

3. **Analytics**: Visit your site
   - Check GA4 Realtime view
   - Should see your visit within 30 seconds

4. **Dark Mode**: Toggle theme
   - Should persist after page reload (localStorage)

5. **Audio Player**: Click play
   - Add music file: `/public/audio/medieval-music.mp3`

---

**Next Steps**: See [QUICK_START.md](QUICK_START.md) for deployment instructions.

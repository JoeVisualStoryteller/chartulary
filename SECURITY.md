# Security Implementation

## Overview

This project uses **environment variables** to securely manage all sensitive credentials. No secrets are committed to the repository.

## Security Model

### Local Development
- Credentials stored in `.env.local` (gitignored)
- File never committed to version control
- Each developer maintains their own `.env.local`

### Production Deployment
- Credentials stored as **GitHub Secrets**
- Injected during build via GitHub Actions
- Never exposed in source code or built files

## What's Protected

### Firebase Configuration
```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
```

**Note**: Firebase client config can technically be public (security is enforced through Firebase Security Rules), but we use environment variables for cleaner credential management and to follow best practices.

### EmailJS Configuration
```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

**Note**: EmailJS public key is designed to be client-side, but we protect it to prevent abuse.

### Google Analytics
```
VITE_GA_MEASUREMENT_ID
```

**Note**: GA Measurement ID is public by design, but we use env vars for consistency.

## How It Works

### Build Process
1. During build, Vite reads environment variables
2. Variables prefixed with `VITE_` are embedded in the bundle
3. Variables are replaced at compile time with their values
4. Built files contain the actual values (not the variable names)

### GitHub Actions Workflow
```yaml
- name: Build with environment variables
  env:
    VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
    # ... other secrets
  run: npm run build
```

The workflow:
1. Reads secrets from GitHub repository settings
2. Sets them as environment variables
3. Runs the build (Vite replaces them in code)
4. Deploys the built files

## Security Best Practices

### ✅ What We Do

- **Environment Variables**: All credentials in env vars
- **Git Ignore**: `.env.local` is gitignored
- **GitHub Secrets**: Production credentials encrypted
- **Template File**: `.env.example` documents required vars
- **Fallback Values**: Code uses `|| ''` for missing vars
- **Firebase Rules**: Security enforced server-side
- **Protected Routes**: Admin pages require authentication

### ❌ What We Don't Do

- **Never commit** `.env.local` or actual credentials
- **Never hardcode** API keys in source code
- **Never expose** Firebase admin SDK credentials
- **Never disable** security rules in production

## Verification

### Check for Leaked Secrets
```bash
# Search for potential secrets in git history
git log --all --full-history --source -- **/.env.local

# Ensure .env.local is gitignored
git check-ignore .env.local
# Should output: .env.local
```

### Validate Build
```bash
# Build locally (uses .env.local)
npm run build

# Check that built files don't contain "YOUR_"
grep -r "YOUR_" dist/
# Should return no results
```

## Firebase Security

### Firestore Rules
Security is enforced through Firestore rules, not by hiding the config:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public reads only for published content
    match /diaryEntries/{entry} {
      allow read: if resource.data.published == true;
      allow write: if request.auth != null &&
                    get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }

    // Comments require approval
    match /comments/{comment} {
      allow read: if resource.data.approved == true;
      allow create: if true; // Anyone can create (pending approval)
      allow update, delete: if request.auth != null &&
                              get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

### Storage Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /images/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null; // Only authenticated users
    }
  }
}
```

## Incident Response

### If Credentials Are Compromised

1. **Immediately rotate** all affected credentials
2. **Update** `.env.local` with new credentials
3. **Update** GitHub Secrets with new credentials
4. **Redeploy** to apply new credentials
5. **Review** Firebase/EmailJS logs for suspicious activity

### If .env.local Is Accidentally Committed

1. **DO NOT** just delete the file in a new commit
2. **Use git-filter-repo** to remove from history:
   ```bash
   git filter-repo --path .env.local --invert-paths
   ```
3. **Force push** (if safe): `git push --force`
4. **Rotate all credentials** (they're now public)
5. **Update** `.env.local` and GitHub Secrets

## Compliance

### GDPR Considerations
- User emails collected via contact form
- Comments stored with user names
- Privacy policy recommended before production
- Firebase provides GDPR-compliant data processing

### OWASP Top 10
- **A02:2021 - Cryptographic Failures**: All credentials encrypted in transit (HTTPS)
- **A07:2021 - Authentication Failures**: Firebase handles auth securely
- **A08:2021 - Software and Data Integrity**: Dependencies managed via npm

## Questions?

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed setup instructions.

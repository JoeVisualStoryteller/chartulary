# GitHub Pages Deployment Guide

## Configuration

Your project is now configured to deploy to GitHub Pages using the `prod` branch.

### Settings Applied:

1. **gh-pages** package installed
2. **package.json** updated with deploy scripts
3. **vite.config.ts** configured with base path `/chartulary/`

## Deploy to GitHub Pages

### One-Command Deployment:

```bash
npm run deploy
```

This will:
1. Run `npm run build` (compile TypeScript and build for production)
2. Deploy the `dist/` folder to the `prod` branch
3. Make your site live at: **https://joevisualstoryteller.github.io/chartulary/**

### Manual Deployment Steps:

If you prefer to do it step by step:

```bash
# 1. Build the project
npm run build

# 2. Deploy to prod branch
npx gh-pages -d dist -b prod
```

## GitHub Pages Setup

Since you've already created the `prod` branch and set it as the Pages branch, your site should go live automatically after the first deploy.

### Verify GitHub Pages Settings:

1. Go to your repo: https://github.com/JoeVisualStoryteller/chartulary
2. Click **Settings** → **Pages**
3. Ensure:
   - **Source**: Deploy from a branch
   - **Branch**: `prod` / `root` or `/` (root)
   - **Custom domain**: (optional)

## Your Live Site URL

After deploying, your portfolio will be available at:

**https://joevisualstoryteller.github.io/chartulary/**

It may take 1-2 minutes for the first deployment to go live.

## Deployment Workflow

### Every time you want to update your live site:

1. Make your changes on the `main` branch
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Testing Before Deploy

Always test your build locally before deploying:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

Then open http://localhost:4173 to see exactly what will be deployed.

## Troubleshooting

### 404 Errors on Page Refresh

If you get 404 errors when refreshing pages (e.g., `/chamber`), this is because GitHub Pages doesn't support client-side routing by default.

**Solution**: Add a `404.html` that redirects to `index.html`

We can create this file if needed.

### Images Not Loading

Make sure image paths start with `/chartulary/images/` when deployed, or use relative paths.

The `base: '/chartulary/'` in vite.config.ts handles this automatically for assets imported in your components.

### Blank Page After Deploy

Check the browser console for errors. Usually this means:
1. Base path is incorrect (should be `/chartulary/`)
2. Assets aren't loading (check paths)

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public/` folder with your domain
2. Update your domain's DNS settings
3. In GitHub Settings → Pages, add your custom domain
4. Update `base: '/'` in vite.config.ts

## Rollback

If you need to rollback to a previous version:

```bash
# View prod branch history
git checkout prod
git log --oneline

# Rollback to specific commit
git reset --hard <commit-hash>
git push origin prod --force

# Return to main branch
git checkout main
```

## Status

✅ **Ready to Deploy!**

Run `npm run deploy` whenever you're ready to publish your portfolio.

---

**First Deployment Checklist:**

- [ ] Customize artist statement
- [ ] Add your images to `public/images/`
- [ ] Update gallery arrays with your artwork
- [ ] Test locally with `npm run build && npm run preview`
- [ ] Run `npm run deploy`
- [ ] Visit https://joevisualstoryteller.github.io/chartulary/
- [ ] Share your portfolio!

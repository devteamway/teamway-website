# Deployment Guide for GitHub Pages

## Prerequisites

1. A GitHub account
2. Git installed on your machine
3. Your code pushed to a GitHub repository

## Step-by-Step Deployment

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `teamway-website`)
3. Don't initialize with README (we already have one)

### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/teamway-website.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages with GitHub Actions

1. Go to your repository on GitHub
2. Click on **Settings**
3. In the left sidebar, click **Pages**
4. Under **Source**, select **GitHub Actions**
5. The workflow file (`.github/workflows/deploy.yml`) will automatically deploy your site

### 5. Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 2-3 minutes)
4. Once complete, your site will be live!

### 6. Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/teamway-website/
```

Or if you're using a custom domain:
```
https://your-domain.com
```

## Custom Domain Setup (Optional)

### 1. Add Custom Domain

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g., `teamway.dev`)
3. Click **Save**

### 2. Configure DNS

Add these DNS records at your domain provider:

**For apex domain (teamway.dev):**
```
A     185.199.108.153
A     185.199.109.153
A     185.199.110.153
A     185.199.111.153
```

**For www subdomain:**
```
CNAME www YOUR_USERNAME.github.io
```

### 3. Enable HTTPS

GitHub Pages automatically provides free HTTPS. After DNS propagation:
1. Go to **Settings** → **Pages**
2. Check **Enforce HTTPS**

## Troubleshooting

### Issue: Site shows 404

**Solution:**
- Check that GitHub Actions workflow completed successfully
- Verify the repository is public (or you have GitHub Pro for private repos)
- Check Settings → Pages is configured correctly

### Issue: CSS/JS not loading

**Solution:**
- Ensure `next.config.ts` has `output: 'export'`
- Check that `.nojekyll` file exists in the `out` directory
- Verify `basePath` in `next.config.ts` matches your repository name (if not using custom domain)

### Issue: Links are broken

**Solution:**
- Make sure all internal links use Next.js `<Link>` component
- Check that routes match the file structure in the `app` directory

## Manual Deployment (Alternative Method)

If you prefer manual deployment:

```bash
# Build the site
npm run build

# Add .nojekyll file
touch out/.nojekyll

# Deploy using gh-pages (install first: npm install -g gh-pages)
gh-pages -d out -t true
```

Or use the npm script:
```bash
npm run deploy
```

## Updating the Site

Every time you push to the `main` branch, GitHub Actions will automatically:
1. Build your site
2. Generate static files
3. Deploy to GitHub Pages

To update your site:
```bash
git add .
git commit -m "Update content"
git push
```

Wait 2-3 minutes and your changes will be live!

## Build Verification

Before pushing, always verify your build works locally:

```bash
# Build the site
npm run build

# Serve the static files locally
npx serve@latest out

# Visit http://localhost:3000 to test
```

## Performance Tips

1. **Image Optimization**: Use WebP format for images
2. **Code Splitting**: Next.js handles this automatically
3. **Caching**: GitHub Pages automatically caches static assets
4. **CDN**: GitHub Pages uses a global CDN automatically

## Security Notes

- Never commit sensitive data (API keys, passwords)
- Use environment variables for sensitive configuration
- Keep dependencies up to date: `npm audit fix`

## Support

If you encounter issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/pages)
2. Review the [Next.js static export docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
3. Check the Actions tab for build errors

---

Happy deploying! 🚀


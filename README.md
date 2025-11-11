# Teamway Website

A modern, minimal, and professional website for Teamway - a software consultancy founded by two senior engineers.

## 🚀 Tech Stack

- **Next.js 16** (App Router) - React framework with static export
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions

## 📦 Project Structure

```
teamway-website/
├── app/
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout with metadata
│   ├── globals.css                 # Global styles
│   ├── start-your-project/         # Contact form page
│   ├── team/                       # Team/Founders page
│   └── services/[slug]/            # Dynamic service pages
├── components/
│   ├── Navbar.tsx                  # Navigation component
│   ├── Hero.tsx                    # Hero section
│   ├── OfferCard.tsx               # Service card component
│   ├── TechGrid.tsx                # Technologies grid
│   ├── HowWeWork.tsx               # Process section
│   ├── EngagementSection.tsx       # Engagement models
│   ├── CTASection.tsx              # Call-to-action section
│   └── Footer.tsx                  # Footer component
└── lib/
    └── services.ts                 # Services data
```

## 🛠️ Development

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

## 🌐 Deployment to GitHub Pages

### Option 1: Automated Deployment (Recommended)

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

**Setup:**

1. Push your code to GitHub
2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. Push to `main` branch - the site will automatically build and deploy

### Option 2: Manual Deployment

```bash
# Build the static site
npm run build

# The deploy script in package.json can be used for manual deployment
npm run deploy
```

## 📄 Pages

- **/** - Home page with all sections
- **/start-your-project** - Contact form for project inquiries
- **/team** - Meet the founders page
- **/services/[slug]** - Individual service pages:
  - `/services/mobile` - Mobile App Development
  - `/services/web` - Web Application Development
  - `/services/fullstack` - Full-Stack Development
  - `/services/integration` - Systems Integration
  - `/services/cloud` - Cloud Services & DevOps
  - `/services/consulting` - Technical Consulting

## 🎨 Design Features

- Clean, minimal aesthetic with professional look
- Smooth scroll navigation
- Framer Motion animations (fade/slide transitions)
- Responsive design (mobile-first approach)
- Centered navigation on desktop, hamburger menu on mobile
- Neutral color palette with indigo/purple accent colors
- Abstract shapes and gradients (no stock photos)

## 🔧 Configuration

### SEO Metadata

SEO metadata is configured in `app/layout.tsx`:

- Title: "Teamway — The Way to Build Better Software"
- Description: Optimized for search engines
- Open Graph tags for social sharing

### GitHub Pages Configuration

The `next.config.ts` is configured for static export:

```typescript
{
  output: 'export',
  basePath: '',
  images: { unoptimized: true }
}
```

## 📝 Customization

### Update Services

Edit `lib/services.ts` to add, remove, or modify services.

### Update Team Information

Edit `app/team/page.tsx` to update founder bios and philosophy.

### Change Colors

The primary color scheme uses Tailwind's indigo and purple gradients. To change:

1. Update gradient classes in components (e.g., `from-indigo-600 to-purple-600`)
2. Modify theme colors in `tailwind.config.js` if needed

## 📧 Contact

- Email: hello@teamway.dev
- Website: [Your GitHub Pages URL]

## 📄 License

All rights reserved © 2025 Teamway

---

Built with ❤️ by Teamway

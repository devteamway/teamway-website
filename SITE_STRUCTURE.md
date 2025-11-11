# Teamway Website - Site Structure

## 🗺️ Site Map

```
teamway.dev/
│
├── / (Home)
│   ├── Hero Section
│   ├── What We Offer (6 services)
│   ├── Technologies We Work With
│   ├── How We Work (3 steps)
│   ├── Flexible Engagement
│   ├── CTA Section
│   └── Footer
│
├── /start-your-project
│   ├── Contact Form
│   │   ├── Name & Email
│   │   ├── Company
│   │   ├── Project Type
│   │   ├── Budget Range
│   │   ├── Timeline
│   │   └── Description
│   └── Direct Email Link
│
├── /team
│   ├── Founders Section
│   │   ├── Dorian Musaj
│   │   └── Co-Founder
│   ├── Philosophy Section (4 principles)
│   └── CTA Section
│
└── /services/
    ├── /mobile (Mobile App Development)
    ├── /web (Web Application Development)
    ├── /fullstack (Full-Stack Development)
    ├── /integration (Systems Integration)
    ├── /cloud (Cloud Services & DevOps)
    └── /consulting (Technical Consulting)
        └── Each service page contains:
            ├── Overview
            ├── Technologies & Frameworks
            ├── Our Process
            ├── Key Benefits
            └── CTA Section
```

## 📁 File Structure

```
teamway-website/
│
├── app/                           # Next.js App Router
│   ├── layout.tsx                # Root layout + SEO metadata
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles + smooth scroll
│   │
│   ├── start-your-project/
│   │   └── page.tsx              # Contact form page
│   │
│   ├── team/
│   │   └── page.tsx              # Team/founders page
│   │
│   └── services/
│       └── [slug]/               # Dynamic routes
│           ├── page.tsx          # Server component
│           └── ServiceContent.tsx # Client component
│
├── components/                    # Reusable UI components
│   ├── Navbar.tsx                # Navigation (desktop + mobile)
│   ├── Hero.tsx                  # Hero section
│   ├── OfferCard.tsx             # Service cards
│   ├── TechGrid.tsx              # Technologies grid
│   ├── HowWeWork.tsx             # Process steps
│   ├── EngagementSection.tsx     # Engagement models
│   ├── CTASection.tsx            # Call-to-action
│   └── Footer.tsx                # Footer
│
├── lib/                          # Data & utilities
│   └── services.ts               # Service data (6 services)
│
├── public/                       # Static assets
│   ├── favicon.ico
│   └── *.svg                     # Icons/images
│
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions deployment
│
├── out/                          # Build output (generated)
│   ├── index.html
│   ├── start-your-project.html
│   ├── team.html
│   ├── services/
│   │   ├── mobile.html
│   │   ├── web.html
│   │   ├── fullstack.html
│   │   ├── integration.html
│   │   ├── cloud.html
│   │   └── consulting.html
│   └── _next/                    # Static assets
│
└── Documentation/
    ├── README.md                 # Project overview
    ├── DEPLOYMENT.md             # Deployment guide
    ├── QUICK_START.md            # Quick reference
    ├── DEVELOPMENT_SUMMARY.md    # Feature list
    ├── CHANGELOG.md              # Version history
    └── SITE_STRUCTURE.md         # This file
```

## 🎨 Component Hierarchy

```
App
├── Navbar (fixed, on all pages)
│
├── Home Page
│   ├── Hero
│   ├── Services Section
│   │   └── OfferCard × 6
│   ├── TechGrid
│   ├── HowWeWork
│   ├── EngagementSection
│   ├── CTASection
│   └── Footer
│
├── Start Your Project Page
│   ├── Navbar
│   ├── Contact Form
│   └── Footer
│
├── Team Page
│   ├── Navbar
│   ├── Founders Section
│   ├── Philosophy Section
│   ├── CTA Section
│   └── Footer
│
└── Service Pages (×6)
    ├── Navbar
    ├── ServiceContent
    │   ├── Overview
    │   ├── Technologies List
    │   ├── Process Grid
    │   ├── Benefits List
    │   └── CTA Section
    └── Footer
```

## 🎯 Navigation Flow

```
                    ┌──────────────┐
                    │  Home Page   │
                    └──────┬───────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   ┌────▼────┐      ┌──────▼──────┐   ┌──────▼──────┐
   │  Team   │      │  Services   │   │ Start Your  │
   │  Page   │      │   Pages     │   │   Project   │
   └─────────┘      └──────┬──────┘   └─────────────┘
                           │
            ┌──────────────┼──────────────┐
            │              │              │
      ┌─────▼─────┐  ┌─────▼─────┐  ┌────▼────┐
      │  Mobile   │  │    Web    │  │  Cloud  │
      │    App    │  │    App    │  │ DevOps  │
      └───────────┘  └───────────┘  └─────────┘
            │              │              │
      ┌─────▼─────┐  ┌─────▼─────┐  ┌────▼────┐
      │Full-Stack │  │Integration│  │Consult  │
      └───────────┘  └───────────┘  └─────────┘
```

## 📊 Data Flow

```
┌─────────────────┐
│  lib/services.ts│  ← Single source of truth
└────────┬────────┘
         │
    ┌────▼────┐
    │ Service │
    │  Data   │
    └────┬────┘
         │
    ┌────┴─────────────────────────┐
    │                              │
┌───▼──────────┐         ┌─────────▼────────┐
│  Home Page   │         │  Service Pages   │
│ OfferCard ×6 │         │  ServiceContent  │
└──────────────┘         └──────────────────┘
```

## 🔄 User Journey Examples

### Journey 1: Hire for Mobile App
```
Home → Services Section → Click "Mobile App" →
Service Detail Page → "Start Your Project" →
Contact Form → Submit
```

### Journey 2: Learn About Team
```
Home → Hero → "Meet the Founders" →
Team Page → Read Bios → "Start Your Project" →
Contact Form
```

### Journey 3: Browse Services
```
Home → Services Section → Click Service Card →
Service Detail → Back → Click Another Service →
Compare → Choose → Contact Form
```

## 🎨 Sections on Home Page

1. **Hero** (Above fold)
   - Headline
   - Subtext
   - 2 CTAs

2. **What We Offer** (Services grid)
   - 6 service cards
   - Each with "Read More" link

3. **Technologies** (Tech stack)
   - 3 columns
   - Mobile, Web/Backend, Cloud/DevOps

4. **How We Work** (Process)
   - 3 steps
   - Numbered cards

5. **Flexible Engagement** (Pricing models)
   - 2 options
   - Project-Based vs Team Extension

6. **CTA** (Final call-to-action)
   - Large headline
   - Primary CTA button

7. **Footer**
   - Logo
   - Contact email
   - Copyright

## 🎯 Call-to-Actions (CTAs)

### Primary CTAs (Purple/Indigo)
- "Start Your Project" (Hero)
- "Start Your Project" (Final CTA)
- "Start Your Project" (Service pages)
- "Start Your Project" (Team page)

### Secondary CTAs (White/Gray)
- "Meet the Founders" (Hero)
- "Read More" (Service cards)
- "Back to Home" (All subpages)

### Tertiary CTAs
- Email link: hello@teamway.dev (Multiple locations)
- Navigation menu items

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (sm)
  - Single column layouts
  - Hamburger menu
  - Stacked buttons

- **Tablet**: 768px - 1024px (md)
  - 2 column grids
  - Centered navigation
  - Horizontal buttons

- **Desktop**: > 1024px (lg/xl)
  - 3 column grids
  - Full navigation
  - Spacious layouts

## 🎨 Design Patterns

### Cards
- Service cards (hover effects)
- Tech stack cards
- Process step cards
- Engagement model cards

### Buttons
- Primary: Gradient background (indigo → purple)
- Secondary: White with border
- Link style: Underline on hover

### Animations
- Fade in: All sections
- Slide up: Cards and content
- Scale: Buttons on hover
- Smooth scroll: Navigation

---

This structure provides a clear overview of how the Teamway website is organized, making it easy to understand, maintain, and extend.


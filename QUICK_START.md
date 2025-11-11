# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit: http://localhost:3000

### 3. Build for Production
```bash
npm run build
```
Static files generated in `out/` directory

---

## 📝 Common Tasks

### Update Service Content
Edit: `lib/services.ts`

### Update Team Information
Edit: `app/team/page.tsx`

### Change Colors
Search and replace gradient classes:
- `from-indigo-600 to-purple-600`
- `from-blue-500 to-cyan-500`
- etc.

### Add a New Page
1. Create folder in `app/`: `app/new-page/`
2. Add `page.tsx` file
3. Add link in navigation

### Modify Contact Email
Replace `hello@teamway.dev` globally

---

## 🎨 Design System

### Colors
- Primary: Indigo (`indigo-600`)
- Secondary: Purple (`purple-600`)
- Accent: Cyan (`cyan-500`)
- Text: Gray scale
- Backgrounds: White, light gradients

### Typography
- Headings: Bold, tight tracking
- Body: Regular, relaxed leading
- Scale: 5xl-7xl for heroes, 3xl-5xl for sections

### Spacing
- Sections: `py-24` (96px vertical padding)
- Cards: `p-8` (32px padding)
- Gaps: `gap-8` (32px between elements)

### Rounded Corners
- Cards: `rounded-2xl`
- Buttons: `rounded-full`
- Small elements: `rounded-xl`

---

## 🔧 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Preview production build
npm run lint       # Run linter
npm run deploy     # Deploy to GitHub Pages (manual)
```

---

## 📁 File Structure at a Glance

```
teamway-website/
├── app/                    # Pages
│   ├── page.tsx           # Home
│   ├── start-your-project/
│   ├── team/
│   └── services/[slug]/
├── components/            # Reusable components
├── lib/                   # Data and utilities
├── public/               # Static assets
└── .github/workflows/    # CI/CD
```

---

## 🐛 Troubleshooting

### Build fails?
```bash
rm -rf .next out node_modules
npm install
npm run build
```

### Dev server issues?
```bash
# Kill port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

### CSS not applying?
- Check Tailwind classes are valid
- Restart dev server
- Clear browser cache

---

## 📞 Support

- GitHub Issues: [Your repo URL]
- Email: hello@teamway.dev
- Documentation: See README.md and DEPLOYMENT.md

---

Built with Next.js 16 + TypeScript + Tailwind CSS + Framer Motion


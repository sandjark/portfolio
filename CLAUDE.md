# Portfolio Context — Sandjar Kozubaev

## Project Overview
This is a Next.js portfolio site for **Sandjar Kozubaev**, migrating from WordPress (sandjar.me) to a modern Next.js site hosted on Vercel.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Hosting**: Vercel
- **GitHub**: https://github.com/sandjark/portfolio

## Site Structure
```
src/
├── app/
│   ├── page.tsx              # Homepage (hero + featured projects + quick links)
│   ├── layout.tsx            # Root layout (Header + Footer)
│   ├── globals.css           # Dark theme styles
│   ├── bio/page.tsx          # Bio/about page
│   ├── contact/page.tsx      # Contact form + social links
│   ├── publications/page.tsx # Publications list
│   └── projects/
│       ├── page.tsx          # Projects grid with category filtering
│       └── [slug]/page.tsx   # Individual project detail pages
├── components/
│   ├── Header.tsx            # Fixed nav with mobile hamburger menu
│   └── Footer.tsx            # Footer with social links
└── data/
    ├── projects.ts           # Project data (add/edit projects here)
    └── publications.ts       # Publications data (add/edit publications here)
```

## Design System
- **Background**: `#0a0a0a` (dark)
- **Foreground**: `#ededed` (light text)
- **Accent**: `#4975ef` (blue links/buttons)
- **Muted**: `#a0a0a0` (secondary text)
- **Border**: `#222` (card borders)
- **Font**: System sans-serif (Inconsolata-inspired monospace)
- **Dark theme only** (no light mode toggle)

## Content Management
Content is stored in TypeScript data files in `src/data/`:
- **`projects.ts`** — Add new projects by adding objects to the `projects` array
- **`publications.ts`** — Add new publications by adding objects to the `publications` array

### Project Data Structure
```typescript
{
  slug: string,           // URL-friendly identifier (e.g., "my-project")
  title: string,          // Project title
  category: string,       // Category for filtering (e.g., "Design", "Futures")
  description: string,    // Short description for cards
  fullDescription: string, // Long description for detail page
  image: string,          // Path to image (e.g., "/images/project.jpg")
  year: string,           // Year as string (e.g., "2024")
  link?: string,          // Optional external link
}
```

### Publication Data Structure
```typescript
{
  title: string,     // Publication title
  authors: string,   // Author names
  venue: string,     // Journal/conference name
  year: string,      // Year
  link?: string,     // Optional external link
}
```

## Key Pages & Routes
| Route | File | Description |
|-------|------|-------------|
| `/` | `page.tsx` | Homepage with hero + featured projects |
| `/projects` | `projects/page.tsx` | All projects with category filter |
| `/projects/[slug]` | `projects/[slug]/page.tsx` | Individual project detail |
| `/publications` | `publications/page.tsx` | Publications list |
| `/bio` | `bio/page.tsx` | Bio/about page |
| `/contact` | `contact/page.tsx` | Contact form |

## Deployment
- **Vercel project**: sk-tinkerlab/portfolio
- **Live URL**: https://portfolio-seven-drab-63.vercel.app/
- **Custom domain**: sandjar.me (not yet configured — still pointing to WordPress)
- Auto-deploys from GitHub `main` branch

## To-Do
- [ ] Replace placeholder project images with real images in `public/images/`
- [ ] Set up Formspree for contact form (replace `your-form-id` in `contact/page.tsx`)
- [ ] Add real project content from WordPress export
- [ ] Configure custom domain sandjar.me on Vercel
- [ ] Update DNS at domain registrar to point to Vercel

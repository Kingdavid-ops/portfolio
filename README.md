# Shadrod — Premium Software Engineer Portfolio

Elite, futuristic personal portfolio for **Kingdavid Ifediorah Chidalu**, built with Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, and React Three Fiber.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** — all theme tokens in `src/app/globals.css` (no `tailwind.config`)
- **shadcn/ui** components
- **Framer Motion** animations
- **Three.js + R3F + Drei** 3D hero scene
- **Mongoose** with connection caching

## Getting Started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://shadrod.vercel.app](http://shadrod.vercel.app).

## Branding

Change the global brand name in:

```ts
// src/config/brand.ts
export const BRAND_NAME = "Shadrod";
```

## MongoDB

Add to `.env.local`:

```
MONGODB_URI=?
```

Contact form POSTs to `/api/contact`. Blog API at `/api/blog` falls back to static data when the DB is empty.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, about, skills, projects, experience, stack, testimonials, services, blog preview, CTA |
| `/blog` | Blog listing with search & categories |
| `/blog/[slug]` | Article detail (markdown-ready) |
| `/about` | About + contact form |

## Profile Image

<!-- Replace `public/profile-placeholder.svg` with your photo (e.g. `public/profile.jpg`) and update `ProfileImage` in `src/components/shared/profile-image.tsx`. -->

## Scripts

```bash
pnpm dev      # Development
pnpm build    # Production build
pnpm start    # Production server
pnpm lint     # ESLint
```

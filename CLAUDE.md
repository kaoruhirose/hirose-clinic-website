# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Stack

- **Next.js 16** with App Router (not Pages Router)
- **React 19**, **TypeScript 5** (strict mode)
- **Tailwind CSS 4** — uses `@theme {}` blocks in CSS (not `tailwind.config.js`)
- **Framer Motion 12** for scroll animations
- **Lucide React** for icons
- Path alias: `@/*` → `./src/*`

## Architecture

### App Router Structure

All routes are under `src/app/` using the App Router file conventions:
- `layout.tsx` — root layout wrapping all pages with `<Header>` and `<Footer>`
- `page.tsx` — home page
- `about/page.tsx`, `services/page.tsx`, `access/page.tsx` — section pages

Shared components live in `src/components/` (currently `Header.tsx`, `Footer.tsx`).

### Styling Conventions

Custom design tokens are defined in `src/app/globals.css` under `@theme {}`:
- `clinic-base` (#f7f5f0) — warm beige background
- `clinic-blue` (#1c3c5a) — primary dark blue
- `clinic-green` (#2a5d3e) — secondary forest green
- `clinic-text` (#2d3748) — body text

Fonts are loaded via Google Fonts in `layout.tsx`: **Zen Kaku Gothic New** (sans-serif) and **Shippori Mincho** (serif). Use `font-sans` and `font-serif` Tailwind utilities to apply them.

### Animation Pattern

Pages use Framer Motion's `useInView` + `motion.div` for scroll-triggered reveal animations. Follow the same pattern seen in existing pages when adding new animated sections.

### Site Context

This is an appointment-only private clinic website in Japanese (lang="ja"). Content is fully in Japanese. The target domain is `hiroseshinryojo.jp`.

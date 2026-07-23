# CLAUDE.md

Instructions for AI agents working on this codebase.

## Project overview

Personal portfolio website for Pedro Fonseca — front-end developer, sports illustrator (PEDRO26), and tech teacher. Single-page, bilingual (PT/EN), statically exported to GitHub Pages at `pmlf.github.io`.

## Tech stack

- **Next.js 16** (App Router) with static export
- **React 19** with TypeScript
- **Tailwind CSS v4** — uses `@theme inline` syntax, not `tailwind.config`
- **Framer Motion** — scroll-triggered animations (`useInView`, `motion`)
- **Client-side i18n** — React Context with JSON translation files, no routing

## Commands

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build + static export
npm run lint     # ESLint
```

There are no tests. Verify changes visually via the dev server.

## Architecture

```
src/
├── app/
│   ├── layout.tsx      # Root layout, metadata, fonts
│   ├── page.tsx        # Single page — imports all sections
│   ├── globals.css     # Tailwind imports, CSS variables, bg pattern
│   └── sitemap.ts      # SEO sitemap generator
├── components/         # One file per section, plus shared UI
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Work.tsx
│   ├── Experience.tsx
│   ├── Pedro26.tsx     # Rotating image carousel with pause-on-lightbox
│   ├── TeachingSection.tsx
│   ├── BeyondTheCode.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Lightbox.tsx    # Shared image popup overlay
└── i18n/
    ├── context.tsx     # I18nProvider, useI18n hook, locale detection
    ├── en.json         # English translations
    └── pt.json         # Portuguese translations
```

All components are client components (`"use client"`) — the site is a single interactive page.

## Key conventions

### Styling
- Dark theme: `neutral-950` background, white text, `amber-500` accents
- Glass-effect cards: `bg-white/[0.03] backdrop-blur-md border border-white/[0.06]`
- Editorial typography: large font-black headings, tight tracking
- All images use `next/image` for optimization

### i18n
- Translations live in `src/i18n/en.json` and `pt.json`
- Both files must stay structurally identical — same keys, same nesting
- Locale detected from browser, persisted in localStorage
- Dynamic values (years of experience) are computed at render time, not stored in JSON

### Images
- Static assets go in `public/images/` with subdirectories by section
- Image paths start with `/images/...` (no `/../` prefix)
- Pedro26 illustrations: `public/images/p26/`
- Teaching photos: `public/images/teaching/`

### Content constraint
Client companies' names must not appear anywhere in the codebase. Use descriptive labels only (e.g., "Major Pro Cycling Team", "Finnish Energy Company"). Consulting companies (Futurice, KWAN, Deloitte) may be named.

## What to watch for

- **Hydration mismatches**: avoid `Math.random()` or `Date.now()` in `useState` initializers. Use deterministic initial values and set random state in `useEffect`.
- **Framer Motion + Strict Mode**: `AnimatePresence mode="wait"` can break under React's double-effect invocation in dev. Prefer CSS animations (`animate-[fadeIn_...]`) for simple transitions.
- **Translation parity**: after editing one JSON file, always update the other to match.

@AGENTS.md

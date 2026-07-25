# Direx Lab — Agency Portfolio Website

A premium, dark-themed Next.js portfolio site for Direx Lab, a performance
marketing agency for e-commerce brands.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — design tokens in `tailwind.config.ts`
- **Framer Motion** — page-load sequence, scroll reveals, hover/micro-interactions
- **next/font** — Bricolage Grotesque (display), Inter (body), JetBrains Mono (hero typing effect)

## Design system

| Token | Value | Use |
|---|---|---|
| `ink` | `#0A0A0A` | Background |
| `paper` | `#FFFFFF` | Primary text |
| `accent` | `#2563EB` | Buttons, links, hover states, glows — used sparingly (~5% of the palette) |
| `dim` / `dim-2` | `#9A9AA4` / `#5C5C64` | Secondary/tertiary text |
| `line` | `#1E1E22` | Hairline borders/dividers |

Type scale and spacing utilities live in `app/globals.css` (`.h-display`,
`.h-eyebrow`, `.container-lab`).

## Structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Section assembly
  globals.css        Design tokens & base styles
components/
  hero/              Logo build animation + hero section
  layout/            Navbar, Footer
  sections/          Trust, Results, Services, Case Studies, Why Direx,
                      Process, Testimonials, FAQ, Final CTA
  ui/                 Reveal, MagneticButton, CustomCursor, ScrollProgress
lib/
  data.ts             All site copy/content
  useCounter.ts       Animated counter hook
```

## The hero animation

`components/hero/HeroLogoAnimation.tsx` runs a one-time sequence on load:
types "directors for ecommerce brand owners" in monospace with a blinking
caret, pauses, backspaces down to "dire", then reveals a single blue "X"
("DireX") followed by "Lab" fading in below. It never repeats, and it
respects `prefers-reduced-motion` by skipping straight to the final state.
The rest of the hero (headline, copy, CTAs) and the navbar only reveal once
this sequence completes.

## Content

All copy lives in `lib/data.ts` — services, case studies, results, process
steps, testimonials, and FAQ — so it can be edited without touching
component code.

## Notes for production

- Replace placeholder case study figures, testimonials, and trust logos
  with real client data before launch.
- Add real Open Graph image at `public/og-image.jpg` (1200×630).
- Wire the CTA buttons to a real booking link (Calendly, etc.) in place of
  the `mailto:` placeholder.

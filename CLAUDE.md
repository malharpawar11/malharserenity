@AGENTS.md

# Malhar Serenity — Marketing Website

Boutique-developer marketing site for Malhar Serenity, a 14-unit
residential project in Samarth Colony, Baner, Pune. See
`src/content/site-config.ts` for the full ground-truth fact sheet.

## Non-negotiable content rule

**Never fabricate a project fact.** Every price, date, spec, amenity,
contact detail, or RERA number must come from `src/content/site-config.ts`
/ `src/content/amenities.ts`, or be rendered as an explicit placeholder
(`[PENDING — ...]`) sourced from the same files. If a component needs data
that isn't in those files, add it there as a typed placeholder — don't
inline a plausible-sounding guess in JSX. This applies to code and to
copy: see `src/content/copy/*.md` for the approved draft prose per page,
including inline TODO/CONFIRM notes that must be resolved before launch.

## Tech stack

- Next.js 16 (App Router) + TypeScript, Turbopack
- Tailwind CSS v4 (CSS-variable theme, see `src/app/globals.css`)
- shadcn/ui (Radix base, Nova preset, Lucide icons) — `npx shadcn@latest add <component>`
- Motion (`motion/react` — the renamed `framer-motion`, not the old package)
- React Hook Form + Zod for the enquiry form
- Fonts self-hosted via `next/font` — see `src/lib/fonts.ts`

## Folder structure

```
src/
  app/                  routes (App Router)
  components/
    ui/                 shadcn primitives (generated, don't hand-edit structure)
    sections/           page sections composed from ui/ primitives (hero, amenities grid, etc.)
    layout/             header, footer, nav
  content/
    site-config.ts       ground-truth facts + typed placeholders (source of truth)
    amenities.ts          draft amenity list, needsConfirmation-flagged
    copy/                 approved draft prose per page (markdown, with inline TODOs)
  fonts/                 self-hosted General Sans font files + license
  lib/
    fonts.ts             next/font definitions
    utils.ts             shadcn's cn() helper
public/
  images/                placeholder imagery slot (swap for real photography)
  floor-plans/           placeholder slot for sanctioned floor plan PDFs/images
  brochure/              placeholder slot for the real brochure PDF
```

## Design system

Palette, named (defined as CSS custom properties in `globals.css`, also
exposed as Tailwind utilities — `bg-canopy`, `text-turmeric`, etc.):

| Name | Hex | Role |
|---|---|---|
| Canopy | `#28402F` | Primary brand green |
| Basalt | `#23231F` | Near-black text / dark sections |
| Mist | `#EEF1EA` | Background — cool sage-grey, not cream/beige |
| Stone | `#A9A392` | Neutral for borders/secondary text |
| Turmeric | `#D9A441` | Sparse accent — CTAs, key numerals only |
| Dusk | `#3A3350` | Occasional deep blue-violet, gradient overlays |

Type system (3 roles — don't introduce a 4th typeface):

1. **`font-display`** (Fraunces, variable, `opsz`+`SOFT` axes) — hero
   headline and section titles only. Low-contrast soft serif, deliberately
   not the high-contrast-serif-on-cream AI-site cliché.
2. **`font-sans`** (General Sans, self-hosted, `src/fonts/`) — body, nav,
   forms, buttons. Default on `<html>`.
3. **`font-mono`** (IBM Plex Mono) — stat badges, prices, sq.ft., dates
   only. Never for running text.

Explicitly avoided (per Phase 0 sign-off): cream/beige + terracotta
combo, near-black + neon accent, gold-on-black luxury clichés, numbered
01/02/03 section markers, zero-radius brutalist hairline layout.

**Signature moment**: the "Elevation Reveal" — a scroll-driven parallax
(foreground foliage → building silhouette → Baner Hill line) built with
`motion/react`'s `useScroll`/`useTransform`, doubling as tasteful
placeholder art in place of real photography. This is the one deliberate
set-piece; everything else stays to restrained `whileInView` reveals and
hover micro-interactions. Respect `prefers-reduced-motion` (already
handled globally in `globals.css`; any custom Motion animation must also
check `useReducedMotion()`).

## Placeholder discipline (do-not-fabricate list)

MahaRERA number, real photography/renders/floor-plan PDFs, phone/email,
sanctioned floor plan layouts, brochure PDF, exact distance to the
Baner-Pashan Biodiversity Park. All wired as typed placeholders in
`src/content/site-config.ts` — swap the values there, not scattered
through components.

## Build process

Phased with sign-off gates (research → scaffold → home → residences →
amenities/location/gallery → contact/legal → polish pass). Don't jump
ahead to a later phase's pages without a go-ahead.

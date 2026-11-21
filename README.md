# OptiDeals Frontend

Marketing site for the OptiDeals IPTV service. Next.js (App Router), TypeScript and
Tailwind CSS. Every page is static; there is no backend. Orders, trial requests and support
all go through one WhatsApp number.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19
- TypeScript 6 (`strict`)
- Tailwind CSS v4: design tokens, glass cards and animations in `app/globals.css`
- Vitest (unit) and Playwright (E2E)
- ESLint (type-checked) + Prettier, Husky + lint-staged pre-commit hook

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

If the dev server panics or reloads in a loop after routes were added or removed, stop it,
delete the `.next` folder and start it again.

## Pages

| Route      | Slice              | Notes                                              |
| ---------- | ------------------ | -------------------------------------------------- |
| `/`        | `features/home`    | Hero, features, pricing, comparison, apps, FAQ     |
| `/about`   | `features/about`   | Story, journey, highlights                         |
| `/contact` | `features/contact` | WhatsApp only: one chat button and topic shortcuts |
| `/terms`   | `features/legal`   | Placeholder, `noindex`, not in the sitemap         |
| `/privacy` | `features/legal`   | Placeholder, `noindex`, not in the sitemap         |

## WhatsApp

The number, the link builder and the pre-written opening messages live in `lib/site.ts`
(`whatsapp`, `whatsappHref`, `messages`). Every buy, trial, reseller and contact link is built
from them, so changing the number there changes it everywhere. An E2E test fails if any
external link on the site points anywhere else.

## Design system

- **Theme:** dark only. Colours, shadows, easing and keyframes are `@theme` tokens in
  `app/globals.css`.
- **Fonts:** Sora (headings, `font-display`) and Manrope (body), loaded with `next/font`.
- **Cards:** `.glass` (surface), `.glass-hover` (lift and glow), `.ring-gradient` (gradient
  border) and `data-spot` (light follows the pointer, fed by `components/effects/spotlight.tsx`).
- **Motion:** `components/ui/reveal.tsx` fades content in on scroll and
  `components/ui/count-up.tsx` animates numbers. Both respect `prefers-reduced-motion`, and
  content stays visible without JavaScript.
- **Anchors:** `--header-h` is the sticky header height and the page's `scroll-padding-top`,
  so `/#pricing` and friends stop exactly below the header.
- **Logo:** `components/ui/logo.tsx`. `app/icon.svg` is the same drawing; `favicon.ico`,
  `apple-icon.png` and `opengraph-image.png` were rendered from it and need regenerating if
  the logo changes.

## SEO

- `lib/seo.ts`: `pageMetadata()` (title, description, canonical, Open Graph, Twitter) and the
  JSON-LD builders (Organization, WebSite, FAQPage, BreadcrumbList).
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`.
- Page copy lives in each feature's `content.ts`.

## Environment variables

| Variable               | Description                                             | Default                 |
| ---------------------- | ------------------------------------------------------- | ----------------------- |
| `NEXT_PUBLIC_SITE_URL` | Public origin, for canonical URLs, sitemap and JSON-LD. | `http://localhost:3000` |

Set `NEXT_PUBLIC_SITE_URL` to the real domain in production.

## Scripts

| Script                 | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `npm run dev`          | Start the dev server                                  |
| `npm run build`        | Production build                                      |
| `npm run start`        | Start the production server                           |
| `npm run lint`         | ESLint                                                |
| `npm run lint:fix`     | ESLint with autofix                                   |
| `npm run format`       | Prettier write                                        |
| `npm run format:check` | Prettier check                                        |
| `npm run typecheck`    | Route types + `tsc --noEmit`                          |
| `npm run test`         | Vitest unit tests                                     |
| `npm run test:watch`   | Vitest watch mode                                     |
| `npm run test:e2e`     | Playwright E2E tests (`npx playwright install` first) |

## Project layout

```
app/                    Routes, layout, global CSS, icons, sitemap, robots, manifest
components/layout/      Site header and footer
components/ui/          Buttons, headings, icons, logo, reveal, count-up, page hero, CTA band
components/effects/     Pointer spotlight for cards
components/seo/         JSON-LD script tag
features/<name>/        Page slices (see features/README.md)
lib/                    Site identity and WhatsApp links, SEO helpers, config, cn
public/images/          App logos and the Sky Glass banner
tests/                  Vitest setup and Playwright E2E specs
```

## Conventions

- Class names go through `cn()` (`lib/cn.ts`).
- Icons come from the one stroke set in `components/ui/icons.tsx`.
- Unit tests sit next to the code as `*.test.ts` and are committed.

## CI

`.github/workflows/ci.yml` runs lint, format check, typecheck, unit tests and build on
pushes and PRs to `main`.

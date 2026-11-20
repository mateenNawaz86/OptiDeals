# Opti Deals Frontend

Next.js (App Router) frontend: TypeScript, Tailwind CSS, Zod, React Hook Form,
TanStack Query. Same stack and structure as `buero-365-frontend-v3`.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19
- TypeScript 6 (`strict`)
- Tailwind CSS v4: design tokens in `app/globals.css`
- Zod: schemas in `features/*/types`
- React Hook Form + `@hookform/resolvers`
- TanStack Query for server state
- Axios-based typed API client (`lib/api.ts`) with a mock/live switch per feature
- i18n: `en` (default) and `de`, routed under `app/[locale]` (the `de` dictionary still holds the English copy)
- Vitest + React Testing Library (unit/component), Playwright (E2E)
- ESLint (type-checked) + Prettier, Husky + lint-staged pre-commit hook

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. It redirects to `/en` (English is the default locale).

## Pages

Built from the "IPTV" Figma design (desktop frames, 1440px wide):

| Route               | Design frame          | Slice              |
| ------------------- | --------------------- | ------------------ |
| `/[locale]`         | Desktop 1, 3, 4, 5, 6 | `features/home`    |
| `/[locale]/about`   | Desktop 7             | `features/about`   |
| `/[locale]/contact` | Contact Us            | `features/contact` |

Desktop 3–6 are the home page with another region tab selected; the tabs switch the pricing
currency (`features/home/data/regions.ts`). Content is capped at 1440px; gradient bands run
full width. Smaller screens stack the same sections.

## Fonts

- **Inter** (Google, via `next/font`) for everything.
- **Roca** for the main hero heading (`font-roca`). Roca is a commercial font: add the licensed
  web font as `public/fonts/roca/roca-bold.woff2` (and `.woff`). Until then the heading falls
  back to Inter (and the browser logs a 404 for the missing file).

## Environment variables

| Variable                   | Description                               | Default                 |
| -------------------------- | ----------------------------------------- | ----------------------- |
| `NEXT_PUBLIC_API_URL`      | Base URL of the backend API               | `http://localhost:4000` |
| `NEXT_PUBLIC_USE_MOCK_API` | `false` switches features to the live API | mock on                 |

## Scripts

| Script                 | Description                 |
| ---------------------- | --------------------------- |
| `npm run dev`          | Start the dev server        |
| `npm run build`        | Production build            |
| `npm run start`        | Start the production server |
| `npm run lint`         | ESLint                      |
| `npm run lint:fix`     | ESLint with autofix         |
| `npm run format`       | Prettier write              |
| `npm run format:check` | Prettier check              |
| `npm run typecheck`    | `tsc --noEmit`              |
| `npm run test`         | Vitest unit/component tests |
| `npm run test:watch`   | Vitest watch mode           |
| `npm run test:e2e`     | Playwright E2E tests        |

## Project layout

```
app/
  [locale]/layout.tsx       Root layout (<html lang>), Inter font, providers
  [locale]/(public)/        Site routes: home, about, contact (+ shared header layout)
  providers.tsx             React Query, locale, translations
  globals.css               Design tokens, gradients, Roca @font-face
components/ui/atoms/        Gradient pill/button, form field, checkbox
components/shell/           Site header and footer
components/assets/svgs/     Icons extracted from the design, as React components
contexts/                   Global (locale) and translation contexts
dictionaries/               en.json / de.json (all page copy)
features/<name>/            Feature slices (see features/README.md)
hooks/                      Shared hooks (useLocaleRouter, useDebouncedValue, useIsMounted)
lib/                        API client, config, query helpers, form errors, cn, i18n, nav links
public/images/              Images extracted from the design exports
proxy.ts                    Redirects unprefixed URLs to /<locale>/…
tests/                      Vitest setup + Playwright E2E specs
docs/                       Backend specs, one per module
```

## Conventions

- Locales are defined once in `lib/dictionary/locales.ts`; everything else imports from there.
- Forms use `react-hook-form` + `zodResolver`; backend field errors are mapped to
  RHF via `lib/form-errors.ts`.
- API calls go through `lib/api.ts`, which validates responses with Zod and
  normalizes errors into `ApiError`.
- Class names: `cn()` (`lib/cn.ts`) or `combineClasses()` (`utils/utils.ts`, supports `!!class`
  to drop a default).
- Light theme only, as in the design.
- Server components translate with `getTranslations(locale)` (`lib/dictionary/server.ts`);
  client components use `useTranslations()`.
- Unit tests sit next to the code as `*.test.ts(x)` and are committed.

## CI

`.github/workflows/ci.yml` runs lint, format check, typecheck, unit tests and build on
pushes and PRs to `main`.

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
- i18n: `de` (default) and `en`, routed under `app/[locale]`
- Vitest + React Testing Library (unit/component), Playwright (E2E)
- ESLint (type-checked) + Prettier, Husky + lint-staged pre-commit hook

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. It redirects to `/de/dashboard`.

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
  [locale]/layout.tsx   Root layout (<html lang>), providers, theme init script
  [locale]/(app)/       Signed-in area; its layout will hold the app shell
  [locale]/(public)/    Routes outside the shell (share links, auth)
  providers.tsx         React Query, locale, translations
  globals.css           Design tokens (light + .dark) mapped to Tailwind
components/ui/          Design-system primitives: atoms/, molecules/, organisms/
components/shell/       App shell: sidebar, top bar
components/assets/svgs/ SVG icon components
contexts/               Global (locale) and translation contexts
dictionaries/           de.json / en.json
features/<name>/        Feature slices: api/, data/, hooks/, lib/, types/, ui/ (see features/README.md)
hooks/                  Shared hooks (useTheme, useLocaleRouter, useDebouncedValue, useIsMounted)
lib/                    API client, config, query helpers, form-error mapping, cn, i18n, nav
proxy.ts                Redirects unprefixed URLs to /<locale>/…
tests/                  Vitest setup + Playwright E2E specs
docs/                   Backend specs, one per module
```

## Conventions

- Locales are defined once in `lib/dictionary/locales.ts`; everything else imports from there.
- Forms use `react-hook-form` + `zodResolver`; backend field errors are mapped to
  RHF via `lib/form-errors.ts`.
- API calls go through `lib/api.ts`, which validates responses with Zod and
  normalizes errors into `ApiError`.
- Class names: `cn()` (`lib/cn.ts`) or `combineClasses()` (`utils/utils.ts`, supports `!!class`
  to drop a default).
- Dark mode is class-based (`.dark` on `<html>`), persisted to `localStorage` via
  `hooks/useTheme.ts`.
- Unit tests sit next to the code as `*.test.ts(x)` and are committed.

## CI

`.github/workflows/ci.yml` runs lint, format check, typecheck, unit tests and build on
pushes and PRs to `main`.

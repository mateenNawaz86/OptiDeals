# Features

One folder per domain module. Everything a module needs lives together:

```
features/<name>/
  api/
    types.ts    # interface <Name>Api — the contract both implementations satisfy
    live.ts     # real calls via `api` from lib/api.ts (responses parsed with zod)
    mock.ts     # in-memory implementation using lib/mock-api.ts helpers
    index.ts    # export const <name>Api = config.useMockApi ? mock : live
  data/         # fixtures used by mock.ts
  hooks/        # React Query hooks (use<Name>List, useUpdate<Name>, …)
  lib/          # pure helpers (formatting, mapping, form defaults) with *.test.ts beside them
  types/        # zod schemas + inferred types (the source of truth for shapes)
  ui/
    atoms/ molecules/ organisms/ templates/
```

- Route files in `app/[locale]/(app)/<name>/page.tsx` stay thin and render a template from
  `features/<name>/ui/templates`.
- Code shared by several features goes in `features/shared/`; generic design-system primitives
  go in `components/ui/`.
- Strings go in `dictionaries/{de,en}.json` under `modules.<name>.*` and are read with
  `useTranslations()`.

`features/dashboard` is the minimal example slice.

## `api/index.ts` template

```ts
import { config } from "@/lib/config";
import { liveThingsApi } from "@/features/things/api/live";
import { mockThingsApi } from "@/features/things/api/mock";

export type { ThingsApi } from "@/features/things/api/types";

export const thingsApi = config.useMockApi ? mockThingsApi : liveThingsApi;
```

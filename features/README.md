# Features

One folder per page. Everything a page needs lives together:

```
features/<name>/
  content.ts    # all copy, links and icons for the page, as plain data
  data/         # structured data with logic (e.g. pricing plans), tests beside it
  ui/           # the page's sections, one component per file
```

- Route files in `app/<name>/page.tsx` stay thin: metadata, JSON-LD and one component from
  `features/<name>/ui`.
- Copy changes are made in `content.ts`, not in the components.
- Generic building blocks (buttons, headings, icons, reveal) go in `components/ui/`.
- Contact links are built with `whatsappHref()` and `messages` from `lib/site.ts`.

Slices today: `home` (sections plus pricing data and region selector), `about`, `contact`
(WhatsApp page) and `legal` (placeholder terms and privacy pages).

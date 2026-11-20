# Contact — backend spec

The Contact page (`/[locale]/contact`) sends one request. Frontend: `features/contact`
(`api/live.ts`, mock in `api/mock.ts`, schema in `types/contact.types.ts`).

## Endpoint

`POST /contact`

Request body (JSON):

| Field         | Type    | Rules                                                                     |
| ------------- | ------- | ------------------------------------------------------------------------- |
| `firstName`   | string  | required, trimmed                                                         |
| `lastName`    | string  | required, trimmed                                                         |
| `email`       | string  | required, valid email                                                     |
| `phone`       | string  | required, 6–20 chars of digits, spaces, `()+-`                            |
| `dateOfBirth` | string  | required, `YYYY-MM-DD`                                                    |
| `service`     | string  | one of `trial`, `reseller`, `skyGlass`, `b1gReseller`, `skyGlassReseller` |
| `message`     | string  | required                                                                  |
| `agree`       | boolean | must be `true`                                                            |

Responses:

- `201` `{ "id": string }`
- `422` `{ "message": string, "errors": { "<field>": ["message"] } }` — shown under the matching
  form field.
- anything else — the form shows a generic "could not be sent" message.

## Mock

With `NEXT_PUBLIC_USE_MOCK_API` not set to `false`, requests are kept in memory
(`mockContactRequests`) and answered after 250 ms with `{ id: "contact-<n>" }`.

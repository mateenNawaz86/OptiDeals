# Backend specifications

One document per module (`<module>-backend-spec.md`). Each describes exactly what the frontend
sends and expects, so the backend can be built against it without guessing.

## Modules

| Module  | Spec                      | Frontend today                             |
| ------- | ------------------------- | ------------------------------------------ |
| Contact | `contact-backend-spec.md` | API client + mock (`features/contact/api`) |

## Conventions

| Topic    | Rule                                                                                     |
| -------- | ---------------------------------------------------------------------------------------- |
| Base URL | `NEXT_PUBLIC_API_URL`. Paths are relative to it (`/deals`, not `/api/deals`).            |
| Auth     | Session cookie; requests are sent with credentials. `401` not signed in, `403` denied.   |
| Errors   | `{ message: string, errors?: Record<field, string[]> }`; `errors` maps onto form fields. |

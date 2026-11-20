import type { ContactRequest, ContactResponse } from "../types/contact.types";

export interface ContactApi {
  /** POST /contact — stores a contact request. See docs/contact-backend-spec.md. */
  submit: (request: ContactRequest) => Promise<ContactResponse>;
}

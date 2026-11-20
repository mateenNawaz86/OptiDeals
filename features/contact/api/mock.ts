import { mockRespond } from "@/lib/mock-api";
import type { ContactRequest } from "../types/contact.types";
import type { ContactApi } from "./types";

/** Requests received by the mock, newest last (inspectable in tests). */
export const mockContactRequests: ContactRequest[] = [];

export const mockContactApi: ContactApi = {
  submit: (request) => {
    mockContactRequests.push(request);
    return mockRespond({ id: `contact-${mockContactRequests.length}` });
  },
};

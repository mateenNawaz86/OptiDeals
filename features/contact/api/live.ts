import { api } from "@/lib/api";
import { contactResponseSchema } from "../types/contact.types";
import type { ContactApi } from "./types";

export const liveContactApi: ContactApi = {
  submit: (request) => api.post("/contact", contactResponseSchema, request),
};

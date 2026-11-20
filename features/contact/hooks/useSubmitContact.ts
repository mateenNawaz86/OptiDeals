"use client";

import { useMutation } from "@tanstack/react-query";
import { contactApi } from "../api";
import type { ContactRequest } from "../types/contact.types";

export function useSubmitContact() {
  return useMutation({
    mutationFn: (request: ContactRequest) => contactApi.submit(request),
  });
}

import type { FieldValues, Path, UseFormSetError } from "react-hook-form";
import { ApiError } from "@/lib/api";

type FieldErrorsPayload = Record<string, string[] | string>;

function isFieldErrorsPayload(details: unknown): details is {
  errors: FieldErrorsPayload;
} {
  return (
    typeof details === "object" &&
    details !== null &&
    "errors" in details &&
    typeof details.errors === "object"
  );
}

export function applyApiErrorsToForm<T extends FieldValues>(
  error: unknown,
  setError: UseFormSetError<T>,
): boolean {
  if (!(error instanceof ApiError) || !isFieldErrorsPayload(error.details)) {
    return false;
  }

  for (const [field, messages] of Object.entries(error.details.errors)) {
    const message = Array.isArray(messages) ? messages[0] : messages;
    if (message) {
      setError(field as Path<T>, { type: "server", message });
    }
  }

  return true;
}

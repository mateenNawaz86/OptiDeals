import { ApiError } from "@/lib/api";

const MAX_RETRIES = 1;

export const isNotFound = (error: unknown) =>
  error instanceof ApiError && error.status === 404;

/** React Query `retry`: a missing record will not appear on retry. */
export const retryUnlessNotFound = (failureCount: number, error: Error) =>
  !isNotFound(error) && failureCount < MAX_RETRIES;

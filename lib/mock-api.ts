import { ApiError } from "@/lib/api";

const LATENCY_MS = 250;

/** Resolves after a short delay, like a network round trip. */
export const mockDelay = <T>(data: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), LATENCY_MS));

/** Resolves a deep copy, so callers never mutate the mock's state. */
export const mockRespond = <T>(data: T): Promise<T> => mockDelay(structuredClone(data));

export const mockNotFound = (resource: string) =>
  new ApiError(`${resource} not found`, 404);

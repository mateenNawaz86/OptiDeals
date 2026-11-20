const rawApiUrl = process.env.NEXT_PUBLIC_API_URL;

export const config = {
  apiUrl: rawApiUrl ?? "http://localhost:4000",
  /** Serves in-memory fixtures instead of the backend; set to "false" to go live. */
  useMockApi: process.env.NEXT_PUBLIC_USE_MOCK_API !== "false",
} as const;

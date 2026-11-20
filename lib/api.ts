import axios, { AxiosError, type AxiosRequestConfig } from "axios";
import type { ZodType } from "zod";
import { config } from "@/lib/config";

export class ApiError extends Error {
  status: number;
  details: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

export const httpClient = axios.create({
  baseURL: config.apiUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status ?? 0;
    const message =
      (error.response?.data as { message?: string } | undefined)?.message ??
      error.message;
    return Promise.reject(new ApiError(message, status, error.response?.data));
  },
);

async function request<T>(
  schema: ZodType<T>,
  requestConfig: AxiosRequestConfig,
): Promise<T> {
  const response = await httpClient.request(requestConfig);
  return schema.parse(response.data);
}

export const api = {
  get: <T>(url: string, schema: ZodType<T>, requestConfig?: AxiosRequestConfig) =>
    request(schema, { ...requestConfig, method: "GET", url }),
  post: <T>(
    url: string,
    schema: ZodType<T>,
    data?: unknown,
    requestConfig?: AxiosRequestConfig,
  ) => request(schema, { ...requestConfig, method: "POST", url, data }),
  put: <T>(
    url: string,
    schema: ZodType<T>,
    data?: unknown,
    requestConfig?: AxiosRequestConfig,
  ) => request(schema, { ...requestConfig, method: "PUT", url, data }),
  patch: <T>(
    url: string,
    schema: ZodType<T>,
    data?: unknown,
    requestConfig?: AxiosRequestConfig,
  ) => request(schema, { ...requestConfig, method: "PATCH", url, data }),
  delete: <T>(url: string, schema: ZodType<T>, requestConfig?: AxiosRequestConfig) =>
    request(schema, { ...requestConfig, method: "DELETE", url }),
  /** Multipart body, e.g. with file uploads; axios adds the boundary. */
  postForm: <T>(url: string, schema: ZodType<T>, data: FormData) =>
    request(schema, {
      method: "POST",
      url,
      data,
      headers: { "Content-Type": "multipart/form-data" },
    }),
};

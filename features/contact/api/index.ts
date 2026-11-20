import { config } from "@/lib/config";
import { liveContactApi } from "./live";
import { mockContactApi } from "./mock";

export type { ContactApi } from "./types";

export const contactApi = config.useMockApi ? mockContactApi : liveContactApi;

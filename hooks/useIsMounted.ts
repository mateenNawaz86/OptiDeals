"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * True once rendering on the client. Use to defer portal rendering until after
 * hydration, since `document` does not exist during the server pass.
 */
export function useIsMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

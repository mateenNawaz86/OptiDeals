import type { ReactNode } from "react";

/**
 * The signed-in app area. Replace the <main> wrapper with the app shell
 * (components/shell: sidebar, top bar) once it is designed.
 */
export default function AppGroupLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-page flex min-h-0 flex-1 flex-col overflow-auto">
      {children}
    </main>
  );
}

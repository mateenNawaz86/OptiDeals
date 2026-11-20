import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

/**
 * Placeholder for legal pages until the owner supplies the final text.
 * Replace `children` with the real content.
 */
export function LegalPage({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-3xl xl:px-8">
        <h1 className="text-ink text-[clamp(2rem,1.4rem+1.8vw,2.75rem)] font-extrabold tracking-tight">
          {title}
        </h1>
        <div className="text-body mt-6 flex flex-col gap-4 text-lg leading-relaxed">
          {children ?? (
            <p>
              We are preparing this page. If you have any questions in the meantime,
              please{" "}
              <Link
                href="/contact"
                className="text-brand-700 font-semibold underline underline-offset-2"
              >
                contact our team
              </Link>
              .
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

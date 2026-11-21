import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { messages, whatsappHref } from "@/lib/site";

/**
 * Placeholder for legal pages until the owner supplies the final text.
 * Replace `children` with the real content, then remove `index: false` from the route's
 * metadata and add the route to app/sitemap.ts.
 */
export function LegalPage({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <>
      <PageHero
        id="legal-title"
        eyebrow="Legal"
        title={title}
        intro="How OptiDeals works with you and your information."
      />
      <div className="pb-20 lg:pb-32">
        <Container className="max-w-3xl">
          <div className="glass flex flex-col gap-4 p-7 text-lg leading-relaxed text-white/75 sm:p-10">
            {children ?? (
              <p>
                We are preparing this page. If you have any questions in the meantime,
                please{" "}
                <a
                  href={whatsappHref(messages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-300 font-bold underline decoration-2 underline-offset-4 hover:text-white"
                >
                  message our team on WhatsApp
                </a>
                .
              </p>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}

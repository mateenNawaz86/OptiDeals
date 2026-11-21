import { Aurora } from "./aurora";
import { ButtonLink } from "./button";
import { Container } from "./container";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./reveal";
import { Eyebrow, headingClassName } from "./section-heading";

interface Cta {
  label: string;
  href: string;
}

/** Closing call to action shared by the home and about pages; the primary action is WhatsApp. */
export function CtaBand({
  id,
  eyebrow,
  title,
  body,
  primary,
  secondary,
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  primary: Cta;
  secondary?: Cta;
}) {
  return (
    <section aria-labelledby={id} className="py-20 lg:py-32">
      <Container>
        <Reveal>
          <div className="ring-gradient bg-night-900 shadow-panel relative isolate overflow-hidden rounded-[2.25rem] px-6 py-16 text-center sm:px-12 sm:py-24">
            <Aurora />
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2
              id={id}
              className={`${headingClassName} mx-auto mt-6 max-w-3xl sm:text-[clamp(2.25rem,1.2rem+3.4vw,4rem)]`}
            >
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-pretty text-white/70">
              {body}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href={primary.href} size="lg" variant="whatsapp">
                <WhatsAppIcon className="size-5" />
                {primary.label}
              </ButtonLink>
              {secondary ? (
                <ButtonLink href={secondary.href} size="lg" variant="ghost">
                  {secondary.label}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

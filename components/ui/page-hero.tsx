import type { ReactNode } from "react";
import { Aurora } from "./aurora";
import { Container } from "./container";
import { Eyebrow } from "./section-heading";

/** Opening band of an inner page: eyebrow, the h1 and a short intro, with optional actions. */
export function PageHero({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="relative isolate overflow-hidden">
      <Aurora />
      <Container className="py-20 text-center sm:py-24 lg:py-32">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1
          id={id}
          className="font-display mx-auto mt-6 max-w-4xl text-[clamp(2.4rem,1.4rem+4vw,4.5rem)] leading-[1.05] font-extrabold tracking-[-0.035em] text-balance"
        >
          {title}
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/70 [animation-delay:160ms] sm:text-xl">
          {intro}
        </p>
        {children ? (
          <div className="animate-fade-up mt-9 [animation-delay:240ms]">{children}</div>
        ) : null}
      </Container>
    </section>
  );
}

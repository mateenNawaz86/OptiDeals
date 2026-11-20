import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faq } from "../content";

/** Native <details> accordion: works without JavaScript and is keyboard accessible. */
export function FaqSection() {
  return (
    <section aria-labelledby="faq-title" className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          id="faq-title"
          title={faq.title}
          intro={faq.intro}
          tone="gradient"
        />
        <div className="mx-auto mt-10 flex max-w-[1000px] flex-col gap-4 lg:mt-12 lg:gap-5">
          {faq.items.map((item) => (
            <details
              key={item.question}
              className="group shadow-card rounded-2xl bg-white ring-1 ring-black/[0.03] transition-shadow open:shadow-card-hover"
            >
              <summary className="text-ink flex cursor-pointer list-none items-center justify-between gap-6 rounded-2xl px-6 py-5 text-lg font-semibold lg:px-10 lg:py-7 lg:text-[1.375rem] [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="bg-brand-600 relative size-11 shrink-0 rounded-full transition-transform duration-300 group-open:rotate-45 lg:size-14"
                >
                  <span className="absolute top-1/2 left-1/2 h-[5px] w-5 -translate-1/2 rounded-full bg-white lg:h-1.5 lg:w-6" />
                  <span className="absolute top-1/2 left-1/2 h-5 w-[5px] -translate-1/2 rounded-full bg-white lg:h-6 lg:w-1.5" />
                </span>
              </summary>
              <p className="text-body px-6 pb-6 text-base leading-relaxed lg:px-10 lg:pb-8 lg:text-lg">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href={faq.more.href} variant="outline">
            {faq.more.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

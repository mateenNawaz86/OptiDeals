import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { contact } from "../content";
import { ContactForm } from "./contact-form";

export function ContactPage() {
  return (
    <section
      aria-labelledby="contact-title"
      className="relative pt-12 pb-16 sm:pt-16 lg:pt-24 lg:pb-24"
    >
      {/* Gradient band behind the intro; the form card overlaps onto the white below. */}
      <div
        aria-hidden="true"
        className="bg-brand absolute inset-x-0 top-0 h-[26rem] sm:h-[24rem] lg:h-[78%]"
      />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,36rem)] lg:gap-16 xl:pl-[88px]">
        <div className="text-white">
          <h1
            id="contact-title"
            className="text-[clamp(2.25rem,1.6rem+2vw,3rem)] leading-tight font-bold tracking-tight"
          >
            {contact.title}
          </h1>
          <p className="mt-5 max-w-md text-xl leading-snug font-semibold text-pretty lg:text-[1.875rem] lg:leading-[1.3]">
            {contact.tagline}
          </p>
          <ul className="mt-8 flex flex-col gap-3 text-lg text-white/90">
            {contact.topics.map((topic) => (
              <li key={topic} className="flex items-center gap-3">
                <span aria-hidden="true" className="size-2 rounded-full bg-white" />
                {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* useSearchParams (form pre-fill) needs a Suspense boundary on a static page. */}
        <Suspense
          fallback={<div className="shadow-panel h-[52rem] rounded-[27px] bg-white" />}
        >
          <ContactForm />
        </Suspense>
      </Container>
    </section>
  );
}

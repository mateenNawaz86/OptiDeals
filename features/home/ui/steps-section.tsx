import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { steps } from "../content";

export function StepsSection() {
  return (
    <section
      aria-labelledby="steps-title"
      className="bg-night-900 border-y border-white/10 py-20 lg:py-32"
    >
      <Container>
        <SectionHeading
          id="steps-title"
          eyebrow={steps.eyebrow}
          title={steps.title}
          intro={steps.intro}
        />
        <ol className="relative mt-14 grid gap-5 md:grid-cols-3 lg:mt-20 lg:gap-6">
          {/* Line that links the three step numbers on wide screens. */}
          <span
            aria-hidden="true"
            className="bg-gradient-brand absolute top-[3.75rem] right-[16.6%] left-[16.6%] hidden h-px opacity-50 md:block"
          />
          {steps.items.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 120}>
              <div className="glass relative h-full p-7 text-center lg:p-9">
                <span
                  aria-hidden="true"
                  className="font-display bg-night-950 ring-gradient relative mx-auto flex size-14 items-center justify-center rounded-2xl text-xl font-extrabold"
                >
                  <span className="text-gradient">{index + 1}</span>
                </span>
                <h3 className="font-display mt-7 text-xl font-bold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs leading-relaxed text-white/65">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

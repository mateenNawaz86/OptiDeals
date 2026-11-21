import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { features } from "../content";

export function FeaturesSection() {
  return (
    <section id="features" aria-labelledby="features-title" className="py-20 lg:py-32">
      <Container>
        <SectionHeading
          id="features-title"
          eyebrow={features.eyebrow}
          title={features.title}
          intro={features.intro}
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {features.items.map(({ title, body, icon: Icon }, index) => (
            <Reveal as="li" key={title} delay={(index % 3) * 90}>
              <article
                data-spot
                className="glass glass-hover group h-full overflow-hidden p-7 lg:p-9"
              >
                <span
                  aria-hidden="true"
                  className="font-display absolute top-5 right-7 text-6xl font-extrabold text-white/[0.04] transition-colors duration-500 group-hover:text-white/[0.08]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="bg-gradient-brand ease-out-expo flex size-14 items-center justify-center rounded-2xl text-white shadow-[0_12px_30px_-10px_rgb(134_113_255/0.7)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <Icon className="size-7" />
                </span>
                <h3 className="font-display mt-7 text-xl font-bold tracking-tight text-white">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/65">{body}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

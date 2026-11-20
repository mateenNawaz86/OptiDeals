import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { hero } from "../content";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden">
      <Container className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:gap-16 lg:py-20 xl:pl-20">
        <div>
          <h1
            id="hero-title"
            className="font-roca text-gradient-brand text-[clamp(2.4rem,1rem+3.6vw,4rem)] leading-[1.15] font-extrabold tracking-tight"
          >
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-muted mt-6 max-w-[38rem] text-lg leading-relaxed text-pretty sm:text-xl lg:text-[1.375rem] lg:leading-[1.6]">
            {hero.body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <ButtonLink href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} size="lg" variant="outline">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          priority
          sizes="(min-width: 1024px) 605px, 90vw"
          className="mx-auto h-auto w-full max-w-[605px]"
        />
      </Container>
    </section>
  );
}

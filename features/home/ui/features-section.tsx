import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";
import { features, type Feature } from "../content";

function FeatureCard({ feature }: { feature: Feature }) {
  const { title, body, icon: Icon, highlighted } = feature;

  return (
    <li
      className={cn(
        "flex flex-col rounded-2xl p-7 shadow-sm transition duration-300 motion-safe:hover:-translate-y-1 hover:shadow-card-hover lg:p-8",
        highlighted ? "bg-brand-700 text-white" : "bg-white",
      )}
    >
      <span
        className={cn(
          "flex size-16 items-center justify-center rounded-2xl",
          highlighted ? "bg-white/15 text-white" : "bg-accent-100 text-accent-600",
        )}
      >
        {"src" in Icon ? (
          <Image
            src={Icon.src}
            alt=""
            width={Icon.width}
            height={Icon.height}
            className="size-9 object-contain"
          />
        ) : (
          <Icon className="size-9" />
        )}
      </span>
      <h3
        className={cn(
          "mt-6 text-xl font-bold tracking-tight uppercase lg:text-[1.375rem]",
          highlighted ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-3 leading-relaxed",
          highlighted ? "text-white/90" : "text-body",
        )}
      >
        {body}
      </p>
    </li>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-brand py-16 lg:py-24"
    >
      <Container>
        <SectionHeading
          id="services-title"
          title={features.title}
          intro={features.intro}
          tone="light"
        />
        <ul className="mx-auto mt-10 grid max-w-[1140px] gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-7">
          {features.items.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

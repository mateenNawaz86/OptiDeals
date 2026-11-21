import { Container } from "@/components/ui/container";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "../content";

export function StatsSection() {
  return (
    <section aria-label="OptiDeals in numbers" className="py-20 lg:py-28">
      <Container>
        <dl className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 90}
              className="glass flex h-full flex-col-reverse justify-end gap-2 px-5 py-8 text-center sm:py-10"
            >
              <dt className="text-sm text-white/60 sm:text-base">{stat.label}</dt>
              <dd className="font-display text-gradient text-[clamp(1.6rem,1rem+2.6vw,3rem)] leading-tight font-extrabold tracking-tight">
                {"count" in stat && stat.count ? (
                  <CountUp {...stat.count} />
                ) : (
                  stat.text
                )}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}

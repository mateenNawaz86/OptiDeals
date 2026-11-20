import { Container } from "@/components/ui/container";
import { stats } from "../content";

export function StatsSection() {
  return (
    <section aria-label="OptiDeals in numbers" className="pb-16 lg:pb-24">
      <Container>
        <dl className="mx-auto grid max-w-[1194px] gap-6 sm:grid-cols-3 lg:gap-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="shadow-card flex min-h-[200px] flex-col-reverse items-center justify-center gap-3 rounded-[20px] bg-white px-6 py-8 text-center lg:min-h-[252px]"
            >
              <dt className="text-muted max-w-[16rem] text-xl leading-snug font-bold uppercase lg:text-[1.6rem]">
                {stat.label}
              </dt>
              <dd className="text-accent-600 text-5xl font-extrabold tracking-tight lg:text-[3.5rem]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

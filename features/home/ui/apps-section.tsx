import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { apps } from "../content";

export function AppsSection() {
  return (
    <section
      id="apps"
      aria-labelledby="apps-title"
      className="bg-night-900 border-y border-white/10 py-20 lg:py-32"
    >
      <Container>
        <SectionHeading
          id="apps-title"
          eyebrow={apps.eyebrow}
          title={apps.title}
          intro={apps.intro}
        />

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-20 lg:grid-cols-6">
          {apps.items.map((app, index) => (
            <Reveal as="li" key={app.name} delay={index * 70}>
              <figure
                data-spot
                className="glass glass-hover group flex h-full flex-col items-center px-4 py-7"
              >
                <Image
                  src={app.src}
                  alt=""
                  width={568}
                  height={568}
                  sizes="96px"
                  className="ease-out-expo size-20 rounded-[1.35rem] object-cover shadow-[0_18px_40px_-14px_rgb(0_0_0/0.9)] transition-transform duration-500 group-hover:scale-110 sm:size-24"
                />
                <figcaption className="mt-5 text-center text-sm font-bold text-white sm:text-[15px]">
                  {app.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14 text-center">
          <h3 className="text-xs font-bold tracking-[0.16em] text-white/50 uppercase">
            {apps.devicesTitle}
          </h3>
          <ul className="mt-5 flex flex-wrap justify-center gap-3">
            {apps.devices.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2.5 rounded-full bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/85 inset-ring inset-ring-white/10 sm:text-[15px]"
              >
                <Icon className="text-brand-300 size-5" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PillHeading } from "@/components/ui/section-heading";
import { apps } from "../content";

export function AppsSection() {
  return (
    <section
      id="apps"
      aria-labelledby="apps-title"
      className="bg-surface/60 py-16 lg:py-24"
    >
      <Container>
        <PillHeading id="apps-title" className="font-light uppercase lg:min-w-[42rem]">
          {apps.title}
        </PillHeading>
        <p className="text-muted mx-auto mt-5 max-w-xl text-center text-lg">
          {apps.intro}
        </p>
        <ul className="mx-auto mt-12 grid max-w-[1204px] grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:mt-16 lg:gap-x-24 lg:gap-y-16">
          {apps.items.map((app) => (
            <li key={app.name}>
              <figure className="group mx-auto max-w-[284px]">
                <div className="shadow-card overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 transition duration-300 group-hover:shadow-card-hover motion-safe:group-hover:-translate-y-1">
                  <Image
                    src={app.src}
                    alt=""
                    width={568}
                    height={568}
                    sizes="(min-width: 1024px) 284px, (min-width: 768px) 30vw, 45vw"
                    className="aspect-square h-auto w-full object-cover"
                  />
                </div>
                <figcaption className="text-ink mt-4 text-center text-base font-semibold">
                  {app.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

import { marquee } from "../content";

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {marquee.map((item) => (
        <li
          key={item}
          className="font-display flex items-center gap-8 pr-8 text-lg font-semibold whitespace-nowrap text-white/70 sm:text-xl"
        >
          {item}
          <span aria-hidden="true" className="bg-gradient-brand size-2 rounded-full" />
        </li>
      ))}
    </ul>
  );
}

/** Endless strip of headline facts. The list is rendered twice so the loop has no seam. */
export function MarqueeSection() {
  return (
    <section
      aria-label="OptiDeals at a glance"
      className="marquee bg-night-900 overflow-hidden border-y border-white/10 py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
    >
      <div className="marquee-track animate-marquee flex w-max">
        <Track />
        <Track hidden />
      </div>
    </section>
  );
}

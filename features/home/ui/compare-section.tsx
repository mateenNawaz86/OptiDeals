import { Container } from "@/components/ui/container";
import { CheckIcon, XIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { compare } from "../content";

/** A real table on wide screens; each row stacks into a card on phones. */
export function CompareSection() {
  return (
    <section
      aria-labelledby="compare-title"
      className="bg-night-900 border-y border-white/10 py-20 lg:py-32"
    >
      <Container>
        <SectionHeading
          id="compare-title"
          eyebrow={compare.eyebrow}
          title={compare.title}
          intro={compare.intro}
        />

        <Reveal className="mx-auto mt-14 max-w-5xl lg:mt-20">
          <div className="glass overflow-hidden">
            <table className="block w-full text-left md:table">
              <caption className="sr-only">{compare.title}</caption>
              <thead className="max-md:hidden">
                <tr>
                  <td className="p-6" />
                  <th scope="col" className="bg-brand-400/10 p-6">
                    <span className="font-display text-gradient text-lg font-bold">
                      {compare.columns.ours}
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="font-display p-6 text-lg font-bold text-white/60"
                  >
                    {compare.columns.theirs}
                  </th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {compare.rows.map((row) => (
                  <tr
                    key={row.label}
                    className="block border-t border-white/10 p-5 first:border-t-0 md:table-row md:p-0 md:first:border-t"
                  >
                    <th
                      scope="row"
                      className="font-display block pb-3 font-semibold text-white md:table-cell md:w-1/4 md:p-6"
                    >
                      {row.label}
                    </th>
                    <td className="md:bg-brand-400/10 block pb-2 md:table-cell md:p-6">
                      <span className="flex items-start gap-3 font-semibold text-white">
                        <span className="bg-brand-400 text-night-950 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                          <CheckIcon className="size-3" strokeWidth={3.5} />
                        </span>
                        <span>
                          <span className="sr-only md:hidden">
                            {compare.columns.ours}:{" "}
                          </span>
                          {row.ours}
                        </span>
                      </span>
                    </td>
                    <td className="block md:table-cell md:p-6">
                      <span className="flex items-start gap-3 text-white/55">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/60">
                          <XIcon className="size-3" strokeWidth={3} />
                        </span>
                        <span>
                          <span className="sr-only md:hidden">
                            {compare.columns.theirs}:{" "}
                          </span>
                          {row.theirs}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

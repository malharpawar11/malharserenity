import { Reveal } from "@/components/motion/reveal";

const lines = [
  "Baner is where Pune’s IT workforce actually wants to live —",
  "not just commute to.",
  "It has what the corridor itself doesn’t:",
  "elevation, trees, and a skyline low enough to see the hill behind it.",
];

/**
 * A pure typographic beat — no image, no card grid, no split layout.
 * Deliberately the plainest section on the page, immediately after two
 * image-heavy ones, so the neighbourhood's pitch lands as a statement
 * rather than another visual to scan past.
 */
export function LocationWhyBaner() {
  return (
    <section className="bg-basalt py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-turmeric">Why Baner</p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-2">
          {lines.map((line, i) => (
            <Reveal key={line} delay={i * 0.12}>
              <p className="font-display text-3xl leading-snug text-mist/90 sm:text-4xl md:text-[2.75rem]">
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.55} className="mt-10">
          <p className="mx-auto max-w-lg text-base leading-relaxed text-mist/55">
            That&rsquo;s the whole argument for this neighbourhood — everything
            else on this page is just evidence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import { Music2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

/**
 * The Raag Malhar framing is explicitly flagged in the draft copy
 * (src/content/copy/overview.md) as a proposed narrative device, not a
 * confirmed fact about the name's origin — so the hedge ("whether or not
 * that's the literal reason...") is preserved verbatim, not softened into
 * an assertion for the sake of a cleaner sentence.
 */
export function OverviewName() {
  return (
    <section className="overflow-hidden bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-canopy/10">
            <Music2 className="h-5 w-5 text-canopy" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
            The Name
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <blockquote className="mt-6 font-display text-2xl leading-relaxed text-basalt sm:text-3xl">
            &ldquo;Malhar Serenity takes its name from Raag Malhar — the
            monsoon raga, associated for centuries with rain, cooling air,
            and green returning to dry ground.&rdquo;
          </blockquote>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-basalt/70">
            Whether or not that&rsquo;s the literal reason behind the
            name, it&rsquo;s the right way to think about this address:
            fourteen homes on Baner&rsquo;s high ground, built around the
            idea that the view and the quiet are the amenity.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

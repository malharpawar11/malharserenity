import { Reveal } from "@/components/motion/reveal";
import { project } from "@/content/site-config";

/**
 * Deliberately the quietest hero on the site — no full-bleed image, no
 * scroll-linked motion. Every other page opens with photography or a
 * set-piece; this one is the "about" page, so it opens like the first
 * page of a story instead — text on a soft ground, nothing to compete
 * with the read.
 */
export function OverviewHero() {
  return (
    <section className="bg-mist pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
            Overview
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.1] text-basalt sm:text-6xl">
            The story behind
            <br />
            {project.name}.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-basalt/80">
            Not a brochure pitch — the actual reasoning behind the name,
            the site, and the fourteen homes on it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

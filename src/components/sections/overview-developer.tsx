import { Building2, Info } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { project } from "@/content/site-config";

/**
 * No independently verifiable developer track record was found during
 * research (see overview.md's TODO) — years active, other projects, etc.
 * We don't fabricate a company history to fill the gap; this section
 * states only what's actually known and says plainly that the rest is
 * still pending, the same way floor plans and RERA numbers are handled
 * elsewhere on the site.
 */
export function OverviewDeveloper() {
  return (
    <section className="bg-basalt py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-mist/10">
            <Building2 className="h-5 w-5 text-turmeric" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-turmeric">
            The Developer
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-mist sm:text-5xl">
            {project.developer}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-mist/75">
            Malhar Serenity is developed by {project.developer} —{" "}
            {project.status.toLowerCase()}, with possession targeted for{" "}
            {project.possession}.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="mt-10">
          <p className="mx-auto flex max-w-md items-start gap-2.5 rounded-2xl border border-mist/10 bg-mist/[0.04] px-5 py-4 text-left text-sm leading-relaxed text-mist/60">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-mist/40" strokeWidth={1.5} aria-hidden="true" />
            A fuller developer history — years active, other completed
            projects — isn&rsquo;t published yet. We&rsquo;d rather leave
            this short and honest than pad it with unverified claims.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

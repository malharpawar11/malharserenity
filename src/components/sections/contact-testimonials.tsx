import { Quote } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

/**
 * Malhar Serenity is still under construction (see project.status /
 * project.possession in site-config.ts) — there are no residents yet to
 * quote. Per the site's non-negotiable content rule, we don't fabricate
 * customer names, photos, or reviews to fill this space; this section is
 * an honest placeholder instead, styled to match the rest of the site's
 * placeholder pattern (LifestylePlaceholder, "Unconfirmed" badges, etc.).
 */
export function ContactTestimonials() {
  return (
    <section className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
            In Residents&rsquo; Words
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-basalt sm:text-5xl">
            Coming, honestly.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-basalt/80">
            Malhar Serenity is still under construction — there are no
            residents yet to quote. We&rsquo;d rather leave this space
            honest than fill it with invented reviews.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-basalt/15 bg-secondary/30 px-6 py-10"
            >
              <Quote className="h-6 w-6 text-stone-strong" strokeWidth={1.5} aria-hidden="true" />
              <span className="h-12 w-12 rounded-full border border-basalt/10 bg-mist" aria-hidden="true" />
              <p className="text-xs text-stone-strong">Resident testimonial, pending possession</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

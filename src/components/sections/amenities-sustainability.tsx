"use client";

import { motion } from "motion/react";
import { AlertTriangle } from "lucide-react";
import { amenityCategories } from "@/content/amenities";
import { Reveal } from "@/components/motion/reveal";
import { AmenityIcon } from "@/components/ui/amenity-icon";

const sustainability = amenityCategories.find((c) => c.category === "Sustainability")!;

export function AmenitiesSustainability() {
  return (
    <section id="sustainability" className="scroll-mt-24 bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
            Sustainability
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-basalt sm:text-5xl">
            A lighter footprint,
            <br />
            where it counts.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-basalt/80">
            Not a marketing checklist — just what&rsquo;s genuinely on the
            table. Both ideas below are still being worked through with
            the developer, which is why they&rsquo;re marked as such
            rather than promised.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {sustainability.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-full flex-col items-center gap-4 overflow-hidden rounded-3xl border border-canopy/15 bg-gradient-to-b from-canopy/[0.06] to-transparent p-8 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-canopy/10">
                  <AmenityIcon name={item.icon} className="h-6 w-6 text-canopy" />
                </span>
                <p className="font-display text-xl text-basalt">{item.name}</p>
                <p className="text-sm leading-relaxed text-basalt/70">{item.description}</p>
                <span className="mt-auto flex items-center gap-1.5 rounded-full border border-turmeric/40 bg-turmeric/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-turmeric-strong">
                  <AlertTriangle className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
                  Unconfirmed
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <p className="text-sm text-stone-strong">
            Rainwater harvesting is also part of the current plan — see it
            under Convenience above.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

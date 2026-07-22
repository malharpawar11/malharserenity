"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BedDouble, Bath, Maximize2, ArrowRight } from "lucide-react";
import { unitConfigs, priceDisclaimer } from "@/content/site-config";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const highlightsByConfig: Record<string, string[]> = {
  "3bhk-1088": ["Every unit gets a private balcony", "North-east facing living room"],
  "3bhk-1215": ["Third bathroom for guests", "Corner unit, dual-aspect views"],
};

export function ResidencesTeaser() {
  return (
    <section className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
            Residences
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-basalt sm:text-5xl">
            Two floor plans.
            <br />
            Both built the same way.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-basalt/80">
            Both layouts share the same specification — the larger plan adds
            a third bathroom and floor area, not a different tier of build
            quality.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {unitConfigs.map((unit, i) => (
            <Reveal key={unit.id} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                <Card className="group relative overflow-hidden rounded-3xl border-basalt/10 bg-mist p-8 shadow-[0_2px_20px_-8px_rgba(35,35,31,0.12)] transition-shadow duration-300 hover:shadow-[0_24px_48px_-16px_rgba(35,35,31,0.25)]">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wide text-stone-strong">
                        {unit.type}
                      </p>
                      <p className="mt-1 font-display text-3xl text-basalt">
                        {unit.carpetAreaSqFt}
                        <span className="text-lg text-basalt/70"> sq.ft</span>
                      </p>
                    </div>
                    <Badge className="rounded-full border-turmeric/40 bg-turmeric/10 px-3 py-1 font-mono text-xs text-turmeric-strong">
                      {unit.priceINR}
                    </Badge>
                  </div>

                  <div className="mt-6 flex items-center gap-6 border-y border-basalt/10 py-5">
                    <div className="flex items-center gap-2 text-basalt/80">
                      <BedDouble className="h-4 w-4 text-canopy" strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-sm">3 Bed</span>
                    </div>
                    <div className="flex items-center gap-2 text-basalt/80">
                      <Bath className="h-4 w-4 text-canopy" strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-sm">{unit.bathrooms} Bath</span>
                    </div>
                    <div className="flex items-center gap-2 text-basalt/80">
                      <Maximize2 className="h-4 w-4 text-canopy" strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-sm">{unit.carpetAreaSqFt} sq.ft</span>
                    </div>
                  </div>

                  <ul className="mt-5 flex flex-col gap-2">
                    {highlightsByConfig[unit.id]?.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-basalt/70">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-turmeric" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/residences?config=${unit.id}`}
                    className="mt-7 flex items-center gap-1.5 font-sans text-sm font-medium text-canopy"
                  >
                    View floor plan
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8 text-sm text-stone-strong">
          {priceDisclaimer}
        </Reveal>

        <Reveal delay={0.25} className="mt-10">
          <Link
            href="/residences"
            className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-basalt"
          >
            Compare both floor plans in detail
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

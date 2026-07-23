"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { LifestylePlaceholder } from "@/components/ui/lifestyle-placeholder";
import { verifiedGeoFacts } from "@/content/site-config";

/**
 * The strongest section on the page, per brief — but there's no real
 * photography of Baner Hill or the park yet, so the drama has to come
 * from scale, motion, and the quote, not a borrowed building render
 * standing in for a place it isn't.
 */
export function LocationNature() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <section ref={ref} className="overflow-hidden bg-basalt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div style={reduceMotion ? undefined : { y }}>
            <LifestylePlaceholder
              label="Baner Hill & Biodiversity Park"
              tone="dark"
              className="aspect-[4/5]"
            />
          </motion.div>

          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-turmeric">
                Nature &amp; Elevation
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-mist sm:text-5xl">
                Baner Hill,
                <br />
                next door.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist/75">
                Baner Hill rises directly alongside the neighbourhood — at{" "}
                {verifiedGeoFacts.banerHillElevationFt.toLocaleString()} feet,
                the {verifiedGeoFacts.banerHillRank}, and the anchor of the
                Baner-Pashan Biodiversity Park beside it. It&rsquo;s open,
                green, and walkable in a way that&rsquo;s genuinely rare this
                close to the IT corridor.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-10 border-l-2 border-turmeric/50 pl-6">
              <p className="font-display text-2xl leading-snug text-mist/90 sm:text-3xl">
                &ldquo;A real, adjoining green space today — not a guarantee
                about tomorrow.&rdquo;
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="mt-8 max-w-xl text-sm leading-relaxed text-mist/55">
                That caveat is deliberate: the hill&rsquo;s future has been
                debated, with rezoning proposals drawing organized resident
                opposition in both 2023 and 2025. The Biodiversity Park
                itself spans roughly 200 hectares, administered by the Pune
                Municipal Corporation, with trails used for walking, jogging,
                and birdwatching — we don&rsquo;t have a verified distance
                from Samarth Colony to quote, because it&rsquo;s in the
                neighbourhood, not somewhere you&rsquo;d drive to.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

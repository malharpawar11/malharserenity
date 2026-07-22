"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { project, unitConfigs, priceDisclaimer } from "@/content/site-config";
import { HillLine, BuildingSilhouette, TreeLine } from "@/components/illustrations/elevation-scene";

const stats = [
  { label: "Residences", value: String(project.totalUnits) },
  { label: "Boutique plot", value: `${project.plotSizeAcres} ac` },
  {
    label: "3 BHK carpet area",
    value: `${unitConfigs[0].carpetAreaSqFt}–${unitConfigs[1].carpetAreaSqFt} sq.ft`,
  },
  { label: "Possession", value: project.possession },
  { label: "Starting price", value: unitConfigs[0].priceINR, accent: true },
];

/**
 * Manual clamped lerp, used instead of useTransform's array-range shorthand.
 * The shorthand form was observed to un-clamp and rebound past its range
 * (verified against a production build via scripted scroll — likely a
 * native-ScrollTimeline offload quirk in this Motion version for some
 * properties). The function form always computes on the JS thread, which
 * clamps correctly.
 */
function clampedLerp(t: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  const p = Math.min(Math.max((t - inMin) / (inMax - inMin), 0), 1);
  return outMin + p * (outMax - outMin);
}

export function HeroElevation() {
  const reduceMotion = useReducedMotion();
  const sceneRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const hillY = useTransform(scrollYProgress, (v) => clampedLerp(v, 0, 1, 0, -60));
  const buildingY = useTransform(scrollYProgress, (v) => clampedLerp(v, 0, 1, 30, -140));
  const buildingOpacity = useTransform(scrollYProgress, (v) => {
    if (v < 0.15) return clampedLerp(v, 0, 0.15, 0, 1);
    return 1;
  });
  const treeY = useTransform(scrollYProgress, (v) => clampedLerp(v, 0, 1, 0, 220));
  const contentOpacity = useTransform(scrollYProgress, (v) => clampedLerp(v, 0, 0.35, 1, 0));
  const contentY = useTransform(scrollYProgress, (v) => clampedLerp(v, 0, 0.35, 0, -40));

  return (
    <section ref={sceneRef} className={reduceMotion ? "relative" : "relative h-[170vh]"}>
      <div className={reduceMotion ? "relative overflow-hidden" : "sticky top-0 h-svh overflow-hidden"}>
        {/* Sky */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--dusk) 10%, var(--mist)) 0%, var(--mist) 65%)",
          }}
        />

        {/* Hill line */}
        <motion.div
          style={reduceMotion ? undefined : { y: hillY }}
          className="absolute inset-x-0 bottom-0 h-[45%]"
        >
          <HillLine className="h-full w-full" />
        </motion.div>

        {/* Building silhouette */}
        <motion.div
          style={reduceMotion ? undefined : { y: buildingY, opacity: buildingOpacity }}
          className="absolute inset-x-0 bottom-[8%] flex justify-center px-6"
        >
          <BuildingSilhouette className="h-40 w-full max-w-xl sm:h-56" />
        </motion.div>

        {/* Foreground tree line */}
        <motion.div
          style={reduceMotion ? undefined : { y: treeY }}
          className="absolute inset-x-0 bottom-0 h-[18%]"
        >
          <TreeLine className="h-full w-full" />
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={reduceMotion ? undefined : { opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex h-full flex-col items-center justify-center gap-8 px-6 text-center"
        >
          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-stone-strong"
          >
            {project.location.line1}, {project.location.line2}
          </motion.p>

          <motion.h1
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl font-display text-5xl leading-[1.1] text-basalt sm:text-6xl md:text-7xl"
          >
            Fourteen homes.
            <br />
            One hillside.
          </motion.h1>

          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg text-lg leading-relaxed text-basalt/80"
          >
            Malhar Serenity is a boutique address of 3 BHK residences on
            Baner&rsquo;s high ground — built small on purpose, so every
            home keeps its view, its quiet, and its distance from the next
            door.
          </motion.p>

          <motion.dl
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-baseline justify-center gap-x-7 gap-y-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <dt className="text-[10px] uppercase tracking-wide text-stone-strong">
                  {stat.label}
                </dt>
                <dd
                  className={`font-mono text-base ${
                    stat.accent ? "text-turmeric-strong" : "text-canopy"
                  }`}
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="#enquiry"
              className="rounded-md bg-canopy px-7 py-3 font-sans text-sm font-medium text-mist transition-colors hover:bg-canopy/90"
            >
              Enquire Now
            </a>
            <button
              type="button"
              disabled
              title="Brochure not yet available — TODO: swap in real PDF"
              className="cursor-not-allowed rounded-md border border-stone/50 px-7 py-3 font-sans text-sm font-medium text-basalt/50"
            >
              Download Brochure
            </button>
          </motion.div>

          <p className="max-w-md text-xs text-stone-strong">{priceDisclaimer}</p>
        </motion.div>
      </div>
    </section>
  );
}

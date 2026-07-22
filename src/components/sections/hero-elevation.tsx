"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { ChevronDown } from "lucide-react";
import { project, unitConfigs, priceDisclaimer } from "@/content/site-config";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { Separator } from "@/components/ui/separator";

const HERO_IMAGE = "/images/serenity-exterior-dusk.jpg";
const HERO_IMAGE_ALT =
  "Architectural render of Malhar Serenity at dusk, showing the building's brick-and-glass facade lit from within";

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

function clampedLerp(t: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  const p = Math.min(Math.max((t - inMin) / (inMax - inMin), 0), 1);
  return outMin + p * (outMax - outMin);
}

function HeroStats() {
  return (
    <dl className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-0">
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex items-center">
          {i > 0 && <Separator orientation="vertical" className="mx-5 hidden h-8 bg-mist/20 sm:block" />}
          <div className="flex flex-col items-center">
            <dt className="text-[10px] uppercase tracking-[0.15em] text-mist/60">{stat.label}</dt>
            <dd className={`font-mono text-base ${stat.accent ? "text-turmeric" : "text-mist"}`}>
              {stat.value}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

function HeroCopy() {
  return (
    <>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-mist/70">
        {project.location.line1}, {project.location.line2}
      </p>
      <h1 className="max-w-4xl font-display text-6xl leading-[1.05] text-mist sm:text-7xl md:text-8xl">
        Fourteen homes.
        <br />
        One hillside.
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-mist/80">
        A boutique address of 3&nbsp;BHK residences on Baner&rsquo;s high ground —
        built small on purpose, so every home keeps its view, its quiet, and
        its distance from the next door.
      </p>
      <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row">
        <MagneticCTA href="#enquiry" variant="brand-accent" size="pill">
          Enquire Now
        </MagneticCTA>
        <MagneticCTA href="/residences" variant="brand-ghost" size="pill">
          Explore Residences
        </MagneticCTA>
      </div>
      <div className="pt-6">
        <HeroStats />
      </div>
      <p className="max-w-md pt-2 text-xs text-mist/50">{priceDisclaimer}</p>
    </>
  );
}

function ScrollIndicator({ opacity }: { opacity: MotionValue<number> }) {
  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist/60">Scroll</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-4 w-4 text-mist/60" aria-hidden="true" />
      </motion.div>
    </motion.div>
  );
}

/**
 * Reduced-motion path: no `motion.*` at all, matching the pattern proven
 * safe in the animated version's own history — a motion element whose
 * animate/style props toggle between an object and `undefined` mid-
 * lifecycle does not reliably reset to a natural CSS state.
 */
function StaticHero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      <Image src={HERO_IMAGE} alt={HERO_IMAGE_ALT} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/70 to-basalt/25" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 pt-28 pb-20 text-center sm:pt-40 sm:pb-28">
        <HeroCopy />
      </div>
    </section>
  );
}

function ScrollHero() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sceneRef, offset: ["start start", "end start"] });

  const imageY = useTransform(scrollYProgress, (v) => clampedLerp(v, 0, 1, 0, 140));
  const contentOpacity = useTransform(scrollYProgress, (v) => clampedLerp(v, 0, 0.6, 1, 0));
  const contentY = useTransform(scrollYProgress, (v) => clampedLerp(v, 0, 0.6, 0, -50));
  const indicatorOpacity = useTransform(scrollYProgress, (v) => clampedLerp(v, 0, 0.15, 1, 0));

  return (
    <section ref={sceneRef} className="relative min-h-svh overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
        initial={{ scale: 1.14, opacity: 0 }}
        animate={{ scale: 1.06, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image src={HERO_IMAGE} alt={HERO_IMAGE_ALT} fill priority sizes="100vw" className="object-cover" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/65 to-basalt/20" />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex h-full flex-col items-center justify-end gap-6 px-6 pt-28 pb-20 text-center sm:pt-40 sm:pb-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-mist/70"
        >
          {project.location.line1}, {project.location.line2}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-display text-6xl leading-[1.05] text-mist sm:text-7xl md:text-8xl"
        >
          Fourteen homes.
          <br />
          One hillside.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="max-w-xl text-lg leading-relaxed text-mist/80"
        >
          A boutique address of 3&nbsp;BHK residences on Baner&rsquo;s high
          ground — built small on purpose, so every home keeps its view, its
          quiet, and its distance from the next door.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col items-center gap-4 pt-2 sm:flex-row"
        >
          <MagneticCTA href="#enquiry" variant="brand-accent" size="pill">
            Enquire Now
          </MagneticCTA>
          <MagneticCTA href="/residences" variant="brand-ghost" size="pill">
            Explore Residences
          </MagneticCTA>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52 }}
          className="pt-6"
        >
          <HeroStats />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-md pt-2 text-xs text-mist/50"
        >
          {priceDisclaimer}
        </motion.p>
      </motion.div>

      <ScrollIndicator opacity={indicatorOpacity} />
    </section>
  );
}

export function HeroElevation() {
  const reduceMotion = useReducedMotion();
  return reduceMotion ? <StaticHero /> : <ScrollHero />;
}

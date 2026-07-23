"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown, MapPin } from "lucide-react";
import { project } from "@/content/site-config";

const HERO_IMAGE = "/images/serenity-exterior-day.jpg";
const HERO_IMAGE_ALT =
  "Malhar Serenity's facade in daylight, set against Baner's elevated, tree-lined streets";

/**
 * This page's own hero identity: a slow continuous Ken-Burns drift (not
 * Home's scroll-linked parallax, not Amenities' single load-in reveal) plus
 * a location-pin badge — the one motif that says "place" before a single
 * word of copy loads.
 */
function LocationPin() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-2 rounded-full border border-mist/25 bg-mist/10 py-2 pr-4 pl-3 backdrop-blur-md"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-turmeric opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-turmeric" />
      </span>
      <MapPin className="h-3.5 w-3.5 text-mist/70" strokeWidth={1.5} aria-hidden="true" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist/80">
        {project.location.microMarket}
      </span>
    </motion.div>
  );
}

function StaticLocationHero() {
  return (
    <section className="relative flex h-[90svh] min-h-[620px] flex-col items-center justify-center overflow-hidden">
      <Image src={HERO_IMAGE} alt={HERO_IMAGE_ALT} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/65 to-basalt/35" />
      <div className="relative z-10 flex flex-col items-center gap-7 px-6 text-center">
        <LocationPin />
        <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-mist sm:text-6xl md:text-7xl">
          The best of Baner,
          <br />
          without the noise.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-mist/80">
          A quiet, elevated address with the IT corridor a short drive away
          and Baner Hill closer than either. This page is about the
          neighbourhood — not the building.
        </p>
      </div>
    </section>
  );
}

function AnimatedLocationHero() {
  return (
    <section className="relative flex h-[90svh] min-h-[620px] flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.25, opacity: 1 }}
        transition={{
          opacity: { duration: 1.4 },
          scale: { duration: 22, ease: "linear" },
        }}
      >
        <Image src={HERO_IMAGE} alt={HERO_IMAGE_ALT} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/65 to-basalt/35" />

      <div className="relative z-10 flex flex-col items-center gap-7 px-6 text-center">
        <LocationPin />

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-display text-5xl leading-[1.05] text-mist sm:text-6xl md:text-7xl"
        >
          The best of Baner,
          <br />
          without the noise.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="max-w-xl text-lg leading-relaxed text-mist/80"
        >
          A quiet, elevated address with the IT corridor a short drive away
          and Baner Hill closer than either. This page is about the
          neighbourhood — not the building.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist/60">
          Discover the neighbourhood
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-mist/60" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export function LocationHero() {
  const reduceMotion = useReducedMotion();
  return reduceMotion ? <StaticLocationHero /> : <AnimatedLocationHero />;
}

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "/images/serenity-exterior-dusk.jpg";
const HERO_IMAGE_ALT =
  "Architectural render of Malhar Serenity at dusk, showing the building's brick-and-glass facade lit from within";

/**
 * Deliberately simpler than the Home hero — no scroll-linked parallax
 * rig. That's Home's one signature moment; repeating it here would
 * dilute it rather than establish this page's own identity. A clean
 * load-in reveal is enough for a section hero.
 */
function StaticAmenitiesHero() {
  return (
    <section className="relative flex h-[80svh] min-h-[560px] flex-col items-center justify-center overflow-hidden">
      <Image src={HERO_IMAGE} alt={HERO_IMAGE_ALT} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/70 to-basalt/30" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-mist/70">Amenities</p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.08] text-mist sm:text-6xl md:text-7xl">
          Every detail, built
          <br />
          into daily life.
        </h1>
        <p className="max-w-lg text-lg leading-relaxed text-mist/80">
          Not a checklist of extras — the things a fourteen-home address
          actually needs, chosen with the same restraint as everything
          else here.
        </p>
      </div>
    </section>
  );
}

function AnimatedAmenitiesHero() {
  return (
    <section className="relative flex h-[80svh] min-h-[560px] flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1.04, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image src={HERO_IMAGE} alt={HERO_IMAGE_ALT} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/70 to-basalt/30" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-mist/70"
        >
          Amenities
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-display text-5xl leading-[1.08] text-mist sm:text-6xl md:text-7xl"
        >
          Every detail, built
          <br />
          into daily life.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="max-w-lg text-lg leading-relaxed text-mist/80"
        >
          Not a checklist of extras — the things a fourteen-home address
          actually needs, chosen with the same restraint as everything
          else here.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
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
    </section>
  );
}

export function AmenitiesHero() {
  const reduceMotion = useReducedMotion();
  return reduceMotion ? <StaticAmenitiesHero /> : <AnimatedAmenitiesHero />;
}

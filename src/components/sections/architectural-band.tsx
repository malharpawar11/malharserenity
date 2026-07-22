"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * Full-bleed edge-to-edge image band with a subtle parallax drift —
 * the one other place besides the hero where the render gets to be the
 * whole point of the section, not a supporting graphic.
 */
export function ArchitecturalBand() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={ref} className="relative h-[60vh] w-full overflow-hidden sm:h-[75vh]">
      {reduceMotion ? (
        <Image
          src="/images/serenity-exterior-dusk.jpg"
          alt="Malhar Serenity, full facade view at dusk"
          fill
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <motion.div style={{ y }} className="absolute inset-0 scale-110">
          <Image
            src="/images/serenity-exterior-dusk.jpg"
            alt="Malhar Serenity, full facade view at dusk"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-basalt/90 via-basalt/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 px-6 pb-10 sm:pb-14">
        <div className="mx-auto max-w-6xl">
          <p className="max-w-md font-display text-2xl leading-snug text-mist sm:text-3xl">
            Elevated position, by design — not a marketing line.
          </p>
        </div>
      </div>
    </section>
  );
}

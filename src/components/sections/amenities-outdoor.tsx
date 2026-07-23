"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { amenityCategories } from "@/content/amenities";
import { Reveal } from "@/components/motion/reveal";
import { AmenityIcon } from "@/components/ui/amenity-icon";
import { LifestylePlaceholder } from "@/components/ui/lifestyle-placeholder";

const outdoor = amenityCategories.find((c) => c.category === "Outdoor & Wellness")!;

export function AmenitiesOutdoor() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="outdoor" className="scroll-mt-24 bg-mist">
      <div ref={ref} className="relative h-[65vh] w-full overflow-hidden sm:h-[80vh]">
        {reduceMotion ? (
          <Image
            src="/images/serenity-exterior-dusk.jpg"
            alt="Malhar Serenity's balconies, facade detail"
            fill
            sizes="100vw"
            className="object-cover object-[35%_60%]"
          />
        ) : (
          <motion.div style={{ y }} className="absolute inset-0 scale-110">
            <Image
              src="/images/serenity-exterior-dusk.jpg"
              alt="Malhar Serenity's balconies, facade detail"
              fill
              sizes="100vw"
              className="object-cover object-[35%_60%]"
            />
          </motion.div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-basalt/85 via-basalt/20 to-basalt/10" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-mist/70">
              Outdoor &amp; Wellness
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[1.1] text-mist sm:text-6xl">
              Room to exhale, outdoors.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-mist/80">
              Every residence gets its own balcony — a small, honest luxury
              that&rsquo;s easy to overlook until you don&rsquo;t have one.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {outdoor.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-canopy/10">
                  <AmenityIcon name={item.icon} className="h-6 w-6 text-canopy" />
                </span>
                <div>
                  <p className="font-display text-xl text-basalt">{item.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-basalt/70">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone-strong">
            More on the way
          </p>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <LifestylePlaceholder label="Landscaped entrance" tone="light" className="aspect-[4/3]" />
            <LifestylePlaceholder label="Lobby" tone="light" className="aspect-[4/3]" />
            <LifestylePlaceholder label="Green spaces" tone="light" className="aspect-[4/3]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

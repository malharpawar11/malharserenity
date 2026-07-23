"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { amenityCategories } from "@/content/amenities";
import { Reveal } from "@/components/motion/reveal";
import { RevealImage } from "@/components/motion/reveal-image";
import { AmenityIcon } from "@/components/ui/amenity-icon";

const security = amenityCategories.find((c) => c.category === "Security & Building Systems")!;

export function AmenitiesSecurity() {
  return (
    <section id="security" className="scroll-mt-24 overflow-hidden bg-card py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16">
        <RevealImage className="order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(35,35,31,0.3)]">
            <Image
              src="/images/serenity-exterior-dusk.jpg"
              alt="Malhar Serenity's entrance and ground floor, evening view"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[15%_75%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-basalt/40 via-transparent to-transparent" />
          </div>
        </RevealImage>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
              Security &amp; Building Systems
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-basalt sm:text-5xl">
              Quiet, constant
              <br />
              security.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-basalt/80">
              The kind you stop noticing because it never fails, not the
              kind that announces itself.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {security.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-basalt/10 bg-mist p-5 transition-shadow duration-300 hover:shadow-[0_16px_32px_-16px_rgba(35,35,31,0.2)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-canopy/10 transition-transform duration-300 group-hover:scale-110">
                    <AmenityIcon name={item.icon} className="h-5 w-5 text-canopy" />
                  </span>
                  <p className="font-sans text-sm font-medium text-basalt">{item.name}</p>
                  <p className="text-xs leading-relaxed text-basalt/65">{item.description}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

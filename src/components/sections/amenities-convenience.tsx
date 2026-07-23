"use client";

import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { amenityCategories } from "@/content/amenities";
import { Reveal } from "@/components/motion/reveal";
import { AmenityIcon } from "@/components/ui/amenity-icon";

const convenience = amenityCategories.find((c) => c.category === "Convenience")!;

export function AmenitiesConvenience() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: 1 | -1) {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <section id="convenience" className="scroll-mt-24 bg-basalt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-turmeric">
              Convenience
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-mist sm:text-5xl">
              The small things that save you a trip.
            </h2>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-mist/20 text-mist transition-colors hover:border-turmeric/50 hover:text-turmeric"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-mist/20 text-mist transition-colors hover:border-turmeric/50 hover:text-turmeric"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {convenience.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group flex w-[260px] shrink-0 snap-start flex-col gap-5 rounded-2xl border border-mist/10 bg-mist/[0.05] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-turmeric/30 hover:bg-mist/[0.08]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mist/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-turmeric/15">
                  <AmenityIcon name={item.icon} className="h-6 w-6 text-turmeric" />
                </span>
                <div>
                  <p className="font-sans text-base font-medium text-mist">{item.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-mist/60">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

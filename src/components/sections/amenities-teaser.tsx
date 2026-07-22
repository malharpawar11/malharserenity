"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Camera, Video, ShieldCheck, Zap, Droplets, PlugZap, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

/**
 * A hand-picked subset of the draft amenity list (src/content/amenities.ts)
 * — deliberately limited to items that don't need a scale-check against
 * the 0.12-acre footprint. Full, categorized list lives on /amenities.
 */
const teaserItems = [
  { icon: Camera, title: "Round-the-clock CCTV", desc: "Coverage at entry and every common area." },
  { icon: Video, title: "Video door phone", desc: "See who's calling before you open the door." },
  { icon: ShieldCheck, title: "On-site security", desc: "Personnel on duty, day and night." },
  { icon: Zap, title: "Power backup", desc: "Common areas and the lift, always on." },
  { icon: Droplets, title: "Rainwater harvesting", desc: "Captured and reused on-site." },
  { icon: PlugZap, title: "EV charging ready", desc: "Provisioned for the cars of tomorrow." },
];

export function AmenitiesTeaser() {
  return (
    <section className="bg-basalt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-turmeric">
            Amenities
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-mist sm:text-5xl">
            Everything a home
            <br />
            this size actually needs
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist/70">
            Draft list, pending developer confirmation against the sanctioned
            plan — organized by what it does, not padded to hit a number.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teaserItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-mist/10 bg-mist/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-turmeric/30 hover:bg-mist/[0.07]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mist/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-turmeric/15">
                  <item.icon className="h-5 w-5 text-turmeric" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-sans text-base font-medium text-mist">{item.title}</p>
                  <p className="mt-1.5 text-sm text-mist/60">{item.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12">
          <Link
            href="/amenities"
            className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-mist"
          >
            View all amenities
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

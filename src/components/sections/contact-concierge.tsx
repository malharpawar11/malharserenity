"use client";

import { motion, useReducedMotion } from "motion/react";
import { UserRound, LayoutPanelTop, IndianRupee, Landmark, HardHat } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const offerings = [
  { icon: UserRound, label: "Personal guidance", copy: "One consultant, start to finish." },
  { icon: LayoutPanelTop, label: "Configuration & layout guidance", copy: "Walk through what each plan offers." },
  { icon: IndianRupee, label: "Pricing discussion", copy: "Straight numbers, no negotiation theatre." },
  { icon: Landmark, label: "Payment plan questions", copy: "Ask what you need to plan around." },
  { icon: HardHat, label: "Construction updates", copy: "Where things stand, honestly." },
];

/** Abstract concentric-ring motif standing in for portrait photography that doesn't exist for a not-yet-hired consultant role. */
function ConciergeMark() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative flex aspect-square w-full max-w-sm items-center justify-center">
      {[220, 170, 120].map((size, i) => (
        <motion.div
          key={size}
          animate={reduceMotion ? undefined : { rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 40 + i * 14, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full border border-dashed border-canopy/25"
          style={{ width: size, height: size }}
        />
      ))}
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-canopy/10">
        <UserRound className="h-10 w-10 text-canopy" strokeWidth={1.25} aria-hidden="true" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute -bottom-2 rounded-full border border-basalt/10 bg-card px-4 py-2 text-xs font-medium text-basalt shadow-sm"
      >
        Your dedicated consultant
      </motion.div>
    </div>
  );
}

export function ContactConcierge() {
  return (
    <section className="overflow-hidden bg-mist py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <Reveal className="flex justify-center lg:justify-start">
          <ConciergeMark />
        </Reveal>

        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
              The Concierge Desk
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-basalt sm:text-5xl">
              Your dedicated property consultant.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-basalt/80">
              One person, not a rotating queue — for everything from the
              first question to the day you decide.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-1">
            {offerings.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.07}>
                <div className="flex items-center gap-4 border-t border-basalt/10 py-4 first:border-t-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-canopy/10">
                    <item.icon className="h-4 w-4 text-canopy" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-sans text-sm font-medium text-basalt">{item.label}</p>
                    <p className="text-xs text-basalt/60">{item.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

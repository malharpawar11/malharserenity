"use client";

import { motion } from "motion/react";
import { Building2, Landmark, ShoppingBag, Route, GraduationCap, Plane, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { commuteDestinations } from "@/content/site-config";

const icons: Record<string, LucideIcon> = {
  "Hinjewadi IT Park": Building2,
  Shivajinagar: Landmark,
  "Balewadi High Street": ShoppingBag,
  "Mumbai–Pune Expressway": Route,
  "Pune University": GraduationCap,
  "Pune Airport": Plane,
};

export function LocationCommute() {
  return (
    <section className="bg-basalt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-turmeric">
            Live Close to Everything
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-mist sm:text-5xl">
            The rest of Pune, within reach.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist/70">
            Only the routes we have verified distances for carry a number —
            the rest are named honestly as destinations we haven&rsquo;t
            timed yet.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {commuteDestinations.map((dest, i) => {
            const Icon = icons[dest.label] ?? Route;
            const known = Boolean(dest.distanceKm);
            return (
              <Reveal key={dest.label} delay={i * 0.06}>
                <div className="group flex h-full flex-col gap-5 rounded-2xl border border-mist/10 bg-mist/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-turmeric/30 hover:bg-mist/[0.07]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mist/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-turmeric/15">
                    <Icon className="h-5 w-5 text-turmeric" strokeWidth={1.5} aria-hidden="true" />
                  </span>

                  <div>
                    <p className="font-sans text-base font-medium text-mist">{dest.label}</p>
                    {known ? (
                      <p className="mt-1.5 font-mono text-sm text-turmeric">
                        {dest.distanceKm}
                        {dest.driveTime ? ` · ${dest.driveTime}` : ""}
                      </p>
                    ) : (
                      <p className="mt-1.5 text-xs text-mist/45">Distance pending verification</p>
                    )}
                  </div>

                  <div className="mt-auto h-px w-full overflow-hidden bg-mist/10">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "left" }}
                      className={`h-full ${known ? "bg-turmeric" : "bg-mist/25"}`}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

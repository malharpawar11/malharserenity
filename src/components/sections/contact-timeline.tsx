"use client";

import { motion } from "motion/react";
import { Send, PhoneCall, CalendarCheck, Footprints, FileText } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const steps = [
  { icon: Send, title: "Submit Enquiry", copy: "Tell us what you want to know." },
  { icon: PhoneCall, title: "We Contact You", copy: "Personally — not a script." },
  { icon: CalendarCheck, title: "Schedule Site Visit", copy: "At a time that works for you." },
  { icon: Footprints, title: "Personalized Walkthrough", copy: "See the site, ask anything." },
  { icon: FileText, title: "Pricing & Availability", copy: "Straight answers, no pressure." },
];

export function ContactTimeline() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
            What Happens Next
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-basalt sm:text-5xl">
            From enquiry to walkthrough.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute top-6 right-0 left-0 hidden h-px bg-basalt/10 lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute top-6 right-0 left-0 hidden h-px bg-canopy lg:block"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12}>
                <div className="flex flex-col items-center gap-4 text-center lg:items-center">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-canopy/30 bg-mist ring-8 ring-mist">
                    <step.icon className="h-5 w-5 text-canopy" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wide text-stone-strong">
                      Step {i + 1}
                    </p>
                    <p className="mt-1.5 font-display text-lg text-basalt">{step.title}</p>
                    <p className="mt-1.5 max-w-[160px] text-xs leading-relaxed text-basalt/65">
                      {step.copy}
                    </p>
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

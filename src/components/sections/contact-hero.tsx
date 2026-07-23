"use client";

import { Suspense } from "react";
import { motion, useReducedMotion } from "motion/react";
import { UserRound, Send, CalendarCheck, HeartHandshake } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactFormSkeleton } from "@/components/sections/contact-form-skeleton";

const badges = [
  { icon: UserRound, label: "Personal Consultation" },
  { icon: Send, label: "Direct Developer Response" },
  { icon: CalendarCheck, label: "Site Visits By Appointment" },
  { icon: HeartHandshake, label: "No Sales Pressure" },
];

/** Faint architectural drafting-line pattern — decoration only, not a stand-in for real site photography. */
function BlueprintLines() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full text-canopy/[0.07]"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="blueprint-grid" width="64" height="64" patternUnits="userSpaceOnUse">
          <path d="M 64 0 L 0 0 0 64" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
      <circle cx="15%" cy="20%" r="140" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="55%" x2="45%" y2="30%" stroke="currentColor" strokeWidth="1" />
      <line x1="10%" y1="90%" x2="60%" y2="55%" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function GlassFormCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      id="enquiry-form"
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative scroll-mt-28"
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-[2rem] border border-mist/40 bg-mist/60 p-7 shadow-[0_40px_80px_-30px_rgba(35,35,31,0.35)] backdrop-blur-2xl sm:p-9"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-turmeric/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-canopy/15 blur-3xl"
        />

        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
            Enquiry Form
          </p>
          <h2 className="mt-2 font-display text-2xl text-basalt sm:text-3xl">
            Tell us what to send you.
          </h2>

          <div className="mt-8">
            <Suspense fallback={<ContactFormSkeleton />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-mist pt-32 pb-24 sm:pt-40 sm:pb-32">
      <BlueprintLines />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-16 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong"
          >
            Contact &amp; Enquiry
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-lg font-display text-5xl leading-[1.08] text-basalt sm:text-6xl"
          >
            Ask us anything before you decide.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-md text-lg leading-relaxed text-basalt/80"
          >
            No pressure, no scripted follow-up calls. Tell us what you want
            to know, and we&rsquo;ll answer directly — consider this your
            concierge desk for Malhar Serenity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="flex items-center gap-2 rounded-full border border-basalt/10 bg-card/80 px-4 py-2.5 text-xs font-medium text-basalt/80 backdrop-blur-sm"
              >
                <badge.icon className="h-3.5 w-3.5 text-canopy" strokeWidth={1.5} aria-hidden="true" />
                {badge.label}
              </span>
            ))}
          </motion.div>
        </div>

        <GlassFormCard />
      </div>
    </section>
  );
}

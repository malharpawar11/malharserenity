"use client";

import { motion } from "motion/react";
import { UserRound, MessagesSquare, CalendarCheck, HeartHandshake, Send } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const trustCards = [
  {
    icon: UserRound,
    title: "Personal Consultation",
    copy: "One point of contact, not a call-centre queue.",
  },
  {
    icon: Send,
    title: "Direct Developer Communication",
    copy: "Your message reaches Malhar Developers directly — no intermediary in this conversation.",
  },
  {
    icon: CalendarCheck,
    title: "Private Site Visit",
    copy: "Walk the site yourself, on a schedule that works for you.",
  },
  {
    icon: MessagesSquare,
    title: "We Respond Personally",
    copy: "Direct answers, no scripted routing.",
  },
  {
    icon: HeartHandshake,
    title: "No Sales Pressure",
    copy: "Ask what you need to ask — no scripted follow-ups.",
  },
];

export function ContactTrustRibbon() {
  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {trustCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-basalt/10 bg-mist p-6 transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(35,35,31,0.25)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-canopy/10 transition-transform duration-300 group-hover:scale-110">
                  <card.icon className="h-5 w-5 text-canopy" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-sans text-sm font-medium text-basalt">{card.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-basalt/65">{card.copy}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

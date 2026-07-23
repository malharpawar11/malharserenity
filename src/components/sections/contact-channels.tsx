"use client";

import { motion } from "motion/react";
import { Mail, Phone, CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { contactPlaceholders, buildWhatsAppLink } from "@/content/site-config";

function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.96 9.96 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10.01-10Zm5.87 14.3c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.26-5.04-4.46-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.08.15.13.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.3.76 1.26 1.63 2.04 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.27.1 1.75.83 2.05.98.3.15.5.22.58.35.07.13.07.72-.18 1.4Z" />
    </svg>
  );
}

const enquiryMessage = "Hi, I'd like to know more about Malhar Serenity.";
const siteVisitMessage = "Hi, I'd like to book a site visit to Malhar Serenity.";
const whatsappHref = buildWhatsAppLink(enquiryMessage);
const siteVisitWhatsappHref = buildWhatsAppLink(siteVisitMessage);

const channels = [
  {
    icon: WhatsAppMark,
    title: "WhatsApp",
    copy: "Fastest reply — message us directly.",
    href: whatsappHref,
    external: true,
    accent: "turmeric",
    disabledReason: "WhatsApp number not yet configured",
  },
  {
    icon: Mail,
    title: "Email",
    copy: "For formal or detailed queries.",
    href: `mailto:${contactPlaceholders.email}`,
    external: false,
    accent: "canopy",
    valueLabel: contactPlaceholders.email,
  },
  {
    icon: Phone,
    title: "Phone",
    copy: "Speak with us directly.",
    href: contactPlaceholders.phoneHref,
    external: false,
    accent: "canopy",
    valueLabel: contactPlaceholders.phoneDisplay,
    disabledReason: "Phone number not yet configured",
  },
  {
    icon: CalendarCheck,
    title: "Site Visit",
    copy: "Walk the site in person.",
    href: "#enquiry-form",
    external: false,
    accent: "canopy",
    valueLabel: "Request a time via the form",
  },
];

export function ContactChannels() {
  return (
    <section className="bg-basalt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-turmeric">
            Reach Us Your Way
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-mist sm:text-5xl">
            However you&rsquo;d like to talk.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, i) => {
            const disabled = !channel.href;
            const Card = (
              <motion.div
                whileHover={disabled ? undefined : { y: -6 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex h-full flex-col gap-5 rounded-2xl border p-7 backdrop-blur-sm transition-colors duration-300 ${
                  disabled
                    ? "cursor-not-allowed border-mist/10 bg-mist/[0.03] opacity-60"
                    : "border-mist/10 bg-mist/[0.05] hover:border-turmeric/30 hover:bg-mist/[0.08]"
                }`}
                title={disabled ? channel.disabledReason : undefined}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-mist/10 transition-transform duration-300 ${
                    disabled ? "" : "group-hover:scale-110 group-hover:bg-turmeric/15"
                  }`}
                >
                  <channel.icon className="h-5 w-5 text-turmeric" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-sans text-base font-medium text-mist">{channel.title}</p>
                  <p className="mt-1.5 text-sm text-mist/60">{channel.copy}</p>
                  {channel.valueLabel && (
                    <p className="mt-3 font-mono text-xs text-mist/45">{channel.valueLabel}</p>
                  )}
                </div>
              </motion.div>
            );

            return (
              <Reveal key={channel.title} delay={i * 0.07}>
                {disabled ? (
                  Card
                ) : (
                  <a
                    href={channel.href!}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="block h-full"
                  >
                    {Card}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-mist/40">
          Prefer WhatsApp for a site visit request?{" "}
          {siteVisitWhatsappHref ? (
            <a href={siteVisitWhatsappHref} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-mist/70">
              Message us there instead.
            </a>
          ) : (
            "Use the form above — WhatsApp isn't configured yet."
          )}
        </p>
      </div>
    </section>
  );
}

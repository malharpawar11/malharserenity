import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { contactPlaceholders } from "@/content/site-config";
import { Reveal } from "@/components/motion/reveal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const defaultTrustBullets = [
  contactPlaceholders.reraDisclaimerLabel,
  "Site visits by appointment",
  // TODO: confirm this is actually true operationally before publishing —
  // don't promise a service model the developer doesn't run.
  "Direct answers, no call-centre routing",
];

type EnquiryCTAProps = {
  id?: string;
  heading?: string;
  subhead?: string;
  whatsappMessage?: string;
  showTrustBullets?: boolean;
  /** When set, shows a tertiary link to the full Contact form (Phase 5),
   * optionally carrying the current config as a query param. */
  formHref?: string;
  /** Full-bleed image background treatment, reserved for a page's one
   * closing conversion moment — not every call site should carry it. */
  variant?: "default" | "image";
};

/**
 * Reused on Home (default copy, image variant as the closing section),
 * Residences (payment-plan framing, WhatsApp message pre-filled with the
 * selected config), and on the Contact page itself (as the "prefer
 * WhatsApp or email" alternative to the form).
 */
export function EnquiryCTA({
  id = "enquiry",
  heading = "Ask us anything before you decide",
  subhead = "No pressure, no scripted follow-up calls. Tell us what you want to know — floor plans, payment schedule, site visit timing — and we’ll answer directly.",
  whatsappMessage = "Hi, I'd like to know more about Malhar Serenity.",
  showTrustBullets = true,
  formHref,
  variant = "default",
}: EnquiryCTAProps) {
  if (variant === "image") {
    return (
      <section id={id} className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/serenity-exterior-dusk.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-basalt/85" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-turmeric">
              Get in touch
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-mist sm:text-5xl">
              {heading}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist/75">
              {subhead}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 grid gap-4 sm:grid-cols-3">
            <WhatsAppCard message={whatsappMessage} />
            <ContactCard
              icon={Mail}
              label="Email"
              value={contactPlaceholders.email}
              href={`mailto:${contactPlaceholders.email}`}
            />
            <ContactCard
              icon={Phone}
              label="Call"
              value={contactPlaceholders.phoneDisplay}
              href={contactPlaceholders.phoneHref ?? undefined}
              disabled={!contactPlaceholders.phoneHref}
            />
          </Reveal>

          {formHref && (
            <Reveal delay={0.15} className="mt-6">
              <Link href={formHref} className="text-sm text-mist/70 underline underline-offset-4 hover:text-mist">
                Or fill out our enquiry form →
              </Link>
            </Reveal>
          )}

          {showTrustBullets && (
            <Reveal delay={0.2}>
              <ul className="mt-12 flex flex-col items-center gap-3 border-t border-mist/10 pt-8 text-sm text-mist/60 sm:flex-row sm:justify-center sm:gap-8">
                {defaultTrustBullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-turmeric" strokeWidth={1.5} aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-32">
      <Reveal>
        <h2 className="font-display text-3xl text-basalt sm:text-4xl">{heading}</h2>
        <p className="mt-6 text-lg leading-relaxed text-basalt/80">{subhead}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <WhatsAppButton
          message={whatsappMessage}
          className="rounded-full bg-canopy px-7 py-3 font-sans text-sm font-medium text-mist transition-colors hover:bg-canopy/90"
        >
          Enquire on WhatsApp
        </WhatsAppButton>
        <a
          href={`mailto:${contactPlaceholders.email}`}
          className="rounded-full border border-stone/50 px-7 py-3 font-sans text-sm font-medium text-basalt transition-colors hover:bg-secondary"
        >
          Email Us
        </a>
      </Reveal>

      {formHref && (
        <Reveal delay={0.15} className="mt-4">
          <Link
            href={formHref}
            className="font-sans text-sm text-canopy underline underline-offset-4 hover:text-canopy/80"
          >
            Or fill out our enquiry form →
          </Link>
        </Reveal>
      )}

      {showTrustBullets && (
        <Reveal delay={0.2}>
          <ul className="mt-10 flex flex-col items-center gap-3 text-sm text-basalt/70 sm:flex-row sm:justify-center sm:gap-8">
            {defaultTrustBullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-canopy" strokeWidth={1.5} aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </section>
  );
}

function WhatsAppCard({ message }: { message: string }) {
  return (
    <WhatsAppButton
      message={message}
      className="flex flex-col items-center gap-2 rounded-2xl border border-mist/15 bg-mist/[0.06] px-6 py-6 text-center backdrop-blur-sm transition-colors hover:border-turmeric/40 hover:bg-mist/10"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-turmeric/15">
        <PhoneWhatsAppIcon />
      </span>
      <span className="font-sans text-sm font-medium text-mist">WhatsApp</span>
      <span className="text-xs text-mist/60">Fastest reply</span>
    </WhatsAppButton>
  );
}

function PhoneWhatsAppIcon() {
  // Lightweight inline mark so we don't pull a brand-icon dependency for one glyph.
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-turmeric" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.96 9.96 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10.01-10Zm5.87 14.3c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.26-5.04-4.46-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.08.15.13.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.3.76 1.26 1.63 2.04 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.27.1 1.75.83 2.05.98.3.15.5.22.58.35.07.13.07.72-.18 1.4Z" />
    </svg>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  disabled,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  disabled?: boolean;
}) {
  const content = (
    <>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mist/10">
        <Icon className="h-5 w-5 text-mist" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <span className="font-sans text-sm font-medium text-mist">{label}</span>
      <span className="text-xs text-mist/60">{value}</span>
    </>
  );

  const className =
    "flex flex-col items-center gap-2 rounded-2xl border border-mist/15 bg-mist/[0.06] px-6 py-6 text-center backdrop-blur-sm transition-colors";

  if (disabled || !href) {
    return (
      <div
        className={`${className} cursor-not-allowed opacity-60`}
        title={`${label} not yet available — TODO: add real contact detail`}
      >
        {content}
      </div>
    );
  }

  return (
    <a href={href} className={`${className} hover:border-turmeric/40 hover:bg-mist/10`}>
      {content}
    </a>
  );
}

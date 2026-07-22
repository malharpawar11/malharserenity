import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
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
};

/**
 * Reused on Home (default copy), Residences (payment-plan framing,
 * WhatsApp message pre-filled with the selected config), and on the
 * Contact page itself (as the "prefer WhatsApp or email" alternative to
 * the form).
 */
export function EnquiryCTA({
  id = "enquiry",
  heading = "Ask us anything before you decide",
  subhead = "No pressure, no scripted follow-up calls. Tell us what you want to know — floor plans, payment schedule, site visit timing — and we’ll answer directly.",
  whatsappMessage = "Hi, I'd like to know more about Malhar Serenity.",
  showTrustBullets = true,
  formHref,
}: EnquiryCTAProps) {
  return (
    <section id={id} className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-32">
      <Reveal>
        <h2 className="font-display text-3xl text-basalt sm:text-4xl">{heading}</h2>
        <p className="mt-6 text-lg leading-relaxed text-basalt/80">{subhead}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <WhatsAppButton
          message={whatsappMessage}
          className="rounded-md bg-canopy px-7 py-3 font-sans text-sm font-medium text-mist transition-colors hover:bg-canopy/90"
        >
          Enquire on WhatsApp
        </WhatsAppButton>
        <a
          href={`mailto:${contactPlaceholders.email}`}
          className="rounded-md border border-stone/50 px-7 py-3 font-sans text-sm font-medium text-basalt transition-colors hover:bg-secondary"
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

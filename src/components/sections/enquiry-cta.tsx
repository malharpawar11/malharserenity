import { CheckCircle2 } from "lucide-react";
import { contactPlaceholders } from "@/content/site-config";
import { Reveal } from "@/components/motion/reveal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const trustBullets = [
  contactPlaceholders.reraDisclaimerLabel,
  "Site visits by appointment",
  // TODO: confirm this is actually true operationally before publishing —
  // don't promise a service model the developer doesn't run.
  "Direct answers, no call-centre routing",
];

export function EnquiryCTA() {
  return (
    <section id="enquiry" className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-32">
      <Reveal>
        <h2 className="font-display text-3xl text-basalt sm:text-4xl">
          Ask us anything before you decide
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-basalt/80">
          No pressure, no scripted follow-up calls. Tell us what you want to
          know — floor plans, payment schedule, site visit timing — and
          we&rsquo;ll answer directly.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <WhatsAppButton
          message="Hi, I'd like to know more about Malhar Serenity."
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

      <Reveal delay={0.2}>
        <ul className="mt-10 flex flex-col items-center gap-3 text-sm text-basalt/70 sm:flex-row sm:justify-center sm:gap-8">
          {trustBullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-canopy" strokeWidth={1.5} aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

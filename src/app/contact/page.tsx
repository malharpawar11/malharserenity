import type { Metadata } from "next";
import { Suspense } from "react";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { EnquiryCTA } from "@/components/sections/enquiry-cta";

export const metadata: Metadata = {
  title: "Contact / Enquiry | Malhar Serenity",
  description:
    "Get in touch about Malhar Serenity — floor plans, payment schedule, or a site visit.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone-strong">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl text-basalt sm:text-5xl">
            Ask us anything before you decide
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-basalt/80">
            No pressure, no scripted follow-up calls. Tell us what you want
            to know, and we&rsquo;ll answer directly.
          </p>
        </Reveal>
      </section>

      <section className="px-6 pb-24">
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </section>

      <div className="border-t border-border">
        <EnquiryCTA
          id="contact-alt"
          heading="Prefer WhatsApp or email?"
          subhead="Same team, same directness — whichever channel is easiest for you."
          showTrustBullets={true}
        />
      </div>
    </main>
  );
}

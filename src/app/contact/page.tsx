import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactTrustRibbon } from "@/components/sections/contact-trust-ribbon";
import { ContactTimeline } from "@/components/sections/contact-timeline";
import { ContactChannels } from "@/components/sections/contact-channels";
import { ContactConcierge } from "@/components/sections/contact-concierge";
import { ContactTestimonials } from "@/components/sections/contact-testimonials";
import { ContactFAQ } from "@/components/sections/contact-faq";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Contact / Enquiry | Malhar Serenity",
  description:
    "Get in touch about Malhar Serenity — floor plans, payment schedule, or a site visit.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ContactHero />
      <ContactTrustRibbon />
      <ContactTimeline />
      <ContactChannels />
      <ContactConcierge />
      <ContactTestimonials />
      <ContactFAQ />
      <ContactCTA />
    </main>
  );
}

import type { Metadata } from "next";
import { OverviewHero } from "@/components/sections/overview-hero";
import { OverviewName } from "@/components/sections/overview-name";
import { OverviewSite } from "@/components/sections/overview-site";
import { OverviewDeveloper } from "@/components/sections/overview-developer";
import { OverviewHighlights } from "@/components/sections/overview-highlights";
import { EnquiryCTA } from "@/components/sections/enquiry-cta";

export const metadata: Metadata = {
  title: "Overview | Malhar Serenity",
  description:
    "The story behind Malhar Serenity — the name, the site on Baner's high ground, the developer, and what makes the fourteen homes different.",
};

export default function OverviewPage() {
  return (
    <main className="flex flex-1 flex-col">
      <OverviewHero />
      <OverviewName />
      <OverviewSite />
      <OverviewDeveloper />
      <OverviewHighlights />
      <EnquiryCTA
        id="enquiry"
        heading="Want the full story in person?"
        subhead="Ask us about the name, the site, or anything the page didn't cover."
        whatsappMessage="Hi, I'd like to know more about Malhar Serenity."
        formHref="/contact"
        variant="image"
      />
    </main>
  );
}

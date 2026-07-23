import type { Metadata } from "next";
import { AmenitiesHero } from "@/components/sections/amenities-hero";
import { AmenitiesDisclaimerBand } from "@/components/sections/amenities-disclaimer-band";
import { AmenitiesQuickNav } from "@/components/sections/amenities-quick-nav";
import { AmenitiesPhilosophy } from "@/components/sections/amenities-philosophy";
import { AmenitiesSecurity } from "@/components/sections/amenities-security";
import { AmenitiesConvenience } from "@/components/sections/amenities-convenience";
import { AmenitiesOutdoor } from "@/components/sections/amenities-outdoor";
import { AmenitiesSustainability } from "@/components/sections/amenities-sustainability";
import { AmenitiesFullList } from "@/components/sections/amenities-full-list";
import { EnquiryCTA } from "@/components/sections/enquiry-cta";

export const metadata: Metadata = {
  title: "Amenities | Malhar Serenity",
  description:
    "Amenities planned for Malhar Serenity, organized by category — pending final developer confirmation.",
};

export default function AmenitiesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <AmenitiesHero />
      <AmenitiesDisclaimerBand />
      <AmenitiesQuickNav />
      <AmenitiesPhilosophy />
      <AmenitiesSecurity />
      <AmenitiesConvenience />
      <AmenitiesOutdoor />
      <AmenitiesSustainability />
      <AmenitiesFullList />
      <EnquiryCTA
        id="enquiry"
        heading="See it for yourself"
        subhead="The best way to judge an amenity list is to walk the site. Ask us for a visit."
        whatsappMessage="Hi, I'd like to know more about the amenities at Malhar Serenity."
        formHref="/contact"
        variant="image"
      />
    </main>
  );
}

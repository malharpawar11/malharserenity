import type { Metadata } from "next";
import { LocationHero } from "@/components/sections/location-hero";
import { LocationAddress } from "@/components/sections/location-address";
import { LocationWhyBaner } from "@/components/sections/location-why-baner";
import { LocationStats } from "@/components/sections/location-stats";
import { LocationNature } from "@/components/sections/location-nature";
import { LocationDayInLife } from "@/components/sections/location-day-in-life";
import { LocationCommute } from "@/components/sections/location-commute";
import { LocationNearby } from "@/components/sections/location-nearby";
import { LocationMapSection } from "@/components/sections/location-map-section";
import { LocationCTA } from "@/components/sections/location-cta";

export const metadata: Metadata = {
  title: "Location & Neighbourhood | Malhar Serenity",
  description:
    "Malhar Serenity's setting in Samarth Colony, Baner, Pune — Baner Hill, the IT corridor commute, and the neighbourhood around it.",
};

export default function LocationPage() {
  return (
    <main className="flex flex-1 flex-col">
      <LocationHero />
      <LocationAddress />
      <LocationWhyBaner />
      <LocationStats />
      <LocationNature />
      <LocationDayInLife />
      <LocationCommute />
      <LocationNearby />
      <LocationMapSection />
      <LocationCTA />
    </main>
  );
}

import { HeroElevation } from "@/components/sections/hero-elevation";
import { BuiltSmall } from "@/components/sections/built-small";
import { ResidencesTeaser } from "@/components/sections/residences-teaser";
import { AmenitiesTeaser } from "@/components/sections/amenities-teaser";
import { LocationTeaser } from "@/components/sections/location-teaser";
import { EnquiryCTA } from "@/components/sections/enquiry-cta";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroElevation />
      <BuiltSmall />
      <ResidencesTeaser />
      <AmenitiesTeaser />
      <LocationTeaser />
      <EnquiryCTA />
    </main>
  );
}

import { HeroElevation } from "@/components/sections/hero-elevation";
import { BuiltSmall } from "@/components/sections/built-small";
import { ArchitecturalBand } from "@/components/sections/architectural-band";
import { ResidencesTeaser } from "@/components/sections/residences-teaser";
import { AmenitiesTeaser } from "@/components/sections/amenities-teaser";
import { LocationTeaser } from "@/components/sections/location-teaser";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { EnquiryCTA } from "@/components/sections/enquiry-cta";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroElevation />
      <BuiltSmall />
      <ArchitecturalBand />
      <ResidencesTeaser />
      <AmenitiesTeaser />
      <LocationTeaser />
      <GalleryPreview />
      <EnquiryCTA formHref="/contact" variant="image" />
    </main>
  );
}

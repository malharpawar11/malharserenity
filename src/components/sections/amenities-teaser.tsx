import Link from "next/link";
import { Camera, Video, ShieldCheck, Zap, Droplets, PlugZap } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

/**
 * A hand-picked subset of the draft amenity list (src/content/amenities.ts)
 * — deliberately limited to items that don't need a scale-check against
 * the 0.12-acre footprint. Full, categorized list lives on /amenities.
 */
const teaserItems = [
  { icon: Camera, label: "CCTV surveillance at entry and common areas" },
  { icon: Video, label: "Video door phone per unit" },
  { icon: ShieldCheck, label: "24-hour security personnel" },
  { icon: Zap, label: "Power backup for common areas & lifts" },
  { icon: Droplets, label: "Rainwater harvesting" },
  { icon: PlugZap, label: "EV charging provision" },
];

export function AmenitiesTeaser() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
      <Reveal className="text-center">
        <h2 className="font-display text-3xl text-basalt sm:text-4xl">
          Everything a home this size actually needs
        </h2>
        <p className="mt-4 text-sm text-stone">
          Draft list, pending developer confirmation against the sanctioned plan.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {teaserItems.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.05}>
            <div className="flex h-full flex-col items-center gap-3 rounded-lg border border-border bg-card px-4 py-6 text-center transition-transform duration-300 hover:-translate-y-1">
              <item.icon className="h-6 w-6 text-canopy" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-sm text-basalt/80">{item.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-10 text-center">
        <Link
          href="/amenities"
          className="font-sans text-sm font-medium text-canopy underline underline-offset-4 hover:text-canopy/80"
        >
          View All Amenities →
        </Link>
      </Reveal>
    </section>
  );
}

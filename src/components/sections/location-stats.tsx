import { Compass, Trees, Route, Building2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/ui/count-up";
import { verifiedGeoFacts } from "@/content/site-config";

const stats = [
  {
    icon: Compass,
    value: verifiedGeoFacts.banerHillElevationFt,
    suffix: " ft",
    label: "Baner Hill elevation",
    note: verifiedGeoFacts.banerHillRank,
  },
  {
    icon: Route,
    value: 8,
    prefix: "~",
    suffix: " km",
    label: "To Hinjewadi IT Park",
    note: verifiedGeoFacts.baneHinjewadiDriveTime,
  },
  {
    icon: Trees,
    value: 200,
    prefix: "~",
    suffix: " ha",
    label: "Baner-Pashan Biodiversity Park",
    note: "Adjoining green space, PMC-administered",
  },
  {
    icon: Building2,
    value: verifiedGeoFacts.connectivityRoads.length,
    label: "Arterial roads",
    note: verifiedGeoFacts.connectivityRoads.join(" · "),
  },
];

export function LocationStats() {
  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col gap-3 border-t border-basalt/10 pt-6">
                <stat.icon className="h-5 w-5 text-canopy" strokeWidth={1.5} aria-hidden="true" />
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="font-display text-4xl text-basalt sm:text-5xl"
                />
                <p className="font-sans text-sm font-medium text-basalt">{stat.label}</p>
                <p className="text-xs leading-relaxed text-stone-strong">{stat.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

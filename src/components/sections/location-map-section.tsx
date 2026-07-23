import { Navigation2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { LocationMap } from "@/components/ui/location-map";
import { buildDirectionsUrl, verifiedGeoFacts } from "@/content/site-config";

export function LocationMapSection() {
  return (
    <section className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
            Map Experience
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-basalt sm:text-5xl">
            Find your way here.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <Reveal delay={0.1}>
            <LocationMap />
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl border border-basalt/10 bg-mist p-7">
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-stone-strong">
                  Access via
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {verifiedGeoFacts.connectivityRoads.map((road) => (
                    <li key={road} className="flex items-center gap-3 text-sm text-basalt">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-canopy" />
                      {road}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-stone-strong">
                  Reaching toward Pashan/Kothrud, Balewadi/Hinjewadi, and
                  Aundh/Wakad.
                </p>
              </div>

              <a
                href={buildDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-11 items-center justify-center gap-2 rounded-full border border-canopy/30 bg-canopy/5 px-5 font-sans text-sm font-medium text-canopy transition-colors hover:bg-canopy hover:text-mist"
              >
                Get Directions
                <Navigation2
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

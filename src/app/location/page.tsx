import type { Metadata } from "next";
import { project, verifiedGeoFacts, commonlyCitedLandmarks } from "@/content/site-config";
import { Reveal } from "@/components/motion/reveal";
import { LocationMap } from "@/components/ui/location-map";

export const metadata: Metadata = {
  title: "Location & Connectivity | Malhar Serenity",
  description:
    "Malhar Serenity's setting in Samarth Colony, Baner, Pune — connectivity, Baner Hill, and the Baner-Pashan Biodiversity Park.",
};

export default function LocationPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone-strong">
            Location
          </p>
          <h1 className="mt-3 font-display text-4xl text-basalt sm:text-5xl">
            On the high ground in Baner
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-basalt/80">
            {project.location.line1}, {project.location.line2} — an
            elevated position within {project.location.microMarket}.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-16">
        <Reveal>
          <LocationMap />
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-16">
        <Reveal>
          <h2 className="font-display text-2xl text-basalt sm:text-3xl">
            Baner Hill, next door
          </h2>
          <p className="mt-4 leading-relaxed text-basalt/80">
            Baner Hill rises directly alongside the neighbourhood — at{" "}
            {verifiedGeoFacts.banerHillElevationFt.toLocaleString()} feet,
            the {verifiedGeoFacts.banerHillRank}, and the anchor of the
            Baner-Pashan Biodiversity Park beside it. It&rsquo;s open,
            green, and walkable in a way that&rsquo;s genuinely rare this
            close to the IT corridor — which is exactly why its future has
            been debated: rezoning proposals drew organized resident
            opposition in both 2023 and 2025. We won&rsquo;t describe it as
            a protected or permanent amenity. It&rsquo;s a real, adjoining
            green space today, not a guarantee about tomorrow.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <p className="leading-relaxed text-basalt/80">
            The Baner-Pashan Biodiversity Park itself spans roughly 200
            hectares, administered by the Pune Municipal Corporation, with
            trails used for walking, jogging, and birdwatching. We
            don&rsquo;t have a verified distance from Samarth Colony to
            quote — it&rsquo;s in the neighbourhood, not somewhere
            you&rsquo;d need to drive to.
          </p>
        </Reveal>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <h2 className="font-display text-2xl text-basalt sm:text-3xl">
              Getting around
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-8 flex flex-col gap-6">
              <div>
                <dt className="text-sm font-medium text-basalt">To Hinjewadi IT Park</dt>
                <dd className="mt-1 font-mono text-sm text-canopy">
                  {verifiedGeoFacts.baneHinjewadiDistanceKm} ·{" "}
                  {verifiedGeoFacts.baneHinjewadiDriveTime}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-basalt">To Shivajinagar</dt>
                <dd className="mt-1 font-mono text-sm text-canopy">
                  {verifiedGeoFacts.baneShivajinagarDistanceKm}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-basalt">Access via</dt>
                <dd className="mt-1 text-sm text-basalt/80">
                  {verifiedGeoFacts.connectivityRoads.join(", ")} — reaching
                  toward Pashan/Kothrud, Balewadi/Hinjewadi, and Aundh/Wakad.
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <h2 className="font-display text-2xl text-basalt sm:text-3xl">
              Nearby
            </h2>
            <p className="mt-2 text-sm text-stone-strong">
              Commonly cited nearby in local real-estate sources — not
              independently verified by us.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-basalt">
                Schools
              </h3>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-basalt/80">
                {commonlyCitedLandmarks.schools.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-basalt">
                Hospitals
              </h3>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-basalt/80">
                {commonlyCitedLandmarks.hospitals.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

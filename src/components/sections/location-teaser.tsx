import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { RevealImage } from "@/components/motion/reveal-image";
import { verifiedGeoFacts } from "@/content/site-config";

export function LocationTeaser() {
  return (
    <section className="overflow-hidden bg-mist py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
              Location
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-basalt sm:text-5xl">
              On the high ground
              <br />
              in Baner
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-basalt/80">
              Baner Hill rises just beyond the neighbourhood —{" "}
              {verifiedGeoFacts.banerHillRank}, and one of the few stretches
              of open green left this close to the IT corridor. Malhar
              Serenity sits at the edge of that quiet, with the rest of Pune
              West reachable along Baner Road and the Aundh-Baner link.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2.5 rounded-full border border-basalt/10 bg-card px-4 py-2.5">
                <MapPin className="h-4 w-4 text-canopy" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-sm text-basalt/80">
                  {verifiedGeoFacts.banerHillElevationFt.toLocaleString()} ft — Baner Hill
                </span>
              </div>
              <div className="flex items-center gap-2.5 rounded-full border border-basalt/10 bg-card px-4 py-2.5">
                <Clock className="h-4 w-4 text-canopy" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-sm text-basalt/80">
                  {verifiedGeoFacts.baneHinjewadiDistanceKm} to Hinjewadi IT Park
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-10">
            <Link
              href="/location"
              className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-canopy"
            >
              Explore the neighbourhood
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>

        <RevealImage>
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(35,35,31,0.3)]">
            <Image
              src="/images/serenity-exterior-dusk.jpg"
              alt="Malhar Serenity, elevated position on Baner's high ground"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[20%_40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-basalt/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-xl border border-mist/20 bg-basalt/60 px-4 py-3 backdrop-blur-md">
              <p className="font-mono text-[10px] uppercase tracking-wide text-mist/70">
                Samarth Colony
              </p>
              <p className="text-sm text-mist">Baner, Pune</p>
            </div>
          </div>
        </RevealImage>
      </div>
    </section>
  );
}

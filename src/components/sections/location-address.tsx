import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { RevealImage } from "@/components/motion/reveal-image";
import { project, verifiedGeoFacts } from "@/content/site-config";

export function LocationAddress() {
  return (
    <section className="overflow-hidden bg-mist py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
              The Address
            </p>
            <div className="mt-4 h-px w-16 bg-turmeric" />
            <h2 className="mt-6 font-display text-4xl leading-tight text-basalt sm:text-5xl">
              {project.location.line1},
              <br />
              on the high ground.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-basalt/80">
              Samarth Colony sits inside {project.location.microMarket} — a
              settled residential pocket rather than a construction zone,
              with Baner Hill rising directly beside it. The elevation is
              real, not a brochure word: {verifiedGeoFacts.banerHillRank}.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-basalt/80">
              Close enough to the IT corridor for a working commute, far
              enough from it that the street outside stays quiet after 7pm.
              That balance is the entire premise of this page.
            </p>
          </Reveal>
        </div>

        <RevealImage>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(35,35,31,0.35)]">
            <Image
              src="/images/serenity-exterior-dusk.jpg"
              alt="Malhar Serenity's entrance, Samarth Colony, Baner"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[15%_75%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-basalt/45 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-xl border border-mist/20 bg-basalt/60 px-4 py-3 backdrop-blur-md">
              <p className="font-mono text-[10px] uppercase tracking-wide text-mist/70">
                {project.location.line1}
              </p>
              <p className="text-sm text-mist">{project.location.line2}</p>
            </div>
          </div>
        </RevealImage>
      </div>
    </section>
  );
}

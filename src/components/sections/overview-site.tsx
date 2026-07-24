import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { RevealImage } from "@/components/motion/reveal-image";
import { verifiedGeoFacts } from "@/content/site-config";

export function OverviewSite() {
  return (
    <section className="overflow-hidden bg-mist py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <RevealImage className="order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(35,35,31,0.35)]">
            <Image
              src="/images/serenity-exterior-day.jpg"
              alt="Malhar Serenity's facade in daylight, set against Baner's elevated streets"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </RevealImage>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
              The Site
            </p>
            <div className="mt-4 h-px w-16 bg-turmeric" />
            <h2 className="mt-6 font-display text-4xl leading-tight text-basalt sm:text-5xl">
              Elevated ground,
              <br />
              on purpose.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-basalt/80">
              The plot sits in Samarth Colony, on Baner&rsquo;s elevated
              ground, a short reach from Baner Hill —{" "}
              {verifiedGeoFacts.banerHillRank} and the anchor of the
              Baner-Pashan Biodiversity Park.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-basalt/80">
              It&rsquo;s an area that&rsquo;s been fought over precisely
              because it&rsquo;s rare: open, green, and walkable, in a
              suburb otherwise defined by its IT parks and arterial
              traffic. Malhar Serenity doesn&rsquo;t claim to protect that
              landscape — it just sits close enough to benefit from it.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

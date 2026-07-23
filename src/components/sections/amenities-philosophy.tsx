import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { RevealImage } from "@/components/motion/reveal-image";
import { project } from "@/content/site-config";

export function AmenitiesPhilosophy() {
  return (
    <section className="overflow-hidden bg-mist py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
              The Approach
            </p>
            <div className="mt-4 h-px w-16 bg-turmeric" />
            <h2 className="mt-6 font-display text-4xl leading-tight text-basalt sm:text-5xl">
              Why only
              <br />
              what matters.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-basalt/80">
              {`A township can justify a banquet hall, a jogging track, three swimming pools. ${project.name} can't — and isn't trying to. On ${project.plotSizeAcres} acres, with ${project.totalUnits} homes, every amenity here earns its place by being something residents will actually use, not something that photographs well in a brochure.`}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-basalt/80">
              That&rsquo;s the filter: security that works, convenience
              that saves a trip, outdoor space that&rsquo;s actually
              quiet. Everything else was left out on purpose.
            </p>
          </Reveal>
        </div>

        <RevealImage>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(35,35,31,0.35)]">
            <Image
              src="/images/serenity-exterior-dusk.jpg"
              alt="Malhar Serenity's facade, detail view"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[75%_35%]"
            />
          </div>
        </RevealImage>
      </div>
    </section>
  );
}

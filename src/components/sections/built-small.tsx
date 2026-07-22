import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { RevealImage } from "@/components/motion/reveal-image";
import { project } from "@/content/site-config";

export function BuiltSmall() {
  return (
    <section className="overflow-hidden bg-mist py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <RevealImage className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(35,35,31,0.35)]">
            <Image
              src="/images/serenity-exterior-dusk.jpg"
              alt="Malhar Serenity's brick-and-glass facade, detail view"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[65%_30%]"
            />
          </div>
          {/* Oversized numeral, overlapping the image edge — the exclusivity number as a design element, not just a stat. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -left-6 select-none font-display text-[8rem] leading-none text-basalt/10 sm:-left-10 sm:text-[11rem]"
          >
            14
          </div>
        </RevealImage>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
              The Philosophy
            </p>
            <div className="mt-4 h-px w-16 bg-turmeric" />
            <h2 className="mt-6 font-display text-4xl leading-tight text-basalt sm:text-5xl">
              Built small,
              <br />
              on purpose.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-basalt/80">
              {`Most new addresses in Baner are measured in towers. ${project.name} is measured in doors — fourteen of them. That's the whole idea: a plot small enough that nothing about it needed to be loud. Fewer neighbours. Less shared everything. A building that sits into the hillside instead of announcing itself from it.`}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-basalt/10 pt-8 sm:max-w-md">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-stone-strong">
                  Total residences
                </dt>
                <dd className="mt-1 font-display text-3xl text-basalt">
                  {project.totalUnits}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-stone-strong">
                  Plot size
                </dt>
                <dd className="mt-1 font-display text-3xl text-basalt">
                  {project.plotSizeAcres}<span className="text-lg"> ac</span>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

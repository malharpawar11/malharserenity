import { Reveal } from "@/components/motion/reveal";

export function BuiltSmall() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-32">
      <Reveal>
        <h2 className="font-display text-3xl text-basalt sm:text-4xl">
          Built small, on purpose
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-basalt/80">
          Most new addresses in Baner are measured in towers. Malhar
          Serenity is measured in doors — fourteen of them. That&rsquo;s the
          whole idea: a plot small enough that nothing about it needed to
          be loud. Fewer neighbours. Less shared everything. A building
          that sits into the hillside instead of announcing itself from it.
        </p>
      </Reveal>
    </section>
  );
}

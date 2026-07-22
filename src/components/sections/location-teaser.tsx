import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

export function LocationTeaser() {
  return (
    <section className="bg-basalt py-24 text-mist sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">
            On the high ground in Baner
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist/80">
            Baner Hill rises just beyond the neighbourhood — Pune&rsquo;s
            third-highest point, and one of the few stretches of open green
            left this close to the IT corridor. Malhar Serenity sits at the
            edge of that quiet, with Hinjewadi roughly twenty minutes away
            and the rest of Pune West reachable along Baner Road and the
            Aundh-Baner link.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-8">
          <Link
            href="/location"
            className="font-sans text-sm font-medium text-turmeric underline underline-offset-4 hover:text-turmeric/80"
          >
            Explore the Neighbourhood →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

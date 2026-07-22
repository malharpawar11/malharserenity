import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { GalleryGrid } from "@/components/sections/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery | Malhar Serenity",
  description:
    "Photography and renders for Malhar Serenity — coming soon, categorized by exterior, interior, amenities, and site views.",
};

export default function GalleryPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone-strong">
            Gallery
          </p>
          <h1 className="mt-3 font-display text-4xl text-basalt sm:text-5xl">
            Photography is on its way
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-basalt/80">
            No site photography or renders exist yet. These slots are
            reserved by category so it&rsquo;s clear what&rsquo;s coming —
            not filled with stock photos standing in for the real thing.
          </p>
        </Reveal>
      </section>

      <GalleryGrid />
    </main>
  );
}

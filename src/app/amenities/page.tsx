import type { Metadata } from "next";
import { Info, AlertTriangle } from "lucide-react";
import { amenityCategories } from "@/content/amenities";
import { Reveal } from "@/components/motion/reveal";
import { AmenityIcon } from "@/components/ui/amenity-icon";

export const metadata: Metadata = {
  title: "Amenities | Malhar Serenity",
  description:
    "Amenities planned for Malhar Serenity, organized by category — pending final developer confirmation.",
};

const categoryAnchors = amenityCategories.map((c) => ({
  label: c.category,
  id: c.category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
}));

export default function AmenitiesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone-strong">
            Amenities
          </p>
          <h1 className="mt-3 font-display text-4xl text-basalt sm:text-5xl">
            What this address actually includes
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-basalt/80">
            Organized the way it&rsquo;s actually built — building systems,
            everyday convenience, outdoor space, and sustainability —
            rather than a single long list.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex items-start gap-3 rounded-md border border-border bg-secondary/50 px-5 py-4 text-left">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-stone-strong" strokeWidth={1.5} aria-hidden="true" />
          <p className="text-sm text-basalt/80">
            Amenities shown reflect the current project plan and are
            subject to final confirmation.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-2">
          {categoryAnchors.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="flex min-h-11 items-center rounded-full border border-border bg-card px-5 font-sans text-sm text-basalt/80 transition-colors hover:border-canopy hover:text-canopy"
            >
              {c.label}
            </a>
          ))}
        </Reveal>
      </section>

      {amenityCategories.map((category, ci) => {
        const anchor = categoryAnchors[ci];
        return (
          <section
            key={category.category}
            id={anchor.id}
            className={`mx-auto w-full max-w-4xl scroll-mt-24 px-6 py-16 ${
              ci % 2 === 1 ? "bg-card" : ""
            }`}
          >
            <Reveal>
              <h2 className="font-display text-2xl text-basalt sm:text-3xl">
                {category.category}
              </h2>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {category.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 0.05}>
                  <div className="flex h-full flex-col gap-3 rounded-lg border border-border bg-background p-5">
                    <div className="flex items-start justify-between gap-3">
                      <AmenityIcon name={item.icon} className="h-6 w-6 text-canopy" />
                      {item.status === "unconfirmed" && (
                        <span className="flex items-center gap-1 rounded-full border border-turmeric/40 bg-turmeric/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-turmeric-strong">
                          <AlertTriangle className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
                          Unconfirmed
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-sm font-medium text-basalt">{item.name}</p>
                    <p className="text-sm text-basalt/70">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}

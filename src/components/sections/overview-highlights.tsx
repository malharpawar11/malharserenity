import { Users, Mountain, LayoutPanelTop, AlertTriangle } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { project, unitConfigs, sameSpecClaim, sameSpecClaimNeedsConfirmation } from "@/content/site-config";

const highlights = [
  {
    icon: Users,
    title: "A plot sized for privacy, not scale.",
    copy: `${project.totalUnits} homes share this address — no stacked towers, no shared amenity queues.`,
  },
  {
    icon: Mountain,
    title: "Built into the slope.",
    copy: "Elevated positioning was a site-selection choice, not a marketing line — it's why the upper-floor units get uninterrupted sightlines toward Baner Hill.",
  },
  {
    icon: LayoutPanelTop,
    title: "Two floor plans, one standard.",
    copy: sameSpecClaim,
    unconfirmed: sameSpecClaimNeedsConfirmation,
  },
];

export function OverviewHighlights() {
  return (
    <section className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
            Project Highlights
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-basalt sm:text-5xl">
            Rewritten, not lifted from a listing.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="flex h-full flex-col gap-5 rounded-2xl border border-basalt/10 bg-mist p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-canopy/10">
                  <item.icon className="h-5 w-5 text-canopy" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-xl text-basalt">{item.title}</p>
                  <p className="mt-2.5 text-sm leading-relaxed text-basalt/70">{item.copy}</p>
                </div>
                {item.unconfirmed && (
                  <span className="mt-auto flex w-fit items-center gap-1.5 rounded-full border border-turmeric/40 bg-turmeric/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-turmeric-strong">
                    <AlertTriangle className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
                    Pending confirmation
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-10">
          <p className="text-sm text-stone-strong">
            {unitConfigs[0].type} · {unitConfigs[0].carpetAreaSqFt} sq.ft ·{" "}
            {unitConfigs[0].bathrooms} bath — and {unitConfigs[1].type} ·{" "}
            {unitConfigs[1].carpetAreaSqFt} sq.ft · {unitConfigs[1].bathrooms}{" "}
            bath. Full pricing and comparison on the Residences page.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

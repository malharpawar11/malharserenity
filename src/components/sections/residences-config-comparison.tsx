import { Download } from "lucide-react";
import { unitConfigs, priceDisclaimer, sameSpecClaim } from "@/content/site-config";
import { Reveal } from "@/components/motion/reveal";
import { FloorPlanPlaceholder } from "@/components/ui/floor-plan-placeholder";

export function ResidencesConfigComparison() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
      <Reveal className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone-strong">
          Residences
        </p>
        <h1 className="mt-3 font-display text-4xl text-basalt sm:text-5xl">
          Two floor plans. Both built the same way.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-basalt/80">
          {sameSpecClaim}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {unitConfigs.map((unit, i) => (
          <Reveal key={unit.id} delay={i * 0.1}>
            <div className="flex h-full flex-col gap-5 rounded-lg border border-border bg-card p-6">
              <div>
                <h2 className="font-display text-2xl text-basalt">
                  {unit.type} · {unit.carpetAreaSqFt} sq.ft
                </h2>
                <p className="mt-1 font-mono text-sm text-turmeric-strong">
                  {unit.priceINR}
                </p>
              </div>

              <FloorPlanPlaceholder configLabel={`${unit.type} (${unit.carpetAreaSqFt} sq.ft)`} />

              <dl className="grid grid-cols-2 gap-4 font-mono text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-stone-strong">
                    Carpet Area
                  </dt>
                  <dd className="mt-1 text-basalt">{unit.carpetAreaSqFt} sq.ft</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-stone-strong">
                    Bathrooms
                  </dt>
                  <dd className="mt-1 text-basalt">{unit.bathrooms}</dd>
                </div>
              </dl>

              <button
                type="button"
                disabled
                title="Floor plan PDF not yet available — TODO: swap in sanctioned plan"
                className="mt-auto flex items-center justify-center gap-2 rounded-md border border-stone/50 px-5 py-3 font-sans text-sm font-medium text-basalt/50 cursor-not-allowed"
              >
                <Download className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                Download Floor Plan (PDF)
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-8 text-center text-xs text-stone-strong">
        {priceDisclaimer}
      </Reveal>
    </section>
  );
}

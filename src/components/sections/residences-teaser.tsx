import Link from "next/link";
import { unitConfigs, priceDisclaimer } from "@/content/site-config";
import { Reveal } from "@/components/motion/reveal";

export function ResidencesTeaser() {
  return (
    <section className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl text-basalt sm:text-4xl">
            Two floor plans. Both built the same way.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 overflow-hidden rounded-lg border border-border">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-secondary/60">
                <th className="px-5 py-4 font-sans text-sm font-medium text-basalt/70">
                  Configuration
                </th>
                {unitConfigs.map((unit) => (
                  <th
                    key={unit.id}
                    className="px-5 py-4 font-display text-lg text-basalt"
                  >
                    {unit.type} · {unit.carpetAreaSqFt} sq.ft
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="font-mono text-sm">
              <tr className="border-b border-border">
                <td className="px-5 py-4 text-basalt/70">Bathrooms</td>
                {unitConfigs.map((unit) => (
                  <td key={unit.id} className="px-5 py-4 text-basalt">
                    {unit.bathrooms}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-5 py-4 text-basalt/70">Starting at</td>
                {unitConfigs.map((unit) => (
                  <td key={unit.id} className="px-5 py-4 text-turmeric">
                    {unit.priceINR}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </Reveal>

        <Reveal delay={0.15} className="mt-4 text-center text-xs text-stone">
          {priceDisclaimer}
        </Reveal>

        <Reveal delay={0.2} className="mt-8 text-center">
          <Link
            href="/residences"
            className="font-sans text-sm font-medium text-canopy underline underline-offset-4 hover:text-canopy/80"
          >
            Compare Floor Plans →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

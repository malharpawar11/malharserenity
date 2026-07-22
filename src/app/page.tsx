import { project, unitConfigs, priceDisclaimer } from "@/content/site-config";

/**
 * Phase 1 scaffold-verification page only — proves fonts, palette, and
 * content config wire up correctly. Replaced by the real Home page in
 * Phase 2 (see src/content/copy/home.md for the approved draft).
 */
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 bg-mist px-6 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">
        Phase 1 scaffold check — {project.location.line1}
      </p>

      <h1 className="max-w-2xl font-display text-5xl leading-tight text-basalt sm:text-6xl">
        Fourteen homes. One hillside.
      </h1>

      <p className="max-w-md text-lg text-basalt/80">
        {project.name} is a {project.totalUnits}-residence address on{" "}
        {project.location.microMarket}&rsquo;s high ground.
      </p>

      <dl className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 font-mono text-sm text-canopy">
        <div>
          <dt className="sr-only">Total residences</dt>
          <dd>{project.totalUnits} Residences</dd>
        </div>
        <div>
          <dt className="sr-only">Plot size</dt>
          <dd>{project.plotSizeAcres} ac Boutique plot</dd>
        </div>
        <div>
          <dt className="sr-only">Possession</dt>
          <dd>{project.possession} Possession</dd>
        </div>
        <div>
          <dt className="sr-only">Starting price</dt>
          <dd className="text-turmeric">{unitConfigs[0].priceINR} Starting price</dd>
        </div>
      </dl>

      <button className="rounded-md bg-canopy px-6 py-3 font-sans text-sm font-medium text-mist transition-colors hover:bg-canopy/90">
        Enquire Now
      </button>

      <p className="max-w-lg text-xs text-stone">{priceDisclaimer}</p>
    </main>
  );
}

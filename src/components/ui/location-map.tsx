import { ExternalLink, MapPin } from "lucide-react";
import { project, verifiedGeoFacts } from "@/content/site-config";

/**
 * No confirmed lat/long exists for the plot yet, so this resolves the map
 * from the verified address text rather than fabricating coordinates.
 * TODO: swap the query for exact lat/long once the developer confirms
 * the plot's precise location, and label it as exact (not approximate).
 */
export function LocationMap() {
  const address = `${project.location.line1}, ${project.location.line2}`;
  const query = encodeURIComponent(address);
  const embedSrc = `https://www.google.com/maps?q=${query}&z=14&output=embed`;
  const openInMapsHref = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-basalt/10 bg-card shadow-[0_30px_60px_-20px_rgba(35,35,31,0.25)]">
      <div className="relative">
        <iframe
          title={`Map showing the approximate location of ${project.name}, ${address}`}
          src={embedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[420px] w-full grayscale-[15%] sm:h-[480px]"
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-wrap items-start justify-between gap-3 p-4 sm:p-6">
          <span className="pointer-events-auto flex items-center gap-2 rounded-full border border-basalt/10 bg-mist/90 px-4 py-2 font-mono text-[10px] uppercase tracking-wide text-stone-strong shadow-sm backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5 text-canopy" strokeWidth={1.5} aria-hidden="true" />
            Approximate — exact coordinates pending
          </span>
        </div>

        <div className="pointer-events-none absolute bottom-4 left-4 rounded-2xl border border-basalt/10 bg-mist/90 px-4 py-3 shadow-sm backdrop-blur-md sm:bottom-6 sm:left-6">
          <p className="font-mono text-[10px] uppercase tracking-wide text-stone-strong">
            {verifiedGeoFacts.banerHillRank}
          </p>
          <p className="mt-0.5 text-sm text-basalt">
            {verifiedGeoFacts.banerHillElevationFt.toLocaleString()} ft above sea level
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 border-t border-basalt/10 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
        <p className="text-sm text-basalt/70">{address}</p>
        <a
          href={openInMapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center gap-1.5 rounded-full bg-canopy px-5 font-sans text-sm font-medium text-mist transition-colors hover:bg-canopy/90"
        >
          Open in Google Maps
          <ExternalLink className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

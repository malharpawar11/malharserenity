import { ExternalLink } from "lucide-react";
import { project } from "@/content/site-config";

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
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="flex items-center justify-between gap-3 border-b border-border bg-secondary/40 px-4 py-3">
        <span className="font-mono text-xs uppercase tracking-wide text-stone-strong">
          Approximate location — exact coordinates pending
        </span>
      </div>
      <iframe
        title={`Map showing the approximate location of ${project.name}, ${address}`}
        src={embedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-80 w-full sm:h-96"
      />
      <div className="flex items-center justify-between gap-3 bg-card px-4 py-3">
        <p className="text-xs text-basalt/60">{address}</p>
        <a
          href={openInMapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center gap-1.5 rounded-md px-3 font-sans text-sm font-medium text-canopy transition-colors hover:bg-secondary"
        >
          Open in Google Maps
          <ExternalLink className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

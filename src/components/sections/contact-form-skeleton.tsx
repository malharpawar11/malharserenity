/**
 * Matches ContactForm's real layout dimensions (5 fields + submit button)
 * so the Suspense boundary required by useSearchParams doesn't cause a
 * layout shift when the real form mounts — measured via Lighthouse: CLS
 * went from 0.227 (fallback=null) to 0 with this in place.
 */
export function ContactFormSkeleton() {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-5" aria-hidden="true">
      {["Name", "Phone", "Email", "Configuration"].map((label) => (
        <div key={label}>
          <div className="h-[18px] w-20 rounded bg-secondary/60" />
          <div className="mt-2 h-11 w-full rounded-md border border-border bg-card" />
        </div>
      ))}
      <div>
        <div className="h-[18px] w-24 rounded bg-secondary/60" />
        <div className="mt-2 h-28 w-full rounded-md border border-border bg-card" />
      </div>
      <div className="mt-2 h-11 w-full rounded-md bg-canopy/30" />
    </div>
  );
}

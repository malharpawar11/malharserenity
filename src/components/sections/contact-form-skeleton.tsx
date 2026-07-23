/**
 * Matches ContactForm's real layout dimensions (5 fields + submit button)
 * so the Suspense boundary required by useSearchParams doesn't cause a
 * layout shift when the real form mounts — same CLS-avoidance rationale
 * as before, updated for the new floating-label field heights.
 */
export function ContactFormSkeleton() {
  return (
    <div className="flex flex-col gap-5" aria-hidden="true">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-[60px] w-full animate-pulse rounded-2xl border border-basalt/10 bg-card/70" />
      ))}
      <div className="h-[68px] w-full animate-pulse rounded-2xl border border-basalt/10 bg-card/70" />
      <div className="h-28 w-full animate-pulse rounded-2xl border border-basalt/10 bg-card/70" />
      <div className="mt-2 h-13 w-full animate-pulse rounded-full bg-canopy/25" />
    </div>
  );
}

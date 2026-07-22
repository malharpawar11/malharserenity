import { ImageOff } from "lucide-react";

/**
 * Deliberately NOT a generic blueprint graphic — a plausible-looking fake
 * floor plan could be mistaken for the real sanctioned layout, which
 * doesn't exist in this project yet. This has to read unmistakably as
 * "nothing here yet," not as content.
 */
export function FloorPlanPlaceholder({ configLabel }: { configLabel: string }) {
  return (
    <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-stone/50 bg-secondary/40 px-6 text-center">
      <ImageOff className="h-8 w-8 text-stone-strong" strokeWidth={1.5} aria-hidden="true" />
      <p className="font-sans text-sm font-medium text-basalt">
        Floor plan coming soon
      </p>
      <p className="max-w-[220px] text-xs text-stone-strong">
        {`The sanctioned ${configLabel} layout hasn’t been added yet. Contact us for the latest available plan.`}
      </p>
    </div>
  );
}

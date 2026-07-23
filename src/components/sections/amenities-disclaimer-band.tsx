import { Info } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function AmenitiesDisclaimerBand() {
  return (
    <div className="border-b border-basalt/10 bg-secondary/50">
      <Reveal>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-6 py-5 text-center sm:flex-row sm:justify-center sm:gap-3 sm:text-left">
          <Info className="h-4 w-4 shrink-0 text-stone-strong" strokeWidth={1.5} aria-hidden="true" />
          <p className="text-sm text-basalt/75">
            Amenities shown reflect the current project plan and are
            subject to final confirmation.
          </p>
        </div>
      </Reveal>
    </div>
  );
}

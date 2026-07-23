import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Honest "not photographed yet" placeholder for lifestyle imagery this
 * page wants (lobby, landscaped entrance, etc.) that doesn't exist —
 * deliberately not a stock photo or generic render standing in for the
 * real thing. Same pattern as FloorPlanPlaceholder and the Gallery page.
 */
export function LifestylePlaceholder({
  label,
  tone = "dark",
  className,
}: {
  label: string;
  /** "dark" for use over an image/dark section, "light" for a mist/card background. */
  tone?: "dark" | "light";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-3xl border border-dashed px-6 text-center backdrop-blur-sm",
        isDark
          ? "border-mist/25 bg-mist/[0.04]"
          : "border-basalt/15 bg-secondary/40",
        className
      )}
    >
      <ImageOff
        className={cn("h-7 w-7", isDark ? "text-mist/50" : "text-stone-strong")}
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <p className={cn("text-sm font-medium", isDark ? "text-mist/80" : "text-basalt")}>
        {label}
      </p>
      <p className={cn("text-xs", isDark ? "text-mist/45" : "text-stone-strong")}>
        Photography coming soon
      </p>
    </div>
  );
}

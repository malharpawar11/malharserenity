import { Download } from "lucide-react";
import { contactPlaceholders } from "@/content/site-config";
import { cn } from "@/lib/utils";

type BrochureButtonProps = {
  className?: string;
};

/**
 * Renders a real download link once a brochure PDF is configured. Until
 * then, a disabled state — same gating pattern as WhatsAppButton — rather
 * than a link to a file that doesn't exist.
 */
export function BrochureButton({ className }: BrochureButtonProps) {
  const href = contactPlaceholders.brochurePdfPlaceholder;

  if (!href) {
    return (
      <button
        type="button"
        disabled
        title="Brochure not yet available — TODO: set contactPlaceholders.brochurePdfPlaceholder"
        className={cn("cursor-not-allowed opacity-50", className)}
      >
        <Download className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        Download Brochure
      </button>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" download className={className}>
      <Download className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
      Download Brochure
    </a>
  );
}

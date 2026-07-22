import { buildWhatsAppLink } from "@/content/site-config";

type WhatsAppButtonProps = {
  message: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Renders a real wa.me deep link once a WhatsApp number is configured.
 * Until then, renders a disabled state rather than a broken/fake link —
 * see contactPlaceholders in site-config.ts.
 */
export function WhatsAppButton({ message, className, children }: WhatsAppButtonProps) {
  const href = buildWhatsAppLink(message);

  if (!href) {
    return (
      <button
        type="button"
        disabled
        title="WhatsApp number not yet configured — TODO: set contactPlaceholders.whatsappNumber"
        className={`cursor-not-allowed opacity-50 ${className ?? ""}`}
      >
        {children}
      </button>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

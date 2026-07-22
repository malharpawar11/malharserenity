import { AlertTriangle } from "lucide-react";
import { project } from "@/content/site-config";

/**
 * Deliberately not filled with generated boilerplate legal text — a
 * plausible-sounding AI-drafted privacy policy or ToS would be worse than
 * an honest placeholder here, since someone could mistake it for reviewed
 * legal content and publish it as-is.
 */
export function LegalStub({ title }: { title: string }) {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-24 text-center sm:py-32">
      <h1 className="font-display text-4xl text-basalt sm:text-5xl">{title}</h1>

      <div className="mt-10 flex max-w-xl items-start gap-3 rounded-md border border-turmeric/40 bg-turmeric/10 px-5 py-4 text-left">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-turmeric-strong" strokeWidth={1.5} aria-hidden="true" />
        <p className="text-sm leading-relaxed text-basalt/80">
          No {title.toLowerCase()} has been drafted for {project.name} yet.
          This page is a structural placeholder only — it needs to be
          written and reviewed by a lawyer before the site launches. Do not
          treat anything on this page as legal advice or a final policy.
        </p>
      </div>
    </main>
  );
}

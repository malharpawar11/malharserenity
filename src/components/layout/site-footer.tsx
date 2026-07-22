import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { project, contactPlaceholders, legalBoilerplate } from "@/content/site-config";

const exploreLinks = [
  { href: "/overview", label: "Overview" },
  { href: "/residences", label: "Residences" },
  { href: "/amenities", label: "Amenities" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-basalt text-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg">{project.name}</p>
          <p className="mt-3 text-sm text-mist/70">
            {project.location.line1}
            <br />
            {project.location.line2}
          </p>
          <p className="mt-3 text-sm text-mist/70">by {project.developer}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-mist/50">Explore</p>
          <ul className="mt-3 flex flex-col gap-2">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-mist/70 transition-colors hover:text-mist"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-mist/50">Contact</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-mist/70">
            <li>{contactPlaceholders.phoneDisplay}</li>
            <li>{contactPlaceholders.email}</li>
          </ul>
        </div>
      </div>

      {/* Deliberately its own bordered, icon-flagged block — not folded
          into the Contact column as plain gray text. A missing RERA
          number is the one placeholder on this site that must be
          impossible to mistake for real, live content. */}
      <div className="mx-auto max-w-6xl px-6 pb-10">
        <div className="flex items-start gap-3 rounded-md border border-turmeric/40 bg-turmeric/10 px-5 py-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-turmeric" strokeWidth={1.5} aria-hidden="true" />
          <div>
            <p className="font-mono text-sm text-turmeric">
              MahaRERA Registration No: [PENDING — insert number]
            </p>
            <p className="mt-1 text-xs text-mist/70">
              This registration number is not yet available and must be
              added before this site goes live.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-mist/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs leading-relaxed text-mist/50">
          <p>{legalBoilerplate.notAnOffer}</p>
          <p className="mt-2">{legalBoilerplate.verifyIndependently}</p>
          <p className="mt-2">{legalBoilerplate.artisticImpression}</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p>
              © {new Date().getFullYear()} {project.developer}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="underline underline-offset-4 hover:text-mist/80">
                Privacy Policy
              </Link>
              <Link href="/terms" className="underline underline-offset-4 hover:text-mist/80">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

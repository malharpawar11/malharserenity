import Link from "next/link";
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
            <li className="font-mono text-xs">{contactPlaceholders.reraDisclaimerLabel}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-mist/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs leading-relaxed text-mist/50">
          <p>{legalBoilerplate.notAnOffer}</p>
          <p className="mt-2">{legalBoilerplate.verifyIndependently}</p>
          <p className="mt-2">{legalBoilerplate.artisticImpression}</p>
          <p className="mt-4">
            © {new Date().getFullYear()} {project.developer}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

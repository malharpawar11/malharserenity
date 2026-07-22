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

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-mist/10 bg-basalt text-mist">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-turmeric/40 to-transparent" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="lg:col-span-1">
          <p className="font-display text-2xl">{project.name}</p>
          <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-mist/60">
            A boutique address of fourteen residences on Baner&rsquo;s high
            ground.
          </p>
          <p className="mt-6 text-sm text-mist/50">by {project.developer}</p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist/55">Explore</p>
          <ul className="mt-5 flex flex-col gap-3">
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
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist/55">Address</p>
          <p className="mt-5 text-sm leading-relaxed text-mist/70">
            {project.location.line1}
            <br />
            {project.location.line2}
          </p>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-mist/55">Legal</p>
          <ul className="mt-3 flex flex-col gap-3">
            {legalLinks.map((link) => (
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
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist/55">Contact</p>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-mist/70">
            <li>{contactPlaceholders.phoneDisplay}</li>
            <li>{contactPlaceholders.email}</li>
          </ul>
        </div>
      </div>

      {/* Deliberately its own bordered, icon-flagged block — not folded
          into the Contact column as plain gray text. A missing RERA
          number is the one placeholder on this site that must be
          impossible to mistake for real, live content. */}
      <div className="mx-auto max-w-6xl px-6 pb-12">
        <div className="flex items-start gap-3 rounded-2xl border border-turmeric/40 bg-turmeric/10 px-5 py-4">
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
        <div className="mx-auto max-w-6xl px-6 py-8 text-xs leading-relaxed text-mist/55">
          <p>{legalBoilerplate.notAnOffer}</p>
          <p className="mt-2">{legalBoilerplate.verifyIndependently}</p>
          <p className="mt-2">{legalBoilerplate.artisticImpression}</p>
          <p className="mt-5">
            © {new Date().getFullYear()} {project.developer}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

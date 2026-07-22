"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { project } from "@/content/site-config";

const navLinks = [
  { href: "/overview", label: "Overview" },
  { href: "/residences", label: "Residences" },
  { href: "/amenities", label: "Amenities" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-mist/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg text-basalt">
          {project.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-basalt/70 transition-colors hover:text-basalt"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-canopy px-5 py-2.5 font-sans text-sm font-medium text-mist transition-colors hover:bg-canopy/90"
          >
            Enquire Now
          </Link>
        </nav>

        <button
          type="button"
          className="text-basalt md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 font-sans text-sm text-basalt/80 hover:bg-secondary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-canopy px-5 py-2.5 text-center font-sans text-sm font-medium text-mist"
          >
            Enquire Now
          </Link>
        </nav>
      )}
    </header>
  );
}

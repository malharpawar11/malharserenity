"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { project } from "@/content/site-config";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/overview", label: "Overview" },
  { href: "/residences", label: "Residences" },
  { href: "/amenities", label: "Amenities" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

/** Underline that draws in on hover, drawn with a real transition rather than a static border. */
function NavLink({ href, label, dark }: { href: string; label: string; dark: boolean }) {
  return (
    <Link
      href={href}
      className={`group relative py-1 font-sans text-sm transition-colors ${
        dark ? "text-basalt/75 hover:text-basalt" : "text-mist/80 hover:text-mist"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-0.5 left-0 h-px w-0 transition-[width] duration-300 ease-out group-hover:w-full ${
          dark ? "bg-canopy" : "bg-turmeric"
        }`}
      />
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 48);
  });

  // `isHome &&` already makes `transparent` false on every other route
  // regardless of `scrolled`, so there's nothing to reset on navigation.
  const transparent = isHome && !scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={false}
        animate={{
          paddingTop: transparent ? 24 : 10,
          paddingBottom: transparent ? 24 : 10,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="px-4 sm:px-6"
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-colors duration-500 ${
            transparent
              ? "bg-transparent"
              : "border border-border/70 bg-mist/85 shadow-[0_4px_24px_-8px_rgba(35,35,31,0.15)] backdrop-blur-xl"
          }`}
        >
          <Link
            href="/"
            className={`font-display text-lg tracking-tight transition-colors ${
              transparent ? "text-mist" : "text-basalt"
            }`}
          >
            {project.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} dark={!transparent} />
            ))}
            <Link
              href="/contact"
              className={`rounded-full px-5 py-2 font-sans text-sm font-medium transition-all duration-300 ${
                transparent
                  ? "border border-mist/40 bg-mist/10 text-mist backdrop-blur-md hover:bg-mist/20"
                  : "bg-canopy text-mist hover:bg-canopy/90"
              }`}
            >
              Enquire Now
            </Link>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className={`-m-2.5 flex h-11 w-11 items-center justify-center p-2.5 md:hidden ${
                  transparent ? "text-mist" : "text-basalt"
                }`}
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-border bg-mist sm:w-[340px]">
              <SheetHeader>
                <SheetTitle className="font-display text-xl text-basalt">
                  {project.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-md px-3 py-3 font-sans text-base text-basalt/80 transition-colors hover:bg-secondary hover:text-basalt"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="mt-3 rounded-full bg-canopy px-5 py-3 text-center font-sans text-sm font-medium text-mist"
                  >
                    Enquire Now
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </header>
  );
}

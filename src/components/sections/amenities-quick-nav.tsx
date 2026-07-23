import { Reveal } from "@/components/motion/reveal";

const links = [
  { href: "#security", label: "Security" },
  { href: "#convenience", label: "Convenience" },
  { href: "#outdoor", label: "Outdoor" },
  { href: "#sustainability", label: "Sustainability" },
];

export function AmenitiesQuickNav() {
  return (
    <div className="bg-mist py-8">
      <Reveal className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex min-h-11 items-center rounded-full border border-basalt/10 bg-card px-5 font-sans text-sm text-basalt/75 transition-colors hover:border-canopy hover:text-canopy"
          >
            {link.label}
          </a>
        ))}
      </Reveal>
    </div>
  );
}

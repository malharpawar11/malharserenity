import Image from "next/image";
import { Navigation2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { BrochureButton } from "@/components/ui/brochure-button";
import { buttonVariants } from "@/components/ui/button";
import { buildDirectionsUrl } from "@/content/site-config";
import { cn } from "@/lib/utils";

const ghostPill = cn(buttonVariants({ variant: "brand-ghost", size: "pill" }), "gap-2");

export function LocationCTA() {
  return (
    <section id="visit" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/serenity-exterior-day.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-basalt/85" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-turmeric">
            See it for yourself
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-mist sm:text-5xl">
            The address sells itself. Come see why.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist/75">
            No map or paragraph replaces standing on the hillside. Book a
            visit, or get directions and see the neighbourhood yourself.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <WhatsAppButton
            message="Hi, I'd like to book a site visit to see Malhar Serenity and the Baner neighbourhood."
            className={cn(buttonVariants({ variant: "brand-accent", size: "pill" }), "gap-2")}
          >
            Enquire on WhatsApp
          </WhatsAppButton>

          <MagneticCTA href="/contact" variant="brand-ghost" size="pill">
            Book a Site Visit
          </MagneticCTA>

          <a href={buildDirectionsUrl()} target="_blank" rel="noopener noreferrer" className={ghostPill}>
            <Navigation2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            Get Directions
          </a>

          <BrochureButton className={ghostPill} />
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { AlertTriangle } from "lucide-react";
import { amenityCategories } from "@/content/amenities";
import { Reveal } from "@/components/motion/reveal";
import { AmenityIcon } from "@/components/ui/amenity-icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * The storytelling sections above feature what matters most per category
 * — this is the complete, unfiltered list for anyone who wants to check
 * every single item rather than take the highlights on faith.
 */
export function AmenitiesFullList() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
            The Complete List
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-basalt sm:text-5xl">
            Everything, itemized.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-basalt/80">
            No rounding up, no padding to hit a number — every item here
            matches the current project plan, category by category.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <Accordion type="multiple" className="rounded-3xl border border-basalt/10 bg-card px-2 sm:px-4">
            {amenityCategories.map((category) => (
              <AccordionItem
                key={category.category}
                value={category.category}
                className="border-basalt/10 px-2 py-2"
              >
                <AccordionTrigger className="py-5 font-display text-xl text-basalt hover:no-underline sm:text-2xl">
                  <span className="flex items-center gap-3">
                    {category.category}
                    <span className="font-mono text-xs font-normal tracking-wide text-stone-strong">
                      {category.items.length} item{category.items.length !== 1 ? "s" : ""}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-4 pb-4">
                    {category.items.map((item) => (
                      <li key={item.name} className="flex items-start gap-4">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-canopy/10">
                          <AmenityIcon name={item.icon} className="h-4 w-4 text-canopy" />
                        </span>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-sans text-sm font-medium text-basalt">{item.name}</p>
                            {item.status === "unconfirmed" && (
                              <span className="flex items-center gap-1 rounded-full border border-turmeric/40 bg-turmeric/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-turmeric-strong">
                                <AlertTriangle className="h-2.5 w-2.5" strokeWidth={1.5} aria-hidden="true" />
                                Unconfirmed
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-sm text-basalt/65">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

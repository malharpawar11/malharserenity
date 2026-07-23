"use client";

import { useState } from "react";
import { GraduationCap, HeartPulse, Building2, ShoppingBag, Clapperboard, type LucideIcon, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { nearbyCategories } from "@/content/site-config";

const icons: Record<string, LucideIcon> = {
  Schools: GraduationCap,
  Hospitals: HeartPulse,
  "IT Parks": Building2,
  "Shopping & Dining": ShoppingBag,
  Entertainment: Clapperboard,
};

export function LocationNearby() {
  const first = nearbyCategories[0].category;
  const [active, setActive] = useState(first);

  return (
    <section id="neighbourhood" className="scroll-mt-24 bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
            The Neighbourhood
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-basalt sm:text-5xl">
            Everything within reach.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <Tabs value={active} onValueChange={setActive} className="items-center">
            <TabsList className="h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
              {nearbyCategories.map((cat) => {
                const Icon = icons[cat.category] ?? Building2;
                const isActive = active === cat.category;
                return (
                  <TabsTrigger
                    key={cat.category}
                    value={cat.category}
                    className={cn(
                      "gap-2 rounded-full border px-5 py-2.5 text-sm transition-colors",
                      isActive
                        ? "!border-canopy !bg-canopy !text-mist"
                        : "!border-basalt/10 !bg-card !text-basalt/70"
                    )}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    {cat.category}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {nearbyCategories.map((cat) => (
              <TabsContent key={cat.category} value={cat.category} className="w-full pt-10">
                {cat.items ? (
                  <>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {cat.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-4 rounded-2xl border border-basalt/10 bg-card px-5 py-4 transition-colors hover:border-canopy/30"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-canopy" />
                          <p className="text-sm text-basalt">{item}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 flex items-center justify-center gap-2 text-xs text-stone-strong">
                      <Info className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                      {cat.verified
                        ? "Distance and drive time verified by us."
                        : "Commonly cited in local real-estate sources — not independently verified by us."}
                    </p>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-basalt/15 bg-secondary/40 px-6 py-10 text-center">
                    <p className="text-sm font-medium text-basalt">Still compiling this list</p>
                    <p className="max-w-xs text-xs text-stone-strong">
                      We&rsquo;d rather show nothing than a guessed list of
                      names. Check back as we verify this category.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}

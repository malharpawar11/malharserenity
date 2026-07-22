"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageOff } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { galleryCategories } from "@/content/gallery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const previewSlides = galleryCategories.flatMap((cat) => {
  const real = (cat.images ?? []).map((img) => ({ category: cat.name, image: img }));
  const placeholders = Array.from({ length: Math.min(cat.placeholderSlots, 1) }, () => ({
    category: cat.name,
    image: undefined,
  }));
  return [...real, ...placeholders];
});

export function GalleryPreview() {
  return (
    <section className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
              Gallery
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-basalt sm:text-5xl">
              A closer look
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex shrink-0 items-center gap-2 font-sans text-sm font-medium text-canopy"
          >
            View full gallery
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-4">
              {previewSlides.map((slide, i) => (
                <CarouselItem key={i} className="basis-[80%] pl-4 sm:basis-1/2 lg:basis-[38%]">
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                    {slide.image ? (
                      <>
                        <Image
                          src={slide.image.src}
                          alt={slide.image.alt}
                          fill
                          sizes="(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 80vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-basalt/60 to-transparent p-5">
                          <p className="font-mono text-[10px] uppercase tracking-wide text-mist/80">
                            {slide.category}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-stone/50 bg-secondary/40 text-center">
                        <ImageOff className="h-6 w-6 text-stone-strong" strokeWidth={1.5} aria-hidden="true" />
                        <p className="text-xs font-medium text-basalt">Coming soon</p>
                        <p className="text-[11px] text-stone-strong">{slide.category}</p>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-end gap-3">
              <CarouselPrevious className="static h-11 w-11 translate-y-0 border-basalt/15 bg-mist text-basalt hover:bg-secondary" />
              <CarouselNext className="static h-11 w-11 translate-y-0 border-basalt/15 bg-mist text-basalt hover:bg-secondary" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}

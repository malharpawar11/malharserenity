"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ImageOff, X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryCategories, type GalleryImage } from "@/content/gallery";
import { Reveal } from "@/components/motion/reveal";

type FlatItem = {
  category: string;
  indexInCategory: number;
  globalIndex: number;
  image?: GalleryImage;
};

const flatItems: FlatItem[] = galleryCategories.flatMap((cat, ci) => {
  const realCount = cat.images?.length ?? 0;
  const total = realCount + cat.placeholderSlots;
  const priorCount = galleryCategories
    .slice(0, ci)
    .reduce((sum, c) => sum + (c.images?.length ?? 0) + c.placeholderSlots, 0);

  return Array.from({ length: total }, (_, si) => ({
    category: cat.name,
    indexInCategory: si,
    globalIndex: priorCount + si,
    image: si < realCount ? cat.images![si] : undefined,
  }));
});

function GalleryTile({ item, onOpen }: { item: FlatItem; onOpen: (globalIndex: number) => void }) {
  if (item.image) {
    return (
      <button
        type="button"
        onClick={() => onOpen(item.globalIndex)}
        className="group relative aspect-[4/3] overflow-hidden rounded-lg"
      >
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(min-width: 640px) 25vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-basalt/0 transition-colors duration-300 group-hover:bg-basalt/10" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(item.globalIndex)}
      className="group flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-stone/50 bg-secondary/40 px-4 text-center transition-colors hover:border-canopy"
    >
      <ImageOff className="h-6 w-6 text-stone-strong" strokeWidth={1.5} aria-hidden="true" />
      <p className="text-xs font-medium text-basalt">Photography coming soon</p>
      <p className="text-[11px] text-stone-strong">
        {item.category} · {item.indexInCategory + 1}
      </p>
    </button>
  );
}

export function GalleryGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openLightbox = useCallback((globalIndex: number) => {
    triggerRef.current = document.activeElement as HTMLElement;
    setOpenIndex(globalIndex);
  }, []);

  const closeLightbox = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  const goPrev = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i - 1 + flatItems.length) % flatItems.length));
  }, []);

  const goNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % flatItems.length));
  }, []);

  // Focus the dialog on open.
  useEffect(() => {
    if (openIndex !== null) closeButtonRef.current?.focus();
  }, [openIndex]);

  // Keyboard: Escape / arrows / focus trap while open.
  useEffect(() => {
    if (openIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [openIndex, closeLightbox, goPrev, goNext]);

  const current = openIndex !== null ? flatItems[openIndex] : null;
  const currentCategoryTotal = current
    ? (galleryCategories.find((c) => c.name === current.category)?.images?.length ?? 0) +
      (galleryCategories.find((c) => c.name === current.category)?.placeholderSlots ?? 0)
    : 0;

  return (
    <>
      {galleryCategories.map((category) => {
        const items = flatItems.filter((i) => i.category === category.name);
        return (
          <section key={category.name} className="mx-auto max-w-4xl px-6 py-12">
            <Reveal>
              <h2 className="font-display text-2xl text-basalt">{category.name}</h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {items.map((item, i) => (
                <Reveal key={item.globalIndex} delay={i * 0.05}>
                  <GalleryTile item={item} onOpen={openLightbox} />
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      {current &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-basalt/90 px-4"
            role="dialog"
            aria-modal="true"
            aria-label={
              current.image
                ? current.image.alt
                : `${current.category} photo ${current.indexInCategory + 1}, coming soon`
            }
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            <div ref={dialogRef} className="relative flex w-full max-w-3xl flex-col items-center">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeLightbox}
                aria-label="Close"
                className="absolute -top-14 right-0 flex h-11 w-11 items-center justify-center rounded-full text-mist transition-colors hover:bg-mist/10 sm:top-0 sm:-right-14"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>

              {current.image ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={current.image.src}
                    alt={current.image.alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 90vw"
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-mist/30 bg-basalt px-6 text-center">
                  <ImageOff className="h-10 w-10 text-mist/60" strokeWidth={1.5} aria-hidden="true" />
                  <p className="font-sans text-base font-medium text-mist">
                    Photography coming soon
                  </p>
                  <p className="text-sm text-mist/60">
                    {current.category} · {current.indexInCategory + 1} of {currentCategoryTotal}
                  </p>
                </div>
              )}

              <div className="mt-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous photo"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-mist transition-colors hover:bg-mist/10"
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                </button>
                <span className="font-mono text-xs text-mist/60">
                  {openIndex! + 1} / {flatItems.length}
                </span>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next photo"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-mist transition-colors hover:bg-mist/10"
                >
                  <ChevronRight className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

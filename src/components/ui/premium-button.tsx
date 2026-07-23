"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type PremiumButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: React.ReactNode;
  loading?: boolean;
  loadingLabel?: string;
};

type Ripple = { id: number; x: number; y: number };

/**
 * Submit button with a magnetic hover drift, a shimmer sweep, click
 * ripples, and a loading-state swap — all disabled/degraded gracefully
 * under prefers-reduced-motion (magnetic drift off, shimmer/ripple are
 * purely decorative opacity/transform so they're left as harmless no-ops
 * rather than special-cased).
 */
export function PremiumButton({
  loading = false,
  loadingLabel = "Sending",
  children,
  className,
  disabled,
  onClick,
  type = "submit",
  ...props
}: PremiumButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.12,
      y: (e.clientY - rect.top - rect.height / 2) * 0.25,
    });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const id = Date.now();
      setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
      window.setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650);
    }
    onClick?.(e);
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.3 }}
      className={cn(
        "group/pb relative flex min-h-13 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-canopy to-[#233626] px-8 text-sm font-medium text-mist shadow-[0_16px_32px_-12px_rgba(40,64,47,0.55)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-10px_rgba(40,64,47,0.65)] disabled:cursor-not-allowed disabled:opacity-70",
        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-mist/25 to-transparent transition-transform duration-700 ease-out group-hover/pb:translate-x-full"
      />

      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          className="pointer-events-none absolute h-2 w-2 rounded-full bg-mist/50"
          style={{ left: r.x, top: r.y, animation: "ripple 0.6s ease-out" }}
        />
      ))}

      <span className="relative z-10">
        <AnimatePresence mode="wait" initial={false}>
          {loading ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              {loadingLabel}
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              {children}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover/pb:translate-x-1"
                aria-hidden="true"
              />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </motion.button>
  );
}

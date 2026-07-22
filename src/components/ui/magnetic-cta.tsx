"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

type MagneticCTAProps = {
  href: string;
  children: React.ReactNode;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  showArrow?: boolean;
  arrowStyle?: "right" | "up-right";
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

/**
 * Subtle magnetic-follow CTA — the button drifts a few px toward the
 * cursor within its own bounds, then springs back. Capped displacement
 * keeps it tasteful rather than gimmicky; disabled entirely under
 * prefers-reduced-motion.
 */
export function MagneticCTA({
  href,
  children,
  variant = "brand",
  size = "pill",
  showArrow = true,
  arrowStyle = "right",
  external = false,
  className,
  onClick,
}: MagneticCTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.2, y: relY * 0.3 });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const Arrow = arrowStyle === "up-right" ? ArrowUpRight : ArrowRight;

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.3 }}
    >
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
        className={cn(buttonVariants({ variant, size }), "group/cta", className)}
      >
        {children}
        {showArrow && (
          <Arrow
            className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
            aria-hidden="true"
          />
        )}
      </Link>
    </motion.div>
  );
}

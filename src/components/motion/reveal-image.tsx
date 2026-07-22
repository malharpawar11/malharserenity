"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealImageProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Scroll-triggered scale+fade for image containers — the image starts
 * slightly zoomed and dims in as it enters view. Same safe pattern as
 * Reveal: reduced-motion renders a plain wrapper div, not a motion.div
 * with toggled props.
 */
export function RevealImage({ children, className, delay = 0 }: RevealImageProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.06 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

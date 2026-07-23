"use client";

import { forwardRef, useId } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FloatingInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon: LucideIcon;
  error?: string;
};

/**
 * Floating-label input with a CSS-only label float (driven by
 * `:placeholder-shown`, not React state) so it works correctly with
 * react-hook-form's uncontrolled `register()` — no value syncing needed,
 * and default values still render the label in its floated position on
 * first paint.
 */
export const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, icon: Icon, error, className, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div>
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            placeholder=" "
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            className={cn(
              "peer w-full rounded-2xl border bg-card/70 pt-6 pb-2.5 pr-4 pl-11 font-sans text-sm text-basalt outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-transparent",
              "border-basalt/12 focus:border-canopy focus:shadow-[0_0_0_4px_rgba(40,64,47,0.12)]",
              error &&
                "border-destructive/50 focus:border-destructive focus:shadow-[0_0_0_4px_rgba(196,0,9,0.12)]",
              className
            )}
            {...props}
          />
          <Icon
            className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-stone-strong transition-colors duration-300 peer-focus:text-canopy"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <label
            htmlFor={inputId}
            className="pointer-events-none absolute top-4 left-11 origin-left text-sm text-stone-strong transition-all duration-300 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-canopy peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-xs"
          >
            {label}
          </label>
        </div>
        {error && (
          <p id={`${inputId}-error`} role="alert" className="mt-1.5 pl-1 text-xs text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }
);
FloatingInput.displayName = "FloatingInput";

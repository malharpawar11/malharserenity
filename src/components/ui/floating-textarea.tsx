"use client";

import { forwardRef, useId } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FloatingTextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onInput"> & {
  label: string;
  icon: LucideIcon;
  error?: string;
};

/** Same floating-label pattern as FloatingInput, plus auto-resize on input. */
export const FloatingTextarea = forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
  ({ label, icon: Icon, error, className, id, rows = 4, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;

    function handleInput(e: React.FormEvent<HTMLTextAreaElement>) {
      const el = e.currentTarget;
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    }

    return (
      <div>
        <div className="relative">
          <textarea
            ref={ref}
            id={textareaId}
            placeholder=" "
            rows={rows}
            onInput={handleInput}
            aria-invalid={!!error}
            aria-describedby={error ? `${textareaId}-error` : undefined}
            className={cn(
              "peer w-full resize-none overflow-hidden rounded-2xl border bg-card/70 pt-6 pb-3 pr-4 pl-11 font-sans text-sm text-basalt outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-transparent",
              "border-basalt/12 focus:border-canopy focus:shadow-[0_0_0_4px_rgba(40,64,47,0.12)]",
              error &&
                "border-destructive/50 focus:border-destructive focus:shadow-[0_0_0_4px_rgba(196,0,9,0.12)]",
              className
            )}
            {...props}
          />
          <Icon
            className="pointer-events-none absolute top-6 left-4 h-4 w-4 text-stone-strong transition-colors duration-300 peer-focus:text-canopy"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <label
            htmlFor={textareaId}
            className="pointer-events-none absolute top-4 left-11 origin-left text-sm text-stone-strong transition-all duration-300 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-canopy peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-xs"
          >
            {label}
          </label>
        </div>
        {error && (
          <p id={`${textareaId}-error`} role="alert" className="mt-1.5 pl-1 text-xs text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }
);
FloatingTextarea.displayName = "FloatingTextarea";

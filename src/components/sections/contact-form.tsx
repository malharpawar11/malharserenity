"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { enquirySchema, type EnquiryFormValues } from "@/lib/validation/enquiry-schema";
import { unitConfigs, contactPlaceholders } from "@/content/site-config";
import { Reveal } from "@/components/motion/reveal";

const configOptions: { value: EnquiryFormValues["configInterest"]; label: string }[] = [
  { value: unitConfigs[0].id as "3bhk-1088", label: `${unitConfigs[0].type} · ${unitConfigs[0].carpetAreaSqFt} sq.ft` },
  { value: unitConfigs[1].id as "3bhk-1215", label: `${unitConfigs[1].type} · ${unitConfigs[1].carpetAreaSqFt} sq.ft` },
  { value: "unsure", label: "Not sure yet" },
];

const fieldClass =
  "min-h-11 w-full rounded-md border border-border bg-card px-4 py-2.5 font-sans text-sm text-basalt " +
  "placeholder:text-stone-strong focus:border-canopy focus:outline-none focus:ring-2 focus:ring-canopy/40";

function buildMailtoHref(values: EnquiryFormValues) {
  const configLabel = configOptions.find((c) => c.value === values.configInterest)?.label ?? "Not sure yet";
  const subject = `Enquiry: Malhar Serenity (${configLabel})`;
  const body = [
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Configuration of interest: ${configLabel}`,
    "",
    values.message,
  ].join("\n");
  return `mailto:${contactPlaceholders.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const configFromQuery = searchParams.get("config");
  const defaultConfig: EnquiryFormValues["configInterest"] =
    configFromQuery === unitConfigs[0].id
      ? (unitConfigs[0].id as "3bhk-1088")
      : configFromQuery === unitConfigs[1].id
        ? (unitConfigs[1].id as "3bhk-1215")
        : "unsure";

  const [submitted, setSubmitted] = useState<EnquiryFormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      configInterest: defaultConfig,
      message: "",
    },
  });

  function onSubmit(values: EnquiryFormValues) {
    setSubmitted(values);
    // Opens the visitor's own mail client — there's no backend/CMS wired
    // up yet (see Phase 5 decision), so this is a fallback, not a
    // guaranteed-delivery submission. The success panel below is worded
    // to reflect that honestly.
    window.location.assign(buildMailtoHref(values));
  }

  if (submitted) {
    return (
      <Reveal className="mx-auto max-w-md rounded-lg border border-canopy/30 bg-canopy/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-canopy" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl text-basalt">Opening your email client</h3>
        <p className="mt-3 text-sm leading-relaxed text-basalt/80">
          We&rsquo;ve pre-filled an email to us with your details, {submitted.name.split(" ")[0]}.
          If your email app didn&rsquo;t open, write to us directly at{" "}
          <a href={`mailto:${contactPlaceholders.email}`} className="text-canopy underline underline-offset-4">
            {contactPlaceholders.email}
          </a>{" "}
          or message us on WhatsApp below.
        </p>
      </Reveal>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mx-auto flex max-w-md flex-col gap-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-basalt">
          Name
        </label>
        <input id="name" type="text" autoComplete="name" className={`mt-2 ${fieldClass}`} {...register("name")} />
        {errors.name && (
          <p role="alert" className="mt-1.5 text-xs text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-basalt">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="98765 43210"
          className={`mt-2 ${fieldClass}`}
          {...register("phone")}
        />
        {errors.phone && (
          <p role="alert" className="mt-1.5 text-xs text-destructive">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-basalt">
          Email
        </label>
        <input
          id="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          className={`mt-2 ${fieldClass}`}
          {...register("email")}
        />
        {errors.email && (
          <p role="alert" className="mt-1.5 text-xs text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="configInterest" className="text-sm font-medium text-basalt">
          Configuration
        </label>
        <select id="configInterest" className={`mt-2 ${fieldClass}`} {...register("configInterest")}>
          {configOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.configInterest && (
          <p role="alert" className="mt-1.5 text-xs text-destructive">
            {errors.configInterest.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-basalt">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Floor plans, payment schedule, site visit timing — whatever you want to know."
          className={`mt-2 ${fieldClass} min-h-28`}
          {...register("message")}
        />
        {errors.message && (
          <p role="alert" className="mt-1.5 text-xs text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 flex min-h-11 items-center justify-center rounded-md bg-canopy px-6 py-3 font-sans text-sm font-medium text-mist transition-colors hover:bg-canopy/90 disabled:opacity-60"
      >
        Send Enquiry
      </button>
    </form>
  );
}

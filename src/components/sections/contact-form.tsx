"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { CheckCircle2, User, Phone, Mail, Building2, MessageSquare } from "lucide-react";
import { enquirySchema, type EnquiryFormValues } from "@/lib/validation/enquiry-schema";
import { unitConfigs, contactPlaceholders } from "@/content/site-config";
import { FloatingInput } from "@/components/ui/floating-input";
import { FloatingTextarea } from "@/components/ui/floating-textarea";
import { PremiumButton } from "@/components/ui/premium-button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const configOptions: { value: EnquiryFormValues["configInterest"]; label: string }[] = [
  { value: unitConfigs[0].id as "3bhk-1088", label: `${unitConfigs[0].type} · ${unitConfigs[0].carpetAreaSqFt} sq.ft` },
  { value: unitConfigs[1].id as "3bhk-1215", label: `${unitConfigs[1].type} · ${unitConfigs[1].carpetAreaSqFt} sq.ft` },
  { value: "unsure", label: "Not sure yet" },
];

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
    control,
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
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-4 rounded-3xl border border-canopy/20 bg-canopy/5 p-9 text-center"
      >
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-canopy/10"
        >
          <CheckCircle2 className="h-7 w-7 text-canopy" strokeWidth={1.5} aria-hidden="true" />
        </motion.span>
        <h3 className="font-display text-2xl text-basalt">Opening your email client</h3>
        <p className="max-w-sm text-sm leading-relaxed text-basalt/75">
          We&rsquo;ve pre-filled an email to us with your details, {submitted.name.split(" ")[0]}.
          If your email app didn&rsquo;t open, write to us directly at{" "}
          <a href={`mailto:${contactPlaceholders.email}`} className="text-canopy underline underline-offset-4">
            {contactPlaceholders.email}
          </a>{" "}
          or message us on WhatsApp.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <FloatingInput
        id="name"
        label="Name"
        icon={User}
        autoComplete="name"
        error={errors.name?.message}
        {...register("name")}
      />

      <FloatingInput
        id="phone"
        label="Phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        icon={Phone}
        error={errors.phone?.message}
        {...register("phone")}
      />

      <FloatingInput
        id="email"
        label="Email"
        type="email"
        inputMode="email"
        autoComplete="email"
        icon={Mail}
        error={errors.email?.message}
        {...register("email")}
      />

      <div>
        <Controller
          control={control}
          name="configInterest"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger
                id="configInterest"
                aria-label="Configuration"
                className="relative rounded-2xl border border-basalt/12 bg-card/70 py-6 pr-4 pl-11 text-left backdrop-blur-sm data-[state=open]:border-canopy data-[state=open]:shadow-[0_0_0_4px_rgba(40,64,47,0.12)]"
              >
                <Building2
                  className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-stone-strong"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="flex flex-col items-start">
                  <span className="text-xs text-stone-strong">Configuration</span>
                  <SelectValue />
                </span>
              </SelectTrigger>
              <SelectContent>
                {configOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.configInterest && (
          <p role="alert" className="mt-1.5 pl-1 text-xs text-destructive">
            {errors.configInterest.message}
          </p>
        )}
      </div>

      <FloatingTextarea
        id="message"
        label="Message"
        icon={MessageSquare}
        rows={4}
        error={errors.message?.message}
        {...register("message")}
      />

      <PremiumButton loading={isSubmitting} className="mt-2">
        Send Enquiry
      </PremiumButton>
    </form>
  );
}

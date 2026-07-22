import { z } from "zod";

/** Loose Indian mobile pattern: optional +91/0 prefix, then a 10-digit number starting 6-9. */
const indianPhoneRegex = /^(?:\+91[\s-]?|0)?[6-9]\d{9}$/;

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name."),
  phone: z
    .string()
    .trim()
    .min(1, "Enter a phone number.")
    .regex(indianPhoneRegex, "Enter a valid 10-digit Indian mobile number."),
  email: z
    .string()
    .trim()
    .min(1, "Enter an email address.")
    .email("Enter a valid email address."),
  configInterest: z.enum(["3bhk-1088", "3bhk-1215", "unsure"], {
    message: "Choose a configuration, or \"Not sure yet\".",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Add a few more details (at least 10 characters)."),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;

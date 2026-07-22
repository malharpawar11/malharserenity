import type { Metadata } from "next";
import { LegalStub } from "@/components/layout/legal-stub";

export const metadata: Metadata = {
  title: "Terms of Service | Malhar Serenity",
};

export default function TermsPage() {
  return <LegalStub title="Terms of Service" />;
}

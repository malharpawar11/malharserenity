import type { Metadata } from "next";
import { LegalStub } from "@/components/layout/legal-stub";

export const metadata: Metadata = {
  title: "Privacy Policy | Malhar Serenity",
};

export default function PrivacyPage() {
  return <LegalStub title="Privacy Policy" />;
}

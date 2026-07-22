import type { Metadata } from "next";
import { ResidencesConfigComparison } from "@/components/sections/residences-config-comparison";
import { ResidencesCalculator } from "@/components/sections/residences-calculator";

export const metadata: Metadata = {
  title: "Residences & Floor Plans | Malhar Serenity",
  description:
    "Compare both 3 BHK configurations at Malhar Serenity — 1088 sq.ft and 1215 sq.ft — and estimate your EMI.",
};

export default function ResidencesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ResidencesConfigComparison />
      <ResidencesCalculator />
    </main>
  );
}

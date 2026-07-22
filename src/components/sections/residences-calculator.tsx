"use client";

import { useMemo, useState } from "react";
import { unitConfigs } from "@/content/site-config";
import { Reveal } from "@/components/motion/reveal";
import { EnquiryCTA } from "@/components/sections/enquiry-cta";

function formatINR(amount: number) {
  return "₹" + Math.round(amount).toLocaleString("en-IN");
}

/** Standard reducing-balance EMI formula. */
function computeEMI(principal: number, annualRatePct: number, tenureYears: number) {
  const monthlyRate = annualRatePct / 12 / 100;
  const months = tenureYears * 12;
  if (monthlyRate === 0) return principal / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * factor) / (factor - 1);
}

const sliderClass =
  "h-11 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-canopy " +
  "[&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none " +
  "[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-canopy [&::-webkit-slider-thumb]:cursor-pointer " +
  "[&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full " +
  "[&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-canopy [&::-moz-range-thumb]:cursor-pointer";

export function ResidencesCalculator() {
  const [configId, setConfigId] = useState(unitConfigs[0].id);
  const selectedConfig = unitConfigs.find((u) => u.id === configId) ?? unitConfigs[0];

  const [loanAmount, setLoanAmount] = useState(() => Math.round(unitConfigs[0].priceValueINR * 0.85));
  const [ratePct, setRatePct] = useState(8.75);
  const [tenureYears, setTenureYears] = useState(20);

  function handleConfigChange(id: string) {
    setConfigId(id);
    const config = unitConfigs.find((u) => u.id === id);
    if (config) setLoanAmount(Math.round(config.priceValueINR * 0.85));
  }

  const emi = useMemo(
    () => computeEMI(loanAmount, ratePct, tenureYears),
    [loanAmount, ratePct, tenureYears]
  );
  const totalPayable = emi * tenureYears * 12;
  const totalInterest = totalPayable - loanAmount;

  const whatsappMessage = `Hi, I'd like to talk about payment plans for the ${selectedConfig.type} (${selectedConfig.carpetAreaSqFt} sq.ft) at Malhar Serenity.`;

  return (
    <>
      <section className="bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl text-basalt sm:text-4xl">
              Estimate your EMI
            </h2>
            <p className="mt-4 text-basalt/70">
              A rough monthly-payment estimate to plan around — not a loan
              offer.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <div
              role="group"
              aria-label="Select a configuration for this estimate"
              className="flex gap-2 rounded-md border border-border bg-secondary/40 p-1"
            >
              {unitConfigs.map((unit) => (
                <button
                  key={unit.id}
                  type="button"
                  aria-pressed={configId === unit.id}
                  onClick={() => handleConfigChange(unit.id)}
                  className={`min-h-11 flex-1 rounded-md px-4 py-2.5 font-sans text-sm font-medium transition-colors ${
                    configId === unit.id
                      ? "bg-canopy text-mist"
                      : "text-basalt/70 hover:bg-secondary"
                  }`}
                >
                  {unit.type} · {unit.carpetAreaSqFt} sq.ft
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 flex flex-col gap-8">
            <div>
              <div className="flex items-baseline justify-between">
                <label htmlFor="loan-amount" className="text-sm font-medium text-basalt">
                  Loan amount
                </label>
                <span className="font-mono text-sm text-canopy">{formatINR(loanAmount)}</span>
              </div>
              <input
                id="loan-amount"
                type="range"
                min={2_000_000}
                max={selectedConfig.priceValueINR}
                step={100_000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className={`mt-3 ${sliderClass}`}
              />
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <label htmlFor="interest-rate" className="text-sm font-medium text-basalt">
                  Interest rate
                </label>
                <span className="font-mono text-sm text-canopy">{ratePct.toFixed(2)}%</span>
              </div>
              <input
                id="interest-rate"
                type="range"
                min={6}
                max={14}
                step={0.05}
                value={ratePct}
                onChange={(e) => setRatePct(Number(e.target.value))}
                className={`mt-3 ${sliderClass}`}
              />
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <label htmlFor="tenure" className="text-sm font-medium text-basalt">
                  Tenure
                </label>
                <span className="font-mono text-sm text-canopy">{tenureYears} yrs</span>
              </div>
              <input
                id="tenure"
                type="range"
                min={5}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className={`mt-3 ${sliderClass}`}
              />
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 grid grid-cols-1 gap-4 rounded-lg border border-border bg-background p-6 sm:grid-cols-3">
            <div className="text-center sm:text-left">
              <dt className="text-xs uppercase tracking-wide text-stone-strong">Monthly EMI</dt>
              <dd className="mt-1 font-mono text-xl text-turmeric-strong">{formatINR(emi)}</dd>
            </div>
            <div className="text-center sm:text-left">
              <dt className="text-xs uppercase tracking-wide text-stone-strong">Total Interest</dt>
              <dd className="mt-1 font-mono text-xl text-basalt">{formatINR(totalInterest)}</dd>
            </div>
            <div className="text-center sm:text-left">
              <dt className="text-xs uppercase tracking-wide text-stone-strong">Total Payable</dt>
              <dd className="mt-1 font-mono text-xl text-basalt">{formatINR(totalPayable)}</dd>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="mt-6 rounded-md border border-turmeric/30 bg-turmeric/10 p-4 text-xs leading-relaxed text-basalt/80">
            Estimated EMI for illustration only, based on the figures above.
            This is not a loan offer, pre-approval, or eligibility check.
            Actual terms depend on your lender, credit profile, and the
            final agreement value.
          </Reveal>
        </div>
      </section>

      <EnquiryCTA
        id="payment-plans"
        heading="Talk to us about payment plans"
        subhead="Loan structuring, down-payment schedule, possession-linked payments — tell us where you are and we'll walk you through it."
        whatsappMessage={whatsappMessage}
        showTrustBullets={false}
      />
    </>
  );
}

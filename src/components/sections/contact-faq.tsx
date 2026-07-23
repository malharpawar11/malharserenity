import { Reveal } from "@/components/motion/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can I schedule a site visit?",
    a: "Yes — site visits are by appointment. Reach out via the form above, WhatsApp, or phone, and we'll arrange a time that works for you.",
  },
  {
    q: "How soon will someone contact me?",
    a: "We reply personally, not through a call centre — there's no scripted queue. As a boutique, developer-led team we can't promise a fixed response window, but WhatsApp is typically the fastest way to reach us.",
  },
  {
    q: "Is there brokerage?",
    a: "This project is marketed directly by Malhar Developers. We don't have a written brokerage policy to publish here yet — ask us directly and we'll give you a straight answer.",
  },
  {
    q: "Can I request floor plans?",
    a: "Sanctioned floor plans aren't published yet. Let us know you're interested via the form and we'll share them the moment they're finalized.",
  },
];

export function ContactFAQ() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
            Before You Ask
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-basalt sm:text-5xl">
            A few common questions.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <Accordion type="single" collapsible className="rounded-3xl border border-basalt/10 bg-card px-2 sm:px-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q} className="border-basalt/10 px-2 py-1.5">
                <AccordionTrigger className="py-5 font-display text-lg text-basalt hover:no-underline sm:text-xl">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-basalt/70">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

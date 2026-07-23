import { Sunrise, Coffee, Route, ShoppingBag, Moon } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { verifiedGeoFacts } from "@/content/site-config";

const moments = [
  {
    time: "Morning",
    icon: Sunrise,
    title: "A walk up Baner Hill",
    copy: "Before the corridor wakes up — open trails, a few hundred feet of elevation, and a skyline view most addresses in Pune West don't get.",
  },
  {
    time: "Midday",
    icon: Coffee,
    title: "Coffee, close by",
    copy: "The neighbourhood's café scene is still filling in — we're not naming one until we can vouch for it.",
  },
  {
    time: "Afternoon",
    icon: Route,
    title: "A short drive to Hinjewadi",
    copy: `${verifiedGeoFacts.baneHinjewadiDriveTime.split(",")[0]} to the IT park, door to desk.`,
  },
  {
    time: "Evening",
    icon: ShoppingBag,
    title: "Balewadi High Street",
    copy: "A short drive for dinner or a walk through the retail strip — inside the same Baner/Balewadi pocket.",
  },
  {
    time: "Night",
    icon: Moon,
    title: "Quiet, back on the hillside",
    copy: "No highway hum, no nightlife strip outside the window — just the street settling down.",
  },
];

export function LocationDayInLife() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-strong">
            A Day Here
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-basalt sm:text-5xl">
            A day at Malhar Serenity.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-basalt/80">
            One illustrative version of an ordinary day — every travel time
            shown is approximate, not a promise.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col">
          {moments.map((moment, i) => (
            <Reveal key={moment.time} delay={i * 0.08}>
              <div className="group flex gap-6 border-t border-basalt/10 py-7 first:border-t-0 sm:gap-10">
                <div className="flex w-20 shrink-0 flex-col items-center gap-3 sm:w-28">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-canopy/10 transition-transform duration-300 group-hover:scale-110">
                    <moment.icon className="h-5 w-5 text-canopy" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-stone-strong">
                    {moment.time}
                  </span>
                </div>
                <div className="pt-2">
                  <p className="font-display text-xl text-basalt sm:text-2xl">{moment.title}</p>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-basalt/70">
                    {moment.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

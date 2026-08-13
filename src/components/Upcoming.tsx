import { upcoming } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Upcoming() {
  return (
    <section id="upcoming" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          Upcoming
        </h2>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {upcoming.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <div className="flex h-full flex-col gap-2 rounded-xl border border-dashed border-black/15 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:border-solid dark:border-white/15">
              <span className="w-fit rounded-full bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent">
                {item.status}
              </span>
              <h3 className="mt-1 font-medium">{item.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/60">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { highlights } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function Highlights() {
  return (
    <section id="highlights" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          Highlights
        </h2>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {highlights.map((item, i) => (
          <Reveal key={item.label} delay={(i % 2) * 80}>
            <div className="group flex h-full flex-col gap-2 rounded-xl border border-black/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 dark:border-white/10">
              <span className="font-mono text-3xl font-semibold tracking-tight text-accent transition-transform duration-300 group-hover:scale-105">
                <CountUp value={item.stat} />
              </span>
              <h3 className="text-sm font-medium text-foreground/90">{item.label}</h3>
              <p className="text-sm leading-relaxed text-foreground/60">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

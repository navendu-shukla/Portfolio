import { highlights } from "@/data/portfolio";

export default function Highlights() {
  return (
    <section id="highlights" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-widest text-foreground/50">
        Highlights
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-2 rounded-xl border border-black/10 p-5 dark:border-white/10"
          >
            <span className="font-mono text-3xl font-semibold tracking-tight">{item.stat}</span>
            <h3 className="text-sm font-medium text-foreground/90">{item.label}</h3>
            <p className="text-sm leading-relaxed text-foreground/60">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-widest text-foreground/50">
        Experience
      </h2>

      <div className="flex flex-col gap-10">
        {experience.map((item) => (
          <div key={`${item.company}-${item.period}`} className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            <span className="shrink-0 font-mono text-sm text-foreground/50 sm:w-36">
              {item.period}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">
                {item.role} · {item.company}
              </h3>
              <ul className="flex flex-col gap-1.5">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground/70">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { experience } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          Experience
        </h2>
      </Reveal>

      <div className="flex flex-col gap-10">
        {experience.map((item, i) => (
          <Reveal key={`${item.company}-${item.period}`} delay={i * 100}>
            <div className="flex flex-col gap-3 border-l-2 border-accent/20 pl-5 sm:flex-row sm:gap-6 sm:border-l-0 sm:pl-0">
              <span className="shrink-0 font-mono text-sm text-foreground/50 sm:w-36">
                {item.period}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium">
                  {item.role} · {item.company}
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {item.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-foreground/70">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

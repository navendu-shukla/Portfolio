import { education } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          Education
        </h2>
      </Reveal>

      <div className="flex flex-col gap-6">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 80}>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
              <span className="shrink-0 font-mono text-sm text-foreground/50 sm:w-36">
                {item.period}
              </span>
              <div>
                <h3 className="font-medium">{item.degree}</h3>
                <p className="text-sm text-foreground/60">{item.school}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

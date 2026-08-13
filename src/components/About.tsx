import { about } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          About
        </h2>
      </Reveal>
      <div className="flex flex-col gap-4">
        {about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 100}>
            <p className="max-w-2xl text-base leading-relaxed text-foreground/80">{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

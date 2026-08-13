import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-widest text-foreground/50">
        About
      </h2>
      <div className="flex flex-col gap-4">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="max-w-2xl text-base leading-relaxed text-foreground/80">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

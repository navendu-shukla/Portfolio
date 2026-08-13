import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-widest text-foreground/50">
        Skills
      </h2>

      <div className="flex flex-col gap-6">
        {skillGroups.map((group) => (
          <div key={group.category} className="flex flex-col gap-2.5 sm:flex-row sm:gap-6">
            <span className="shrink-0 text-sm font-medium text-foreground/80 sm:w-44">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-black/10 px-3 py-1.5 text-sm text-foreground/70 dark:border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

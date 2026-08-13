import { profile } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          Resume
        </h2>
      </Reveal>

      <Reveal delay={80}>
        <div className="flex flex-col items-start gap-5 rounded-xl border border-black/10 p-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
          <div>
            <h3 className="font-medium">Navendu Shukla — Automation QA Leader</h3>
            <p className="mt-1 text-sm text-foreground/60">
              Full resume as a PDF, including complete work history and skills.
            </p>
          </div>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-accent/30"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}

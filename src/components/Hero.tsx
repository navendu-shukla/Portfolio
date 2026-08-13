import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-4xl flex-col gap-6 px-6 pb-20 pt-20 sm:pt-28">
      <p className="animate-fade-in-up font-mono text-sm text-accent">Hi, I&apos;m</p>
      <h1
        className="animate-fade-in-up text-4xl font-semibold tracking-tight sm:text-6xl"
        style={{ animationDelay: "80ms" }}
      >
        {profile.name}
      </h1>
      <h2
        className="animate-fade-in-up text-xl text-foreground/70 sm:text-2xl"
        style={{ animationDelay: "160ms" }}
      >
        {profile.title}
      </h2>
      <p
        className="animate-fade-in-up max-w-xl text-base leading-relaxed text-foreground/70"
        style={{ animationDelay: "240ms" }}
      >
        {profile.tagline}
      </p>
      <p className="animate-fade-in-up font-mono text-sm text-foreground/50" style={{ animationDelay: "300ms" }}>
        {profile.location}
      </p>

      <div className="animate-fade-in-up flex flex-wrap items-center gap-4 pt-2" style={{ animationDelay: "380ms" }}>
        <a
          href="#experience"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-accent/30"
        >
          View my experience
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

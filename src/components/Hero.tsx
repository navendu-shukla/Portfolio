import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-4xl flex-col gap-6 px-6 pb-20 pt-20 sm:pt-28">
      <p className="font-mono text-sm text-foreground/60">Hi, I&apos;m</p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
      <h2 className="text-xl text-foreground/70 sm:text-2xl">{profile.title}</h2>
      <p className="max-w-xl text-base leading-relaxed text-foreground/70">{profile.tagline}</p>
      <p className="font-mono text-sm text-foreground/50">{profile.location}</p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href="#experience"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          View my experience
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

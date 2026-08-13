import { profile } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          Contact
        </h2>
      </Reveal>

      <Reveal delay={80}>
        <p className="max-w-xl text-base leading-relaxed text-foreground/70">
          I&apos;m always open to interesting projects and conversations. The best way to reach me
          is by email or phone.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-accent/30"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="inline-block rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            {profile.phone}
          </a>
        </div>

        <div className="mt-8 flex gap-6 text-sm text-foreground/60">
          {profile.socials.linkedin && (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          )}
          {profile.socials.github && (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              GitHub
            </a>
          )}
          {profile.socials.twitter && (
            <a
              href={profile.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              Twitter
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}

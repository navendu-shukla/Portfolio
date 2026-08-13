import Link from "next/link";
import { blogPosts } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          Blog
        </h2>
      </Reveal>

      <Reveal delay={80}>
        <ul className="flex flex-col divide-y divide-black/10 dark:divide-white/10">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-accent"
              >
                <span className="font-medium">{post.title}</span>
                <span className="shrink-0 text-foreground/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

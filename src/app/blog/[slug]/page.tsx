import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/portfolio";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — Navendu Shukla` : "Blog — Navendu Shukla" };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-20">
      <Link
        href="/"
        className="mb-10 w-fit text-sm text-foreground/60 transition-colors hover:text-accent"
      >
        ← Back to home
      </Link>

      <p className="font-mono text-sm text-accent">Blog</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
      <p className="mt-8 text-lg text-foreground/70">Blog coming soon, stay tuned!</p>
    </main>
  );
}

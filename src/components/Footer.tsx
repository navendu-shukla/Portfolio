import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-4xl px-6 py-8">
      <p className="text-center text-xs text-foreground/40">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </p>
    </footer>
  );
}

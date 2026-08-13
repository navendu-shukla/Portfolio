"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#highlights", label: "Highlights" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          {profile.name}
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden gap-8 text-sm text-foreground/70 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative py-1 transition-colors hover:text-foreground"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-8 w-8 items-center justify-center sm:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="h-px w-5 bg-foreground" />
              <span className="h-px w-5 bg-foreground" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-black/10 px-6 pb-4 text-sm sm:hidden dark:border-white/10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-foreground/70 hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

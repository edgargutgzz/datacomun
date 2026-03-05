"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[var(--color-border)] px-6 py-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between">
        <Link
          href="/"
          className="text-xl tracking-tight"
        >
          <span className="font-bold" style={{color:"#0f172a"}}>data</span><span className="font-bold" style={{color:"#06b6d4"}}>comun</span>
        </Link>

        <ul className="flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors ${
                  pathname.startsWith(href)
                    ? "text-[var(--color-foreground)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

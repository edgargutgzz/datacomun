import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datacomun — Data Design",
};

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      {/* Hero */}
      <section className="mb-24">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-6">
          Data Design Firm
        </p>
        <h1 className="text-5xl font-semibold tracking-tight leading-tight mb-8 max-w-2xl">
          We turn complex data into clear, compelling stories.
        </h1>
        <div className="flex gap-4">
          <Link
            href="/work"
            className="inline-block bg-[var(--color-accent)] text-white text-sm px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
          >
            View our work
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-[var(--color-border)] text-sm px-5 py-2.5 rounded-sm hover:border-[var(--color-foreground)] transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Featured work placeholder */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--color-muted)]">
            Selected Work
          </h2>
          <Link
            href="/work"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
          >
            All projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[var(--color-background)] p-8 flex items-center justify-between group hover:bg-[var(--color-accent-light)] transition-colors"
            >
              <div>
                <p className="font-mono text-xs text-[var(--color-muted)] mb-1">
                  Project 0{i}
                </p>
                <h3 className="text-lg font-medium">Project title goes here</h3>
              </div>
              <span className="text-[var(--color-muted)] group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

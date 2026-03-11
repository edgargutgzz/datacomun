import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About datacomun — a data design firm.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-4">
          About
        </p>
        <h1 className="text-4xl font-semibold tracking-tight max-w-xl">
          We believe data is only as powerful as its clarity.
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-5 text-base leading-relaxed text-[var(--color-foreground)]">
          <p>
            datacomun is a data design firm. We work with organizations to make
            their data legible — through visualization, analysis, and
            communication design.
          </p>
          <p>
            We believe the gap between insight and understanding is a design
            problem. Our work closes that gap.
          </p>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-6">
            Services
          </h2>
          <ul className="space-y-3 text-sm">
            {[
              "Data visualization",
              "Information design",
              "Dashboard design",
              "Data strategy",
              "Reporting systems",
            ].map((s) => (
              <li
                key={s}
                className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

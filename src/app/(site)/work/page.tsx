import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects by datacomun.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-4">
          Work
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Selected projects
        </h1>
      </header>

      {/* Project grid — will be populated from content/work */}
      <div className="grid grid-cols-1 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
        <div className="bg-[var(--color-background)] p-12 text-center text-sm text-[var(--color-muted)]">
          Projects coming soon.
        </div>
      </div>
    </div>
  );
}

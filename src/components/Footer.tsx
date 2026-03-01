export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between text-xs text-[var(--color-muted)]">
        <span className="font-mono uppercase tracking-tight">Datacomun</span>
        <span>{year}</span>
      </div>
    </footer>
  );
}

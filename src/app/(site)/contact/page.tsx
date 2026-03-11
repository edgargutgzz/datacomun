import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with datacomun.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-4">
          Contact
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Let&apos;s work together
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <ContactForm />

        <div className="space-y-8 text-sm">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
              Email
            </p>
            <a
              href="mailto:hello@datacomun.com"
              className="hover:underline underline-offset-4"
            >
              hello@datacomun.com
            </a>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
              Based in
            </p>
            <p>Available remotely worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
}

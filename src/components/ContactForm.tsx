"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setStatus(res.ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <div className="py-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
          Sent
        </p>
        <p className="text-base">
          Thanks — we&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-[var(--color-muted)] mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border border-[var(--color-border)] bg-transparent px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-foreground)] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-[var(--color-muted)] mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-[var(--color-border)] bg-transparent px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-foreground)] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-[var(--color-muted)] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-[var(--color-border)] bg-transparent px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-foreground)] transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[var(--color-accent)] text-white text-sm px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

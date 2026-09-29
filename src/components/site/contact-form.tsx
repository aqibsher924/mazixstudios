"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`,
    );
    window.location.href = `mailto:hello@mazixstudios.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-muted">Name</span>
          <input
            required
            name="name"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-ring"
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">Email</span>
          <input
            required
            type="email"
            name="email"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-ring"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm">
        <span className="text-muted">Company</span>
        <input
          name="company"
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-ring"
        />
      </label>
      <label className="mt-4 block text-sm">
        <span className="text-muted">What do you need built?</span>
        <textarea
          required
          name="message"
          rows={6}
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-ring"
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white"
      >
        Send inquiry
      </button>
      {sent ? (
        <p className="mt-4 text-sm text-muted">
          Your email app should open with the message ready to send.
        </p>
      ) : null}
    </form>
  );
}

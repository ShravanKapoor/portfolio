"use client";

import { useState } from "react";

// Public Web3Forms access key (safe to expose client-side). Manage it at https://web3forms.com.
const WEB3FORMS_ACCESS_KEY = "479dfcf3-cc22-4baf-8a7e-3916c070356f";

type Status = "idle" | "sending" | "success" | "error";
type Errors = { name?: string; email?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClass =
  "w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-text placeholder:text-text-faint hover:border-text-muted transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address.";
    if (!message) next.message = "Please enter a message.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New message from your portfolio",
          name,
          email,
          message,
          botcheck: data.get("botcheck") ? true : "",
        }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full max-w-xl text-left mb-10"
      aria-label="Contact form"
    >
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-5">
        <div>
          <label htmlFor="contact-name" className="font-mono-data text-xs text-text-muted mb-2 block">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={fieldClass}
          />
          {errors.name && (
            <p id="contact-name-error" className="text-xs text-accent mt-1.5">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="font-mono-data text-xs text-text-muted mb-2 block">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={fieldClass}
          />
          {errors.email && (
            <p id="contact-email-error" className="text-xs text-accent mt-1.5">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="font-mono-data text-xs text-text-muted mb-2 block">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            placeholder="How can I help?"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={`${fieldClass} resize-y`}
          />
          {errors.message && (
            <p id="contact-message-error" className="text-xs text-accent mt-1.5">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center rounded-md bg-accent text-bg px-5 py-2.5 text-sm font-medium hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:brightness-100 w-full sm:w-auto"
        >
          {sending ? "Sending…" : "Send message"}
        </button>

        <div role="status" aria-live="polite" className="min-h-5 text-sm text-center">
          {status === "success" && <p className="text-data">Message sent! I&apos;ll get back to you soon.</p>}
          {status === "error" && (
            <p className="text-accent">Something went wrong. Please try again in a moment.</p>
          )}
        </div>
      </div>
    </form>
  );
}

import { profile } from "@/lib/data";

export default function Footer() {
  const emailReady = !profile.email.startsWith("PLACEHOLDER");

  return (
    <footer id="contact" className="mx-auto max-w-5xl px-6 py-20 border-t border-border text-center flex flex-col items-center">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
        Get in touch
      </h2>
      <p className="text-text-muted max-w-xl mb-8">
        {profile.availability}. The fastest way to reach me is email or LinkedIn.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {emailReady ? (
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-md bg-accent text-bg px-5 py-2.5 text-sm font-medium hover:brightness-110 transition"
          >
            {profile.email}
          </a>
        ) : (
          <span className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm text-text-faint">
            Email pending
          </span>
        )}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:border-text-muted transition"
        >
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:border-text-muted transition"
        >
          GitHub
        </a>
      </div>

      <p className="font-mono-data text-xs text-text-faint mt-16">
        {profile.name} · {profile.location}
      </p>
    </footer>
  );
}

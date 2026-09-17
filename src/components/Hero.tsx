import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 text-center flex flex-col items-center">
      <Image
        src="/headshot.jpg"
        alt={profile.name}
        width={128}
        height={128}
        priority
        className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover border border-border mb-6"
      />

      <h1 className="font-display text-4xl sm:text-6xl font-semibold leading-[1.08] tracking-tight max-w-3xl">
        {profile.tagline}
      </h1>

      <p className="mt-6 text-lg text-text-muted max-w-2xl leading-relaxed">
        {profile.subline}
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#work"
          className="inline-flex items-center rounded-md bg-accent text-bg px-5 py-2.5 text-sm font-medium hover:brightness-110 transition"
        >
          See the work
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text hover:border-text-muted transition"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text hover:border-text-muted transition"
        >
          LinkedIn
        </a>
        {profile.resumeUrl && !profile.resumeUrl.startsWith("PLACEHOLDER") && (
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-text-muted hover:text-text underline underline-offset-4"
          >
            Resume (PDF)
          </a>
        )}
      </div>
    </section>
  );
}

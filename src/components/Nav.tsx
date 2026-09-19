import { profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-bg/80 border-b border-border">
      <nav
        aria-label="Primary"
        className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between"
      >
        <a href="#top" className="font-display text-lg font-semibold tracking-tight whitespace-nowrap">
          Shravan Kapoor
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex items-center gap-6 text-sm text-text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-text transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resumeUrl}
            download="Shravan_Kapoor_Resume.pdf"
            className="inline-flex items-center whitespace-nowrap rounded-md bg-accent text-bg px-3 py-1.5 text-sm font-medium hover:brightness-110 transition"
          >
            <span className="lg:hidden">Resume</span>
            <span className="hidden lg:inline">Download resume</span>
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

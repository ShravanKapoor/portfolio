import { projects } from "@/lib/data";

function isPlaceholder(v?: string) {
  return !v || v.startsWith("PLACEHOLDER");
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-20 border-t border-border text-center">
      <div className="flex flex-col items-center gap-1 mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
          Selected work
        </h2>
        <span className="font-mono-data text-sm text-text-faint">
          {String(featured.length).padStart(2, "0")} featured
        </span>
      </div>

      <div>
        {featured.map((p) => (
          <details key={p.slug} className="ledger-row group py-6">
            <summary className="cursor-pointer list-none flex flex-col items-center gap-2">
              <div>
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className="text-text-muted mt-1 max-w-2xl mx-auto">{p.oneLiner}</p>
              </div>
              <span className="font-mono-data text-xs text-text-faint whitespace-nowrap shrink-0 group-open:hidden">
                Expand ↓
              </span>
              <span className="font-mono-data text-xs text-text-faint whitespace-nowrap shrink-0 hidden group-open:inline">
                Collapse ↑
              </span>
            </summary>

            <div className="mt-5 flex flex-col items-center gap-8">
              <div className="max-w-2xl mx-auto">
                <h4 className="text-sm font-medium text-text-muted mb-1">The problem</h4>
                <p className="text-sm leading-relaxed text-text">{p.problem}</p>
                <h4 className="text-sm font-medium text-text-muted mt-4 mb-1">Role</h4>
                <p className="text-sm text-text">{p.role}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-text-muted mb-2">Stack</h4>
                <ul className="flex flex-wrap justify-center gap-2 mb-4">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="font-mono-data text-xs px-2 py-1 rounded border border-border text-text-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col items-center gap-1 text-sm">
                  {!isPlaceholder(p.links.repo) ? (
                    <a
                      href={p.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-data hover:underline underline-offset-4"
                    >
                      View repository
                    </a>
                  ) : (
                    <span className="text-text-faint">Repository link pending</span>
                  )}
                  {p.links.demo && !isPlaceholder(p.links.demo) && (
                    <a
                      href={p.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-data hover:underline underline-offset-4"
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mt-14">
          <h3 className="text-sm font-medium text-text-muted mb-4">Also built</h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {rest.map((p) => (
              <li key={p.slug} className="flex flex-col items-center gap-1 py-2 border-b border-border">
                <span className="text-sm">{p.name}</span>
                {!isPlaceholder(p.links.repo) ? (
                  <a
                    href={p.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-data text-xs text-text-faint hover:text-data shrink-0"
                  >
                    repo
                  </a>
                ) : (
                  <span className="font-mono-data text-xs text-text-faint shrink-0">—</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

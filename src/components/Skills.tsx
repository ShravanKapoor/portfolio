import { skillGroups, exploring } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 border-t border-border text-center">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
        Technical skills
      </h2>

      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <h3 className="font-mono-data text-xs text-data mb-3">{g.label}</h3>
            <ul className="flex flex-wrap justify-center gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="text-sm px-3 py-1.5 rounded border border-border text-text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <h3 className="font-mono-data text-xs text-accent mb-3">Currently exploring</h3>
        <ul className="space-y-1.5">
          {exploring.map((item) => (
            <li key={item} className="text-sm text-text-muted">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

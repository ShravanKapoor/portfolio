import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20 border-t border-border text-center">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
        Experience
      </h2>

      <div>
        {experience.map((e) => (
          <div key={`${e.org}-${e.role}`} className="ledger-row py-6 flex flex-col items-center gap-3">
            <div>
              <h3 className="font-display text-lg font-semibold">{e.org}</h3>
              <p className="text-text-muted text-sm">{e.role}</p>
              <p className="font-mono-data text-xs text-text-faint mt-2">
                {e.location ? `${e.period} · ${e.location}` : e.period}
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-sm leading-relaxed text-text">{e.summary}</p>
              <ul className="flex flex-wrap justify-center gap-2 mt-3">
                {e.stack.map((s) => (
                  <li
                    key={s}
                    className="font-mono-data text-xs px-2 py-1 rounded border border-border text-text-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              {e.note && <p className="text-xs text-text-faint mt-3 italic">{e.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

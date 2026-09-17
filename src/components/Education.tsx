import { education, certifications, achievements } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-20 border-t border-border text-center">
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight mb-6">Education</h2>
          <div>
            {education.map((e) => (
              <div key={e.degree} className="ledger-row py-4">
                <p className="text-sm font-medium">{e.degree}</p>
                <p className="text-sm text-text-muted">{e.school}</p>
                <p className="font-mono-data text-xs text-text-faint mt-1">{e.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight mb-6">
            Certifications
          </h2>
          <div>
            {certifications.map((c) => (
              <div key={c.name} className="ledger-row py-4">
                <p className="text-sm font-medium">
                  {c.name}
                  {c.issuer && <span className="text-text-faint font-normal"> — {c.issuer}</span>}
                </p>
                {c.note && (
                  <p className="text-sm text-text-muted mt-2 leading-relaxed max-w-md mx-auto">{c.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {achievements.length > 0 && (
        <div className="mt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight mb-6">
            Achievements
          </h2>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a.title} className="ledger-row py-3">
                <p className="text-sm font-medium">{a.title}</p>
                <p className="text-sm text-text-muted">{a.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

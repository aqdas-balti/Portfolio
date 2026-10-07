import { skills } from "@/data/profile";
import { Section, Tag, delay } from "./Section";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons = [
  // Backend: server
  <svg key="be" viewBox="0 0 24 24" className="size-5" {...stroke}>
    <rect x="3" y="4" width="18" height="7" rx="2" />
    <rect x="3" y="13" width="18" height="7" rx="2" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </svg>,
  // Frontend: layout
  <svg key="fe" viewBox="0 0 24 24" className="size-5" {...stroke}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M9 9v11" />
  </svg>,
  // Data & infra: database
  <svg key="db" viewBox="0 0 24 24" className="size-5" {...stroke}>
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </svg>,
  // Integrations: plug
  <svg key="in" viewBox="0 0 24 24" className="size-5" {...stroke}>
    <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v4" />
  </svg>,
];

const tints = [
  "from-violet-500 to-fuchsia-500",
  "from-cyan-400 to-sky-500",
  "from-pink-500 to-rose-500",
  "from-amber-400 to-orange-500",
];

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills" subtitle="The tools I use day to day.">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((s, i) => (
          <div key={s.group} data-reveal style={delay((i % 2) * 120)}>
            <div className="spot glass h-full rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span
                  className={`grid size-10 place-items-center rounded-xl bg-linear-to-br text-white shadow-lg shadow-black/30 ${tints[i % tints.length]}`}
                >
                  {icons[i % icons.length]}
                </span>
                <h3 className="font-display text-lg font-bold">{s.group}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

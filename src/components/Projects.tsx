import { projects } from "@/data/profile";
import { ArrowIcon, GitHubIcon } from "./icons";
import { Section, Tag, delay } from "./Section";

const covers = [
  "from-violet-600/50 via-fuchsia-600/20",
  "from-cyan-500/45 via-sky-600/20",
  "from-pink-600/45 via-rose-600/20",
  "from-amber-500/40 via-orange-600/20",
];

export function Projects() {
  return (
    <Section id="projects" index="03" title="Projects" subtitle="Products and projects I've built or helped ship.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <div key={p.title} data-reveal style={delay((i % 2) * 120)}>
            <article className="spot glass group flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1.5">
              <div className={`relative h-36 overflow-hidden border-b border-line bg-linear-to-br to-transparent ${covers[i % covers.length]}`}>
                <div className="grid-fine absolute inset-0 opacity-60" />
                <span className="absolute -bottom-7 right-4 font-display text-[7rem] font-bold leading-none text-white/10 transition-transform duration-500 group-hover:-translate-y-3">
                  0{i + 1}
                </span>
                <span className="glass absolute left-5 top-5 rounded-full px-3 py-1 font-mono text-xs">
                  {p.label}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                  <div className="flex gap-1">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} source code`}
                        className="rounded-lg p-1.5 text-muted hover:text-fg"
                      >
                        <GitHubIcon className="size-5" />
                      </a>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${p.title}`}
                        className="rounded-lg p-1.5 text-muted hover:text-fg"
                      >
                        <ArrowIcon className="size-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5">
                      <span className="text-accent">▹</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </Section>
  );
}

import { projects } from "@/data/profile";
import { ArrowIcon, GitHubIcon } from "./icons";
import { Section, Tag } from "./Section";

export function Projects() {
  return (
    <Section id="projects" index="03" title="Projects">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-accent">{p.label}</p>
                <h3 className="mt-1.5 text-xl font-semibold">{p.title}</h3>
              </div>
              <div className="flex gap-1">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} source code`}
                    className="rounded-md p-1.5 text-muted hover:text-fg"
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
                    className="rounded-md p-1.5 text-muted hover:text-fg"
                  >
                    <ArrowIcon className="size-5" />
                  </a>
                )}
              </div>
            </div>
            <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
            <ul className="mt-4 space-y-1.5 text-sm">
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
          </article>
        ))}
      </div>
    </Section>
  );
}

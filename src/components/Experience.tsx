import { experience } from "@/data/profile";
import { Section, Tag } from "./Section";

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="relative space-y-12 border-l border-line pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span className="absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-accent bg-bg sm:-left-[39px]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">
                {job.role} <span className="text-accent">@ {job.company}</span>
              </h3>
              <p className="font-mono text-xs text-muted">{job.period}</p>
            </div>
            <p className="mt-3 leading-relaxed text-muted">{job.summary}</p>
            <ul className="mt-4 space-y-2.5">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] leading-relaxed">
                  <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {job.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

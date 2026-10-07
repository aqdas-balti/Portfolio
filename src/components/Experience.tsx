import { experience } from "@/data/profile";
import { Section, Tag, delay } from "./Section";

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience" subtitle="Where I've been building production software.">
      <div className="relative">
        <div className="absolute bottom-4 left-3 top-4 w-px -translate-x-1/2 bg-linear-to-b from-violet-500 via-fuchsia-500/50 to-transparent sm:left-4" />
        <ol className="space-y-8">
          {experience.map((job, i) => (
            <li key={job.company} data-reveal style={delay(i * 120)} className="relative pl-10 sm:pl-14">
              <span className="absolute left-0 top-7 grid size-6 place-items-center rounded-full bg-bg-2 ring-1 ring-violet-500/60 sm:size-8">
                <span className="size-2 rounded-full bg-violet-400 shadow-[0_0_14px_3px] shadow-violet-500/70" />
              </span>

              <div className="spot glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">{job.role}</h3>
                    <p className="text-gradient mt-0.5 font-semibold">@ {job.company}</p>
                  </div>
                  <span className="w-fit shrink-0 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 font-mono text-xs text-accent">
                    {job.period}
                  </span>
                </div>

                <p className="mt-4 leading-relaxed text-muted">{job.summary}</p>

                <ul className="mt-5 space-y-3">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed">
                      <span className="mt-[9px] size-1.5 shrink-0 rotate-45 bg-linear-to-br from-violet-400 to-cyan-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

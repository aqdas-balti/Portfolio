import { Background } from "@/components/Background";
import { CopyEmail } from "@/components/CopyEmail";
import { Effects } from "@/components/Effects";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { CheckIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Section, delay } from "@/components/Section";
import { Skills } from "@/components/Skills";
import { TechMarquee } from "@/components/TechMarquee";
import { education, profile } from "@/data/profile";

const focus = [
  "Multi-tenant SaaS architecture",
  "Messaging & third-party integrations",
  "Billing, automation & analytics",
  "Docker-based production ops",
];

export default function Home() {
  return (
    <>
      <Background />
      <Effects />
      <Nav />
      <main>
        <Hero />
        <TechMarquee />

        <Section id="about" index="01" title="About me">
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
            <div data-reveal className="space-y-5 text-[17px] leading-relaxed text-muted">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div data-reveal style={delay(150)}>
              <div className="spot glass rounded-2xl p-6">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                  </span>
                  Currently
                </p>
                <p className="mt-3 font-display text-lg font-bold">Full-Stack Developer at Ezauq</p>
                <p className="mt-1 text-sm text-muted">Building Agentawk, a multi-channel messaging SaaS</p>
                <p className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">Focus</p>
                <ul className="mt-3 space-y-2.5 text-sm">
                  {focus.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <span className="grid size-5 place-items-center rounded-md bg-violet-500/15 text-accent">
                        <CheckIcon className="size-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Experience />
        <Projects />
        <Skills />

        <Section id="education" index="05" title="Education">
          <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
            <div data-reveal>
              <div className="spot glass h-full rounded-2xl p-6 sm:p-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="font-display text-xl font-bold">{education.degree}</h3>
                  <span className="w-fit shrink-0 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 font-mono text-xs text-accent">
                    {education.period}
                  </span>
                </div>
                <p className="mt-2 text-muted">{education.school}</p>
                <p className="mt-4 text-sm">{education.detail}</p>
              </div>
            </div>
            <div data-reveal style={delay(150)}>
              <div className="spot glass h-full rounded-2xl p-6 sm:p-7">
                <h3 className="font-display text-lg font-bold">Certifications</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-muted">
                  {education.certifications.map((c) => (
                    <li key={c} className="flex gap-2.5">
                      <span className="text-accent">▹</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" index="06" title="Contact">
          <div data-reveal>
            <div className="border-anim relative overflow-hidden rounded-3xl p-8 text-center sm:p-14">
              <div className="grid-fine pointer-events-none absolute inset-0 opacity-40" />
              <div className="relative">
                <h3 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
                  Have a role or project in mind? <span className="text-gradient">Let&apos;s talk.</span>
                </h3>
                <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
                  I&apos;m open to full-time and remote opportunities in full-stack or backend
                  development. The quickest way to reach me is email.
                </p>
                <p className="mt-8 break-all font-mono text-base text-accent sm:text-lg">{profile.email}</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white"
                  >
                    <MailIcon /> Send an email
                  </a>
                  <CopyEmail email={profile.email} />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-fg">
                <GitHubIcon className="size-5" />
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-fg">
                <LinkedInIcon className="size-5" />
              </a>
            )}
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-fg">
              <MailIcon className="size-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

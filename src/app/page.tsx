import { CopyEmail } from "@/components/CopyEmail";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Section, Tag } from "@/components/Section";
import { education, profile, skills } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <Section id="about" index="01" title="About">
          <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
            <div className="space-y-4 text-[17px] leading-relaxed text-muted">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">Currently</p>
              <p className="mt-2 font-medium">Full-Stack Developer at Ezauq</p>
              <p className="mt-1 text-sm text-muted">Building Agentawk, a multi-channel messaging SaaS</p>
              <p className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">Focus</p>
              <ul className="mt-2 space-y-1.5 text-sm">
                <li>Multi-tenant SaaS architecture</li>
                <li>Messaging & third-party integrations</li>
                <li>Billing, automation & analytics</li>
                <li>Docker-based production ops</li>
              </ul>
            </div>
          </div>
        </Section>

        <Experience />
        <Projects />

        <Section id="skills" index="04" title="Skills">
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="rounded-xl border border-line bg-surface p-6">
                <h3 className="font-medium">{s.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" index="05" title="Education">
          <div className="grid gap-5 md:grid-cols-[1.6fr_1fr]">
            <div className="rounded-xl border border-line bg-surface p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">{education.degree}</h3>
                <p className="font-mono text-xs text-muted">{education.period}</p>
              </div>
              <p className="mt-2 text-muted">{education.school}</p>
              <p className="mt-4 text-sm">{education.detail}</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-6">
              <h3 className="font-medium">Certifications</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {education.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" index="06" title="Contact">
          <div className="rounded-2xl border border-line bg-surface p-8 sm:p-12">
            <h3 className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Have a role or project in mind? Let&apos;s talk.
            </h3>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              I&apos;m open to full-time and remote opportunities in full-stack or backend
              development. The quickest way to reach me is email.
            </p>
            <p className="mt-6 break-all font-mono text-sm text-accent sm:text-base">{profile.email}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
              >
                <MailIcon /> Send an email
              </a>
              <CopyEmail email={profile.email} />
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex items-center gap-4">
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-fg">
                <GitHubIcon className="size-5" />
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-fg">
                <LinkedInIcon className="size-5" />
              </a>
            )}
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-fg">
              <MailIcon className="size-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

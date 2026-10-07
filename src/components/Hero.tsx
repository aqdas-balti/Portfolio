import { profile } from "@/data/profile";
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44">
        {profile.available && (
          <p className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Open to full-time & remote roles
          </p>
        )}

        <h1
          className="rise text-4xl font-semibold tracking-tight sm:text-6xl"
          style={{ animationDelay: "60ms" }}
        >
          {profile.name}
          <span className="mt-2 block text-muted">{profile.role}.</span>
        </h1>

        <p
          className="rise mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          style={{ animationDelay: "120ms" }}
        >
          {profile.tagline}
        </p>

        <p
          className="rise mt-4 flex items-center gap-1.5 text-sm text-muted"
          style={{ animationDelay: "160ms" }}
        >
          <PinIcon /> {profile.location}
        </p>

        <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "200ms" }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            <MailIcon /> Get in touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-muted"
          >
            View work <ArrowIcon />
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-muted"
            >
              <DownloadIcon /> Resume
            </a>
          )}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center rounded-lg border border-line bg-surface px-3 py-2.5 text-muted transition-colors hover:text-fg"
            >
              <GitHubIcon className="size-5" />
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center rounded-lg border border-line bg-surface px-3 py-2.5 text-muted transition-colors hover:text-fg"
            >
              <LinkedInIcon className="size-5" />
            </a>
          )}
        </div>

        <dl
          className="rise mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4"
          style={{ animationDelay: "260ms" }}
        >
          {profile.highlights.map((h) => (
            <div key={h.label} className="bg-surface p-5">
              <dt className="sr-only">{h.label}</dt>
              <dd className="font-mono text-2xl font-semibold text-accent sm:text-3xl">{h.value}</dd>
              <dd className="mt-1 text-sm text-muted">{h.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

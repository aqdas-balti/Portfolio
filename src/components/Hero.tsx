import Image from "next/image";
import { profile } from "@/data/profile";
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from "./icons";
import { Typewriter } from "./Typewriter";

const chips = [
  { label: "NestJS", dot: "bg-rose-400", pos: "-left-[12%] top-[10%]", delay: "0s" },
  { label: "React", dot: "bg-cyan-400", pos: "-right-[14%] top-[28%]", delay: "-1.5s" },
  { label: "Docker", dot: "bg-sky-400", pos: "-left-[6%] bottom-[12%]", delay: "-3s" },
  { label: "WhatsApp API", dot: "bg-emerald-400", pos: "-right-[8%] bottom-[2%]", delay: "-4.5s" },
];

function stat(value: string) {
  const n = parseInt(value, 10);
  return { n, suffix: value.slice(String(n).length) };
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-8 lg:pt-32">
        <div className="order-2 lg:order-1">
          {profile.available && (
            <p className="rise glass mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Open to full-time & remote roles
            </p>
          )}

          <p className="rise font-mono text-sm text-muted sm:text-base" style={{ animationDelay: "80ms" }}>
            Hi, my name is
          </p>
          <h1
            className="rise mt-2 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
            style={{ animationDelay: "140ms" }}
          >
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p
            className="rise mt-4 h-8 whitespace-nowrap font-mono text-lg sm:h-10 sm:text-2xl"
            style={{ animationDelay: "220ms" }}
          >
            <span className="text-accent">&gt; </span>
            <Typewriter words={profile.roles} />
          </p>

          <p
            className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "300ms" }}
          >
            {profile.tagline}
          </p>

          <p
            className="rise mt-4 flex items-center gap-1.5 text-sm text-muted"
            style={{ animationDelay: "340ms" }}
          >
            <PinIcon /> {profile.location}
          </p>

          <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "400ms" }}>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white"
            >
              <MailIcon /> Let&apos;s talk
            </a>
            <a
              href="#projects"
              className="btn-ghost glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
            >
              View my work <ArrowIcon />
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download
                className="btn-ghost glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
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
                className="btn-ghost glass inline-flex items-center rounded-xl px-3.5 py-3 text-muted hover:text-fg"
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
                className="btn-ghost glass inline-flex items-center rounded-xl px-3.5 py-3 text-muted hover:text-fg"
              >
                <LinkedInIcon className="size-5" />
              </a>
            )}
          </div>
        </div>

        <div className="rise order-1 flex justify-center lg:order-2" style={{ animationDelay: "200ms" }}>
          <div className="relative aspect-square w-44 sm:w-72 lg:w-80">
            <div className="ring-anim absolute inset-0 rounded-full opacity-60 blur-2xl" />
            <div className="ring-anim relative size-full rounded-full p-[3px]">
              <div className="relative grid size-full place-items-center overflow-hidden rounded-full bg-bg-2">
                {profile.photo ? (
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    fill
                    priority
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 288px, 176px"
                    className="object-cover"
                  />
                ) : (
                  <>
                    <div className="grid-fine absolute inset-0 opacity-50" />
                    <span className="text-gradient relative font-display text-6xl font-bold sm:text-8xl">
                      {profile.initials}
                    </span>
                  </>
                )}
              </div>
            </div>

            {chips.map((c) => (
              <span
                key={c.label}
                className={`bob absolute hidden items-center gap-2 rounded-full border border-white/15 bg-bg-2/95 px-3 py-1.5 font-mono text-xs shadow-lg shadow-black/40 backdrop-blur sm:inline-flex ${c.pos}`}
                style={{ animationDelay: c.delay }}
              >
                <span className={`size-1.5 rounded-full ${c.dot}`} />
                {c.label}
              </span>
            ))}
          </div>
        </div>

        <dl
          className="rise order-3 grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-2 lg:mt-6 lg:grid-cols-4"
          style={{ animationDelay: "500ms" }}
        >
          {profile.highlights.map((h) => {
            const { n, suffix } = stat(h.value);
            return (
              <div key={h.label} className="spot glass rounded-2xl p-5 sm:p-6">
                <dt className="sr-only">{h.label}</dt>
                <dd className="text-gradient font-display text-3xl font-bold tabular-nums sm:text-4xl">
                  <span data-count={n} data-suffix={suffix}>
                    {h.value}
                  </span>
                </dd>
                <dd className="mt-1.5 text-sm text-muted">{h.label}</dd>
              </div>
            );
          })}
        </dl>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <span className="flex h-10 w-6 justify-center rounded-full border border-line pt-2">
          <span className="bob h-2 w-1 rounded-full bg-accent" style={{ animationDuration: "1.6s" }} />
        </span>
      </a>
    </section>
  );
}

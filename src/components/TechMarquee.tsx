import { skills } from "@/data/profile";

export function TechMarquee() {
  const items = skills.flatMap((s) => s.items);

  return (
    <div className="marquee border-y border-line bg-white/[0.015] py-5" aria-hidden>
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center pr-10 font-mono text-sm text-muted">
            <span className="mr-10 text-accent">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

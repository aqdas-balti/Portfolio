export function Section({
  id,
  index,
  title,
  subtitle,
  children,
}: {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div data-reveal className="mb-12">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-accent">{index}.</span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <span className="h-px flex-1 bg-linear-to-r from-violet-500/50 via-fuchsia-500/20 to-transparent" />
        </div>
        {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-violet-400/50 hover:text-fg">
      {children}
    </span>
  );
}

// Reveal ke saath stagger delay dene ke liye
export function delay(ms: number) {
  return { "--d": `${ms}ms` } as React.CSSProperties;
}

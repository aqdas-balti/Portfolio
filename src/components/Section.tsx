export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-sm text-accent">{index}</span>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <span className="h-px flex-1 bg-line" />
      </div>
      {children}
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

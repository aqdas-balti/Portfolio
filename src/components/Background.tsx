export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div className="orb -left-[15%] -top-[20%] size-[60vmax] [--c:139_92_246]" />
      <div className="orb -right-[20%] top-[15%] size-[50vmax] [--c:34_211_238] [animation-delay:-8s]" />
      <div className="orb -bottom-[30%] left-[15%] size-[55vmax] [--c:236_72_153] [animation-delay:-16s]" />
      <div className="cursor-glow absolute inset-0" />
    </div>
  );
}

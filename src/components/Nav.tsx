"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      spy.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        ref={bar}
        className="h-0.5 origin-left scale-x-0 bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
      />
      <div className="px-3 pt-3 sm:px-6">
        <nav
          className={`mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border px-5 transition-all duration-300 ${
            scrolled || open
              ? "glass border-line shadow-lg shadow-black/30"
              : "border-transparent"
          }`}
        >
          <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
            <span className="text-gradient">~/</span>aqdas-ali
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    active === l.href ? "bg-white/10 text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 rounded-full p-2 text-muted hover:text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

        {open && (
          <ul className="glass mx-auto mt-2 max-w-5xl rounded-2xl p-2 md:hidden">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base ${
                    active === l.href ? "bg-white/10 text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

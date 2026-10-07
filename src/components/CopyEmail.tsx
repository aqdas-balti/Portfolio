"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="btn-ghost glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
    >
      {copied ? <CheckIcon className="size-4 text-accent" /> : <CopyIcon />}
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}

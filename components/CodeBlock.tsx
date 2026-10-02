"use client";

import { Check, Copy } from "@phosphor-icons/react";
import { type ReactNode, useRef, useState } from "react";

export function CodeBlock({ language, children }: { language: string | null; children: ReactNode }) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  async function copy() {
    const text = preRef.current?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  return (
    <div className="code-block">
      <div className="code-bar">
        <span>{language ?? "código"}</span>
        <button aria-label={copied ? "Código copiado" : "Copiar código"} onClick={copy} type="button">
          {copied ? <Check aria-hidden size={16} weight="bold" /> : <Copy aria-hidden size={16} weight="bold" />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <pre ref={preRef}>{children}</pre>
    </div>
  );
}

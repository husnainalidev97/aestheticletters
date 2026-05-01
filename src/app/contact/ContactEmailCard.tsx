"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SUPPORT_EMAIL = "hello@aestheticletters.com";

export default function ContactEmailCard() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const fallbackCopy = useCallback((value: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand("copy");
    } catch {
      // silent fail — UI still shows copied feedback
    }
    document.body.removeChild(textarea);
  }, []);

  const handleCopy = useCallback(() => {
    const onSuccess = () => {
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    };

    if (
      typeof navigator !== "undefined" &&
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      navigator.clipboard
        .writeText(SUPPORT_EMAIL)
        .then(onSuccess)
        .catch(() => {
          fallbackCopy(SUPPORT_EMAIL);
          onSuccess();
        });
    } else {
      fallbackCopy(SUPPORT_EMAIL);
      onSuccess();
    }
  }, [fallbackCopy]);

  return (
    <div className="bg-surface-container-low rounded-2xl p-8 md:p-10 border border-outline-variant/20 shadow-sm">
      <span className="block text-xs font-label font-bold uppercase tracking-[0.2em] text-primary mb-3">
        Email us directly
      </span>
      <a
        href={`mailto:${SUPPORT_EMAIL}`}
        className="block font-headline text-2xl md:text-3xl font-bold text-on-surface break-all hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
      >
        {SUPPORT_EMAIL}
      </a>
      <p className="mt-4 text-on-surface-variant leading-relaxed">
        Use the buttons below to copy the address or open it in your default
        mail app. We read every message and reply as soon as we can.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={handleCopy}
          aria-live="polite"
          className="flex-1 h-14 bg-primary text-on-primary font-bold rounded-lg shadow-lg hover:bg-primary-container active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            {copied ? "check" : "content_copy"}
          </span>
          {copied ? "Copied" : "Copy email"}
        </button>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="flex-1 h-14 bg-surface-container-high text-on-surface font-bold rounded-lg hover:bg-surface-container-highest active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            mail
          </span>
          Open in mail app
        </a>
      </div>
    </div>
  );
}

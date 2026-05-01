"use client";

import { useEffect } from "react";

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Lobster&family=Monsieur+La+Doulaise&family=League+Script&family=Fleur+De+Leah&family=Style+Script&family=Grey+Qo&family=Neonderthaw&family=Dynalight&family=WindSong&family=Galada&family=Passions+Conflict&family=Lugrasimo&family=Mrs+Saint+Delafield&family=Cherish&family=Inspiration&family=Imperial+Script&family=Lavishly+Yours&family=Engagement&family=Limelight&family=UnifrakturMaguntia&family=Story+Script&family=Bitcount+Grid+Double&display=swap";

/**
 * Loads the fancy Google Fonts stylesheet after the browser has
 * finished its initial paint and is idle. Preconnects are installed
 * immediately so DNS + TCP + TLS handshakes overlap with idle time
 * and are already done by the time the stylesheet is appended.
 */
export default function GoogleFontsLoader() {
  useEffect(() => {
    if (document.querySelector('link[data-fancy-fonts="all"]')) return;

    const preconnects: HTMLLinkElement[] = [];
    const addPreconnect = (href: string, crossOrigin?: string) => {
      if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return;
      const el = document.createElement("link");
      el.rel = "preconnect";
      el.href = href;
      if (crossOrigin) el.crossOrigin = crossOrigin;
      el.dataset.fancyFonts = "preconnect";
      document.head.appendChild(el);
      preconnects.push(el);
    };
    addPreconnect("https://fonts.googleapis.com");
    addPreconnect("https://fonts.gstatic.com", "anonymous");

    let link: HTMLLinkElement | null = null;
    const load = () => {
      link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = GOOGLE_FONTS_URL;
      link.dataset.fancyFonts = "all";
      document.head.appendChild(link);
    };

    const win = window as typeof window & {
      requestIdleCallback?: (
        cb: () => void,
        opts?: { timeout?: number }
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let idleHandle: number | null = null;
    let timeoutHandle: number | null = null;

    if (typeof win.requestIdleCallback === "function") {
      idleHandle = win.requestIdleCallback(load, { timeout: 1500 });
    } else {
      timeoutHandle = window.setTimeout(load, 200);
    }

    return () => {
      if (idleHandle !== null && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) window.clearTimeout(timeoutHandle);
      if (link && link.parentNode) link.parentNode.removeChild(link);
      for (const el of preconnects) {
        if (el.parentNode) el.parentNode.removeChild(el);
      }
    };
  }, []);

  return null;
}

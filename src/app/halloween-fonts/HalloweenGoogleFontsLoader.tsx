"use client";

import { useEffect } from "react";

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Nosifer&family=Butcherman&family=Creepster&family=Eater&family=Jolly+Lodger&family=Bungee+Shade&family=Lacquer&family=Fruktur&family=Metal+Mania&family=Ewert&family=UnifrakturMaguntia&family=MedievalSharp&family=Henny+Penny&family=Flavors&family=Griffy&family=Emblema+One&family=Spirax&family=Warnes&family=Pirata+One&display=swap";

export default function HalloweenGoogleFontsLoader() {
  useEffect(() => {
    if (document.querySelector('link[data-halloween-fonts="all"]')) return;

    const preconnects: HTMLLinkElement[] = [];
    const addPreconnect = (href: string, crossOrigin?: string) => {
      if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return;
      const el = document.createElement("link");
      el.rel = "preconnect";
      el.href = href;
      if (crossOrigin) el.crossOrigin = crossOrigin;
      el.dataset.halloweenFonts = "preconnect";
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
      link.dataset.halloweenFonts = "all";
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

"use client";

import { useEffect } from "react";

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Charm&family=Cookie&family=Meie+Script&family=Mr+Bedfort&family=Norican&family=Ballet&family=Jim+Nightshade&family=Mea+Culpa&family=Pinyon+Script&family=Miss+Fajardose&family=Stalemate&family=Alumni+Sans+Pinstripe&family=Poiret+One&family=Montserrat+Alternates&family=Exo+2&family=Rasa&family=Unica+One&family=Martel&family=MuseoModerno&family=Gelasio&family=Phudu&display=swap";

/**
 * Loads the home-page Google Fonts stylesheet after the browser has
 * finished its initial paint and is idle. Preconnects are installed
 * immediately so DNS + TCP + TLS handshakes overlap with idle time
 * and are already done by the time the stylesheet is appended.
 */
export default function HomeGoogleFontsLoader() {
  useEffect(() => {
    if (document.querySelector('link[data-home-fonts="all"]')) return;

    const preconnects: HTMLLinkElement[] = [];
    const addPreconnect = (href: string, crossOrigin?: string) => {
      if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return;
      const el = document.createElement("link");
      el.rel = "preconnect";
      el.href = href;
      if (crossOrigin) el.crossOrigin = crossOrigin;
      el.dataset.homeFonts = "preconnect";
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
      link.dataset.homeFonts = "all";
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

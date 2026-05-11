"use client";

import { useEffect } from "react";

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Butterfly+Kids&family=Ruge+Boogie&family=Puppies+Play&family=Devonshire&family=Fruktur&family=Petit+Formal+Script&family=Babylonica&family=Dr+Sugiyama&family=Festive&family=DynaPuff&family=Molle:ital@1&family=Chango&family=Spicy+Rice&family=Life+Savers&family=Ribeye+Marrow&family=Combo&family=Fascinate+Inline&family=Crafty+Girls&family=Padyakke+Expanded+One&family=Snowburst+One&family=Raleway+Dots&family=Freckle+Face&family=Elsie+Swash+Caps&family=Spirax&family=Plaster&family=Monofett&family=Warnes&family=Splash&family=Faster+One&family=Sancreek&family=Bigelow+Rules&display=swap";

export default function CuteGoogleFontsLoader() {
  useEffect(() => {
    if (document.querySelector('link[data-cute-fonts="all"]')) return;

    const preconnects: HTMLLinkElement[] = [];
    const addPreconnect = (href: string, crossOrigin?: string) => {
      if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return;
      const el = document.createElement("link");
      el.rel = "preconnect";
      el.href = href;
      if (crossOrigin) el.crossOrigin = crossOrigin;
      el.dataset.cuteFonts = "preconnect";
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
      link.dataset.cuteFonts = "all";
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

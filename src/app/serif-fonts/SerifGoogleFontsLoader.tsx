"use client";

import { useEffect } from "react";

const CRITICAL_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Lora&family=Libre+Baskerville&family=Merriweather&family=Source+Serif+4&family=Crimson+Pro&family=EB+Garamond&family=Cormorant+Garamond&family=Cardo&family=Fraunces&family=Spectral&family=Roboto+Slab&family=Bitter&family=Zilla+Slab&family=Crete+Round&family=Josefin+Slab&family=Old+Standard+TT&family=Playfair+Display&family=Abril+Fatface&display=swap";

const DEFERRED_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=GFS+Didot&family=Oranienbaum&family=Italiana&family=Faustina&family=Noto+Serif&family=Gentium+Plus&family=Tinos&family=Bodoni+Moda&family=DM+Serif+Display&family=DM+Serif+Text&family=Cormorant&family=Gloock&family=Yeseva+One&family=Rozha+One&family=Righteous&family=Ultra&display=swap";

function injectLink(href: string, tag: string): HTMLLinkElement {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.dataset.serifFonts = tag;
  document.head.appendChild(link);
  return link;
}

export default function SerifGoogleFontsLoader() {
  useEffect(() => {
    if (!CRITICAL_FONTS_URL) return;
    if (document.querySelector('link[data-serif-fonts="critical"]')) return;

    const preconnects: HTMLLinkElement[] = [];
    const addPreconnect = (href: string, crossOrigin?: string) => {
      if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return;
      const el = document.createElement("link");
      el.rel = "preconnect";
      el.href = href;
      if (crossOrigin) el.crossOrigin = crossOrigin;
      el.dataset.serifFonts = "preconnect";
      document.head.appendChild(el);
      preconnects.push(el);
    };
    addPreconnect("https://fonts.googleapis.com");
    addPreconnect("https://fonts.gstatic.com", "anonymous");

    const criticalLink = injectLink(CRITICAL_FONTS_URL, "critical");

    let deferredLink: HTMLLinkElement | null = null;

    const win = window as typeof window & {
      requestIdleCallback?: (
        cb: () => void,
        opts?: { timeout?: number }
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let idleHandle: number | null = null;
    let timeoutHandle: number | null = null;

    const loadDeferred = () => {
      if (!DEFERRED_FONTS_URL) return;
      if (document.querySelector('link[data-serif-fonts="deferred"]')) return;
      deferredLink = injectLink(DEFERRED_FONTS_URL, "deferred");
    };

    if (typeof win.requestIdleCallback === "function") {
      idleHandle = win.requestIdleCallback(loadDeferred, { timeout: 3000 });
    } else {
      timeoutHandle = window.setTimeout(loadDeferred, 1000);
    }

    return () => {
      if (idleHandle !== null && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) window.clearTimeout(timeoutHandle);
      if (criticalLink.parentNode) criticalLink.parentNode.removeChild(criticalLink);
      if (deferredLink && deferredLink.parentNode) deferredLink.parentNode.removeChild(deferredLink);
      for (const el of preconnects) {
        if (el.parentNode) el.parentNode.removeChild(el);
      }
    };
  }, []);

  return null;
}

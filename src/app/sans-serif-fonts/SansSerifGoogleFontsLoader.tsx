"use client";

import { useEffect } from "react";

const CRITICAL_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Poppins&family=Montserrat&family=Raleway&family=Comfortaa&family=Josefin+Sans&family=Roboto&family=Open+Sans&family=Lato&family=Inter&family=Nunito&family=Source+Sans+3&family=PT+Sans&family=Cabin&family=DM+Sans&family=Work+Sans&family=Barlow&family=Outfit&family=Manrope&display=swap";

const DEFERRED_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Quicksand&family=Varela+Round&family=Rubik&family=Nunito+Sans&family=Oswald&family=Bebas+Neue&family=Anton&family=Kanit&family=IBM+Plex+Sans&family=Figtree&family=Albert+Sans&family=Sora&family=Roboto+Condensed&family=Barlow+Condensed&family=Saira+Condensed&family=Pathway+Gothic+One&display=swap";

function injectLink(href: string, tag: string): HTMLLinkElement {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.dataset.sansSerifFonts = tag;
  document.head.appendChild(link);
  return link;
}

export default function SansSerifGoogleFontsLoader() {
  useEffect(() => {
    if (!CRITICAL_FONTS_URL) return;
    if (document.querySelector('link[data-sans-serif-fonts="critical"]')) return;

    const preconnects: HTMLLinkElement[] = [];
    const addPreconnect = (href: string, crossOrigin?: string) => {
      if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return;
      const el = document.createElement("link");
      el.rel = "preconnect";
      el.href = href;
      if (crossOrigin) el.crossOrigin = crossOrigin;
      el.dataset.sansSerifFonts = "preconnect";
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
      if (document.querySelector('link[data-sans-serif-fonts="deferred"]')) return;
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

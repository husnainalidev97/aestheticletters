"use client";

import { useEffect } from "react";

// Batch 1 — Humanist Sans + Geometric (first two categories, loaded immediately)
const CRITICAL_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans&family=Lato&family=Source+Sans+3&family=Cabin&family=Ubuntu&family=Mukta&family=Oxygen&family=PT+Sans&family=Mulish&family=Be+Vietnam+Pro&family=Hind&family=Overpass&family=Red+Hat+Display&family=Asap&family=Thasadith&family=Ysabeau&family=Instrument+Sans&family=Poppins&family=Montserrat&family=Raleway&family=DM+Sans&family=Josefin+Sans&family=Manrope&family=Funnel+Sans&family=Geom&family=Sora&family=Unbounded&family=Jost&family=Urbanist&family=Lexend&family=Exo+2&family=Encode+Sans&family=Varela+Round&family=M+PLUS+1p&family=Cantarell&display=swap";

// Batch 2 — Neo-Grotesque + Rounded + Superellipse + Grotesque + Glyphic (deferred)
const DEFERRED_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Roboto&family=Arimo&family=Public+Sans&family=Noto+Sans+Display&family=Epilogue&family=Archivo&family=Familjen+Grotesk&family=Hanken+Grotesk&family=Onest&family=Albert+Sans&family=Nunito&family=Rubik&family=Fredoka&family=Phudu&family=M+PLUS+Rounded+1c&family=Baloo+2&family=Rethink+Sans&family=Grandstander&family=Space+Grotesk&family=Bricolage+Grotesque&family=BIZ+UDPGothic&family=Work+Sans&family=Chivo&family=Abel&family=Libre+Franklin&family=Yanone+Kaffeesatz&family=Titillium+Web&family=Heebo&family=IBM+Plex+Sans&family=Faculty+Glyphic&family=Aboreto&family=Marcellus&display=swap";

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

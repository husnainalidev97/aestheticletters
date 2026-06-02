"use client";

import { useEffect } from "react";

// Batch 1 — Humanist Sans + Geometric (first 4 categories, loaded immediately)
const CRITICAL_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans&family=Lato&family=Source+Sans+3&family=Cabin&family=Ubuntu&family=Mukta&family=Oxygen&family=PT+Sans&family=Mulish&family=Be+Vietnam+Pro&family=Hind&family=Overpass&family=Red+Hat+Display&family=Asap&family=Thasadith&family=Ysabeau&family=Instrument+Sans&family=Poppins&family=Montserrat&family=Raleway&family=DM+Sans&family=Josefin+Sans&family=Manrope&family=Funnel+Sans&family=Geom&family=Sora&family=Unbounded&family=Jost&family=Urbanist&family=Lexend&family=Exo+2&family=Encode+Sans&family=Varela+Round&family=M+PLUS+1p&family=Cantarell&display=swap";

// Batch 2 — Neo-Grotesque + Rounded + Superellipse + Glyphic + Grotesque (loaded on demand)
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

interface Props {
  loadDeferred?: boolean;
}

export default function SansSerifGoogleFontsLoader({ loadDeferred: shouldLoadDeferred = false }: Props) {
  // Load critical fonts (first 4 categories) on mount
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

    return () => {
      if (criticalLink.parentNode) criticalLink.parentNode.removeChild(criticalLink);
      for (const el of preconnects) {
        if (el.parentNode) el.parentNode.removeChild(el);
      }
    };
  }, []);

  // Load deferred fonts (remaining categories) only when user expands
  useEffect(() => {
    if (!shouldLoadDeferred) return;
    if (!DEFERRED_FONTS_URL) return;
    if (document.querySelector('link[data-sans-serif-fonts="deferred"]')) return;

    const deferredLink = injectLink(DEFERRED_FONTS_URL, "deferred");

    return () => {
      if (deferredLink.parentNode) deferredLink.parentNode.removeChild(deferredLink);
    };
  }, [shouldLoadDeferred]);

  return null;
}

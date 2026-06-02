"use client";

import { useEffect } from "react";

// Tier 1 — Above-the-fold fonts (top of each visible category, loaded immediately)
const TIER1_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans&family=Lato&family=Source+Sans+3&family=Poppins&family=Montserrat&family=Raleway&family=DM+Sans&display=swap";

// Tier 2 — Remaining Humanist Sans + Geometric fonts (loaded after idle)
const TIER2_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Cabin&family=Ubuntu&family=Mukta&family=Oxygen&family=PT+Sans&family=Mulish&family=Be+Vietnam+Pro&family=Hind&family=Overpass&family=Red+Hat+Display&family=Asap&family=Thasadith&family=Ysabeau&family=Instrument+Sans&family=Josefin+Sans&family=Manrope&family=Funnel+Sans&family=Geom&family=Sora&family=Unbounded&family=Jost&family=Urbanist&family=Lexend&family=Exo+2&family=Encode+Sans&family=Varela+Round&family=M+PLUS+1p&family=Cantarell&display=swap";

// Tier 3 — Neo-Grotesque + Rounded + Superellipse + Glyphic + Grotesque (loaded on demand)
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
  // Tier 1 — above-the-fold fonts loaded immediately
  useEffect(() => {
    if (document.querySelector('link[data-sans-serif-fonts="tier1"]')) return;
    const tier1Link = injectLink(TIER1_FONTS_URL, "tier1");
    return () => {
      if (tier1Link.parentNode) tier1Link.parentNode.removeChild(tier1Link);
    };
  }, []);

  // Tier 2 — remaining initial-category fonts loaded after browser is idle
  useEffect(() => {
    if (document.querySelector('link[data-sans-serif-fonts="tier2"]')) return;
    let cancelled = false;
    const load = () => {
      if (!cancelled && !document.querySelector('link[data-sans-serif-fonts="tier2"]')) {
        injectLink(TIER2_FONTS_URL, "tier2");
      }
    };
    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(load);
      return () => { cancelled = true; cancelIdleCallback(id); };
    }
    const timer = setTimeout(load, 100);
    return () => { cancelled = true; clearTimeout(timer); };
  }, []);

  // Tier 3 — remaining categories loaded only when user clicks "Explore More"
  useEffect(() => {
    if (!shouldLoadDeferred) return;
    if (document.querySelector('link[data-sans-serif-fonts="deferred"]')) return;
    const deferredLink = injectLink(DEFERRED_FONTS_URL, "deferred");
    return () => {
      if (deferredLink.parentNode) deferredLink.parentNode.removeChild(deferredLink);
    };
  }, [shouldLoadDeferred]);

  return null;
}

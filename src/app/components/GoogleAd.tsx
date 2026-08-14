"use client";

import { useEffect, useRef } from "react";

const AD_CLIENT = "ca-pub-5520146667836147";

export interface GoogleAdProps {
  /** AdSense ad unit slot ID. When omitted, nothing is rendered. */
  slot?: string;
  /** General shape the responsive unit should conform to. */
  format?: "auto" | "rectangle" | "vertical" | "horizontal";
  /** Whether the ad may expand to full width on mobile. */
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function GoogleAd({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  style,
}: GoogleAdProps) {
  const ref = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (!slot || typeof window === "undefined") return;
    try {
      window.adsbygoogle?.push({});
    } catch {
      // Ignore errors from AdSense not being loaded or consent still pending.
      // ConsentAwareScripts will trigger a fresh push once ads are allowed.
    }
  }, [slot]);

  if (!slot) return null;

  return (
    <ins
      ref={ref}
      className={`adsbygoogle ${className}`}
      style={{ display: "block", ...style }}
      data-ad-client={AD_CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    />
  );
}

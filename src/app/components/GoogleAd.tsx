"use client";

import { useEffect, useRef } from "react";
import { useConsent } from "./ConsentProvider";

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
  const { adsEnabled } = useConsent();
  const ref = useRef<HTMLModElement>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (!adsEnabled || !slot || typeof window === "undefined" || pushedRef.current) return;
    pushedRef.current = true;
    // Initialize the AdSense queue if the script has not loaded yet; this lets
    // any consent-aware push() calls that happen before adsbygoogle.js finishes
    // loading stay queued and get processed once the script is ready.
    window.adsbygoogle = window.adsbygoogle || [];
    try {
      window.adsbygoogle.push({});
    } catch {
      // Ignore AdSense not being available yet.
    }
  }, [slot, adsEnabled]);

  if (!adsEnabled || !slot) return null;

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

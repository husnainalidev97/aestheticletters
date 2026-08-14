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
    const adsbygoogle = window.adsbygoogle;
    // Only push when ads are explicitly allowed (pauseAdRequests === 0).
    // When paused/undefined, ConsentAwareScripts will trigger the push
    // once consent is granted.
    if (adsbygoogle && adsbygoogle.pauseAdRequests === 0) {
      try {
        adsbygoogle.push({});
      } catch {
        // Ignore AdSense not being available yet.
      }
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

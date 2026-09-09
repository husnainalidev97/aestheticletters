"use client";

import GoogleAd from "./GoogleAd";
import { useConsent } from "./ConsentProvider";
import { DEFAULT_ADSENSE_SLOT } from "@/lib/ads";

interface AdSectionProps {
  /** AdSense ad unit slot ID. Defaults to the site's shared display unit. */
  slot?: string;
  /** Classes for the outer section; controls spacing around the unit. */
  className?: string;
}

export default function AdSection({
  slot = DEFAULT_ADSENSE_SLOT,
  className = "my-14 px-4 md:px-[150px]",
}: AdSectionProps) {
  const { adsEnabled } = useConsent();
  if (!adsEnabled) return null;

  return (
    <section className={className}>
      <div className="w-full min-h-[150px] bg-surface-container-low flex items-center justify-center rounded-xl overflow-hidden border-none">
        <GoogleAd
          slot={slot}
          format="auto"
          responsive
          className="w-full h-[150px]"
        />
      </div>
    </section>
  );
}

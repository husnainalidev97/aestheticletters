"use client";

import dynamic from "next/dynamic";

const HalloweenFontsClient = dynamic(() => import("./HalloweenFontsClient"), {
  loading: () => (
    <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-6 md:pb-8">
      <div className="w-full max-w-3xl mx-auto space-y-3 md:space-y-5">
        <div className="h-[56px] md:h-[120px] rounded-xl bg-surface-container-low animate-pulse" />
        <div className="h-[52px] rounded-2xl bg-surface-container-low animate-pulse" />
        <div className="h-[48px] rounded-xl bg-surface-container-low animate-pulse" />
      </div>
    </section>
  ),
});

export default HalloweenFontsClient;

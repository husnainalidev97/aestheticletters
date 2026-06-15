"use client";

import dynamic from "next/dynamic";

const FancyFontsClient = dynamic(() => import("./FancyFontsClient"), {
  loading: () => (
    <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-6 md:pb-8">
      <div className="w-full max-w-3xl mx-auto h-[280px] rounded-xl bg-surface-container-low animate-pulse" />
    </section>
  ),
});

export default FancyFontsClient;

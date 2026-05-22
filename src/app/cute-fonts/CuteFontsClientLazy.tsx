"use client";

import dynamic from "next/dynamic";

const CuteFontsClient = dynamic(() => import("./CuteFontsClient"), {
  ssr: false,
  loading: () => (
    <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-16">
      <div className="w-full max-w-3xl mx-auto h-[280px] rounded-xl bg-surface-container-low animate-pulse" />
    </section>
  ),
});

export default CuteFontsClient;

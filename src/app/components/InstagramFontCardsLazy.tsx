"use client";

import dynamic from "next/dynamic";

const InstagramFontCards = dynamic(() => import("./InstagramFontCards"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[600px] md:min-h-[800px]">
      {/* Generator textarea skeleton */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-6 md:pb-8">
        <div className="w-full max-w-3xl mx-auto space-y-3 md:space-y-5">
          <div className="h-[56px] md:h-[120px] rounded-xl bg-surface-container-low animate-pulse" />
          <div className="h-[52px] rounded-2xl bg-surface-container-low animate-pulse" />
          <div className="h-[40px] rounded-xl bg-surface-container-low animate-pulse" />
        </div>
      </section>
      {/* Card skeletons */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-[300px] rounded-xl bg-surface-container-low animate-pulse" />
          ))}
        </div>
      </section>
    </div>
  ),
});

export default InstagramFontCards;

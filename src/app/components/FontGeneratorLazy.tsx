"use client";

import dynamic from "next/dynamic";

const FontGenerator = dynamic(() => import("./FontGenerator"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[600px] md:min-h-[900px]">
      {/* Header + Generator skeleton */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
        <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight text-on-background mb-2 md:mb-3">
          Aesthetic Fonts Copy and Paste
        </h1>
        <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 text-sm md:text-lg">
          Give your words a fresh and modern look with over 120 aesthetic
          fonts, perfect for quotes, creative posts, and visual storytelling.
        </p>
        <div className="w-full max-w-3xl mx-auto space-y-3 md:space-y-5">
          {/* Textarea skeleton */}
          <div className="h-[56px] md:h-[120px] rounded-xl bg-surface-container-low animate-pulse" />
          {/* Controls bar skeleton */}
          <div className="h-[52px] rounded-2xl bg-surface-container-low animate-pulse" />
          {/* Category jump links skeleton */}
          <div className="h-[40px] rounded-xl bg-surface-container-low animate-pulse" />
        </div>
      </section>
      {/* Font cards grid skeleton */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-[280px] rounded-xl bg-surface-container-low animate-pulse" />
          ))}
        </div>
      </section>
    </div>
  ),
});

export default FontGenerator;

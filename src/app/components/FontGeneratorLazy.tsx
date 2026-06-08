"use client";

import dynamic from "next/dynamic";

const FontGenerator = dynamic(() => import("./FontGenerator"), {
  ssr: false,
  loading: () => (
    <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
      <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight text-on-background mb-2 md:mb-3">
        Aesthetic Fonts
      </h1>
      <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 text-sm md:text-lg">
        Give your words a fresh and modern look with over 120 aesthetic
        fonts, perfect for quotes, creative posts, and visual storytelling.
      </p>
      <div className="w-full max-w-3xl mx-auto h-[200px] rounded-xl bg-surface-container-low animate-pulse" />
    </section>
  ),
});

export default FontGenerator;

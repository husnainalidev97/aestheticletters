"use client";

import dynamic from "next/dynamic";
import { tiktokFontCategories, TIKTOK_SYMBOL_GROUPS } from "../lib/tiktokFontStyles";
import type { WrapSymbol } from "../lib/bigTextFontStyles";

const FontGenerator = dynamic(() => import("./FontGenerator"), {
  loading: () => (
    <div className="min-h-[600px] md:min-h-[900px]">
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
        <div className="w-full max-w-3xl mx-auto space-y-3 md:space-y-5">
          <div className="h-[56px] md:h-[120px] rounded-xl bg-surface-container-low animate-pulse" />
          <div className="h-[52px] rounded-2xl bg-surface-container-low animate-pulse" />
          <div className="h-[40px] rounded-xl bg-surface-container-low animate-pulse" />
        </div>
      </section>
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

interface TikTokFontGeneratorProps {
  totalFontStyles: number;
}

const tiktokWrapSymbols: WrapSymbol[] = TIKTOK_SYMBOL_GROUPS.flatMap((group) =>
  group.symbols.map((symbol, i) => ({
    label: `${group.name} ${i + 1}`,
    symbol,
  }))
);

export default function TikTokFontGenerator({ totalFontStyles }: TikTokFontGeneratorProps) {
  return (
    <FontGenerator
      totalFontStyles={totalFontStyles}
      hideHeader
      hideExploreButton
      categories={tiktokFontCategories}
      defaultText="TikTok Fonts"
      initialVisibleCategories={4}
      wrapSymbols={tiktokWrapSymbols}
    />
  );
}

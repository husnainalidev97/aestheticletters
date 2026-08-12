"use client";

import { tiktokFontCategories } from "../lib/tiktokFontStyles";
import FontGenerator from "./FontGenerator";

interface TikTokFontGeneratorProps {
  totalFontStyles: number;
}

export default function TikTokFontGenerator({ totalFontStyles }: TikTokFontGeneratorProps) {
  return (
    <FontGenerator
      totalFontStyles={totalFontStyles}
      hideHeader
      hideExploreButton
      categories={tiktokFontCategories}
      defaultText="TikTok Fonts"
      initialVisibleCategories={4}
    />
  );
}

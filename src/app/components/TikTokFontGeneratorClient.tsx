"use client";

import TikTokFontGenerator from "./TikTokFontGenerator";

interface TikTokFontGeneratorClientProps {
  totalFontStyles: number;
}

export default function TikTokFontGeneratorClient({ totalFontStyles }: TikTokFontGeneratorClientProps) {
  return <TikTokFontGenerator totalFontStyles={totalFontStyles} />;
}

"use client";

import FontGenerator from "./FontGenerator";
import { boldFontCategories } from "../lib/boldFontStyles";

interface BoldFontGeneratorProps {
  totalFontStyles: number;
}

export default function BoldFontGenerator({ totalFontStyles }: BoldFontGeneratorProps) {
  return (
    <FontGenerator
      totalFontStyles={totalFontStyles}
      hideHeader
      hideExploreButton
      categories={boldFontCategories}
      defaultText="Bold Fonts"
    />
  );
}

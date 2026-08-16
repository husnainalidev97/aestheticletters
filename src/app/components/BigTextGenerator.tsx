"use client";

import FontGenerator from "./FontGenerator";
import { bigTextFontCategories, bigTextComboCategories, bigTextWrapSymbols } from "../lib/bigTextFontStyles";

interface BigTextGeneratorProps {
  totalFontStyles: number;
}

export default function BigTextGenerator({ totalFontStyles }: BigTextGeneratorProps) {
  return (
    <FontGenerator
      totalFontStyles={totalFontStyles}
      hideHeader
      hideExploreButton
      categories={bigTextFontCategories}
      defaultText="Big Text"
      enableScalePreview
      wrapSymbols={bigTextWrapSymbols}
      comboCategories={bigTextComboCategories}
      hideJumpLinks
      hideDownload
    />
  );
}

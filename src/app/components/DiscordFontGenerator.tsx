"use client";

import FontGenerator from "./FontGenerator";
import { discordFontCategories } from "../lib/discordFontStyles";

interface DiscordFontGeneratorProps {
  totalFontStyles: number;
}

export default function DiscordFontGenerator({ totalFontStyles }: DiscordFontGeneratorProps) {
  return (
    <FontGenerator
      totalFontStyles={totalFontStyles}
      hideHeader
      hideExploreButton
      categories={discordFontCategories}
      defaultText="Discord Fonts"
    />
  );
}

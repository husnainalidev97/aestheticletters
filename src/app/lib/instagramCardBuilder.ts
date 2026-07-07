import {
  renderVariation,
  type FontVariation,
  type SpacingMode,
} from "./fontEngine";

export interface CardDef {
  name: string;
  description: string;
  styles: { label: string; gen: (T: string) => string }[];
}

/** Build a generator function from a FontVariation descriptor */
export function v(
  baseId: string,
  textureOrMarks: string | string[] | null = null,
  decoratorOrPair: string | { prefix: string; suffix: string } | null = null,
  spacing: SpacingMode = "none",
): (text: string) => string {
  const variation: FontVariation = {
    label: "",
    baseId,
    textureId: typeof textureOrMarks === "string" ? textureOrMarks : null,
    marks: Array.isArray(textureOrMarks) ? textureOrMarks : null,
    decoratorId: typeof decoratorOrPair === "string" ? decoratorOrPair : null,
    decoratorPair: typeof decoratorOrPair === "object" && decoratorOrPair !== null && "prefix" in decoratorOrPair ? decoratorOrPair : null,
    spacing,
  };
  return (text: string) => renderVariation(text, variation);
}

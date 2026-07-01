import { fontCategories } from "./fontStyles";
import { fancyFontCategories } from "./fancyFontStyles";
import { stylishFontCategories } from "./stylishFontStyles";
import { cuteFontCategories } from "./cuteFontStyles";
import { halloweenFontCategories } from "./halloweenFontStyles";
import { facebookFontCategories } from "./facebookFontStyles";
import { cursiveUnicodeStyles } from "../cursive-fonts/cursiveUnicodeStyles";
import { serifUnicodeCategories, serifFontCategories } from "./serifFontStyles";
import { sansSerifUnicodeCategories } from "./sansSerifFontStyles";
import { numberFontCategories } from "./numberFontStyles";
import { boldFontCategories } from "./boldFontStyles";
import { twitterFontCategories } from "./twitterFontStyles";

// Instagram font cards are in a "use client" component and cannot be imported
// at static build time. Count is derived from 12 categories × ~10 styles each.
const INSTAGRAM_FONT_STYLE_COUNT = 121;

/**
 * Dynamically counts every font style registered across all data files.
 * Keeps the displayed number in sync whenever new styles are added.
 */
export function getTotalFontStyleCount(): number {
  const homeCount = fontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const fancyCount = fancyFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const stylishCount = stylishFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const cuteCount = cuteFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const halloweenCount = halloweenFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const facebookCount = facebookFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const cursiveCount = Object.values(cursiveUnicodeStyles).reduce(
    (sum, styles) => sum + styles.length,
    0,
  );
  const serifCount = serifUnicodeCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  ) + serifFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const sansSerifCount = sansSerifUnicodeCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const numberCount = numberFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const boldCount = boldFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const twitterCount = twitterFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  return homeCount + fancyCount + stylishCount + cuteCount + halloweenCount + facebookCount + cursiveCount + INSTAGRAM_FONT_STYLE_COUNT + serifCount + sansSerifCount + numberCount + boldCount + twitterCount;
}

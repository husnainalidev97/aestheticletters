import { fontCategories } from "./fontStyles";
import { fancyFontCategories } from "./fancyFontStyles";
import { stylishFontCategories } from "./stylishFontStyles";
import { cuteFontCategories } from "./cuteFontStyles";
import { halloweenFontCategories } from "./halloweenFontStyles";
import { facebookFontCategories } from "./facebookFontStyles";
import { cursiveUnicodeStyles } from "../cursive-fonts/cursiveUnicodeStyles";
import { serifUnicodeCategories } from "./serifFontStyles";
import { sansSerifUnicodeCategories } from "./sansSerifFontStyles";
import { numberFontCategories } from "./numberFontStyles";
import { boldFontCategories } from "./boldFontStyles";
import { bigTextFontCategories, bigTextComboCategories } from "./bigTextFontStyles";
import { twitterFontCategories } from "./twitterFontStyles";
import { christmasFontCategories } from "./christmasFontStyles";
import { weirdFontCategories } from "./weirdFontStyles";
import { discordFontCategories } from "./discordFontStyles";
import { preppyFontCategories } from "./preppyFontStyles";
import instagramDeferredCardDefs from "./instagramCardDefsDeferred";

// Instagram card defs are split: the first 3 categories (30 styles) live in the
// InstagramFontCards client component, and the remaining 9 categories live in the
// deferred data file. We count both here and avoid importing a "use client" file.
const INSTAGRAM_INITIAL_STYLE_COUNT = 30;

/**
 * Dynamically counts every font style registered across all tool data files.
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
  const bigTextCount = bigTextFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  ) + bigTextComboCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const twitterCount = twitterFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const christmasCount = christmasFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const weirdCount = weirdFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const discordCount = discordFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const preppyCount = preppyFontCategories.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const instagramDeferredCount = instagramDeferredCardDefs.reduce(
    (sum, cat) => sum + cat.styles.length,
    0,
  );
  const instagramCount = INSTAGRAM_INITIAL_STYLE_COUNT + instagramDeferredCount;

  return (
    homeCount +
    fancyCount +
    stylishCount +
    cuteCount +
    halloweenCount +
    facebookCount +
    cursiveCount +
    instagramCount +
    serifCount +
    sansSerifCount +
    numberCount +
    boldCount +
    bigTextCount +
    twitterCount +
    christmasCount +
    weirdCount +
    discordCount +
    preppyCount
  );
}

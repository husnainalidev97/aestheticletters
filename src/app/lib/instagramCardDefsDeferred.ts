import { v, type CardDef } from "./instagramCardBuilder";

const deferredCardDefs: CardDef[] = [
  /* ═══ 4. Minimal Instagram Fonts ═══ */
  {
    name: "Minimal Instagram Fonts",
    description: "Hair & thin spaces for maximum editorial elegance",
    styles: [
      { label: "Whisper", gen: (T) => v("superscript", null, null, "hair")(T) },
      { label: "Silk Italic", gen: (T) => v("italic", null, null, "thin")(T) },
      { label: "Cloud Script", gen: (T) => v("script", null, null, "hair")(T) },
      { label: "Mist Sans Bold", gen: (T) => v("sans-bold", null, null, "hair")(T) },
      { label: "Zen Caps", gen: (T) => v("small-caps", null, null, "thin")(T) },
      { label: "Double-Struck Luxury", gen: (T) => v("double-struck")(T) },
      { label: "Round Minimal", gen: (T) => v("italic", null, "round-box")(T) },
      { label: "White Corner", gen: (T) => v("sans-italic", null, "white-corner")(T) },
    ],
  },
  /* ═══ 5. Instagram Script Fonts ═══ */
  {
    name: "Instagram Script Fonts",
    description: "Calligraphic layering with combining marks",
    styles: [
      { label: "Ink Drop", gen: (T) => v("script", null, { prefix: "•", suffix: "•" })(T) },
      { label: "Quill Tip", gen: (T) => v("bold-script", null, "pencil")(T) },
      { label: "Calligraphy Arc", gen: (T) => v("script", null, { prefix: "⌜", suffix: "⌝" })(T) },
      { label: "Flourish Pen", gen: (T) => v("bold-script", null, { prefix: "❦", suffix: "❦" })(T) },
      { label: "Feather Stroke", gen: (T) => v("script", null, { prefix: "─", suffix: "─" })(T) },
      { label: "Wax Seal", gen: (T) => v("bold-script", null, { prefix: "◆", suffix: "◆" })(T) },
      { label: "Vintage Nib", gen: (T) => v("script", null, { prefix: "◇", suffix: "◇" })(T) },
      { label: "Velvet Stroke", gen: (T) => v("script", null, { prefix: "~", suffix: "~" })(T) },
      { label: "Sparkle Script", gen: (T) => v("script", null, "sparkle")(T) },
    ],
  },
  /* ═══ 6. Adorable Instagram Fonts ═══ */
  {
    name: "Adorable Instagram Fonts",
    description: "Playful patterns with bouncy combining effects",
    styles: [
      { label: "Bubbly Dots", gen: (T) => v("bold", null, { prefix: "⊹", suffix: "⊹" })(T) },
      { label: "Bouncy Ring", gen: (T) => v("bold", null, { prefix: "○", suffix: "○" })(T) },
      { label: "Confetti Mix", gen: (T) => v("sans-bold", null, { prefix: "✶", suffix: "✶" })(T) },
      { label: "Sprinkle Dot", gen: (T) => v("bold-script", null, { prefix: "·", suffix: "·" })(T) },
      { label: "Candy Thin", gen: (T) => v("small-caps", "dot-above", null, "thin")(T) },
      { label: "Giggly Wave", gen: (T) => v("italic", null, { prefix: "〰", suffix: "〰" })(T) },
      { label: "Star Bounce", gen: (T) => v("bold-script", null, "star-outline")(T) },
      { label: "Wave Dash", gen: (T) => v("small-caps", null, "wave-dash")(T) },
      { label: "Dizzy Swap", gen: (T) => v("bold", null, { prefix: "✧", suffix: "✧" })(T) },
      { label: "Poppy Caps", gen: (T) => v("small-caps", ["\u0307", "\u0330"])(T) },
    ],
  },
  /* ═══ 7. Decorative Instagram Fonts ═══ */
  {
    name: "Decorative Instagram Fonts",
    description: "Triple-stacked ornamental combining effects",
    styles: [
      { label: "Triple Crown", gen: (T) => v("bold", null, { prefix: "♛", suffix: "♛" })(T) },
      { label: "Double Box", gen: (T) => v("bold", null, "double-box")(T) },
      { label: "Florette Bold", gen: (T) => v("bold", null, "florette")(T) },
      { label: "Gilded Fraktur", gen: (T) => v("fraktur", null, { prefix: "✦", suffix: "✦" })(T) },
      { label: "Mosaic Pattern", gen: (T) => v("bold", null, { prefix: "▣", suffix: "▣" })(T) },
      { label: "Stained Glass", gen: (T) => v("double-struck", null, { prefix: "◇", suffix: "◇" })(T) },
      { label: "Filigree Script", gen: (T) => v("script", null, { prefix: "❀", suffix: "❀" })(T) },
      { label: "Baroque Bold", gen: (T) => v("bold-fraktur", null, { prefix: "❧", suffix: "❧" })(T) },
      { label: "Isis Ornament", gen: (T) => v("script", null, "hieroglyph")(T) },
      { label: "Strikethrough Aesthetic", gen: (T) => v("plain", "strikethrough")(T) },
    ],
  },
  /* ═══ 8. Gothic Instagram Fonts ═══ */
  {
    name: "Gothic Instagram Fonts",
    description: "Dark combining effects with layered diacritical marks",
    styles: [
      { label: "Shadow Fraktur", gen: (T) => v("fraktur", null, { prefix: "▪", suffix: "▪" })(T) },
      { label: "Pyramid Fraktur", gen: (T) => v("fraktur", null, "hieroglyph")(T) },
      { label: "Twisted Text", gen: (T) => v("fraktur", null, { prefix: "†", suffix: "†" })(T) },
      { label: "Abyssal Dark", gen: (T) => v("bold-fraktur", null, { prefix: "▓", suffix: "▓" })(T) },
      { label: "Phantom Type", gen: (T) => v("fraktur", null, { prefix: "░", suffix: "░" })(T) },
      { label: "Wraith Bold", gen: (T) => v("bold-fraktur", null, { prefix: "◆", suffix: "◆" })(T) },
      { label: "Ancient Rites", gen: (T) => v("fraktur", null, { prefix: "☠", suffix: "☠" })(T) },
      { label: "Gothic Fraktur", gen: (T) => v("bold-fraktur")(T) },
      { label: "Void Fraktur", gen: (T) => v("fraktur", null, { prefix: "■", suffix: "■" })(T) },
      { label: "Heavy Gothic", gen: (T) => v("bold-fraktur", null, "heavy-box")(T) },
    ],
  },
  /* ═══ 9. High-Impact Instagram Fonts ═══ */
  {
    name: "High-Impact Instagram Fonts",
    description: "Fullwidth characters with box drawing frames",
    styles: [
      { label: "Block Frame", gen: (T) => v("fullwidth", null, { prefix: "┏━", suffix: "━┓" })(T) },
      { label: "Heavy Border", gen: (T) => v("fullwidth", null, { prefix: "╔═", suffix: "═╗" })(T) },
      { label: "Pipeline", gen: (T) => v("fullwidth", null, "double-pipe")(T) },
      { label: "Neon Box", gen: (T) => v("fullwidth", null, { prefix: "╠═", suffix: "═╣" })(T) },
      { label: "Steel Grid", gen: (T) => v("fullwidth", null, "heavy-pipe")(T) },
      { label: "Corner Frame", gen: (T) => v("fullwidth", null, "light-box")(T) },
      { label: "Tortoise Impact", gen: (T) => v("fullwidth", null, "tortoise")(T) },
      { label: "Impact Layer", gen: (T) => v("fullwidth", null, { prefix: "▐", suffix: "▌" })(T) },
      { label: "Ink Box", gen: (T) => v("squared")(T) },
      { label: "Scarab Impact", gen: (T) => v("fullwidth", null, "hieroglyph")(T) },
    ],
  },
  /* ═══ 10. Instagram Fonts for Name ═══ */
  {
    name: "Instagram Fonts for Name",
    description: "Short punchy styles with layered character marks",
    styles: [
      { label: "Inverted Stamp", gen: (T) => v("plain", ["\u0311", "\u032A"])(T) },
      { label: "Name Ring", gen: (T) => v("plain", "ring-above-macron-below")(T) },
      { label: "Tag Accent", gen: (T) => v("plain", ["\u0301", "\u0328"])(T) },
      { label: "Handle Dot", gen: (T) => v("plain", ["\u0307", "\u0327"])(T) },
      { label: "Profile Breve", gen: (T) => v("plain", ["\u0306", "\u0323"])(T) },
      { label: "ID Caron", gen: (T) => v("plain", ["\u030C", "\u0330"])(T) },
      { label: "Alias Wave", gen: (T) => v("plain", ["\u0303", "\u032D"])(T) },
      { label: "Snowflake Name", gen: (T) => v("sans", null, "snowflake")(T) },
      { label: "Glow Up", gen: (T) => v("plain", "ring-above")(T) },
      { label: "Bracket Name", gen: (T) => v("sans-bold", null, "lenticular")(T) },
    ],
  },
  /* ═══ 11. Instagram Fonts for Business ═══ */
  {
    name: "Instagram Fonts for Business",
    description: "Subtle professional textures with clean marks",
    styles: [
      { label: "Executive", gen: (T) => v("sans", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Boardroom", gen: (T) => v("sans-bold", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Corporate", gen: (T) => v("monospace", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Analyst", gen: (T) => v("sans-italic", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Director", gen: (T) => v("bold", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Presenter", gen: (T) => v("sans-bold-italic", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Consultant", gen: (T) => v("double-struck", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Strategist", gen: (T) => v("italic", null, { prefix: "—", suffix: "—" })(T) },
      { label: "Lotus Business", gen: (T) => v("double-struck", null, "hieroglyph")(T) },
      { label: "Pencil Business", gen: (T) => v("sans-bold", null, "pencil")(T) },
    ],
  },
  /* ═══ 12. Instagram Username Fonts ═══ */
  {
    name: "Instagram Username Fonts",
    description: "Elegant identity styles with layered diacritics",
    styles: [
      { label: "Signature Wave", gen: (T) => v("sans-italic", null, { prefix: "~", suffix: "~" })(T) },
      { label: "Monogram Style", gen: (T) => v("bold", null, { prefix: "◆", suffix: "◆" })(T) },
      { label: "Initial Sans", gen: (T) => v("sans-bold", null, { prefix: "▪", suffix: "▪" })(T) },
      { label: "Personal Serif", gen: (T) => v("italic", null, { prefix: "◇", suffix: "◇" })(T) },
      { label: "Identity Bold", gen: (T) => v("bold-italic", null, { prefix: "■", suffix: "■" })(T) },
      { label: "Name Plate", gen: (T) => v("sans", null, { prefix: "│", suffix: "│" })(T) },
      { label: "Tag Elegant", gen: (T) => v("monospace", null, { prefix: "▸", suffix: "◂" })(T) },
      { label: "Handle Script", gen: (T) => v("script", null, { prefix: "✧", suffix: "✧" })(T) },
      { label: "Pipe Username", gen: (T) => v("bold-italic", null, "double-pipe")(T) },
      { label: "Lenticular User", gen: (T) => v("monospace", null, "lenticular")(T) },
    ],
  },
];

export default deferredCardDefs;

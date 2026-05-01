import FontResultCard from "./FontResultCard";

const fontResults = [
  {
    label: "Serif Bold Italic",
    text: "𝓐𝓮𝓼𝓽𝓱𝓮𝓽𝓲𝓬 𝓛𝓮𝓽𝓽𝓮𝓻𝓼",
    span2: true,
    featured: true,
  },
  { label: "Double Struck", text: "𝔸𝕖𝕤𝕥𝕙𝕖𝕥𝕚𝕔 𝕃𝕖𝕥𝕥𝕖𝕣𝕤" },
  { label: "Gothic", text: "𝔄𝔢𝔰𝔱𝔥𝔢𝔱𝔦𝔠 𝔏𝔢𝔱𝔱𝔢𝔯𝔰" },
  { label: "Cursive", text: "𝒜𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸 𝐿𝑒𝓉𝓉𝑒𝓇𝓈" },
  { label: "Sans Bold", text: "𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰 𝗟𝗲𝘁𝘁𝗲𝗿𝘀" },
  { label: "Tiny Caps", text: "ᴀᴇsᴛʜᴇᴛɪᴄ ʟᴇᴛᴛᴇʀs" },
  { label: "Circle Outline", text: "Ⓐⓔⓢⓣⓗⓔⓣⓘⓒ Ⓛⓔⓣⓣⓔⓡⓢ" },
  { label: "Square Solid", text: "🄰🄴🅂🅃🄷🄴🅃🄸🄲 🄻🄴🅃🅃🄴🅁🅂" },
  { label: "Vaporwave", text: "Ａｅｓｔｈｅｔｉｃ Ｌｅｔｔｅｒｓ" },
  {
    label: "Zalgo (Glitch)",
    text: "A̴e̴s̴t̴h̴e̴t̴i̴c̴ L̴e̴t̴t̴e̴r̴s̴",
    span2: true,
  },
];

export default function FontResultsSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fontResults.map((result) => (
          <FontResultCard
            key={result.label}
            label={result.label}
            text={result.text}
            span2={result.span2}
            featured={result.featured}
          />
        ))}
      </div>
      <div className="mt-12 text-center">
        <button className="h-14 px-12 bg-surface-container-highest font-bold text-on-surface rounded-full hover:bg-outline-variant transition-all scale-95 active:scale-90">
          Load More Variations
        </button>
      </div>
    </section>
  );
}

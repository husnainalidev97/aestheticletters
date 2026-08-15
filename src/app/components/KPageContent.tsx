import Link from "next/link";
import type { ReactNode } from "react";
import SectionNav from "./SectionNav";
import FAQAccordion from "./FAQAccordion";
import FontResultCard from "./FontResultCard";
import KStyleGrids from "./KStyleGrids";
import { otherAlphabetsK } from "../lib/alphabetFontStyles";

interface KPageContentProps {
  faqs: { question: string; answer: string | ReactNode }[];
}

const pageSections = [
  { id: "k-in-every-font-style", label: "K Font Styles" },
  { id: "unicode-names-for-k-styles", label: "Unicode Names" },
  { id: "why-do-k-styles-stay-consistent", label: "Why Consistent" },
  { id: "k-in-other-alphabets", label: "Other Alphabets" },
  { id: "where-people-use-styled-k", label: "Uses" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" },
];

const linkClass = "text-primary underline underline-offset-4 hover:no-underline";

const unicodeTableRows = [
  { glyph: "\u{1D40A}", name: "Mathematical Bold Capital K", code: "U+1D40A" },
  { glyph: "\u{1D4A6}", name: "Mathematical Script Capital K", code: "U+1D4A6" },
  { glyph: "\u{1D50E}", name: "Mathematical Fraktur Capital K", code: "U+1D50E" },
  { glyph: "\u{1D542}", name: "Mathematical Double-Struck Capital K", code: "U+1D542" },
  { glyph: "\u{1D576}", name: "Mathematical Bold Fraktur Capital K", code: "U+1D576" },
  { glyph: "\u{1D67A}", name: "Mathematical Monospace Capital K", code: "U+1D67A" },
  { glyph: "\uFF2B", name: "Fullwidth Latin Capital Letter K", code: "U+FF2B" },
  { glyph: "\u1D0B", name: "Latin Letter Small Capital K", code: "U+1D0B" },
  { glyph: "\u0198", name: "Latin Capital Letter K With Hook", code: "U+0198" },
];

const similarTools = [
  { label: "R in Different Fonts", href: "/r-in-different-fonts", icon: "\uD83C\uDD51", desc: "The R version of this alphabet font style page" },
];

const popularTools = [
  { label: "Stylish Font Generator", href: "/stylish-fonts", icon: "\u2728", desc: "Clean, polished styles for bios and profiles" },
  { label: "Fancy Font Generator", href: "/fancy-fonts", icon: "\uD83C\uDF1F", desc: "More decorative Unicode styles" },
  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDD34", desc: "Thick, standout Unicode text" },
  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Styles for bios, captions, and comments" },
];

export default function KPageContent({ faqs }: KPageContentProps) {
  return (
    <>
      <SectionNav sections={pageSections} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <article id="k-in-every-font-style" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                K in Every Font Style
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Unicode styling turns a single letter into dozens of distinct symbols. Each one is a real character with its own code point, not a visual trick.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Below, K appears in 22 standard Unicode styles plus two symbol grids: one for capital K and one for small k. Every cell is clickable and copies the styled text to the clipboard in one step.
              </p>

              <KStyleGrids />

              <div id="unicode-names-for-k-styles" className="scroll-mt-[9rem] mt-16">
                <h3 className="font-headline text-2xl font-bold mb-6 leading-tight">
                  Unicode Names for K Styles
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Every symbol above maps to a real Unicode code point, confirmed here by name rather than assumed from appearance. A sample of nine such mappings appears in the table below, pulled directly from the Unicode standard.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-outline-variant/20 bg-surface-container-lowest">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead>
                      <tr className="border-b border-outline-variant/20 bg-surface-container-highest/50">
                        <th className="px-4 py-3 font-headline font-bold text-on-surface">Styled K</th>
                        <th className="px-4 py-3 font-headline font-bold text-on-surface">Unicode Name</th>
                        <th className="px-4 py-3 font-headline font-bold text-on-surface">Code Point</th>
                      </tr>
                    </thead>
                    <tbody>
                      {unicodeTableRows.map((row) => (
                        <tr key={row.code} className="border-b border-outline-variant/10 last:border-0">
                          <td className="px-4 py-3 text-on-surface font-medium text-lg">{row.glyph}</td>
                          <td className="px-4 py-3 text-on-surface-variant">{row.name}</td>
                          <td className="px-4 py-3 text-on-surface-variant font-mono">{row.code}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-lg mt-6">
                  Full names for all 22 standard styles appear in Grid 1 above.
                </p>
              </div>
            </article>

            <article id="why-do-k-styles-stay-consistent" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Why Do K Styles Stay Consistent?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Several Unicode mathematical styles skip certain letters entirely, including R, C, and H. Devices then pull substitute characters from an older Letterlike Symbols block instead. K carries no such gap.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                All 13 mathematical styles exist at their expected code points, nothing borrowed from elsewhere. This full coverage traces back further than Unicode itself. Greek kappa gave English its K, by way of the Semitic kaph, once a symbol for an open hand.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Classical Latin barely touched the letter, keeping it for a short list of fixed words. Unicode still gave K a complete set regardless. Every mathematical K style on this page renders identically across devices and platforms, with no unexpected substitutions to explain. Full words can carry that same weight too, through the{" "}
                <Link href="/bold-font-generator" className={linkClass}>
                  bold text generator
                </Link>
                , which converts entire phrases at once.
              </p>
            </article>

            <article id="k-in-other-alphabets" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                K in Other Alphabets
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                K is not unique to the Latin alphabet. Several unrelated writing systems carry a nearly identical shape, some by direct inheritance from Greek, others by pure coincidence.
              </p>
              <ul className="list-disc pl-6 space-y-4 text-on-surface-variant leading-relaxed text-lg mb-8">
                <li>
                  <span className="text-on-surface font-medium">Cyrillic К к:</span> adapted from Greek centuries after Cyril and Methodius built the alphabet for Slavic liturgy
                </li>
                <li>
                  <span className="text-on-surface font-medium">Greek Κ κ:</span> kappa itself, the direct ancestor of the Latin K
                </li>
                <li>
                  <span className="text-on-surface font-medium">Coptic Ⲕ ⲕ:</span> borrowed the same Greek shape for Egypt&apos;s Coptic Christian texts
                </li>
                <li>
                  <span className="text-on-surface font-medium">Cherokee Ꮶ ꮶ:</span> represents the syllable tso, unrelated in sound to K despite the shared shape
                </li>
                <li>
                  <span className="text-on-surface font-medium">Old Italic 𐌊:</span> the Etruscan letterform that Roman scribes eventually turned into the Latin K used today
                </li>
              </ul>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                None of these are font styles. Each is a distinct letter, in active or historic use within its own language.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {otherAlphabetsK.map((entry) => (
                  <FontResultCard
                    key={entry.script}
                    label={entry.label}
                    text={entry.lower ? `${entry.upper} ${entry.lower}` : entry.upper}
                    stacked
                  />
                ))}
              </div>
            </article>

            <article id="where-people-use-styled-k" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Where Do People Use Styled K?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Bios, gaming names, and Discord profiles are the most common home for styled K text. Logo mockups and quick graphic drafts use it too. Since every style copies as plain text, testing a few options before settling on one costs nothing but a click.
              </p>
            </article>
          </div>

          <aside className="lg:col-span-4 space-y-12">
            <div className="p-8 bg-primary-container/10 rounded-2xl border border-primary/10">
              <h3 className="font-headline font-bold text-primary mb-4 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
                Client-Side Security
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We prioritize your privacy. All transformations happen 100% in your browser. We never store or track the text you type.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-16 pb-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3 text-center leading-tight scroll-mt-[9rem]" id="explore-more-tools">
          Explore More Tools
        </h2>
        <p className="text-on-surface-variant text-center text-sm md:text-base mb-10 max-w-xl mx-auto">
          Beyond K, several other generators on this site cover full word styling, platform specific text, and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-headline text-lg font-bold mb-4 flex items-center gap-2">
              <span className="inline-block w-1 h-5 rounded-full bg-primary" />
              Similar Font Styles
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {similarTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center p-4 md:p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                >
                  <span className="text-2xl mb-2">{tool.icon}</span>
                  <span className="font-headline font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                    {tool.label}
                  </span>
                  <span className="text-on-surface-variant text-xs mt-1 leading-snug">
                    {tool.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-headline text-lg font-bold mb-4 flex items-center gap-2">
              <span className="inline-block w-1 h-5 rounded-full bg-primary" />
              Popular Tools
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {popularTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center p-4 md:p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                >
                  <span className="text-2xl mb-2">{tool.icon}</span>
                  <span className="font-headline font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                    {tool.label}
                  </span>
                  <span className="text-on-surface-variant text-xs mt-1 leading-snug">
                    {tool.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-12 md:py-24">
        <h2 className="font-headline text-2xl md:text-4xl font-bold mb-16 text-center scroll-mt-[9rem]" id="frequently-asked-questions">
          Frequently Asked Questions
        </h2>
        <FAQAccordion faqs={faqs} />
      </section>
    </>
  );
}

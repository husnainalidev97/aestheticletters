import Link from "next/link";
import type { ReactNode } from "react";
import SectionNav from "./SectionNav";
import FAQAccordion from "./FAQAccordion";
import FontResultCard from "./FontResultCard";
import AlphabetLetterGenerator from "./AlphabetLetterGenerator";
import { otherAlphabetsE } from "../lib/alphabetFontStyles";

interface EPageContentProps {
  faqs: { question: string; answer: string | ReactNode }[];
}

const pageSections = [
  { id: "e-in-every-font-style", label: "E Font Styles" },
  { id: "unicode-names-for-e-styles", label: "Unicode Names" },
  { id: "why-does-e-lose-its-script-style", label: "Script Gap" },
  { id: "the-eulers-number-symbol", label: "Euler's Number" },
  { id: "e-in-other-alphabets", label: "Other Alphabets" },
  { id: "where-do-people-use-styled-e", label: "Uses" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" },
];

const linkClass = "text-primary underline underline-offset-4 hover:no-underline";

const unicodeTableRows = [
  { glyph: "\u{1D404}", name: "Mathematical Bold Capital E", code: "U+1D404" },
  { glyph: "\u2130", name: "Script Capital E", code: "U+2130" },
  { glyph: "\u{1D508}", name: "Mathematical Fraktur Capital E", code: "U+1D508" },
  { glyph: "\u{1D53C}", name: "Mathematical Double-Struck Capital E", code: "U+1D53C" },
  { glyph: "\u{1D570}", name: "Mathematical Bold Fraktur Capital E", code: "U+1D570" },
  { glyph: "\u{1D674}", name: "Mathematical Monospace Capital E", code: "U+1D674" },
  { glyph: "\uFF25", name: "Fullwidth Latin Capital Letter E", code: "U+FF25" },
  { glyph: "\u1D07", name: "Latin Letter Small Capital E", code: "U+1D07" },
  { glyph: "\u0190", name: "Latin Capital Letter Open E", code: "U+0190" },
];

const similarTools = [
  { label: "K in Different Fonts", href: "/k-in-different-fonts", icon: "\uD83C\uDD5A", desc: "The K version of this alphabet font style page" },
  { label: "R in Different Fonts", href: "/r-in-different-fonts", icon: "\uD83C\uDD61", desc: "The R version of this alphabet font style page" },
];

const popularTools = [
  { label: "Stylish Font Generator", href: "/stylish-fonts", icon: "\u2728", desc: "Clean, polished styles for bios and profiles" },
  { label: "Fancy Font Generator", href: "/fancy-fonts", icon: "\uD83C\uDF1F", desc: "More decorative Unicode styles" },
  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDD34", desc: "Thick, standout Unicode text" },
  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Styles for bios, captions, and comments" },
];

export default function EPageContent({ faqs }: EPageContentProps) {
  return (
    <>
      <AlphabetLetterGenerator letter="e" defaultText="e" hideInputHeader hideSymbolStyles />

      <SectionNav sections={pageSections} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <article id="e-in-every-font-style" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                E in Every Font Style
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                English readers use the letter E more than any other letter, so a styled E carries extra visibility across bios and captions. This generator holds 23 verified Unicode versions, plus five real E letters borrowed from other alphabets. Every result below pastes as plain text, with no download required.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Mathematicians needed different letter styles long before social media existed, to separate variables inside equations. Unicode preserved that need as 23 separate E characters, split across three groups: math alphanumerics, enclosed shapes, and letters borrowed from other alphabets.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Tap any card below. Its uppercase pairs with its lowercase match when a pair exists, and both copy together in a single click.
              </p>

              <div id="unicode-names-for-e-styles" className="scroll-mt-[9rem] mt-12">
                <h3 className="font-headline text-2xl font-bold mb-6 leading-tight">
                  Unicode Names for E Styles
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Names carry more proof than appearance alone. The table below lists nine E styles by their exact Unicode designation, pulled straight from the standard, so nothing here relies on guesswork.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-outline-variant/20 bg-surface-container-lowest">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead>
                      <tr className="border-b border-outline-variant/20 bg-surface-container-highest/50">
                        <th className="px-4 py-3 font-headline font-bold text-on-surface">Styled E</th>
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
                  Full names for all 23 styles appear on the individual style cards above.
                </p>
              </div>
            </article>

            <article id="why-does-e-lose-its-script-style" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Why Does E Lose Its Script Style?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Script Capital E and Script Small E do not live in the Mathematical Alphanumeric block with the rest of E&apos;s styles. Both sit inside an older section called Letterlike Symbols instead. Unicode reused these two existing characters rather than building duplicates, since mathematicians already used script E for limits and sets before the newer block existed.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                This kind of gap only touches a handful of letters. R loses three entire styles the same way, while a few others lose one or two. E loses just its Script pair, so twelve of its thirteen mathematical styles still render at their expected, native code points.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Bold, Fraktur, Double Struck, and Bold Fraktur all sit exactly where expected, with nothing borrowed from elsewhere. That leaves E with one of the smaller gaps among the affected letters.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Full word styling works the same way through the{" "}
                <Link href="/bold-font-generator" className={linkClass}>
                  bold font generator
                </Link>
                , which turns entire phrases into matching Unicode text.
              </p>
            </article>

            <article id="the-eulers-number-symbol" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                The Euler&apos;s Number Symbol (ⅇ)
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Not every E character above pairs with a partner. Double Struck Italic Small e stands alone, formatted only in lowercase, at code point U+2147. Mathematics uses this exact glyph as shorthand for Euler&apos;s number, the constant behind natural logarithms and continuous growth curves.
              </p>
            </article>

            <article id="e-in-other-alphabets" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                E in Other Alphabets
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Five separate writing systems, spanning three continents and roughly three thousand years, each developed a letter close to E. Some inherited it directly from Greek. Others arrived at a matching shape or sound through an entirely separate path.
              </p>
              <ul className="list-disc pl-6 space-y-4 text-on-surface-variant leading-relaxed text-lg mb-8">
                <li>
                  <span className="text-on-surface font-medium">Cyrillic Е е:</span> shares an identical shape with Latin E, adapted after Cyril and Methodius built the alphabet for Slavic liturgy.
                </li>
                <li>
                  <span className="text-on-surface font-medium">Greek Ε ε:</span> epsilon itself, the direct ancestor behind the Latin E.
                </li>
                <li>
                  <span className="text-on-surface font-medium">Coptic Ⲉ ⲉ:</span> carried the same Greek shape into Egypt&apos;s Coptic Christian texts.
                </li>
                <li>
                  <span className="text-on-surface font-medium">Old Italic 𐌄:</span> the Etruscan letterform that Roman scribes later reshaped into today&apos;s Latin E.
                </li>
                <li>
                  <span className="text-on-surface font-medium">Runic ᛖ:</span> the Elder Futhark rune Ehwaz, marking the E sound in early Germanic writing.
                </li>
              </ul>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                None of these count as font styles. Each stands as its own distinct letter, in active or historic use within its own language.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {otherAlphabetsE.map((entry) => (
                  <FontResultCard
                    key={entry.script}
                    label={entry.label}
                    text={entry.lower ? `${entry.upper} ${entry.lower}` : entry.upper}
                    stacked
                  />
                ))}
              </div>
            </article>

            <article id="where-do-people-use-styled-e" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Where Do People Use Styled E?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                A plain E blends into a feed full of plain text, so people reach for a styled version to stand out. Gaming profiles, Discord names, and Instagram bios see the heaviest use. Logo drafts and quick graphics pick it up too, since every style still pastes as plain text with zero setup cost.
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
          Beyond E, several other generators on this site cover full word styling, platform specific text, and more.
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

import Link from "next/link";
import type { ReactNode } from "react";
import SectionNav from "./SectionNav";
import FAQAccordion from "./FAQAccordion";
import FontResultCard from "./FontResultCard";
import AlphabetLetterGenerator from "./AlphabetLetterGenerator";
import { otherAlphabetsS } from "../lib/alphabetFontStyles";

interface SPageContentProps {
  faqs: { question: string; answer: string | ReactNode }[];
}

const pageSections = [
  { id: "s-in-every-font-style", label: "S Font Styles" },
  { id: "unicode-names-for-s-styles", label: "Unicode Names" },
  { id: "why-do-s-styles-stay-consistent", label: "Why Consistent" },
  { id: "s-with-diacritics", label: "S With Diacritics" },
  { id: "s-in-other-alphabets", label: "Other Alphabets" },
  { id: "where-people-use-styled-s", label: "Uses" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" },
];

const linkClass = "text-primary underline underline-offset-4 hover:no-underline";

const unicodeNameRows = [
  { glyph: "\u{1D4AE}", name: "Mathematical Script Capital S", code: "U+1D4AE" },
  { glyph: "\u{1D516}", name: "Mathematical Fraktur Capital S", code: "U+1D516" },
  { glyph: "\u{1D54A}", name: "Mathematical Double-Struck Capital S", code: "U+1D54A" },
  { glyph: "\u{1F162}", name: "Negative Circled Latin Capital Letter S", code: "U+1F162" },
  { glyph: "\u015E", name: "Latin Capital Letter S With Cedilla", code: "U+015E" },
  { glyph: "\uA7C5", name: "Latin Capital Letter S With Hook", code: "U+A7C5" },
  { glyph: "\u0160", name: "Latin Capital Letter S With Caron", code: "U+0160" },
  { glyph: "\u1E9E", name: "Latin Capital Letter Sharp S", code: "U+1E9E" },
  { glyph: "\uFF33", name: "Fullwidth Latin Capital Letter S", code: "U+FF33" },
];

const similarTools = [
  { label: "B in Different Fonts", href: "/b-in-different-fonts", icon: "\uD83C\uDD71", desc: "The B version of this alphabet font style page" },
  { label: "E in Different Fonts", href: "/e-in-different-fonts", icon: "\uD83C\uDD74", desc: "The E version of this alphabet font style page" },
  { label: "H in Different Fonts", href: "/h-in-different-fonts", icon: "\uD83C\uDD77", desc: "The H version of this alphabet font style page" },
  { label: "K in Different Fonts", href: "/k-in-different-fonts", icon: "\uD83C\uDD7A", desc: "The K version of this alphabet font style page" },
  { label: "R in Different Fonts", href: "/r-in-different-fonts", icon: "\uD83C\uDD81", desc: "The R version of this alphabet font style page" },
  { label: "W in Different Fonts", href: "/w-in-different-fonts", icon: "\uD83C\uDD86", desc: "The W version of this alphabet font style page" },
];

const popularTools = [
  { label: "Cursive Font Generator", href: "/cursive-fonts", icon: "\u270D\uFE0F", desc: "Flowing, handwritten script styles" },
  { label: "Big Text Generator", href: "/big-text-generator", icon: "\uD83D\uDD20", desc: "Preview text at scale" },
  { label: "Stylish Font Generator", href: "/stylish-fonts", icon: "\uD83D\uDC8E", desc: "Clean, polished styles for bios and profiles" },
  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Styles for bios, captions, and comments" },
  { label: "Aesthetic Font Generator", href: "/", icon: "\u2728", desc: "120+ aesthetic copy-paste styles" },
];

export default function SPageContent({ faqs }: SPageContentProps) {
  return (
    <>
      <AlphabetLetterGenerator letter="S" defaultText="S" hideInputHeader />

      <SectionNav sections={pageSections} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <article id="s-in-every-font-style" className="scroll-mt-[9rem]">
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Every letter carries more than one shape once Unicode gets involved, and S is no exception. This s font generator holds 37 verified Unicode styles for S. They come from bold and italic sets, enclosed symbols, and real diacritic letters used in languages like German and Turkish.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Five more entries show S as it appears in totally different alphabets, including Cyrillic and Greek. Copying any style below takes a single tap, and it pastes as plain text anywhere Unicode works. That makes it ready for a tattoo sketch, a nail design, a logo draft, or a bio that needs one letter to stand out.
              </p>
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                S in Every Font Style
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Unicode holds far more than the standard alphabet. Mathematics, old symbol sets, and other languages all added extra shapes for common letters over the decades. Put together, they turn a single S into three dozen distinct characters.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                The 37 styles below fall into three groups. Math styles cover bold, italic, script, and similar sets built for equations. Enclosed styles wrap S inside a circle, square, or set of brackets. The rest are genuine letters, borrowed from languages that added an accent or a hook to the base S shape.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Every card below pairs the capital S with its lowercase match, where both exist. Tap any card and the matching pair lands directly on the clipboard, ready to paste.
              </p>

              <div id="unicode-names-for-s-styles" className="scroll-mt-[9rem] mt-12">
                <h3 className="font-headline text-2xl font-bold mb-6 leading-tight">
                  Unicode Names for S Styles
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  None of the 37 styles above got picked because they simply looked right. Each one traces to a specific Unicode code point, verified below by its official name. The table lists nine examples pulled straight from the standard itself.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-outline-variant/20 bg-surface-container-lowest">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead>
                      <tr className="border-b border-outline-variant/20 bg-surface-container-highest/50">
                        <th className="px-4 py-3 font-headline font-bold text-on-surface">Styled S</th>
                        <th className="px-4 py-3 font-headline font-bold text-on-surface">Unicode Name</th>
                        <th className="px-4 py-3 font-headline font-bold text-on-surface">Code Point</th>
                      </tr>
                    </thead>
                    <tbody>
                      {unicodeNameRows.map((row) => (
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
                  The individual cards above list the full name for the rest, all 37 in total.
                </p>
              </div>
            </article>

            <article id="why-do-s-styles-stay-consistent" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Why Do S Styles Stay Consistent?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Not every letter earns the same treatment inside Unicode. Three capital letters, C, H, and R, lost their spot in several mathematical alphabets over time. Screens fall back on an older, smaller Letterlike Symbols block to display them instead.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                S avoided that fate entirely. Every one of its 13 mathematical versions sits at its own dedicated code point, with nothing pulled in from an outside block. The letter earned that clean slate long before computers existed, through a much older piece of alphabet history.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Its story starts with a Semitic sign for a tooth, carved near the Sinai Peninsula around 1500 BCE. Greek writers flipped that sign on its side and folded it into their alphabet as sigma. When Rome adopted the Greek letterform, scribes trimmed one stroke from sigma&apos;s original four, leaving the rounded S used today.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                That unbroken history means every mathematical S style shows up the same way on any screen, with no fallback characters involved. A script style like this pairs naturally with the{" "}
                <Link href="/cursive-fonts" className={linkClass}>
                  cursive font generator
                </Link>{" "}
                for anyone styling a full word instead of one letter.
              </p>
            </article>

            <article id="s-with-diacritics" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                S With Diacritics
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Fifteen of the styles above are not really styles at all. Each one is a genuine letter, used every day in a real language, that happens to build on the base S shape.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                German writers add a small loop to form Sharp S, written as ß in lowercase. The capital version, written ẞ, only became an official part of German spelling in recent decades. Turkish, Polish, Czech, Slovak, and Romanian each add their own mark to S, changing how the letter sounds in each language.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Every letter in this group already carries its own name and meaning in daily use. None of them exist only for decoration, the way a bold or script style does.
              </p>
            </article>

            <article id="s-in-other-alphabets" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                S in Other Alphabets
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                S is not limited to the Latin alphabet. A handful of scripts outside Latin produce a nearly matching letter, some through direct descent from Greek, others through pure chance.
              </p>
              <ul className="list-disc pl-6 space-y-4 text-on-surface-variant leading-relaxed text-lg mb-8">
                <li>
                  <span className="text-on-surface font-medium">Cyrillic С с:</span> adapted from Greek sigma, now stands for the same S sound in Russian and many Slavic languages
                </li>
                <li>
                  <span className="text-on-surface font-medium">Greek Σ σ ς:</span> sigma itself, the direct ancestor of the Latin S
                </li>
                <li>
                  <span className="text-on-surface font-medium">Coptic Ⲥ ⲥ:</span> kept the Greek sigma shape for Coptic Christian texts in Egypt
                </li>
                <li>
                  <span className="text-on-surface font-medium">Cherokee Ꮪ:</span> represents the syllable du, unrelated in sound to S despite the shared shape
                </li>
                <li>
                  <span className="text-on-surface font-medium">Gothic 𐍃:</span> called sauil, used in the fourth century Gothic Bible translation by Ulfilas
                </li>
              </ul>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                None of these count as font styles. Each one is a separate letter, still in use or once in use, within its own language.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {otherAlphabetsS.map((entry) => (
                  <FontResultCard
                    key={entry.script}
                    label={entry.label}
                    text={entry.lower ? `${entry.upper} ${entry.lower}` : entry.upper}
                    stacked
                  />
                ))}
              </div>
            </article>

            <article id="where-people-use-styled-s" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Where Do People Use Styled S?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Tattoo outlines, nail art, and monogram projects account for much of the interest in styled S. Quick logo concepts and personal branding boards pull from it as well. Because each version pastes as plain text, trying several options side by side takes only a moment.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                A larger preview helps before locking in a final choice, especially for a logo or a monogram, through the{" "}
                <Link href="/big-text-generator" className={linkClass}>
                  big text generator
                </Link>
                .
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
          Want more than S styles? Check out these generators for decorative, polished, and platform-ready text styles.
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

import Link from "next/link";
import type { ReactNode } from "react";
import SectionNav from "./SectionNav";
import FAQAccordion from "./FAQAccordion";
import FontResultCard from "./FontResultCard";
import AlphabetLetterGenerator from "./AlphabetLetterGenerator";
import { otherAlphabetsT } from "../lib/alphabetFontStyles";

interface TPageContentProps {
  faqs: { question: string; answer: string | ReactNode }[];
}

const pageSections = [
  { id: "t-in-every-font-style", label: "T Font Styles" },
  { id: "unicode-names-for-t-styles", label: "Unicode Names" },
  { id: "why-do-t-styles-stay-consistent", label: "Why Consistent" },
  { id: "the-history-of-the-letter-t", label: "History" },
  { id: "t-in-other-alphabets", label: "Other Alphabets" },
  { id: "where-people-use-styled-t", label: "Uses" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" },
];

const linkClass = "text-primary underline underline-offset-4 hover:no-underline";

const unicodeTableRows = [
  { glyph: "\u{1D413}", name: "Mathematical Bold Capital T", code: "U+1D413" },
  { glyph: "\u{1D4AF}", name: "Mathematical Script Capital T", code: "U+1D4AF" },
  { glyph: "\u{1D517}", name: "Mathematical Fraktur Capital T", code: "U+1D517" },
  { glyph: "\u{1D54B}", name: "Mathematical Double-Struck Capital T", code: "U+1D54B" },
  { glyph: "\u{1D57F}", name: "Mathematical Bold Fraktur Capital T", code: "U+1D57F" },
  { glyph: "\u{1D683}", name: "Mathematical Monospace Capital T", code: "U+1D683" },
  { glyph: "\uFF34", name: "Fullwidth Latin Capital Letter T", code: "U+FF34" },
  { glyph: "\u1D1B", name: "Latin Letter Small Capital T", code: "U+1D1B" },
  { glyph: "\u01AC", name: "Latin Capital Letter T With Hook", code: "U+01AC" },
];

const similarTools = [
  { label: "B in Different Fonts", href: "/b-in-different-fonts", icon: "\uD83C\uDD71", desc: "The B version of this alphabet font style page" },
  { label: "E in Different Fonts", href: "/e-in-different-fonts", icon: "\uD83C\uDD74", desc: "The E version of this alphabet font style page" },
  { label: "H in Different Fonts", href: "/h-in-different-fonts", icon: "\uD83C\uDD77", desc: "The H version of this alphabet font style page" },
  { label: "K in Different Fonts", href: "/k-in-different-fonts", icon: "\uD83C\uDD7A", desc: "The K version of this alphabet font style page" },
  { label: "R in Different Fonts", href: "/r-in-different-fonts", icon: "\uD83C\uDD81", desc: "The R version of this alphabet font style page" },
  { label: "S in Different Fonts", href: "/s-in-different-fonts", icon: "\uD83C\uDD82", desc: "The S version of this alphabet font style page" },
];

const popularTools = [
  { label: "Sans Serif Font Generator", href: "/sans-serif-fonts", icon: "\uD83D\uDD8B\uFE0F", desc: "Clean, modern Unicode styles for whole sentences" },
  { label: "Number Font Generator", href: "/number-font-generator", icon: "\uD83D\uDD22", desc: "Styled digits to match your lettering" },
  { label: "Discord Fonts", href: "/discord-fonts", icon: "\uD83C\uDFAE", desc: "Styles for server names, bios, and chat" },
  { label: "Fancy Font Generator", href: "/fancy-fonts", icon: "\uD83C\uDF1F", desc: "More decorative Unicode styles" },
];

export default function TPageContent({ faqs }: TPageContentProps) {
  return (
    <>
      <AlphabetLetterGenerator letter="T" defaultText="T" hideInputHeader />

      <SectionNav sections={pageSections} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <article id="t-in-every-font-style" className="scroll-mt-[9rem]">
              <p className="text-on-surface-variant leading-relaxed text-lg mb-10">
                T carries a shape most people can draw from memory: one straight line crossing another. That simplicity has not stopped it from picking up 22 separate Unicode styles, plus five genuine letters borrowed from other alphabets. Every version below copies straight to your clipboard with a single tap.
              </p>
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                T in Every Font Style
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                A single keystroke produces one T. Unicode multiplies that same letter across 22 separate characters, each with its own fixed code point rather than a font layered on top.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Three separate categories make up that count. Mathematical alphanumerics cover the bulk of them, Latin Extended contributes two working letters, and enclosed characters round out the rest. Every card below pairs T with its lowercase match for a single copy.
              </p>

              <div id="unicode-names-for-t-styles" className="scroll-mt-[9rem] mt-12">
                <h3 className="font-headline text-2xl font-bold mb-6 leading-tight">
                  Unicode Names for T Styles
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Nine of those 22 styles get named and numbered in the table below, straight from the Unicode standard rather than guessed from how they look on screen.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-outline-variant/20 bg-surface-container-lowest">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead>
                      <tr className="border-b border-outline-variant/20 bg-surface-container-highest/50">
                        <th className="px-4 py-3 font-headline font-bold text-on-surface">Styled T</th>
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
                  The remaining thirteen names sit directly on their own cards above.
                </p>
              </div>
            </article>

            <article id="why-do-t-styles-stay-consistent" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Why Do T Styles Stay Consistent?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                A few letters lose ground inside the Mathematical Alphanumeric block. R, C, and H all fall back on an older Letterlike Symbols set instead of their expected style. T avoids that fate entirely, holding its place across all 13 styles without a single substitution.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                That completeness has nothing to do with luck. Unicode simply never carved out an exception for T, the way it did for a handful of its neighbors. Every mathematical version on this page will display the same way on a phone, a laptop, or a games console.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Full words carry that same reliability too. The{" "}
                <Link href="/sans-serif-fonts" className={linkClass}>
                  sans serif font generator
                </Link>{" "}
                applies this same clean, modern styling across an entire sentence instead of one letter at a time.
              </p>
            </article>

            <article id="the-history-of-the-letter-t" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                The History of the Letter T
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                T began as an Egyptian hieroglyph shaped like a pair of crossed sticks. Phoenician traders later turned that image into taw, their word for mark or sign. Taw stood as the final letter in their alphabet.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Greek scribes adopted taw around the eighth century BCE and renamed it tau. They kept its crossbar shape and its sound almost untouched. Etruscan writers picked up that same tau soon after, carrying it toward Rome with barely any change.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Roman scribes then adopted the Etruscan letterform as T, the shape still used today. Few letters have kept their form and sound this steady across three thousand years. English later placed T twentieth in its own alphabet, unchanged in shape since ancient Phoenicia.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                T carries meaning well past the alphabet too. Medieval Christians used the tau cross, shaped exactly like a capital T, as a mark of penance and protection. Saint Francis of Assisi later adopted it as his personal signature, a tradition some Franciscan communities still honor today.
              </p>
            </article>

            <article id="t-in-other-alphabets" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                T in Other Alphabets
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Latin borrowed its T from Greek, but Greek was not the last stop for that shape. A handful of unrelated scripts landed on something close to the same design, occasionally by heritage and occasionally by accident.
              </p>
              <ul className="list-disc pl-6 space-y-4 text-on-surface-variant leading-relaxed text-lg mb-8">
                <li>
                  <span className="text-on-surface font-medium">Cyrillic Т т:</span> shares its shape with Latin T through the same Greek tau lineage, still active across Slavic languages today
                </li>
                <li>
                  <span className="text-on-surface font-medium">Greek Τ τ:</span> the tau that started this whole chain, still written and spoken in Greek today
                </li>
                <li>
                  <span className="text-on-surface font-medium">Coptic Ⲧ ⲧ:</span> inherited the Greek tau shape when Coptic scribes adapted the alphabet for Egyptian Christian scripture
                </li>
                <li>
                  <span className="text-on-surface font-medium">Cherokee Ꭲ ꭲ:</span> looks nearly identical to Latin T, but represents the vowel sound &quot;i&quot; instead, unrelated in origin or sound
                </li>
                <li>
                  <span className="text-on-surface font-medium">Old Italic 𐌕:</span> found on Etruscan inscriptions predating Rome by centuries, nearly unchanged from the Latin T used now
                </li>
              </ul>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                Each of these counts as a real, independent letter, not a decorative style. Several remain in daily use, others survive only in historical texts.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {otherAlphabetsT.map((entry) => (
                  <FontResultCard
                    key={entry.script}
                    label={entry.label}
                    text={entry.lower ? `${entry.upper} ${entry.lower}` : entry.upper}
                    stacked
                  />
                ))}
              </div>
            </article>

            <article id="where-people-use-styled-t" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Where Do People Use Styled T?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Discord names, Instagram bios, and gaming profiles pick up styled T most often. Its cross-like shape also makes it a natural fit for logo sketches and quick graphic mockups, beyond just text styling. Every style here pastes as plain text, so trying a few before settling on one takes seconds.
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
          A handful of other tools on this site round out the full styling picture, covering whole words, specific platforms, and more.
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

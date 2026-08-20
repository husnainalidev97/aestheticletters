import Link from "next/link";
import type { ReactNode } from "react";
import SectionNav from "./SectionNav";
import FAQAccordion from "./FAQAccordion";
import FontResultCard from "./FontResultCard";
import AlphabetLetterGenerator from "./AlphabetLetterGenerator";
import { otherAlphabetsB } from "../lib/alphabetFontStyles";

interface BPageContentProps {
  faqs: { question: string; answer: string | ReactNode }[];
}

const pageSections = [
  { id: "b-in-every-font-style", label: "B Font Styles" },
  { id: "unicode-names-for-b-styles", label: "Unicode Names" },
  { id: "how-a-picture-of-a-house-became-the-letter-b", label: "History" },
  { id: "b-in-other-alphabets", label: "Other Alphabets" },
  { id: "where-do-people-use-styled-b", label: "Uses" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" },
];

const linkClass = "text-primary underline underline-offset-4 hover:no-underline";

const unicodeTableRows = [
  { glyph: "\u{1D401}", name: "Mathematical Bold Capital B", code: "U+1D401" },
  { glyph: "\u{1D435}", name: "Mathematical Italic Capital B", code: "U+1D435" },
  { glyph: "\u{1D505}", name: "Mathematical Fraktur Capital B", code: "U+1D505" },
  { glyph: "\u{1D539}", name: "Mathematical Double-Struck Capital B", code: "U+1D539" },
  { glyph: "\u{1D671}", name: "Mathematical Monospace Capital B", code: "U+1D671" },
  { glyph: "\uFF22", name: "Fullwidth Latin Capital Letter B", code: "U+FF22" },
  { glyph: "\u24B7", name: "Circled Latin Capital Letter B", code: "U+24B7" },
  { glyph: "\u0181", name: "Latin Capital Letter B With Hook", code: "U+0181" },
  { glyph: "\u0299", name: "Latin Letter Small Capital B", code: "U+0299" },
];

const similarTools = [
  { label: "E in Different Fonts", href: "/e-in-different-fonts", icon: "\uD83C\uDD74", desc: "The E version of this alphabet font style page" },
  { label: "K in Different Fonts", href: "/k-in-different-fonts", icon: "\uD83C\uDD5A", desc: "The K version of this alphabet font style page" },
  { label: "R in Different Fonts", href: "/r-in-different-fonts", icon: "\uD83C\uDD61", desc: "The R version of this alphabet font style page" },
  { label: "S in Different Fonts", href: "/s-in-different-fonts", icon: "\uD83C\uDD67", desc: "The S version of this alphabet font style page" },
  { label: "W in Different Fonts", href: "/w-in-different-fonts", icon: "\uD83C\uDD66", desc: "The W version of this alphabet font style page" },
];

const popularTools = [
  { label: "Fancy Font Generator", href: "/fancy-fonts", icon: "\uD83C\uDF1F", desc: "More decorative Unicode styles" },
  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDD34", desc: "Thick, standout Unicode text" },
  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Styles for bios, captions, and comments" },
  { label: "Cursive Font Generator", href: "/cursive-fonts", icon: "\u2712", desc: "Flowing, handwritten script styles" },
];

export default function BPageContent({ faqs }: BPageContentProps) {
  return (
    <>
      <AlphabetLetterGenerator letter="B" defaultText="B" hideInputHeader />

      <SectionNav sections={pageSections} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <article id="b-in-every-font-style" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                B in Every Font Style
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Twenty nine Unicode styles make up this page. Each one was checked by hand against the official Unicode standard before it made the list.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                That number will look small next to sites promising 150 or more B styles. Most of those bigger counts pad the list with color changes or spacing tricks that are not separate letters at all.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Three different sources feed into this set. Real alphabet letters borrowed from other languages sit at one end, genuinely spoken by real people today. Enclosed shapes built for numbered lists and labels sit in the middle.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                A mathematical symbol block, originally meant for equations, supplies the largest group. Social media later turned that block into decoration.
              </p>

              <div id="unicode-names-for-b-styles" className="scroll-mt-[9rem] mt-12">
                <h3 className="font-headline text-2xl font-bold mb-6 leading-tight">
                  Unicode Names for B Styles
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The table below pairs nine styles from the full set with their real Unicode name. That name comes from the standard itself, not a label a generator site made up.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-outline-variant/20 bg-surface-container-lowest">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead>
                      <tr className="border-b border-outline-variant/20 bg-surface-container-highest/50">
                        <th className="px-4 py-3 font-headline font-bold text-on-surface">Styled B</th>
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
                  Every other style on this page carries a similarly exact name, visible on each card above. One entry breaks the usual pattern, though. Script Capital B does not come from the math symbol block at all. Unicode pulled it from an older set called Letterlike Symbols instead, since a matching shape already existed there.
                </p>
              </div>
            </article>

            <article id="how-a-picture-of-a-house-became-the-letter-b" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                How a Picture of a House Became the Letter B?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Ancient Egyptian writing used pictures for sounds long before any alphabet existed. One of those pictures showed the floor plan of a house. Early Semitic writing borrowed that picture and gave it a b sound.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Around 1000 BCE, scribes in the Phoenician city of Byblos gave that house picture a simpler, more linear shape. They called the letter bēt, the Phoenician word for house. Its place in the alphabet stayed fixed at number two from that point onward.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                The Phoenician alphabet reached Greek traders next, and they reshaped the name into beta, close to the old bēt but distinctly Greek. Its form stayed largely intact through this stage. From Greece the letter moved into Etruscan hands in northern Italy, and Latin picked it up from there, settling into the B known now.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                That path runs through four separate civilizations across roughly three thousand years, all without changing the letter&apos;s basic job. Few letters in the English alphabet can trace a lineage that clean. Most consonants shift shape or meaning somewhere along the way, but B has stayed remarkably close to its house shaped root the entire time.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                English speakers say &quot;bee&quot; rather than &quot;beta&quot; today because Latin shortened most consonant names to a single, simple syllable. C became &quot;cee,&quot; D became &quot;dee,&quot; and B followed the same pattern rather than keeping the fuller Greek original.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                That old Greek name never fully disappeared, though. It still shows up in beta test, beta version, and star names like Beta Centauri. Each one is a small echo of bēt, the word for house that started this whole chain.
              </p>
            </article>

            <article id="b-in-other-alphabets" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                B in Other Alphabets
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Most Latin letters point back to one clear ancestor, and B does exactly that through Phoenician and Greek. A few characters in other writing systems still connect to B today, either through shared shape or shared sound.
              </p>
              <ul className="list-disc pl-6 space-y-4 text-on-surface-variant leading-relaxed text-lg mb-8">
                <li>
                  <span className="text-on-surface font-medium">Cyrillic В (Ve):</span> looks exactly like the Latin capital B, yet stands for a completely different sound, /v/ rather than /b/
                </li>
                <li>
                  <span className="text-on-surface font-medium">Cyrillic Б (Be):</span> keeps the actual /b/ sound but wears a different shape, and both Cyrillic letters trace back to the same Greek Beta
                </li>
                <li>
                  <span className="text-on-surface font-medium">B With Hook (Ɓ ɓ):</span> a real working letter, not decorative, still used in Fula, Hausa, and Giziga across parts of West Africa
                </li>
              </ul>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                That first entry surprises most people the first time they see it. A Russian or Bulgarian word using В is not borrowing a Latin B at all. Both letters simply grew from the same Greek Beta and ended up looking alike by coincidence of history, not by direct copying.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                Cyrillic В в Cyrillic Б б B With Hook Ɓ ɓ
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                None of these three are cosmetic additions. Each one belongs to a real alphabet with real speakers, not a shape invented just to look old or exotic.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {otherAlphabetsB.map((entry) => (
                  <FontResultCard
                    key={entry.script}
                    label={entry.label}
                    text={entry.lower ? `${entry.upper} ${entry.lower}` : entry.upper}
                    stacked
                  />
                ))}
              </div>
            </article>

            <article id="where-do-people-use-styled-b" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Where Do People Use Styled B?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Not every text field accepts a styled letter. Usernames on most platforms limit input to plain letters and numbers. A styled B typed there usually fails, either stripped out automatically or rejected outright.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Bios, captions, and display names behave completely differently. These fields typically accept styled Unicode without any pushback. That&apos;s exactly why bios carry the heaviest styled B usage across social platforms, with gaming tags and Discord names close behind.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                A single letter can also work as a decorative initial on its own. Someone with a name starting in B might drop one bold or circled version straight into their display name. That one character alone can add some personality.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Styling more than one letter calls for a different tool. The{" "}
                <Link href="/stylish-fonts" className={linkClass}>
                  stylish text generator
                </Link>{" "}
                covers full names and phrases rather than a single character.
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
          Want more than B styles? Check out these generators for decorative, polished text that works on any platform.
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

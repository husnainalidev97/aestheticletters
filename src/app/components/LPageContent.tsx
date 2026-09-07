import Link from "next/link";
import type { ReactNode } from "react";
import SectionNav from "./SectionNav";
import FAQAccordion from "./FAQAccordion";
import FontResultCard from "./FontResultCard";
import AlphabetLetterGenerator from "./AlphabetLetterGenerator";
import { otherAlphabetsL } from "../lib/alphabetFontStyles";

interface LPageContentProps {
  faqs: { question: string; answer: string | ReactNode }[];
}

const pageSections = [
  { id: "l-in-every-font-style", label: "L Font Styles" },
  { id: "unicode-names-for-l-styles", label: "Unicode Names" },
  { id: "where-did-the-letter-l-come-from", label: "Origin" },
  { id: "l-in-other-alphabets", label: "Other Alphabets" },
  { id: "where-do-people-use-styled-l", label: "Uses" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" },
];

const linkClass = "text-primary underline underline-offset-4 hover:no-underline";

const similarTools = [
  { label: "B in Different Fonts", href: "/b-in-different-fonts", icon: "\uD83C\uDD71", desc: "The B version of this alphabet font style page" },
  { label: "H in Different Fonts", href: "/h-in-different-fonts", icon: "\uD83C\uDD77", desc: "The H version of this alphabet font style page" },
  { label: "J in Different Fonts", href: "/j-in-different-fonts", icon: "\uD83C\uDD79", desc: "The J version of this alphabet font style page" },
  { label: "K in Different Fonts", href: "/k-in-different-fonts", icon: "\uD83C\uDD7A", desc: "The K version of this alphabet font style page" },
  { label: "R in Different Fonts", href: "/r-in-different-fonts", icon: "\uD83C\uDD81", desc: "The R version of this alphabet font style page" },
  { label: "S in Different Fonts", href: "/s-in-different-fonts", icon: "\uD83C\uDD82", desc: "The S version of this alphabet font style page" },
];

const popularTools = [
  { label: "Stylish Font Generator", href: "/stylish-fonts", icon: "\u2728", desc: "Clean, polished styles for bios and profiles" },
  { label: "Fancy Font Generator", href: "/fancy-fonts", icon: "\uD83C\uDF1F", desc: "More decorative Unicode styles" },
  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDD34", desc: "Thick, standout Unicode text" },
  { label: "Cursive Font Generator", href: "/cursive-fonts", icon: "\u270D", desc: "Flowing cursive and handwriting-style text" },
  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Styles for bios, captions, and comments" },
  { label: "Cute Fonts Generator", href: "/cute-fonts", icon: "\uD83C\uDF80", desc: "Soft, playful Unicode text styles" },
];

const unicodeTable = [
  { styled: "\uD835\uDC0B", name: "Mathematical Bold Capital L", code: "U+1D40B" },
  { styled: "\u2112", name: "Script Capital L", code: "U+2112" },
  { styled: "\uD835\uDD0F", name: "Mathematical Fraktur Capital L", code: "U+1D50F" },
  { styled: "\uD835\uDD43", name: "Mathematical Double-Struck Capital L", code: "U+1D543" },
  { styled: "\uD835\uDD77", name: "Mathematical Bold Fraktur Capital L", code: "U+1D577" },
  { styled: "\uD835\uDE7B", name: "Mathematical Monospace Capital L", code: "U+1D67B" },
  { styled: "\uFF2C", name: "Fullwidth Latin Capital Letter L", code: "U+FF2C" },
  { styled: "\u029F", name: "Latin Letter Small Capital L", code: "U+029F" },
  { styled: "\u0141", name: "Latin Capital Letter L With Stroke", code: "U+0141" },
];

export default function LPageContent({ faqs }: LPageContentProps) {
  return (
    <>
      <AlphabetLetterGenerator letter="L" defaultText="L" hideInputHeader />

      <SectionNav sections={pageSections} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <article id="l-in-every-font-style" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                L in Every Font Style
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Standard keyboards type exactly one version of L. Unicode quietly stores several dozen more, each assigned a permanent numeric address that any device can read and display.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Three distinct sources feed the 22 styles collected here. The largest group began life inside a block Unicode built for mathematical notation, long before social media repurposed it for decoration.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                A second, smaller set comes from circled and boxed character blocks, originally designed for numbered lists and labeled diagrams. The final group is not decorative at all, made up of real letters that other languages still use today.
              </p>

              <section id="unicode-names-for-l-styles" className="scroll-mt-[9rem] mt-16">
                <h3 className="font-headline text-2xl font-bold mb-6 leading-tight">
                  Unicode Names for L Styles
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The table below lists nine of the 22 styles by their official Unicode designation, the name recorded in the standard itself rather than a label a font site made up.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-outline-variant/20 mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-surface-container-high">
                      <tr>
                        <th className="px-4 py-3 text-sm font-bold uppercase tracking-widest text-on-surface-variant">Styled L</th>
                        <th className="px-4 py-3 text-sm font-bold uppercase tracking-widest text-on-surface-variant">Unicode Name</th>
                        <th className="px-4 py-3 text-sm font-bold uppercase tracking-widest text-on-surface-variant">Code Point</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10">
                      {unicodeTable.map((row) => (
                        <tr key={row.code} className="bg-surface-container-lowest">
                          <td className="px-4 py-3 text-lg font-body">{row.styled}</td>
                          <td className="px-4 py-3 text-on-surface-variant">{row.name}</td>
                          <td className="px-4 py-3 text-on-surface-variant font-mono">{row.code}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Thirteen more styles sit above with names just as precise, viewable by tapping each individual card.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  One entry above breaks the pattern. Script Capital L was never placed in the mathematical block at all; it lives in an older compatibility section from Unicode&apos;s early years, while its lowercase match sits in the newer block entirely.
                </p>
              </section>
            </article>

            <article id="where-did-the-letter-l-come-from" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Where Did the Letter L Come From?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Few letters can prove their history as cleanly as L. Ancient Phoenician traders used a symbol called Lamed, meaning ox goad, to represent this sound.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Greek scribes borrowed that shape and renamed it Lambda, still visible today as &#923; and &#955;. Etruscan writers carried it onward next, moving it toward the Italian peninsula.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Roman scribes then reshaped that Etruscan form into the L people recognize now, a vertical stem sitting on a horizontal foot. That basic outline has barely shifted in over two thousand years.
              </p>
            </article>

            <article id="l-in-other-alphabets" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                L in Other Alphabets
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Unlike many Latin letters, L did not stop evolving once it reached Rome. A handful of other alphabets still carry a genuine relative of it, each tracing back to that same Phoenician Lamed.
              </p>
              <ul className="list-disc list-inside text-on-surface-variant leading-relaxed text-lg mb-6 space-y-2">
                <li>Greek Lambda (&#923; &#955;): the direct ancestor of Latin L, still taught in classrooms today for math and physics symbols</li>
                <li>Cyrillic El (&#1051; &#1083;): descended from that same Greek Lambda, used across Russian, Bulgarian, Serbian, and other Slavic languages</li>
                <li>Hebrew Lamed (&#1500;): shares that ancient root with Phoenician Lamed, still the twelfth letter of the Hebrew alphabet</li>
                <li>Arabic Lam (&#1604;): carries that same ancient root forward, appearing throughout everyday Arabic script</li>
                <li>Coptic Laula (&#11414; &#11415;): Egyptian Christian scribes adapted it from an older Egyptian script, keeping the shape close to its Greek source</li>
              </ul>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                Every letter listed here has documented ancestry, verified through language history rather than assumed from visual similarity alone.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {otherAlphabetsL.map((entry) => (
                  <FontResultCard
                    key={entry.script}
                    label={entry.label}
                    text={entry.lower ? `${entry.upper} ${entry.lower}` : entry.upper}
                    stacked
                  />
                ))}
              </div>
            </article>

            <article id="where-do-people-use-styled-l" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Where Do People Use Styled L?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Gaming tags and profile bios account for most of the traffic styled L sees, especially names built around words like Legend or Luna.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Actual username fields tend to block it outright. Most platforms only accept plain alphanumeric input there, so any styled character typically gets rejected or quietly stripped before it saves.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Captions, bios, and display names accept these characters without any trouble on almost every platform. For a full name rather than one letter, the{" "}
                <Link href="/cursive-fonts" className={linkClass}>
                  handwritten font generator
                </Link>{" "}
                keeps the whole phrase visually consistent.
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
          These related generators go beyond single letters, covering decorative, polished, and platform-ready text styles for full words and phrases.
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

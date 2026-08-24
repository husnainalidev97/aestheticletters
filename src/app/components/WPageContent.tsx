import Link from "next/link";
import type { ReactNode } from "react";
import SectionNav from "./SectionNav";
import FAQAccordion from "./FAQAccordion";
import FontResultCard from "./FontResultCard";
import AlphabetLetterGenerator from "./AlphabetLetterGenerator";
import { otherAlphabetsW } from "../lib/alphabetFontStyles";

interface WPageContentProps {
  faqs: { question: string; answer: string | ReactNode }[];
}

const pageSections = [
  { id: "w-in-every-font-style", label: "W Font Styles" },
  { id: "unicode-names-for-w-styles", label: "Unicode Names" },
  { id: "why-is-w-called-double-u", label: "Why Double-U" },
  { id: "w-in-other-alphabets", label: "Other Alphabets" },
  { id: "where-people-use-styled-w", label: "Uses" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" },
];

const linkClass = "text-primary underline underline-offset-4 hover:no-underline";

const similarTools = [
  { label: "B in Different Fonts", href: "/b-in-different-fonts", icon: "\uD83C\uDD71", desc: "The B version of this alphabet font style page" },
  { label: "E in Different Fonts", href: "/e-in-different-fonts", icon: "\uD83C\uDD74", desc: "The E version of this alphabet font style page" },
  { label: "H in Different Fonts", href: "/h-in-different-fonts", icon: "\uD83C\uDD77", desc: "The H version of this alphabet font style page" },
  { label: "K in Different Fonts", href: "/k-in-different-fonts", icon: "\uD83C\uDD7A", desc: "The K version of this alphabet font style page" },
  { label: "R in Different Fonts", href: "/r-in-different-fonts", icon: "\uD83C\uDD81", desc: "The R version of this alphabet font style page" },
  { label: "S in Different Fonts", href: "/s-in-different-fonts", icon: "\uD83C\uDD82", desc: "The S version of this alphabet font style page" },
];

const popularTools = [
  { label: "Stylish Font Generator", href: "/stylish-fonts", icon: "\u2728", desc: "Clean, polished styles for bios and profiles" },
  { label: "Fancy Font Generator", href: "/fancy-fonts", icon: "\uD83C\uDF1F", desc: "More decorative Unicode styles" },
  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDD34", desc: "Thick, standout Unicode text" },
  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Styles for bios, captions, and comments" },
  { label: "Cursive Font Generator", href: "/cursive-fonts", icon: "\u2712", desc: "Flowing, handwritten script styles" },
];

const unicodeNameRows = [
  { glyph: "𝐖", name: "Mathematical Bold Capital W", code: "U+1D416" },
  { glyph: "𝒲", name: "Mathematical Script Capital W", code: "U+1D4B2" },
  { glyph: "𝔚", name: "Mathematical Fraktur Capital W", code: "U+1D51A" },
  { glyph: "𝕎", name: "Mathematical Double-Struck Capital W", code: "U+1D54E" },
  { glyph: "𝖂", name: "Mathematical Bold Fraktur Capital W", code: "U+1D582" },
  { glyph: "𝚆", name: "Mathematical Monospace Capital W", code: "U+1D686" },
  { glyph: "Ｗ", name: "Fullwidth Latin Capital Letter W", code: "U+FF37" },
  { glyph: "ᴡ", name: "Latin Letter Small Capital W", code: "U+1D21" },
  { glyph: "Ŵ", name: "Latin Capital Letter W With Circumflex", code: "U+0174" },
];

export default function WPageContent({ faqs }: WPageContentProps) {
  return (
    <>
      <AlphabetLetterGenerator letter="W" defaultText="W" hideInputHeader />

      <SectionNav sections={pageSections} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <article id="w-in-every-font-style" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                W in Every Font Style
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                A keyboard only produces one W. Unicode holds dozens more, each sitting at its own fixed address in the standard, waiting to be typed by anything that understands text.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                The 22 versions on this page split into three groups. Most come from a mathematical block built for equations, later adopted by social media for decoration.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                A smaller group comes from enclosed number and letter sets originally meant for lists and labels. The last group holds genuine letters borrowed from languages outside English.
              </p>

              <div id="unicode-names-for-w-styles" className="scroll-mt-[9rem] mt-12">
                <h3 className="font-headline text-2xl font-bold mb-6 leading-tight">
                  Unicode Names for W Styles
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Nine samples from the full set appear below, listed by their formal Unicode name rather than a nickname someone invented for a font tool.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-outline-variant/20 bg-surface-container-lowest">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead>
                      <tr className="border-b border-outline-variant/20 bg-surface-container-highest/50">
                        <th className="px-4 py-3 font-headline font-bold text-on-surface">Styled W</th>
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
                  The remaining thirteen styles carry equally specific names, viewable on each card above.
                </p>
              </div>
            </article>

            <article id="why-is-w-called-double-u" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Why Is W Called &quot;Double-U&quot;?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Roman writers never needed a separate symbol for the W sound. Their alphabet used V to cover two jobs at once, standing in for both a V sound and a W sound depending on the word.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                That shortcut caused confusion once European languages started needing a clear W. Scribes writing in the early Middle Ages began pairing two V letters side by side wherever the sound needed marking clearly. Over time, that pair fused visually into a single connected shape.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                English kept a fossil of the older habit in its name for the letter. Early scribes in England often wrote the doubled letter as two U shapes instead of two V shapes. U and V were still loosely interchangeable back then.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Say the name today and that old spelling choice still shows through, even though the printed letter clearly descends from V.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Few Latin letters share this kind of backstory. Most consonants trace a long chain back through Greek and Phoenician writing, stretching across thousands of years and several civilizations. W skips all of that.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Someone assembled it directly inside the Latin alphabet, centuries after Rome had already fallen. The goal was simple: fix a gap English and its neighbors kept running into. A whole sentence can wear this same bold treatment through the{" "}
                <Link href="/bold-font-generator" className={linkClass}>
                  bold generator
                </Link>
                , which restyles complete phrases rather than single letters.
              </p>
            </article>

            <article id="w-in-other-alphabets" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                W in Other Alphabets
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Most Latin letters can point to a clear parent letter in an older script. W cannot. No single ancestor exists, since the letter itself grew out of a doubling trick rather than a borrowed shape.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                A few characters from other writing systems still resemble it closely enough to mention, even without a direct family link.
              </p>
              <ul className="list-disc pl-6 space-y-4 text-on-surface-variant leading-relaxed text-lg mb-8">
                <li>
                  <span className="text-on-surface font-medium">Cyrillic Omega Ѡ ѡ:</span> appeared in Old Church Slavonic manuscripts, its rounded twin-arch outline is the nearest visual match W has anywhere outside Latin script
                </li>
                <li>
                  <span className="text-on-surface font-medium">Coptic Shei Ϣ ϣ:</span> Egyptian Christian scribes lifted the same rounded shape from Demotic writing centuries earlier
                </li>
                <li>
                  <span className="text-on-surface font-medium">W With Hook Ⱳ ⱳ:</span> not decorative at all, this is a working letter in the Puguli and Lobiri languages spoken in Burkina Faso today
                </li>
              </ul>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                Each entry above stands as a genuine letter somewhere, past or present, rather than a font trick dressed up to look historical.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {otherAlphabetsW.map((entry) => (
                  <FontResultCard
                    key={entry.script}
                    label={entry.label}
                    text={entry.lower ? `${entry.upper} ${entry.lower}` : entry.upper}
                    stacked
                  />
                ))}
              </div>
            </article>

            <article id="where-people-use-styled-w" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Where Do People Use Styled W?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Profile bios collect the largest share of styled W usage, followed closely by gaming tags and Discord display names. Anyone mocking up a quick logo or a thumbnail graphic reaches for it too, since no design software is required.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                One field almost always rejects it. Usernames on major platforms typically restrict input to plain alphanumeric characters, so a styled W entered there either gets stripped or blocked outright.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Bio text, captions, and display names sit in a different, more permissive category and generally render styled characters without issue. Someone styling an entire name rather than a single letter can pair this page with the{" "}
                <Link href="/stylish-fonts" className={linkClass}>
                  stylish font generator
                </Link>
                {" "}to keep the whole phrase consistent.
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
          Want more than W styles? Check out these generators for decorative, polished, and platform-ready text styles.
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

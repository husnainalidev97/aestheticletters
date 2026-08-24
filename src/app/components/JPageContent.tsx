import Link from "next/link";
import type { ReactNode } from "react";
import SectionNav from "./SectionNav";
import FAQAccordion from "./FAQAccordion";
import FontResultCard from "./FontResultCard";
import AlphabetLetterGenerator from "./AlphabetLetterGenerator";
import { otherAlphabetsJ } from "../lib/alphabetFontStyles";

interface JPageContentProps {
  faqs: { question: string; answer: string | ReactNode }[];
}

const pageSections = [
  { id: "j-in-every-font-style", label: "J Font Styles" },
  { id: "unicode-names-for-j-styles", label: "Unicode Names" },
  { id: "why-does-j-have-a-hook", label: "Why the Hook" },
  { id: "j-in-other-alphabets", label: "Other Alphabets" },
  { id: "where-do-people-use-styled-j", label: "Uses" },
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
  { label: "W in Different Fonts", href: "/w-in-different-fonts", icon: "\uD83C\uDD86", desc: "The W version of this alphabet font style page" },
];

const popularTools = [
  { label: "Stylish Font Generator", href: "/stylish-fonts", icon: "\u2728", desc: "Clean, polished styles for bios and profiles" },
  { label: "Fancy Font Generator", href: "/fancy-fonts", icon: "\uD83C\uDF1F", desc: "More decorative Unicode styles" },
  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDD34", desc: "Thick, standout Unicode text" },
  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Styles for bios, captions, and comments" },
  { label: "Cursive Font Generator", href: "/cursive-fonts", icon: "\u270D", desc: "Flowing cursive and handwriting-style text" },
  { label: "Discord Font Generator", href: "/discord-fonts", icon: "\uD83D\uDCAC", desc: "Styles for Discord bios and server names" },
];

const unicodeTable = [
  { styled: "\uD835\uDC09", name: "Mathematical Bold Capital J", code: "U+1D409" },
  { styled: "\uD835\uDCA5", name: "Mathematical Script Capital J", code: "U+1D4A5" },
  { styled: "\uD835\uDD0D", name: "Mathematical Fraktur Capital J", code: "U+1D50D" },
  { styled: "\uD835\uDD41", name: "Mathematical Double-Struck Capital J", code: "U+1D541" },
  { styled: "\uD835\uDD75", name: "Mathematical Bold Fraktur Capital J", code: "U+1D575" },
  { styled: "\uD835\uDE79", name: "Mathematical Monospace Capital J", code: "U+1D679" },
  { styled: "\uFF2A", name: "Fullwidth Latin Capital Letter J", code: "U+FF2A" },
  { styled: "\u1D0A", name: "Latin Letter Small Capital J", code: "U+1D0A" },
  { styled: "\u0134", name: "Latin Capital Letter J With Circumflex", code: "U+0134" },
];

export default function JPageContent({ faqs }: JPageContentProps) {
  return (
    <>
      <AlphabetLetterGenerator letter="J" defaultText="J" hideInputHeader />

      <SectionNav sections={pageSections} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <article id="j-in-every-font-style" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                J in Every Font Style
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                A keyboard only produces one J. The full standard assigns each version a permanent slot, ready for any device that reads Unicode to display it correctly.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                The 22 versions on this page split into three groups. Most come from a mathematical block built for equations, later adopted by social media for decoration. A smaller group comes from enclosed number and letter sets originally meant for lists and labels.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                The last group holds genuine letters still used in real languages today, not decoration at all. J carries no gap in its mathematical block either, a small technical detail some other letters on this site cannot claim.
              </p>

              <section id="unicode-names-for-j-styles" className="scroll-mt-[9rem] mt-16">
                <h3 className="font-headline text-2xl font-bold mb-6 leading-tight">
                  Unicode Names for J Styles
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Nine samples from the full set appear below, listed by their formal Unicode name rather than a nickname someone invented for a font tool.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-outline-variant/20 mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-surface-container-high">
                      <tr>
                        <th className="px-4 py-3 text-sm font-bold uppercase tracking-widest text-on-surface-variant">Styled J</th>
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
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  The remaining thirteen styles carry equally specific names, viewable on each card above.
                </p>
              </section>
            </article>

            <article id="why-does-j-have-a-hook" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Why Does J Have a Hook?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Roman writers never needed a separate letter for J. Their alphabet used I to cover two jobs, standing in for both a vowel sound and a consonant sound.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Medieval scribes developed a habit of stretching the final I in a row of numerals. The number three, written as iij, often ended in a longer, curved stroke. That swash was decorative at first, a flourish rather than a new letter.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                The swash slowly picked up its own identity. Italian scholar Gian Giorgio Trissino argued in 1524 that the vowel and consonant sounds deserved separate marks. He proposed I for the vowel and J for the consonant. Printers spread the idea across Europe over the next two centuries.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                English dictionaries and grammars did not fully separate I and J until well into the 1600s, later than most people assume. That late split is why old alphabetized lists, like early Bibles or law books, often file J entries under I instead.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                The hook shape survived because it started as handwriting, not as a designed symbol. Full phrases can carry that identical bold weight through the{" "}
                <Link href="/bold-font-generator" className={linkClass}>
                  bold generator
                </Link>
                , built to restyle entire sentences instead of a lone letter.
              </p>
            </article>

            <article id="j-in-other-alphabets" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                J in Other Alphabets
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Unlike some letters on this site, J actually has a traceable family line. The Phoenician letter yodh, a symbol for a hand, became the Greek iota, which the Romans borrowed as I. J split off from that same I centuries later.
              </p>
              <ul className="list-disc list-inside text-on-surface-variant leading-relaxed text-lg mb-6 space-y-2">
                <li>Greek Iota Ι ι: the direct ancestor of both I and J, carried into Latin through Etruscan traders roughly 2,700 years ago</li>
                <li>Cyrillic Je Ј ј: not a lookalike, but the actual Latin J itself, adopted into Serbian Cyrillic by Vuk Karadžić in his 1818 dictionary</li>
                <li>J With Stroke Ɉ ɉ: a working letter today in the Arhuaco language of Colombia and the Oniyan language of Guinea</li>
              </ul>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Each entry above stands as a genuine letter somewhere, past or present, rather than a font trick dressed up to look historical.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {otherAlphabetsJ.map((entry) => (
                  <FontResultCard
                    key={entry.script}
                    label={entry.label}
                    text={entry.lower ? `${entry.upper} ${entry.lower}` : entry.upper}
                    stacked
                  />
                ))}
              </div>
            </article>

            <article id="where-do-people-use-styled-j" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Where Do People Use Styled J?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Profile bios collect the largest share of styled J usage, followed closely by gaming tags and Discord display names. Anyone mocking up a quick logo or a monogram reaches for it too, since J starts a large share of common first names.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                One field almost always rejects it. Usernames on major platforms typically restrict input to plain alphanumeric characters, so a styled J entered there either gets stripped or blocked outright.
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
          Want more than J styles? Check out these generators for decorative, polished, and platform ready text styles.
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

import Link from "next/link";
import type { ReactNode } from "react";
import SectionNav from "./SectionNav";
import FAQAccordion from "./FAQAccordion";
import FontResultCard from "./FontResultCard";
import AlphabetLetterGenerator from "./AlphabetLetterGenerator";
import { otherAlphabetsG } from "../lib/alphabetFontStyles";

interface GPageContentProps {
  faqs: { question: string; answer: string | ReactNode }[];
}

const pageSections = [
  { id: "g-in-every-font-style", label: "G Font Styles" },
  { id: "unicode-names-for-g-styles", label: "Unicode Names" },
  { id: "why-was-g-invented", label: "Why G" },
  { id: "g-in-other-alphabets", label: "Other Alphabets" },
  { id: "where-do-people-use-styled-g", label: "Uses" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" },
];

const linkClass = "text-primary underline underline-offset-4 hover:no-underline";

const similarTools = [
  { label: "E in Different Fonts", href: "/e-in-different-fonts", icon: "\uD83C\uDD74", desc: "The E version of this alphabet font style page" },
  { label: "H in Different Fonts", href: "/h-in-different-fonts", icon: "\uD83C\uDD77", desc: "The H version of this alphabet font style page" },
  { label: "K in Different Fonts", href: "/k-in-different-fonts", icon: "\uD83C\uDD7A", desc: "The K version of this alphabet font style page" },
  { label: "R in Different Fonts", href: "/r-in-different-fonts", icon: "\uD83C\uDD81", desc: "The R version of this alphabet font style page" },
  { label: "S in Different Fonts", href: "/s-in-different-fonts", icon: "\uD83C\uDD82", desc: "The S version of this alphabet font style page" },
  { label: "W in Different Fonts", href: "/w-in-different-fonts", icon: "\uD83C\uDD86", desc: "The W version of this alphabet font style page" },
];

const popularTools = [
  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDD34", desc: "Thick, standout Unicode text" },
  { label: "Cursive Font Generator", href: "/cursive-fonts", icon: "\u270D", desc: "Flowing cursive and handwriting-style text" },
  { label: "Discord Font Generator", href: "/discord-fonts", icon: "\uD83D\uDCAC", desc: "Styles for Discord bios and server names" },
  { label: "Stylish Font Generator", href: "/stylish-fonts", icon: "\u2728", desc: "Clean, polished styles for bios and profiles" },
  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Styles for bios, captions, and comments" },
  { label: "Facebook Font Generator", href: "/facebook-fonts", icon: "\uD83D\uDC65", desc: "Styles for Facebook posts and profiles" },
];

const unicodeTable = [
  { styled: "\uD835\uDC06", name: "Mathematical Bold Capital G", code: "U+1D406" },
  { styled: "\uD835\uDCA2", name: "Mathematical Script Capital G", code: "U+1D4A2" },
  { styled: "\u210A", name: "Script Small G", code: "U+210A" },
  { styled: "\uD835\uDD0A", name: "Mathematical Fraktur Capital G", code: "U+1D50A" },
  { styled: "\uD835\uDD3E", name: "Mathematical Double-Struck Capital G", code: "U+1D53E" },
  { styled: "\uD835\uDD72", name: "Mathematical Bold Fraktur Capital G", code: "U+1D572" },
  { styled: "\uD835\uDE76", name: "Mathematical Monospace Capital G", code: "U+1D676" },
  { styled: "\uFF27", name: "Fullwidth Latin Capital Letter G", code: "U+FF27" },
  { styled: "\u0262", name: "Latin Letter Small Capital G", code: "U+0262" },
];

export default function GPageContent({ faqs }: GPageContentProps) {
  return (
    <>
      <AlphabetLetterGenerator letter="G" defaultText="G" hideInputHeader />

      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-4 md:pb-6">
        <p className="text-on-surface-variant leading-relaxed text-base md:text-lg max-w-3xl">
          This tool changes the letter G in different fonts, giving you 22 real Unicode styles to browse and copy. Each style pairs a capital G with a matching lowercase g. Type your own letter above, scroll through every card, then tap once to copy the style you like.
        </p>
      </section>

      <SectionNav sections={pageSections} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <article id="g-in-every-font-style" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                G in Every Font Style
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                A regular keyboard only produces one G. Unicode stores dozens of extra versions, each one sitting at a fixed address inside the standard.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                The 22 styles on this page split into three broad groups. Most sit inside a mathematical block first built for equations, later borrowed by social platforms for decoration and display.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Script and Bold Script echo the flowing shapes found in the{" "}
                <Link href="/cursive-fonts" className={linkClass}>
                  cursive text maker
                </Link>
                , applied here to one letter.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Lists and labels once needed their own enclosed numbering system, and a smaller group of G styles traces back to exactly that set. The remaining handful hold genuine letters borrowed from real alphabets outside English.
              </p>

              <section id="unicode-names-for-g-styles" className="scroll-mt-[9rem] mt-16">
                <h3 className="font-headline text-2xl font-bold mb-6 leading-tight">
                  Unicode Names for G Styles
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Nine samples from the full set appear below, listed by their formal Unicode name instead of a made up nickname.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-outline-variant/20 mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-surface-container-high">
                      <tr>
                        <th className="px-4 py-3 text-sm font-bold uppercase tracking-widest text-on-surface-variant">Styled G</th>
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
                  One entry above breaks the usual pattern. Script small g has no match inside the mathematical block, so Unicode reuses an older character built decades earlier. Letter E carries this exact same gap, confirmed through direct code point verification.
                </p>
              </section>
            </article>

            <article id="why-was-g-invented" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Why Was G Invented?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Most Latin letters evolved slowly over centuries, passed down through Phoenician and Greek writing before reaching Rome. G took a different path, with a known creator and an approximate date.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Early Latin used the letter C for two different sounds. It covered both a hard K sound and a softer G sound, leaving readers to guess from context.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Around 230 BCE, a Roman teacher named Spurius Carvilius Ruga is credited with solving this exact problem by modifying an existing letter. Adding a small stroke to C gave Latin its first dedicated symbol for the G sound.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Ancient sources point mainly to the historian Plutarch, though some scholars have questioned certain details over the years. Still, most language historians treat Ruga as the letter&apos;s likely creator.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                G&apos;s new position in the alphabet came from an old vacancy. The Latin alphabet had dropped the Greek letter Z earlier, and G simply filled that empty seventh spot.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                That single historical decision still shapes modern alphabetical order today. Every dictionary, keyboard, and directory listing G in seventh place traces back to one teacher&apos;s fix for a spelling problem. The{" "}
                <Link href="/bold-font-generator" className={linkClass}>
                  bold font generator
                </Link>{" "}
                applies that exact same weighted look, only stretched across a full word instead of one letter.
              </p>
            </article>

            <article id="g-in-other-alphabets" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                G in Other Alphabets
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                G traces back further than most Latin letters, unlike a symbol built entirely from scratch. Its shape descends from the Greek letter Gamma, itself borrowed from an older Phoenician sign.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                A few other alphabets still show that shared root today, even after centuries of separate development.
              </p>
              <ul className="list-disc list-inside text-on-surface-variant leading-relaxed text-lg mb-6 space-y-2">
                <li>Greek Gamma &#915; &#947;: the direct ancestor of G, passed to Rome through the Etruscan alphabet before Ruga split it into C and G</li>
                <li>Cyrillic Ghe &#1043; &#1075;: a separate branch from the same Greek source, still used today across Russian, Ukrainian, and several other Slavic languages</li>
                <li>Latin G With Hook &#403; &#608;: a genuine working letter in the Fula and Hausa alphabets, spoken across parts of West Africa today</li>
              </ul>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                Each entry above is a real letter used somewhere in the world, not a variant invented for social media.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {otherAlphabetsG.map((entry) => (
                  <FontResultCard
                    key={entry.script}
                    label={entry.label}
                    text={entry.lower ? `${entry.upper} ${entry.lower}` : entry.upper}
                    stacked
                  />
                ))}
              </div>
            </article>

            <article id="where-do-people-use-styled-g" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Where Do People Use Styled G?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Profile bios and gaming tags make up the largest share of styled G usage today. Discord display names follow close behind, and the{" "}
                <Link href="/discord-fonts" className={linkClass}>
                  discord font generator
                </Link>{" "}
                covers the wider set of styles for that platform.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Gaming culture also uses G inside a specific two letter phrase. Players type GG, short for good game, at the end of matches as a simple sign of respect.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Styling that phrase changes its tone slightly. A heavier style can read as more forceful, while a lighter style feels more casual between players.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                One field almost always blocks styled G entirely. Usernames on major platforms typically accept only plain letters and numbers, so a styled character gets stripped or rejected outright.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Bio text, captions, and display names sit in a more relaxed category and generally render styled characters correctly. Anyone styling a full username can pair this page with the{" "}
                <Link href="/stylish-fonts" className={linkClass}>
                  stylish font generator
                </Link>{" "}
                for longer phrases.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Instagram bios and captions accept every style on this page, matching the behavior covered on the{" "}
                <Link href="/instagram-fonts" className={linkClass}>
                  instagram font generator
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
          Want more than G styles? Check out these generators for decorative, polished text built for every platform.
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

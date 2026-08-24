import Link from "next/link";
import type { ReactNode } from "react";
import SectionNav from "./SectionNav";
import FAQAccordion from "./FAQAccordion";
import FontResultCard from "./FontResultCard";
import AlphabetLetterGenerator from "./AlphabetLetterGenerator";
import { otherAlphabetsH } from "../lib/alphabetFontStyles";

interface HPageContentProps {
  faqs: { question: string; answer: string | ReactNode }[];
}

const pageSections = [
  { id: "h-in-every-font-style", label: "H Font Styles" },
  { id: "unicode-names-for-h-styles", label: "Unicode Names" },
  { id: "why-do-some-hs-go-silent", label: "Why Silent" },
  { id: "h-in-other-alphabets", label: "Other Alphabets" },
  { id: "where-people-use-styled-h", label: "Uses" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" },
];

const linkClass = "text-primary underline underline-offset-4 hover:no-underline";

const similarTools = [
  { label: "B in Different Fonts", href: "/b-in-different-fonts", icon: "\uD83C\uDD71", desc: "The B version of this alphabet font style page" },
  { label: "E in Different Fonts", href: "/e-in-different-fonts", icon: "\uD83C\uDD74", desc: "The E version of this alphabet font style page" },
  { label: "K in Different Fonts", href: "/k-in-different-fonts", icon: "\uD83C\uDD7A", desc: "The K version of this alphabet font style page" },
  { label: "R in Different Fonts", href: "/r-in-different-fonts", icon: "\uD83C\uDD81", desc: "The R version of this alphabet font style page" },
  { label: "S in Different Fonts", href: "/s-in-different-fonts", icon: "\uD83C\uDD82", desc: "The S version of this alphabet font style page" },
  { label: "W in Different Fonts", href: "/w-in-different-fonts", icon: "\uD83C\uDD86", desc: "The W version of this alphabet font style page" },
];

const popularTools = [
  { label: "Stylish Font Generator", href: "/stylish-fonts", icon: "\u2728", desc: "Clean, polished styles for bios and profiles" },
  { label: "Fancy Font Generator", href: "/fancy-fonts", icon: "\uD83C\uDF1F", desc: "More decorative Unicode styles" },
  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDD34", desc: "Thick, standout Unicode text" },
  { label: "Cursive Font Generator", href: "/cursive-fonts", icon: "\u270D", desc: "Flowing cursive and handwriting-style text" },
  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Styles for bios, captions, and comments" },
];

const unicodeTable = [
  { styled: "\uD835\uDC07", name: "Mathematical Bold Capital H", code: "U+1D407" },
  { styled: "\u210B", name: "Script Capital H", code: "U+210B" },
  { styled: "\u210C", name: "Black-Letter Capital H", code: "U+210C" },
  { styled: "\u210D", name: "Double-Struck Capital H", code: "U+210D" },
  { styled: "\uD835\uDD73", name: "Mathematical Bold Fraktur Capital H", code: "U+1D573" },
  { styled: "\uD835\uDE77", name: "Mathematical Monospace Capital H", code: "U+1D677" },
  { styled: "\uFF28", name: "Fullwidth Latin Capital Letter H", code: "U+FF28" },
  { styled: "\u029C", name: "Latin Letter Small Capital H", code: "U+029C" },
  { styled: "\u0124", name: "Latin Capital Letter H With Circumflex", code: "U+0124" },
];

export default function HPageContent({ faqs }: HPageContentProps) {
  return (
    <>
      <AlphabetLetterGenerator letter="H" defaultText="H" hideInputHeader />

      <SectionNav sections={pageSections} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <article id="h-in-every-font-style" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                H in Every Font Style
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Standard keyboards produce exactly one version of H. The Unicode standard holds dozens more, each stored at its own permanent address inside a system every modern device already reads.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Three separate origins account for the 22 styles gathered on this page. A large share comes from a set built originally for math notation, later picked up by social platforms purely for its visual look. The boldest of these carries over naturally into full phrases through the{" "}
                <Link href="/bold-font-generator" className={linkClass}>
                  bold generator
                </Link>
                , not just single letters.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                A second, much smaller share comes from character sets built for enclosed lists and reference labels, never meant for styling at all. The final share belongs to working letters, still pronounced daily inside languages that sit outside English.
              </p>

              <section id="unicode-names-for-h-styles" className="scroll-mt-[9rem] mt-16">
                <h3 className="font-headline text-2xl font-bold mb-6 leading-tight">
                  Unicode Names for H Styles
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The table below pulls nine examples straight from the full set, each labeled with its registered Unicode name instead of a nickname a font site made up.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-outline-variant/20 mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-surface-container-high">
                      <tr>
                        <th className="px-4 py-3 text-sm font-bold uppercase tracking-widest text-on-surface-variant">Styled H</th>
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
                  Four styles here hide a small technical quirk. Script, Fraktur, and Double-Struck capitals were never built inside the main math styling set. Unicode routes them instead to an older set called Letterlike Symbols.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mt-4">
                  Italic lowercase h flips that pattern. Its real address belongs to a science symbol, the Planck constant, borrowed from a completely different field. None of this points to a broken generator. It simply shows how Unicode locked in character addresses long before anyone used them to decorate a bio.
                </p>
              </section>
            </article>

            <article id="why-do-some-hs-go-silent" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Why Do Some H&apos;s Go Silent?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                English speakers say the letter H two different ways. Most say aitch. Parts of Ireland and Australia say haitch instead, adding the very sound the letter is named for.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                That split traces back thousands of years. The letter began as a Semitic sign called heth, drawn as a fence or barrier around 1500 BCE. It carried a rough, throaty sound with no real match in English.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Greek scribes borrowed the shape and renamed it eta. Early Greek used it for the H sound, but many dialects later dropped that sound completely. Eta became a vowel instead, no longer connected to H at all.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Latin picked up the letter next and restored its original consonant sound. Rome&apos;s H sat firmly at the start of words like habere and hortus, pronounced clearly by most speakers.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Norman French changed English after 1066. French speakers had already dropped H from their own speech, and that habit carried straight into English. Words like hour, honest, and heir kept their spelling but lost the sound.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Modern English still carries both patterns side by side. Hero and happy pronounce the H clearly. Hour and honest stay silent, small leftovers of a sound French speakers stopped making centuries ago.
              </p>
            </article>

            <article id="h-in-other-alphabets" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                H in Other Alphabets
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Most Latin letters share a clear shape with letters in other alphabets, even once the sound changes. H offers a stranger case. Several alphabets reuse its exact shape for a completely different sound.
              </p>
              <ul className="list-disc list-inside text-on-surface-variant leading-relaxed text-lg mb-6 space-y-2">
                <li>Cyrillic Н looks identical to Latin H, yet Russian and other Slavic languages use it for the N sound, not H.</li>
                <li>Greek Η, the ancestor of Latin H, now stands for a long vowel and carries no H sound in modern Greek.</li>
                <li>Cherokee Ꮋ shares the same shape too, standing for an unrelated syllable inside that writing system.</li>
              </ul>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                One real letter still does H&apos;s own job outside English. Maltese uses Ħ, a stroked H, for a sound close to English H but produced further back in the throat.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                These lookalikes are not decorative tricks. Each one is a genuine letter, doing real work in a language that has nothing to do with English H.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {otherAlphabetsH.map((entry) => (
                  <FontResultCard
                    key={entry.script}
                    label={entry.label}
                    text={entry.lower ? `${entry.upper} ${entry.lower}` : entry.upper}
                    stacked
                  />
                ))}
              </div>
            </article>

            <article id="where-people-use-styled-h" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Where Do People Use Styled H?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Social bios and gaming display names account for the heaviest real world use of styled H. Fantasy and gaming identities often lean toward the gothic or fraktur look, while calmer names lean toward script styles instead.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                One field consistently blocks it. Account usernames run through a stricter filter built around plain letters and digits, so pasted styled text either disappears or triggers an error on save.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Every other visible field, including bios, captions, and display names, handles the same styled text without a hitch. Someone dressing up a full phrase rather than one letter can move to the{" "}
                <Link href="/stylish-fonts" className={linkClass}>
                  stylish font generator
                </Link>{" "}
                for matching results across the whole line.
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
          Want more than H styles? Check out these generators for decorative, polished, and platform-ready text styles.
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

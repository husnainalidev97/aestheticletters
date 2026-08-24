import Link from "next/link";
import type { ReactNode } from "react";
import SectionNav from "./SectionNav";
import FAQAccordion from "./FAQAccordion";
import FontResultCard from "./FontResultCard";
import AlphabetLetterGenerator from "./AlphabetLetterGenerator";
import { otherAlphabetsR } from "../lib/alphabetFontStyles";

interface RPageContentProps {
  faqs: { question: string; answer: string | ReactNode }[];
}

const pageSections = [
  { id: "r-in-every-font-style", label: "R Font Styles" },
  { id: "why-do-some-r-styles-look-different", label: "Why Different" },
  { id: "r-in-other-alphabets", label: "Other Alphabets" },
  { id: "where-people-use-styled-r", label: "Uses" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" },
];

const linkClass = "text-primary underline underline-offset-4 hover:no-underline";

const similarTools = [
  { label: "B in Different Fonts", href: "/b-in-different-fonts", icon: "\uD83C\uDD71", desc: "The B version of this alphabet font style page" },
  { label: "E in Different Fonts", href: "/e-in-different-fonts", icon: "\uD83C\uDD74", desc: "The E version of this alphabet font style page" },
  { label: "H in Different Fonts", href: "/h-in-different-fonts", icon: "\uD83C\uDD77", desc: "The H version of this alphabet font style page" },
  { label: "K in Different Fonts", href: "/k-in-different-fonts", icon: "\uD83C\uDD7A", desc: "The K version of this alphabet font style page" },
  { label: "S in Different Fonts", href: "/s-in-different-fonts", icon: "\uD83C\uDD82", desc: "The S version of this alphabet font style page" },
  { label: "W in Different Fonts", href: "/w-in-different-fonts", icon: "\uD83C\uDD86", desc: "The W version of this alphabet font style page" },
];

const popularTools = [
  { label: "Stylish Font Generator", href: "/stylish-fonts", icon: "\u2728", desc: "Clean, polished styles for bios and profiles" },
  { label: "Fancy Font Generator", href: "/fancy-fonts", icon: "\uD83C\uDF1F", desc: "More decorative Unicode styles" },
  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDD34", desc: "Thick, standout Unicode text" },
  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Styles for bios, captions, and comments" },
];

export default function RPageContent({ faqs }: RPageContentProps) {
  return (
    <>
      <AlphabetLetterGenerator letter="R" defaultText="R" hideInputHeader />

      <SectionNav sections={pageSections} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <article id="r-in-every-font-style" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                R in Every Font Style
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                This page shows the letter R in different fonts across three parts. The first grid shows the standard Unicode styles with the uppercase R and lowercase r together in each card. The second grid shows capital R decorated with symbols and frames, and the third grid shows small r decorated the same way.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Each card has its own copy button. One click copies the exact Unicode characters to the clipboard, ready to paste into a bio, caption, or username field.
              </p>
            </article>

            <article id="why-do-some-r-styles-look-different" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Why Do Some R Styles Look Different?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Script, Fraktur, and Double-Struck R come from an older part of Unicode, called the Letterlike Symbols block. Their expected spot in the newer Mathematical Alphanumeric block was left empty, so these three styles use the older characters instead.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Only these three styles carry this exception. The remaining styles, including the popular Bold style, follow the newer Unicode block without any gap. The{" "}
                <Link href="/bold-font-generator" className={linkClass}>
                  bold font generator
                </Link>{" "}
                turns full words into that same bold weight instantly.
              </p>
            </article>

            <article id="r-in-other-alphabets" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                R in Other Alphabets
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                These are real letters from other alphabets that happen to look like R. They are not font styles of R.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Each character below belongs to its own writing system, such as Cyrillic, Thai, or Cherokee. They carry real meaning in their language and are not simply decorative fonts made from the Latin R.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                The letter R traces back to the Phoenician letter resh, which meant head. Ancient Greeks adapted it into rho, then Etruscan and Roman scribes reshaped it into the capital R used today. This same shape later influenced letters in Cyrillic and other alphabets.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {otherAlphabetsR.map((entry) => (
                  <FontResultCard
                    key={entry.script}
                    label={entry.label}
                    text={entry.lower ? `${entry.upper} ${entry.lower}` : entry.upper}
                    stacked
                  />
                ))}
              </div>
            </article>

            <article id="where-people-use-styled-r" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Where Do People Use Styled R?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Styled R text works well in Instagram bios, Discord names, gaming profiles, and logo designs. A quick comparison across styles usually reveals the best match for a caption or display name.
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
          Want more than R styles? Check out these generators for decorative, polished, and platform-ready text styles.
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

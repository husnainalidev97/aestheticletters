import Link from "next/link";
import type { ReactNode } from "react";
import SectionNav from "./SectionNav";
import FAQAccordion from "./FAQAccordion";
import FontResultCard from "./FontResultCard";
import AlphabetLetterGenerator from "./AlphabetLetterGenerator";
import { otherAlphabetsM } from "../lib/alphabetFontStyles";

interface MPageContentProps {
  faqs: { question: string; answer: string | ReactNode }[];
}

const pageSections = [
  { id: "unicode-names-for-the-letter-m", label: "Unicode Names" },
  { id: "where-does-the-letter-m-come-from", label: "Origin" },
  { id: "m-in-other-alphabets", label: "Other Alphabets" },
  { id: "where-people-use-stylish-m-text", label: "Uses" },
  { id: "is-it-safe-to-use-this-m-font-generator", label: "Safety" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" },
];

const linkClass = "text-primary underline underline-offset-4 hover:no-underline";

const similarTools = [
  { label: "B in Different Fonts", href: "/b-in-different-fonts", icon: "\uD83C\uDD71", desc: "The B version of this alphabet font style page" },
  { label: "E in Different Fonts", href: "/e-in-different-fonts", icon: "\uD83C\uDD74", desc: "The E version of this alphabet font style page" },
  { label: "H in Different Fonts", href: "/h-in-different-fonts", icon: "\uD83C\uDD77", desc: "The H version of this alphabet font style page" },
  { label: "G in Different Fonts", href: "/g-in-different-fonts", icon: "\uD83C\uDD76", desc: "The G version of this alphabet font style page" },
  { label: "L in Different Fonts", href: "/l-in-different-fonts", icon: "\uD83C\uDD7B", desc: "The L version of this alphabet font style page" },
  { label: "S in Different Fonts", href: "/s-in-different-fonts", icon: "\uD83C\uDD82", desc: "The S version of this alphabet font style page" },
];

const popularTools = [
  { label: "Stylish Font Generator", href: "/stylish-fonts", icon: "\u2728", desc: "Clean, polished styles for bios and profiles" },
  { label: "Fancy Font Generator", href: "/fancy-fonts", icon: "\uD83C\uDF1F", desc: "More decorative Unicode styles" },
  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDD34", desc: "Thick, standout Unicode text" },
  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Styles for bios, captions, and comments" },
  { label: "Cursive Font Generator", href: "/cursive-fonts", icon: "\u270D", desc: "Flowing cursive and handwriting-style text" },
  { label: "Big Text Generator", href: "/big-text-generator", icon: "\uD83D\uDD24", desc: "Large, attention-grabbing Unicode text" },
];

const otherAlphabetNotes = [
  {
    heading: "Cyrillic Em",
    text: "Cyrillic Em looks almost identical to Latin M, since both letters share the same Phoenician root. Russian, Bulgarian, and Ukrainian all use this letter today, spelled and pronounced the same way.",
  },
  {
    heading: "Greek Mu",
    text: "Greek Mu sits right in the middle of the M family tree, connecting Phoenician Mem to Latin M. It still appears constantly in mathematics and physics, representing units like micro and friction.",
  },
  {
    heading: "Coptic Mi",
    text: "Coptic Mi descended from the same Greek Mu, carried into Egypt through the Coptic alphabet. It still appears in Coptic Christian texts and liturgical readings used today.",
  },
  {
    heading: "M With Hook",
    text: "M With Hook represents a specific nasal sound in the International Phonetic Alphabet, not a letter from any national alphabet. Linguists use it to transcribe sounds that plain M cannot capture accurately.",
  },
];

const usePlaces = [
  "Monogram logos and personal branding marks",
  "Wedding invitations and stationery designs",
  "YouTube channel names and video titles",
  "Discord server names and channel headers",
  "Gaming usernames across PUBG, Free Fire, and Fortnite",
];

export default function MPageContent({ faqs }: MPageContentProps) {
  return (
    <>
      <AlphabetLetterGenerator letter="M" defaultText="M" hideInputHeader />

      <SectionNav sections={pageSections} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <article id="unicode-names-for-the-letter-m" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Unicode Names for the Letter M
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Every font style above comes from a real Unicode character with its own formal name and code point. Each one was checked by direct lookup, not guesswork.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Every code point matches the records kept by the Unicode Consortium, the nonprofit group responsible for maintaining the standard.
              </p>

              <section className="mt-16">
                <h3 className="font-headline text-2xl font-bold mb-6 leading-tight">
                  Why Script Capital M Sits in a Different Block
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Script capital M does not exist inside the main Mathematical Alphanumeric block, unlike its lowercase partner. Unicode reuses an older character instead, placed at U+2133 inside the Letterlike Symbols block. This same gap pattern shows up across several other letters, confirmed through direct Python verification rather than assumption.
                </p>
              </section>
            </article>

            <article id="where-does-the-letter-m-come-from" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Where Does the Letter M Come From?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                The letter M traces back further than most people expect, starting with an ancient Egyptian symbol for water. Phoenician scribes turned that wave shape into Mem, one of the earliest alphabet letters on record.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Greek speakers adopted Mem and renamed it Mu, keeping much of its original shape and sound. Etruscan traders carried Mu into Italy, where early Latin writers reshaped it into the M used today.
              </p>
            </article>

            <article id="m-in-other-alphabets" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                M in Other Alphabets
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Several other alphabets carry a letter that looks or sounds close to M, and the reason runs deeper than coincidence. Merchant sailors carried the Phoenician alphabet along Mediterranean trade routes starting around 1000 BC.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                Each culture that borrowed it kept the same letter shape, while the sound shifted slightly over time. That shared origin explains why M still looks familiar across three completely different writing systems today.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {otherAlphabetsM.map((entry) => (
                  <FontResultCard
                    key={entry.script}
                    label={entry.label}
                    text={entry.lower ? `${entry.upper} ${entry.lower}` : entry.upper}
                    stacked
                  />
                ))}
              </div>
              <div className="flex flex-col gap-8">
                {otherAlphabetNotes.map((note) => (
                  <div key={note.heading}>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">{note.heading}</h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">{note.text}</p>
                  </div>
                ))}
              </div>
            </article>

            <article id="where-people-use-stylish-m-text" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Where People Use Stylish M Text?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                People reach for these M styles across social media bios, gaming usernames, and personal branding projects. A bold or fraktur M can make a single initial stand out in a crowded feed.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                Common places these styles show up:
              </p>
              <ul className="list-disc list-inside text-on-surface-variant leading-relaxed text-lg mb-6 space-y-2">
                {usePlaces.map((place) => (
                  <li key={place}>{place}</li>
                ))}
              </ul>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Many people also use the{" "}
                <Link href="/stylish-fonts" className={linkClass}>
                  stylish font generator
                </Link>{" "}
                to style a full name instead of just one letter.
              </p>
            </article>

            <article id="is-it-safe-to-use-this-m-font-generator" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Is It Safe to Use This M Font Generator?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Yes, this generator runs entirely inside your browser through JavaScript, so nothing gets uploaded or stored anywhere. Your text never leaves your device during the conversion process, keeping the entire tool private and safe.
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

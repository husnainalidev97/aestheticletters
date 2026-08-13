"use client";

import { useState } from "react";
import Link from "next/link";
import FAQAccordion from "./FAQAccordion";
import SectionNav from "./SectionNav";
import AlphabetLetterGenerator from "./AlphabetLetterGenerator";

const TAGS = ["Instagram", "Discord", "Gaming", "Logos", "Captions"];

const FAQS = [
  {
    question: "Does styled R text work in usernames?",
    answer:
      "Most platforms only allow plain letters and numbers in usernames, but styled R text works in bios, captions, and display names.",
  },
  {
    question: "Are these real fonts?",
    answer:
      "Not in the traditional sense. Each style here is a separate Unicode character with its own code point, not a typeface applied to normal letters. Because of this, the text pastes and displays as plain characters everywhere, with nothing to install.",
  },
  {
    question: "Why do some R styles look different from others?",
    answer:
      "A few styles come from an older part of Unicode, so they look more distinct than the rest.",
  },
  {
    question: "Can I style the lowercase r too?",
    answer:
      "Yes, every style on this page includes both the uppercase R and lowercase r.",
  },
  {
    question: "Why do some styled R characters show as boxes or question marks?",
    answer:
      "Some devices and apps do not support every Unicode character. When that happens, a styled R may show as a box or a question mark instead of the correct symbol. Try a different style from the list, or update the app or browser to fix this.",
  },
  {
    question: "Is it free to use these R fonts?",
    answer:
      "Yes, every R style on this page is completely free. No signup or payment is needed. Copy and paste any style for personal projects, social media, or commercial use.",
  },
  {
    question: "Can I create my own font style for R?",
    answer:
      "Not directly on this page. Unicode styles are fixed characters, not something anyone can design freely. Graphic design tools such as Photoshop or Canva allow fully custom letterforms instead.",
  },
];

const pageSections = [
  { id: "r-in-every-font-style", label: "R in Every Font Style" },
  { id: "why-some-r-styles-look-different", label: "Why Styles Differ" },
  { id: "r-in-other-alphabets", label: "R in Other Alphabets" },
  { id: "where-people-use-styled-r", label: "Where to Use" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" },
];

const popularTools = [
  {
    label: "Stylish Font Generator",
    href: "/stylish-fonts",
    icon: "💎",
    desc: "Premium text styles",
  },
  {
    label: "Fancy Font Generator",
    href: "/fancy-fonts",
    icon: "✨",
    desc: "Decorative text art",
  },
];

const linkClass = "text-primary underline underline-offset-4 hover:no-underline";

export default function RPageContent() {
  const [text, setText] = useState("R");

  return (
    <>
      {/* Interactive font generator */}
      <AlphabetLetterGenerator
        letter="R"
        defaultText="R"
        hideInputHeader
        value={text}
        onChange={setText}
      >
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10 space-y-4">
          <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
            This page shows R in different fonts across sixteen verified Unicode
            styles. Each card displays the uppercase R and lowercase r together.
            Each style comes with its own copy button beside it. One click sends
            the text to the clipboard, ready to drop straight into a caption,
            bio, or username field.
          </p>
          <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
            These sixteen styles cover every widely supported Unicode variant
            for R. No additional verified styles currently exist beyond this
            set.
          </p>
        </div>
      </AlphabetLetterGenerator>

      {/* Sticky section navigation */}
      <SectionNav sections={pageSections} />

      {/* SEO Content */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            <article
              id="why-some-r-styles-look-different"
              className="scroll-mt-[9rem]"
            >
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Why Do Some R Styles Look Different?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Script, Fraktur, and Double-Struck R come from an older part of
                Unicode, called the Letterlike Symbols block. Their expected spot
                in the newer Mathematical Alphanumeric block was left empty, so
                these three styles use the older characters instead.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Only these three styles carry this exception. The other thirteen
                styles, including the popular Bold style, follow the newer Unicode
                block without any gap.{" "}
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
                These are real letters from other alphabets that happen to look
                like R. They are not font styles of R.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Each character belongs to its own writing system, such as
                Cyrillic, Thai, or Cherokee. They carry real meaning in their
                language and are not simply decorative fonts made from the Latin
                R.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                The letter R traces back to the Phoenician letter resh, which
                meant head. Ancient Greeks adapted it into rho, then Etruscan
                and Roman scribes reshaped it into the capital R used today.
                This same shape later influenced letters in Cyrillic and other
                alphabets.
              </p>
            </article>

            <article id="where-people-use-styled-r" className="scroll-mt-[9rem]">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                Where People Use Styled R?
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Styled R text works well in Instagram bios, Discord names,
                gaming profiles, and logo designs. A quick comparison across
                styles usually reveals the best match for a caption or display
                name.
              </p>
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="p-8 bg-primary-container/10 rounded-2xl border border-primary/10">
              <h3 className="font-headline font-bold text-primary mb-4 flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
                Privacy First
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                All letter transforms run in your browser. Nothing you type is
                sent to a server.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Explore More Tools */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-16 pb-8">
        <h2
          className="font-headline text-3xl md:text-4xl font-bold mb-3 text-center leading-tight scroll-mt-[9rem]"
          id="explore-more-tools"
        >
          Explore More
        </h2>
        <p className="text-on-surface-variant text-center text-sm md:text-base mb-10 max-w-xl mx-auto">
          More ways to style your text while the rest of the alphabet pages are
          being prepared.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Similar Font Styles */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4 flex items-center gap-2">
              <span className="inline-block w-1 h-5 rounded-full bg-primary" />
              Similar Font Styles
            </h3>
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 text-on-surface-variant text-sm">
              Other alphabet font pages are coming soon. Only the R page is live
              right now.
            </div>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4 flex items-center gap-2">
              <span className="inline-block w-1 h-5 rounded-full bg-primary" />
              Popular Text Tools
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

      {/* FAQ Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-12 md:py-24">
        <h2
          className="font-headline text-2xl md:text-4xl font-bold mb-16 text-center scroll-mt-[9rem]"
          id="frequently-asked-questions"
        >
          Frequently Asked Questions
        </h2>
        <FAQAccordion faqs={FAQS} />
      </section>
    </>
  );
}

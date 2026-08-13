"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import FAQAccordion from "./FAQAccordion";
import SectionNav from "./SectionNav";
import AlphabetLetterGenerator from "./AlphabetLetterGenerator";

const pageSections = [
  { id: "how-to-use-this-r-in-different-fonts-generator", label: "How to Use" },
  { id: "what-makes-these-r-fonts-work", label: "What Makes These" },
  { id: "r-font-styles-overview", label: "R Font Styles" },
  { id: "the-real-scripts-behind-r", label: "The Real Scripts" },
  { id: "best-uses-for-styled-r", label: "Best Uses for" },
  { id: "will-these-r-fonts-work-everywhere", label: "Will These R" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" },
];

type Subsection = { heading: string; paragraphs: ReactNode[] };
type ContentSection = {
  id?: string;
  heading: string;
  paragraphs?: ReactNode[];
  subsections?: Subsection[];
};

const introParagraphs = [
  "Type something below and watch the letter R transform into different Unicode styles right in front of you. The cards update as you type, so you can compare looks instantly and copy the one that fits your post.",
  "Everything happens in your browser. There is nothing to install, no account to create, and no text is sent to a server.",
];

const sections: ContentSection[] = [
  {
    id: "how-to-use-this-r-in-different-fonts-generator",
    heading: "How to Use This R in Different Fonts Generator?",
    paragraphs: [
      "Start typing in the box above. Each style card updates in real time, so you can see the uppercase and lowercase R side by side as you type.",
      "When you find a style you like, tap the copy button on that card. The styled R goes straight to your clipboard, ready to paste into a bio, caption, or username field.",
      "Some apps do not support every Unicode character. If a style pastes as a box or question mark, that is the app limiting its font support, not the tool breaking. Try another style or a different field and it usually works.",
    ],
  },
  {
    id: "what-makes-these-r-fonts-work",
    heading: "What Makes These R Fonts Work? (Unicode Explanation)",
    paragraphs: [
      "The styles on this page are not installed fonts. Each one is a separate Unicode character with its own code point, the same shared standard that makes text display consistently across devices.",
      "Unicode assigns a unique code to every letter, symbol, and script in the world. When you type a normal R, the tool swaps it for a mathematical bold R, a script R, a double-struck R, or another Unicode equivalent.",
      "Because the output is real text, not an image, it pastes anywhere plain text is accepted. It also means the result depends on the app or device supporting that specific Unicode block.",
    ],
  },
  {
    id: "r-font-styles-overview",
    heading: "R Font Styles Overview",
    paragraphs: [
      "The generator above shows sixteen verified Unicode styles for the letter R. Each card displays the uppercase and lowercase form together when the input is a single R.",
      "Content for the detailed style breakdown will be added here once final copy is provided.",
    ],
    subsections: [
      {
        heading: "Bold, Italic, and Sans Styles",
        paragraphs: [
          "These come from the Mathematical Alphanumeric Symbols block. They cover both uppercase and lowercase R and are widely supported on modern devices.",
        ],
      },
      {
        heading: "Script, Fraktur, and Double-Struck",
        paragraphs: [
          "A few R styles come from the older Letterlike Symbols block. They look more distinct because the newer block left those specific slots empty.",
        ],
      },
    ],
  },
  {
    id: "the-real-scripts-behind-r",
    heading: "The Real Scripts Behind Styled R",
    paragraphs: [
      "Some of the characters used here come from real writing systems, not decorative fonts. Cyrillic, Cherokee, Thai, and other alphabets contain letters that happen to look like the Latin R.",
      "Each of these carries its own history and meaning. The page will explain those backgrounds once the final content is ready.",
    ],
  },
  {
    id: "best-uses-for-styled-r",
    heading: "Best Uses for Styled R",
    paragraphs: [
      "Styled R text works best in short fields where a little personality stands out: bios, display names, captions, and one-line comments.",
      "Avoid using styled characters for email addresses, phone numbers, or anywhere searchable text matters. Some platforms also reject unusual characters in usernames.",
    ],
  },
  {
    id: "will-these-r-fonts-work-everywhere",
    heading: "Will These R Fonts Work Everywhere?",
    paragraphs: [
      "Not every device or app supports every Unicode block. Some styled R characters may appear as boxes or question marks on older systems or apps with limited fonts.",
      "The best way to test is to copy a style and paste it where you plan to use it. If it does not render, choose another style from the grid above.",
    ],
  },
];

const faqs = [
  {
    question: "Does styled R text work in usernames?",
    answer:
      "Most platforms only allow plain letters and numbers in usernames, but styled R text works in bios, captions, and display names.",
  },
  {
    question: "Are these real fonts?",
    answer:
      "Not in the traditional sense. Each style is a separate Unicode character with its own code point, not a typeface applied to normal letters.",
  },
  {
    question: "Why do some R styles look different from others?",
    answer:
      "A few styles come from an older part of Unicode, so they look more distinct than the rest.",
  },
  {
    question: "Why do some styled R characters show as boxes?",
    answer:
      "Some devices and apps do not support every Unicode character. When that happens, a styled R may show as a box or question mark instead of the correct symbol.",
  },
];

const similarTools = [
  { label: "Aesthetic Fonts", href: "/", icon: "\u2728", desc: "All-in-one text styler for every look" },
  { label: "Fancy Fonts", href: "/fancy-fonts", icon: "\uD83C\uDF1F", desc: "More decorative Unicode styles" },
  { label: "Stylish Fonts", href: "/stylish-fonts", icon: "\uD83D\uDD24", desc: "Clean, polished styles for bios" },
  { label: "Cursive Fonts", href: "/cursive-fonts", icon: "\u270D\uFE0F", desc: "Flowing, handwritten looking styles" },
];

const popularTools = [
  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDD35", desc: "Thick, standout Unicode text" },
  { label: "Discord Font Generator", href: "/discord-fonts", icon: "\uD83C\uDFAE", desc: "Styles for usernames and messages" },
  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Styles for bios, captions, and comments" },
  { label: "Halloween Font Generator", href: "/halloween-fonts", icon: "\uD83C\uDF83", desc: "Spooky, atmospheric seasonal styles" },
];

export default function RPageContent() {
  return (
    <>
      {/* Interactive font generator */}
      <AlphabetLetterGenerator letter="R" defaultText="R" hideInputHeader />

      {/* Sticky section navigation */}
      <SectionNav sections={pageSections} />

      {/* SEO Content */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            <article>
              {introParagraphs.map((text, i) => (
                <p
                  key={i}
                  className={`text-on-surface-variant leading-relaxed text-lg ${
                    i < introParagraphs.length - 1 ? "mb-6" : ""
                  }`}
                >
                  {text}
                </p>
              ))}
            </article>

            {sections.map((section) => (
              <article
                key={section.heading}
                id={section.id}
                className="scroll-mt-[9rem]"
              >
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((text, i) => (
                  <p
                    key={i}
                    className="text-on-surface-variant leading-relaxed text-lg mb-6"
                  >
                    {text}
                  </p>
                ))}
                {section.subsections && (
                  <div className="space-y-8 mt-2">
                    {section.subsections.map((sub) => (
                      <div key={sub.heading}>
                        <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                          {sub.heading}
                        </h3>
                        {sub.paragraphs.map((text, i) => (
                          <p
                            key={i}
                            className="text-on-surface-variant leading-relaxed text-lg mb-3"
                          >
                            {text}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
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
                Client-Side Security
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We prioritize your privacy. All transformations happen 100% in
                your browser. We never store or track the text you type.
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
          Explore More Tools
        </h2>
        <p className="text-on-surface-variant text-center text-sm md:text-base mb-10 max-w-xl mx-auto">
          Want more than R styles? Check out these generators for decorative,
          polished, and platform-ready text styles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Similar Font Styles */}
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
          {/* Popular Tools */}
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

      {/* FAQ Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-12 md:py-24">
        <h2
          className="font-headline text-2xl md:text-4xl font-bold mb-16 text-center scroll-mt-[9rem]"
          id="frequently-asked-questions"
        >
          Frequently Asked Questions
        </h2>
        <FAQAccordion faqs={faqs} />
      </section>
    </>
  );
}

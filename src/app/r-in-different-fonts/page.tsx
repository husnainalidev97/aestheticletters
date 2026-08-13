import type { Metadata } from "next";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import SectionNav from "../components/SectionNav";
import FAQAccordion from "../components/FAQAccordion";
import AlphabetLetterGenerator from "../components/AlphabetLetterGenerator";
import { letterRStyles, otherAlphabetsR } from "../lib/alphabetFontStyles";

const pageTitle = "R in Different Fonts — Copy & Paste Unicode R Styles";
const pageDescription =
  "See the letter R in 16 verified Unicode font styles. Copy and paste 𝓡, 𝕽, 𝑅, Ⓡ, and more for Instagram, Discord, gaming names, and captions.";
const canonicalUrl = "https://www.aestheticletters.com/r-in-different-fonts";
const hubUrl = "https://www.aestheticletters.com/alphabet-fonts";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: canonicalUrl,
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "https://www.aestheticletters.com/og-image.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["https://www.aestheticletters.com/og-image.webp"],
  },
};

const pageSections = [
  { id: "r-in-every-font-style", label: "R in Every" },
  { id: "why-some-r-styles-look-different", label: "Why Some R" },
  { id: "r-in-other-alphabets", label: "R in Other" },
  { id: "use-cases", label: "Use Cases" },
  { id: "frequently-asked-questions", label: "FAQ" },
  { id: "explore-more-tools", label: "Explore" },
];

const faqs = [
  {
    question: "Why does the same R style look different on two phones?",
    answer:
      "Each device ships its own set of Unicode fonts. When a code point is not included in a font, the operating system substitutes a fallback glyph or shows a box. Mathematical script, fraktur, and double-struck R are present in most modern systems but can be missing on older Android devices.",
  },
  {
    question: "Is the double-struck R the same as the real-numbers symbol?",
    answer:
      "Yes. The double-struck capital R (ℝ, U+211D) was added to Unicode as the symbol for real numbers. It is one of a handful of pre-existing letterlike symbols that mathematicians used long before the Mathematical Alphanumeric Symbols block was created.",
  },
  {
    question: "Can I use these R styles in my Instagram bio or Discord name?",
    answer:
      "You can paste any of the Unicode Rs shown here into Instagram, Discord, TikTok, Facebook, WhatsApp, and most games. If a platform rejects a character, try the bold, italic, or fullwidth styles first because they have the widest support.",
  },
  {
    question: "Are the R characters from other alphabets real letters?",
    answer:
      "Yes. The Cyrillic, Armenian, Thai, Cherokee, and Canadian Aboriginal characters are official letters in those writing systems. The Chinese character 尺 is a real CJK character used as a visual lookalike, not a phonetic equivalent.",
  },
];

const useCaseLinks = [
  { label: "Instagram", href: "/instagram-fonts" },
  { label: "Discord", href: "/discord-fonts" },
  { label: "Gaming", href: "/bold-font-generator" },
  { label: "Logos", href: "/cursive-fonts" },
  { label: "Captions", href: "/fancy-fonts" },
];

const exploreMoreCards = [
  {
    title: "Bold Font Generator",
    description: "81 bold Unicode styles for any letter, word, or caption.",
    href: "/bold-font-generator",
    icon: "format_bold",
  },
  {
    title: "Cursive Fonts",
    description: "Flowing script and handwriting styles for a refined look.",
    href: "/cursive-fonts",
    icon: "draw",
  },
];

export default function RInDifferentFontsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: pageTitle,
        description: pageDescription,
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-08-13T08:00:00+00:00",
        dateModified: "2026-08-13T08:00:00+00:00",
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aestheticletters.com/" },
          { "@type": "ListItem", position: 2, name: "Alphabet Fonts", item: hubUrl },
          { "@type": "ListItem", position: 3, name: "R in Different Fonts", item: canonicalUrl },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${canonicalUrl}#styles`,
        name: "R in Every Font Style",
        numberOfItems: letterRStyles.length,
        itemListElement: letterRStyles.map((style, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: style.name,
          url: `${canonicalUrl}#${style.name.toLowerCase().replace(/\s+/g, "-")}`,
        })),
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Copy an R in a Different Font",
    description: "Pick a Unicode R style and paste it anywhere plain text is accepted.",
    totalTime: "PT1M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Type your text",
        text: "Enter the letter R or a short word in the input box. The style cards update instantly.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Choose a style",
        text: "Scroll through the 16 style cards to see how your text looks in bold, script, fraktur, double-struck, and more.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Copy and paste",
        text: "Click the copy button on any card, then paste the styled text into your bio, caption, username, or message.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <TopNavBar activePage="r-in-different-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
            { label: "R in Different Fonts", href: "/r-in-different-fonts" },
          ]}
        />

        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            R in Different Fonts
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            See the letter R transformed into 16 verified Unicode styles. Every
            character below is a real Unicode code point, so it works on Instagram,
            Discord, gaming platforms, and captions without installing any font.
          </p>
        </section>

        <AlphabetLetterGenerator letter="R" defaultText="R" />

        <SectionNav sections={pageSections} />

        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-16 md:py-24 space-y-16">
          {/* Why Some R Styles Look Different */}
          <article
            id="why-some-r-styles-look-different"
            className="scroll-mt-[9rem] bg-surface-container-low rounded-2xl p-6 md:p-10"
          >
            <h2 className="font-headline text-2xl md:text-4xl font-bold mb-4 leading-tight">
              Why Some R Styles Look Different
            </h2>
            <div className="text-on-surface-variant leading-relaxed text-base md:text-lg space-y-4">
              <p>
                Unicode has two places where a fancy R can live. The first is the
                Letterlike Symbols block, which contains characters such as the
                double-struck R (ℝ, U+211D) and the script R (ℛ, U+211B). These
                were encoded before the mathematical alphabet project existed.
              </p>
              <p>
                The second is the Mathematical Alphanumeric Symbols block
                (U+1D400–U+1D7FF). That block holds bold, italic, bold-italic,
                script, fraktur, double-struck, sans-serif, and monospace letters,
                each with its own code point. Because some of these blocks are
                optional in device fonts, a style that looks perfect on one phone
                may appear as a box on another.
              </p>
              <p>
                If you see a missing glyph, the style is still being copied
                correctly. The issue is simply that the device reading it does not
                ship a font for that Unicode range.
              </p>
            </div>
          </article>

          {/* R in Other Alphabets */}
          <article id="r-in-other-alphabets" className="scroll-mt-[9rem]">
            <h2 className="font-headline text-2xl md:text-4xl font-bold mb-4 leading-tight">
              R in Other Alphabets
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-base md:text-lg mb-8 max-w-3xl">
              These are real characters from other writing systems, not font styles
              of the Latin R. Each one is shown with its Unicode code point name.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {otherAlphabetsR.map((entry) => (
                <div
                  key={entry.script}
                  className="bg-surface-container-low rounded-xl p-5 text-center border border-outline-variant/10"
                >
                  <div className="font-headline text-3xl md:text-4xl mb-2 min-h-[3rem] flex items-center justify-center">
                    {entry.upper}
                    {entry.lower ? (
                      <span className="text-on-surface-variant/50 mx-1">/</span>
                    ) : null}
                    {entry.lower}
                  </div>
                  <h3 className="font-headline font-bold text-sm mb-1">
                    {entry.label}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-snug">
                    {entry.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* Use-case tags */}
          <article id="use-cases" className="scroll-mt-[9rem]">
            <h2 className="font-headline text-2xl md:text-4xl font-bold mb-6 leading-tight">
              Popular Uses
            </h2>
            <div className="flex flex-wrap gap-3">
              {useCaseLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-5 py-2.5 rounded-full bg-surface-container-low text-on-surface font-medium text-sm border border-outline-variant/10 hover:border-primary/40 hover:text-primary transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
        </section>

        {/* FAQ */}
        <section
          id="frequently-asked-questions"
          className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-16 scroll-mt-[9rem]"
        >
          <h2 className="font-headline text-2xl md:text-4xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} defaultOpenIndex={0} />
        </section>

        {/* Ad slot — kept separate from interactive elements */}
        <section className="my-12 px-4 md:px-[150px]">
          <div className="max-w-[1440px] mx-auto">
            <div className="w-full min-h-[150px] bg-surface-container-low rounded-xl flex items-center justify-center border border-outline-variant/10">
              <span className="text-xs uppercase tracking-widest text-on-surface-variant/60">
                Advertisement
              </span>
            </div>
          </div>
        </section>

        {/* Explore More */}
        <section
          id="explore-more-tools"
          className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-16 scroll-mt-[9rem]"
        >
          <h2 className="font-headline text-2xl md:text-4xl font-bold mb-6 text-center leading-tight">
            Explore More Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {exploreMoreCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col p-6 md:p-8 bg-surface-container-low rounded-xl transition-all hover:bg-surface-container-high border border-outline-variant/10 hover:border-primary/40"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-primary">
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-snug">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}

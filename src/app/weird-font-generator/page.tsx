import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import WeirdFontGenerator from "../components/WeirdFontGenerator";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { getTotalFontStyleCount } from "../lib/fontCount";
import { weirdFontCategories } from "../lib/weirdFontStyles";
import SectionNav from "../components/SectionNav";
const pageSections = [
  { id: "how-to-use-this-weird-font-generator", label: "How to Use" },
  { id: "what-makes-these-weird-fonts-work-unicode-explanation", label: "What Makes These" },
  { id: "weird-font-styles-overview", label: "Weird Font Styles" },
  { id: "the-real-scripts-behind-our-weird-text-styles", label: "The Real Scripts" },
  { id: "best-uses-for-weird-font-styles", label: "Best Uses for" },
  { id: "will-these-weird-fonts-work-everywhere", label: "Will These Weird" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" }
];

const PAGE_TITLE =
  "Weird Font Generator (\u16B9\u16D6\u16C1\u16B1\u16DE) \u2014 Strange Styles (Copy & Paste)";
const PAGE_DESCRIPTION =
  "Use this Weird Font Generator to turn plain text into 6 strange styles instantly. Ancient runes, floating marks, and more. Tap to copy, paste anywhere.";
const OG_IMAGE =
  "https://www.aestheticletters.com/images/weird-font-generator/weird-font-generator-og.webp";

const IMAGE_DIR = "/images/weird-font-generator";
const IMAGE_BASE = `https://www.aestheticletters.com${IMAGE_DIR}`;

type SectionImage = {
  id: string;
  file: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

const contentImages = {
  howTo: {
    id: "image-how-to-use",
    file: "weird-fonts-how-to-use.webp",
    width: 1200,
    height: 800,
    alt: "Three steps to use the weird font generator: type your text, pick a style, then copy and paste the styled text anywhere",
    caption: "Three step process for the weird font generator: type your text, pick one of the six styles, then copy and paste the styled Unicode text anywhere",
  },
  beforeAfter: {
    id: "image-before-after",
    file: "weird-fonts-before-after.webp",
    width: 1200,
    height: 800,
    alt: "The plain word WEIRD shown next to six weird font styles: Runic, Halo Marks, Underglow, Cherokee, Superscript, and Deseret",
    caption: "Before and after comparison showing the plain word WEIRD turned into six weird font styles: Runic Cipher, Halo Marks, Underglow, Cherokee Cipher, Superscript Oddity, and Deseret Cipher",
  },
  comparison: {
    id: "image-styles-comparison",
    file: "weird-fonts-styles-comparison.webp",
    width: 1200,
    height: 1200,
    alt: "Comparison chart of six weird font styles applied to the word WEIRD, each with a live example and how many letters it covers",
    caption: "Comparison chart of the six weird font styles applied to the word WEIRD, each showing a live example, a short description, and how many of the 26 letters it covers",
  },
  scripts: {
    id: "image-real-scripts",
    file: "weird-fonts-real-scripts.webp",
    width: 1200,
    height: 800,
    alt: "Three real writing systems behind the weird fonts: Elder Futhark runes, the Cherokee syllabary, and the 1850s Deseret alphabet",
    caption: "The three real writing systems behind the weird font styles: the Elder Futhark runic alphabet, the Cherokee syllabary completed in 1821, and the 1850s Deseret alphabet",
  },
  boxes: {
    id: "image-boxes-fix",
    file: "weird-fonts-boxes-fix.webp",
    width: 1200,
    height: 800,
    alt: "Why some weird fonts show as boxes: rare scripts fail on phones missing their fonts, while Underglow renders on every device",
    caption: "Desktop versus phone comparison showing why Runic, Cherokee, and Deseret weird fonts can appear as empty boxes on devices without those fonts, while Underglow renders everywhere",
  },
} satisfies Record<string, SectionImage>;

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://www.aestheticletters.com/weird-font-generator",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/weird-font-generator",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Weird Font Generator copy-and-paste preview with Runic, Halo Marks, Underglow, Cherokee, Superscript, and Deseret styles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

// Map each cipher (category) name to its transform so on-page examples always match the tool.
const transformByName = Object.fromEntries(
  weirdFontCategories.map((cat) => [cat.name, cat.styles[0].transform]),
);

const introParagraphs = [
  "Type something below and watch it turn into strange styles right in front of you. Runes, floating accent marks, and tiny raised letters give you six different looks, all ready to copy in one tap.",
  "Everything happens right here in your browser, with nothing to install and nothing to sign into. Type your text, choose a look that catches your eye, then send it wherever you are posting next.",
];

type Example = { plain: string; styleName: string };
type Subsection = { heading: string; paragraphs: ReactNode[]; example?: Example };
type TableRow = { style: string; look: string; covered: string };
type ContentSection = {
  id?: string;
  heading: string;
  image?: SectionImage;
  paragraphs?: ReactNode[];
  table?: TableRow[];
  tableNote?: ReactNode;
  subsections?: Subsection[];
};

const linkClass = "text-primary underline underline-offset-4 hover:no-underline";

const sections: ContentSection[] = [
  {
    heading: "How to Use This Weird Font Generator?",
    id: "how-to-use-this-weird-font-generator",
    image: contentImages.howTo,
    paragraphs: [
      "Start typing in the box above the styles. Each one updates as you go, so you can watch your text turn weird in real time and pick whichever version catches your eye. Copy and paste takes one tap once you find a style you like.",
      "Found one you like? Tap it. It copies automatically. Now paste it into your Instagram bio, a Discord message, or wherever you're headed next.",
      "One thing worth knowing: some apps don't play nice with unusual characters. If a style pastes as blank boxes or question marks, that's the app being fussy, not the tool breaking. Try a different field and it will usually work fine.",
    ],
  },
  {
    heading: "What Makes These Weird Fonts Work? (Unicode Explanation)",
    id: "what-makes-these-weird-fonts-work-unicode-explanation",
    image: contentImages.beforeAfter,
    paragraphs: [
      "Weird fonts carry a bit of a misleading name. Your phone or computer installs nothing new when you use one. Each style instead borrows characters Unicode already ships with, the same standard quietly running behind every keyboard you have ever typed on.",
      "Unicode is a shared character standard that gives every letter, symbol, and script in the world its own unique code, so any device can display it the same way. It covers everything from the alphabet you're reading now to runes, syllabaries, and accent marks.",
      "Think of it like this. Your keyboard types the letter A. This weird letter generator swaps it for a rune, adds a little ring above it, or shrinks it into a raised symbol. The letter didn't change. Only the character representing it did.",
      "That explains why the text works everywhere without you installing anything. It also explains why a few letters occasionally look normal instead of styled. More on that below.",
    ],
  },
  {
    heading: "Weird Font Styles Overview",
    id: "weird-font-styles-overview",
    image: contentImages.comparison,
    paragraphs: [
      "Six styles live on this page. Here's what each one actually looks like before you scroll through them properly.",
    ],
    table: [
      { style: "Runic Cipher", look: "Ancient Germanic runes standing in for your letters", covered: "21 of 26" },
      { style: "Halo Marks", look: "A soft ring floating above every letter", covered: "All 26" },
      { style: "Underglow", look: "A line or dot anchored beneath every letter", covered: "All 26" },
      { style: "Cherokee Cipher", look: "Characters borrowed from the Cherokee syllabary", covered: "18 of 26" },
      { style: "Superscript Oddity", look: "Letters shrunk down and lifted into the air", covered: "19 of 26" },
      { style: "Deseret Cipher", look: "Letters from an 1850s phonetic alphabet built for English", covered: "23 of 26" },
    ],
    tableNote:
      "A few styles above don't cover all 26 letters. Where a match doesn't exist, that letter just stays normal. Each card below tells you exactly which ones.",
    subsections: [
      {
        heading: "Runic Cipher",
        example: { plain: "WEIRD", styleName: "Runic Cipher" },
        paragraphs: [
          "Your letters turn into runes from the Elder Futhark, a writing system used by Germanic tribes long before the Latin alphabet spread across Europe. It gives your text a carved, ancient look, like something pulled off a stone marker.",
          <>
            Five letters (C, Q, V, X, and Y) don&apos;t have a matching rune, so
            they stay in their regular form when typed. This kind of gap gets the
            same
            honest treatment on our{" "}
            <Link href="/christmas-fonts" className={linkClass}>
              christmas font generator
            </Link>
            , where Fraktur runs into a similar five letter gap.
          </>,
        ],
      },
      {
        heading: "Halo Marks",
        example: { plain: "WEIRD", styleName: "Halo Marks" },
        paragraphs: [
          "A single ring floats above every letter you type, giving the whole line a soft glow. Because only one mark repeats across the entire line, your eye never has to work out what a letter looked like before.",
          "All 26 letters carry the mark, so nothing falls back to plain text here. Worth knowing though: since each mark counts as its own character, a five letter word like WEIRD becomes ten characters once styled, roughly doubling your count against any limit.",
          <>
            Our{" "}
            <Link href="/twitter-fonts" className={linkClass}>
              twitter font generator
            </Link>{" "}
            found a similar hidden cost with certain Unicode styles counting
            double toward X&apos;s character limit.
          </>,
        ],
      },
      {
        heading: "Underglow",
        example: { plain: "WEIRD", styleName: "Underglow" },
        paragraphs: [
          "Underglow works the same way as Halo Marks, but the mark sits beneath each letter instead of above it. The result feels grounded rather than floaty, almost like each letter has its own shadow line.",
          "Like Halo Marks, this style covers every letter of the alphabet with no exceptions.",
        ],
      },
      {
        heading: "Cherokee Cipher",
        example: { plain: "WEIRD", styleName: "Cherokee Cipher" },
        paragraphs: [
          "This style borrows characters from the Cherokee syllabary, a writing system Sequoyah completed in 1821 and the Cherokee Nation still uses today. Several of its characters happen to resemble Latin letters, which is what makes this style work as a cipher.",
          "Eight letters (C, F, I, K, N, Q, U, and X) don't have a close visual match, so they display normally instead of being swapped.",
        ],
      },
      {
        heading: "Superscript Oddity",
        example: { plain: "WEIRD", styleName: "Superscript Oddity" },
        paragraphs: [
          "Every letter shrinks and lifts, sitting slightly above the line like a tiny footnote mark. It reads almost like whispered text, small and set apart from a normal sentence.",
          <>
            Seven letters (C, F, Q, S, X, Y, and Z) don&apos;t have a superscript
            match yet, so those stay full sized within the styled text. The same
            superscript block shows up for digits on our{" "}
            <Link href="/number-font-generator" className={linkClass}>
              Number Font Generator
            </Link>
            .
          </>,
        ],
      },
      {
        heading: "Deseret Cipher",
        example: { plain: "WEIRD", styleName: "Deseret Cipher" },
        paragraphs: [
          "This one swaps your letters for the Deseret alphabet, a phonetic writing system built in the 1850s to spell English exactly how it sounds. It never replaced ordinary spelling, but the letters live on inside Unicode.",
          "Three letters (C, Q, and X) stay in their normal form. English never gives these letters a sound of their own, since C, Q, and X all borrow sounds already covered by K or S, so the alphabet skipped them entirely.",
        ],
      },
    ],
  },
  {
    heading: "The Real Scripts Behind Our Weird Text Styles",
    id: "the-real-scripts-behind-our-weird-text-styles",
    image: contentImages.scripts,
    paragraphs: [
      "Three of these weird font styles pull from writing systems that existed long before Unicode did, each with its own real history worth knowing.",
      "The Elder Futhark, used for Runic Cipher, dates back roughly 1,700 years. Germanic tribes across Northern Europe carved these runes into stone, wood, and metal long before the Latin alphabet reached the region.",
      "Each rune originally represented a sound, not just a letter. That is part of why some do not map cleanly onto our alphabet today.",
      "Cherokee Cipher borrows from a script with a much more recent story. Sequoyah, a Cherokee silversmith, completed the Cherokee syllabary in 1821, giving his language a written form for the first time.",
      "Some characters were shaped to resemble Latin letters he had seen, though they represent entirely different sounds. The script remains in active use today, taught in schools and printed on official Cherokee Nation documents.",
      "Superscript Oddity works differently. Its characters come from the Unicode block built for phonetic notation, the same kind linguists use to mark stress and pronunciation in dictionaries. Nothing ancient here, just a practical tool borrowed for a playful purpose.",
      "Halo Marks and Underglow don't borrow from any script at all. Both use combining marks, small symbols Unicode allows you to stack onto any letter.",
      "A combining mark attaches to the character right before it rather than standing on its own. Type a letter, add the mark, and your device renders them as one shape. That is why every letter can carry one, unlike Runic or Cherokee, which is why they reach full alphabet coverage while the others don't.",
      "Deseret Cipher tells a stranger story than either. Religious leaders in the Utah Territory commissioned the alphabet during the 1850s, betting that a purely phonetic system would help new settlers learn to read English faster. A handful of books went to print using it.",
      "The experiment barely lasted a decade before ordinary spelling won out completely. Almost nobody reads it today, yet the full alphabet still sits inside Unicode, waiting for anyone curious enough to type it out.",
    ],
  },
  {
    heading: "Best Uses for Weird Font Styles",
    id: "best-uses-for-weird-font-styles",
    paragraphs: [
      "Weird fonts work best where a little personality goes a long way. A bio, a username, or a single line in a caption gets noticed without asking too much of the reader.",
      "Runic Cipher suits usernames and gaming tags well, especially anywhere a bold, ancient feel fits the vibe. Cherokee Cipher carries the same visual punch while telling a small story of its own, worth a mention if someone asks about it.",
      "Deseret Cipher rewards the same curious crowd. Few people will recognize it on sight, which makes it a quiet conversation starter in a bio rather than something loud.",
      "Halo Marks and Underglow read more smoothly across longer stretches of text since they keep every letter recognizable. A short bio line or a quote works better here than a full paragraph, since even readable styles add friction over long text.",
      "Superscript Oddity shines in short bursts too, tucked into a caption or added as a small flourish at the end of a sentence rather than carrying a whole message.",
      "Avoid using any of these styles for anything that needs to stay searchable or easy to copy elsewhere, like a phone number or an email address. The same goes for form fields and usernames on sites that reject unusual characters outright.",
    ],
  },
  {
    heading: "Will These Weird Fonts Work Everywhere?",
    id: "will-these-weird-fonts-work-everywhere",
    image: contentImages.boxes,
    paragraphs: [
      "Not quite, and the reasons split into two separate issues worth understanding before you post.",
    ],
    subsections: [
      {
        heading: "Device Rendering",
        paragraphs: [
          "Runic Cipher, Cherokee Cipher and Deseret Cipher pull from less common Unicode blocks. Most modern phones and browsers display them correctly, but very old devices or apps with limited font support sometimes show a small box instead of the character.",
          "Blame the device here, not the text. Older hardware simply never learned to draw these particular characters. Halo Marks and Underglow rarely run into this, since combining marks are a basic, widely supported part of Unicode.",
        ],
      },
      {
        heading: "Platform Acceptance",
        paragraphs: [
          "Some platforms scan for heavily altered text and flag it as spam, particularly in ads or automated messages. Text stacked with many Unicode marks tends to trigger these filters more often than text carrying just one.",
          <>
            Every style on this page uses either a real, limited character set or
            a single combining mark, never a chaotic stack of marks piled on top
            of each other. Our{" "}
            <Link href="/facebook-fonts" className={linkClass}>
              facebook font generator
            </Link>{" "}
            found ads get rejected for exactly this kind of heavy stacking.
          </>,
        ],
      },
    ],
  },
];

const faqs = [
  {
    question:
      "Why do some letters look normal instead of styled in the Runic, Cherokee, or Deseret sections?",
    answer:
      "Runic and Cherokee borrow characters from real writing systems, and neither lines up perfectly with the 26 letters of the Latin alphabet, so a few letters stay in their normal form. Deseret works differently. It is a phonetic alphabet, so C, Q, and X were left out entirely since English never gave those letters a unique sound of their own.",
  },
  {
    question: "Is the Cherokee Cipher style based on a real writing system?",
    answer:
      "Yes. It comes from the Cherokee syllabary, which Sequoyah completed in 1821 and the Cherokee Nation still uses today. A few of its characters happen to resemble Latin letters, which is why they work as a substitute here.",
  },
  {
    question: "Why does this weird font generator avoid spam filters?",
    answer:
      "Filters usually target text with many stacked marks piled onto a single letter. Every style here uses either a real character set or one combining mark at most, which keeps it well below what most filters treat as suspicious.",
  },
  {
    question: "Why do Runic and Cherokee sometimes show as boxes?",
    answer:
      "Runic and Cherokee pull from less common parts of Unicode that older devices do not always support. Halo Marks and Underglow use combining marks instead, a basic feature nearly every device and browser handles correctly.",
  },
  {
    question: "Is this weird font maker safe to use?",
    answer:
      "Yes. There's no install step and no account to create. Your text goes in, a styled version comes out, and nothing about you gets stored along the way. The tool only converts the text you type into styled Unicode characters.",
  },
  {
    question: "Why didn't my copied weird text paste correctly somewhere?",
    answer:
      "Some apps process pasted text through filters of their own, which can silently strip unusual characters. Our bold text generator documents the same normalization issue stripping styled Unicode on certain platforms.",
  },
];

const similarTools = [
  { label: "Aesthetic Fonts", href: "/", icon: "\u2728", desc: "All-in-one text styler for every look" },
  { label: "Fancy Fonts", href: "/fancy-fonts", icon: "\uD83C\uDF1F", desc: "More decorative Unicode styles beyond weird looks" },
  { label: "Stylish Fonts", href: "/stylish-fonts", icon: "\uD83D\uDD24", desc: "Clean, polished styles for bios and profiles" },
  { label: "Cursive Fonts", href: "/cursive-fonts", icon: "\u270D\uFE0F", desc: "Flowing, handwritten looking styles" },
];

const popularTools = [
  { label: "Preppy Font Generator", href: "/preppy-fonts", icon: "\uD83C\uDF80", desc: "Old money, coquette, and clean-girl styles" },
  { label: "Discord Font Generator", href: "/discord-fonts", icon: "\uD83C\uDFAE", desc: "Styles for usernames, tags, and messages" },
  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Styles for bios, captions, and comments" },
  { label: "Halloween Font Generator", href: "/halloween-fonts", icon: "\uD83C\uDF83", desc: "Spooky, atmospheric seasonal styles" },
];

export default function WeirdFontGeneratorPage() {
  const totalFontStyles = getTotalFontStyleCount();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/weird-font-generator#software",
        name: "Weird Font Generator",
        operatingSystem: "Any",
        applicationCategory: "UtilitiesApplication",
        browserRequirements: "requires HTML5 support",
        url: "https://www.aestheticletters.com/weird-font-generator",
        image: OG_IMAGE,
        description: PAGE_DESCRIPTION,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/weird-font-generator#webpage",
        url: "https://www.aestheticletters.com/weird-font-generator",
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-07-13T08:00:00+00:00",
        dateModified: "2026-07-13T08:00:00+00:00",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", ".text-on-surface-variant"],
        },
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/weird-font-generator#breadcrumb",
        },
        primaryImageOfPage: {
          "@id": "https://www.aestheticletters.com/weird-font-generator#image-og",
        },
        mainEntity: {
          "@id": "https://www.aestheticletters.com/weird-font-generator#software",
        },
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/weird-font-generator#image-og",
        url: OG_IMAGE,
        contentUrl: OG_IMAGE,
        width: 1200,
        height: 630,
        caption: "Weird Font Generator copy-and-paste preview showing Runic, Halo Marks, Underglow, Cherokee, Superscript, and Deseret styles",
        inLanguage: "en",
      },
      ...Object.values(contentImages).map((img) => ({
        "@type": "ImageObject",
        "@id": `https://www.aestheticletters.com/weird-font-generator#${img.id}`,
        url: `${IMAGE_BASE}/${img.file}`,
        contentUrl: `${IMAGE_BASE}/${img.file}`,
        width: img.width,
        height: img.height,
        caption: img.caption,
        inLanguage: "en",
      })),
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/weird-font-generator#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.aestheticletters.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "All Tools",
            item: "https://www.aestheticletters.com/all-tools",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Weird Font Generator",
            item: "https://www.aestheticletters.com/weird-font-generator",
          },
        ],
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
      <TopNavBar activePage="weird-font-generator" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "All Tools", href: "/all-tools" },
            { label: "Weird Font Generator", href: "/weird-font-generator" },
          ]}
        />

        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            Weird Font Generator (Copy &amp; Paste)
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            Type below and this Weird Font Generator turns your text strange
            instantly. Six styles, including ancient runes and floating marks,
            are ready to copy and paste anywhere.
          </p>
        </section>

        {/* Interactive Font Generator */}
        <WeirdFontGenerator totalFontStyles={totalFontStyles} />

        {/* Sticky section navigation */}
        <SectionNav sections={pageSections} />
        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              <article>
                {introParagraphs.map((text, i) => (
                  <p
                    key={i}
                    className={`text-on-surface-variant leading-relaxed text-lg${
                      i < introParagraphs.length - 1 ? " mb-6" : ""
                    }`}
                  >
                    {text}
                  </p>
                ))}
              </article>

              {sections.map((section) => (
                <article key={section.heading} id={section.id} className="scroll-mt-[9rem]">
                  <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                    {section.heading}
                  </h2>
                  {section.image && (
                    <Image
                      src={`${IMAGE_DIR}/${section.image.file}`}
                      alt={section.image.alt}
                      width={section.image.width}
                      height={section.image.height}
                      className="w-full h-auto rounded-xl mb-8"
                      priority={false}
                    />
                  )}
                  {section.paragraphs?.map((text, i) => (
                    <p
                      key={i}
                      className="text-on-surface-variant leading-relaxed text-lg mb-6"
                    >
                      {text}
                    </p>
                  ))}
                  {section.table && (
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-outline-variant/30">
                            <th className="py-3 pr-4 font-headline font-bold text-on-background">Style</th>
                            <th className="py-3 pr-4 font-headline font-bold text-on-background">The Look</th>
                            <th className="py-3 font-headline font-bold text-on-background whitespace-nowrap">Letters Covered</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.map((row) => (
                            <tr key={row.style} className="border-b border-outline-variant/20 align-top">
                              <td className="py-3 pr-4 font-semibold text-on-surface whitespace-nowrap">{row.style}</td>
                              <td className="py-3 pr-4 text-on-surface-variant">{row.look}</td>
                              <td className="py-3 text-on-surface-variant whitespace-nowrap">{row.covered}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {section.tableNote && (
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {section.tableNote}
                    </p>
                  )}
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
                          {sub.example && (
                            <p className="font-body text-on-surface bg-surface-container-high rounded-xl px-4 py-3 inline-block">
                              Example: {sub.example.plain} becomes{" "}
                              <span className="font-bold text-xl align-middle">
                                {transformByName[sub.example.styleName](sub.example.plain)}
                              </span>
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-12">
              {/* Security Feature */}
              <div className="p-8 bg-primary-container/10 rounded-2xl border border-primary/10">
                <h3 className="font-headline font-bold text-primary mb-4 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
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
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3 text-center leading-tight scroll-mt-[9rem]" id="explore-more-tools">
            Explore More Tools
          </h2>
          <p className="text-on-surface-variant text-center text-sm md:text-base mb-10 max-w-xl mx-auto">
            Want more than weird fonts? Check out these generators for decorative,
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
          <h2 className="font-headline text-2xl md:text-4xl font-bold mb-16 text-center scroll-mt-[9rem]" id="frequently-asked-questions">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} />
        </section>
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}

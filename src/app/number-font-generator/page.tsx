import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import NumberFontGenerator from "../components/NumberFontGenerator";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { getTotalFontStyleCount } from "../lib/fontCount";
import SectionNav from "../components/SectionNav";
const pageSections = [
  { id: "what-is-a-number-font-generator", label: "What is a" },
  { id: "how-to-copy-and-paste-number-fonts", label: "How to Copy" },
  { id: "why-these-numbers-work-everywhere", label: "Why These Numbers" },
  { id: "popular-number-font-styles-explained", label: "Popular Number Font" },
  { id: "where-to-use-numerical-fonts", label: "Where to Use" },
  { id: "a-quick-note-on-number-styles-in-typography", label: "A Quick Note" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" }
];

export const metadata: Metadata = {
  title: { absolute: "Number Font Generator \u2013 100+ Stylish Numbers to Copy & Paste" },
  description:
    "Our Number Font Generator turns plain numbers into 100+ styles, from Unicode fonts to fun decorative designs. Every style is tested on mobile. Free, no sign-up.",
  alternates: {
    canonical: "https://www.aestheticletters.com/number-font-generator",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/number-font-generator",
    title: "Number Font Generator \u2013 100+ Stylish Numbers to Copy & Paste",
    description:
      "Our Number Font Generator turns plain numbers into 100+ styles, from Unicode fonts to fun decorative designs. Every style is tested on mobile. Free, no sign-up.",
    images: [{ url: "https://www.aestheticletters.com/images/number-font-generator/number-font-generator-og.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Number Font Generator \u2013 100+ Stylish Numbers to Copy & Paste",
    description:
      "Our Number Font Generator turns plain numbers into 100+ styles, from Unicode fonts to fun decorative designs. Every style is tested on mobile. Free, no sign-up.",
    images: ["https://www.aestheticletters.com/images/number-font-generator/number-font-generator-og.webp"],
  },
};

const faqs = [
  {
    question: "Is this number font generator free to use?",
    answer:
      "Yes, and it stays that way. This tool has no account requirement, no download, and no cap on how often you return to use it. Style one number today and a hundred more next week, all without creating a profile or entering payment details.",
  },
  {
    question: "Why do some number styles show as boxes or question marks?",
    answer:
      "A box or question mark shows up when your phone or app has no built-in way to draw that particular character. Unicode has a name for this gap: a missing glyph. Updating your operating system usually solves it, since newer software adds support for more characters over time.",
  },
  {
    question: "Do number fonts work on Instagram, WhatsApp, and Discord?",
    answer:
      "Yes. Since these are Unicode characters and not downloaded fonts, they work anywhere that accepts regular text, including bios, captions, and chat messages.",
  },
  {
    question: "Why can\u2019t I get circled numbers above 20 or Roman numerals above 12?",
    answer:
      "Unicode does have some symbols beyond these points, but they live in parts of Unicode that many devices do not support well. To keep every style on this page working reliably, we only show the ranges that are safe on virtually all phones and apps.",
  },
  {
    question: "Is there an italic number font?",
    answer:
      "No. Unicode created italic versions of letters, but never made italic versions of numbers. Any tool claiming to offer italic numbers is not using a real Unicode style.",
  },
  {
    question: "Are fancy number fonts accessible for screen readers?",
    answer:
      "Not reliably. Screen readers are built to read plain numbers and letters. Styled Unicode characters often get skipped or read incorrectly, so it is best to avoid them in places where accessibility matters.",
  },
  {
    question: "Can I style a long number, like a date or a phone number?",
    answer:
      "Yes. Type as many digits as you like. Most styles work digit by digit, so longer numbers are styled the same way as short ones.",
  },
];

const numberStyles = [
  {
    name: "Roman Numerals",
    description:
      "Roman numerals are one of the oldest number systems still in everyday use, dating back to ancient Rome. Unicode gives them their own characters, separate from regular letters, so software can tell \u201C\u2160\u201D the numeral apart from \u201CI\u201D the letter. This is why clock faces, book chapters, and outlines often use these special characters instead of typing a capital I.",
  },
  {
    name: "Double-Struck Numbers",
    description:
      "This style started in university math classrooms. Professors writing on chalkboards could not make true bold letters with chalk, so they drew each stroke twice to create a bolder look. You will still see this style in math textbooks today, used to label important groups of numbers.",
  },
  {
    name: "Fullwidth Numbers",
    description:
      "These wider digits come from East Asian typesetting. Chinese, Japanese, and Korean characters are naturally square shaped, so early computer systems made matching wide versions of Western numbers and letters. This kept everything lined up neatly when the two writing styles appeared in the same line of text.",
  },
  {
    name: "Superscript and Subscript Numbers",
    description:
      "Science and math needed a way to write formulas without special formatting tools, which is exactly why these small raised and lowered numbers exist. A chemical formula like water, written as H followed by a small 2, uses a true subscript character rather than just a smaller font size.",
  },
  {
    name: "Circled Numbers",
    description:
      "Circled numbers were first designed as list markers, especially in East Asian documents where they replaced plain numbers with periods. You will still see them used this way today, in instructions, footnotes, and numbered steps where a small circled mark stands out more than a plain digit.",
  },
  {
    name: "Parenthesized Numbers",
    description:
      "Long before computers, typewriters could not draw a circle around a number. People used parentheses instead, like (1) or (2), as a simple stand-in. This older typewriter habit became its own permanent character set, which is why parenthesized numbers still show up often in legal documents and academic writing.",
  },
  {
    name: "Number Emojis",
    description:
      "These are not separate emoji characters at all. Each one is built from a regular digit, a small invisible marker, and a square symbol layered together. This combination is what makes phones and apps show your number inside a colorful keycap, the same look used for buttons on a phone dial pad.",
  },
  {
    name: "Arabic and Devanagari Numerals",
    description:
      "Not every culture writes numbers the same way. Arabic-Indic numerals are used across the Arabic speaking world, while Devanagari numerals appear in Hindi and several other South Asian languages. Both are genuine number systems with their own characters, not stylized versions of 0 through 9.",
  },
];

export default function NumberFontGeneratorPage() {
  const totalFontStyles = getTotalFontStyleCount();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/number-font-generator#software",
        name: "Number Font Generator",
        operatingSystem: "Any",
        applicationCategory: "UtilitiesApplication",
        browserRequirements: "requires HTML5 support",
        url: "https://www.aestheticletters.com/number-font-generator",
        description:
          "Turn plain numbers into 100+ stylish Unicode number fonts. Copy and paste fancy numbers for Instagram, WhatsApp, Discord, gaming usernames, and more.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/number-font-generator#webpage",
        url: "https://www.aestheticletters.com/number-font-generator",
        name: "Number Font Generator \u2013 100+ Stylish Numbers to Copy & Paste",
        description:
          "Our Number Font Generator turns plain numbers into 100+ styles, from Unicode fonts to fun decorative designs. Every style is tested on mobile. Free, no sign-up.",
        datePublished: "2025-06-20",
        dateModified: "2025-06-23",
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/number-font-generator#breadcrumb",
        },
        mainEntity: {
          "@id": "https://www.aestheticletters.com/number-font-generator#software",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/number-font-generator#breadcrumb",
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
            name: "Number Font Generator",
            item: "https://www.aestheticletters.com/number-font-generator",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.aestheticletters.com/number-font-generator#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "HowTo",
        "@id": "https://www.aestheticletters.com/number-font-generator#howto",
        name: "How to Copy and Paste Number Fonts",
        description:
          "Getting your styled numbers takes three steps. There is nothing to download and nothing to set up first.",
        image: "https://www.aestheticletters.com/images/number-font-generator/what-is-number-font-generator-before-after.webp",
        totalTime: "PT1M",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Type Your Number",
            text: "Use the box at the top of the page. You can enter a single digit or a long number like a date or a price.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Pick a Style",
            text: "Browse the cards and find one that fits what you are making.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Copy and Paste",
            text: "Click the card to copy it, then paste it into your bio, post, or message.",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopNavBar activePage="home" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "All Tools", href: "/all-tools" },
            { label: "Number Font Generator", href: "/number-font-generator" },
          ]}
        />

        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            Number Font Generator &ndash; Copy and Paste
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            Use this Number Font Generator to turn any number into a new style in
            seconds. Type it below, then copy and paste from 100+ fonts, from clean
            Unicode styles to decorative designs.
          </p>
        </section>

        {/* Interactive Font Generator */}
        <NumberFontGenerator totalFontStyles={totalFontStyles} />

        {/* Sticky section navigation */}
        <SectionNav sections={pageSections} />
        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* What is a Number Font Generator? */}
              <article className="scroll-mt-[9rem]" id="what-is-a-number-font-generator">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  What is a Number Font Generator?
                </h2>
                <Image
                  src="/images/number-font-generator/what-is-number-font-generator-before-after.webp"
                  alt="Number font generator transforming plain digits 2025 into multiple Unicode styled variations"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  A number font generator changes plain digits into styled versions
                  of the same numbers. You type a number, and the tool shows you
                  many ways to display it, from bold numbers to circled numbers to
                  line fonts. Nothing about the number itself changes, only how it
                  looks.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  People sometimes call these &quot;number fonts,&quot; but that
                  name is a little misleading. A real font is a file you install on
                  your device. These styles are something else: characters that
                  already exist inside Unicode, the system that gives every letter,
                  number, and symbol a unique code. Your device already knows how to
                  show them, so there is nothing to add.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  This is why a number font generator works the moment you open it.
                  You are not downloading new symbols. You are picking from ones
                  that already exist, the same way our{" "}
                  <Link
                    href="/sans-serif-fonts"
                    className="text-primary underline underline-offset-4 hover:no-underline"
                  >
                    Sans Serif Fonts
                  </Link>{" "}
                  tool works for letters instead of digits.
                </p>
              </article>

              {/* How to Copy and Paste Number Fonts */}
              <article className="scroll-mt-[9rem]" id="how-to-copy-and-paste-number-fonts">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Copy and Paste Number Fonts?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Getting your styled numbers takes three steps. There is nothing to
                  download and nothing to set up first.
                </p>
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Type Your Number",
                      description:
                        "Use the box at the top of the page. You can enter a single digit or a long number like a date or a price.",
                    },
                    {
                      step: 2,
                      title: "Pick a Style",
                      description:
                        "Browse the cards above and find one that fits what you are making.",
                    },
                    {
                      step: 3,
                      title: "Copy and Paste",
                      description:
                        "Click the card to copy it, then paste it into your bio, post, or message.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-headline font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-headline text-xl font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-on-surface-variant">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Why These Numbers Work Everywhere */}
              <article className="scroll-mt-[9rem]" id="why-these-numbers-work-everywhere">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Why These Numbers Work Everywhere
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Every character in Unicode has its own code point, a kind of
                  address that tells your device exactly what to draw. The bold
                  number 𝟏 and the plain number 1 have different code points, even
                  though they mean the same value.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  This system lives inside two main areas. One is called
                  Mathematical Alphanumeric Symbols, originally made for math papers
                  that needed bold or italic letters with a fixed meaning. The other
                  is Enclosed Alphanumerics, built for circled and bracketed numbers
                  used in lists and signs.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Because phones, browsers, and apps all read the same Unicode
                  standard, a styled number made on one device looks the same on
                  another. That is the real reason copy and paste works without any
                  setup.
                </p>
              </article>

              {/* Popular Number Font Styles, Explained */}
              <article className="scroll-mt-[9rem]" id="popular-number-font-styles-explained">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Popular Number Font Styles, Explained
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Each style on this page has its own story. Here is where eight of
                  the most popular ones come from, and why they look the way they
                  do.
                </p>
                <Image
                  src="/images/number-font-generator/popular-unicode-number-font-styles-comparison.webp"
                  alt="Comparison chart of 8 popular Unicode number font styles including Roman numerals, double-struck, fullwidth, superscript, and circled numbers"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <div className="space-y-8">
                  {numberStyles.map((style) => (
                    <div key={style.name}>
                      <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">
                        {style.name}
                      </h3>
                      <p className="text-on-surface-variant leading-relaxed text-lg">
                        {style.description}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              {/* Where to Use Numerical Fonts */}
              <article className="scroll-mt-[9rem]" id="where-to-use-numerical-fonts">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Where to Use Numerical Fonts?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Bold Numbers or Circled Numbers can make a follower count or a
                  sale price stand out in an Instagram bio. Double-Struck Numbers
                  can give a gaming name a sharper look without changing what it
                  says. Pair them with{" "}
                  <Link
                    href="/instagram-fonts"
                    className="text-primary underline underline-offset-4 hover:no-underline"
                  >
                    Instagram Fonts
                  </Link>{" "}
                  to style your whole bio, not just the numbers in it.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  On WhatsApp or Discord, styled numbers are useful for countdowns,
                  &quot;Day 12 of 30&quot; posts, or marking steps in a list.
                  Superscript and Subscript Numbers are handy for school work, like
                  writing a footnote or a chemical formula. For styled text on Discord beyond just numbers, try our <Link href="/discord-fonts" className="text-primary underline underline-offset-4 hover:no-underline">discord text generator</Link>.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Want your whole caption styled, not just the numbers in it? Our{" "}
                  <Link
                    href="/fancy-fonts"
                    className="text-primary underline underline-offset-4 hover:no-underline"
                  >
                    Fancy Fonts Generator
                  </Link>{" "}
                  covers letters, symbols, and more in the same copy and
                  paste style.
                </p>
              </article>

              {/* A Quick Note on Number Styles in Typography */}
              <article className="scroll-mt-[9rem]" id="a-quick-note-on-number-styles-in-typography">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  A Quick Note on Number Styles in Typography
                </h2>
                <Image
                  src="/images/number-font-generator/lining-vs-oldstyle-number-figures-typography.webp"
                  alt="Typography comparison showing lining figures versus oldstyle figures and tabular versus proportional number spacing"
                  width={800}
                  height={350}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Professional typography treats numbers differently depending on
                  where they appear. In a heading or a table, every digit usually
                  looks uniform and upright. But inside a normal sentence, some
                  fonts swap in numbers with small tails and uneven heights, called
                  oldstyle figures, so they blend in next to lowercase letters
                  instead of standing out.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  There is also a spacing difference. Tabular figures all take up
                  the same width, so columns of numbers line up neatly in a table.
                  Proportional figures vary in width instead, matching the natural
                  rhythm of regular text.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  These terms describe how a font is built, not the Unicode styles
                  on this page. Still, they explain why number design has always
                  mattered, long before copy and paste existed.
                </p>
              </article>
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
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-16 pb-8 scroll-mt-[9rem]" id="explore-more-tools">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3 text-center leading-tight">
            Explore More Tools
          </h2>
          <p className="text-on-surface-variant text-center text-sm md:text-base mb-10 max-w-xl mx-auto">
            Want more than numbers? Check out these generators for letters,
            symbols, and complete text styling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Similar Font Styles */}
            <div>
              <h3 className="font-headline text-lg font-bold mb-4 flex items-center gap-2">
                <span className="inline-block w-1 h-5 rounded-full bg-primary" />
                Similar Font Styles
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Aesthetic Fonts", href: "/", icon: "✨", desc: "All-in-one text styler" },
                  { label: "Fancy Fonts", href: "/fancy-fonts", icon: "👑", desc: "Decorative text art" },
                  { label: "Serif Fonts", href: "/serif-fonts", icon: "🅰️", desc: "Classic serif letters" },
                  { label: "Sans Serif Fonts", href: "/sans-serif-fonts", icon: "🔤", desc: "Clean modern text" },
                ].map((tool) => (
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
                {[
                  { label: "Instagram Fonts", href: "/instagram-fonts", icon: "📸", desc: "Stand out on Insta" },
                  { label: "Facebook Fonts", href: "/facebook-fonts", icon: "💬", desc: "Style your FB posts" },
                  { label: "Stylish Fonts", href: "/stylish-fonts", icon: "💎", desc: "Premium text styles" },
                  { label: "Cute Fonts", href: "/cute-fonts", icon: "🎀", desc: "Adorable text styles" },
                  { label: "Discord Font Generator", href: "/discord-fonts", icon: "🎮", desc: "Style your server text" },
                ].map((tool) => (
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
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-12 md:py-24 scroll-mt-[9rem]" id="frequently-asked-questions">
          <h2 className="font-headline text-2xl md:text-4xl font-bold mb-16 text-center">
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

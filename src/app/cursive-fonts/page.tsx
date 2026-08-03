import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TopNavBar from "../components/TopNavBar";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import CursiveFontGenerator from "./CursiveFontGeneratorLazy";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import SectionNav from "../components/SectionNav";
const pageSections = [
  { id: "what-are-cursive-fonts", label: "What Are Cursive" },
  { id: "how-to-use-this-cursive-text-generator-in-seconds", label: "How to Use" },
  { id: "where-you-can-use-cursive-fonts", label: "Where You Can" },
  { id: "why-do-cursive-letters-attract-more-attention", label: "Why do Cursive" },
  { id: "40-handwritten-font-styles-in-8-categories", label: "40+ Handwritten Font" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" }
];

export const metadata: Metadata = {
  title: { absolute: "Cursive Fonts - Handwritten Text Generator | Copy & Paste" },
  description:
    "Convert your text into cursive fonts instantly. Use this cursive text generator to create handwritten styles you can copy and use on social media, and more.",
  alternates: {
    canonical: "https://www.aestheticletters.com/cursive-fonts",
  },
  openGraph: {
    type: "article",
    url: "https://www.aestheticletters.com/cursive-fonts",
    title: "Cursive Fonts - Handwritten Text Generator | Copy & Paste",
    description:
      "Convert your text into cursive fonts instantly. Use this cursive text generator to create handwritten styles you can copy and use on social media, and more.",
    images: [
      {
        url: "https://www.aestheticletters.com/cursive-fonts-og.webp",
        width: 1200,
        height: 624,
        alt: "Cursive Fonts Generator by Aesthetic Letters — copy and paste handwritten text styles",
      },
    ],
    siteName: "Aesthetic Letters",
    publishedTime: "2026-04-19T08:00:00+00:00",
    modifiedTime: "2026-06-25T00:00:00+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursive Fonts - Handwritten Text Generator | Copy & Paste",
    description:
      "Convert your text into cursive fonts instantly. Use this cursive text generator to create handwritten styles you can copy and use on social media, and more.",
    images: [
      "https://www.aestheticletters.com/cursive-fonts-og.webp",
    ],
  },
};

const faqs = [
  {
    question: "What is a cursive font generator?",
    answer:
      "A cursive creator is a tool that converts normal words into handwritten text using special characters that you can copy and paste.",
  },
  {
    question: "Can I copy and paste handwritten font styles anywhere?",
    answer:
      "Yes, most styles work on all major platforms due to their Unicode coding.",
  },
  {
    question: "What are the main types of cursive writing styles?",
    answer:
      "There are three main types of cursive writing styles: looping cursive, italic cursive, and connected script. Looping cursive is more decorative, italic cursive is simple and easy to read, and connected script focuses on smooth and fast writing.",
  },
  {
    question: "Why do some cursive fonts not show correctly?",
    answer:
      "A device or app that is older may not have the ability to support certain characters, which can affect how the text appears.",
  },
  {
    question: "Are cursive signature fonts safe to use?",
    answer:
      "Yes, they are completely safe. They are just characters and do not contain any harmful code.",
  },
  {
    question:
      "What is the difference between cursive and handwritten fonts?",
    answer:
      "Cursive typefaces usually have connected letters, while handwritten letters may look like natural writing but are not always connected.",
  },
];

const categoryDescriptions = [
  {
    name: "Handwriting Cursive",
    description:
      "Looks like real handwriting. Cursive Script gives you a smooth, joined-up style. Smooth Overline adds a line above your words, like an underline but on top. Flourished Handwriting adds small decorative symbols around your text.",
  },
  {
    name: "Playful Script",
    description:
      "Fun and bouncy styles, great for casual posts. Star Bounce and Sparkle Script add little stars and dots around your letters. Bubbly Cursive puts your whole phrase inside cute brackets.",
  },
  {
    name: "Elegant Cursive",
    description:
      "Classy styles for invitations, signatures, or branding. Calligraphy and Royal Script give you that fancy, hand-lettered look you see on wedding cards.",
  },
  {
    name: "Brush & Marker",
    description:
      "Styles that look like they were drawn with a real brush or marker. Heavy Brush and Marker Bold give you thick, bold strokes. Brush Underline adds a brush-style line under each letter.",
  },
  {
    name: "School & Guides",
    description:
      "A throwback to handwriting practice sheets from school. Dotted Guide and Ruled Script add dotted or lined marks above and below your text, just like a worksheet.",
  },
  {
    name: "Chunky Fun",
    description:
      <><Link href="/bold-font-generator" className="text-primary underline underline-offset-4">Bold styles</Link> that grab attention. Bold Block is thick and easy to read. Chunky Hearts adds little heart symbols between your letters.</>,
  },
  {
    name: "Retro Vintage",
    description:
      "Old-school styles that feel classic. Old Script and Antique Cursive look like signatures from vintage signs or old letters.",
  },
  {
    name: "Cultural Brush",
    description:
      "Brush-style fonts inspired by art from around the world. These are fun, decorative styles, not exact copies of any real language or script.",
  },
];


export default function CursiveFontsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/cursive-fonts#software",
        name: "Cursive Fonts Generator",
        url: "https://www.aestheticletters.com/cursive-fonts",
        description:
          "Free online cursive fonts generator. Convert plain text into handwritten, script, and signature-style Unicode fonts that copy and paste anywhere.",
        image:
          "https://www.aestheticletters.com/how-to-use-this-cursive-fonts-generator-in-seconds.webp",
        inLanguage: "en",
        operatingSystem: "All",
        applicationCategory: "UtilitiesApplication",
        browserRequirements: "Requires JavaScript. Requires a modern browser.",
        publisher: { "@id": "https://www.aestheticletters.com/#organization" },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/cursive-fonts#webpage",
        name: "Cursive Fonts - Handwritten Text Generator | Copy & Paste",
        description:
          "Convert your text into cursive fonts instantly. Use this cursive text generator to create handwritten styles you can copy and use on social media, and more.",
        url: "https://www.aestheticletters.com/cursive-fonts",
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.aestheticletters.com/how-to-use-this-cursive-fonts-generator-in-seconds.webp",
          width: 896,
          height: 1200,
        },
        mainEntity: { "@id": "https://www.aestheticletters.com/cursive-fonts#software" },
      },
      {
        "@type": "BreadcrumbList",
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
            name: "Cursive Fonts",
            item: "https://www.aestheticletters.com/cursive-fonts",
          },
        ],
      },
      {
        "@type": "FAQPage",
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
        name: "How to Use This Cursive Text Generator in Seconds",
        description:
          "Using this cursive font generator is very simple. There is no need for technical knowledge. Just follow these quick steps to create cursive text instantly.",
        totalTime: "PT1M",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Type Your Word",
            text: "Simply type or paste your words into the generator box above. It can be a name, caption, quote, or anything you want to convert.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Choose a Cursive Style",
            text: "You will see multiple handwritten font styles, including simple cursive, bold cursive, and signature-style. Decide which one best suits your needs.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Copy and Paste Anywhere",
            text: "Once you like a style, copy the text and paste it anywhere. It works on Instagram, Facebook, WhatsApp, and many other platforms.",
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

      <TopNavBar activePage="cursive-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "All Tools", href: "/all-tools" },
            { label: "Cursive Fonts", href: "/cursive-fonts" },
          ]}
        />
        {/* Server-rendered hero for fast LCP — no JS needed for initial paint */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            Cursive Fonts - Handwritten Text Generator
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            Creating handwritten or cursive text takes time and effort. Use this
            tool to generate cursive fonts instantly and get a clean handwritten
            look in seconds.
          </p>
        </section>

        {/* Dynamic Cursive Font Generator — input, size controls, live results */}
        <CursiveFontGenerator />

        {/* Sticky section navigation */}
        <SectionNav sections={pageSections} />
        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* Intro */}
              <article>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Turn your normal text into stylish cursive fonts in seconds.
                  This tool converts your letters into a handwritten style that
                  works across social media, messaging apps, and more without
                  installing anything.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Whether you want to improve your Instagram bio, design a logo,
                  or write a quote, this tool makes it quick and easy.
                </p>
              </article>

              {/* What Are Cursive Fonts? */}
              <article className="scroll-mt-[9rem]" id="what-are-cursive-fonts">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  What Are Cursive Fonts?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Cursive fonts are text styles that look like natural
                  handwriting. The letters are often connected, smooth, and
                  slightly decorative, which gives them a personal and elegant
                  feel.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Unlike regular fonts, these handwritten styles are created
                  using special Unicode characters. They can therefore be copied
                  and pasted anywhere without needing a handwritten font
                  generator or software.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Cursive letters are also known as handwritten fonts or
                  script-style writing. People love using these styles to give
                  their posts a more creative and eye-catching look.
                </p>
              </article>

              {/* How to Use */}
              <article className="scroll-mt-[9rem]" id="how-to-use-this-cursive-text-generator-in-seconds">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Use This Cursive Text Generator in Seconds
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Using this cursive font generator is very simple. There is no
                  need for technical knowledge.
                </p>
                <ol className="space-y-8 list-none p-0">
                  <li className="flex gap-6">
                    <div
                      aria-hidden="true"
                      className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-headline font-bold"
                    >
                      1
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold mb-2">
                        Type Your Word
                      </h3>
                      <p className="text-on-surface-variant">
                        Simply type or paste your words into the generator box
                        above. It can be a name, caption, quote, or anything
                        you want to convert.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <div
                      aria-hidden="true"
                      className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-headline font-bold"
                    >
                      2
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold mb-2">
                        Choose a Cursive Style
                      </h3>
                      <p className="text-on-surface-variant">
                        You will see multiple handwritten font styles, including
                        simple cursive, bold cursive, and signature-style. Decide
                        which one best suits your needs.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <div
                      aria-hidden="true"
                      className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-headline font-bold"
                    >
                      3
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold mb-2">
                        Copy and Paste Anywhere
                      </h3>
                      <p className="text-on-surface-variant">
                        Once you like a style, copy the text and paste it
                        anywhere. It works on Instagram, Facebook, WhatsApp, and
                        many other platforms.
                      </p>
                    </div>
                  </li>
                </ol>
              </article>

              {/* Where You Can Use Cursive Fonts? */}
              <article className="scroll-mt-[9rem]" id="where-you-can-use-cursive-fonts">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Where You Can Use Cursive Fonts?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Cursive letters are flexible and can be used in many places.
                  The social media world isn&apos;t the only place they can be
                  found.
                </p>
                <ol className="space-y-8 list-decimal pl-6 marker:font-headline marker:font-bold marker:text-primary">
                  <li>
                    <h3 className="font-headline text-xl font-bold mb-2">
                      Instagram Bios and Captions
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Handwritten text makes your profile look unique and more
                      attractive. It helps your bio stand out from the crowd. For
                      more styles made specifically for Instagram, you can also
                      try our{" "}
                      <Link
                        href="/instagram-fonts"
                        className="text-primary font-bold underline hover:opacity-80 transition-all"
                      >
                        instagram font generator
                      </Link>{" "}
                      tool to find the perfect look for your profile.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-headline text-xl font-bold mb-2">
                      Wedding Invites and Cards
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      These styles are perfect for elegant designs. A cursive
                      signature font adds a classic handwritten feel to
                      invitations.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-headline text-xl font-bold mb-2">
                      Logo Design and Branding
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Many brands use a handwritten font style for logos to
                      create a personal and premium look.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-headline text-xl font-bold mb-2">
                      Quotes and Posters
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Cursive text makes quotes more visually appealing and easy
                      to share.
                    </p>
                  </li>
                </ol>
              </article>

              {/* Why do Cursive letters Attract More Attention? */}
              <article className="scroll-mt-[9rem]" id="why-do-cursive-letters-attract-more-attention">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Why do Cursive letters Attract More Attention?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Cursive letters stand out because of their different appearance
                  from normal words. When people scroll through content, unique
                  text styles catch their eye faster.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  These fonts make your characters feel more personal and
                  creative. This is why many users prefer beautiful cursive fonts
                  for social media and design work.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The following points can be highlighted with them:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {["Names", "Quotes", "Important lines", "Captions"].map(
                    (item) => (
                      <div
                        key={item}
                        className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10"
                      >
                        <h3 className="font-headline font-bold text-primary text-xl">
                          {item}
                        </h3>
                      </div>
                    )
                  )}
                </div>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  Using popular handwritten fonts can help your content look more
                  engaging without changing the actual message. If you want to go
                  a step further with your styling, check out{" "}
                  <Link
                    href="/fancy-fonts"
                    className="text-primary font-bold underline hover:opacity-80 transition-all"
                  >
                    fancy font generator
                  </Link>{" "}
                  for even more decorative text options.
                </p>
              </article>

              {/* 40+ Handwritten Font Styles in 8 Categories */}
              <article className="scroll-mt-[9rem]" id="40-handwritten-font-styles-in-8-categories">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  40+ Handwritten Font Styles in 8 Categories
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  This generator gives you 40+ cursive and handwritten styles.
                  They are grouped into 8 categories to help you find the look
                  you want faster. Every style is made from real Unicode text,
                  not images or fonts, so it copies and pastes perfectly
                  anywhere.
                </p>
                <div className="space-y-6">
                  {categoryDescriptions.map((cat) => (
                    <div
                      key={cat.name}
                      className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10"
                    >
                      <h3 className="font-headline font-bold text-primary mb-2 text-xl">
                        {cat.name}
                      </h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-on-surface-variant leading-relaxed text-lg mt-8">
                  Every style on this list is plain text. That means you can
                  copy it and paste it straight into Instagram, Facebook,
                  WhatsApp, or anywhere else that lets you type.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mt-4">
                  These are some of the most popular cursive styles people use
                  across different platforms. If you also want symbols and
                  emojis to pair with your text,{" "}
                  <Link
                    href="/"
                    className="text-primary font-bold underline hover:opacity-80 transition-all"
                  >
                    aesthetic fonts
                  </Link>{" "}
                  has a wide collection to explore.
                </p>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-12">
              {/* Works on All Platforms */}
              <div className="p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm">
                <h3 className="font-headline text-2xl font-bold mb-6">
                  Works on All Platforms
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  You can use these cursive fonts on social networks without any
                  problems. Since it uses Unicode characters, you can use it
                  without any issues.
                </p>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  You can use these cursive letters for:
                </p>
                <ol className="space-y-4 text-sm leading-relaxed">
                  {[
                    "Instagram bios and captions",
                    "Facebook posts and comments",
                    "Discord messages",
                    "Twitter/X posts",
                    "Quora answers",
                    "Pinterest pins",
                    "WhatsApp and Telegram",
                    "LinkedIn posts",
                    "TikTok captions",
                  ].map((item, index) => (
                    <li key={item}>
                      <strong>{index + 1}. {item}</strong>
                    </li>
                  ))}
                </ol>
                <p className="text-sm text-on-surface-variant leading-relaxed mt-4">
                  Everything works online. All you have to do is simply copy your
                  script text and place it to your favorite platforms.
                </p>
              </div>

              {/* How to Use Image */}
              <div className="rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm">
                <Image
                  src="/how-to-use-this-cursive-fonts-generator-in-seconds.webp"
                  alt="Screenshot of the Aesthetic Letters cursive fonts generator showing the input box, font-size slider, and a list of handwritten font styles with copy buttons."
                  width={450}
                  height={600}
                  className="w-full h-auto"
                />
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
            Looking for a different vibe? Try these generators to find the
            perfect style for your text.
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
                  { label: "Cute Fonts", href: "/cute-fonts", icon: "🎀", desc: "Adorable text styles" },
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
                  { label: "Fancy Fonts", href: "/fancy-fonts", icon: "👑", desc: "Decorative text art" },
                  { label: "Stylish Fonts", href: "/stylish-fonts", icon: "💎", desc: "Premium text styles" },
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
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 scroll-mt-[9rem]" id="frequently-asked-questions">
          <h2 className="font-headline text-4xl font-bold mb-16 text-center">
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

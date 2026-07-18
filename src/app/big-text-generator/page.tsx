import type { Metadata } from "next";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import BigTextGenerator from "../components/BigTextGenerator";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { getTotalFontStyleCount } from "../lib/fontCount";

// NOTE: Copy below (metadata, hero, SEO sections, FAQs) is placeholder pending
// the finished content package. Structure/schema mirror bold-font-generator.
export const metadata: Metadata = {
  title: { absolute: "Big Text Generator - Large Copy & Paste Text Styles" },
  description:
    "Turn any text into big Unicode styles — Fullwidth, Bold Sans, and Bold Serif. Preview it at scale in banner, thumbnail, and story frames, then copy and paste anywhere.",
  alternates: {
    canonical: "https://www.aestheticletters.com/big-text-generator",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/big-text-generator",
    title: "Big Text Generator - Large Copy & Paste Text Styles",
    description:
      "Turn any text into big Unicode styles — Fullwidth, Bold Sans, and Bold Serif. Preview it at scale in banner, thumbnail, and story frames, then copy and paste anywhere.",
    images: [{ url: "https://www.aestheticletters.com/images/big-text-generator/big-text-generator-og.webp", width: 1200, height: 640 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Text Generator - Large Copy & Paste Text Styles",
    description:
      "Turn any text into big Unicode styles — Fullwidth, Bold Sans, and Bold Serif. Preview it at scale in banner, thumbnail, and story frames, then copy and paste anywhere.",
    images: ["https://www.aestheticletters.com/images/big-text-generator/big-text-generator-og.webp"],
  },
};

const faqs = [
  {
    question: "Is this big text generator free to use?",
    answer:
      "Yes. There is no cost, no sign-up, and no email required. Type your text, pick a style, and copy it as many times as you like.",
  },
  {
    question: "What does the \u201cPreview at Scale\u201d button do?",
    answer:
      "It opens your styled text in a large, framed preview so you can see how it would look as a banner, thumbnail, or story. Switch between 16:9 banner, 1:1 thumbnail, and 9:16 story frames, and try a few background colors. The text stays real Unicode, so you can still copy and paste it anywhere.",
  },
  {
    question: "Does big text stay big when I paste it?",
    answer:
      "The characters themselves are wider or heavier Unicode letters, so Fullwidth and bold styles keep their look wherever plain text is accepted. The scale preview is a size guide only \u2014 the actual on-screen size depends on the app you paste into.",
  },
  {
    question: "Which style should I use for a YouTube thumbnail or headline?",
    answer:
      "Bold Sans and Bold Serif read best at large sizes because they cover every letter and digit. Fullwidth adds dramatic spacing that works well for short banner phrases. Use the scale preview to compare them in a banner frame before you copy.",
  },
  {
    question: "Why do some characters look different across devices?",
    answer:
      "Big text uses Unicode characters, and each device renders them with its own installed fonts. Fullwidth, Bold Sans, and Bold Serif are widely supported, but very old phones or apps may show a fallback glyph for a few characters.",
  },
];

const bigTextStyles = [
  {
    name: "Fullwidth",
    description:
      "Fullwidth Latin characters occupy a full em of horizontal space, the same width used for CJK text. This gives words a spaced-out, monospaced look that stands out in banners and short headlines. Covers every letter and digit, plus a wide space.",
  },
  {
    name: "Bold Sans",
    description:
      "The clean, modern bold alphabet without serifs. Every uppercase letter, lowercase letter, and digit has its own dedicated Unicode code point, so it reads well at large sizes for headlines, thumbnails, and captions.",
  },
  {
    name: "Bold Serif",
    description:
      "The classic mathematical bold alphabet with serifs. Like Bold Sans, it covers the full alphabet and all ten digits, and it is the most widely supported bold style across devices.",
  },
];

export default function BigTextGeneratorPage() {
  const totalFontStyles = getTotalFontStyleCount();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/big-text-generator#software",
        name: "Big Text Generator",
        operatingSystem: "Any",
        applicationCategory: "UtilitiesApplication",
        browserRequirements: "requires HTML5 support",
        url: "https://www.aestheticletters.com/big-text-generator",
        image: "https://www.aestheticletters.com/images/big-text-generator/big-text-generator-og.webp",
        description:
          "Turn plain text into big Unicode styles — Fullwidth, Bold Sans, and Bold Serif — and preview it at scale in banner, thumbnail, and story frames.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/big-text-generator#webpage",
        url: "https://www.aestheticletters.com/big-text-generator",
        name: "Big Text Generator - Large Copy & Paste Text Styles",
        description:
          "Turn any text into big Unicode styles — Fullwidth, Bold Sans, and Bold Serif. Preview it at scale in banner, thumbnail, and story frames, then copy and paste anywhere.",
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-07-17T08:00:00+00:00",
        dateModified: "2026-07-17T00:00:00+00:00",
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/big-text-generator#breadcrumb",
        },
        mainEntity: {
          "@id": "https://www.aestheticletters.com/big-text-generator#software",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/big-text-generator#breadcrumb",
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
            name: "Big Text Generator",
            item: "https://www.aestheticletters.com/big-text-generator",
          },
        ],
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Generate and Preview Big Text",
    description:
      "Turn your words into big Unicode text and preview them at scale before you copy.",
    totalTime: "PT1M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Type Your Text",
        text: "Start typing in the field near the top of the page. Whatever you enter updates every style card below it instantly.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Preview at Scale",
        text: "Tap the Scale button on any style to open a large, framed preview. Switch between banner, thumbnail, and story frames to see how it looks.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Copy and Paste",
        text: "Click Copy on the style you want. Paste it into Instagram, YouTube, Discord, or anywhere else that accepts plain text.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <TopNavBar activePage="home" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "All Tools", href: "/all-tools" },
            { label: "Big Text Generator", href: "/big-text-generator" },
          ]}
        />

        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            Big Text Generator &mdash; Copy and Paste
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            Turn any text into big Unicode styles &mdash; Fullwidth, Bold Sans,
            and Bold Serif. Preview it at scale in a banner, thumbnail, or story
            frame to see how it would look as a headline, then copy and paste it
            anywhere. Every style is built from Unicode characters your device
            already supports, so nothing needs to download or install.
          </p>
        </section>

        {/* Interactive Font Generator */}
        <BigTextGenerator totalFontStyles={totalFontStyles} />

        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  What is a Big Text Generator?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  A big text generator changes plain letters into wider or
                  heavier Unicode characters that stand out at a glance. You type
                  a word, and the tool shows it in Fullwidth, Bold Sans, and Bold
                  Serif. The text itself does not change &mdash; only the way it
                  looks changes.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  These styles are not font files you install. They are characters
                  that already exist inside Unicode, the system that gives every
                  letter and number a unique code, the same way our{" "}
                  <Link
                    href="/bold-font-generator"
                    className="text-primary underline underline-offset-4 hover:no-underline"
                  >
                    Bold Font Generator
                  </Link>{" "}
                  works.
                </p>
              </article>

              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Preview Your Text at Scale
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Most &ldquo;big text&rdquo; searches are really about how the
                  text will look large &mdash; as a YouTube thumbnail, a story
                  background, a banner, or a poster. That is why every style on
                  this page has a Scale button.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Tap it to open a large, framed preview that auto-sizes your text
                  to fill the frame. Switch between a 16:9 banner, a 1:1
                  thumbnail, and a 9:16 story, and try a few background colors to
                  picture the real use case instead of a small card preview.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  The preview is a display mode only. Your text stays real Unicode
                  the whole time, so copy and paste still works exactly the same.
                </p>
              </article>

              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Generate and Preview Big Text?
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Type Your Text",
                      description:
                        "Start typing in the field near the top of the page. Whatever you enter updates every style card below it instantly.",
                    },
                    {
                      step: 2,
                      title: "Preview at Scale",
                      description:
                        "Tap the Scale button on any style to open a large, framed preview. Switch between banner, thumbnail, and story frames to see how it looks.",
                    },
                    {
                      step: 3,
                      title: "Copy and Paste",
                      description:
                        "Click Copy on the style you want. Paste it into Instagram, YouTube, Discord, or anywhere else that accepts plain text.",
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

              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Big Text Styles, Explained
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  This page focuses on three styles chosen for how well they read
                  when the text gets big.
                </p>
                <div className="space-y-8">
                  {bigTextStyles.map((style) => (
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
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3 text-center leading-tight">
            Explore More Tools
          </h2>
          <p className="text-on-surface-variant text-center text-sm md:text-base mb-10 max-w-xl mx-auto">
            Want more than big text? Check out these generators for letters,
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
                  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDDAB", desc: "81 bold text styles" },
                  { label: "Fancy Fonts", href: "/fancy-fonts", icon: "\uD83D\uDC51", desc: "Decorative text art" },
                  { label: "Serif Fonts", href: "/serif-fonts", icon: "\uD83C\uDD70\uFE0F", desc: "Classic serif letters" },
                  { label: "Sans Serif Fonts", href: "/sans-serif-fonts", icon: "\uD83D\uDD24", desc: "Clean modern text" },
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
                  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Stand out on Insta" },
                  { label: "Facebook Font Generator", href: "/facebook-fonts", icon: "\uD83D\uDCAC", desc: "Style your FB posts" },
                  { label: "Stylish Font Generator", href: "/stylish-fonts", icon: "\uD83D\uDC8E", desc: "Premium text styles" },
                  { label: "Number Font Generator", href: "/number-font-generator", icon: "\uD83D\uDD22", desc: "Stylish number fonts" },
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
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-12 md:py-24">
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

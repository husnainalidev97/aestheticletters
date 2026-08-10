import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import Sidebar from "../components/Sidebar";
import SectionNav from "../components/SectionNav";
import TikTokFontGeneratorClient from "../components/TikTokFontGeneratorClient";
import TikTokSymbolsGroup from "./TikTokSymbolsGroup";
import BrandDisclaimer from "../components/BrandDisclaimer";
import { getTotalFontStyleCount } from "../lib/fontCount";
import { TIKTOK_SYMBOL_GROUPS, tiktokFontCategories } from "../lib/tiktokFontStyles";

const pageSections = [
  { id: "what-is-a-tiktok-font-generator", label: "What is a" },
  { id: "how-to-use-this-tiktok-text-generator", label: "How to Use" },
  { id: "tiktok-font-names-vs-unicode-text-styles", label: "Font Names" },
  { id: "tiktok-sans-official-typeface", label: "TikTok Sans" },
  { id: "tiktok-character-limits-by-field", label: "Character Limits" },
  { id: "why-tiktok-username-font-doesnt-work", label: "Username Font" },
  { id: "tiktok-font-styles-available-in-this-generator", label: "Font Styles" },
  { id: "tiktok-symbols-and-emojis-to-pair-with-your-text", label: "Symbols" },
  { id: "does-a-styled-font-affect-your-tiktok-reach", label: "Algorithm" },
  { id: "tiktok-font-generator-vs-other-platforms", label: "Platform Comparison" },
  { id: "why-some-tiktok-font-generator-dont-display-correctly", label: "Display Issues" },
  { id: "style-by-style-rendering-safety-reference", label: "Safety Reference" },
  { id: "common-mistakes-when-using-tiktok-font-generator", label: "Common Mistakes" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" },
];

export const metadata: Metadata = {
  title: { absolute: "TikTok Font Generator ✂️ Copy & Paste Styles 😍✨" },
  description:
    "Turn plain text into cool TikTok fonts instantly. Copy and paste unique styles for your bio, display name, captions, and comments. Totally free to use.",
  alternates: {
    canonical: "https://www.aestheticletters.com/tiktok-font-generator",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/tiktok-font-generator",
    title: "TikTok Font Generator ✂️ Copy & Paste Styles 😍✨",
    description:
      "Turn plain text into cool TikTok fonts instantly. Copy and paste unique styles for your bio, display name, captions, and comments. Totally free to use.",
    images: [
      {
        url: "https://www.aestheticletters.com/images/tiktok-font-generator/tiktok-font-generator-og-card.webp",
        width: 1200,
        height: 630,
        alt: "TikTok Font Generator social share banner showing stylish Unicode fonts and a TikTok profile mockup",
      },
    ],
    publishedTime: "2026-08-08T06:00:00+00:00",
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Font Generator ✂️ Copy & Paste Styles 😍✨",
    description:
      "Turn plain text into cool TikTok fonts instantly. Copy and paste unique styles for your bio, display name, captions, and comments. Totally free to use.",
    images: [
      "https://www.aestheticletters.com/images/tiktok-font-generator/tiktok-font-generator-og-card.webp",
    ],
  },
};

const faqs = [
  {
    question: "Is this TikTok font generator free to use?",
    answer:
      "Yes, this tool is completely free. There is no sign up, no email required, and no hidden cost.",
  },
  {
    question: "What are the best fonts for TikTok?",
    answer:
      "For a display name, Bold Script or Bold Fraktur creates a strong, memorable first impression. For a bio, Small Caps or Fullwidth stays clean within the tight 80 character limit. For captions, Bold Sans reads clearly even at a small size on a busy screen.",
  },
  {
    question: "Can I use styled TikTok letters in my username?",
    answer:
      "Not directly. TikTok blocks anything beyond plain letters, numbers, and two symbols in that specific field. Your display name is the workaround, since it fully supports Unicode styling.",
  },
  {
    question: "Why do some TikTok fonts look like boxes or missing symbols?",
    answer:
      "This happens when your specific device has not added support for that character yet. Switching to a widely supported style, like Bold Sans, almost always solves it.",
  },
  {
    question: "Do TikTok fonts affect the algorithm or my video reach?",
    answer:
      "No verified evidence supports this claim. TikTok ranks content based on watch time and engagement, not the visual style of your bio or caption text.",
  },
  {
    question: "Can I copy and paste these fonts anywhere else?",
    answer:
      "Yes. Since these styles use Unicode, they also work on Instagram, Discord, Facebook, and most other apps that accept plain text.",
  },
  {
    question: "What is the difference between TikTok font style and TikTok font names?",
    answer:
      "TikTok font names, like Classic or Neon, only apply inside TikTok's own video text tool. This text generator creates a different kind of TikTok font style using Unicode characters for your profile and comments instead.",
  },
  {
    question: "Are TikTok symbols and emojis safe to use everywhere?",
    answer:
      "Most symbols on this page are safe across modern devices. A few rarer symbols may not display on older phones, so preview your text before posting anywhere important.",
  },
  {
    question: "Are there any risks to using styled fonts on TikTok?",
    answer:
      "Three real risks exist. Styled text can fail to display on older devices. It will not match plain text searches, hurting discoverability. Some platforms also strip styling automatically through a process called normalization, though TikTok itself keeps styled Unicode intact.",
  },
  {
    question: "How can I make my TikTok profile stand out?",
    answer:
      "Combine one bold display name style with a small, matching symbol set rather than styling everything at once. A consistent look across your name, bio, and pinned comment reads as intentional branding, not random decoration.",
  },
];

const linkClass = "text-primary underline underline-offset-4 hover:no-underline";

export default function TikTokFontsPage() {
  const totalFontStyles = getTotalFontStyleCount();

  const baseUrl = "https://www.aestheticletters.com";
  const tiktokImageDir = `${baseUrl}/images/tiktok-font-generator`;
  const imageList = [
    {
      file: "thirteen-tiktok-font-styles-comparison-chart.webp",
      name: "13 TikTok Font Styles Comparison Chart",
      description:
        "Comparison chart of 13 TikTok Unicode font styles including Bold, Bold Italic, Bold Script, Bold Fraktur, Sans-Serif Bold, Fullwidth, Circled, Squared, Small Caps, Italic, Script, Fraktur, and Double-Struck.",
      width: 1024,
      height: 1800,
    },
    {
      file: "how-to-use-tiktok-font-generator-three-steps.webp",
      name: "How to Use the TikTok Font Generator",
      description:
        "Three step guide showing how to use the TikTok font generator: type your text, pick a Unicode style from the cards, then copy and paste it into your TikTok display name or bio.",
      width: 1536,
      height: 1024,
    },
    {
      file: "tiktok-character-limits-by-field-cards.webp",
      name: "TikTok Character Limits by Field",
      description:
        "TikTok character limits by field: display name 30 characters, bio 80 characters, caption around 2,200 characters, and comment 150 characters.",
      width: 1024,
      height: 1024,
    },
    {
      file: "tiktok-username-vs-display-name-unicode-restriction.webp",
      name: "TikTok Username vs Display Name Unicode Restriction",
      description:
        "Diagram explaining why Unicode fonts cannot be used in a TikTok username handle, while display names, bios, captions, and comments accept styled text.",
      width: 1024,
      height: 1024,
    },
    {
      file: "tiktok-aesthetic-symbols-cheat-sheet-grouped-by-style.webp",
      name: "TikTok Aesthetic Symbols Cheat Sheet",
      description:
        "TikTok aesthetic symbols cheat sheet grouped by style: Botanical and Vine, Mystical and Alchemical, Geometric and Minimal, Tech and Y2K, and Classic and Religious.",
      width: 1024,
      height: 800,
    },
    {
      file: "tiktok-fonts-vs-other-platforms-comparison.webp",
      name: "TikTok Fonts vs Other Platforms Comparison",
      description:
        "Quick comparison of Unicode font support across TikTok, Instagram, Facebook, Discord, and X showing that display names, bios, captions, and messages work but usernames are restricted.",
      width: 1536,
      height: 560,
    },
    {
      file: "tiktok-style-by-style-rendering-safety-reference.webp",
      name: "TikTok Style-by-Style Rendering Safety Reference",
      description:
        "Style-by-style rendering safety reference showing which TikTok Unicode font styles are fully safe and which have known fallback letters.",
      width: 1024,
      height: 1800,
    },
    {
      file: "common-mistakes-when-using-tiktok-fonts.webp",
      name: "Common Mistakes When Using TikTok Fonts",
      description:
        "Common mistakes when using TikTok fonts: styling your username, overloading your bio, styling searchable words, ignoring older devices, and mixing too many styles.",
      width: 1024,
      height: 560,
    },
    {
      file: "tiktok-font-generator-og-card.webp",
      name: "TikTok Font Generator",
      description:
        "TikTok Font Generator social share banner showing stylish Unicode fonts and a TikTok profile mockup.",
      width: 1200,
      height: 630,
    },
  ];
  const imageObjects = imageList.map((img, index) => ({
    "@type": "ImageObject",
    "@id": `${tiktokImageDir}/${img.file}#image${index}`,
    url: `${tiktokImageDir}/${img.file}`,
    contentUrl: `${tiktokImageDir}/${img.file}`,
    name: img.name,
    description: img.description,
    caption: img.description,
    width: img.width,
    height: img.height,
    inLanguage: "en",
  }));
  const primaryImage = imageObjects[imageObjects.length - 1];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/tiktok-font-generator#software",
        name: "TikTok Font Generator",
        operatingSystem: "Any",
        applicationCategory: "UtilitiesApplication",
        url: "https://www.aestheticletters.com/tiktok-font-generator",
        description:
          "Turn plain text into cool TikTok fonts instantly. Copy and paste unique styles for your bio, display name, captions, and comments.",
        image: primaryImage.url,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/tiktok-font-generator#webpage",
        url: "https://www.aestheticletters.com/tiktok-font-generator",
        name: "TikTok Font Generator ✂️ Copy & Paste Styles 😍✨",
        description:
          "Turn plain text into cool TikTok fonts instantly. Copy and paste unique styles for your bio, display name, captions, and comments. Totally free to use.",
        inLanguage: "en",
        image: imageObjects,
        primaryImageOfPage: { "@id": primaryImage["@id"] },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", ".text-on-surface-variant"],
        },
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-08-08T06:00:00+00:00",
        dateModified: new Date().toISOString(),
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/tiktok-font-generator#breadcrumb",
        },
        mainEntity: {
          "@id": "https://www.aestheticletters.com/tiktok-font-generator#software",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/tiktok-font-generator#breadcrumb",
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
            name: "TikTok Font Generator",
            item: "https://www.aestheticletters.com/tiktok-font-generator",
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://www.aestheticletters.com/tiktok-font-generator#font-categories",
        name: "TikTok Font Style Categories",
        numberOfItems: tiktokFontCategories.length,
        itemListElement: tiktokFontCategories.map((category, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: category.name,
          url: `https://www.aestheticletters.com/tiktok-font-generator#${category.name.toLowerCase().replace(/\s+/g, "-")}`,
        })),
      },
      ...imageObjects,
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use This TikTok Text Generator",
    description:
      "Turn plain text into styled Unicode fonts for your TikTok display name, bio, captions, and comments in four quick steps.",
    totalTime: "PT1M",
    image: primaryImage.url,
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Pick your field",
        text: "Start by deciding where your styled text will go. Display names allow full styling, while bios and comments need shorter, simpler choices.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Type your words",
        text: "Enter your text once, and every style updates automatically below it.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Compare styles side by side",
        text: "Scroll through the cards and preview your exact text in each one.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Copy your favorite",
        text: "Tap copy, then paste it directly into TikTok. No extra steps are required.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <TopNavBar activePage="tiktok-font-generator" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "All Tools", href: "/all-tools" },
            { label: "TikTok Font Generator", href: "/tiktok-font-generator" },
          ]}
        />

        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            TikTok Font Generator &mdash; Copy and Paste
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 text-sm md:text-lg">
            This free TikTok font generator turns your plain text into cool styles you can copy and paste. Use it for your bio, display name, captions, or comments.
          </p>
        </section>

        {/* Interactive Font Generator */}
        <TikTokFontGeneratorClient totalFontStyles={totalFontStyles} />

        {/* Sticky section navigation */}
        <SectionNav sections={pageSections} />

        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* What is a TikTok Font Generator? */}
              <article className="scroll-mt-[9rem]" id="what-is-a-tiktok-font-generator">
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  TikTok moves fast, and a plain profile can get lost in someone&apos;s endless scroll within seconds.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  This free tiktok font generator turns your plain text into eye catching styles you can copy instantly.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Simply type your words, browse the styles, then paste your favorite into your display name, bio, or captions.
                </p>
                <h2 className="font-headline text-4xl font-bold my-8 leading-tight">
                  What is a TikTok Font Generator?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  TikTok gives you four separate spots to add text: your display name, bio, captions, and comments.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Each one has its own rules, and a font that works in one spot might fail in another.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  A tiktok font generator solves this by turning your plain text into styled Unicode characters instead.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Your actual words never change. Only the shape of each letter changes once you copy it.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  These styles are not installed fonts like the ones inside a design app or word processor.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Unicode gives every letter its own built in code, so most devices already know how to show it.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  That is the real reason styled text pastes correctly the moment you copy it, with nothing to download.
                </p>
              </article>

              {/* How to Use This TikTok Text Generator */}
              <article className="scroll-mt-[9rem]" id="how-to-use-this-tiktok-text-generator">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Use This TikTok Text Generator
                </h2>
                <Image
                  src="/images/tiktok-font-generator/how-to-use-tiktok-font-generator-three-steps.webp"
                  alt="Three step guide showing how to use the TikTok font generator: type your text, pick a Unicode style from the cards, then copy and paste it into your TikTok display name or bio"
                  width={1536}
                  height={1024}
                  className="w-full h-auto rounded-xl mb-8"
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Start by deciding where your styled text will go, since that shapes which style works best.
                </p>
                <ol className="list-decimal list-inside space-y-4 text-on-surface-variant leading-relaxed text-lg mb-6">
                  <li>
                    <strong className="text-on-background">Pick your field.</strong> Display names allow full styling. Bios and comments need shorter, simpler choices.
                  </li>
                  <li>
                    <strong className="text-on-background">Type your words.</strong> Enter your text once, and every style updates automatically below it.
                  </li>
                  <li>
                    <strong className="text-on-background">Compare styles side by side.</strong> Scroll through the cards and preview your exact text in each one.
                  </li>
                  <li>
                    <strong className="text-on-background">Copy your favorite.</strong> Tap copy, then paste it directly into TikTok, no extra steps required.
                  </li>
                </ol>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  This order matters more than it seems, since picking the field first avoids a style that gets rejected later.
                </p>
              </article>

              {/* TikTok Font Names vs Unicode Text Styles */}
              <article className="scroll-mt-[9rem]" id="tiktok-font-names-vs-unicode-text-styles">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  TikTok Font Names vs Unicode Text Styles
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  TikTok actually has two completely separate font systems, and most guides online mix them together by mistake.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The first system lives inside TikTok&apos;s own video editor, where creators add text directly onto their clips.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  This tool offers named styles like Classic, Elegance, Neon, Retro, and Vintage for on screen video captions.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  These are real fonts built into the app itself, so they only work inside TikTok&apos;s video editor.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The second system is Unicode text, the kind this tiktok fonts generator creates for your profile and comments.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Unicode styles paste directly into your display name, bio, captions, and comments across the entire app.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Unlike video fonts, Unicode text works anywhere plain text is accepted, even outside of TikTok entirely.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Knowing this difference helps you pick the right tool depending on where you want styled text to appear.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Our{" "}
                  <Link href="/facebook-fonts" className={linkClass}>
                    Facebook fonts
                  </Link>{" "}
                  page breaks down this same native versus Unicode distinction in more detail, since the two systems work almost identically across both platforms.
                </p>
              </article>

              {/* TikTok Sans */}
              <article className="scroll-mt-[9rem]" id="tiktok-sans-official-typeface">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  TikTok Sans &mdash; TikTok&apos;s Official Typeface
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Many font guides online still claim TikTok&apos;s interface uses Proxima Nova, but that information is outdated.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  TikTok switched to a custom typeface called TikTok Sans across its entire app in May 2023.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The company built this typeface with Grilli Type, a well known Swiss studio known for distinctive designs.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  TikTok Sans now appears throughout the app interface, marketing materials, and most video caption styling as well.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Proxima Nova still exists as one caption style option inside the video editor, labeled simply as Classic.
                </p>
              </article>

              {/* TikTok Character Limits by Field */}
              <article className="scroll-mt-[9rem]" id="tiktok-character-limits-by-field">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  TikTok Character Limits by Field
                </h2>
                <Image
                  src="/images/tiktok-font-generator/tiktok-character-limits-by-field-cards.webp"
                  alt="TikTok character limits by field: display name 30 characters, bio 80 characters, caption around 2,200 characters, and comment 150 characters"
                  width={1024}
                  height={1024}
                  className="w-full h-auto rounded-xl mb-8"
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Every spot on your TikTok profile follows its own rules for length and Unicode support.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Picking the wrong style for the wrong field can get your text cut off or rejected entirely.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Here is what each field actually allows, verified directly rather than copied from outdated guides.
                </p>

                <div className="space-y-10">
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">Display Name Fonts</h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Your TikTok display name allows up to 30 characters, including full Unicode and emoji support.
                      This is the only profile field where creative Unicode styling truly shines without any restrictions.
                      Bold, script, and decorative styles all work well here since the field stays short and visible.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">Bio Fonts</h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Your TikTok bio allows up to 80 characters total, including spaces and any symbols you add.
                      Since space is limited, shorter styles with fewer added symbols often work best in this field.
                      Save longer decorative wrappers for captions instead, where you have much more room to work with.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">Caption Fonts</h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      TikTok captions currently allow around 2,200 characters, though some accounts show a higher limit.
                      TikTok has been slowly rolling out a longer caption limit near 4,000 characters, aimed at helping content show up better in search.
                      Not every account has this update yet, so check your own posting screen for the exact number.
                      This makes captions a strong spot for longer Unicode phrases, quotes, or decorated hashtags either way.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">Comment Fonts</h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      TikTok comments are limited to 150 characters, much shorter than captions or bios.
                      Since space is tight, simple styles tend to read better than heavy decorative wrappers here.
                      Styled comments still stand out in a busy comment section, especially on popular or trending videos.
                    </p>
                  </div>
                </div>
              </article>

              {/* Why TikTok Username Font Doesn't Work */}
              <article className="scroll-mt-[9rem]" id="why-tiktok-username-font-doesnt-work">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Why &quot;TikTok Username Font&quot; Doesn&apos;t Work?
                </h2>
                <Image
                  src="/images/tiktok-font-generator/tiktok-username-vs-display-name-unicode-restriction.webp"
                  alt="Diagram explaining why Unicode fonts cannot be used in a TikTok username handle, while display names, bios, captions, and comments accept styled text"
                  width={1024}
                  height={1024}
                  className="w-full h-auto rounded-xl mb-8"
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Many people search for a way to add styled fonts inside their TikTok username field.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The truth is that TikTok blocks Unicode text completely inside the username field itself.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Usernames only accept plain letters, numbers, underscores, and periods, nothing decorative or styled at all.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  TikTok also limits usernames to between 2 and 24 characters, all shown in lowercase automatically.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  A username cannot start or end with an underscore, and cannot end with a period either.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  TikTok also blocks spaces and dash symbols inside usernames to keep tagging and links working properly.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Some sites online suggest a bypass trick using lookalike Unicode characters to sneak past this restriction.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  This approach is risky and often fails, since TikTok updates its filters on a regular basis.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  A rejected username can waste time and cause frustration during account setup or a rename attempt.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The real solution is simple: use styled Unicode text in your display name field instead.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Your display name sits right above your username and fully supports Unicode, emoji, and creative styling.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Use the display name font styles above to get the exact same creative look, without any risk.
                </p>
              </article>

              {/* TikTok Font Styles Available */}
              <article className="scroll-mt-[9rem]" id="tiktok-font-styles-available-in-this-generator">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  TikTok Font Styles Available in This Generator?
                </h2>
                <Image
                  src="/images/tiktok-font-generator/thirteen-tiktok-font-styles-comparison-chart.webp"
                  alt="Comparison chart of 13 TikTok Unicode font styles including Bold, Bold Italic, Bold Script, Bold Fraktur, Sans-Serif Bold, Fullwidth, Circled, Squared, Small Caps, Italic, Script, Fraktur, and Double-Struck"
                  width={1024}
                  height={1800}
                  className="w-full h-auto rounded-xl mb-8"
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  This tiktok font generator includes 13 verified Unicode styles, each checked letter by letter before publishing.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Nine styles cover every letter and number completely, with no gaps or missing characters at all.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Four styles carry a few known gaps inside the Unicode standard, explained clearly below each one.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Fully Complete Styles</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  These nine styles work perfectly across every letter, number, and case without any exceptions.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-on-surface-variant leading-relaxed text-lg mb-8">
                  <li><strong className="text-on-background">Bold</strong> — Clean, heavy Unicode letters that stand out instantly in any field.</li>
                  <li><strong className="text-on-background">Bold Italic</strong> — Combines weight and a forward lean for extra emphasis.</li>
                  <li><strong className="text-on-background">Bold Script</strong> — A flowing, connected style with added visual weight.</li>
                  <li><strong className="text-on-background">Bold Fraktur</strong> — A heavy, old style German blackletter look.</li>
                  <li><strong className="text-on-background">Sans-Serif Bold</strong> — A clean, modern bold style without decorative strokes.</li>
                  <li><strong className="text-on-background">Fullwidth</strong> — Wide spaced letters, often called the Vaporwave style.</li>
                  <li><strong className="text-on-background">Circled</strong> — Every letter sits inside a small circle outline.</li>
                  <li><strong className="text-on-background">Squared</strong> — Every letter sits inside a small square outline.</li>
                  <li><strong className="text-on-background">Small Caps</strong> — Small capital letters that create a neat, editorial look.</li>
                </ol>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Styles With a Few Known Gaps</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  Unicode never assigned every letter inside these four styles, so a small number stayed unstyled.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-on-surface-variant leading-relaxed text-lg mb-6">
                  <li><strong className="text-on-background">Italic</strong> — Every letter works except lowercase h, which stays in plain text.</li>
                  <li><strong className="text-on-background">Script</strong> — Eleven letters were never assigned, so they display using their original plain form.</li>
                  <li><strong className="text-on-background">Fraktur</strong> — Five capital letters were never assigned and displayed using their original plain form.</li>
                  <li><strong className="text-on-background">Double-Struck</strong> — Seven capital letters live in a separate part of Unicode entirely.</li>
                </ol>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Most generators show a broken box for these letters instead of falling back to plain text. This tiktok text generator checks every letter first, so your text always displays cleanly, without any broken characters.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  If you prefer a cleaner, more minimal look than these decorative styles offer, our{" "}
                  <Link href="/sans-serif-fonts" className={linkClass}>
                    sans serif fonts
                  </Link>{" "}
                  page covers that exact style in more depth.
                </p>
              </article>

              {/* TikTok Symbols and Emojis */}
              <article className="scroll-mt-[9rem]" id="tiktok-symbols-and-emojis-to-pair-with-your-text">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  TikTok Symbols and Emojis to Pair With Your Text
                </h2>
                <Image
                  src="/images/tiktok-font-generator/tiktok-aesthetic-symbols-cheat-sheet-grouped-by-style.webp"
                  alt="TikTok aesthetic symbols cheat sheet grouped by style: Botanical and Vine, Mystical and Alchemical, Geometric and Minimal, Tech and Y2K, and Classic and Religious"
                  width={1024}
                  height={800}
                  className="w-full h-auto rounded-xl mb-8"
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Symbols add extra personality to your styled text, making your profile feel more complete and polished.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  This tiktok font generator includes symbols across several aesthetic groups, so you can match your own personal style. For even more decorative wrapper options beyond this set, our{" "}
                  <Link href="/fancy-fonts" className={linkClass}>
                    fancy fonts
                  </Link>{" "}
                  collection has a dedicated section built specifically for TikTok and WhatsApp.
                </p>

                {TIKTOK_SYMBOL_GROUPS.map((group) => (
                  <div key={group.name} className="mb-10">
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      {group.name} Symbols
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                      {group.name === "Botanical and Vine" && (
                        <>These soft, delicate symbols suit a gentle or nature inspired profile. They pair especially well with the softer styles on our <Link href="/cute-fonts" className={linkClass}>cute fonts</Link> page.</>
                      )}
                      {group.name === "Mystical and Alchemical" && (
                        <>Reach for these if your profile leans witchy, moody, or dark academia.</>
                      )}
                      {group.name === "Geometric and Minimal" && (
                        <>Choose these for a clean, modern, minimalist look.</>
                      )}
                      {group.name === "Tech and Y2K" && (
                        <>Gamers and tech creators often gravitate toward this sharper set.</>
                      )}
                      {group.name === "Classic and Religious" && (
                        <>This tiktok fonts generator also includes widely recognized symbols from religious traditions, useful for personal or spiritual profiles.</>
                      )}
                    </p>
                    <TikTokSymbolsGroup title={group.name} symbols={group.symbols} />
                  </div>
                ))}
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Use these thoughtfully, since symbols like these often carry deep meaning beyond simple decoration.
                </p>
              </article>

              {/* Does a Styled Font Affect Reach? */}
              <article className="scroll-mt-[9rem]" id="does-a-styled-font-affect-your-tiktok-reach">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Does a Styled Font Affect Your TikTok Reach?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Many other sites claim styled fonts increase your views, sometimes by a specific percentage.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  These claims usually appear without any real data or source behind the number itself.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  There is no verified evidence that styled Unicode text directly changes how TikTok ranks your content.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  TikTok&apos;s algorithm mainly looks at watch time, likes, comments, shares, and how people interact with a video. The visual style of your bio or caption text is not a known ranking factor.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Styled text can still help indirectly, since a unique bio may catch someone&apos;s attention faster.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  A more polished profile might encourage a visitor to stay longer or follow your account.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  One thing worth knowing: styled Unicode letters are different characters from plain text, technically speaking.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  This means a search for a specific word may not match if that word is heavily styled.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  If discoverability through search or hashtags matters to you, keep those specific words in plain text.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Save the styled fonts for names, headlines, or emphasis, rather than words people might search for directly.
                </p>
              </article>

              {/* Platform Comparison */}
              <article className="scroll-mt-[9rem]" id="tiktok-font-generator-vs-other-platforms">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  TikTok Fonts vs. Other Platforms &mdash; Quick Comparison
                </h2>
                <Image
                  src="/images/tiktok-font-generator/tiktok-fonts-vs-other-platforms-comparison.webp"
                  alt="Quick comparison of Unicode font support across TikTok, Instagram, Facebook, Discord, and X showing that display names, bios, captions, and messages work but usernames are restricted"
                  width={1536}
                  height={560}
                  className="w-full h-auto rounded-xl mb-8"
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Unicode support and character limits change from platform to platform, and mixing them up causes real problems.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Here is a quick reference table built from verified research across our own generator pages.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-left border-collapse rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-surface-container-high text-on-background">
                        <th className="p-4 font-headline font-bold">Platform</th>
                        <th className="p-4 font-headline font-bold">Username / Handle</th>
                        <th className="p-4 font-headline font-bold">Display Name / Bio</th>
                        <th className="p-4 font-headline font-bold">Unicode Support</th>
                      </tr>
                    </thead>
                    <tbody className="text-on-surface-variant">
                      <tr className="border-b border-outline-variant/10">
                        <td className="p-4 font-semibold text-on-background">TikTok</td>
                        <td className="p-4">ASCII only, 2 to 24 characters</td>
                        <td className="p-4">Display name: 30 characters. Bio: 80 characters. Comments: 150 characters. Captions: around 2,200 characters, though a wider rollout up to 4,000 is underway</td>
                        <td className="p-4">Works in display name, bio, captions, comments</td>
                      </tr>
                      <tr className="border-b border-outline-variant/10">
                        <td className="p-4 font-semibold text-on-background">Instagram</td>
                        <td className="p-4">ASCII only, 30 characters</td>
                        <td className="p-4">Name field: 30 characters, full Unicode. Bio: 150 characters</td>
                        <td className="p-4">Works in name field, bio, captions, comments</td>
                      </tr>
                      <tr className="border-b border-outline-variant/10">
                        <td className="p-4 font-semibold text-on-background">Discord</td>
                        <td className="p-4">ASCII only, 2 to 32 characters</td>
                        <td className="p-4">Display name: 32 characters, full Unicode. Bio: 190 characters</td>
                        <td className="p-4">Works in nickname, bio, messages, not the username</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-on-background">X (Twitter)</td>
                        <td className="p-4">ASCII only, 15 characters</td>
                        <td className="p-4">Display name: 50 characters. Bio: 160 characters</td>
                        <td className="p-4">Works in display name, bio, posts, most styles count as two characters</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  A clear pattern shows up across every platform on this list.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Usernames and handles almost always stay locked to plain ASCII text, no exceptions allowed.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Display names and nicknames are where styled Unicode text actually works every single time.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  This is why the Display Name Fonts styles above matter more than any username specific style.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The same rule protects your account everywhere: style your display name, never fight your username.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Our{" "}
                  <Link href="/discord-fonts" className={linkClass}>
                    Discord fonts
                  </Link>{" "}
                  and{" "}
                  <Link href="/twitter-fonts" className={linkClass}>
                    Twitter fonts
                  </Link>{" "}
                  pages cover each platform&apos;s specific quirks in more depth, since character counting rules can shift slightly between apps.
                </p>
              </article>

              {/* Why Some TikTok Fonts Don't Display Correctly */}
              <article className="scroll-mt-[9rem]" id="why-some-tiktok-font-generator-dont-display-correctly">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Why Some TikTok Fonts Don&apos;t Display Correctly?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Two separate problems can cause styled text to break, and each one has a different cause.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The first problem happens when a platform quietly changes your text before saving it.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  This process, called normalization, can turn styled letters back into plain text without any warning.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  We tested this directly using the same method behind our{" "}
                  <Link href="/bold-font-generator" className={linkClass}>
                    bold text generator
                  </Link>{" "}
                  research on this site.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Some platforms strip styled Unicode letters, while others keep them exactly as pasted.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The second problem is simpler: your device or app cannot draw a specific character at all.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Older phones and some apps lack support for certain Unicode blocks, showing empty boxes instead.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  This is not a bug in this generator, since the character itself displays correctly everywhere else.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Knowing which styles are safest helps you avoid both problems before you ever hit paste.
                </p>
              </article>

              {/* Style-by-Style Rendering Safety Reference */}
              <article className="scroll-mt-[9rem]" id="style-by-style-rendering-safety-reference">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Style-by-Style Rendering Safety Reference
                </h2>
                <Image
                  src="/images/tiktok-font-generator/tiktok-style-by-style-rendering-safety-reference.webp"
                  alt="Style-by-style rendering safety reference showing which TikTok Unicode font styles are fully safe and which have known fallback letters"
                  width={1024}
                  height={1800}
                  className="w-full h-auto rounded-xl mb-8"
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  This table shows exactly which styles are fully safe and which carry small, verified gaps.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-left border-collapse rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-surface-container-high text-on-background">
                        <th className="p-4 font-headline font-bold">Style</th>
                        <th className="p-4 font-headline font-bold">Status</th>
                        <th className="p-4 font-headline font-bold">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-on-surface-variant">
                      <tr className="border-b border-outline-variant/10"><td className="p-4 font-semibold text-on-background">Bold</td><td className="p-4">Fully safe</td><td className="p-4">Every letter and number has its own dedicated character</td></tr>
                      <tr className="border-b border-outline-variant/10"><td className="p-4 font-semibold text-on-background">Sans-Serif Bold</td><td className="p-4">Fully safe</td><td className="p-4">Complete coverage across every letter, number, and case</td></tr>
                      <tr className="border-b border-outline-variant/10"><td className="p-4 font-semibold text-on-background">Bold Italic</td><td className="p-4">Fully safe</td><td className="p-4">Complete coverage across uppercase and lowercase letters</td></tr>
                      <tr className="border-b border-outline-variant/10"><td className="p-4 font-semibold text-on-background">Bold Script</td><td className="p-4">Fully safe</td><td className="p-4">Complete coverage across uppercase and lowercase letters</td></tr>
                      <tr className="border-b border-outline-variant/10"><td className="p-4 font-semibold text-on-background">Bold Fraktur</td><td className="p-4">Fully safe</td><td className="p-4">Complete coverage across uppercase and lowercase letters</td></tr>
                      <tr className="border-b border-outline-variant/10"><td className="p-4 font-semibold text-on-background">Fullwidth</td><td className="p-4">Fully safe</td><td className="p-4">Complete coverage, widely supported across every device</td></tr>
                      <tr className="border-b border-outline-variant/10"><td className="p-4 font-semibold text-on-background">Circled</td><td className="p-4">Fully safe</td><td className="p-4">Complete coverage across letters and numbers</td></tr>
                      <tr className="border-b border-outline-variant/10"><td className="p-4 font-semibold text-on-background">Squared</td><td className="p-4">Fully safe</td><td className="p-4">Complete coverage across capital letters</td></tr>
                      <tr className="border-b border-outline-variant/10"><td className="p-4 font-semibold text-on-background">Small Caps</td><td className="p-4">Fully safe</td><td className="p-4">One small exception: no distinct capital style exists for the letter X</td></tr>
                      <tr className="border-b border-outline-variant/10"><td className="p-4 font-semibold text-on-background">Italic</td><td className="p-4">Minor exception</td><td className="p-4">The lowercase letter h falls back to plain text</td></tr>
                      <tr className="border-b border-outline-variant/10"><td className="p-4 font-semibold text-on-background">Script</td><td className="p-4">Known exceptions</td><td className="p-4">Eleven letters fall back to plain text</td></tr>
                      <tr className="border-b border-outline-variant/10"><td className="p-4 font-semibold text-on-background">Fraktur</td><td className="p-4">Known exceptions</td><td className="p-4">Five capital letters fall back to plain text</td></tr>
                      <tr><td className="p-4 font-semibold text-on-background">Double-Struck</td><td className="p-4">Known exceptions</td><td className="p-4">Seven capital letters fall back to plain text</td></tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Every style above still displays cleanly, since this Tiktok font generator maps each letter to the correct character by hand.
                </p>
              </article>

              {/* Common Mistakes */}
              <article className="scroll-mt-[9rem]" id="common-mistakes-when-using-tiktok-font-generator">
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Common Mistakes When Using TikTok Fonts
                </h2>
                <Image
                  src="/images/tiktok-font-generator/common-mistakes-when-using-tiktok-fonts.webp"
                  alt="Common mistakes when using TikTok fonts: styling your username, overloading your bio, styling searchable words, ignoring older devices, and mixing too many styles"
                  width={1024}
                  height={560}
                  className="w-full h-auto rounded-xl mb-8"
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Even a great style can backfire if it lands in the wrong spot or breaks something else on your profile.
                </p>
                <ol className="list-decimal list-inside space-y-4 text-on-surface-variant leading-relaxed text-lg">
                  <li>
                    <strong className="text-on-background">Styling your username.</strong> TikTok blocks this entirely. Use your display name instead.
                  </li>
                  <li>
                    <strong className="text-on-background">Overloading your bio with symbols.</strong> Your bio only allows 80 characters, so heavy wrappers eat that space fast.
                  </li>
                  <li>
                    <strong className="text-on-background">Styling words you want people to find.</strong> Styled Unicode text will not match a plain text search, so keep searchable words plain.
                  </li>
                  <li>
                    <strong className="text-on-background">Ignoring older devices.</strong> A style that looks perfect on your phone may show broken boxes on someone else&apos;s.
                  </li>
                  <li>
                    <strong className="text-on-background">Mixing too many styles in one caption.</strong> One or two styles read as intentional. Five styles read as cluttered.
                  </li>
                </ol>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-12">
              <Sidebar showBanner={false} />
            </aside>
          </div>
        </section>

        {/* Explore More Tools */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-16 pb-8 scroll-mt-[9rem]" id="explore-more-tools">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3 text-center leading-tight">
            Explore More Tools
          </h2>
          <p className="text-on-surface-variant text-center text-sm md:text-base mb-10 max-w-xl mx-auto">
            Want more than tiktok fonts? Check out these generators for letters, symbols, and complete text styling.
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
                  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD835\uDD35", desc: "Strong Unicode text" },
                  { label: "Fancy Fonts", href: "/fancy-fonts", icon: "\uD83D\uDC51", desc: "Decorative text art" },
                  { label: "Cute Fonts", href: "/cute-fonts", icon: "\uD83C\uDF80", desc: "Adorable text styles" },
                  { label: "Stylish Fonts", href: "/stylish-fonts", icon: "\uD83D\uDC8E", desc: "Premium text styles" },
                  { label: "Preppy Fonts", href: "/preppy-fonts", icon: "\uD83C\uDF8E", desc: "Preppy aesthetic fonts" },
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
                  { label: "Instagram Fonts", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Stand out on Insta" },
                  { label: "Facebook Fonts", href: "/facebook-fonts", icon: "\uD83D\uDCAC", desc: "Style your FB posts" },
                  { label: "Discord Fonts", href: "/discord-fonts", icon: "\uD83C\uDFAE", desc: "140+ Discord styles" },
                  { label: "Twitter Fonts", href: "/twitter-fonts", icon: "\uD835\uDD4F", desc: "Fonts for X/Twitter" },
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
      <BrandDisclaimer brands={["TikTok", "ByteDance"]} />
      <Footer />
    </>
  );
}

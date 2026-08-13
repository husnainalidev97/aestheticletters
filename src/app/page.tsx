import type { Metadata } from "next";
import Link from "next/link";
import TopNavBar from "./components/TopNavBar";
import FontGenerator from "./components/FontGenerator";
import SEOSection from "./components/SEOSection";
import FAQSection, { homeFaqs } from "./components/FAQSection";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import SectionNav from "./components/SectionNav";
import { getTotalFontStyleCount } from "./lib/fontCount";

const homePageSections = [
  { id: "what-is-an-aesthetic-fonts-generator", label: "What is an" },
  { id: "how-does-this-aesthetic-text-generator-work", label: "How Does" },
  { id: "choose-from-120-aesthetic-font-styles", label: "Choose From" },
  { id: "where-can-aesthetic-fonts-be-used", label: "Where Can" },
  { id: "05-common-mistakes-to-avoid-when-using-aesthetic-fonts", label: "05 Common Mistakes" },
  { id: "aesthetic-font-generator-vs-installing-real-fonts", label: "Aesthetic Font" },
  { id: "explore-more-tools", label: "Explore" },
  { id: "frequently-asked-questions", label: "FAQ" },
];
export const metadata: Metadata = {
  title: "120+ Free Aesthetic Fonts - Copy Paste for Instagram & FB",
  description:
    "Create aesthetic fonts with 120+ styles. Copy and paste stylish text for Instagram, Facebook, WhatsApp, and more. Simple, fast, and free to use.",
  alternates: {
    canonical: "https://www.aestheticletters.com/",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/",
    title: "120+ Free Aesthetic Fonts - Copy Paste for Instagram & FB",
    description:
      "Create aesthetic fonts with 120+ styles. Copy and paste stylish text for Instagram, Facebook, WhatsApp, and more. Simple, fast, and free to use.",
    images: [{ url: "https://www.aestheticletters.com/og-image.webp", width: 1200, height: 624 }],
    publishedTime: "2026-04-19T08:00:00+00:00",
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: "summary_large_image",
    title: "120+ Free Aesthetic Fonts - Copy Paste for Instagram & FB",
    description:
      "Create aesthetic fonts with 120+ styles. Copy and paste stylish text for Instagram, Facebook, WhatsApp, and more. Simple, fast, and free to use.",
    images: ["https://www.aestheticletters.com/og-image.webp"],
  },
};

export default function Home() {
  const totalFontStyles = getTotalFontStyleCount();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Aesthetic Letters Generator",
        operatingSystem: "Windows, macOS, Android, iOS",
        applicationCategory: "MultimediaApplication",
        url: "https://www.aestheticletters.com",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/#webpage",
        url: "https://www.aestheticletters.com",
        name: "120+ Free Aesthetic Fonts - Copy Paste for Instagram & FB",
        description:
          "Create aesthetic fonts with 120+ styles. Copy and paste stylish text for Instagram, Facebook, WhatsApp, and more. Simple, fast, and free to use.",
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-04-19T08:00:00+00:00",
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.aestheticletters.com/",
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Aesthetic Letter Tools",
        description: "All font generator tools available on Aesthetic Letters. Every generator uses Unicode characters you can copy and paste into any platform.",
        numberOfItems: 19,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Instagram Fonts", url: "https://www.aestheticletters.com/instagram-fonts" },
          { "@type": "ListItem", position: 2, name: "Facebook Fonts", url: "https://www.aestheticletters.com/facebook-fonts" },
          { "@type": "ListItem", position: 3, name: "Discord Fonts", url: "https://www.aestheticletters.com/discord-fonts" },
          { "@type": "ListItem", position: 4, name: "Twitter Fonts", url: "https://www.aestheticletters.com/twitter-fonts" },
          { "@type": "ListItem", position: 5, name: "TikTok Fonts", url: "https://www.aestheticletters.com/tiktok-font-generator" },
          { "@type": "ListItem", position: 6, name: "Fancy Fonts", url: "https://www.aestheticletters.com/fancy-fonts" },
          { "@type": "ListItem", position: 7, name: "Stylish Fonts", url: "https://www.aestheticletters.com/stylish-fonts" },
          { "@type": "ListItem", position: 8, name: "Cute Fonts", url: "https://www.aestheticletters.com/cute-fonts" },
          { "@type": "ListItem", position: 9, name: "Cursive Fonts", url: "https://www.aestheticletters.com/cursive-fonts" },
          { "@type": "ListItem", position: 10, name: "Preppy Fonts", url: "https://www.aestheticletters.com/preppy-fonts" },
          { "@type": "ListItem", position: 11, name: "Weird Font Generator", url: "https://www.aestheticletters.com/weird-font-generator" },
          { "@type": "ListItem", position: 12, name: "Bold Font Generator", url: "https://www.aestheticletters.com/bold-font-generator" },
          { "@type": "ListItem", position: 13, name: "Number Font Generator", url: "https://www.aestheticletters.com/number-font-generator" },
          { "@type": "ListItem", position: 14, name: "Serif Fonts", url: "https://www.aestheticletters.com/serif-fonts" },
          { "@type": "ListItem", position: 15, name: "Sans Serif Fonts", url: "https://www.aestheticletters.com/sans-serif-fonts" },
          { "@type": "ListItem", position: 16, name: "Halloween Fonts", url: "https://www.aestheticletters.com/halloween-fonts" },
          { "@type": "ListItem", position: 17, name: "Christmas Fonts", url: "https://www.aestheticletters.com/christmas-fonts" },
          { "@type": "ListItem", position: 18, name: "Big Text Generator", url: "https://www.aestheticletters.com/big-text-generator" },
          { "@type": "ListItem", position: 19, name: "R in Different Fonts", url: "https://www.aestheticletters.com/r-in-different-fonts" },
        ],
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Does This Aesthetic Text Generator Work?",
    description:
      "Using an aesthetic generator is very simple. Neither design expertise nor technical knowledge is required. Just follow these quick steps to create free aesthetic font styles instantly.",
    image: "https://www.aestheticletters.com/how-aesthetic-font-generator-works-3-steps.webp",
    totalTime: "PT1M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Type Your Text",
        text: "Fill out the input box with your text. The tool instantly creates multiple styles as you type.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Choose Your Style",
        text: "Scroll through different special aesthetic fonts like soft, dark, or decorative text and pick the one you like.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Copy & Paste",
        text: "By tapping on a style, you can copy it instantly, then paste it anywhere like Instagram bios, comments, chats, or even as unique usernames in games.",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    image: "https://www.aestheticletters.com/og-image.webp",
    mainEntity: homeFaqs.map((faq) => ({
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
        <FontGenerator totalFontStyles={totalFontStyles} />

        {/* Sticky section navigation */}
        <SectionNav sections={homePageSections} />
        <SEOSection />

        {/* Explore More Tools */}
        <section id="explore-more-tools" className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-16 pb-8 scroll-mt-[9rem]">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3 text-center leading-tight">
            Explore More Tools
          </h2>
          <p className="text-on-surface-variant text-center text-sm md:text-base mb-10 max-w-xl mx-auto">
            Every generator uses Unicode characters you can copy and paste into any platform. Pick the one that fits your style.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Social Media Fonts */}
            <div>
              <h3 className="font-headline text-lg font-bold mb-4 flex items-center gap-2">
                <span className="inline-block w-1 h-5 rounded-full bg-primary" />
                Social Media Fonts
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Instagram Fonts", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Stand out on Insta" },
                  { label: "Facebook Fonts", href: "/facebook-fonts", icon: "\uD83D\uDCAC", desc: "Style your FB posts" },
                  { label: "Discord Fonts", href: "/discord-fonts", icon: "\uD83C\uDFAE", desc: "140+ Discord styles" },
                  { label: "Twitter Fonts", href: "/twitter-fonts", icon: "\uD835\uDD4F", desc: "Fonts for X/Twitter" },
                  { label: "TikTok Fonts", href: "/tiktok-font-generator", icon: "\uD83C\uDFB5", desc: "Fonts for TikTok" },
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
            {/* Creative & Decorative */}
            <div>
              <h3 className="font-headline text-lg font-bold mb-4 flex items-center gap-2">
                <span className="inline-block w-1 h-5 rounded-full bg-primary" />
                Creative &amp; Decorative
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Fancy Fonts", href: "/fancy-fonts", icon: "\uD83D\uDC51", desc: "Decorative text art" },
                  { label: "Stylish Fonts", href: "/stylish-fonts", icon: "\uD83D\uDC8E", desc: "Premium text styles" },
                  { label: "Cute Fonts", href: "/cute-fonts", icon: "\uD83C\uDF80", desc: "Adorable text styles" },
                  { label: "Cursive Fonts", href: "/cursive-fonts", icon: "\u270D\uFE0F", desc: "Handwriting scripts" },
                  { label: "Preppy Fonts", href: "/preppy-fonts", icon: "\uD83D\uDC54", desc: "Preppy aesthetic text" },
                  { label: "Weird Font Generator", href: "/weird-font-generator", icon: "\uD83D\uDC7D", desc: "Strange & unique styles" },
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
            {/* Typography & Specialty */}
            <div>
              <h3 className="font-headline text-lg font-bold mb-4 flex items-center gap-2">
                <span className="inline-block w-1 h-5 rounded-full bg-primary" />
                Typography &amp; More
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDDAB", desc: "81 bold text styles" },
                  { label: "Big Text Generator", href: "/big-text-generator", icon: "\uD83D\uDD20", desc: "Preview text at scale" },
                  { label: "Number Fonts", href: "/number-font-generator", icon: "\uD83D\uDD22", desc: "100+ number styles" },
                  { label: "Serif Fonts", href: "/serif-fonts", icon: "\uD83C\uDFF7\uFE0F", desc: "Classic serif styles" },
                  { label: "Sans Serif Fonts", href: "/sans-serif-fonts", icon: "\uD83D\uDDA5\uFE0F", desc: "Clean modern fonts" },
                  { label: "Halloween Fonts", href: "/halloween-fonts", icon: "\uD83C\uDF83", desc: "Spooky text styles" },
                  { label: "Christmas Fonts", href: "/christmas-fonts", icon: "\uD83C\uDF84", desc: "Festive holiday text" },
                  { label: "R in Different Fonts", href: "/r-in-different-fonts", icon: "\u24C7", desc: "Letter R styles" },
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

        <FAQSection />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}

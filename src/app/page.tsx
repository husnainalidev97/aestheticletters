import type { Metadata } from "next";
import Link from "next/link";
import TopNavBar from "./components/TopNavBar";
import FontGenerator from "./components/FontGeneratorLazy";
import SEOSection from "./components/SEOSection";
import FAQSection, { homeFaqs } from "./components/FAQSection";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import { getTotalFontStyleCount } from "./lib/fontCount";

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
    images: [{ url: "https://www.aestheticletters.com/og-image.jpg", width: 1200, height: 630 }],
    publishedTime: "2026-04-19T08:00:00+00:00",
    modifiedTime: "2026-06-25T00:00:00+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "120+ Free Aesthetic Fonts - Copy Paste for Instagram & FB",
    description:
      "Create aesthetic fonts with 120+ styles. Copy and paste stylish text for Instagram, Facebook, WhatsApp, and more. Simple, fast, and free to use.",
    images: ["https://www.aestheticletters.com/og-image.jpg"],
  },
};

export default function Home() {
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
        dateModified: "2026-06-25T00:00:00+00:00",
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
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Does This Aesthetic Text Generator Work?",
    description:
      "Using an aesthetic generator is very simple. Neither design expertise nor technical knowledge is required. Just follow these quick steps to create free aesthetic font styles instantly.",
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
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const totalFontStyles = getTotalFontStyleCount();

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
        <SEOSection />

        {/* Explore More Styles */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-16 pb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center leading-tight">
            Explore More Styles
          </h2>
          <p className="text-center text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
            Every generator below uses Unicode characters you can copy and paste into any platform. Pick the one that fits your style.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Instagram Fonts", desc: "Stylish text for bios, captions, and stories that makes your profile stand out.", href: "/instagram-fonts", icon: "camera" },
              { title: "Discord Fonts", desc: "140+ text styles for display names, server names, roles, and bios on Discord.", href: "/discord-fonts", icon: "forum" },
              { title: "Facebook Fonts", desc: "Unique font styles for posts, comments, and bios that grab attention in feeds.", href: "/facebook-fonts", icon: "facebook" },
              { title: "Fancy Fonts", desc: "Decorative Unicode letter styles for a confident, on brand typographic finish.", href: "/fancy-fonts", icon: "brush" },
              { title: "Bold Font Generator", desc: "Turn plain text into 81 bold Unicode styles for headings, usernames, and bios.", href: "/bold-font-generator", icon: "format_bold" },
              { title: "Cursive Fonts", desc: "Flowing handwriting style scripts that add a refined, personal touch to text.", href: "/cursive-fonts", icon: "draw" },
              { title: "Cute Fonts", desc: "Pretty and playful styles with hearts, stars, and soft decorations for bios.", href: "/cute-fonts", icon: "favorite" },
              { title: "Stylish Fonts", desc: "Cool and creative text styles for gaming names, captions, and everyday use.", href: "/stylish-fonts", icon: "style" },
              { title: "Serif Fonts", desc: "Classic serif Unicode styles and 34 font types for an elegant, editorial look.", href: "/serif-fonts", icon: "text_fields" },
              { title: "Sans Serif Fonts", desc: "Clean, modern sans serif styles and popular font pairings for any platform.", href: "/sans-serif-fonts", icon: "font_download" },
              { title: "Number Fonts", desc: "100+ stylish Unicode number styles for countdowns, dates, and creative lists.", href: "/number-font-generator", icon: "123" },
              { title: "Halloween Fonts", desc: "75+ spooky, gothic, and creepy styles for Halloween content and horror themes.", href: "/halloween-fonts", icon: "skull" },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex items-start gap-4 p-5 bg-surface-container-lowest border border-outline-variant/20 rounded-xl transition-all duration-200 hover:bg-surface-container-high hover:border-outline-variant/40 editorial-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">{tool.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-base text-on-surface mb-1 group-hover:text-primary transition-colors">{tool.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{tool.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/all-tools"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:underline underline-offset-4"
            >
              View All Tools
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </section>

        <FAQSection />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}

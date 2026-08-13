import type { Metadata } from "next";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { letterRStyles } from "../lib/alphabetFontStyles";

const pageTitle = "Alphabet Fonts — A–Z Directory";
const pageDescription =
  "Browse every letter of the alphabet in different Unicode font styles. Copy and paste A–Z in bold, script, fraktur, double-struck, and more.";
const canonicalUrl = "https://www.aestheticletters.com/alphabet-fonts";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "website",
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

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const LIVE_LETTERS = new Set(["R"]);

function sampleR(styleName: string): string {
  const style = letterRStyles.find((s) => s.name === styleName);
  return style ? style.transform("R") : "R";
}

export default function AlphabetFontsPage() {
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
          { "@type": "ListItem", position: 2, name: "Alphabet Fonts", item: canonicalUrl },
        ],
      },
      {
        "@type": "ItemList",
        name: "Alphabet Fonts Directory",
        description: "A directory of every letter from A to Z in different Unicode font styles.",
        numberOfItems: LETTERS.length,
        itemListElement: LETTERS.map((letter, index) => {
          const live = LIVE_LETTERS.has(letter);
          return {
            "@type": "ListItem",
            position: index + 1,
            name: `${letter} in Different Fonts`,
            url: live ? `https://www.aestheticletters.com/${letter.toLowerCase()}-in-different-fonts` : canonicalUrl,
          };
        }),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <TopNavBar activePage="alphabet-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Alphabet Fonts", href: "/alphabet-fonts" },
          ]}
        />

        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div className="max-w-3xl">
              <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
                Alphabet Fonts
              </h1>
              <p className="font-body text-on-surface-variant text-sm md:text-lg max-w-2xl">
                A directory for every letter from A to Z. Each page shows a single
                letter in multiple verified Unicode styles, ready to copy and paste
                for bios, captions, usernames, and design projects.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-fixed text-on-primary-fixed font-headline font-bold text-sm">
                A-Z Directory
              </span>
            </div>
          </div>
        </section>

        {/* Letter grid */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pb-12 md:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {LETTERS.map((letter) => {
              const live = LIVE_LETTERS.has(letter);
              const href = `/${letter.toLowerCase()}-in-different-fonts`;
              const title = `${letter} in Different Fonts`;
              const sub = `Every style for the letter ${letter}`;

              const content = (
                <div className="flex flex-col h-full gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline text-xl shadow-sm">
                    {letter}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-headline text-lg md:text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-on-surface-variant">{sub}</p>
                  </div>
                </div>
              );

              return live ? (
                <Link
                  key={letter}
                  href={href}
                  className="group block bg-surface-container-low p-5 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-xl hover:bg-surface-container transition-all duration-300 ease-out transform hover:-translate-y-1"
                >
                  {content}
                </Link>
              ) : (
                <div
                  key={letter}
                  role="link"
                  aria-disabled="true"
                  className="group block bg-surface-container-low/60 p-5 rounded-xl border border-outline-variant/10 opacity-70 cursor-not-allowed"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        {/* Beyond the Standard Character Set */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-surface-container-low rounded-2xl p-6 md:p-12">
            <div>
              <h2 className="font-headline text-2xl md:text-4xl font-bold mb-4 leading-tight">
                Beyond the Standard Character Set
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-base md:text-lg mb-4">
                The letters you see here are not drawn by a custom web font. They
                are individual Unicode characters, each with its own code point.
                That is why they stay styled after you copy and paste them into
                Instagram, Discord, or a logo file.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
                From Gothic blackletter to double-struck symbols, every style lives
                inside the Unicode standard. Your device already knows how to
                display it — no download required.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
              <div className="flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-background border border-outline-variant/10 shadow-sm">
                <span className="font-body text-3xl md:text-4xl text-on-surface mb-1">
                  {sampleR("Bold Fraktur")}
                </span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant">
                  Gothic
                </span>
              </div>
              <div className="flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-background border border-outline-variant/10 shadow-sm">
                <span className="font-body text-3xl md:text-4xl text-on-surface mb-1">
                  {sampleR("Bold Script")}
                </span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant">
                  Bella
                </span>
              </div>
              <div className="flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-background border border-outline-variant/10 shadow-sm">
                <span className="font-body text-3xl md:text-4xl text-on-surface mb-1">
                  {sampleR("Double-Struck")}
                </span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant">
                  Double
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}

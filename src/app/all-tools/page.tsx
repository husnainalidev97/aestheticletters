import type { Metadata } from "next";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

const pageTitle =
  "All Font Generators | Collection of Aesthetic Letter Tools";
const pageDescription =
  "Pick your favorite style from our collection of easy-to-use font generators. Designed to make your text stand out instantly. Fast, free, and 100% private.";
const canonicalUrl = "https://www.aestheticletters.com/all-tools";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "website",
    url: canonicalUrl,
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.jpg"],
  },
};

type ToolCard = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

type ToolCategory = {
  title: string;
  cards: ToolCard[];
};

const toolCategories: ToolCategory[] = [
  {
    title: "Social Media Fonts",
    cards: [
      {
        title: "Instagram Fonts",
        description:
          "Elevate your bio and captions with sophisticated decorative scripts.",
        icon: "camera",
        href: "/instagram-fonts",
      },
    ],
  },
  {
    title: "Creative & Decorative",
    cards: [
      {
        title: "Fancy Fonts",
        description:
          "Decorative unicode letter sets for a confident, on-brand typographic finish.",
        icon: "brush",
        href: "/fancy-fonts",
      },
    ],
  },
  {
    title: "Typography Styles",
    cards: [
      {
        title: "Cursive Fonts",
        description:
          "Flowing cursive and handwriting-style scripts for a refined editorial feel.",
        icon: "draw",
        href: "/cursive-fonts",
      },
    ],
  },
];

export default function AllToolsPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: pageTitle,
    description: pageDescription,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Aesthetic Letters",
      url: "https://www.aestheticletters.com",
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Aesthetic Letter Tools",
      numberOfItems: toolCategories.reduce(
        (total, category) => total + category.cards.length,
        0,
      ),
      itemListElement: toolCategories.flatMap((category, categoryIndex) =>
        category.cards.map((card, cardIndex) => ({
          "@type": "ListItem",
          position:
            toolCategories
              .slice(0, categoryIndex)
              .reduce((sum, c) => sum + c.cards.length, 0) +
            cardIndex +
            1,
          name: card.title,
          description: card.description,
          url: card.href.startsWith("http")
            ? card.href
            : `https://www.aestheticletters.com${card.href}`,
        })),
      ),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <TopNavBar activePage="all-tools" />
      <main id="main-content" className="pt-[8.5rem] pb-24 px-6 md:px-[150px]">
        {/* Hero Section */}
        <section className="mb-20 max-w-4xl">
          <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight mb-6 text-on-background">
            All Aesthetic <span className="text-primary italic">Letter Tools</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
            Explore our unique font tools and find the perfect style for your
            text. Fast, simple, and made for everyone.
          </p>
        </section>

        {/* Categorized Directory */}
        <div className="flex flex-col gap-20">
          {toolCategories.map((category) => (
            <section key={category.title}>
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-background mb-10">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.cards.map((card) => (
                  <Link
                    key={card.title}
                    className="group flex flex-col justify-between p-8 bg-surface-container-lowest rounded-xl transition-all duration-300 hover:bg-surface-container-high shadow-[0px_20px_40px_rgba(28,27,27,0.02)] min-h-[220px]"
                    href={card.href}
                  >
                    <div>
                      <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-6">
                        <span className="material-symbols-outlined text-primary">
                          {card.icon}
                        </span>
                      </div>
                      <h3 className="font-headline text-xl font-bold mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-on-surface-variant leading-snug">
                        {card.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Open Tool{" "}
                      <span className="material-symbols-outlined ml-2 text-sm">
                        arrow_forward
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

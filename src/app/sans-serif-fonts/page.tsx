import type { Metadata } from "next";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import Sidebar from "../components/Sidebar";
import SansSerifFontsClient from "./SansSerifFontsClientLazy";

export const metadata: Metadata = {
  title: { absolute: "Sans Serif Fonts Generator - Copy and Paste Sans Serif Text Styles" },
  description:
    "Generate sans serif fonts you can copy and paste. Explore clean, modern unicode styles and popular sans-serif font types including Geometric, Grotesque, Humanist, and more.",
  alternates: {
    canonical: "https://www.aestheticletters.com/sans-serif-fonts",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "website",
    url: "https://www.aestheticletters.com/sans-serif-fonts",
    title: "Sans Serif Fonts Generator - Copy and Paste Sans Serif Text Styles",
    description:
      "Generate sans serif fonts you can copy and paste. Explore clean, modern unicode styles and popular sans-serif font types including Geometric, Grotesque, Humanist, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sans Serif Fonts Generator - Copy and Paste Sans Serif Text Styles",
    description:
      "Generate sans serif fonts you can copy and paste. Explore clean, modern unicode styles and popular sans-serif font types including Geometric, Grotesque, Humanist, and more.",
  },
};

const faqs: { question: string; answer: string }[] = [
  /* Sans-serif FAQ content will be provided by the user */
];

export default function SansSerifFontsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/sans-serif-fonts#webpage",
        url: "https://www.aestheticletters.com/sans-serif-fonts",
        name: "Sans Serif Fonts Generator - Copy and Paste Sans Serif Text Styles",
        description: "Generate sans serif fonts you can copy and paste. Explore clean, modern unicode styles and popular sans-serif font types.",
        headline: "Sans Serif Fonts Generator \u2014 Copy & Paste Sans Serif Text",
        inLanguage: "en",
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/sans-serif-fonts#breadcrumb",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/sans-serif-fonts#softwareapp",
        name: "Sans Serif Fonts Generator",
        url: "https://www.aestheticletters.com/sans-serif-fonts",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0.00",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/sans-serif-fonts#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home Page",
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
            name: "Sans Serif Fonts",
            item: "https://www.aestheticletters.com/sans-serif-fonts",
          },
        ],
      },
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage" as const,
              "@id": "https://www.aestheticletters.com/sans-serif-fonts#faq",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question" as const,
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer" as const,
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopNavBar />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "All Tools", href: "/all-tools" },
            { label: "Sans Serif Fonts", href: "/sans-serif-fonts" },
          ]}
        />
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-24 pb-16 text-center">
          <h1 className="font-headline text-[3.5rem] md:text-6xl font-bold tracking-tight leading-tight text-on-background mb-6">
            Sans Serif Fonts Generator — Copy &amp; Paste Sans Serif Text
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-12 text-lg">
            {/* User will provide intro paragraph */}
            Generate sans serif fonts in multiple copy and paste styles, explore clean and modern typefaces,
            and find the right look for profiles, posts, and creative projects.
          </p>
        </section>

        {/* Interactive Generator */}
        <SansSerifFontsClient />

        {/* SEO Content Section — User will provide content */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* Sans-serif content sections will be added by the user */}
            </div>

            {/* Sidebar */}
            <Sidebar
              showBanner={false}
              useCasesHeading="How to Use a Sans Serif Font Generator?"
              useCasesContent={
                <>
                  <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                    {/* User will provide sidebar content */}
                    Using the tool is simple.
                  </p>
                  <ol className="space-y-4 text-sm leading-relaxed">
                    <li><strong>1. Enter Your Text:</strong> Start by adding the text you want to convert into the text field provided by the generator.</li>
                    <li><strong>2. Browse the Styles:</strong> The generator instantly creates multiple sans-serif style variations.</li>
                    <li><strong>3. Choose a Style:</strong> Select the sans-serif typeface that matches your purpose.</li>
                    <li><strong>4. Copy the Result:</strong> Click or tap the copy button.</li>
                    <li>
                      <strong>5. Paste Anywhere:</strong> Paste the text into supported platforms such as:
                      <ul className="mt-2 space-y-1 list-disc list-inside">
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>X (Twitter)</li>
                        <li>Discord</li>
                        <li>TikTok</li>
                        <li>YouTube</li>
                        <li>WhatsApp</li>
                        <li>Telegram</li>
                      </ul>
                    </li>
                  </ol>
                </>
              }
              tipsHeading="Where to Use Sans-Serif Typefaces Online?"
              tipsContent={
                <>
                  <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                    {/* User will provide tips content */}
                    Sans-serif type fonts work well in many online environments.
                  </p>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div>
                      <p className="font-bold text-on-surface">Social Media Bios</p>
                      <p className="text-on-surface-variant">Many users add sans-serif text to make their profiles more unique and modern.</p>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Usernames</p>
                      <p className="text-on-surface-variant">A sans-serif username can appear clean and contemporary.</p>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Discord Profiles</p>
                      <p className="text-on-surface-variant">Creative typography helps profiles stand out in communities.</p>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Content Creators</p>
                      <p className="text-on-surface-variant">Creators often use decorative text for branding purposes.</p>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Digital Portfolios</p>
                      <p className="text-on-surface-variant">Sans-serif styles can contribute to a modern, professional presentation.</p>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Personal Branding</p>
                      <p className="text-on-surface-variant">Clean sans-serif fonts can help create a polished online identity.</p>
                    </div>
                  </div>
                </>
              }
            />
          </div>
        </section>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24">
            <h2 className="font-headline text-4xl font-bold mb-16 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </section>
        )}
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}

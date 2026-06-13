import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import FancyFontsClient from "./FancyFontsClientLazy";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import ShowcaseGrid from "./ShowcaseGrid";

export const metadata: Metadata = {
  title: { absolute: "130+ Fancy Fonts \u2013 Copy & Paste for Instagram, Gaming & More" },
  description:
    "Tired of plain text? Copy 130+ free fancy fonts for Instagram, WhatsApp, Facebook, or gaming usernames and make your messages stand out immediately.",
  alternates: {
    canonical: "https://www.aestheticletters.com/fancy-fonts",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "website",
    url: "https://www.aestheticletters.com/fancy-fonts",
    title: "Fancy Fonts Generator (𝓬𝓸𝓹𝔂 𝓪𝓷𝓭 𝓹𝓪𝓼𝓽) — Aesthetic Letters",
    description:
      "Transform your text into elegant styles instantly. 100% private, browser-based, and compatible with all social media platforms.",
    images: [
      {
        url: "https://www.aestheticletters.com/fancy-fonts-tool-features.webp",
        width: 1200,
        height: 630,
        alt: "fancy fonts features explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fancy Fonts Generator — Aesthetic Letters",
    description:
      "Copy and paste unique aesthetic fonts for your social media profiles.",
    images: [
      {
        url: "https://www.aestheticletters.com/fancy-fonts-tool-features.webp",
        alt: "fancy fonts features explained",
      },
    ],
  },
};


const faqs = [
  {
    question: "What is a fancy fonts generator?",
    answer:
      "By using a fancy text generator, you can create stylish, decorative styles that can be copied and pasted wherever you like. It works by converting your letters into special Unicode characters that look like different fonts but work on every platform without any downloads or installations.",
  },
  {
    question: "Is there no cost to use this tool?",
    answer:
      "This tool is freely available without registration, and there is no limit on how often you can use it. You can generate and copy as many fancy symbols text as you want without creating an account or paying anything.",
  },
  {
    question: "Do fancy words work on Instagram?",
    answer:
      "Yes, Instagram fully supports the Unicode characters that fancy fonts are made of, so you can paste artistic letters into your bio, captions, comments, and stories without any issues. Just generate the style you like, copy it, and paste it directly inside the Instagram app or on the website.",
  },
  {
    question: "Which fancy font style is best for an Instagram bio?",
    answer:
      "Script and curve styles are the most popular choices for Instagram bios because they feel personal, elegant, and instantly grab attention. If you want something bolder for captions and posts, then the bold text styles work really well in a fast scrolling feed.",
  },
  {
    question: "Does fancy text work on iPhone and Android?",
    answer:
      "Yes, fancy letters work perfectly on both iPhone and Android because all modern smartphones fully support Unicode characters. You can open our generator on your phone browser, pick any style you like, copy it, and paste it into any app instantly.",
  },
  {
    question: "Can fancy letters hurt accessibility?",
    answer:
      'Yes, screen readers used by visually impaired people often read each fancy character by its technical name instead of the actual letter, so a simple word like "hello" can sound completely unrecognizable. Because of this, it is best to use fancy styles only for decorative things like bios and usernames and avoid them anywhere the message really needs to be understood.',
  },
];

const platforms = [
  {
    name: "Instagram",
    description:
      "Perfect for bios, captions, highlights, and comments to spice up your profile and look more attractive and unique.",
  },
  {
    name: "Facebook",
    description:
      "Use in posts, comments, and profile intros to catch people\u2019s attention.",
  },
  {
    name: "Twitter (X)",
    description:
      "Helpful for tweets and bio styling when you want your text to stand out in a limited space.",
  },
  {
    name: "WhatsApp",
    description:
      "Great for status updates, chat messages, and contact names for a personalized touch.",
  },
  {
    name: "TikTok",
    description:
      "Used in captions and bio to match your content style and increase visual appeal.",
  },
  {
    name: "Discord",
    description:
      "Ideal for usernames, server nicknames, and messages to create a distinct identity.",
  },
  {
    name: "Email",
    description:
      "Can be used in subject lines or signatures, but keep it minimal for better readability.",
  },
  {
    name: "Tumblr",
    description:
      "Useful for aesthetic posts, blog titles, and descriptions where creative text matters.",
  },
];

const showcaseCards = [
  {
    name: "Bold Artistic Styles",
    pill: "Bold",
    preview: "𝗛𝗲𝗹𝗹𝗼",
    description: "Thick, flowing letters adding elegance.",
    tags: ["Instagram Bio", "Headlines"],
  },
  {
    name: "Fancy Line Effects",
    pill: "Lines",
    preview: "\u210B\u0336e\u0336l\u0336l\u0336o\u0336",
    description: "Decorative accents and strike-throughs.",
    tags: ["Invitations", "Posts"],
  },
  {
    name: "Monospace & Typewriter",
    pill: "Retro",
    preview: "𝙷𝚎𝚕𝚕𝚘",
    description: "Clean, fixed-width typewriter look.",
    tags: ["Emails", "Retro Posts"],
  },
  {
    name: "Symbol-Enhanced Fonts",
    pill: "Symbols",
    preview: "★HΞLLO★",
    description: "Letters mixed with stars and marks.",
    tags: ["Messaging", "Bios"],
  },
  {
    name: "Dynamic Text Styles",
    pill: "Energy",
    preview: "𝙃𝙚𝙡𝙡𝙤!!!",
    description: "Slanted, high-impact bold italic styles.",
    tags: ["Highlights", "Reels"],
  },
  {
    name: "Block & Frame Fonts",
    pill: "Block",
    preview: "🅷🅴🅻🅻🅾",
    description: "Geometric and framed decorative lettering.",
    tags: ["Gaming", "Branding"],
  },
  {
    name: "Ornate & Beautiful Fonts",
    pill: "Elegant",
    preview: "𝔥𝔢𝔩𝔩𝔬",
    description: "Detailed vintage-style flourishes.",
    tags: ["Weddings", "Art"],
  },
  {
    name: "Minimal Fancy Texts",
    pill: "Minimal",
    preview: "ʜᴇʟʟᴏ",
    description: "Simple, clean, and refined styles.",
    tags: ["Captions", "Professional"],
  },
  {
    name: "Mirror & Reverse Fonts",
    pill: "Fun",
    preview: "oןןǝɥ",
    description: "Flipped letters for unique looks.",
    tags: ["Fun Text", "Secret Messages"],
  },
  {
    name: "Curve & Flow Styles",
    pill: "Script",
    preview: "𝒽𝑒𝓁𝓁𝑜",
    description: "Wavy scripts with smooth connections.",
    tags: ["Quotes", "Posters"],
  },
  {
    name: "Decorative Dot & Marks",
    pill: "Aesthetic",
    preview: "Ⓗⓔⓛⓛⓞ",
    description: "Creative bubble letters and dot patterns.",
    tags: ["TikTok", "Creative Bios"],
  },
  {
    name: "Artistic Fonts",
    pill: "Artistic",
    preview: "⚡Hello⚡",
    description: "Unique abstract and high-energy designs.",
    tags: ["Profile Names", "Discord"],
  },
];

const reasons = [
  {
    title: "Create Styles Instantly",
    description:
      "Convert your text into elegant and unique letter styles immediately as you type. Each character transforms in real time, allowing you to see the results without any delay.",
  },
  {
    title: "Privacy First",
    description:
      "All processing occurs directly in your browser. We ensure that your text is never transmitted or stored online, which ensures that your information is kept as secure as possible.",
  },
  {
    title: "Full Compatibility",
    description:
      "Currently, fancy font writer is available for iOS, Android, Windows, and Mac OS X devices. Whether you\u2019re using messaging apps or social media platforms, the styled text can be pasted onto any platform.",
  },
  {
    title: "Live Preview",
    description:
      "Every modification you make is instantly reflected on screen. This live preview allows you to experiment with different fancy typefaces and select the one that perfectly matches your intention.",
  },
  {
    title: "Copy in One Click",
    description:
      "Copying your selected text is effortless. By clicking any style, it will automatically be copied to your clipboard, so you can use it immediately in posts, messages, or profiles.",
  },
  {
    title: "Curated Text Styles",
    description:
      "Access a collection of carefully chosen font styles that combine visual appeal with readability. Each style is designed to enhance the creativity of your text while maintaining clarity and readability.",
  },
];

export default function FancyFontsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/fancy-fonts#software",
        name: "Fancy Fonts Generator",
        operatingSystem: "Windows, macOS, Android, iOS",
        applicationCategory: "UtilitiesApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/fancy-fonts#webpage",
        url: "https://www.aestheticletters.com/fancy-fonts",
        name: "130+ Fancy Fonts \u2013 Copy & Paste for Instagram, Gaming & More",
        description:
          "Tired of plain text? Copy 130+ free fancy fonts for Instagram, WhatsApp, Facebook, or gaming usernames and make your messages stand out immediately.",
        breadcrumb: {
          "@id":
            "https://www.aestheticletters.com/fancy-fonts#breadcrumb",
        },
        mainEntity: {
          "@id":
            "https://www.aestheticletters.com/fancy-fonts#software",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/fancy-fonts#breadcrumb",
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
            name: "Fancy Fonts",
            item: "https://www.aestheticletters.com/fancy-fonts",
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopNavBar activePage="fancy-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "All Tools", href: "/all-tools" },
            { label: "Fancy Fonts", href: "/fancy-fonts" },
          ]}
        />
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            Fancy Fonts Copy and Paste
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            Make your text fun and eye-catching with 130+ fancy fonts that add
            personality to captions, usernames, and highlights.
          </p>
        </section>

        {/* Interactive: Input + Slider + Font Cards */}
        <FancyFontsClient />

        {/* SEO Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* Section 1: What are Fancy Fonts */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  What are Fancy Fonts &amp; Typefaces?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Fancy fonts are stylized text formats that make normal writing
                  look more modern, creative, and eye-catching. Instead of
                  plain letters, these fonts use different shapes, symbols, or
                  decorative styles like{" "}
                  <Link
                    href="/cursive-fonts"
                    className="text-primary underline hover:no-underline"
                  >
                    cursive fonts
                  </Link>{" "}
                  to give your text a unique appearance.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  For example, if you type a simple word like
                  &quot;Hello&quot;, a fancy text generator can change it into
                  something like 𝓗𝓮𝓵𝓵𝓸, 𝐇𝐞𝐥𝐥𝐨, or 𝙃𝙚𝙡𝙡𝙤. The meaning stays
                  the same, but the look becomes more attractive.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Due to their Unicode character encoding, these fonts can be
                  copied and pasted without requiring any additional software.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Make social media profiles stand out.",
                    "Create stylish usernames",
                    "Write attractive captions or bios.",
                    "Design creative messages",
                  ].map((item) => (
                    <div
                      key={item}
                      className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10 flex items-center gap-3"
                    >
                      <span
                        className="material-symbols-outlined text-primary text-base"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                        aria-hidden="true"
                      >
                        check_circle
                      </span>
                      <span className="font-medium text-on-surface-variant">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </article>

              {/* Section 2: How to Use */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Use the Fancy Font Generator?
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Type Your Text",
                      description:
                        "Write any text in the generator to get started. The tool will instantly create multiple styled versions for you.",
                    },
                    {
                      step: 2,
                      title: "Choose a Style",
                      description:
                        "Scroll through the list and pick a design that matches your vibe or platform.",
                    },
                    {
                      step: 3,
                      title: "Copy and Paste",
                      description:
                        "Once you have copied the style, make sure to paste it anywhere, such as social media or chats.",
                    },
                    {
                      step: 4,
                      title: "Explore More Options",
                      description:
                        "If you want variety, try different styles or visit Aesthetic Fonts and Stylish Fonts for more ideas.",
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
                          {item.step === 4 ? (
                            <>
                              If you want variety, try different styles or visit{" "}
                              <Link
                                href="/"
                                className="text-primary underline hover:no-underline"
                              >
                                Aesthetic Letters
                              </Link>{" "}
                              for more ideas.
                            </>
                          ) : (
                            item.description
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-12">
              {/* Where Can You Use Fancy Fonts */}
              <div className="p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm">
                <h2 className="font-headline text-2xl font-bold mb-6">
                  Where Can You Use Fancy Fonts?
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  You can use fancy letter fonts on many websites and apps to
                  make your text look cooler and easier to notice.
                </p>
                <ul className="space-y-4">
                  {platforms.map((platform) => (
                    <li key={platform.name} className="flex items-start gap-3">
                      <span
                        className="material-symbols-outlined text-primary text-base mt-0.5"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                        aria-hidden="true"
                      >
                        check_circle
                      </span>
                      <div>
                        <span className="font-medium">{platform.name}</span>
                        <p className="text-sm text-on-surface-variant mt-1">
                          {platform.name === "Instagram" ? (
                            <>
                              Perfect for bios, captions, highlights, and comments to spice up your profile and look more attractive and unique. If you use Instagram, our{" "}
                              <Link
                                href="/instagram-fonts"
                                className="text-primary underline hover:no-underline"
                              >
                                Instagram fonts generator
                              </Link>{" "}
                              helps you copy and paste unique text directly into any part of your profile.
                            </>
                          ) : (
                            platform.description
                          )}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Security Feature */}
              <div className="p-8 bg-primary-container/10 rounded-2xl border border-primary/10">
                <h3 className="font-headline font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">
                    verified_user
                  </span>
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

        {/* Most Popular Fancy Font Styles Showcase */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24">
          <h2 className="font-headline text-4xl font-bold mb-12 leading-tight text-center">
            Most Popular Fancy Font Styles to Copy and Paste
          </h2>
          <ShowcaseGrid cards={showcaseCards} />
        </section>

        {/* 6 Reasons Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24">
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Left — Text List */}
            <div className="flex-1 min-w-0">
              <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                6 Reasons Our Fancy Text Generator Stands Above the Rest
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                Our fancy font creator is carefully designed to provide a
                seamless and creative experience. Here is why it is
                exceptional:
              </p>
              <div className="space-y-8">
                {reasons.map((reason, index) => (
                  <div key={reason.title} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-headline font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-on-surface-variant">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Sticky Infographic */}
            <div className="w-full mt-5 md:mt-0 md:w-[380px] md:flex-shrink-0 md:sticky md:top-5 self-start">
              <Image
                src="/fancy-fonts-tool-features.webp"
                alt="fancy fonts features explained"
                width={400}
                height={800}
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* Similar Font Generator */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-16 pb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center leading-tight">
            Similar Font Generator
          </h2>
          <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl editorial-shadow p-6 md:p-8">
            <ul className="flex flex-wrap justify-center gap-3 md:gap-4 list-none p-0 m-0">
              {[
                { label: "Cursive Font Generator", href: "/cursive-fonts" },
                { label: "Aesthetic Font Generator", href: "/" },
                { label: "Stylish Font Generator", href: "/stylish-fonts" },
              ].map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-surface-container-low font-body font-medium text-sm md:text-base text-on-surface hover:bg-surface-container hover:text-primary transition-colors"
                  >
                    {tool.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24">
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

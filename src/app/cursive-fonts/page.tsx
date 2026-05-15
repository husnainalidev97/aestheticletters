import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TopNavBar from "../components/TopNavBar";
import FAQAccordion from "../components/FAQAccordion";
import CursiveGoogleFontsLoader from "./CursiveGoogleFontsLoader";
import CursiveFontGenerator from "./CursiveFontGenerator";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

export const metadata: Metadata = {
  title: { absolute: "Cursive Fonts - Handwritten Text Generator | Copy & Paste" },
  description:
    "Convert your text into cursive fonts instantly. Use this cursive text generator to create handwritten styles you can copy and use on social media, and more.",
  alternates: {
    canonical: "https://www.aestheticletters.com/cursive-fonts",
  },
  openGraph: {
    type: "website",
    url: "https://www.aestheticletters.com/cursive-fonts",
    title: "Cursive Fonts - Handwritten Text Generator | Copy & Paste",
    description:
      "Convert your text into cursive fonts instantly. Use this cursive text generator to create handwritten styles you can copy and use on social media, and more.",
    images: [
      {
        url: "https://www.aestheticletters.com/how-to-use-this-cursive-fonts-generator-in-seconds.webp",
        width: 896,
        height: 1200,
      },
    ],
    siteName: "Aesthetic Letters",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursive Fonts - Handwritten Text Generator | Copy & Paste",
    description:
      "Convert your text into cursive fonts instantly. Use this cursive text generator to create handwritten styles you can copy and use on social media, and more.",
    images: [
      "https://www.aestheticletters.com/how-to-use-this-cursive-fonts-generator-in-seconds.webp",
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

const topFonts = [
  {
    name: "Caveat",
    description:
      "A clean and simple cursive font. Great for everyday use and easy to read.",
  },
  {
    name: "Shadows Into Light",
    description:
      "A light handwritten font that works well for captions and casual writing.",
  },
  {
    name: "Playwrite Ireland",
    description:
      "An elegant style that feels slightly formal and neat.",
  },
  {
    name: "Italianno",
    description:
      "Smooth and stylish. A good choice for invitations and creative designs.",
  },
  {
    name: "Permanent Marker",
    description:
      "A bold cursive font that looks strong and noticeable.",
  },
  {
    name: "Indie Flower",
    description:
      "A friendly and relaxed handwritten style, perfect for informal use.",
  },
  {
    name: "Rancho",
    description:
      "A classic script font with a slightly vintage feel.",
  },
];

const fontCards = [
  {
    category: "Handwriting Cursive",
    pill: "Handwriting",
    fonts: [
      { name: "Playwrite Ireland", family: "Playwrite Ireland" },
      { name: "Caveat", family: "Caveat" },
      { name: "Shadows Into Light", family: "Shadows Into Light" },
      { name: "Indie Flower", family: "Indie Flower" },
      { name: "Patrick Hand", family: "Patrick Hand" },
      { name: "Handlee", family: "Handlee" },
    ],
  },
  {
    category: "Playful Script",
    pill: "Playful",
    fonts: [
      { name: "Kalam", family: "Kalam" },
      { name: "Amatic SC", family: "Amatic SC" },
      { name: "Gloria Hallelujah", family: "Gloria Hallelujah" },
      { name: "Reenie Beanie", family: "Reenie Beanie" },
      { name: "Sriracha", family: "Sriracha" },
      { name: "Ms Madi", family: "Ms Madi" },
    ],
  },
  {
    category: "Elegant Cursive",
    pill: "Elegant",
    fonts: [
      { name: "Italianno", family: "Italianno" },
      { name: "Nothing You Could Do", family: "Nothing You Could Do" },
      { name: "Cedarville Cursive", family: "Cedarville Cursive" },
      { name: "Sue Ellen Francisco", family: "Sue Ellen Francisco" },
      { name: "Mr De Haviland", family: "Mr De Haviland" },
      { name: "Mr Dafoe", family: "Mr Dafoe" },
    ],
  },
  {
    category: "Brush & Marker",
    pill: "Brush",
    fonts: [
      { name: "Permanent Marker", family: "Permanent Marker" },
      { name: "Caveat Brush", family: "Caveat Brush" },
      { name: "Nanum Brush Script", family: "Nanum Brush Script" },
      { name: "Lacquer", family: "Lacquer" },
      { name: "Vibur", family: "Vibur" },
      { name: "Sedgwick Ave Display", family: "Sedgwick Ave Display" },
    ],
  },
  {
    category: "School & Guides",
    pill: "School",
    fonts: [
      { name: "Playwrite Perú", family: "Playwrite Peru" },
      { name: "Playwrite Việt Nam Guides", family: "Playwrite VN Guides" },
      { name: "Homemade Apple", family: "Homemade Apple" },
    ],
  },
  {
    category: "Chunky Fun",
    pill: "Chunky",
    fonts: [
      { name: "Leckerli One", family: "Leckerli One" },
      { name: "Bubblegum Sans", family: "Bubblegum Sans" },
      { name: "Mansalva", family: "Mansalva" },
      { name: "Meddon", family: "Meddon" },
      { name: "Oooh Baby", family: "Oooh Baby" },
      { name: "Merienda", family: "Merienda" },
    ],
  },
  {
    category: "Retro Vintage",
    pill: "Retro",
    fonts: [
      { name: "Rock Salt", family: "Rock Salt" },
      { name: "Rancho", family: "Rancho" },
      { name: "Knewave", family: "Knewave" },
      { name: "Montez", family: "Montez" },
      { name: "Shadows Into Light Two", family: "Shadows Into Light Two" },
    ],
  },
  {
    category: "Cultural Brush",
    pill: "Cultural",
    fonts: [
      { name: "Nanum Pen Script", family: "Nanum Pen Script" },
      { name: "Ma Shan Zheng", family: "Ma Shan Zheng" },
      { name: "Mali", family: "Mali" },
      { name: "Covered By Your Grace", family: "Covered By Your Grace" },
      { name: "Give You Glory", family: "Give You Glory" },
      { name: "Solitreo", family: "Solitreo" },
    ],
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Google Fonts — loaded asynchronously to avoid blocking LCP */}
      <CursiveGoogleFontsLoader />
      <TopNavBar activePage="cursive-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        {/* Dynamic Cursive Font Generator — hero input, size controls, live results */}
        <CursiveFontGenerator fontCards={fontCards} />

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
              <article>
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
              <article>
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
              <article>
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
                        className="text-primary font-bold hover:opacity-80 transition-all"
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
              <article>
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
                    className="text-primary font-bold hover:opacity-80 transition-all"
                  >
                    fancy font generator
                  </Link>{" "}
                  for even more decorative text options.
                </p>
              </article>

              {/* Top 7 Handwritten Fonts */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Top 7 Handwritten Fonts That Work Everywhere
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Here are some of the best script typefaces that are simple,
                  readable, and widely used:
                </p>
                <div className="space-y-6">
                  {topFonts.map((font) => (
                    <div
                      key={font.name}
                      className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10"
                    >
                      <h3 className="font-headline font-bold text-primary mb-2 text-xl">
                        {font.name}
                      </h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        {font.description}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-on-surface-variant leading-relaxed text-lg mt-8">
                  These are some of the most popular cursive fonts used across
                  different platforms. If you want to explore more decorative
                  styles,{" "}
                  <Link
                    href="/"
                    className="text-primary font-bold hover:opacity-80 transition-all"
                  >
                    aesthetic fonts
                  </Link>{" "}
                  are also worth trying.
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

        {/* Similar Font Styles */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-16 pb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center leading-tight">
            Similar Font Styles
          </h2>
          <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl editorial-shadow p-6 md:p-8">
            <ul className="flex flex-wrap justify-center gap-3 md:gap-4 list-none p-0 m-0">
              {[
                { label: "Aesthetic Fonts", href: "/" },
                { label: "Cute Fonts", href: "/cute-fonts" },
                { label: "Fancy Fonts", href: "/fancy-fonts" },
                { label: "Stylish Fonts", href: "/stylish-fonts" },
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

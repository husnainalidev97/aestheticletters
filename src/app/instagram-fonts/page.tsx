import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";

import InstagramFontCards from "../components/InstagramFontCardsLazy";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import Sidebar from "../components/Sidebar";
import CopyButton from "../components/CopyButton";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import TrendingFonts from "../components/TrendingFonts";

export const metadata: Metadata = {
  title: { absolute: "Instagram Fonts Copy and Paste – 110+ Free Styles" },
  description:
    "Explore 110+ Instagram fonts to give your profile a fresh and unique look. Choose your style and use it instantly without any extra steps or setup.",
  alternates: {
    canonical: "https://www.aestheticletters.com/instagram-fonts",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/instagram-fonts",
    title: "Instagram Fonts Collection: 110+ Stylish Copy & Paste Fonts",
    description:
      "Explore 110+ Instagram fonts to give your profile a fresh and unique look. Choose your style and use it instantly without any extra steps or setup.",
    images: [{ url: "https://www.aestheticletters.com/images/instagram-fonts/instagram-fonts-og.webp", width: 1200, height: 630, alt: "Instagram Fonts Generator by Aesthetic Letters showing 110 plus stylish Unicode text styles for bios captions and usernames" }],
    publishedTime: "2026-05-01T08:00:00+00:00",
    modifiedTime: "2026-07-06T00:00:00+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Fonts Collection: 110+ Stylish Copy & Paste Fonts",
    description:
      "Explore 110+ Instagram fonts to give your profile a fresh and unique look. Choose your style and use it instantly without any extra steps or setup.",
    images: ["https://www.aestheticletters.com/images/instagram-fonts/instagram-fonts-og.webp"],
  },
};

const faqs = [
  {
    question:
      "What is the best way to change the font on Instagram?",
    answer:
      "You cannot change Instagram\u2019s default font directly. Instead, you can try this instagram text generator to explore different styles, pick your favorite, and copy and paste it wherever you want, like your bio, captions, or username.",
  },
  {
    question: "Can you safely use Instagram fonts?",
    answer:
      "Yes, these text styles are safe to use. Our characters use universal Unicode standards, meaning they will display perfectly on almost any smartphone, tablet, or computer. This means they do not affect your account, do not run any code, and cannot access your personal data. They behave just like normal text, so using them will not harm your profile or cause any security issues.",
  },
  {
    question:
      "Can you tell me what font Insta uses for its bios and captions?",
    answer:
      "IG does not use a single fixed style for bios and captions. Instead, it relies on system fonts, which means the text appearance can slightly vary depending on your device (Android, iPhone, or desktop). Any stylish or different-looking text you see is usually created using external tools like this.",
  },
  {
    question:
      "Do Instagram Stories and Reels support these typefaces?",
    answer:
      "Yes, you can use these fonts in Stories and Reels. Just create your preferred style and place it into your text wherever you want it to appear.",
  },
  {
    question: "Why are Some IG Fonts Not Supported?",
    answer:
      "Some letters may not display properly on certain devices because not all Unicode characters are supported everywhere. To avoid this issue, it is better to choose simple and widely supported font styles. Likewise, you should test your text on a variety of different devices before using it, especially for important sections.",
  },
  {
    question: "Will these fonts work on Facebook or WhatsApp too?",
    answer:
      "Yes, most of these fonts work on platforms like Facebook and WhatsApp. However, the display may vary slightly depending on the device.",
  },
  {
    question:
      "Could these fonts affect the reach and engagement of my content?",
    answer:
      "These styles do not directly affect reach or ranking. However, visually appealing text can grab attention and improve user interaction.",
  },
];

export default function InstagramFontsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/instagram-fonts#software",
        name: "Instagram Fonts Generator",
        operatingSystem: "Any",
        applicationCategory: "UtilitiesApplication",
        browserRequirements: "requires HTML5 support",
        url: "https://www.aestheticletters.com/instagram-fonts",
        description:
          "Turn plain text into 110+ stylish Unicode fonts for Instagram instantly. Copy and paste Instagram fonts for your bio, captions, and username.",
        image: "https://www.aestheticletters.com/images/instagram-fonts/instagram-fonts-og.webp",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/instagram-fonts#webpage",
        url: "https://www.aestheticletters.com/instagram-fonts",
        name: "Instagram Fonts Collection: 110+ Stylish Copy & Paste Fonts",
        description:
          "Explore 110+ Instagram fonts to give your profile a fresh and unique look. Choose your style and use it instantly without any extra steps or setup.",
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-05-01T08:00:00+00:00",
        dateModified: "2026-07-06T00:00:00+00:00",
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/instagram-fonts#breadcrumb",
        },
        mainEntity: {
          "@id": "https://www.aestheticletters.com/instagram-fonts#software",
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", ".text-on-surface-variant"],
        },
        primaryImageOfPage: {
          "@id": "https://www.aestheticletters.com/instagram-fonts#image-how-to-use",
        },
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/instagram-fonts#image-how-to-use",
        url: "https://www.aestheticletters.com/images/instagram-fonts/instagram-fonts-how-to-use.webp",
        contentUrl: "https://www.aestheticletters.com/images/instagram-fonts/instagram-fonts-how-to-use.webp",
        width: 1200,
        height: 800,
        caption: "Three step process to use the Instagram fonts generator: type your text, pick a style from 110 plus cards, then paste the styled Unicode text into your Instagram bio or captions",
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/instagram-fonts#image-where-they-work",
        url: "https://www.aestheticletters.com/images/instagram-fonts/instagram-fonts-where-they-work.webp",
        contentUrl: "https://www.aestheticletters.com/images/instagram-fonts/instagram-fonts-where-they-work.webp",
        width: 1200,
        height: 800,
        caption: "Instagram platform mockup showing where Unicode styled text works: bios, captions, comments, and stories accept styled text while usernames do not",
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/instagram-fonts#image-styles-comparison",
        url: "https://www.aestheticletters.com/images/instagram-fonts/instagram-fonts-styles-comparison.webp",
        contentUrl: "https://www.aestheticletters.com/images/instagram-fonts/instagram-fonts-styles-comparison.webp",
        width: 1200,
        height: 1200,
        caption: "Comparison chart of ten Instagram font styles showing Bold, Sans-Serif Bold, Bold Italic, Gothic, Double-Struck, Small Caps, Monospace, Circled, Fullwidth, and Underlined applied to Aesthetic Fonts",
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/instagram-fonts#image-before-after",
        url: "https://www.aestheticletters.com/images/instagram-fonts/instagram-fonts-before-after.webp",
        contentUrl: "https://www.aestheticletters.com/images/instagram-fonts/instagram-fonts-before-after.webp",
        width: 1200,
        height: 800,
        caption: "Side by side comparison of a plain Instagram profile versus the same profile using styled Unicode fonts in the bio and display name",
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/instagram-fonts#breadcrumb",
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
            name: "Instagram Fonts",
            item: "https://www.aestheticletters.com/instagram-fonts",
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

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use Instagram Font Changer (Step by Step)",
    description:
      "Using our tool is simple. Fill out the input box, get multiple fonts instantly, click to copy, and add to your Instagram bio or caption.",
    totalTime: "PT1M",
    image: "https://www.aestheticletters.com/images/instagram-fonts/instagram-fonts-how-to-use.webp",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Fill Out the Input Box",
        text: "Fill out the input box with your text.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Get Multiple Fonts Instantly",
        text: "Get multiple different fonts for Instagram instantly.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Click to Copy",
        text: "Click any style to copy.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Add to Your Profile",
        text: "Add it to your Insta bio or caption.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <TopNavBar activePage="instagram-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "All Tools", href: "/all-tools" },
            { label: "Instagram Fonts", href: "/instagram-fonts" },
          ]}
        />
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            Instagram Fonts — Copy and Paste
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            Discover 110+ Instagram fonts to instantly upgrade your profile, bio, and captions with unique and readable styles.
          </p>
        </section>
        <InstagramFontCards />

        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* Intro */}
              <article>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  Want your Instagram bio, captions, or username to stand out
                  without changing your content strategy? With the right
                  instagram fonts, you can instantly turn simple text into
                  stylish designs that grab attention and improve engagement.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Write your text, pick your favorite style, and copy it for IG.
                  It works instantly and doesn&apos;t require any apps or
                  downloads.
                </p>
              </article>

              {/* What Are Instagram Fonts? */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  What Are Instagram Fonts?
                </h2>
                <Image
                  src="/images/instagram-fonts/instagram-fonts-before-after.webp"
                  alt="Side by side comparison of a plain Instagram profile versus the same profile using styled Unicode fonts in the bio and display name"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Instagram fonts are creative text styles made by using special
                  Unicode characters. These are not actual font files but special
                  symbols that look like different text styles.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  For example:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Cursive", text: "\uD835\uDCE7\uD835\uDCEE\uD835\uDCF5\uD835\uDCF5\uD835\uDCF8" },
                    { label: "Bold", text: "\uD835\uDC07\uD835\uDC1E\uD835\uDC25\uD835\uDC25\uD835\uDC28" },
                    { label: "Bold Italic", text: "\uD835\uDE43\uD835\uDE5A\uD835\uDE61\uD835\uDE61\uD835\uDE64" },
                    { label: "Small Caps", text: "H\u1D07\u029F\u029F\u1D0F" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10"
                    >
                      <span className="text-[0.65rem] uppercase tracking-widest text-on-surface-variant font-bold">
                        {item.label}
                      </span>
                      <div className="text-xl font-body py-2">{item.text}</div>
                    </div>
                  ))}
                </div>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  These styles are generated using an ig font generator which
                  converts normal text into creative formats that work across
                  Insta. At Aesthetic Letters, we regularly test and update
                  styles to make sure they work on most modern devices and apps.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  If you prefer soft and visually balanced designs, you can
                  explore{" "}
                  <Link href="/" className="text-primary underline underline-offset-4 font-medium">
                    aesthetic fonts generator
                  </Link>{" "}
                  from our main collection.
                </p>
              </article>

              {/* How to Use */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Use Instagram Font Changer (Step by Step)
                </h2>
                <Image
                  src="/images/instagram-fonts/instagram-fonts-how-to-use.webp"
                  alt="Three step process to use the Instagram fonts generator: type your text, pick a style from 110 plus cards, then paste the styled Unicode text into your Instagram bio or captions"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Using our tool is simple:
                </p>
                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Fill Out the Input Box",
                      desc: "Fill out the input box with your text.",
                    },
                    {
                      step: "2",
                      title: "Get Multiple Fonts Instantly",
                      desc: "Get multiple different fonts for Instagram instantly.",
                    },
                    {
                      step: "3",
                      title: "Click to Copy",
                      desc: "Click any style to copy.",
                    },
                    {
                      step: "4",
                      title: "Add to Your Profile",
                      desc: "Add it to your Insta bio or caption.",
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
                        <p className="text-on-surface-variant">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Where Instagram Letters Can Be Used */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Where Instagram Letters Can Be Used?
                </h2>
                <Image
                  src="/images/instagram-fonts/instagram-fonts-where-they-work.webp"
                  alt="Instagram platform mockup showing where Unicode styled text works: bios, captions, comments, and stories accept styled text while usernames do not"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  These typefaces work in different places within IG.
                </p>
                <div className="space-y-4 mb-6">
                  {[
                    {
                      title: "Username & Name",
                      desc: "Use a unique insta name font to stand out in search and follower lists.",
                    },
                    {
                      title: "Bio",
                      desc: "A clean instagram bio font helps you make a strong first impression.",
                    },
                    {
                      title: "Captions",
                      desc: "Use styled ig text to make posts more engaging.",
                    },
                    {
                      title: "Comments",
                      desc: "Stand out in conversations with creative replies.",
                    },
                    {
                      title: "Stories & Reels",
                      desc: "Use instagram story fonts to make content visually attractive.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10"
                    >
                      <h3 className="font-headline font-bold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-on-surface-variant leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Additionally, these letters can also be used on Facebook.
                  You can test them easily using our{" "}
                  <Link href="/facebook-fonts" className="text-primary underline">facebook fonts</Link>.
                </p>
              </article>

              {/* Different Fonts for Instagram */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Different Fonts for Instagram and Where to Use Them
                </h2>
                <Image
                  src="/images/instagram-fonts/instagram-fonts-styles-comparison.webp"
                  alt="Comparison chart of ten Instagram font styles showing Bold, Sans-Serif Bold, Bold Italic, Gothic, Double-Struck, Small Caps, Monospace, Circled, Fullwidth, and Underlined applied to Aesthetic Fonts"
                  width={1200}
                  height={1200}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  The right Instagram font style creates more readable content
                  and improves your brand&apos;s image.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title:
                        "1: Minimal Fonts (\uD835\uDE91\uD835\uDE8E\uD835\uDE95\uD835\uDE95\uD835\uDE98 / \u04BB\u0454\u029F\u029F\u03C3)",
                      points: [
                        "Best for clean and simple profiles",
                        "Use in bios, captions, and usernames for a neat and modern appearance",
                        "Easy to read and not visually heavy",
                      ],
                    },
                    {
                      title:
                        "2: Business Fonts (Hello / H\u1D07\u029F\u029F\u1D0F)",
                      points: [
                        "Best for professional accounts and personal brands",
                        "Use in bios and highlights for a formal and clean appearance",
                        "Keeps your profile simple and trustworthy",
                      ],
                    },
                    {
                      title: "3: Bold IG Fonts (\uD835\uDC07\uD835\uDC1E\uD835\uDC25\uD835\uDC25\uD835\uDC28)",
                      points: [
                        "Best for names, headings, and important text",
                        "Use when you want strong visibility and attention",
                        "Works well in bios and captions for emphasis",
                      ],
                    },
                    {
                      title: "4: Gothic Fonts (\uD835\uDD73\uD835\uDD8A\uD835\uDD91\uD835\uDD91\uD835\uDD94)",
                      points: [
                        "Best for unique and edgy profiles",
                        "Use in usernames or short bios to stand out",
                        "Avoid long captions as they can reduce readability",
                      ],
                    },
                    {
                      title:
                        "5: Adorable IG Fonts (\u029C\u1D07\u029F\u029F\u1D0F / \u2728\uD835\uDCE7\uD835\uDCEE\uD835\uDCF5\uD835\uDCF5\uD835\uDCF8\u2728)",
                      points: [
                        "Best for fun, cute, and creative content",
                        "Use in captions, stories, and aesthetic bios",
                        "Perfect for lifestyle and personal pages",
                      ],
                    },
                  ].map((category) => (
                    <div
                      key={category.title}
                      className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10"
                    >
                      <h3 className="font-headline font-bold text-lg mb-3">
                        {category.title}
                      </h3>
                      <ul className="space-y-2">
                        {category.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center gap-3 text-on-surface-variant"
                          >
                            <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>

              {/* Best Instagram Text Strategy */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Best Instagram Text Strategy (Most People Ignore This)
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Using typefaces is easy, but using them correctly makes a big difference.
                </p>
                <div className="space-y-6 mb-6">
                  {[
                    {
                      step: "1",
                      title: "Keep It Readable",
                      desc: "Do not use hard-to-read styles in long text.",
                    },
                    {
                      step: "2",
                      title: "Mix Normal + Styled Text",
                      desc: "Use normal text with one styled word for better clarity.",
                    },
                    {
                      step: "3",
                      title: "Maintain a Uniform Look",
                      desc: "Stick to a couple of signature styles to help your audience recognize your brand instantly.",
                    },
                    {
                      step: "4",
                      title: "Match Your Profile Type",
                      desc: "Personal accounts → creative letters. Business accounts → clean and minimal typefaces.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center font-headline font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-headline font-bold text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-on-surface-variant leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  For a clean and modern look, many users prefer using{" "}
                  <Link href="/stylish-fonts" className="text-primary underline underline-offset-4">stylish fonts</Link> in their profiles.
                </p>

              </article>

              {/* IG Username Font Limitations */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  IG Username Font Limitations (Important)
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Not all instagram typefaces work in usernames.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Some Unicode characters are not supported",
                    "Special symbols may break usernames",
                    "Simple styles work best",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-on-surface-variant"
                    >
                      <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Always test your insta name font before saving changes.
                </p>
              </article>

              {/* Top 10 Trending Instagram Fonts */}
              <TrendingFonts />

              {/* IG Bio & Username Examples */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  IG Bio &amp; Username Examples (Copy &amp; Paste Ready)
                </h2>
                <div className="space-y-8">
                  {/* Bio Examples */}
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-4">
                      Bio Examples
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          label: "Aesthetic Wing",
                          text: "\u{13429} Dream Big | Stay Focused \u{1342A}",
                        },
                        {
                          label: "Coquette Ribbon",
                          text: "\u09E8\u09CE Living my best life \u09E8\u09CE",
                        },
                        {
                          label: "Minimalist Editorial",
                          text: "C\u200Ar\u200Ae\u200Aa\u200At\u200Ai\u200Av\u200Ae\u200A \u200AS\u200Ao\u200Au\u200Al",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="p-5 bg-surface-container-lowest rounded-xl border border-outline-variant/10 flex justify-between items-center gap-4"
                        >
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant">
                              {item.label}
                            </span>
                            <span className="text-lg font-body break-all">{item.text}</span>
                          </div>
                          <CopyButton text={item.text} size="sm" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Username Examples */}
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-4">
                      Username Examples
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          label: "Winged Frame",
                          text: "\u{13429} alice_wander \u{1342A}",
                        },
                        {
                          label: "Soft Glow",
                          text: "A\u030Al\u030Ai\u030Ac\u030Ae\u030A_W\u030Aa\u030An\u030Ad\u030Ae\u030Ar\u030A",
                        },
                        {
                          label: "Classy Script",
                          text: "\u2727 \uD835\uDC9E\uD835\uDCC1\uD835\uDCB6\uD835\uDCC8\uD835\uDCC8\uD835\uDCCE_\uD835\uDCAE\uD835\uDCB8\uD835\uDCC7\uD835\uDCBE\uD835\uDCC5\uD835\uDCC9 \u2727",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="p-5 bg-surface-container-lowest rounded-xl border border-outline-variant/10 flex justify-between items-center gap-4"
                        >
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant">
                              {item.label}
                            </span>
                            <span className="text-lg font-body break-all">{item.text}</span>
                          </div>
                          <CopyButton text={item.text} size="sm" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Caption Examples */}
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-4">
                      Caption Examples
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          label: "Announcement",
                          text: "\u300E New Drop Coming Soon \u300F",
                        },
                        {
                          label: "Mood / Strikethrough",
                          text: "M\u0336o\u0336n\u0336d\u0336a\u0336y\u0336 \u0336m\u0336o\u0336o\u0336d\u0336 \u2192 Weekend vibes only",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="p-5 bg-surface-container-lowest rounded-xl border border-outline-variant/10 flex justify-between items-center gap-4"
                        >
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant">
                              {item.label}
                            </span>
                            <span className="text-lg font-body break-all">{item.text}</span>
                          </div>
                          <CopyButton text={item.text} size="sm" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <Sidebar
              showBanner={false}
              showTips={false}
              bottomImage={{ src: "/images/instagram-fonts/instagram-fonts-generator-explained.webp", alt: "instagram fonts generator explained" }}
            />
          </div>
        </section>

        {/* Explore More Tools */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-16 pb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3 text-center leading-tight">
            Explore More Tools
          </h2>
          <p className="text-on-surface-variant text-center text-sm md:text-base mb-10 max-w-xl mx-auto">
            Want more than Instagram fonts? Check out these generators for other platforms and text styles.
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
                  { label: "Aesthetic Fonts", href: "/", icon: "\u2728", desc: "All in one text styler" },
                  { label: "Fancy Fonts", href: "/fancy-fonts", icon: "\uD83D\uDC51", desc: "Decorative text art" },
                  { label: "Cute Fonts", href: "/cute-fonts", icon: "\uD83C\uDF80", desc: "Adorable text styles" },
                  { label: "Cursive Fonts", href: "/cursive-fonts", icon: "\u270D\uFE0F", desc: "Handwriting scripts" },
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
                  { label: "Facebook Fonts", href: "/facebook-fonts", icon: "\uD83D\uDCAC", desc: "Style your FB posts" },
                  { label: "Twitter Font Generator", href: "/twitter-fonts", icon: "\uD83D\uDC26", desc: "Fonts for X bios & tweets" },
                  { label: "Discord Fonts", href: "/discord-fonts", icon: "\uD83C\uDFAE", desc: "140+ Discord styles" },
                  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDDAB", desc: "81 bold text styles" },
                  { label: "Stylish Fonts", href: "/stylish-fonts", icon: "\uD83D\uDC8E", desc: "Premium text styles" },
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

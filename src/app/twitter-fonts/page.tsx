import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import TwitterFontGenerator from "../components/TwitterFontGenerator";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { getTotalFontStyleCount } from "../lib/fontCount";

export const metadata: Metadata = {
  title: { absolute: "Twitter Fonts Generator \u2013 Unicode Styles for X Bios & Names" },
  description:
    "Generate unique Twitter fonts for your X bio, display name, and tweets. Preview and copy Unicode text styles in seconds, no signup or download needed.",
  alternates: {
    canonical: "https://www.aestheticletters.com/twitter-fonts",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/twitter-fonts",
    title: "Twitter Fonts Generator \u2013 Unicode Styles for X Bios & Names",
    description:
      "Generate unique Twitter fonts for your X bio, display name, and tweets. Preview and copy Unicode text styles in seconds, no signup or download needed.",
    images: [{ url: "https://www.aestheticletters.com/images/twitter-fonts/twitter-fonts-og.webp", width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter Fonts Generator \u2013 Unicode Styles for X Bios & Names",
    description:
      "Generate unique Twitter fonts for your X bio, display name, and tweets. Preview and copy Unicode text styles in seconds, no signup or download needed.",
    images: ["https://www.aestheticletters.com/images/twitter-fonts/twitter-fonts-og.webp"],
  },
};

const faqs = [
  {
    question: "What font does Twitter use?",
    answer:
      "Chirp, X\u2019s native interface typeface introduced in 2021. It cannot be changed from within the app, which is why a twitter fonts generator like this one exists, see the section above for the full explanation.",
  },
  {
    question: "Why can\u2019t I paste styled text into my X username or handle?",
    answer:
      "X restricts handles to plain letters, numbers, and underscores only. This rule is enforced at signup and during any username change, so styled Unicode characters are rejected automatically. Display names, bios, and tweets do not have this restriction.",
  },
  {
    question: "Does styled text use more of my 280 characters?",
    answer:
      "Often, yes. Most decorative styles, including bold, script, and gothic, count as two characters each on X because of how those characters are encoded. A fully styled tweet can use up its character limit twice as fast as plain text. Small caps are the exception and count the same as normal text.",
  },
  {
    question: "Does styled text affect my reach or get filtered by X\u2019s algorithm?",
    answer:
      "No. Styled text is still plain Unicode text underneath the visual style. It remains fully readable and searchable, and X does not apply any special treatment to it.",
  },
  {
    question: "Will these twitter fonts work on every device?",
    answer:
      "Most modern phones, tablets, and browsers display Unicode characters correctly. On older devices or outdated software, an unsupported character may show as a small dotted box or line in its place instead of the styled letter, though this is uncommon on current systems.",
  },
  {
    question: "Can I use these twitter font styles on other platforms too?",
    answer: (
      <p>
        Yes. The same Unicode characters work on{" "}
        <a href="/instagram-fonts" className="text-primary underline underline-offset-4 hover:no-underline">Instagram</a>,
        Facebook,{" "}
        <a href="/discord-fonts" className="text-primary underline underline-offset-4 hover:no-underline">Discord</a>{" "}
        and most other platforms that support standard text input.
      </p>
    ),
  },
  {
    question: "Are these real fonts I am downloading?",
    answer:
      "No. Nothing is downloaded or installed. These are existing Unicode characters that visually resemble styled letters, which is exactly why they can be copied and pasted anywhere without any extra software.",
  },
];

const twitterStyles = [
  {
    name: "Feed Stopper",
    description:
      "A bold style built for the first few words of a tweet or a thread opener, the kind of tweet font that draws the eye immediately in a fast moving feed and suits the opening line people see before they decide to keep reading.",
  },
  {
    name: "Bio Caps",
    description:
      "A small caps style designed for the 160 character bio field. Because small caps count as one character each on X, it gives you full use of the bio space with no hidden cost, making it the safest decorative choice for that field.",
  },
  {
    name: "Chirp Break",
    description:
      "A bold serif style meant to stand apart from X\u2019s own Chirp typeface, which is sans-serif. The serif weight creates visible contrast against the platform\u2019s default look, useful for a display name or brand account.",
  },
  {
    name: "Quote Tweet Serif",
    description:
      "An italic serif style suited to quote tweet commentary, where a softer or more personal tone fits the added text sitting above someone else\u2019s post.",
  },
  {
    name: "Thread Marker",
    description:
      "A style scoped for numbering or labeling thread openers, such as \u201C1/\u201D style markers, providing a distinct look for thread navigation.",
  },
  {
    name: "Display Name Edge",
    description:
      "A double struck or fraktur style scoped specifically to the display name field, which caps out at 50 characters. Best used for short names rather than longer phrases, given the character cost involved.",
  },
  {
    name: "Hot Take Bold",
    description:
      "A bold italic style for opinion driven tweets or sharper openers, adding visual weight to a strong first line.",
  },
  {
    name: "Pinned Post Script",
    description:
      "A cursive style suited to the short introductory line on a pinned tweet, where a softer, more personal tone often fits the format.",
  },
  {
    name: "Retweet Highlight",
    description:
      "A strikethrough or underline styling for added commentary on a retweet, drawing attention to the key phrase in your added text.",
  },
  {
    name: "Reply Guy Mono",
    description:
      "A monospace style for casual, conversational replies, giving short responses a distinct, slightly technical tone without looking overly formal.",
  },
];

export default function TwitterFontsPage() {
  const totalFontStyles = getTotalFontStyleCount();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/twitter-fonts#software",
        name: "Twitter Fonts Generator",
        operatingSystem: "Any",
        applicationCategory: "UtilitiesApplication",
        browserRequirements: "requires HTML5 support",
        url: "https://www.aestheticletters.com/twitter-fonts",
        description:
          "Turn plain text into stylish Unicode fonts for Twitter instantly. Copy and paste Twitter fonts for your bio, tweets, and display name.",
        image: "https://www.aestheticletters.com/images/twitter-fonts/twitter-fonts-og.webp",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/twitter-fonts#webpage",
        url: "https://www.aestheticletters.com/twitter-fonts",
        name: "Twitter Fonts Generator \u2013 Unicode Styles for X Bios & Names",
        description:
          "Generate unique Twitter fonts for your X bio, display name, and tweets. Preview and copy Unicode text styles in seconds, no signup or download needed.",
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-07-01T08:00:00+00:00",
        dateModified: "2026-07-01T12:00:00+00:00",
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/twitter-fonts#breadcrumb",
        },
        mainEntity: {
          "@id": "https://www.aestheticletters.com/twitter-fonts#software",
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", ".text-on-surface-variant"],
        },
        primaryImageOfPage: {
          "@id": "https://www.aestheticletters.com/twitter-fonts#image-how-to-use",
        },
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/twitter-fonts#image-how-to-use",
        url: "https://www.aestheticletters.com/images/twitter-fonts/twitter-fonts-how-to-use.webp",
        contentUrl: "https://www.aestheticletters.com/images/twitter-fonts/twitter-fonts-how-to-use.webp",
        width: 1200,
        height: 800,
        caption: "Three step process to use the Twitter fonts generator: type your text, pick a style from twelve cards, then paste the styled Unicode text into your X profile",
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/twitter-fonts#image-where-they-work",
        url: "https://www.aestheticletters.com/images/twitter-fonts/twitter-fonts-where-they-work.webp",
        contentUrl: "https://www.aestheticletters.com/images/twitter-fonts/twitter-fonts-where-they-work.webp",
        width: 1200,
        height: 800,
        caption: "X profile mockup showing where Unicode styled text works: display names, bios, and tweets accept styled text while handles do not",
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/twitter-fonts#image-character-cost",
        url: "https://www.aestheticletters.com/images/twitter-fonts/twitter-fonts-character-cost.webp",
        contentUrl: "https://www.aestheticletters.com/images/twitter-fonts/twitter-fonts-character-cost.webp",
        width: 1200,
        height: 800,
        caption: "Side by side comparison showing plain text uses 140 of 280 characters while the same styled text uses all 280, with Small Caps as the exception at no extra cost",
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/twitter-fonts#image-styles-comparison",
        url: "https://www.aestheticletters.com/images/twitter-fonts/twitter-fonts-styles-comparison.webp",
        contentUrl: "https://www.aestheticletters.com/images/twitter-fonts/twitter-fonts-styles-comparison.webp",
        width: 1200,
        height: 1800,
        caption: "Comparison chart of ten Twitter font styles showing Feed Stopper, Bio Caps, Chirp Break, Quote Tweet Serif, Thread Marker, Display Name Edge, Hot Take Bold, Pinned Post Script, Reply Guy Mono, and Tweet Double applied to the word Twitter",
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/twitter-fonts#breadcrumb",
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
            name: "Twitter Fonts",
            item: "https://www.aestheticletters.com/twitter-fonts",
          },
        ],
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use the Twitter Text Generator",
    description:
      "Type your text and instantly see unique twitter fonts for your X bio, display name, and tweets.",
    totalTime: "PT1M",
    image: "https://www.aestheticletters.com/images/twitter-fonts/twitter-fonts-how-to-use.webp",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Type Your Text",
        text: "Type your text into the box above. This twitter font generator instantly shows it rendered in several styles, no waiting and no extra steps.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Pick a Style",
        text: "Browse the results and pick the font for twitter that fits your bio, your tweet, or your display name.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Copy and Paste",
        text: "Click any style to copy it, then paste it directly into X. The whole process takes seconds and works the same way on phone or desktop.",
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
        text:
          typeof faq.answer === "string"
            ? faq.answer
            : "Yes. The same Unicode characters work on Instagram, Facebook, Discord and most other platforms that support standard text input.",
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
            { label: "Twitter Fonts", href: "/twitter-fonts" },
          ]}
        />

        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            Twitter Fonts &mdash; Free Copy and Paste
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            Type your text and instantly see unique twitter fonts for your X bio,
            display name, and tweets. This free twitter font generator needs no
            signup, just copy and paste in seconds.
          </p>
        </section>

        {/* Interactive Font Generator */}
        <TwitterFontGenerator totalFontStyles={totalFontStyles} />

        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* Intro paragraph */}
              <article>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Most tweets look the same. Same font, same weight, same shape,
                  scrolling past in a feed that moves too fast to notice anything
                  plain. A styled name or bio breaks that pattern instantly. This
                  twitter fonts generator turns normal text into Unicode fonts for
                  twitter you can paste straight into your X display name, bio, or
                  tweets. No downloads, no design skills, just type and copy.
                </p>
              </article>

              {/* How to Use the Twitter Text Generator */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Use the Twitter Text Generator?
                </h2>
                <Image
                  src="/images/twitter-fonts/twitter-fonts-how-to-use.webp"
                  alt="Three step process to use the Twitter fonts generator: type your text, pick a style from twelve cards, then paste the styled Unicode text into your X profile"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Type your text into the box above. This twitter font generator
                  instantly shows it rendered in several styles, no waiting and no
                  extra steps. Browse the results and pick the font for twitter
                  that fits your bio, your tweet, or your display name. Click any
                  style to copy it, then paste it directly into X. The whole
                  process takes seconds and works the same way on phone or desktop.
                </p>
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Type Your Text",
                      description:
                        "Type your text into the box above. This twitter font generator instantly shows it rendered in several styles, no waiting and no extra steps.",
                    },
                    {
                      step: 2,
                      title: "Pick a Style",
                      description:
                        "Browse the results and pick the font for twitter that fits your bio, your tweet, or your display name.",
                    },
                    {
                      step: 3,
                      title: "Copy and Paste",
                      description:
                        "Click any style to copy it, then paste it directly into X. The whole process takes seconds and works the same way on phone or desktop.",
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

              {/* Why Twitter Fonts Exist */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Why Twitter Fonts Exist?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  A common question is what font does Twitter use natively. X runs
                  on a typeface called Chirp, introduced in 2021 as part of a full
                  visual redesign. Chirp controls how the platform looks on screen,
                  but it is fixed. Users cannot change twitter text settings or
                  install a different typeface inside the app itself.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  That limit is exactly why a twitter font changer built on Unicode
                  became popular. Instead of changing the font, people swap
                  individual letters for visually similar Unicode characters that
                  exist outside Chirp entirely.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Every character this generator produces already has a fixed
                  address inside the Unicode standard, the same global system that
                  stores every letter and symbol used across the world. Bold
                  versions, script shapes, small caps, even stylized number
                  characters each occupy their own dedicated section of that system.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  When you type here, the generator locates the matching character
                  from the right section and swaps it in. Because those characters
                  already exist in your device&apos;s text layer, they paste into any
                  app or platform without a font file or any kind of installation.
                </p>
              </article>

              {/* Where Styled Text Actually Works on X */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Where Styled Text Actually Works on X?
                </h2>
                <Image
                  src="/images/twitter-fonts/twitter-fonts-where-they-work.webp"
                  alt="X profile mockup showing where Unicode styled text works: display names, bios, and tweets accept styled text while handles do not"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  This is the part most generators get wrong, so it is worth
                  stating clearly. Display name, bio, and tweet text all accept
                  Unicode styling without restriction. Paste a styled name into any
                  of these three fields and it will display exactly as shown.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The X handle works differently. Your handle is the unique
                  identifier that follows the @ symbol and forms your profile link.
                  X restricts handles to plain letters A through Z, the numbers 0
                  through 9, and underscores.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  No other characters are accepted, and that includes every styled
                  Unicode character this generator produces. If you try to save a
                  styled handle, X will reject it at signup or during a username
                  change.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  So the short version: style your display name, your bio, and your
                  tweets freely. Leave your actual handle in plain text, because X
                  will not allow anything else there.
                </p>
              </article>

              {/* The Real Cost of Styled Text */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  The Real Cost of Styled Text: Character Limits Explained
                </h2>
                <Image
                  src="/images/twitter-fonts/twitter-fonts-character-cost.webp"
                  alt="Side by side comparison showing plain text uses 140 of 280 characters while the same styled text uses all 280, with Small Caps as the exception at no extra cost"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  X gives every tweet a 280 character budget, but not every
                  character costs the same. X counts text using a weighted system
                  documented in its own developer guidelines. Plain Latin letters
                  count as one character each. Characters from certain other ranges
                  count as two.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Most decorative Unicode styles, including bold, script, gothic,
                  and double struck, come from a part of Unicode called the
                  supplementary plane. These characters sit outside the more common
                  range computers use for everyday text, so X encodes each one using
                  two linked code units instead of one.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  X counts that pair as two characters rather than one. The
                  practical result is significant. A tweet that holds 280 plain
                  characters holds roughly 140 once it is fully styled in one of
                  these sets, because every visible character is quietly costing
                  double.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Small caps are the exception worth remembering. That style draws
                  its characters from a different part of Unicode that sits inside
                  the common range, so X counts it the same as plain text, one
                  character each. It is the only major decorative style here with no
                  hidden cost.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  This matters most for tweets, where the 280 limit is tight to
                  begin with, and for the 50 character display name field, where
                  even a short styled phrase can use up the available space fast.
                  The bio field gives more room at 160 characters, but the same
                  doubling still applies to any heavily decorative style placed
                  there. Knowing this in advance means you can style the part of
                  your text that matters most, like an opening hook, without
                  accidentally running out of room.
                </p>
              </article>

              {/* 10 Twitter Font Styles and When to Use Them */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  10 Twitter Font Styles and When to Use Them
                </h2>
                <Image
                  src="/images/twitter-fonts/twitter-fonts-styles-comparison.webp"
                  alt="Comparison chart of ten Twitter font styles showing Feed Stopper, Bio Caps, Chirp Break, Quote Tweet Serif, Thread Marker, Display Name Edge, Hot Take Bold, Pinned Post Script, Reply Guy Mono, and Tweet Double applied to the word Twitter"
                  width={1200}
                  height={1800}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Each style below is built for a specific spot on X, not just
                  decoration for its own sake. Whether you need twitter fonts for
                  name fields, a bio, or a tweet itself, these ten cover the most
                  common use cases.
                </p>
                <div className="space-y-8">
                  {twitterStyles.map((style) => (
                    <div key={style.name}>
                      <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">
                        {style.name}
                      </h3>
                      <p className="text-on-surface-variant leading-relaxed text-lg">
                        {style.description}
                        {style.name === "Feed Stopper" && (
                          <>
                            {" "}For more bold styles beyond this one, the{" "}
                            <Link
                              href="/bold-font-generator"
                              className="text-primary underline underline-offset-4 hover:no-underline"
                            >
                              bold letters generator
                            </Link>{" "}
                            covers a wider set of heavy weight options.
                          </>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              {/* Best Practices for Styling Tweets, Bios, and Display Names */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Best Practices for Styling Tweets, Bios, and Display Names
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Style the part of your text that needs attention most, not the
                  whole post. Given the character cost explained above, the most
                  effective approach is to style an opening hook, a key phrase, or a
                  short headline, then leave the rest of the tweet in plain text.
                  This keeps the post readable while still standing out where it
                  matters.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The level of decoration that works well depends on what your
                  profile is trying to do. A personal account has more freedom to
                  use expressive styles since individual voice and character carry
                  the post, and a bolder look fits that naturally. A business or
                  creator account usually lands better with a lighter touch.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Heavier decorative styles pull attention away from the content
                  itself and can make a profile harder to scan quickly, which works
                  against the clarity a brand account needs. For a wider range of
                  decorative options across all platforms, the{" "}
                  <Link
                    href="/fancy-fonts"
                    className="text-primary underline underline-offset-4 hover:no-underline"
                  >
                    fancy font maker
                  </Link>{" "}
                  covers 130+ styles beyond what this tool offers.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Screen readers generally read Unicode styled characters letter by
                  letter rather than as whole words, since the characters are
                  technically distinct from standard letters even though they look
                  similar. This can make heavily styled text harder to follow for
                  anyone using assistive technology. Reserve decorative styles for
                  short phrases like names or hooks, and keep longer or important
                  text, such as full sentences in a bio, in plain readable form.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Avoid mixing more than one or two styles in a single tweet or
                  bio. Stacking several decorative sets together makes text harder
                  to scan and can look cluttered rather than intentional. A single
                  well placed style usually reads as more deliberate than several
                  competing ones.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  The same principle applies across platforms. Testing on{" "}
                  <Link
                    href="/facebook-fonts"
                    className="text-primary underline underline-offset-4 hover:no-underline"
                  >
                    facebook fonts
                  </Link>{" "}
                  showed the same readability tradeoff, since Facebook only supports
                  genuine Unicode styles rather than installed Google Fonts, much
                  like X.
                </p>
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
            Want more than Twitter fonts? Check out these generators for letters,
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
                  { label: "Bold Fonts", href: "/bold-font-generator", icon: "\uD83D\uDDA4", desc: "Heavy bold text" },
                  { label: "Fancy Fonts", href: "/fancy-fonts", icon: "\uD83D\uDC51", desc: "Decorative text art" },
                  { label: "Cursive Fonts", href: "/cursive-fonts", icon: "\u270D\uFE0F", desc: "Flowing handwritten text" },
                  { label: "Serif Fonts", href: "/serif-fonts", icon: "\uD83D\uDD24", desc: "Classic serif styles" },
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
                  { label: "Discord Font Generator", href: "/discord-fonts", icon: "\uD83C\uDFAE", desc: "Unique Discord text" },
                  { label: "Stylish Fonts", href: "/stylish-fonts", icon: "\u2728", desc: "Cool creative text" },
                  { label: "Aesthetic Letters", href: "/", icon: "\uD83C\uDFA8", desc: "All font styles hub" },
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

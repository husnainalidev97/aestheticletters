import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import ChristmasFontGenerator from "../components/ChristmasFontGenerator";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { getTotalFontStyleCount } from "../lib/fontCount";

export const metadata: Metadata = {
  title: { absolute: "Christmas Fonts That Actually Work: Copy and Paste" },
  description:
    "Most Christmas fonts break on certain letters. This generator tests every one, so your text always comes out complete on Instagram, WhatsApp and Discord.",
  alternates: {
    canonical: "https://www.aestheticletters.com/christmas-fonts",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/christmas-fonts",
    title: "Christmas Fonts That Actually Work: Copy and Paste",
    description:
      "Most Christmas fonts break on certain letters. This generator tests every one, so your text always comes out complete on Instagram, WhatsApp and Discord.",
    images: [{ url: "https://www.aestheticletters.com/images/christmas-fonts/christmas-fonts-og.webp", width: 1200, height: 640 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christmas Fonts That Actually Work: Copy and Paste",
    description:
      "Most Christmas fonts break on certain letters. This generator tests every one, so your text always comes out complete on Instagram, WhatsApp and Discord.",
    images: ["https://www.aestheticletters.com/images/christmas-fonts/christmas-fonts-og.webp"],
  },
};

const faqs = [
  {
    question: "Why do some letters look different from the rest of a word?",
    answer:
      "A handful of letters are missing from certain Unicode style blocks on their own. Old English style is missing C, H, I, R and Z, and Holiday Script is missing eight capital letters and three lowercase letters. This christmas font generator fills each gap using a matching character from an older Unicode block, so the word still reads correctly instead of leaving a blank space.",
  },
  {
    question: "Can I use Christmas fonts in my Discord username?",
    answer:
      "The display name that appears across every server and message accepts styled Christmas text without any issue, along with channel topics and server descriptions. The one exception is the username itself, Discord\u2019s login handle, which is locked down to plain lowercase letters, numbers, underscores and dots.",
  },
  {
    question: "Is it okay to write Xmas instead of Christmas?",
    answer:
      "Yes. The X stands for the Greek letter chi, the first letter in the Greek word for Christ, and the abbreviation has been documented since around the year 1021. It is a genuinely old shorthand, not a modern shortcut, so using it in a styled greeting is perfectly fine.",
  },
  {
    question: "Why does my styled text show as a box or question mark on some devices?",
    answer:
      "This happens when a device or app has not added support for that particular Unicode character yet. It is uncommon on modern phones and browsers, but very old software can sometimes lag behind the full Unicode standard. Trying a different style from this page usually solves it.",
  },
  {
    question: "Are Christmas fonts accessible to screen reader users?",
    answer:
      "Not fully. A screen reader often reads a styled letter by its technical Unicode name instead of the letter itself, so a styled word can sound like a string of jargon rather than a normal sentence. For a caption or bio that everyone can enjoy, keep the styled text as a visual flourish and place a plain text version of the same words nearby, either right after it or in a description field. That way a screen reader always has a normal sentence to read out.",
  },
  {
    question: "Will xmas fonts display correctly on every phone?",
    answer:
      "Mostly, yes. These are standard Unicode characters supported on modern iPhones, Android devices and desktop browsers. Very old devices or apps with strict filters may show a blank box instead, though this is rare on anything released in the last several years.",
  },
  {
    question: "Are Christmas fonts free to use, including for a business?",
    answer:
      "Yes. Since this tool generates text rather than a font file, there is no license to buy or track. The Unicode standard itself is free and open for anyone to use, so a styled Christmas greeting can be used personally or commercially without restriction.",
  },
  {
    question: "Can I combine xmas fonts with emoji and symbols?",
    answer:
      "Yes. Pasting a styled word next to a snowflake, star or bell from the cheat sheet above works in almost every app that accepts styled text. Keep the combination short for bios and usernames, since some platforms count each decorative character as more than one toward a character limit.",
  },
];

export default function ChristmasFontsPage() {
  const totalFontStyles = getTotalFontStyleCount();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/christmas-fonts#software",
        name: "Christmas Font Generator",
        operatingSystem: "Any",
        applicationCategory: "UtilitiesApplication",
        browserRequirements: "requires HTML5 support",
        url: "https://www.aestheticletters.com/christmas-fonts",
        image: "https://www.aestheticletters.com/images/christmas-fonts/christmas-fonts-og.webp",
        description:
          "Most Christmas fonts break on certain letters. This generator tests every one, so your text always comes out complete on Instagram, WhatsApp and Discord.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/christmas-fonts#webpage",
        url: "https://www.aestheticletters.com/christmas-fonts",
        name: "Christmas Fonts That Actually Work: Copy and Paste",
        description:
          "Most Christmas fonts break on certain letters. This generator tests every one, so your text always comes out complete on Instagram, WhatsApp and Discord.",
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-07-04T08:00:00+00:00",
        dateModified: "2026-07-06T08:00:00+00:00",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", ".text-on-surface-variant"],
        },
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/christmas-fonts#breadcrumb",
        },
        mainEntity: {
          "@id": "https://www.aestheticletters.com/christmas-fonts#software",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/christmas-fonts#breadcrumb",
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
            name: "Christmas Fonts",
            item: "https://www.aestheticletters.com/christmas-fonts",
          },
        ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <TopNavBar activePage="christmas-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "All Tools", href: "/all-tools" },
            { label: "Christmas Fonts", href: "/christmas-fonts" },
          ]}
        />

        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            Christmas Fonts &mdash; Free Copy and Paste
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            Most Christmas fonts quietly drop letters like C, H or R. Every
            style here is tested letter by letter first, so your Merry Christmas
            message always comes out complete.
          </p>
        </section>

        {/* Interactive Font Generator */}
        <ChristmasFontGenerator totalFontStyles={totalFontStyles} />

        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* Intro */}
              <article>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Type a word above and watch it turn into festive Christmas
                  text in real time. Every style on this page is built from
                  genuine Unicode characters, not an image, so the result pastes
                  cleanly into Instagram, WhatsApp, Discord or Merry Christmas
                  messages to friends and family.
                </p>
              </article>

              {/* What Are Christmas Fonts? */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  What Are Christmas Fonts?
                </h2>
                <Image
                  src="/images/christmas-fonts/what-are-christmas-fonts-before-after.webp"
                  alt="Before and after comparison showing plain text Merry Christmas transformed into five different Unicode Christmas font styles including Old English, Bold Fraktur, Bold Serif, Bold Sans, and Script"
                  width={1536}
                  height={1024}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Christmas fonts are text styles that make a word look festive
                  without changing a single letter underneath. This tool does not
                  create a picture or a downloadable font file. It swaps each
                  letter for a matching character from the Unicode standard, the
                  same system every phone and computer already uses to display
                  text.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  That matters because the result behaves like normal text
                  everywhere. A styled word can be copied, pasted, searched and
                  sent through any app that accepts text, unlike a font file that
                  needs installing or an image that needs uploading.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Unicode is simply the shared list of characters that every
                  device agrees on, covering plain letters, numbers, symbols and
                  the styled letters used on this page. That shared agreement is
                  the only reason a snowflake or a bold letter looks the same on
                  an iPhone as it does on a laptop.
                </p>
              </article>

              {/* How to use a Christmas Text Generator */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Use a Christmas Text Generator
                </h2>
                <Image
                  src="/images/christmas-fonts/how-to-use-christmas-text-generator-three-steps.webp"
                  alt="Three step process to use the Christmas text generator: type your text in the input box, browse festive style cards with live preview, then copy and paste styled text anywhere"
                  width={1536}
                  height={1024}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Using the xmas text generator takes three steps. Type or paste
                  your word into the box at the top of the page. Every style card
                  below updates at the same time, so there is nothing to click to
                  see results. Scroll through the cards and pick the one that
                  fits your message.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Clicking or tapping any style sends the styled word straight to
                  your device clipboard, ready to drop into your next message.
                  Phone users bring up the paste menu with a long press inside
                  the text field, while Windows and Mac users can rely on the
                  familiar Ctrl+V or Command+V shortcut instead.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  If a symbol looks like a small box after pasting, try a
                  different style, since that app or device may not support every
                  character yet. Not sure what to type? Common choices include
                  Merry Christmas, Happy Holidays, Season&rsquo;s Greetings and
                  Happy New Year, though any word or short phrase works just as
                  well.
                </p>
              </article>

              {/* Christmas Font Styles You Can Copy and Paste */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Christmas Font Styles You Can Copy and Paste
                </h2>
                <Image
                  src="/images/christmas-fonts/five-christmas-font-styles-comparison-chart.webp"
                  alt="Comparison chart of five Christmas font styles showing Old English Fraktur, Bold Old English, Christmas Bold, Festive Sans, and Holiday Script each applied to the text Merry Christmas with festive symbol decorators"
                  width={1024}
                  height={1536}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Five styles are available on this page, each built from a
                  different Unicode block and suited to a different kind of
                  message. Pick one below and see how it looks with your own word
                  at the top of the page.
                </p>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Old English Christmas
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                      Old English Christmas uses Fraktur letters from
                      Unicode&rsquo;s Mathematical Alphanumeric block, a
                      traditional Gothic style used for centuries in formal
                      lettering, heritage signage and diplomas. Checking every
                      capital letter against the Unicode chart shows five gaps,
                      C, H, I, R and Z, which are missing from that block on
                      their own.
                    </p>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      This christmas font generator pulls those five
                      from an older Unicode block instead, keeping every word
                      complete. For decorative Gothic and ornamental text
                      outside of Christmas, our{" "}
                      <Link href="/fancy-fonts" className="text-primary underline underline-offset-4 hover:no-underline">fancy font generator</Link>{" "}
                      offers year-round options.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Bold Old English
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Bold Old English uses the bold version of the same Fraktur
                      letters, which covers every capital letter without any
                      gaps. Choose this card over the regular Old English style
                      whenever a word leans heavily on C, H, I, R or Z and needs
                      every letter to match perfectly.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Christmas Bold
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Christmas Bold uses the standard Unicode bold alphabet, a
                      reliable set that covers every letter and number without
                      exception. It reads clearly at any size, which makes it a
                      solid pick for short greetings, event titles or a bio that
                      needs to stand out. For bold text beyond the holiday
                      season, the{" "}
                      <Link href="/bold-font-generator" className="text-primary underline underline-offset-4 hover:no-underline">bold font generator</Link>{" "}
                      covers the full range of Unicode bold styles.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Festive Sans
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Festive Sans applies a clean, bold sans serif style for a
                      more modern take on holiday text. It works well next to a
                      snowflake or star symbol for a simple, minimal look, or on
                      its own for tags, invitations and short announcements.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Holiday Script
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                      Holiday Script uses Unicode&rsquo;s flowing script
                      alphabet, suited to greetings and signatures. Testing every
                      letter against the script character set turns up eleven
                      gaps, capitals B, E, F, H, I, L, M and R, along with
                      lowercase e, g and o.
                    </p>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Each one is mapped in from an older
                      Unicode block, so every word still renders in full. If
                      you prefer a flowing script look year-round, our{" "}
                      <Link href="/cursive-fonts" className="text-primary underline underline-offset-4 hover:no-underline">cursive fonts collection</Link>{" "}
                      offers additional handwritten styles.
                    </p>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-lg mt-8">
                  For spooky seasonal text during October, our{" "}
                  <Link href="/halloween-fonts" className="text-primary underline underline-offset-4 hover:no-underline">Halloween font generator</Link>{" "}
                  offers Gothic and glitch styles built from the same Unicode system.
                </p>
              </article>

              {/* How to Use Christmas Fonts on Instagram, WhatsApp, Discord */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Use Christmas Fonts on Instagram, WhatsApp, Discord and
                  Other Apps
                </h2>
                <Image
                  src="/images/christmas-fonts/christmas-fonts-work-social-media-platforms.webp"
                  alt="Christmas Unicode text displayed correctly across Instagram bio, WhatsApp message, Discord display name, Facebook post, X tweet, and Telegram showing platform compatibility"
                  width={1024}
                  height={1024}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Christmas fonts paste correctly into Instagram bios, captions
                  and stories, since Instagram accepts standard Unicode text
                  almost everywhere on the app. Pinterest descriptions and
                  Telegram messages work the same way, so a styled greeting shows
                  up exactly as it appeared on this page. For styles designed
                  specifically for Instagram profiles, see our{" "}
                  <Link href="/instagram-fonts" className="text-primary underline underline-offset-4 hover:no-underline">Instagram font generator</Link>.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Facebook works a little differently depending on where the text
                  goes. A styled greeting pastes cleanly into a regular post, a
                  comment or a page bio, but Facebook&rsquo;s name field, like
                  Discord&rsquo;s username, restricts characters and will reject
                  styled text there.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  WhatsApp status updates and chats also accept styled text
                  without any issue, making it a simple way to send a festive
                  Merry Christmas message to a group or contact. The same applies
                  to text messages on most modern phones.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Discord needs a small distinction, confirmed by testing both
                  fields directly. The display name shown across servers and
                  messages fully supports styled Christmas text, so it works
                  there without a problem.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The Discord username, the unique
                  handle used to log in, only accepts lowercase letters, numbers,
                  underscores and periods, so styled text will not save there.
                  For a full set of Discord-specific styles beyond Christmas,
                  our{" "}
                  <Link href="/discord-fonts" className="text-primary underline underline-offset-4 hover:no-underline">Discord font generator</Link>{" "}
                  has 140+ options.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  X, formerly known as Twitter, also accepts styled Christmas
                  text in posts and bios. Worth knowing that most decorative
                  Unicode styles count as two characters per letter toward the
                  post limit, so a long styled greeting can use up space faster
                  than plain text would. For more X-optimized styles that
                  balance character count with visual impact, try our{" "}
                  <Link href="/twitter-fonts" className="text-primary underline underline-offset-4 hover:no-underline">Twitter font generator</Link>.
                </p>
              </article>

              {/* Christmas Symbols and Emoji Cheat Sheet */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Christmas Symbols and Emoji Cheat Sheet
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Add a snowflake, star, bell or tree next to any styled word
                  above for a quick festive touch. Many of these symbols come
                  from Unicode&rsquo;s Dingbats block, a set of decorative
                  characters that has existed since 1993, long before emoji
                  became common on phones.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The snowflake at U+2744 is a good example of how this works. It
                  carries an official emoji designation, so it can appear as a
                  simple black outline on one device and a full colour icon on
                  another, depending on how that platform chooses to display it.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  That 1993 origin is also why these symbols tend to render more
                  consistently across old and new devices than modern emoji do.
                  Emoji design changes yearly with new phone releases, while a
                  Dingbats character has looked essentially the same for over
                  three decades.
                </p>

                {/* Symbols Table */}
                <div className="overflow-x-auto rounded-xl border border-outline-variant/20">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-surface-container-lowest">
                        <th className="px-6 py-4 font-headline font-bold text-on-surface">Symbol</th>
                        <th className="px-6 py-4 font-headline font-bold text-on-surface">Name</th>
                        <th className="px-6 py-4 font-headline font-bold text-on-surface">Unicode</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20">
                      <tr><td className="px-6 py-3 text-2xl">&#x2744;</td><td className="px-6 py-3 text-on-surface-variant">Snowflake</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+2744</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x2745;</td><td className="px-6 py-3 text-on-surface-variant">Tight Snowflake</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+2745</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x2746;</td><td className="px-6 py-3 text-on-surface-variant">Heavy Snowflake</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+2746</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x2B50;</td><td className="px-6 py-3 text-on-surface-variant">Star</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+2B50</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F31F;</td><td className="px-6 py-3 text-on-surface-variant">Glowing Star</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F31F</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x2606;</td><td className="px-6 py-3 text-on-surface-variant">White Star</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+2606</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x2605;</td><td className="px-6 py-3 text-on-surface-variant">Black Star</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+2605</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x2736;</td><td className="px-6 py-3 text-on-surface-variant">Starburst</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+2736</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x2726;</td><td className="px-6 py-3 text-on-surface-variant">Sparkle</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+2726</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F514;</td><td className="px-6 py-3 text-on-surface-variant">Bell</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F514</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F384;</td><td className="px-6 py-3 text-on-surface-variant">Christmas Tree</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F384</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F332;</td><td className="px-6 py-3 text-on-surface-variant">Evergreen Tree</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F332</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F385;</td><td className="px-6 py-3 text-on-surface-variant">Santa Claus</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F385</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F936;</td><td className="px-6 py-3 text-on-surface-variant">Mrs. Claus</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F936</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F381;</td><td className="px-6 py-3 text-on-surface-variant">Gift</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F381</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F380;</td><td className="px-6 py-3 text-on-surface-variant">Ribbon</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F380</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F98C;</td><td className="px-6 py-3 text-on-surface-variant">Reindeer</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F98C</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x2603;</td><td className="px-6 py-3 text-on-surface-variant">Snowman</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+2603</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x26C4;</td><td className="px-6 py-3 text-on-surface-variant">Snowman Without Snow</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+26C4</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F56F;</td><td className="px-6 py-3 text-on-surface-variant">Candle</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F56F</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F9E3;</td><td className="px-6 py-3 text-on-surface-variant">Scarf</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F9E3</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F9E4;</td><td className="px-6 py-3 text-on-surface-variant">Mittens</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F9E4</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F36A;</td><td className="px-6 py-3 text-on-surface-variant">Cookie</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F36A</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F36C;</td><td className="px-6 py-3 text-on-surface-variant">Candy</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F36C</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F54A;</td><td className="px-6 py-3 text-on-surface-variant">Dove</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F54A</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x2764;</td><td className="px-6 py-3 text-on-surface-variant">Heart</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+2764</td></tr>
                      <tr><td className="px-6 py-3 text-2xl">&#x1F3B6;</td><td className="px-6 py-3 text-on-surface-variant">Music Notes</td><td className="px-6 py-3 text-on-surface-variant font-mono">U+1F3B6</td></tr>
                    </tbody>
                  </table>
                </div>
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
            Want more than christmas fonts? Check out these generators for
            letters, symbols, and complete text styling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Similar Font Styles */}
            <div>
              <h3 className="font-headline text-lg font-bold mb-4 flex items-center gap-2">
                <span className="inline-block w-1 h-5 rounded-full bg-primary" />
                Other Seasonal Font Styles
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Halloween Fonts", href: "/halloween-fonts", icon: "\uD83C\uDF83", desc: "Spooky & glitch text" },
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
                  { label: "Fancy Text Generator", href: "/fancy-fonts", icon: "\uD83D\uDC51", desc: "Decorative text art" },
                  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Stand out on Insta" },
                  { label: "Facebook Font Generator", href: "/facebook-fonts", icon: "\uD83D\uDCAC", desc: "Style your FB posts" },
                  { label: "Cursive Text Generator", href: "/cursive-fonts", icon: "\u270D\uFE0F", desc: "Flowing handwritten text" },
                  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDDA4", desc: "Heavy bold text" },
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

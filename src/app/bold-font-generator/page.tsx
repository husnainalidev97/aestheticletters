import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import BoldFontGenerator from "../components/BoldFontGenerator";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { getTotalFontStyleCount } from "../lib/fontCount";

export const metadata: Metadata = {
  title: { absolute: "Bold Font Generator - Free Bold Text Styles (Copy & Paste)" },
  description:
    "Use this bold font generator to turn any text into loud styles instantly. Copy and paste bold text into Instagram, Discord, Facebook, or WhatsApp for free.",
  alternates: {
    canonical: "https://www.aestheticletters.com/bold-font-generator",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/bold-font-generator",
    title: "Bold Font Generator - Free Bold Text Styles (Copy & Paste)",
    description:
      "Use this bold font generator to turn any text into loud styles instantly. Copy and paste bold text into Instagram, Discord, Facebook, or WhatsApp for free.",
    images: [{ url: "https://www.aestheticletters.com/images/bold-font-generator/bold-font-generator-og.webp", width: 1200, height: 640 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bold Font Generator - Free Bold Text Styles (Copy & Paste)",
    description:
      "Use this bold font generator to turn any text into loud styles instantly. Copy and paste bold text into Instagram, Discord, Facebook, or WhatsApp for free.",
    images: ["https://www.aestheticletters.com/images/bold-font-generator/bold-font-generator-og.webp"],
  },
};

const faqs = [
  {
    question: "Is this bold fonts generator free to use?",
    answer:
      "There is no cost at any point. You will not be asked to sign up, give an email address, or pay before copying a single style. Use it once for a username today, then come back next month for a whole caption, with nothing changing in between.",
  },
  {
    question: "Why do some bold styles show boxes or question marks?",
    answer:
      "This happens when your device or the app you pasted into cannot display a specific Unicode character. It is most common on older phones. See the troubleshooting section above for which two styles avoid this problem almost everywhere.",
  },
  {
    question: "Do bold fonts work on Instagram, WhatsApp, and Discord?",
    answer:
      "Yes. Bold Unicode font works in Instagram bios, captions, and comments, in WhatsApp messages and status updates, and in Discord messages, usernames, and server names. It also works on X, Facebook, TikTok, and most other platforms that accept plain text.",
  },
  {
    question: "Why can\u2019t I get bold numbers in every style?",
    answer:
      "Unicode only created bold number sets for two styles, Bold Serif and Bold Sans. Styles like Bold Script and Bold Italic never had loud digits added to the Unicode standard, so numbers in those styles stay in plain text. This is a Unicode limit, not something this tool can add.",
  },
  {
    question: "Is bold Unicode text the same as using Ctrl B in Word?",
    answer:
      "No. Ctrl B applies a style inside an app like Word, and that styling disappears if you copy the text somewhere else. Bold Unicode text is made of different characters entirely, so it stays loud no matter where you paste it, even in places that block formatting completely.",
  },
  {
    question: "Why does my bold text sometimes turn back into plain text after I paste it?",
    answer:
      "Some platforms run a cleanup step on pasted text, explained in full above in the Bold Text Not Working section. It happens on the platform\u2019s side, not because the text you copied was wrong.",
  },
];

const boldStyles = [
  {
    name: "Bold Serif",
    description:
      "The classic mathematical bold alphabet. Every uppercase letter, lowercase letter, and digit has its own dedicated Unicode code point. This is the most widely supported bold style and the safest choice for any platform.",
  },
  {
    name: "Bold Sans",
    description:
      "A clean, modern bold style without the small strokes (serifs) at the ends of letters. Like Bold Serif, it covers the full alphabet and all ten digits. This style reads well in both short usernames and longer captions.",
  },
  {
    name: "Bold Italic",
    description:
      "Combines the weight of bold with the forward lean of italic text. Unicode provides this style for uppercase and lowercase letters only, with no dedicated digit set. Best suited for emphasis within a short phrase.",
  },
  {
    name: "Bold Italic Sans",
    description:
      "The sans-serif version of bold italic, combining clean lines with forward-leaning weight. This style covers uppercase and lowercase letters and works well for modern, dynamic-looking text.",
  },
  {
    name: "Bold Script",
    description:
      "A heavier version of the cursive script alphabet. Each letter has flowing connections typical of handwritten text, but with thicker strokes. Covers uppercase and lowercase letters without bold digits.",
  },
  {
    name: "Bold Fraktur",
    description:
      "The heavy version of the old German blackletter style. Bold Fraktur letters carry the ornate medieval look with added weight. Popular for gothic-themed usernames and dramatic display text.",
  },
  {
    name: "Double-Struck",
    description:
      "Letters that appear bold and outlined at the same time, originally used in mathematics to denote special number sets. Seven capital letters (C, H, N, P, Q, R, Z) live in a different part of Unicode than the rest, which many generators get wrong.",
  },
  {
    name: "Negative Circled",
    description:
      "Each letter appears inside a filled dark circle, creating an eye-catching badge-style look. Covers uppercase letters and digits 0 through 9. Lowercase input renders as uppercase automatically since no separate lowercase block exists.",
  },
  {
    name: "Negative Squared",
    description:
      "Each letter appears inside a filled dark square, creating a bold block-style look. This style only covers capital letters with no digit support, making it ideal for short acronyms, initials, or single-word emphasis.",
  },
];

export default function BoldFontGeneratorPage() {
  const totalFontStyles = getTotalFontStyleCount();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/bold-font-generator#software",
        name: "Bold Font Generator",
        operatingSystem: "Any",
        applicationCategory: "UtilitiesApplication",
        browserRequirements: "requires HTML5 support",
        url: "https://www.aestheticletters.com/bold-font-generator",
        image: "https://www.aestheticletters.com/images/bold-font-generator/bold-font-generator-og.webp",
        description:
          "Turn plain text into bold Unicode styles instantly. Copy and paste bold text for Instagram, WhatsApp, Discord, Facebook, and more.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/bold-font-generator#webpage",
        url: "https://www.aestheticletters.com/bold-font-generator",
        name: "Bold Font Generator - Free Bold Text Styles (Copy & Paste)",
        description:
          "Use this bold font generator to turn any text into loud styles instantly. Copy and paste bold text into Instagram, Discord, Facebook, or WhatsApp for free.",
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-06-25T08:00:00+00:00",
        dateModified: "2026-06-25T00:00:00+00:00",
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/bold-font-generator#breadcrumb",
        },
        mainEntity: {
          "@id": "https://www.aestheticletters.com/bold-font-generator#software",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/bold-font-generator#breadcrumb",
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
            name: "Bold Font Generator",
            item: "https://www.aestheticletters.com/bold-font-generator",
          },
        ],
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Copy and Paste Bold Fonts",
    description:
      "Turning your text strong here works the same way no matter what you type, a name, a short bio, or a full sentence.",
    image: "https://www.aestheticletters.com/images/bold-font-generator/how-to-copy-paste-bold-fonts-three-steps.webp",
    totalTime: "PT1M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Type Your Text",
        text: "Start typing in the field near the top of the page. Whatever you enter updates every style card below it instantly.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Pick a Style",
        text: "Scroll through the nine style cards below. Each one shows a live preview of your exact text, so you see the real result before copying anything.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Copy and Paste",
        text: "Click Copy on the style you want. Paste it into Instagram, Facebook, Discord, WhatsApp, or anywhere else that accepts plain text.",
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
            { label: "Bold Font Generator", href: "/bold-font-generator" },
          ]}
        />

        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            Bold Font Generator &mdash; Copy and Paste
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            Use this bold font generator to turn any text into a bold style in
            seconds. Type your words, pick a style, then copy and paste. Every
            style is built from Unicode characters your device already supports,
            so nothing needs to download or install.
          </p>
        </section>

        {/* Interactive Font Generator */}
        <BoldFontGenerator totalFontStyles={totalFontStyles} />

        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* What is a Bold Font Generator? */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  What is a Bold Font Generator?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  A bold font generator changes plain letters into bold Unicode
                  characters. You type a word, and the tool shows you 81
                  different bold styles, from clean sans bold to heavy gothic
                  letters. The text itself does not change. Only the way it looks
                  changes.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  People often call this a heavy typeface, but a real font is a
                  file you install on a device. These styles are something else.
                  They are characters that already exist inside Unicode, the system
                  that gives every letter and number a unique code. Your phone or
                  computer already knows how to show them.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  This is why a bold text generator works the moment you open it.
                  You are not downloading a font bolder tool or any new file. You
                  are picking from bold letters that already exist, the same way
                  our{" "}
                  <Link
                    href="/serif-fonts"
                    className="text-primary underline underline-offset-4 hover:no-underline"
                  >
                    Serif Fonts Generator
                  </Link>{" "}
                  lets you pick a bold serif style for the exact same reason.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Many of our other pages already point people toward loud styles
                  for emphasis. Our{" "}
                  <Link
                    href="/sans-serif-fonts"
                    className="text-primary underline underline-offset-4 hover:no-underline"
                  >
                    Sans Serif Fonts
                  </Link>{" "}
                  page tells readers to use a bold sans serif style for important
                  words. This page builds on that same idea, with the full set of
                  bold styles in one place.
                </p>
              </article>

              {/* Choosing a Bold Style for Your Use Case */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Choosing a Bold Style for Your Use Case
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Picking the right bold font style depends on how much text you
                  are styling and where it will live. Some styles read perfectly in
                  a short username. The same style can lose readability fast inside
                  a longer caption.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Short text &mdash; bios, usernames, nicknames
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      For a single word or short phrase, almost any style works
                      well. This is where the more decorative options like Bold
                      Fraktur or Bold Script feel special instead of heavy. These
                      styles also carry no loud numbers, which rarely matters in a
                      short name.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Longer text &mdash; captions, headlines, body copy
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                      For a full sentence or caption, the two simplest bold styles
                      work best. Bold Serif and Bold Sans are the only bold font
                      names on this page with full support for every letter, number,
                      and case. Every other style was built by Unicode for short
                      emphasis, not long paragraphs.
                    </p>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      If you want more style options built specifically around
                      Instagram use cases, our{" "}
                      <Link
                        href="/instagram-fonts"
                        className="text-primary underline underline-offset-4 hover:no-underline"
                      >
                        Instagram Fonts Generator
                      </Link>{" "}
                      covers loud styles for names, headings, and important text
                      inside a bio or caption.
                    </p>
                  </div>
                </div>
              </article>

              {/* How to Copy and Paste Bold Fonts */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Copy and Paste Bold Fonts?
                </h2>
                <Image
                  src="/images/bold-font-generator/how-to-copy-paste-bold-fonts-three-steps.webp"
                  alt="Three step process to copy and paste bold fonts: type your text, pick a bold style from nine cards, then paste the Unicode bold text anywhere"
                  width={1536}
                  height={1024}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Turning your text strong here works the same way no matter what
                  you type, a name, a short bio, or a full sentence.
                </p>
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Type Your Text",
                      description:
                        "Start typing in the field near the top of the page. Whatever you enter updates every style card below it instantly.",
                    },
                    {
                      step: 2,
                      title: "Pick a Style",
                      description:
                        "Scroll through the nine style cards below. Each one shows a live preview of your exact text, so you see the real result before copying anything.",
                    },
                    {
                      step: 3,
                      title: "Copy and Paste",
                      description:
                        "Click Copy on the style you want. Paste it into Instagram, Facebook, Discord, WhatsApp, or anywhere else that accepts plain text.",
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

              {/* How Bold Text Works Without Formatting Support */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How Bold Text Works Without Formatting Support?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Regular bold text, the kind you get from Ctrl B in Word or two
                  asterisks in a Discord message, is a formatting instruction. The
                  app you are using has to recognize that instruction and draw the
                  letters as bold for you.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Unicode text works differently. Each bold letter is its own
                  character, already built into the device you are using. The app
                  does not need to know what bold means. It just displays the
                  character it already has, the same way it displays any other
                  letter.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  This is why bold Unicode text survives copy and paste into places
                  that block normal formatting, like usernames, bios, and
                  nicknames. There is no instruction to lose, because the boldness
                  is part of the character itself, not a style applied on top of it.
                </p>
              </article>

              {/* Where Bold Text Works Best */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Where Bold Text Works Best?
                </h2>
                <Image
                  src="/images/bold-font-generator/bold-text-works-best-social-media-platforms.webp"
                  alt="Bold Unicode text displayed correctly across Discord username, Instagram bio, Facebook post, and WhatsApp message showing platform compatibility"
                  width={1024}
                  height={1024}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Bold Unicode text works almost anywhere that accepts plain text,
                  but a few platforms have rules and limitations worth knowing
                  before you paste.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Discord &mdash; the formatting gap
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Discord has its own bold formatting using two asterisks, but
                      it only works inside chat messages and forum posts. It does
                      not work in usernames, nicknames, About Me text, server
                      names, or channel topics. Bold Unicode text works in all of
                      those places instead. For a full set of Discord-specific styles beyond bold, try our <Link href="/discord-fonts" className="text-primary underline underline-offset-4 hover:no-underline">discord font generator</Link>.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Discord &mdash; the character limit most people miss
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Discord measures username and nickname limits by character
                      units, not by how a name looks on screen. Every bold Unicode
                      letter counts as two units, so a name that looks twenty
                      characters long can use forty units and get rejected on save.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Facebook &mdash; which bold styles are safe in ads
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                      Facebook has no bold button anywhere in its own tools. You
                      cannot select text and press Ctrl B inside a post, a Page
                      description, a Group announcement, or a Marketplace listing.
                      This is the real reason a bold font generator for Facebook
                      exists at all.
                    </p>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      If you plan to use heavy text inside a paid Facebook ad, our{" "}
                      <Link
                        href="/facebook-fonts"
                        className="text-primary underline underline-offset-4 hover:no-underline"
                      >
                        Facebook Font Generator
                      </Link>{" "}
                      has a full breakdown of which styles pass review and which get
                      flagged. Bold Serif and Bold Sans are named there as the
                      safest choices.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Twitter/X &mdash; the character cost trade-off
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Bold Unicode letters count as two characters each against
                      X&apos;s 280-character tweet limit, because they sit in the
                      supplementary Unicode plane. A fully bold tweet burns through
                      your budget twice as fast as plain text. Bold works best in
                      display names or short bio hooks where the visual weight
                      matters more than length. For the full breakdown and styles
                      built specifically for X, see our{" "}
                      <Link
                        href="/twitter-fonts"
                        className="text-primary underline underline-offset-4 hover:no-underline"
                      >
                        twitter fonts generator
                      </Link>
                      .
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Website headlines &mdash; a real trade off
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Putting bold Unicode text inside an actual website headline
                      comes with a cost. Search engines read a bold Unicode letter
                      as a different character from the plain version, so the
                      headline may not get indexed for that plain text keyword the
                      way a normal headline would.
                    </p>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      This is worth knowing if you run a website, not just a social
                      media profile. Bold Unicode text looks great in a screenshot
                      or a social caption. Inside real website copy meant to rank in
                      search, plain text with real thick formatting stays the safer
                      choice.
                    </p>
                  </div>
                </div>
              </article>

              {/* Bold Text Limitations You Should Know */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Bold Text Limitations You Should Know
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Bold Unicode text has real limits worth knowing before you rely on
                  it for important text.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Why some bold styles skip digits and lowercase letters
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      We checked every letter, number, and case across all 81
                      styles one by one before building this page. Unicode only
                      built complete dark alphabets for two of them, Bold Serif and
                      Bold Sans. Every other style covers capital letters only, with
                      no bold lowercase letters and no bold digits.
                    </p>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      This is a real limit inside Unicode itself, not a bug in this
                      tool. Bold Script has no thick number set at all. Type a date
                      or a price in that style, and the numbers stay plain while the
                      letters turn bold. Every style card shows this gap clearly
                      instead of hiding it.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Why double struck bold has seven hidden exceptions
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                      Double struck letters look heavy and outlined at the same
                      time, which makes them popular for headers and usernames.
                      Seven capital letters in this style, C, H, N, P, Q, R, and Z,
                      live in a completely different part of Unicode than the other
                      nineteen. Most generators get this wrong and show a broken box
                      for these seven letters instead of the correct character.
                    </p>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      We checked every letter against the official Unicode data
                      before building this style. Our generator maps each one by
                      hand to its correct location, so every letter in your text
                      displays correctly, every time.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      A note on screen readers and accessibility
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                      Regular bold letters, made with a formatting instruction, gets
                      announced as bold, with a small change in tone. Bold Unicode
                      text gets read out letter by letter instead, as something like
                      mathematical bold capital B, which does not sound like a real
                      word at all.
                    </p>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Because of this, bold font generator work best for short
                      phrases, headlines, or usernames, not for long paragraphs that
                      someone needs to hear read aloud. Plain thick formatting stays
                      the more accessible choice for any text that carries important
                      information.
                    </p>
                  </div>
                </div>
              </article>

              {/* Bold Font Styles, Explained */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Bold Font Styles, Explained
                </h2>
                <Image
                  src="/images/bold-font-generator/nine-bold-font-styles-comparison-chart.webp"
                  alt="Comparison chart of nine Unicode bold font styles showing Bold Serif, Bold Sans, Bold Italic, Bold Script, Bold Fraktur, Double-Struck, Negative Circled, and Negative Squared applied to the same sample text"
                  width={1024}
                  height={1536}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Each style on this page has its own story. Here is where nine of
                  the most popular ones come from, and why they look the way they
                  do.
                </p>
                <div className="space-y-8">
                  {boldStyles.map((style) => (
                    <div key={style.name}>
                      <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">
                        {style.name}
                      </h3>
                      <p className="text-on-surface-variant leading-relaxed text-lg">
                        {style.description}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              {/* Bold Font Not Working? */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Bold Font Not Working?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  If your bold font stops working somewhere, it usually comes down
                  to one of two causes.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Why some platforms silently turn your bold text back to plain text
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                      Some platforms run a step called Unicode normalization before
                      saving or displaying your text. This step quietly turns bold
                      Unicode letters back into plain letters without telling you.
                      We tested this directly. Our own Bold Sans version of the word
                      Bold becomes plain Bold once this step runs.
                    </p>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      This is the real, technical reason bold style sometimes does
                      not work on a specific site, even though it worked perfectly
                      on the page where you copied it. The platform is changing your
                      text on its own side, not failing to display it.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Why a letter shows as a box or question mark instead
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      This is a separate problem from the one above. Some older
                      phones and apps simply do not have the visual design needed to
                      show a specific Unicode character. The character is correct.
                      The device just cannot draw it.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      What to do if a platform strips your bold style
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      If your text turns plain after pasting, the platform likely
                      normalized it, and there is no fix on your side. If you see
                      boxes or question marks instead, switch to Bold Serif or Bold
                      Sans, since these two styles have the widest support across
                      every device.
                    </p>
                  </div>
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
            Want more than bold text? Check out these generators for letters,
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
                  { label: "Cursive Fonts", href: "/cursive-fonts", icon: "\u270D\uFE0F", desc: "Flowing handwritten text" },
                  { label: "Fancy Fonts", href: "/fancy-fonts", icon: "\uD83D\uDC51", desc: "Decorative text art" },
                  { label: "Serif Fonts", href: "/serif-fonts", icon: "\uD83C\uDD70\uFE0F", desc: "Classic serif letters" },
                  { label: "Sans Serif Fonts", href: "/sans-serif-fonts", icon: "\uD83D\uDD24", desc: "Clean modern text" },
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
                  { label: "Stylish Font Generator", href: "/stylish-fonts", icon: "\uD83D\uDC8E", desc: "Premium text styles" },
                  { label: "Number Font Generator", href: "/number-font-generator", icon: "\uD83D\uDD22", desc: "Stylish number fonts" },
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

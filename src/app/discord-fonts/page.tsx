import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import DiscordFontGenerator from "../components/DiscordFontGenerator";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { getTotalFontStyleCount } from "../lib/fontCount";

export const metadata: Metadata = {
  title: { absolute: "Discord Fonts Generator | Copy Paste Discord Text Styles" },
  description:
    "Generate discord fonts for your display name, server, or bio in seconds. This free discord font generator has 12 discord text styles, ready to copy and paste.",
  alternates: {
    canonical: "https://www.aestheticletters.com/discord-fonts",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/discord-fonts",
    title: "Discord Fonts Generator | Copy Paste Discord Text Styles",
    description:
      "Generate discord fonts for your display name, server, or bio in seconds. This free discord font generator has 12 discord text styles, ready to copy and paste.",
    images: [{ url: "https://www.aestheticletters.com/images/discord-fonts/discord-fonts-og.webp", width: 1200, height: 640 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discord Fonts Generator | Copy Paste Discord Text Styles",
    description:
      "Generate discord fonts for your display name, server, or bio in seconds. This free discord font generator has 12 discord text styles, ready to copy and paste.",
    images: ["https://www.aestheticletters.com/images/discord-fonts/discord-fonts-og.webp"],
  },
};

const faqs = [
  {
    question: "Do discord fonts work in usernames?",
    answer:
      "No, usernames are locked down to lowercase letters, numbers, periods, and underscores, with no exceptions. If you want the styled look, your display name is the field that actually supports it.",
  },
  {
    question: "What font does Discord use by default?",
    answer:
      "Discord uses gg sans for its app interface and chat text. This replaced an older font called Whitney in December 2022.",
  },
  {
    question: "Do discord fonts work on mobile?",
    answer:
      "Yes. Since these are Unicode characters and not installed fonts, they display the same way on Discord desktop, web, iOS, and Android.",
  },
  {
    question: "Why do some discord text styles show as boxes?",
    answer:
      "This usually means a device or app is missing support for that specific Unicode character. Some styles also skip certain letters due to gaps inside the Unicode standard itself.",
  },
  {
    question: "Is using stylized letters against Discord\u2019s rules?",
    answer:
      "No. Nothing about this involves tricking Discord or exploiting a bug; you\u2019re just sending characters that have existed in Unicode for years, the same way emoji or accented letters do. Discord renders them like any other text.",
  },
  {
    question: "What is the difference between a username and a display name?",
    answer:
      "Your username is a fixed, lowercase handle used to add friends. Your display name is what people actually see in chats, and it supports full styling.",
  },
  {
    question: "Do I need Discord Nitro to use these fonts?",
    answer:
      "No. Discord fonts are free Unicode text, available to every account type. Nitro adds separate features, but it has no effect on Unicode styling.",
  },
  {
    question: "How do I make small font discord text?",
    answer:
      "Use a style built from small or subscript style Unicode characters. Type your text into the generator above, then copy the small sized style you prefer.",
  },
];



export default function DiscordFontsPage() {
  const totalFontStyles = getTotalFontStyleCount();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/discord-fonts#software",
        name: "Discord Font Generator",
        operatingSystem: "Any",
        applicationCategory: "UtilitiesApplication",
        browserRequirements: "requires HTML5 support",
        url: "https://www.aestheticletters.com/discord-fonts",
        image: "https://www.aestheticletters.com/images/discord-fonts/discord-fonts-og.webp",
        description:
          "Generate discord fonts for your display name, server, or bio in seconds. This free discord font generator has 12 discord text styles, ready to copy and paste.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/discord-fonts#webpage",
        url: "https://www.aestheticletters.com/discord-fonts",
        name: "Discord Fonts Generator | Copy Paste Discord Text Styles",
        description:
          "Generate discord fonts for your display name, server, or bio in seconds. This free discord font generator has 12 discord text styles, ready to copy and paste.",
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-06-29T08:00:00+00:00",
        dateModified: "2026-06-29T07:11:00+00:00",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", ".text-on-surface-variant"],
        },
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/discord-fonts#breadcrumb",
        },
        mainEntity: {
          "@id": "https://www.aestheticletters.com/discord-fonts#software",
        },
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/discord-fonts#image-where-they-work",
        url: "https://www.aestheticletters.com/images/discord-fonts/discord-fonts-where-they-work.webp",
        contentUrl: "https://www.aestheticletters.com/images/discord-fonts/discord-fonts-where-they-work.webp",
        width: 1200,
        height: 672,
        caption: "Discord interface showing where Unicode fonts work — display names, server names, categories, roles, and bios support styled text while usernames and channel names do not",
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/discord-fonts#image-boxes-fix",
        url: "https://www.aestheticletters.com/images/discord-fonts/discord-fonts-boxes-fix.webp",
        contentUrl: "https://www.aestheticletters.com/images/discord-fonts/discord-fonts-boxes-fix.webp",
        width: 1200,
        height: 672,
        caption: "Comparison showing Discord fonts rendering correctly on desktop but appearing as empty boxes on mobile, with a tip that Small Caps and Bold styles work on all devices",
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/discord-fonts#image-how-to-use",
        url: "https://www.aestheticletters.com/images/discord-fonts/discord-fonts-how-to-use.webp",
        contentUrl: "https://www.aestheticletters.com/images/discord-fonts/discord-fonts-how-to-use.webp",
        width: 1200,
        height: 672,
        caption: "5-step guide showing how to use Discord fonts: type your text, pick a style, click copy, open Discord, and paste to send your styled message",
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/discord-fonts#image-server-styles",
        url: "https://www.aestheticletters.com/images/discord-fonts/discord-fonts-server-styles.webp",
        contentUrl: "https://www.aestheticletters.com/images/discord-fonts/discord-fonts-server-styles.webp",
        width: 1200,
        height: 672,
        caption: "Six Discord server examples showing the best font style for each type: Gothic for Gaming, Script for Art, Monospace for Tech, Script with Korean brackets for K-pop, Small Caps for Community, and Zalgo for Horror servers",
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/discord-fonts#breadcrumb",
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
            name: "Discord Fonts",
            item: "https://www.aestheticletters.com/discord-fonts",
          },
        ],
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use Discord Fonts",
    description:
      "Using a discord font styles your name or server without any app, plugin, or Nitro subscription.",
    totalTime: "PT1M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Display name",
        text: "Type your text into the generator above and pick a style. Copy it, then open Discord and go to User Settings, then My Account, then Profiles. Paste your styled text into the Display Name field and save.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Your nickname in one server",
        text: "Find your name in the member list, click it, and look for the option to edit your server profile. This only changes how you appear in that specific server, your global username stays the same everywhere else.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "The server\u2019s name",
        text: "This one\u2019s only available if you have admin access. Head into the server\u2019s settings and find the Overview tab, where the server name field is waiting to be updated.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "A role\u2019s name",
        text: "Also admin-only. Inside settings, the Roles tab lists every role in the server, picks the one you want to restyle and update its label. Useful for making mod or VIP roles visually pop in the member list.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Chat message",
        text: "Paste your styled discord fonts directly into the message box and send. No extra steps are needed, since message fields accept Unicode the same way display names do.",
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
            { label: "Discord Fonts", href: "/discord-fonts" },
          ]}
        />

        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            Discord Fonts &mdash; Free Copy and Paste
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            Create discord fonts in seconds with this free discord text
            generator. Copy and paste stylish discord text styles for your
            username, server name, role, channel, or bio.
          </p>
        </section>

        {/* Interactive Font Generator */}
        <DiscordFontGenerator totalFontStyles={totalFontStyles} />

        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* What Are Discord Fonts? */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  What Are Discord Fonts?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Discord fonts are not real font files. Discord cannot install a
                  new font on your device, and it never lets you upload one
                  either. What people call a discord text font is actually a set
                  of Unicode characters that already look bold, gothic, or
                  circled on their own.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Unicode is a public list of characters used by every phone,
                  computer, and app. Most letters you type every day sit inside
                  this list. Unicode also holds thousands of extra characters
                  built to look like styled letters. A discord font changer
                  simply swaps your normal letters for these lookalike characters.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  This is why a discord text generator works without any download
                  or app. You are not changing a setting inside Discord. You are
                  pasting different characters that Discord could already display
                  before you ever opened this page.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Because Unicode is a free public standard, these discord
                  letters belong to no one. They can be copied, pasted, and
                  reused anywhere text is allowed, including the same styles
                  already covered on our{" "}
                  <Link
                    href="/facebook-fonts"
                    className="text-primary underline underline-offset-4 hover:no-underline"
                  >
                    Facebook Font Generator
                  </Link>
                  , since both platforms read plain Unicode text the same way.
                </p>
              </article>

              {/* Where Discord Fonts Actually Work */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Where Discord Fonts Actually Work (and Where They Don&rsquo;t)
                </h2>
                <Image
                  src="/images/discord-fonts/discord-fonts-where-they-work.webp"
                  alt="Discord interface showing where Unicode fonts work — display names, server names, categories, roles, and bios support styled text while usernames and channel names do not"
                  width={1200}
                  height={672}
                  className="rounded-xl mb-8 w-full"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  You may have seen other sites say these styles work in your
                  username or channel name. They do not. Discord splits your
                  identity into separate fields, and each field follows its own
                  rules. Knowing the difference saves you a failed paste and a
                  confused friend.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Your Discord username is the @handle people use to add you as a
                  friend. It only accepts lowercase letters, numbers, periods,
                  and underscores. No styled discord fonts will ever work here,
                  no matter what tool you use. This is a Discord rule, not a
                  limit of this generator.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Your display name is different. It is the name people actually
                  see in chats and servers. It accepts almost any Unicode
                  character, including every style on this page and the broader
                  styles covered on our{" "}
                  <Link
                    href="/fancy-fonts"
                    className="text-primary underline underline-offset-4 hover:no-underline"
                  >
                    Fancy Text Generator
                  </Link>
                  . If you want a discord name font, this is the field to use.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Server nicknames work the same way as display names, but only
                  inside one server. Server names, role names, and your About Me
                  bio also accept full Unicode. Channel names are more limited,
                  since Discord forces lowercase letters and hyphens there.
                  Category names above your channels do accept full Unicode.
                </p>

                {/* Compatibility Table */}
                <div className="overflow-x-auto rounded-xl border border-outline-variant/20">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-surface-container-lowest">
                        <th className="px-6 py-4 font-headline font-bold text-on-surface">Field</th>
                        <th className="px-6 py-4 font-headline font-bold text-on-surface">Accepts Unicode fonts?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20">
                      <tr><td className="px-6 py-3 text-on-surface-variant">Username (@handle)</td><td className="px-6 py-3 text-on-surface-variant">No</td></tr>
                      <tr><td className="px-6 py-3 text-on-surface-variant">Display name</td><td className="px-6 py-3 text-on-surface-variant">Yes</td></tr>
                      <tr><td className="px-6 py-3 text-on-surface-variant">Server nickname</td><td className="px-6 py-3 text-on-surface-variant">Yes</td></tr>
                      <tr><td className="px-6 py-3 text-on-surface-variant">Server name</td><td className="px-6 py-3 text-on-surface-variant">Yes</td></tr>
                      <tr><td className="px-6 py-3 text-on-surface-variant">Category name</td><td className="px-6 py-3 text-on-surface-variant">Yes</td></tr>
                      <tr><td className="px-6 py-3 text-on-surface-variant">Channel name</td><td className="px-6 py-3 text-on-surface-variant">Mostly no</td></tr>
                      <tr><td className="px-6 py-3 text-on-surface-variant">Role name</td><td className="px-6 py-3 text-on-surface-variant">Yes</td></tr>
                      <tr><td className="px-6 py-3 text-on-surface-variant">About Me / bio</td><td className="px-6 py-3 text-on-surface-variant">Yes</td></tr>
                      <tr><td className="px-6 py-3 text-on-surface-variant">Chat message</td><td className="px-6 py-3 text-on-surface-variant">Yes</td></tr>
                    </tbody>
                  </table>
                </div>
              </article>

              {/* Discord Markdown vs. Unicode Fonts */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Discord Markdown vs. Unicode Fonts
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Discord text styles come from two different systems, and most
                  people only discover that when something doesn&rsquo;t work the
                  way they expected.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Discord Markdown is a built-in formatting system. You type
                  **bold** for bold, *italic* for italic, __underline__ for
                  underline, and ~~strike~~ for strikethrough. This only works
                  inside chat messages, the same field where{" "}
                  <Link
                    href="/cursive-fonts"
                    className="text-primary underline underline-offset-4 hover:no-underline"
                  >
                    Cursive Fonts
                  </Link>{" "}
                  styles already display correctly. It does nothing in your
                  username or server name.
                </p>

                {/* Markdown Table */}
                <div className="overflow-x-auto rounded-xl border border-outline-variant/20 mb-8">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-surface-container-lowest">
                        <th className="px-6 py-4 font-headline font-bold text-on-surface">What you want</th>
                        <th className="px-6 py-4 font-headline font-bold text-on-surface">Markdown syntax</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20">
                      <tr><td className="px-6 py-3 text-on-surface-variant">Bold</td><td className="px-6 py-3 text-on-surface-variant font-mono">**text**</td></tr>
                      <tr><td className="px-6 py-3 text-on-surface-variant">Italic</td><td className="px-6 py-3 text-on-surface-variant font-mono">*text*</td></tr>
                      <tr><td className="px-6 py-3 text-on-surface-variant">Underline</td><td className="px-6 py-3 text-on-surface-variant font-mono">__text__</td></tr>
                      <tr><td className="px-6 py-3 text-on-surface-variant">Strikethrough</td><td className="px-6 py-3 text-on-surface-variant font-mono">~~text~~</td></tr>
                      <tr><td className="px-6 py-3 text-on-surface-variant">Spoiler</td><td className="px-6 py-3 text-on-surface-variant font-mono">||text||</td></tr>
                      <tr><td className="px-6 py-3 text-on-surface-variant">Inline code</td><td className="px-6 py-3 text-on-surface-variant font-mono">`text`</td></tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  One detail almost no other site explains. Discord also supports
                  masked links, written as [label](url). These hide a long link
                  behind short text. But masked links only render inside bot
                  messages, embeds, and webhooks. If you type one yourself in a
                  normal chat message, Discord shows it as plain text, brackets
                  and all.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Unicode fonts solve a different problem. They work in every
                  field Markdown cannot reach, including your display name,
                  server name, and bio. This generator builds discord font styles
                  using Unicode characters, so you get styling in the exact
                  places Markdown was never designed to touch.
                </p>
              </article>

              {/* Why Do Some Discord Fonts Show as Boxes */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Why Do Some Discord Fonts Show as Boxes or Missing Letters?
                </h2>
                <Image
                  src="/images/discord-fonts/discord-fonts-boxes-fix.webp"
                  alt="Comparison showing Discord fonts rendering correctly on desktop but appearing as empty boxes on mobile, with a tip that Small Caps and Bold styles work on all devices"
                  width={1200}
                  height={672}
                  className="rounded-xl mb-8 w-full"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  If a pasted style suddenly drops a letter or shows a small box,
                  it is not a glitch in this tool. It comes from a real gap
                  inside the Unicode standard itself.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  When Unicode built its set of styled math letters, it found
                  that 24 of them already existed somewhere else, inside an older
                  block called Letterlike Symbols. Rather than create duplicate
                  characters, Unicode left those 24 spots empty and pointed back
                  to the older versions instead.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The italic lowercase h is one example. There is no italic h
                  inside the main styled block. The real character lives at a
                  different Unicode address, reserved years earlier for the
                  science symbol for the Planck constant. A few script capital
                  letters follow the same pattern.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  This generator accounts for these gaps, so your discord fonts
                  stay complete. Many free tools online skip this step, which is
                  why some text styles look broken on certain letters but fine on
                  others. A related issue, where bold Unicode reverts to plain
                  text, is covered on our{" "}
                  <Link
                    href="/bold-font-generator"
                    className="text-primary underline underline-offset-4 hover:no-underline"
                  >
                    Bold Text Generator
                  </Link>
                  .
                </p>
              </article>

              {/* 12 Discord Font Styles */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  12 Discord Font Styles to Copy and Paste
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  This discord font generator gives you 12 discord text styles
                  built for real Discord use, from bold headers to bot command
                  lists. Type your text once, then scroll through the cards above
                  to compare every style side by side. Each one is ready to copy
                  and paste.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Bold Discord works best for announcements and category headers,
                  where you want a line to stand out instantly. Gamer Gothic and
                  Heavy Gothic both suit roleplay and fantasy servers, with Heavy
                  Gothic carrying more visual weight. Server Outline gives server
                  names a clean, structured look, though a few uppercase letters
                  need special handling.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Discord Script fits art, study, and chill community servers
                  that want a softer feel. Mono Tag suits bot command lists,
                  since every letter shares the same width. Tiny Caps keeps role
                  names subtle and easy to read, building on the same small caps
                  style covered on our{" "}
                  <Link
                    href="/serif-fonts"
                    className="text-primary underline underline-offset-4 hover:no-underline"
                  >
                    Serif Fonts
                  </Link>{" "}
                  page.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Bubble Tag works well for voice channel names, while Boxed Tag
                  matches the sharp, tactical look many competitive and FPS clans
                  prefer. Wide Tag spaces out a server name for a banner style
                  look. Flipped Tag and Glitch Tag round out the set for playful
                  or cursed text moments.
                </p>
              </article>

              {/* How to Use Discord Fonts */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Use Discord Fonts?
                </h2>
                <Image
                  src="/images/discord-fonts/discord-fonts-how-to-use.webp"
                  alt="5-step guide showing how to use Discord fonts: type your text, pick a style like Gothic Bold or Script, click copy, open Discord, and paste to send your styled message"
                  width={1200}
                  height={672}
                  className="rounded-xl mb-8 w-full"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Using a discord font styles your name or server without any
                  app, plugin, or Nitro subscription. The steps below cover the
                  most common fields people ask about.
                </p>
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Display name",
                      description:
                        "Type your text into the generator above and pick a style. Copy it, then open Discord and go to User Settings, then My Account, then Profiles. Paste your styled text into the Display Name field and save.",
                    },
                    {
                      step: 2,
                      title: "Your nickname in one server",
                      description:
                        "Find your name in the member list, click it, and look for the option to edit your server profile. This only changes how you appear in that specific server, your global username stays the same everywhere else.",
                    },
                    {
                      step: 3,
                      title: "The server\u2019s name",
                      description:
                        "This one\u2019s only available if you have admin access. Head into the server\u2019s settings and find the Overview tab, where the server name field is waiting to be updated.",
                    },
                    {
                      step: 4,
                      title: "A role\u2019s name",
                      description:
                        "Also admin-only. Inside settings, the Roles tab lists every role in the server, picks the one you want to restyle and update its label. Useful for making mod or VIP roles visually pop in the member list.",
                    },
                    {
                      step: 5,
                      title: "Chat message",
                      description:
                        "Paste your styled discord fonts directly into the message box and send. No extra steps are needed, since message fields accept Unicode the same way display names do.",
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

              {/* Best Discord Font Styles by Server Type */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Best Discord Font Styles by Server Type
                </h2>
                <Image
                  src="/images/discord-fonts/discord-fonts-server-styles.webp"
                  alt="Six Discord server examples showing the best font style for each type: Gothic for Gaming, Script for Art, Monospace for Tech, Script with Korean brackets for K-pop, Small Caps for Community, and Zalgo for Horror servers"
                  width={1200}
                  height={672}
                  className="rounded-xl mb-8 w-full"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Different servers benefit from different discord text styles,
                  based on how members read and scan text inside that community.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Gaming and competitive servers
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Gaming and competitive servers often lean on Bold Discord
                      and Boxed Tag. These styles feel sharp and structured,
                      matching the fast pace of clan chats, the same energy
                      covered on our{" "}
                      <Link
                        href="/stylish-fonts"
                        className="text-primary underline underline-offset-4 hover:no-underline"
                      >
                        Stylish Text Generator
                      </Link>
                      . Many FPS and esports communities favor this look for
                      display names and channel categories.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Roleplay and fantasy servers
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Roleplay and fantasy servers suit Gamer Gothic or Heavy
                      Gothic. The blackletter look is tied to medieval and
                      fantasy writing, so it sets a tone before a member reads a
                      single word. Many tabletop and lore heavy servers use this
                      style for channel categories.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Aesthetic and chill servers
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Aesthetic and chill servers tend to favor Discord Script or
                      Wide Tag. These styles feel calmer and less aggressive,
                      which fits art, study, and music communities, similar to
                      the soft and welcoming styles on our{" "}
                      <Link
                        href="/cute-fonts"
                        className="text-primary underline underline-offset-4 hover:no-underline"
                      >
                        Cute Fonts
                      </Link>{" "}
                      page. A softer style can make a server feel more welcoming
                      to new members.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                      Professional and developer servers
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      Professional and developer servers usually do better with a
                      clean style like Bold Discord or Mono Tag, since both stay
                      highly readable. Heavily decorated styles can slow down
                      reading in a server built around fast technical chat and
                      bot commands.
                    </p>
                  </div>
                </div>
              </article>

              {/* What Font Does Discord Use? */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  What Font Does Discord Use?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Discord&rsquo;s app interface, including chat text, menus, and
                  buttons, uses a custom typeface called gg sans. Discord rolled
                  this out in December 2022, replacing an older licensed font
                  called Whitney.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  A separate typeface called Ginto Discord exists too, but it is
                  only used for Discord&rsquo;s logo and marketing materials, not
                  the app itself. The two are easy to mix up, since both come
                  from the same brand refresh.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Neither font matters for discord fonts copy and paste tools
                  like this one. Your styled text is not a font setting. It is a
                  string of Unicode characters that displays inside gg sans the
                  same way any other text does.
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
            Want more than discord fonts? Check out these generators for letters,
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
                  { label: "Aesthetic Letters", href: "/", icon: "\u2728", desc: "All font generators" },
                  { label: "Fancy Fonts", href: "/fancy-fonts", icon: "\uD83D\uDC51", desc: "Decorative text art" },
                  { label: "Stylish Fonts", href: "/stylish-fonts", icon: "\uD83D\uDC8E", desc: "Premium text styles" },
                  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDDA4", desc: "Heavy bold text" },
                  { label: "Cursive Fonts", href: "/cursive-fonts", icon: "\u270D\uFE0F", desc: "Flowing handwritten text" },
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
                  { label: "Pretty Font Generator", href: "/cute-fonts", icon: "\uD83C\uDF38", desc: "Kawaii aesthetic text" },
                  { label: "Halloween Font Generator", href: "/halloween-fonts", icon: "\uD83C\uDF83", desc: "Spooky & glitch text" },
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

import type { Metadata } from "next";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import FAQAccordion from "../components/FAQAccordion";
import Sidebar from "../components/Sidebar";
import HalloweenFontsClient from "./HalloweenFontsClient";

export const metadata: Metadata = {
  title: { absolute: "Halloween Fonts - Copy & Paste (90+ Spooky & Creepy Styles)" },
  description:
    "Generate spooky Halloween fonts and copy-paste them instantly to Instagram, TikTok, and anywhere else. 90+ styles including Gothic, cursed, and drip text.",
  alternates: {
    canonical: "https://www.aestheticletters.com/halloween-fonts",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "website",
    url: "https://www.aestheticletters.com/halloween-fonts",
    title: "Halloween Fonts - Copy & Paste (90+ Spooky & Creepy Styles)",
    description:
      "Generate spooky Halloween fonts and copy-paste them instantly to Instagram, TikTok, and anywhere else. 90+ styles including Gothic, cursed, and drip text.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halloween Fonts - Copy & Paste (90+ Spooky & Creepy Styles)",
    description:
      "Generate spooky Halloween fonts and copy-paste them instantly to Instagram, TikTok, and anywhere else. 90+ styles including Gothic, cursed, and drip text.",
    images: ["/og-image.jpg"],
  },
};

const faqs = [
  {
    question: "Do Halloween fonts work on Samsung Galaxy or older Android phones?",
    answer:
      "Modern Samsung devices (Android 8+) handle Unicode Halloween fonts without issues. The problem is Android 6 or older — decorative Unicode characters show as empty boxes on those devices. Stick to simpler styles like Ghost Whisper if your audience includes older phone users, and always test by sending the styled text to a second device before posting publicly.",
  },
  {
    question: "Which Halloween font is most readable on mobile screens?",
    answer:
      "Ghost Whisper and Moonlight Cursive are the safest choices — both stay legible at small screen sizes. Avoid Blood Drip and heavy blackletter styles like Graveyard Gothic for captions; their fine details merge into visual noise below 16px. Quick test: paste your styled text into your phone's notes app and read it at arm's length. If it takes more than two seconds, switch styles.",
  },
  {
    question: "Can I use these fonts commercially — on merchandise, Etsy listings, or client work?",
    answer:
      "Unicode copy-paste styles have no font license attached, so yes — use them freely in any commercial context. For downloaded font files, Google Fonts are covered by the Open Font License which permits commercial use including merchandise and client work at no extra cost. Paid fonts from Creative Market or DaFont vary by designer — always check the individual license page before selling anything using those files.",
  },
  {
    question: "Which games strip or block Unicode characters in usernames?",
    answer:
      "Discord and Steam support Unicode reliably. Roblox strips most Unicode entirely — styled usernames revert to plain text. Fortnite on PS5 and Xbox inherits console username limits with minimal Unicode support. Minecraft Java Edition is inconsistent depending on launcher and resource pack. Mobile games are the least reliable overall. Always test your styled username in the name field and check the preview before confirming.",
  },
  {
    question: "Can I use spooky fonts in Notion, Google Docs, or Microsoft Word?",
    answer:
      "Notion handles Unicode paste cleanly; it is the most reliable of the three. Google Docs works well on screen but always run a print preview before printing, as rendering can shift. Microsoft Word is the trickiest — autocorrect can silently replace unusual characters with plain letters. Fix this by pasting your text, then pressing Ctrl+Z once followed by Ctrl+Y, which locks the characters before autocorrect processes them.",
  },
  {
    question: "What is the best scary font for printed invitations or physical signage?",
    answer:
      "Never use Unicode copy-paste styles for print; they revert to plain text or boxes when processed by print software. Download a font file instead. For invitations, Nosifer and Butcherman both hold well at print resolution. For signage read from a distance, UnifrakturMaguntia has the strongest visual impact. One critical step: always embed fonts when exporting to PDF. In Canva, the PDF Print download option handles this automatically.",
  },
  {
    question: "What font does Spirit Halloween use?",
    answer:
      "Spirit Halloween uses a proprietary custom gothic typeface for its brand identity. The closest free alternatives are UnifrakturMaguntia for the gothic weight and Bleeding Cowboys (available on DaFont) for the condensed angular feel. The good news: UnifrakturMaguntia is available as an instant copy-paste style in this tool, so you can test how it looks in your content before deciding whether to download the file. For digital content and social media, the copy-paste version works perfectly. For print, merchandise, or vinyl cutting, download the .ttf from Google Fonts and use it in your design software.",
  },
];

const fontShowcaseStyles = [
  {
    name: "Creepster",
    description: "Rounded cartoon horror, great for kids' Halloween content and playful designs.",
    example: "Trick or Treat",
    bestFor: "Kids' Halloween content and party invitations.",
    fontFamily: "'Creepster', display",
  },
  {
    name: "Nosifer",
    description: "Dripping horror lettering — the go-to drip halloween font for party posters and social graphics.",
    example: "Blood Moon",
    bestFor: "Party posters and horror social media.",
    fontFamily: "'Nosifer', display",
  },
  {
    name: "Metal Mania",
    description: "Sharp, heavy metal-inspired — ideal for gaming channels and dark branding.",
    example: "Dark Throne",
    bestFor: "Gaming channels and metal aesthetics.",
    fontFamily: "'Metal Mania', display",
  },
  {
    name: "UnifrakturMaguntia",
    description: "Authentic gothic blackletter — premium choice for graveyard and gothic themes.",
    example: "Gothic Night",
    bestFor: "Gothic themes and Spirit Halloween-inspired designs.",
    fontFamily: "'UnifrakturMaguntia', display",
  },
  {
    name: "Butcherman",
    description: "Distressed fairground horror — stands out on event banners and merchandise.",
    example: "Haunted Fair",
    bestFor: "Event banners and merchandise.",
    fontFamily: "'Butcherman', display",
  },
  {
    name: "Henny Penny",
    description: "Playful storybook spooky — works beautifully for happy halloween font contexts like school projects.",
    example: "Happy Halloween",
    bestFor: "School projects and family events.",
    fontFamily: "'Henny Penny', display",
  },
  {
    name: "Graveyard Gothic",
    description: "Heavy blackletter inspired by cemetery headstones and haunted castles. Best for horror branding.",
    example: "\uD835\uDD8E\uD835\uDD97\uD835\uDD8A\uD835\uDD9B\uD835\uDD8A\uD835\uDD9E\uD835\uDD86\uD835\uDD97\uD835\uDD89 \uD835\uDD8C\uD835\uDD94\uD835\uDD99\uD835\uDD8D\uD835\uDD8E\uD835\uDD88",
    bestFor: "Horror branding and dark thumbnails.",
  },
  {
    name: "Ghost Whisper",
    description: "Soft faded lettering with a floating quality. Clean and readable while still feeling seasonal.",
    example: "\uD83D\uDC7B \uD835\uDD38\uD835\uDD56\uD835\uDD64\uD835\uDD65\uD835\uDD59\uD835\uDD56\uD835\uDD65\uD835\uDD5A\uD835\uDD54 \uD835\uDD43\uD835\uDD56\uD835\uDD65\uD835\uDD65\uD835\uDD56\uD835\uDD63\uD835\uDD64 \uD83D\uDC7B",
    bestFor: "Instagram captions and bios.",
  },
  {
    name: "Moonlight Cursive",
    description: "Smooth flowing script with a nighttime mystery feeling. A top pick for Halloween wedding invitations and stylish bios.",
    example: "Moonlight",
    bestFor: "Wedding invitations and stylish Instagram bios.",
    fontFamily: "'Meddon', cursive",
  },
  {
    name: "Blood Drip",
    description: "The most iconic horror font copy-paste style. Letters appear to drip like blood from a horror film.",
    example: "Nightmare",
    bestFor: "Halloween party invites and scary social posts.",
    fontFamily: "'Nosifer', display",
  },
];

const useCaseTable = [
  { useCase: "Instagram bio or caption", style: "Ghost Whisper, Cursed Script" },
  { useCase: "TikTok username or caption", style: "Blood Drip, Bat Wing, Glitch Decay" },
  { useCase: "Discord server or username", style: "Skull Gothic, Glitch Decay, Dark Ritual" },
  { useCase: "YouTube thumbnail", style: "Nosifer (download), Metal Mania (download)" },
  { useCase: "Halloween party invitation", style: "Nosifer, Butcherman, Blood Drip" },
  { useCase: "School project", style: "Creepster, Henny Penny, Pumpkin Hollow" },
  { useCase: "Cricut craft / vinyl", style: "Metal Mania, Butcherman, UnifrakturMaguntia" },
  { useCase: "Horror branding / merch", style: "UnifrakturMaguntia, Dark Ritual" },
  { useCase: "Family-friendly event", style: "Henny Penny, Pumpkin Hollow, Ghost Whisper" },
  { useCase: "Gaming channel identity", style: "Metal Mania, Skull Gothic, Glitch Decay" },
];

const symbolsTable = [
  { symbol: "☠️  Skull and crossbones", use: "Usernames, gaming profiles, horror bios" },
  { symbol: "🎃  Jack-o'-lantern", use: "Festive captions, seasonal announcements" },
  { symbol: "👻  Ghost", use: "Playful Halloween content, friendly spooky vibes" },
  { symbol: "🕸️  Spider web", use: "Atmospheric background decoration in text" },
  { symbol: "🦇  Bat", use: "Halloween night-themed content and bios" },
  { symbol: "🔮  Crystal ball", use: "Witch and mystical themed content" },
  { symbol: "⚰️  Coffin", use: "Dark humor, gothic aesthetic accounts" },
  { symbol: "🩸  Blood drop", use: "Horror themes, Blood Drip font pairing" },
  { symbol: "🌙  Crescent moon", use: "Cursed Script font pairing, night aesthetics" },
  { symbol: "⚡  Lightning bolt", use: "Glitch and digital horror styles" },
];

export default function HalloweenFontsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": "https://www.aestheticletters.com/halloween-fonts#software",
      name: "Halloween Fonts Generator",
      operatingSystem: "Any",
      applicationCategory: "UtilitiesApplication",
      browserRequirements: "requires HTML5 support",
      url: "https://www.aestheticletters.com/halloween-fonts",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.aestheticletters.com/halloween-fonts#webpage",
      url: "https://www.aestheticletters.com/halloween-fonts",
      name: "Halloween Fonts - Copy & Paste (90+ Spooky & Creepy Styles)",
      description:
        "Generate spooky Halloween fonts and copy-paste them instantly to Instagram, TikTok, and anywhere else. 90+ styles including Gothic, cursed, and drip text.",
      breadcrumb: {
        "@id": "https://www.aestheticletters.com/halloween-fonts#breadcrumb",
      },
      mainEntity: {
        "@id": "https://www.aestheticletters.com/halloween-fonts#software",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://www.aestheticletters.com/halloween-fonts#breadcrumb",
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
          name: "Halloween Fonts",
          item: "https://www.aestheticletters.com/halloween-fonts",
        },
      ],
    },
    {
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
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopNavBar />
      <main id="main-content" className="pt-[5.5rem]">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-24 pb-16 text-center">
          <h1 className="font-headline text-[3.5rem] md:text-6xl font-bold tracking-tight leading-tight text-on-background mb-6">
            Halloween Fonts &mdash; Copy &amp; Paste Spooky Text Styles
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-12 text-lg">
            Generate spooky Halloween fonts, creepy text styles, and scary copy-paste text instantly for Instagram,
            TikTok, Discord, gaming, and Halloween-themed designs.
          </p>
        </section>

        {/* Interactive Generator */}
        <HalloweenFontsClient />

        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* Intro */}
              <article>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Every October, millions of people search for ways to make their text look scarier, spookier, and
                  more cheerful. Whether you are designing a party invitation, customizing your Instagram bio, setting
                  up a Discord server, or creating a gaming username, the right halloween fonts can convert plain words
                  into something that genuinely feels like Halloween.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  This guide covers everything you need to know &mdash; from how creepy text generators actually work,
                  to the best font styles for every platform, to real font names you can use in Canva, Cricut, and
                  Google Fonts. By the end, you will be able to pick, generate, and use the perfect spooky text style
                  for any project.
                </p>
              </article>

              {/* What Are Halloween Fonts? */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  What Are Halloween Fonts?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  A halloween font is any decorative typeface or styled text designed to evoke the mood of Halloween
                  &mdash; think dripping blood, crumbling gothic stone, ghostly whispers, or jagged horror-movie lettering.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  These styles range from playfully spooky (perfect for school events and kids&apos; parties) to
                  genuinely unsettling (ideal for haunted house branding or horror content).
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  There are two distinct types worth understanding:
                </p>
                <div className="overflow-x-auto rounded-xl border border-outline-variant/20 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-container-lowest">
                        <th className="p-4 text-left font-headline font-bold text-on-background border-b border-outline-variant/20">Type</th>
                        <th className="p-4 text-left font-headline font-bold text-on-background border-b border-outline-variant/20">How It Works</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-surface-container-lowest hover:bg-surface-container-low/50 transition-colors">
                        <td className="p-4 font-medium text-on-background border-b border-outline-variant/10 align-top">Downloadable font files (.ttf / .otf)</td>
                        <td className="p-4 text-on-surface-variant border-b border-outline-variant/10 align-top">Real typefaces installed on your device or uploaded to design tools like Canva, Adobe Illustrator, or Cricut Design Space.</td>
                      </tr>
                      <tr className="bg-surface-container-lowest hover:bg-surface-container-low/50 transition-colors">
                        <td className="p-4 font-medium text-on-background border-b border-outline-variant/10 align-top">Unicode copy-paste text</td>
                        <td className="p-4 text-on-surface-variant border-b border-outline-variant/10 align-top">Styled characters generated from the Unicode standard, no installation needed. Works instantly on Instagram, TikTok, Discord, and most messaging apps.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Most people who search for <em>creepy halloween fonts copy and paste</em> are looking for the second
                  type &mdash; styled Unicode text, which can be dropped anywhere online without downloading anything.
                  That is exactly what a font converter produces.
                </p>
              </article>

              {/* How Does a Creepy Text Generator Work? */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How Does a Creepy Text Generator Work?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  A creepy font generator works by replacing your normal letters with Unicode characters that visually
                  look a lot like different font styles. Unicode is a universal text encoding standard that covers over
                  140,000 characters, including mathematical alphabets, ancient scripts, and decorative symbols that
                  happen to look like gothic, cursive, or horror-styled lettering.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  When you type a word into a spooky text generator, the tool swaps each letter for its Unicode
                  equivalent in a particular style. The result looks like a custom font but is actually just a string
                  of special characters &mdash; which is why it copies and pastes anywhere that supports Unicode text rendering.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Why does this matter? Because Unicode is supported natively by iOS, Android, Windows, macOS, and
                  virtually every major social platform. Your output will display correctly on Instagram, TikTok,
                  Discord, YouTube, WhatsApp, Telegram, Facebook, Twitter/X, and Twitch &mdash; without installing a
                  single font file.
                </p>
                <div className="mt-4 p-4 bg-primary-container/10 rounded-xl">
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    <strong>Note:</strong> Very lavish Unicode styles occasionally display as plain boxes on older
                    Android devices or niche platforms. If compatibility matters, test your chosen style on the target
                    platform first.
                  </p>
                </div>
              </article>

              {/* Popular Halloween Font Names */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Popular Halloween Font Names (Real Typefaces)
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Here is something most font guides will not tell you: many well-known Google Fonts are available as
                  instant copy-paste styles directly inside this generator &mdash; no download, no installation, no
                  design software required.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  You can try them right now and paste the result into Instagram, TikTok, Discord, or anywhere else in
                  seconds. These are among the most popular halloween font names, and for most users, the copy-paste
                  version from the generator will be all they ever need:
                </p>
                <div className="overflow-x-auto rounded-xl border border-outline-variant/20 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-container-lowest">
                        <th className="p-4 text-left font-headline font-bold text-on-background border-b border-outline-variant/20">Font Name</th>
                        <th className="p-4 text-left font-headline font-bold text-on-background border-b border-outline-variant/20">Style &amp; Best Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Creepster", desc: "Rounded cartoon horror, great for kids' Halloween content and playful designs" },
                        { name: "Nosifer", desc: "Dripping horror lettering, the go-to drip halloween font for party posters and social graphics" },
                        { name: "Eater", desc: "Scratchy, unsettling strokes — suits atmospheric horror storytelling" },
                        { name: "Metal Mania", desc: "Sharp, heavy metal-inspired — ideal for gaming channels and dark branding" },
                        { name: "UnifrakturMaguntia", desc: "Authentic gothic blackletter — premium choice for graveyard and gothic themes" },
                        { name: "Butcherman", desc: "Distressed fairground horror — stands out on event banners and merchandise" },
                        { name: "Henny Penny", desc: "Playful storybook spooky — works beautifully for happy halloween font contexts like school projects" },
                      ].map((font) => (
                        <tr key={font.name} className="bg-surface-container-lowest hover:bg-surface-container-low/50 transition-colors">
                          <td className="p-4 font-medium text-on-background border-b border-outline-variant/10 align-top">{font.name}</td>
                          <td className="p-4 text-on-surface-variant border-b border-outline-variant/10 align-top">{font.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  All of the above are available in this tool as free spooky fonts copy paste styles. Some of these
                  styles are also available as installable fonts on Google Fonts and can be imported into Canva using
                  the Brand Kit feature. These styles are also suitable for Cricut Design Space uploads.
                </p>
              </article>

              {/* Spirit Halloween Font */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Spirit Halloween Font &mdash; What Font Do They Use?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  One of the most searched font names in October is the Spirit Halloween font &mdash; the typical
                  lettering used by the iconic seasonal retail chain. Spirit Halloween uses a customized version of a
                  condensed gothic serif style, closely resembling fonts like Bleeding Cowboys or a modified Blackletter
                  with sharp angular serifs.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  While the exact brand text is proprietary, you can recreate a similar look using this tool:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "UnifrakturMaguntia (Google Fonts) — closest free match for the gothic weight",
                    "Nosifer — if you want the drip effect layered over a similar style",
                    "Metal Mania — for a slightly more modern, condensed interpretation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  If you are designing Spirit Halloween-inspired seasonal content, combining one of these with a dark
                  red or black color palette on a textured background gets very close to the original feel.
                </p>
              </article>

              {/* 90+ Halloween Font Styles Explained */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  90+ Halloween Font Styles Explained
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Different moods call for different spooky typography. Here is how to think about the major style
                  categories and which specific styles belong to each:
                </p>

                {/* Dark Horror Styles */}
                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Dark Horror Styles</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  These are the heavy, cinematic options that belong on horror movie posters, haunted house banners,
                  and anything meant to genuinely unsettle. Sharp edges, angular strokes, and aggressive forms define
                  this category.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { name: "Graveyard Gothic", desc: "heavy blackletter inspired by cemetery headstones and haunted castles. Best for horror branding, Halloween posters, and dark thumbnails." },
                    { name: "Skull Gothic", desc: "bold angular shapes with bone-like geometry. A strong choice for metal-style graphics and horror gaming channels." },
                    { name: "Dark Ritual", desc: "cinematic and dramatic, inspired by occult movie aesthetics. Ideal for horror storytelling and poster design." },
                    { name: "Blood Drip", desc: "the most iconic horror font copy paste style. Letters appear to drip like blood from a horror film. Best for Halloween party invites and scary social posts." },
                    { name: "Bat Wing", desc: "thin sharp lettering evoking vampire/bat imagery. Works especially well for TikTok usernames and gaming identities." },
                  ].map((s) => (
                    <li key={s.name} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                      <span><strong>{s.name}</strong> &mdash; {s.desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Mystical and Witch-Themed Styles */}
                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Mystical and Witch-Themed Styles</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  Less aggressive than horror styles, these lean into the magical and mysterious side of Halloween
                  &mdash; think witches, potions, moonlit forests, and ancient spells.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { name: "Cursed Script", desc: "elegant cursive with unsettling curves. Perfect for witch-themed content and aesthetic spooky bios." },
                    { name: "Witch Spell", desc: "blends fantasy and creepy elements with exotic character shapes. Great for fantasy usernames and magical communities." },
                    { name: "Moonlight Cursive", desc: "smooth flowing script with a nighttime mystery feeling. A top pick for Halloween wedding invitations and stylish Instagram bios." },
                  ].map((s) => (
                    <li key={s.name} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                      <span><strong>{s.name}</strong> &mdash; {s.desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Playful and Festive Styles */}
                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Playful and Festive Styles</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  Not every halloween font needs to be scary. These styles capture the fun, candy-and-costumes side of
                  the holiday &mdash; appropriate for families, schools, and brands that want seasonal cheer without the horror.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { name: "Pumpkin Hollow", desc: "inspired by jack-o'-lantern carvings. Playful and instantly recognizable as festive. Best for school projects and fun Halloween graphics." },
                    { name: "Ghost Whisper", desc: "soft faded lettering with a floating quality. Clean and readable while still feeling seasonal. Top choice for Instagram captions." },
                    { name: "Candy Corn Bounce", desc: "rounded bubbly shapes with a lighthearted feel. Ideal for kids' party content and happy halloween font contexts." },
                    { name: "Pumpkin Patch", desc: "warm and rounded, evoking autumn harvest vibes alongside Halloween. Works well for family event invitations." },
                  ].map((s) => (
                    <li key={s.name} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                      <span><strong>{s.name}</strong> &mdash; {s.desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Glitch and Digital Horror Styles */}
                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Glitch and Digital Horror Styles</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  These styles bring horror into a digital context &mdash; corruption, distortion, and glitch aesthetics
                  that feel unsettling in a contemporary way. Popular with gamers, streamers, and online creators.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { name: "Glitch Decay", desc: "text appears corrupted and digitally broken. A standout choice for Discord server names and gaming usernames." },
                    { name: "Static Horror", desc: "resembles distorted TV static overlaid on text. Perfect for YouTube thumbnails and horror gaming content." },
                    { name: "Corrupted Matrix", desc: "combines encryption-like characters with horror decay. Best for tech-horror aesthetics and streaming branding." },
                  ].map((s) => (
                    <li key={s.name} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                      <span><strong>{s.name}</strong> &mdash; {s.desc}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* How to Use Halloween Fonts on Every Major Platform */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Use Halloween Fonts on Every Major Platform
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  The three-step process is the same everywhere: generate your text, copy it, and paste it. But each
                  platform has gradations worth knowing.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Instagram</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Spooky fonts for Instagram bio sections and captions work best when they remain readable on a mobile
                  screen. Avoid extremely dense gothic styles for captions &mdash; they can reduce readability and hurt
                  engagement. Gothic and cursive styles work better in bios, where users are likely to slow down and
                  read carefully. For bio styling outside of Halloween season, our{" "}
                  <Link href="/instagram-fonts" className="text-primary underline underline-offset-4 hover:no-underline">
                    Instagram fonts generator
                  </Link>{" "}
                  offers styles specifically optimized for bios, captions, and highlight covers year-round.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">TikTok</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  A halloween text for TikTok performs best when it is bold and short. Since most viewers watch on small
                  screens, overly decorative text in captions becomes unreadable quickly. Ghost Whisper, Bat Wing, and
                  Blood Drip styles tend to work well because they retain character even at small sizes. Profile names
                  benefit from gothic or glitch styles that look distinctive in the feed.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Discord</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Gaming communities have embraced spooky fonts for Discord use more than almost any other platform.
                  Server names, role titles, channel headers, and usernames are all fair game. Skull Gothic and Glitch
                  Decay styles are community favorites. One important note: always test your chosen Unicode style inside
                  the app before finalizing it; some characters render differently in Discord&apos;s font stack compared
                  to mobile browsers.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">YouTube and Streaming</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  For Twitch and YouTube, copy-paste spooky text styles work well in channel descriptions, community
                  posts, about sections, and stream chat. For thumbnails and stream overlays, use the Google Fonts
                  styles from Aesthetic Letters as copy-paste text in thumbnail tools, or download the .ttf file for
                  full sizing and color control in Photoshop or Canva&apos;s advanced design mode.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">WhatsApp, Telegram, and Messaging Apps</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Spooky copy and paste text in messaging apps is purely for fun. All major messaging platforms support
                  Unicode, so any style from this generator will display correctly. Using a Ghost Whisper or Cursed
                  Script style in Halloween group chats adds a festive touch without overwhelming the conversation.
                </p>
              </article>

              {/* Spooky Symbols and Emojis */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Spooky Symbols and Emojis: Copy-Paste Cheat Sheet
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Combining halloween symbols with styled text is one of the most effective ways to make social content
                  stand out. Here are the most useful ones to bookmark:
                </p>
                <div className="overflow-x-auto rounded-xl border border-outline-variant/20 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-container-lowest">
                        <th className="p-4 text-left font-headline font-bold text-on-background border-b border-outline-variant/20">Symbol / Emoji</th>
                        <th className="p-4 text-left font-headline font-bold text-on-background border-b border-outline-variant/20">Best Use Context</th>
                      </tr>
                    </thead>
                    <tbody>
                      {symbolsTable.map((row) => (
                        <tr key={row.symbol} className="bg-surface-container-lowest hover:bg-surface-container-low/50 transition-colors">
                          <td className="p-4 font-medium text-on-background border-b border-outline-variant/10 align-top text-lg">{row.symbol}</td>
                          <td className="p-4 text-on-surface-variant border-b border-outline-variant/10 align-top">{row.use}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-primary-container/10 rounded-xl">
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    <strong>Pro Tip:</strong> Use no more than two symbols per caption or bio line. More than that,
                    the text starts to feel cluttered rather than creative. Let the font style do the heavy lifting,
                    and use symbols as accents.
                  </p>
                </div>
              </article>

              {/* Halloween Fonts in Canva */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Halloween Fonts in Canva: A Practical Workflow
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Canva is the tool most people reach for when creating Halloween graphics &mdash; and the good news
                  is that you have more options than most guides suggest, including Google Fonts as copy-paste, which
                  most people do not know about.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Step 1: Try Copy-Paste Styles First (Including Google Fonts)</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  Before you touch Canva&apos;s font upload feature, generate your halloween text from this tool. This
                  includes both Unicode styles and real Google Fonts available as instant copy-paste. Simply paste the
                  generated text directly into a Canva text box. This approach works excellently for:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Instagram Story overlays and Reel cover text",
                    "YouTube thumbnail headers",
                    "Party invitation titles and event graphics",
                    "Presentation slide headings",
                    "Social media post captions and quote cards",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Step 2: Download Only When You Need Advanced Design Control</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  There are specific situations where a downloaded .ttf font file genuinely gives you more than the
                  copy-paste version can &mdash; mainly when you need precise kerning control, custom stroke effects,
                  or colour gradients applied directly to letterforms. In those cases, download your chosen font
                  (Creepster, Nosifer, etc.) from Google Fonts as a .ttf file and upload it via Canva&apos;s Brand Kit.
                  But treat this as the step you take when the copy-paste version does not give you the design control
                  you need, not as the default starting point.
                </p>
              </article>

              {/* Creepy Fonts on Cricut */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Creepy Fonts on Cricut: What Actually Works
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Cricut users run into a specific challenge that most font guides skip over: Unicode copy-paste text
                  does not cut cleanly in Cricut Design Space. The Design Space application treats Unicode symbols as
                  individual image glyphs rather than editable font paths, which means you cannot resize them for
                  cutting without quality loss.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  Here is what works best by project type:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { name: "Vinyl stickers and window decals", desc: "Bold, high-contrast fonts like Metal Mania or Butcherman. Avoid thin serifs that lose detail when cut small." },
                    { name: "T-shirt heat transfer", desc: "Nosifer or Creepster at large sizes work excellently. Keep letter spacing slightly wider than default." },
                    { name: "Pumpkin labels and party banners", desc: "Henny Penny or Carved Pumpkin-inspired styles for festive, readable results." },
                    { name: "Mug and tumbler decals", desc: "Simple gothic styles at medium weight. Avoid Blood Drip styles for small decals since the drip detail disappears below about 0.5 inches." },
                  ].map((s) => (
                    <li key={s.name} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                      <span><strong>{s.name}</strong> &mdash; {s.desc}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  <strong>Recommended Cricut workflow:</strong> browse the Halloween font styles in this generator to
                  find the look you want, note the font name, then download that specific .ttf file from Google Fonts.
                  Install it on your computer and access it through Cricut Design Space&apos;s system fonts list.
                </p>
              </article>

              {/* Halloween Fonts for Different Use Cases */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Halloween Fonts for Different Use Cases
                </h2>
                <div className="overflow-x-auto rounded-xl border border-outline-variant/20 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-container-lowest">
                        <th className="p-4 text-left font-headline font-bold text-on-background border-b border-outline-variant/20">Use Case</th>
                        <th className="p-4 text-left font-headline font-bold text-on-background border-b border-outline-variant/20">Recommended Style / Font</th>
                      </tr>
                    </thead>
                    <tbody>
                      {useCaseTable.map((row) => (
                        <tr key={row.useCase} className="bg-surface-container-lowest hover:bg-surface-container-low/50 transition-colors">
                          <td className="p-4 font-medium text-on-background border-b border-outline-variant/10 align-top">{row.useCase}</td>
                          <td className="p-4 text-on-surface-variant border-b border-outline-variant/10 align-top">{row.style}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>

              {/* When NOT to Use Spooky Fonts */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  When NOT to Use Spooky Fonts
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Understanding when to hold back is just as important as knowing your options. Spooky typography
                  creates atmosphere, but it can also hurt clarity and credibility in the wrong context.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Avoid gothic or drip styles in body text — they are headline fonts only. Anything longer than a title or short tagline becomes unreadable.",
                    "Skip extreme horror styles for family audiences — a Blood Drip font on a school event flyer will alarm parents regardless of the content.",
                    "Do not use low-readability Unicode styles for accessibility sensitive content. Complex Unicode characters are often not read correctly by screen readers.",
                    "Resist using spooky fonts year-round for seasonal branding. The impact comes from context. A halloween font in July just looks like a design mistake.",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                      {tip}
                    </li>
                  ))}
                </ul>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  For fonts you can use confidently year-round without any seasonal context, our{" "}
                  <Link href="/fancy-fonts" className="text-primary underline underline-offset-4 hover:no-underline">
                    fancy fonts generator
                  </Link>{" "}
                  covers 120+ decorative styles that work across every occasion.
                </p>
              </article>

              {/* Top 10 Best Halloween Font Styles */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Top 10 Best Halloween Font Styles &mdash; Unicode &amp; Google Fonts Both
                </h2>
                <div className="space-y-6">
                  {fontShowcaseStyles.map((style, idx) => (
                    <div key={style.name} className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                      <h3 className="font-headline font-bold mb-2 text-xl">
                        {idx + 1}. {style.name}
                      </h3>
                      <p className="text-on-surface-variant text-sm mb-3">{style.description}</p>
                      <p className="text-lg mb-2 break-all">
                        Example:{" "}
                        <span style={style.fontFamily ? { fontFamily: style.fontFamily, fontSize: "1.25rem" } : undefined}>
                          {style.example}
                        </span>
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Best Use: {style.bestFor}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

            </div>

            {/* Sidebar */}
            <Sidebar
              useCasesHeading="Where Can You Use Halloween Fonts?"
              useCasesContent={
                <>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    Spooky text styles work on most apps and websites. They are especially popular during the
                    Halloween season for making profiles, captions, and usernames feel festive and creative.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                      <h3 className="font-headline font-bold mb-1 text-sm">Instagram &amp; TikTok</h3>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Gothic and cursive spooky fonts are widely used in bios, reels captions, and usernames.
                        Ghost Whisper and Blood Drip styles are favorites for seasonal content.
                      </p>
                    </div>
                    <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                      <h3 className="font-headline font-bold mb-1 text-sm">Discord &amp; Gaming</h3>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Gamers use spooky fonts for server names, role titles, and usernames. Skull Gothic and
                        Glitch Decay are community favorites for horror-themed gaming servers.
                      </p>
                    </div>
                    <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                      <h3 className="font-headline font-bold mb-1 text-sm">WhatsApp &amp; Messaging</h3>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        All major messaging platforms support Unicode. Using Cursed Script or Ghost Whisper in
                        Halloween group chats adds festive flair without overwhelming the conversation.
                      </p>
                    </div>
                    <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                      <h3 className="font-headline font-bold mb-1 text-sm">YouTube &amp; Streaming</h3>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Spooky text styles work great in channel descriptions, community posts, and stream chat.
                        For thumbnails, download the .ttf for full design control in Canva or Photoshop.
                      </p>
                    </div>
                  </div>
                </>
              }

              tipsHeading="05 Common Mistakes to Avoid with Halloween Fonts"
              tipsContent={
                <>
                  <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                    Using spooky text is fun, but avoid these common mistakes:
                  </p>
                  <ol className="space-y-4 text-sm leading-relaxed">
                    <li>
                      <strong>1. Too Many Styles:</strong> Mixing multiple horror styles in one caption makes text
                      look cluttered and confusing.
                    </li>
                    <li>
                      <strong>2. Hard-to-Read Styles:</strong> Heavy blackletter and zalgo text reduce engagement
                      when used in captions or bios.
                    </li>
                    <li>
                      <strong>3. Wrong Audience:</strong> Extreme horror fonts on family-friendly content can feel
                      inappropriate.
                    </li>
                    <li>
                      <strong>4. Platform Compatibility:</strong> Some Unicode styles render differently on Discord
                      vs mobile browsers. Always preview first.
                    </li>
                    <li>
                      <strong>5. Year-Round Usage:</strong> Halloween fonts in non-seasonal contexts look like a
                      design mistake rather than a creative choice.
                    </li>
                  </ol>
                  <div className="mt-6 p-4 bg-primary-container/10 rounded-xl">
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      <strong>Pro Tip:</strong> Use spooky styles for headlines and short text only. For body text,
                      stick to readable fonts and let the styled headlines create the Halloween atmosphere.
                    </p>
                  </div>
                </>
              }

              showBanner={false}
              showTips={true}
            />
          </div>
        </section>

        {/* Explore Trending Fonts Styles */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-16 pb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center leading-tight">
            Explore Trending Fonts Styles
          </h2>
          <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl editorial-shadow p-6 md:p-8">
            <ul className="flex flex-wrap justify-center gap-3 md:gap-4 list-none p-0 m-0">
              {[
                { label: "Aesthetic Fonts", href: "/" },
                { label: "Fancy Fonts", href: "/fancy-fonts" },
                { label: "Cursive Fonts", href: "/cursive-fonts" },
                { label: "Stylish Fonts", href: "/stylish-fonts" },
                { label: "Cute Fonts", href: "/cute-fonts" },
                { label: "Instagram Fonts", href: "/instagram-fonts" },
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import Sidebar from "../components/Sidebar";
import FacebookFontsClient from "./FacebookFontsClientLazy";

export const metadata: Metadata = {
  title: { absolute: "Facebook Fonts - Copy & Paste 40+ Styles & 150+ FB Symbols" },
  description:
    "Use our Facebook fonts generator to create unique text for posts, bios, and usernames. Copy & paste 40+ font styles and 150+ symbols. Free and works on mobile.",
  alternates: {
    canonical: "https://www.aestheticletters.com/facebook-fonts",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/facebook-fonts",
    title: "Facebook Fonts - Copy & Paste 40+ Styles & 150+ FB Symbols",
    description:
      "Use our Facebook fonts generator to create unique text for posts, bios, and usernames. Copy & paste 40+ font styles and 150+ symbols. Free and works on mobile.",
    images: [
      {
        url: "https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-og.webp",
        width: 1536,
        height: 800,
        alt: "Facebook Fonts Generator by Aesthetic Letters showing 40 plus Unicode text styles for posts bios comments and usernames",
      },
    ],
    publishedTime: "2026-05-23T08:00:00+00:00",
    modifiedTime: "2026-06-25T00:00:00+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Fonts - Copy & Paste 40+ Styles & 150+ FB Symbols",
    description:
      "Use our Facebook fonts generator to create unique text for posts, bios, and usernames. Copy & paste 40+ font styles and 150+ symbols. Free and works on mobile.",
    images: ["https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-og.webp"],
  },
};

const faqs = [
  {
    question: "Can I actually change the font on Facebook?",
    answer:
      "Facebook does not have a built-in font changer. There is no setting, no menu option, and no native way to change fonts in facebook posts or bios. This fb generator works by converting your text into Unicode characters which are special symbols that look like styled letters but are actually a different character set. That is the only working method to get formatted text on Facebook in 2026.",
  },
  {
    question: "How do I change the font in a Facebook post?",
    answer:
      "Type your text into the generator above, pick your preferred facebook font style, click Copy, then paste directly into your Facebook post box. The special characters travel with the text with no app or plugin needed on the reader's side.",
  },
  {
    question: "Do these Fb Fonts work on mobile?",
    answer:
      "Yes. This facebook font changer is fully mobile-optimized. The unicode characters display correctly on all modern smartphones. On very old Android devices (Android 7 or earlier) some styles may show as empty boxes; bold and sans-serif styles are the safest for maximum device compatibility.",
  },
  {
    question: "Will these styles work on Instagram, TikTok, and other platforms?",
    answer:
      "Yes. Because the text is Unicode, not a font file, it works on any platform that supports standard text input. Instagram bios, TikTok bios, Twitter/X, LinkedIn, Discord, Threads, and WhatsApp all support these characters. See the comparison section above for platform-specific notes.",
  },
  {
    question: "Are these Facebook Fonts free to use?",
    answer:
      "Completely free. No account, no subscription, no limit on how many times you copy and paste.",
  },
  {
    question: "Why do some styles show as boxes or question marks?",
    answer:
      "This happens when a device or operating system doesn't have the Unicode range required to render that character. It is a device limitation, not a problem with the text itself. Using bold or sans-serif styles avoids this issue on older devices.",
  },
  {
    question: "Can I use these fonts in Facebook Ads?",
    answer:
      "With caution. See the dedicated section above on Facebook Fonts That Work in Ads for the full breakdown. Short answer: subtle bold Unicode styles can work, heavy decorative styles will likely get your ad rejected.",
  },
];

const platformComparisonTable = [
  { surface: "Profile Bio", facebook: "Full support — all styles", instagram: "Full support — all styles", tiktok: "Full support — all styles" },
  { surface: "Posts / Captions", facebook: "Full support — all styles", instagram: "Works — use bold/semi-bold for safety", tiktok: "Not applicable — TikTok is video" },
  { surface: "Comments", facebook: "Yes — all styles", instagram: "Yes — all styles", tiktok: "Yes — all styles" },
  { surface: "Profile / Page Name", facebook: "Not allowed — policy violation", instagram: "Not allowed — policy violation", tiktok: "Not allowed — policy violation" },
  { surface: "Video / Story Text", facebook: "Not applicable", instagram: "Use native Instagram tools", tiktok: "Use native TikTok editor" },
  { surface: "Marketplace / Shop", facebook: "Description body only", instagram: "Shop descriptions — use carefully", tiktok: "Not available" },
  { surface: "Group / Community Name", facebook: "Yes", instagram: "Not applicable", tiktok: "Not applicable" },
  { surface: "Ads Copy", facebook: "Subtle styles only", instagram: "Subtle styles only", tiktok: "Subtle styles only" },
  { surface: "Best Styles to Use", facebook: "Bold, Script, Small Caps", instagram: "Bold, Script", tiktok: "Bold, Small Caps" },
  { surface: "Styles to Avoid", facebook: "Zalgo, heavy Fraktur in ads", instagram: "Heavy decorative in captions", tiktok: "Anything in video editor" },
];

const typographyHistory = [
  { period: "2004–2005", font: "Tahoma & Verdana", desc: "Standard system fonts. No custom typography. Facebook was a university project, nobody was thinking about typefaces." },
  { period: "2005–2015", font: "Klavika Bold", desc: "The distinctive Facebook logo typeface. Modified by design agency Cuban Council from the original Klavika typeface by Process Type Foundry. This is the font people most associate with \"classic Facebook.\"" },
  { period: "2015–2019", font: "Helvetica Neue & Segoe UI", desc: "As Facebook went mobile-first, they shifted to cleaner, lighter system fonts optimized for small screens." },
  { period: "2019–Present", font: "Facebook Sans", desc: "The first fully custom Facebook typeface. Built for global scale, multilingual support, and pixel-perfect screen rendering." },
  { period: "2021–Present", font: "Optimistic Display & Optimistic Text", desc: "When Facebook rebranded to Meta, Dalton Maag delivered two additional typefaces for the parent brand. Optimistic Display for headlines, Optimistic Text for body copy. These appear across Meta's brand communications but not in the Facebook app UI itself." },
];

export default function FacebookFontsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/facebook-fonts#webpage",
        url: "https://www.aestheticletters.com/facebook-fonts",
        name: "Facebook Fonts — Copy & Paste Unique Text Styles",
        headline: "Facebook Fonts - Copy & Paste 40+ Styles & 150+ FB Symbols",
        description:
          "Use our Facebook fonts generator to create unique text for posts, bios, and usernames. Copy & paste 40+ font styles and 150+ symbols. Free and works on mobile.",
        inLanguage: "en-US",
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/facebook-fonts#breadcrumb",
        },
        primaryImageOfPage: {
          "@id": "https://www.aestheticletters.com/facebook-fonts#image-what-are",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/facebook-fonts#software",
        name: "Facebook Fonts Generator",
        url: "https://www.aestheticletters.com/facebook-fonts",
        image: "https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-og.webp",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "All",
        browserRequirements: "Requires HTML5 support",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/facebook-fonts#image-what-are",
        url: "https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-what-are.webp",
        contentUrl: "https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-what-are.webp",
        width: 1200,
        height: 800,
        caption: "Plain text converted into Unicode characters and then displayed as styled text on Facebook, explaining what Facebook fonts are",
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/facebook-fonts#image-how-to-use",
        url: "https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-how-to-use.webp",
        contentUrl: "https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-how-to-use.webp",
        width: 1536,
        height: 1024,
        caption: "Three step process to use the Facebook fonts generator: type your text, pick a style, then paste the styled Unicode text into a Facebook post or bio",
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/facebook-fonts#image-where-they-work",
        url: "https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-where-they-work.webp",
        contentUrl: "https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-where-they-work.webp",
        width: 1200,
        height: 800,
        caption: "Facebook platform mockup showing where Unicode styled text works: posts, bio, comments, groups, pages, and marketplace listings",
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/facebook-fonts#image-styles-comparison",
        url: "https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-styles-comparison.webp",
        contentUrl: "https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-styles-comparison.webp",
        width: 1200,
        height: 1200,
        caption: "Comparison chart of ten Facebook font styles including Bold, Cursive, Gothic, Small Caps, Bubble, Fullwidth, Mono, Script, Fraktur, and Strikethrough",
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/facebook-fonts#image-before-after",
        url: "https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-before-after.webp",
        contentUrl: "https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-before-after.webp",
        width: 1536,
        height: 1024,
        caption: "Side by side comparison of a plain Facebook profile versus the same profile using styled Unicode fonts in the intro section",
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/facebook-fonts#image-for-businesses",
        url: "https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-for-businesses.webp",
        contentUrl: "https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-for-businesses.webp",
        width: 1200,
        height: 800,
        caption: "Facebook business use cases including local business pages, marketplace sellers, group announcements, and creator profiles using styled Unicode text",
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/facebook-fonts#breadcrumb",
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
            name: "Facebook Fonts",
            item: "https://www.aestheticletters.com/facebook-fonts",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.aestheticletters.com/facebook-fonts#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer.replace(/\n\n/g, " "),
          },
        })),
      },
      {
        "@type": "HowTo",
        "@id": "https://www.aestheticletters.com/facebook-fonts#howto",
        name: "How to Use This Facebook Font Generator",
        description:
          "Generate stylish Unicode text for Facebook posts, bios, and comments in three simple steps.",
        image: "https://www.aestheticletters.com/images/facebook-fonts/facebook-fonts-how-to-use.webp",
        totalTime: "PT1M",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Enter your text",
            text: "Type your word, sentence, or caption in the input box at the top of the page.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Pick a font style",
            text: "Browse through 40+ font styles that update instantly and pick the one you like.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Copy and paste",
            text: "Hit the Copy button, then paste the styled text directly into Facebook.",
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://www.aestheticletters.com/facebook-fonts#font-categories",
        name: "Facebook Font Style Categories",
        numberOfItems: 5,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Fonts for Posts",
            description: "Bold, italic, sans-serif, and decorated styles for Facebook posts and timeline updates.",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Comment Fonts",
            description: "Bubble, square, strikethrough, underline, and gothic styles for Facebook comments.",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "FB Bio Fonts",
            description: "Cursive, script, small caps, and monospace styles for Facebook bios and profiles.",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "FB Caption Fonts",
            description: "Fullwidth, small text, floral, and arrow styles for Facebook photo captions.",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Creative FB Fonts",
            description: "Bold script, gothic, upside down, mirror, and wide-spaced styles for creative Facebook posts.",
          },
        ],
      },
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
            { label: "Facebook Fonts", href: "/facebook-fonts" },
          ]}
        />
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            Facebook Fonts — Copy &amp; Paste Unique Text Styles
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            Facebook has no built-in font changer. This free Facebook Fonts Generator converts your text into 40+
            Unicode font styles and provides 150+ symbols you can copy and paste into Facebook posts, bios, comments,
            and usernames, or use separately in your text and profiles.
          </p>
        </section>

        {/* Interactive Generator */}
        <FacebookFontsClient />

        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">

              {/* What Are Facebook Fonts? */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  What Are Facebook Fonts?
                </h2>
                <Image
                  src="/images/facebook-fonts/facebook-fonts-what-are.webp"
                  alt="Plain text converted into Unicode characters and then displayed as styled text on Facebook, explaining what Facebook fonts are"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Facebook fonts are stylish text characters you can copy and paste directly into facebook with no app,
                  no settings, and no technical knowledge needed. Since facebook does not let you bold, italicize, or
                  style your text natively, this generator converts your plain words into Unicode characters that look
                  like different font styles but work inside any facebook text field.
                </p>
              </article>

              {/* Before & After: Facebook Fonts Make Your Profile Stand Out */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Before &amp; After: Facebook Fonts Make Your Profile Stand Out
                </h2>
                <Image
                  src="/images/facebook-fonts/facebook-fonts-before-after.webp"
                  alt="Side by side comparison of a plain Facebook profile versus the same profile using styled Unicode fonts in the intro section"
                  width={1536}
                  height={1024}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  The difference is immediate. A plain Facebook profile intro looks like every other profile. The same
                  intro with bold headings, cursive highlights, and small caps taglines looks intentional, memorable,
                  and designed. That is the real value of using Facebook fonts.
                </p>
              </article>

              {/* How to Use This Facebook Font Generator */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Use This Facebook Font Generator?
                </h2>
                <Image
                  src="/images/facebook-fonts/facebook-fonts-how-to-use.webp"
                  alt="Three step process to use the Facebook fonts generator: type your text, pick a style, then paste the styled Unicode text into a Facebook post or bio"
                  width={1536}
                  height={1024}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Enter any word, sentence, or caption. Every facebook font style updates instantly, no waiting,
                  no page reload. Scroll through 40+ styles, spot the one that fits, and hit Copy. Then open facebook
                  and paste it anywhere, like in your post, bio, comment, group name, or Marketplace listing.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Done in seconds. Nothing to sign up for. Nothing to install. Runs on any phone, tablet, or browser
                  without missing a beat.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  Three steps:
                </p>
                <div className="space-y-4 mb-6">
                  {[
                    { step: "1", text: "Type your word, sentence, or caption in the input box" },
                    { step: "2", text: "Browse through 40+ font styles and pick yours" },
                    { step: "3", text: "Hit Copy; then paste directly into Facebook" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3 text-on-surface-variant text-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center font-headline font-bold text-sm">
                        {item.step}
                      </div>
                      <span className="pt-1">{item.text}</span>
                    </div>
                  ))}
                </div>
              </article>

              {/* Where Can You Use Facebook Fonts? */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Where Can You Use Facebook Fonts?
                </h2>
                <Image
                  src="/images/facebook-fonts/facebook-fonts-where-they-work.webp"
                  alt="Facebook platform mockup showing where Unicode styled text works: posts, bio, comments, groups, pages, and marketplace listings"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Facebook has dozens of text fields across its platform and the good news is custom fonts work in most
                  of them. But not all and using them in the wrong place can get your text rejected or your ad flagged.
                  Here is exactly where they work, where they shine, and where to avoid them completely.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Where It Works</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  These are all the places on facebook where your text will paste and display perfectly:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { name: "Facebook Posts & Timeline", desc: "Style your status updates and timeline posts with bold headers, cursive captions, or decorative lettering. Styled text in the first line of a post stops people mid-scroll." },
                    { name: "Facebook Bio & Profile Intro", desc: "Visitors land on your bio before they read anything else on your profile. A clean cursive or bold fb font style makes your intro look designed, not default." },
                    { name: "Facebook Group Names & Descriptions", desc: "Styled group names stand out in search results and feel more established. Group descriptions with clear bold headings are easier to read and look more professional." },
                    { name: "Facebook Page About Section", desc: "Local businesses and brand pages use styled typography in their descriptions to look polished without hiring a designer." },
                    { name: "Facebook Marketplace Listings", desc: "Product descriptions with bold lettering get more attention in a list of identical plain-text listings. A styled product name looks more serious and trustworthy." },
                    { name: "Comments", desc: "Drop a bold or cursive comment under a viral post and your words stand apart from thousands of plain replies." },
                    { name: "Facebook Messenger", desc: "Yes, these characters paste into Messenger too. Great for highlighting in important conversations." },
                  ].map((s) => (
                    <li key={s.name} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <svg className="text-primary flex-shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      <span><strong>{s.name}</strong> — {s.desc}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Where It Doesn&apos;t Work</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  Knowing the limits saves you frustration:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { name: "Your Real Profile Name", desc: "Facebook enforces a real name policy. Symbols and Unicode characters in your actual name field will get flagged or rejected." },
                    { name: "Facebook Page Name", desc: "The same rule applies. Page names are reviewed against naming policies. Keep your page name plain." },
                    { name: "Facebook Ad Headlines", desc: "Facebook's ad system scans copy for policy violations. Heavy use of Unicode in ad headlines often triggers rejection. There is a separate section below specifically about fonts in ads." },
                    { name: "Marketplace Titles", desc: "Formatted characters in a listing title may not index properly in Facebook's internal search. Use plain text for the title, styled text for the description body." },
                  ].map((s) => (
                    <li key={s.name} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <svg className="text-primary flex-shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      <span><strong>{s.name}</strong> — {s.desc}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Font Style Guide */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Font Style Guide: Which Facebook Font Style Works Best for What?
                </h2>
                <Image
                  src="/images/facebook-fonts/facebook-fonts-styles-comparison.webp"
                  alt="Comparison chart of ten Facebook font styles including Bold, Cursive, Gothic, Small Caps, Bubble, Fullwidth, Mono, Script, Fraktur, and Strikethrough"
                  width={1200}
                  height={1200}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Not every font style fits every situation. Using a Gothic Fraktur font in a customer service reply
                  looks odd. Using plain bold text for a fun birthday post feels flat. Here is a straight guide to
                  matching facebook text style to the right use.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Bold Fonts — Posts, Announcements, CTAs</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  <strong>Best for:</strong> opening lines of long posts, event announcements, call-to-action text,
                  group rules, and Marketplace descriptions.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  <Link href="/bold-font-generator" className="text-primary underline underline-offset-4">Bold Unicode letters</Link>{" "}
                  carry weight without being decorative. They read clearly on every device
                  including older Android phones. If you only use one font style, use bold.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  <strong>Works great for:</strong> Business pages, group admins, Marketplace sellers, anyone who
                  writes long-form posts.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Cursive &amp; Script Fonts — Bios, Personal Profiles, Captions</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  <strong>Best for:</strong> profile bio, photo captions, personal posts, relationship announcements,
                  and creative page descriptions.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  Script and{" "}
                  <Link href="/cursive-fonts" className="text-primary underline underline-offset-4 hover:no-underline">
                    cursive fonts
                  </Link>{" "}
                  feel warm and personal. They signal personality and effort. On a profile bio they look styled without
                  looking aggressive.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  <strong>Works great for:</strong> Personal profiles, lifestyle creators, photographers, small
                  businesses with a personal brand.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Bubble &amp; Square Fonts — Fun Posts, Humor, Novelty</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  <strong>Best for:</strong> birthday posts, memes, casual updates, comment reactions, and anything
                  meant to be lighthearted.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  These characters are loud by design. Use them sparingly in one or two words, not full paragraphs.
                  A full paragraph in bubble text becomes hard to read fast.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  If you want something softer and more playful beyond bubble text, our <Link href="/cute-fonts" className="text-primary underline">cute fonts</Link> collection has rounded and decorative styles that work beautifully in personal posts, birthday messages, and lighthearted captions.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  <strong>Works great for:</strong> Entertainment pages, humor accounts, casual personal use.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Gothic &amp; Fraktur Fonts — Creative Pages, Creators, Branding</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  <strong>Best for:</strong> music pages, art accounts, alternative lifestyle brands, creative bios,
                  and niche community groups.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  Gothic and Fraktur typography carries a strong visual identity. It immediately signals a specific
                  aesthetic. If your brand or personality fits that world, these styles are powerful. If it
                  doesn&apos;t, they look out of place.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  <strong>Works great for:</strong> Musicians, artists, tattoo artists, alternative culture pages.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Small Caps &amp; Monospace — Clean, Minimal, Professional</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  <strong>Best for:</strong> professional bios, business page descriptions, clean aesthetic posts,
                  LinkedIn-crossover content.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  Small caps feel refined without being decorative. They style your text just enough to differentiate
                  it while keeping a professional tone.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  <strong>Works great for:</strong> Coaches, consultants, professional service businesses, personal
                  brands in formal industries.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  For dedicated holiday text with built-in snowflakes and trees, our{" "}
                  <Link href="/christmas-fonts" className="text-primary underline underline-offset-4 hover:no-underline">Christmas text generator</Link>{" "}
                  works perfectly in Facebook posts and comments during the festive season.
                </p>
              </article>

              {/* Facebook Fonts vs Instagram Fonts vs TikTok Fonts */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Facebook Fonts vs Instagram Fonts vs TikTok Fonts
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Same Unicode characters. Three completely different platforms. The results are not identical. Each
                  platform handles styled text differently knowing those differences saves you from pasting something
                  that looks broken, gets flagged, or quietly kills your reach.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Facebook</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Unicode creative text works across almost every facebook surface posts, bios, comments, Marketplace,
                  groups. The platform is the most flexible of the three for styled typography. Bold and semi-bold
                  styles perform best for posts. Script styles work well for bios and captions.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Instagram</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Instagram bio supports Unicode fonts fully and this is where <Link href="/instagram-fonts" className="text-primary underline">Instagram fonts</Link> first went mainstream on social media. However, Instagram
                  captions technically support Unicode but the algorithm behavior is different. Some creators report
                  that heavy Unicode use in captions slightly reduces reach. Bold and simple styles are safest. Avoid
                  Zalgo or heavily decorated styles in captions.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">TikTok</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  TikTok&apos;s bio field supports Unicode fonts. Comments support it too. However TikTok has its own
                  native text tool for video overlays that uses actual fonts, not Unicode. So on TikTok there are two
                  separate systems: Unicode for bio and comments, native text editor for video. Don&apos;t confuse them.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">The Quick Comparison</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Here is the full breakdown of how unicode characters perform across all three platforms in every
                  major surface:
                </p>
                <div className="overflow-x-auto rounded-xl border border-outline-variant/20 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-container-lowest">
                        <th className="p-4 text-left font-headline font-bold text-on-background border-b border-outline-variant/20">Surface</th>
                        <th className="p-4 text-left font-headline font-bold text-on-background border-b border-outline-variant/20">Facebook</th>
                        <th className="p-4 text-left font-headline font-bold text-on-background border-b border-outline-variant/20">Instagram</th>
                        <th className="p-4 text-left font-headline font-bold text-on-background border-b border-outline-variant/20">TikTok</th>
                      </tr>
                    </thead>
                    <tbody>
                      {platformComparisonTable.map((row) => (
                        <tr key={row.surface} className="bg-surface-container-lowest hover:bg-surface-container-low/50 transition-colors">
                          <td className="p-4 font-medium text-on-background border-b border-outline-variant/10 align-top">{row.surface}</td>
                          <td className="p-4 text-on-surface-variant border-b border-outline-variant/10 align-top">{row.facebook}</td>
                          <td className="p-4 text-on-surface-variant border-b border-outline-variant/10 align-top">{row.instagram}</td>
                          <td className="p-4 text-on-surface-variant border-b border-outline-variant/10 align-top">{row.tiktok}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Which Platform Should You Prioritize?</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  If you are styling text for one platform only, start with Facebook. It has the most surfaces, the
                  fewest restrictions on organic content, and the largest audience for businesses and personal brands.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  If you manage both Facebook and Instagram, your bio styling works identically on both, one style,
                  two platforms covered. For posts, stick to bold and semi-bold Unicode styles that perform safely on
                  both without any algorithm risk.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  TikTok Unicode is useful but limited to bio and comments. If TikTok is your main platform, the native
                  video text editor is more important to master than Unicode fonts.
                </p>
              </article>

              {/* Facebook Fonts for Businesses */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Facebook Fonts for Businesses
                </h2>
                <Image
                  src="/images/facebook-fonts/facebook-fonts-for-businesses.webp"
                  alt="Facebook business use cases including local business pages, marketplace sellers, group announcements, and creator profiles using styled Unicode text"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl mb-8"
                  priority={false}
                  loading="lazy"
                />
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  If you run a facebook Page, manage a group, or sell on Marketplace, fb business fonts are a simple
                  feature many competitors still ignore. Here is how different types of businesses get real value
                  from it:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { name: "Local Businesses & Service Providers", desc: "A potential customer landing on your facebook page will form their first impression from your bio before they call, message, or visit. A creative, clean description using bold headings and structured text looks more professional than a block of plain sentences. It signals that you pay attention to details, which is exactly what customers want to believe about a business they're about to hire." },
                    { name: "E-commerce & Marketplace Sellers", desc: "Product listings that use heavy text for the product name and structured descriptions with styled subheadings get more saves and messages. When 50 people are selling the same item, presentation is the only differentiator." },
                    { name: "Content Creators & Influencers", desc: "Consistent use of a specific fb font style across all your posts and captions creates brand recognition without a logo or color palette. Your audience starts associating that typography with your voice." },
                    { name: "Group Admins & Community Managers", desc: "Pinned announcements, group rules, and event posts written with bold styled headings are significantly easier to scan. Members read them. Plain text rule posts get ignored." },
                    { name: "Coaches, Consultants & Personal Brands", desc: "A well-styled Facebook bio using clean small caps or refined script font signals intentionality. It looks like a personal brand, not a personal account." },
                  ].map((s, idx) => (
                    <li key={s.name} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <svg className="text-primary flex-shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      <span><strong>{s.name}</strong> — {s.desc}{idx === 3 && <> If you want to explore the full range of styles that create that look, browse our <Link href="/" className="text-primary underline">aesthetic fonts</Link> collection.</>}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Facebook Fonts That Work in Ads */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Facebook Fonts That Work in Ads
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Most guides that cover facebook fonts skip this part entirely and the few that do touch it usually
                  get it wrong. Ads operate under a completely different set of rules than organic content, and mixing
                  them up can get your copy rejected before it ever reaches an audience.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Here is the honest truth:
                </p>
                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">
                  Facebook&apos;s ad system reviews copy automatically
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  It scans for policy violations, spam signals,
                  and formatting that looks manipulative. Heavy Unicode styling in ad headlines is one of those signals.
                  An ad that opens with a fully formatted bold Unicode headline has a higher chance of being flagged,
                  rejected, or getting reduced delivery even if the content itself is perfectly fine.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  <strong>However — not all styled text gets rejected.</strong> There is a difference between heavy decorative Unicode
                  (Fraktur, Zalgo, Bubble text) and subtle Unicode (mathematical bold, sans-serif bold). The subtle
                  styles often pass review because they look close to standard text. The highly decorative ones almost
                  always cause problems.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">What Works in Facebook Ads</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Mathematical Bold — Closest to actual bold text, least likely to trigger flags",
                    "Sans-Serif Bold — Clean, readable, passes most reviews",
                    "Small Caps — Subtle enough to usually pass, adds a premium feel",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <svg className="text-primary flex-shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">What to Avoid in Facebook Ads</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Fraktur / Gothic — Too decorative, flags spam detection",
                    "Bubble or Square text — Immediately signals non-standard formatting",
                    "Zalgo / Glitch text — Will be rejected",
                    "Full paragraphs in any Unicode style — Even mild styles get flagged when overused",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <svg className="text-primary flex-shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">The Smart Approach:</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Use unicode fb fonts in your organic facebook posts and page
                  bio freely. For ads, use Unicode styling only for one or two words maximum, a bold product name,
                  or a key phrase and keep everything else plain. Before you put real money behind any ad, run it
                  on a minimal spend first to confirm it clears review cleanly.
                </p>
              </article>

              {/* What Font Does Facebook Actually Use? */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  What Font Does Facebook Actually Use?
                </h2>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Facebook Sans: The Official Typeface</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Facebook uses a custom-designed typeface called Facebook Sans. It is not available to download. You
                  won&apos;t find it on Google Fonts, Adobe Fonts, or any other public library because it was never
                  released for outside use. Dalton Maag, a London-based type foundry, developed it specifically for
                  Meta&apos;s needs.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Facebook Sans is a geometric sans-serif with humanist details, rounded terminals, open letter spacing,
                  and careful weight distribution that makes it readable at any size from a tiny mobile notification to
                  a large desktop header. It was built to work across dozens of languages simultaneously, which is why
                  it looks clean in Arabic, Hindi, Chinese, and Latin scripts equally.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  On your specific device, facebook may also fall back to your system font, San Francisco on Apple
                  devices, Roboto on Android, Segoe UI on Windows which is why Facebook can look slightly different
                  depending on what you&apos;re reading it on.
                </p>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">The History of Facebook Typography</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Facebook&apos;s typeface has changed four times since 2004:
                </p>
                <div className="overflow-x-auto rounded-xl border border-outline-variant/20 mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-container-lowest">
                        <th className="p-4 text-left font-headline font-bold text-on-background border-b border-outline-variant/20">Period</th>
                        <th className="p-4 text-left font-headline font-bold text-on-background border-b border-outline-variant/20">Typeface</th>
                        <th className="p-4 text-left font-headline font-bold text-on-background border-b border-outline-variant/20">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {typographyHistory.map((row) => (
                        <tr key={row.period} className="bg-surface-container-lowest hover:bg-surface-container-low/50 transition-colors">
                          <td className="p-4 font-medium text-on-background border-b border-outline-variant/10 align-top whitespace-nowrap">{row.period}</td>
                          <td className="p-4 font-medium text-on-background border-b border-outline-variant/10 align-top">{row.font}</td>
                          <td className="p-4 text-on-surface-variant border-b border-outline-variant/10 align-top">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">Free Alternatives to Facebook Sans</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  Since Facebook Sans is proprietary, designers who want to match Facebook&apos;s visual style use
                  these publicly available alternatives:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { name: "Inter", desc: "The closest match. Built specifically for screen interfaces. Free on Google Fonts." },
                    { name: "DM Sans", desc: "Similar geometric structure with open apertures." },
                    { name: "Nunito", desc: "Warmer feel, similar rounded terminals." },
                    { name: "Lato", desc: "Strong structure with a slightly friendlier tone." },
                    { name: "Montserrat", desc: "Clean, geometric, widely used in social media design." },
                  ].map((s) => (
                    <li key={s.name} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <svg className="text-primary flex-shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      <span><strong>{s.name}</strong> — {s.desc}</span>
                    </li>
                  ))}
                </ul>
              </article>

            </div>

            {/* Sidebar */}
            <Sidebar
              useCasesHeading="Why Your Facebook Posts Look Invisible (And How Fonts Fix That)"
              useCasesContent={
                <>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    Facebook&apos;s News Feed shows every post in the same plain text. Same size. Same weight. Same typeface.
                    Whether you spent five minutes writing something meaningful or five seconds typing nothing, it all
                    looks identical.
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    That is the problem. When everything looks the same, nothing gets read.
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    Unique facebook text font breaks that pattern. A bold opening line, a cursive caption under a photo,
                    or a decorated header in a long post gives the eye somewhere to land. It signals: this one is
                    different, this one is worth stopping for.
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    This is why marketers, content creators, and even regular users have been using fb font generators
                    for years. Not to look fancy; to get seen. The real benefits:
                  </p>
                  <div className="space-y-3">
                    {[
                      "Posts get read — Bold styled headers in your first line increase the chance someone stops scrolling.",
                      "Bios make impressions — A styled profile intro looks intentional and memorable.",
                      "Listings get clicks — On the Marketplace, styled product descriptions look more professional than plain text.",
                      "Comments stand out — In a thread of hundreds, a uniquely formatted comment draws attention.",
                      "Branding becomes consistent — Using the same font style across your posts and captions creates a recognizable look without any design skills.",
                    ].map((tip) => (
                      <p key={tip} className="flex items-start gap-2 text-xs text-on-surface-variant leading-relaxed">
                        <svg className="text-primary flex-shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        {tip}
                      </p>
                    ))}
                  </div>
                </>
              }
              showBanner={false}
              showTips={false}
              bottomImage={{
                src: "/facebook-fonts-generator-with-unique-fonts-for-posts-comments-and-bios.webp",
                alt: "facebook fonts generator with unique fonts for posts comments and bios",
              }}
            />
          </div>
        </section>

        {/* Explore More Tools */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-16 pb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3 text-center leading-tight">
            Explore More Tools
          </h2>
          <p className="text-on-surface-variant text-center text-sm md:text-base mb-10 max-w-xl mx-auto">
            Want more than Facebook fonts? Check out these generators for other platforms and text styles.
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
                  { label: "Stylish Fonts", href: "/stylish-fonts", icon: "\uD83D\uDC8E", desc: "Premium text styles" },
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
                  { label: "Instagram Fonts", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Stand out on Insta" },
                  { label: "Twitter Text Generator", href: "/twitter-fonts", icon: "\uD83D\uDC26", desc: "Fonts for X bios & tweets" },
                  { label: "Discord Fonts", href: "/discord-fonts", icon: "\uD83C\uDFAE", desc: "140+ Discord styles" },
                  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDDAB", desc: "81 bold text styles" },
                  { label: "Cute Fonts", href: "/cute-fonts", icon: "\uD83C\uDF80", desc: "Adorable text styles" },
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

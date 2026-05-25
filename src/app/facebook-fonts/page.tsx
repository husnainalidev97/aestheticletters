import type { Metadata } from "next";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import FAQAccordion from "../components/FAQAccordion";
import Sidebar from "../components/Sidebar";
import FacebookFontsClient from "./FacebookFontsClientLazy";

export const metadata: Metadata = {
  title: { absolute: "Facebook Fonts - Copy & Paste 40+ Styles for Posts and Bio" },
  description:
    "Use our Facebook fonts generator to create custom text for posts, bio, and comments. Pick a style, copy it, paste it into Facebook. Free and works on mobile.",
  alternates: {
    canonical: "https://www.aestheticletters.com/facebook-fonts",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "website",
    url: "https://www.aestheticletters.com/facebook-fonts",
    title: "Facebook Fonts - Copy & Paste 40+ Styles for Posts and Bio",
    description:
      "Use our Facebook fonts generator to create custom text for posts, bio, and comments. Pick a style, copy it, paste it into Facebook. Free and works on mobile.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Fonts - Copy & Paste 40+ Styles for Posts and Bio",
    description:
      "Use our Facebook fonts generator to create custom text for posts, bio, and comments. Pick a style, copy it, paste it into Facebook. Free and works on mobile.",
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
      "With caution. Subtle bold Unicode styles can work, but heavy decorative styles will likely get your ad rejected. Use Unicode styling only for one or two words maximum in ads — a bold product name or a key phrase — and keep everything else plain. Before you put real money behind any ad, run it on a minimal spend first to confirm it clears review cleanly.",
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
        name: "Facebook Fonts - Copy & Paste 40+ Styles for Posts and Bio",
        description:
          "Use our Facebook fonts generator to create custom text for posts, bio, and comments. Pick a style, copy it, paste it into Facebook. Free and works on mobile.",
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/facebook-fonts#breadcrumb",
        },
        mainEntity: {
          "@id": "https://www.aestheticletters.com/facebook-fonts#software",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/facebook-fonts#software",
        name: "Facebook Fonts Generator",
        url: "https://www.aestheticletters.com/facebook-fonts",
        applicationCategory: "WebApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/facebook-fonts#breadcrumb",
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
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-24 pb-16 text-center">
          <h1 className="font-headline text-[3.5rem] md:text-6xl font-bold tracking-tight leading-tight text-on-background mb-6">
            Facebook Fonts — Copy &amp; Paste Unique Text Styles
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-12 text-lg">
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
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Facebook fonts are stylish text characters you can copy and paste directly into facebook with no app,
                  no settings, and no technical knowledge needed. Since facebook does not let you bold, italicize, or
                  style your text natively, this generator converts your plain words into Unicode characters that look
                  like different font styles but work inside any facebook text field.
                </p>
              </article>

              {/* How to Use This Facebook Font Generator */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Use This Facebook Font Generator?
                </h2>
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
                <ul className="space-y-3 mb-6">
                  {[
                    "Type your word, sentence, or caption in the input box",
                    "Browse through 40+ font styles and pick yours",
                    "Hit Copy; then paste directly into Facebook",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Where Can You Use Facebook Fonts? */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Where Can You Use Facebook Fonts?
                </h2>
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
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
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
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                      <span><strong>{s.name}</strong> — {s.desc}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Why Your Facebook Posts Look Invisible */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Why Your Facebook Posts Look Invisible (And How Fonts Fix That)
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Facebook&apos;s News Feed shows every post in the same plain text. Same size. Same weight. Same typeface.
                  Whether you spent five minutes writing something meaningful or five seconds typing nothing, it all
                  looks identical.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  That is the problem. When everything looks the same, nothing gets read.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  Unique facebook text font breaks that pattern. A bold opening line, a cursive caption under a photo,
                  or a decorated header in a long post gives the eye somewhere to land. It signals: this one is
                  different, this one is worth stopping for.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                  This is why marketers, content creators, and even regular users have been using fb font generators
                  for years. Not to look fancy; to get seen. The real benefits:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Posts get read — Bold styled headers in your first line increase the chance someone stops scrolling.",
                    "Bios make impressions — A styled profile intro looks intentional and memorable.",
                    "Listings get clicks — On the Marketplace, styled product descriptions look more professional than plain text.",
                    "Comments stand out — In a thread of hundreds, a uniquely formatted comment draws attention.",
                    "Branding becomes consistent — Using the same font style across your posts and captions creates a recognizable look without any design skills.",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </article>

              {/* Font Style Guide */}
              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Font Style Guide: Which Facebook Font Style Works Best for What?
                </h2>
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
                  Bold Unicode letters carry weight without being decorative. They read clearly on every device
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
                  Instagram bio supports Unicode fonts fully this is where modern fonts became popular first. However, Instagram
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
                    { name: "Coaches, Consultants & Personal Brands", desc: "A well-styled facebook bio using clean small caps or refined script font signals intentionality. It looks like a personal brand, not a personal account." },
                  ].map((s) => (
                    <li key={s.name} className="flex items-start gap-2 text-on-surface-variant text-lg">
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                      <span><strong>{s.name}</strong> — {s.desc}</span>
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
                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">
                  However — not all styled text gets rejected
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                  There is a difference between heavy decorative Unicode
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
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
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
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
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
                  On your specific device, facebook may also fall back to your system font — San Francisco on Apple
                  devices, Roboto on Android, Segoe UI on Windows — which is why Facebook can look slightly different
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
                      <span className="material-symbols-outlined text-primary text-base mt-1" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                      <span><strong>{s.name}</strong> — {s.desc}</span>
                    </li>
                  ))}
                </ul>
              </article>

            </div>

            {/* Sidebar */}
            <Sidebar
              useCasesHeading="Facebook Font Style Quick Guide"
              useCasesContent={
                <>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    Match the right font style to the right Facebook surface for maximum impact.
                  </p>
                  <div className="space-y-3">
                    {[
                      { name: "Bold", desc: "Posts, announcements, CTAs, Marketplace descriptions" },
                      { name: "Cursive & Script", desc: "Bios, personal profiles, photo captions" },
                      { name: "Bubble & Square", desc: "Fun posts, birthday wishes, humor content" },
                      { name: "Gothic & Fraktur", desc: "Music pages, art accounts, creative branding" },
                      { name: "Small Caps", desc: "Professional bios, business descriptions, clean aesthetics" },
                      { name: "Monospace", desc: "Tech-related content, developer pages, code aesthetics" },
                    ].map((font) => (
                      <div key={font.name} className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                        <p className="font-headline font-bold text-sm mb-0.5">{font.name}</p>
                        <p className="text-xs text-on-surface-variant leading-relaxed">{font.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed mt-4">
                    All styles are free to use. Copy and paste directly into any Facebook text field — no app or
                    extension needed.
                  </p>
                </>
              }
              showBanner={false}
              showTips={false}
            />
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

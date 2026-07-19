import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import BigTextGenerator from "../components/BigTextGenerator";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { getTotalFontStyleCount } from "../lib/fontCount";

const META_DESCRIPTION =
  "Turn any word into big, large, or wide text you can copy and paste anywhere. Free to use, no sign up, with three styles and a live preview to check size first.";

const IMAGE_DIR = "/images/big-text-generator";
const IMAGE_BASE = `https://www.aestheticletters.com${IMAGE_DIR}`;
const OG_IMAGE = `${IMAGE_BASE}/big-text-generator-og.webp`;

type SectionImage = {
  id: string;
  file: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

const contentImages = {
  styles: {
    id: "image-styles-comparison",
    file: "big-text-styles-comparison.webp",
    width: 1200,
    height: 1200,
    alt: "Comparison of the three big text styles applied to the word BIG TEXT: Fullwidth (widest), Bold Sans (clean and heavy), and Bold Serif (classic)",
    caption: "Comparison of the three big text styles applied to BIG TEXT, each with a live sample and what it is best used for: Fullwidth is the widest, Bold Sans is clean and heavy, and Bold Serif is classic",
  },
  howTo: {
    id: "image-how-to-copy-paste",
    file: "big-text-how-to-copy-paste.webp",
    width: 1200,
    height: 800,
    alt: "Three steps to make big text: type your text, pick a style or symbol wrap, then copy and paste the styled text anywhere",
    caption: "The three step process for the big text generator: type your text, pick a style or symbol wrapper, then copy and paste the styled Unicode text anywhere",
  },
  fullwidth: {
    id: "image-fullwidth-vs-bold",
    file: "big-text-fullwidth-vs-bold.webp",
    width: 1200,
    height: 800,
    alt: "The word WIDE in plain, Bold Sans, and Fullwidth showing that only Fullwidth extends past the plain text width while bold just adds weight",
    caption: "Why most big text is not actually bigger: plain and Bold Sans end at the same width while only Fullwidth extends past the plain width line, because bold adds weight rather than width",
  },
  useCases: {
    id: "image-where-it-works",
    file: "big-text-where-it-works.webp",
    width: 1200,
    height: 800,
    alt: "Four places big text works best shown as mockups: a YouTube thumbnail, a website header, slides and posters, and a Discord server",
    caption: "Where big text works best, shown as mockups: YouTube thumbnails, website headers, slides and posters, and Discord server names and channels",
  },
  boxes: {
    id: "image-boxes-fix",
    file: "big-text-boxes-fix.webp",
    width: 1200,
    height: 800,
    alt: "Big text showing as boxes fix: rare Unicode blocks fall back to empty boxes, while Fullwidth, Bold Sans, and Bold Serif render on every device",
    caption: "Why big text can show as empty boxes on some devices, with the fix: rare Unicode blocks lack font support, while Fullwidth, Bold Sans, and Bold Serif use widely supported blocks that render on iOS, Android, and desktop",
  },
} satisfies Record<string, SectionImage>;

export const metadata: Metadata = {
  title: {
    absolute: "Big Text Generator: Free Wide and Large Text - (Copy & Paste)",
  },
  description: META_DESCRIPTION,
  alternates: {
    canonical: "https://www.aestheticletters.com/big-text-generator",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/big-text-generator",
    title: "Big Text Generator: Free Wide and Large Text - (Copy & Paste)",
    description: META_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Big Text Generator copy-and-paste preview showing the Fullwidth, Bold Sans, and Bold Serif styles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Text Generator: Free Wide and Large Text - (Copy & Paste)",
    description: META_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const introParagraph =
  "This Big Text Generator takes any word or phrase and turns it into large styled text within seconds. The process stays simple from start to finish, enter a phrase, choose from the style options, then copy the result straight into wherever it needs to go. Whether someone searches using a huge text generator or the term used here, the same output comes back either way.";

const whatIsParagraphs = [
  "Unicode assigns a unique code to every letter, number, and symbol that exists, and a big text generator pulls from a different set of those codes than a keyboard normally uses. Enter a word, and styled versions appear immediately, built entirely from characters that already exist within that system. No download or installation happens at any point.",
  "People often assume big style comes from a special font file, the same way a heavy typeface would. These styles work differently. Each one is a character that already lives inside Unicode, ready to display the moment you paste it. Your phone or computer already knows how to show it.",
  "This tool works well for single letters and initials too, not just full words. A big letter generator use case, like styling a single monogram letter for a logo or a profile picture, uses the exact same Unicode characters as a full phrase, just applied to one letter instead of many.",
];

const bigTextStyles = [
  {
    name: "Fullwidth \u2014 the widest option",
    description:
      "Fullwidth stretches every character out, making words look spaced and expanded rather than heavy. This style suits headers, banner text, and anywhere the goal is width and presence over boldness. Longer phrases stay readable even at this expanded width.",
  },
  {
    name: "Bold Sans \u2014 clean and heavy",
    description:
      "Bold Sans keeps letters tight and modern while adding real visual weight. This style works for both short titles and longer captions, since the heaviness never sacrifices spacing or clarity, even across a full sentence.",
  },
  {
    name: "Bold Serif \u2014 classic and heavy",
    description:
      "Bold Serif carries the same full coverage as Bold Sans, with small strokes at the letter ends for a more traditional look. This page uses only 2 of the 9 bold styles verified on our bold font generator, where the complete set lives, each checked letter by letter before publishing.",
  },
];

const howToSteps = [
  {
    step: 1,
    title: "Enter Your Text",
    description:
      "Find the input field near the top of the page and start typing. Every style card updates in real time as you type, without needing a separate submit action.",
  },
  {
    step: 2,
    title: "Compare the Styles",
    description:
      "Browse the row of style cards beneath the input. Since each card renders your actual text rather than a placeholder example, you can judge the real result before committing to one.",
  },
  {
    step: 3,
    title: "Grab the Result",
    description:
      "Select Copy under whichever card fits best, then drop it into a bio, a title, a thumbnail overlay, or any other field that takes plain text.",
  },
];

const scaleParagraphs = [
  "A style card shows your text at a small, fixed size, which does not match how it will actually look once it lives on a thumbnail, a banner, or a website header. Click Preview at Scale on any style to see your exact text rendered close to its real size.",
  "Nothing about the underlying Unicode changes just because the display size does, the copy button always pulls the exact same characters shown in the small card view. Three shape presets, a square, a wide banner, and a tall story format, let readability get checked against the actual context the text will appear in, before anything gets posted.",
];

const notBiggerParagraphs = [
  "Most tools labeled as a big text generator show styles like bold, gothic, or script text. These styles add visual weight, but they do not make letters wider or larger in shape. A bold letter and a plain letter occupy roughly the same width on screen.",
  "Fullwidth text works differently. Each character sits inside a wider space, defined directly inside Unicode itself. This is not a visual trick added by a website. Unicode assigns fullwidth characters their own dedicated codes, built to occupy more horizontal space than a standard letter.",
  "Fullwidth characters were originally built for East Asian typesetting, where Latin letters needed to match the width of Chinese, Japanese, and Korean characters sitting beside them. That original purpose is exactly why they read as wider today, not a side effect of styling.",
  "This is the real technical reason fullwidth text reads as bigger rather than just heavier. Bold Sans and Bold Serif still belong on this page because weight matters for visual impact too, but only fullwidth text is measurably wider by design, not just darker in tone.",
  "We checked every letter, number, and punctuation mark across Fullwidth, Bold Sans, and Bold Serif before publishing this page, so every character in your text displays correctly, every time.",
];

const useCases = [
  {
    title: "YouTube thumbnails",
    body: "A thumbnail competes with dozens of others in a crowded feed. Fullwidth or Bold Sans text, previewed at scale before you export the thumbnail, stays readable even when shrunk down to a small preview size on someone's phone.",
  },
  {
    title: "Website headers and hero sections",
    body: "A website headline benefits from real visual weight, but plain formatted text stays the safer choice for anything meant to rank in search. Save huge text styles for banners, graphics, or sections that are not carrying the page's main keyword.",
  },
  {
    title: "Presentation slides and posters",
    body: "Slides and printed posters get read from a distance, so weight and width both matter more than they would in a paragraph on screen. Bold Serif works well for a formal title slide, while Fullwidth suits a wide banner header.",
  },
  {
    title: "Discord servers and headers",
    body: "Discord server names and channel categories often use wide, spaced out text to create a banner style look at the top of a member list. For more Discord specific styles built around usernames and roles, see our discord font generator.",
  },
];

const limitations = [
  {
    title: "Character count costs differ by platform",
    body: [
      "A name that reads as short can still burn through Discord's character limit faster than expected, depending on the style chosen. Discord measures length by raw character code, not by visual letter count.",
      "Bold Sans and Bold Serif both sit in a part of Unicode that costs two units per letter, while Fullwidth costs only one, identical to plain text.",
      "Twitter counts differently. Its weighted system charges extra for Fullwidth characters too, the same rate as Bold Sans and Bold Serif, so switching to Fullwidth does not save any space in a tweet.",
    ],
  },
  {
    title: "Screen readers struggle with all three styles",
    body: [
      "A screen reader announces these characters by their technical Unicode name, not the letter they resemble. A word in Fullwidth or Bold Serif gets read aloud in a way that sounds nothing like a real word, which makes big text style a poor choice for anything a visually impaired reader depends on.",
    ],
  },
  {
    title: "Some devices cannot display every character",
    body: [
      "A small box appearing where a letter should be usually points to the device, not the text. Certain phones and apps, especially older ones, simply were never updated with the graphical data required to draw less common Unicode characters. The text itself remains correct even when a device fails to render it properly.",
    ],
  },
];

const notWorking = [
  {
    title: "Why some platforms turn your text back to plain letters",
    body: [
      "Some platforms run a step called Unicode normalization before saving or displaying text you paste in. This step quietly turns styled letters back into plain ones without warning you. Our own Bold Sans version of a word can revert to plain text once this step runs on the other end.",
      "This is the real reason a big font sometimes stops working on one specific site, even though it looked correct on the page where you copied it. The platform is changing your text on its own side, not failing to display what you sent.",
    ],
  },
  {
    title: "Why a letter shows as a box instead of the style you picked",
    body: [
      "This is a separate problem from the one above. Some older phones and apps simply lack the visual data needed to draw a specific Unicode character. The character itself is correct. The device just cannot render it.",
    ],
  },
  {
    title: "What to do if a platform strips your big text",
    body: [
      "If your text turns plain after pasting, the platform likely normalized it, and there is no fix on your side. If you see boxes instead, switch to Fullwidth or Bold Sans, since both carry the widest support across devices and platforms.",
    ],
  },
];

const faqs = [
  {
    question: "Is this big text generator free to use?",
    answer:
      "Yes. There is no cost at any point, and nothing requires a sign up or an email address. Generate and copy as many styles as needed, today or months from now, without anything changing about how the tool works.",
  },
  {
    question: "Is a huge text generator different from a big text generator?",
    answer:
      "No. Both names describe the exact same tool. People search using different words for the same result, so this generator answers to big, large, giant, or huge text without any difference in what it produces.",
  },
  {
    question: "What is a big letter generator used for?",
    answer:
      "People use it to style single letters or short initials, often for a monogram, a logo mark, or a profile picture. The same Unicode characters used for full phrases work just as well applied to one letter alone.",
  },
  {
    question: "How do I copy and paste big letters into another app?",
    answer:
      "Type your text, pick a style card, and click Copy. Open the app or platform where the text belongs, then paste directly into the field. No extra formatting step or app permission gets required anywhere in the process.",
  },
  {
    question: "Why does large text sometimes lose its size after I paste it?",
    answer:
      "Some platforms run a cleanup step called normalization on pasted text, which quietly reverts styled characters back to plain letters. This happens on the platform's side, not because the copied text was wrong or broken.",
  },
  {
    question:
      "Do big text styles work on Instagram, Discord, YouTube, and other platforms?",
    answer:
      "Yes. Big text works in Instagram captions and bios, Discord messages and display names, YouTube titles and descriptions, and most other platforms that accept plain text without a special formatting toolbar.",
  },
  {
    question:
      "What's the actual difference between Fullwidth, Bold Sans, and Bold Serif?",
    answer:
      "Fullwidth letters occupy real extra width, built directly into Unicode. Bold Sans and Bold Serif stay the same width as plain text but carry more visual weight. All three read as big text through different methods.",
  },
  {
    question: "Does the scale preview change the text I actually copy?",
    answer:
      "No. The preview only changes how large your text appears on screen while you check it. The copied result stays the same Unicode characters either way, unaffected by whatever size you previewed it at.",
  },
  {
    question:
      "Can I use the scale preview to check how my text looks as a thumbnail or banner before posting?",
    answer:
      "Yes. The preview shows text inside a square, a wide banner, and a tall story shape, so readability gets checked before anything goes live on the actual platform or design.",
  },
  {
    question: "Why do some big text characters show up as boxes or missing letters?",
    answer:
      "An older phone or an app missing certain Unicode graphics data is nearly always the cause. Fullwidth and Bold Sans carry the broadest device support of the three styles here, so switching to either one resolves the issue in almost every case.",
  },
];

const similarTools = [
  { label: "Bold Font Generator", href: "/bold-font-generator", icon: "\uD83D\uDDA4", desc: "Heavy bold text" },
  { label: "Fancy Fonts", href: "/fancy-fonts", icon: "\uD83D\uDC51", desc: "Decorative text art" },
  { label: "Sans Serif Fonts", href: "/sans-serif-fonts", icon: "\uD83D\uDD24", desc: "Clean modern text" },
  { label: "Serif Fonts", href: "/serif-fonts", icon: "\uD83C\uDD70\uFE0F", desc: "Classic serif letters" },
];

const popularTools = [
  { label: "Discord Fonts", href: "/discord-fonts", icon: "\uD83D\uDCAC", desc: "Style your server" },
  { label: "Twitter Font Generator", href: "/twitter-fonts", icon: "\uD83D\uDC26", desc: "Fonts for X bios & tweets" },
  { label: "Instagram Font Generator", href: "/instagram-fonts", icon: "\uD83D\uDCF8", desc: "Stand out on Insta" },
  { label: "Facebook Font Generator", href: "/facebook-fonts", icon: "\uD83D\uDCAC", desc: "Style your FB posts" },
];

export default function BigTextGeneratorPage() {
  const totalFontStyles = getTotalFontStyleCount();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/big-text-generator#software",
        name: "Big Text Generator",
        operatingSystem: "Any",
        applicationCategory: "UtilitiesApplication",
        browserRequirements: "requires HTML5 support",
        url: "https://www.aestheticletters.com/big-text-generator",
        image: OG_IMAGE,
        description:
          "Turn any word into big, large, or wide text — Fullwidth, Bold Sans, and Bold Serif — with a preview at scale to check size before you copy and paste.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/big-text-generator#webpage",
        url: "https://www.aestheticletters.com/big-text-generator",
        name: "Big Text Generator: Free Wide and Large Text - (Copy & Paste)",
        description: META_DESCRIPTION,
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-07-17T08:00:00+00:00",
        dateModified: "2026-07-17T00:00:00+00:00",
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/big-text-generator#breadcrumb",
        },
        mainEntity: {
          "@id": "https://www.aestheticletters.com/big-text-generator#software",
        },
        primaryImageOfPage: {
          "@id": "https://www.aestheticletters.com/big-text-generator#image-og",
        },
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.aestheticletters.com/big-text-generator#image-og",
        url: OG_IMAGE,
        contentUrl: OG_IMAGE,
        width: 1200,
        height: 630,
        caption: "Big Text Generator copy-and-paste preview showing the Fullwidth, Bold Sans, and Bold Serif styles",
        inLanguage: "en",
      },
      ...Object.values(contentImages).map((img) => ({
        "@type": "ImageObject",
        "@id": `https://www.aestheticletters.com/big-text-generator#${img.id}`,
        url: `${IMAGE_BASE}/${img.file}`,
        contentUrl: `${IMAGE_BASE}/${img.file}`,
        width: img.width,
        height: img.height,
        caption: img.caption,
        inLanguage: "en",
      })),
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/big-text-generator#breadcrumb",
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
            name: "Big Text Generator",
            item: "https://www.aestheticletters.com/big-text-generator",
          },
        ],
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Copy and Paste Big Text",
    description:
      "Turn any word or phrase into big text and copy it anywhere in three steps.",
    totalTime: "PT1M",
    step: howToSteps.map((item) => ({
      "@type": "HowToStep",
      position: item.step,
      name: item.title,
      text: item.description,
    })),
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
            { label: "Big Text Generator", href: "/big-text-generator" },
          ]}
        />

        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            Big Text Generator &mdash; Copy and Paste
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            Type any word and turn it into big, large, or wide text in seconds.
            Copy it, paste it anywhere, and preview exactly how large it will
            look before you post it online.
          </p>
        </section>

        {/* Interactive Font Generator */}
        <BigTextGenerator totalFontStyles={totalFontStyles} />

        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              <article>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  {introParagraph}
                </p>
              </article>

              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  What is a Big Text Generator?
                </h2>
                <div className="space-y-6">
                  {whatIsParagraphs.map((para, i) => (
                    <p
                      key={i}
                      className="text-on-surface-variant leading-relaxed text-lg"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </article>

              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Choosing a Big Text Style for Your Use Case
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Picking a big font style comes down to how you want the weight
                  to feel, not what the text can or cannot display. All three
                  styles here cover every letter, number, and punctuation mark,
                  so nothing gets left in plain text partway through a sentence.
                </p>
                <Image
                  src={`${IMAGE_DIR}/${contentImages.styles.file}`}
                  alt={contentImages.styles.alt}
                  width={contentImages.styles.width}
                  height={contentImages.styles.height}
                  className="w-full h-auto rounded-xl mb-8"
                />
                <div className="space-y-8">
                  {bigTextStyles.map((style) => (
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

              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  How to Copy and Paste Big Text?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  A single word, a short phrase, or a full sentence all go
                  through the identical process here, with no separate steps
                  depending on length.
                </p>
                <Image
                  src={`${IMAGE_DIR}/${contentImages.howTo.file}`}
                  alt={contentImages.howTo.alt}
                  width={contentImages.howTo.width}
                  height={contentImages.howTo.height}
                  className="w-full h-auto rounded-xl mb-8"
                />
                <div className="space-y-8">
                  {howToSteps.map((item) => (
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

              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  See Your Big Text at Full Size
                </h2>
                <div className="space-y-6">
                  {scaleParagraphs.map((para, i) => (
                    <p
                      key={i}
                      className="text-on-surface-variant leading-relaxed text-lg"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </article>

              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Most &ldquo;Big&rdquo; Text isn&rsquo;t Actually Bigger
                </h2>
                <Image
                  src={`${IMAGE_DIR}/${contentImages.fullwidth.file}`}
                  alt={contentImages.fullwidth.alt}
                  width={contentImages.fullwidth.width}
                  height={contentImages.fullwidth.height}
                  className="w-full h-auto rounded-xl mb-8"
                />
                <div className="space-y-6">
                  {notBiggerParagraphs.map((para, i) => (
                    <p
                      key={i}
                      className="text-on-surface-variant leading-relaxed text-lg"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </article>

              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Where Huge Text Works Best?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Huge text earns its place anywhere a viewer needs to notice
                  something in half a second, not read a full sentence. A few
                  contexts make the biggest difference.
                </p>
                <Image
                  src={`${IMAGE_DIR}/${contentImages.useCases.file}`}
                  alt={contentImages.useCases.alt}
                  width={contentImages.useCases.width}
                  height={contentImages.useCases.height}
                  className="w-full h-auto rounded-xl mb-8"
                />
                <div className="space-y-8">
                  {useCases.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-on-surface-variant leading-relaxed text-lg">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Big Text Limitations You Should Know
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Big text carries a few real tradeoffs worth knowing before you
                  use it somewhere it matters.
                </p>
                <div className="space-y-8">
                  {limitations.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <div className="space-y-4">
                        {item.body.map((para, i) => (
                          <p
                            key={i}
                            className="text-on-surface-variant leading-relaxed text-lg"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article>
                <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                  Big Text Not Working?
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  If your big style stops working somewhere, it usually comes
                  down to one of two causes.
                </p>
                <Image
                  src={`${IMAGE_DIR}/${contentImages.boxes.file}`}
                  alt={contentImages.boxes.alt}
                  width={contentImages.boxes.width}
                  height={contentImages.boxes.height}
                  className="w-full h-auto rounded-xl mb-8"
                />
                <div className="space-y-8">
                  {notWorking.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-headline text-2xl font-bold mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <div className="space-y-4">
                        {item.body.map((para, i) => (
                          <p
                            key={i}
                            className="text-on-surface-variant leading-relaxed text-lg"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
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
            Want more than big text? Check out these generators for letters,
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
                {similarTools.map((tool) => (
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
                {popularTools.map((tool) => (
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

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import PreppyFontGenerator from "../components/PreppyFontGenerator";
import FAQAccordion from "../components/FAQAccordion";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { getTotalFontStyleCount } from "../lib/fontCount";

const PAGE_TITLE = "Preppy Fonts \uD83C\uDF80 Free Copy & Paste Text Generator";
const PAGE_DESCRIPTION =
  "Generate preppy fonts instantly with this free preppy text generator. Pick Old Money, Coquette, Clean Girl, and Star Girl styles, then copy and paste anywhere.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://www.aestheticletters.com/preppy-fonts",
  },
  openGraph: {
    siteName: "Aesthetic Letters",
    type: "article",
    url: "https://www.aestheticletters.com/preppy-fonts",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: "https://www.aestheticletters.com/images/preppy-fonts/preppy-fonts-og.webp", width: 1200, height: 630, alt: "Preppy Fonts copy-and-paste generator preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["https://www.aestheticletters.com/images/preppy-fonts/preppy-fonts-og.webp"],
  },
};

const introParagraphs = [
  "Preppy fonts bring a clean, classic style to any name, bio, or caption. This tool turns plain text into styled Unicode characters that match the preppy look, from bold serif letters to soft cursive script. Type a word into the box above and copy the version that fits the vibe.",
  "The preppy text generator works instantly and needs no download or sign up. Every style below copies straight to the clipboard, ready to paste into Instagram, Discord, Roblox, or anywhere else text appears. Scroll up to explore styles across five aesthetics, from Old Money serif to Star Girl bubble letters.",
];

type SectionImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};
type Subsection = { heading: string; image?: SectionImage; paragraphs: ReactNode[] };
type ContentSection = {
  heading: string;
  image?: SectionImage;
  paragraphs?: ReactNode[];
  subsections?: Subsection[];
};

const linkClass = "text-primary underline underline-offset-4 hover:no-underline";

const sections: ContentSection[] = [
  {
    heading: "What is the Preppy Aesthetic?",
    paragraphs: [
      "The word preppy comes from prep school, short for preparatory school. These private schools across the northeastern United States built a look around sharp blazers, tennis whites, and understated wealth. The style stayed linked to Ivy League campuses and East Coast country clubs for decades.",
      "Ralph Lauren turned this look into a global aesthetic through the 1980s and 1990s. Then came a fresh wave. TikTok and Pinterest brought preppy back around 2022, splitting it into smaller aesthetics like Old Money, Coquette, and Clean Girl. Each one adds its own mood to the same tailored foundation.",
      "Font choice plays a real part in this look online. A bio written in plain text does not carry the same weight as one styled in a crisp serif or a soft script. Preppy fonts translate that visual language, polished, understated, a little nostalgic, into something people can type and paste anywhere.",
    ],
  },
  {
    heading: "What Makes a Font \u201CPreppy\u201D?",
    image: {
      src: "/images/preppy-fonts/preppy-font-aesthetics-comparison.webp",
      alt: "Five preppy font aesthetics compared using the name Emma: Old Money in Country Club Bold, Coquette in Ballet Script, Clean Girl in Minimal Mono, Star Girl in Chrome Block, and For Guys in Varsity Bold",
      width: 1200,
      height: 660,
      caption: "The five preppy font aesthetics \u2014 the same name shown in each bucket's signature style.",
    },
    paragraphs: [
      "No single font defines preppy. Five distinct looks make up the style instead, each borrowing from its own piece of the aesthetic. Some stay formal with serif letters rooted in old money style, while others turn soft and playful with a coquette or Y2K feel.",
      "Every style below uses real Unicode characters, not images or downloadable files. That means the styled text pastes cleanly into any bio, caption, or username field. Pick the style that matches the vibe, then browse the cards for the exact look.",
    ],
    subsections: [
      {
        heading: "Old Money / Classic Preppy",
        paragraphs: [
          "Old Money leans into polished, understated wealth. Think tennis whites, navy blazers, and a signature that looks engraved rather than typed. Bold and italic serif styles carry this look best, since they echo the lettering on a country club menu or a yacht club burgee.",
          "Try Country Club Bold for a name that reads confident and grounded, or Yacht Club Italic for something with a bit more movement. Heritage Bold Italic blends both features into one style. Monogram Caps work well for initials, styled the way a monogrammed cufflink or towel would look.",
        ],
      },
      {
        heading: "Coquette / Soft Girl",
        paragraphs: [
          "Coquette pulls from ballet flats, silk ribbons, and a soft, romantic mood. Cursive and script styles fit here naturally, since they carry the same delicate line work as a handwritten love note. Bows and pastel tones usually ride alongside this style in bios and moodboards.",
          "Ballet Script gives a flowing, elegant look, while Lace Bold Script adds more weight without losing softness. Rosette Circle and Charm Bubble wrap each letter in a small round frame, perfect for a single word or nickname. Whisper Joiner spaces each letter out for a quieter, airier feel.",
        ],
      },
      {
        heading: "Clean Girl Aesthetic",
        paragraphs: [
          "Clean Girl keeps everything minimal: neutral tones, barely there makeup, and text with nothing extra attached. The letters carry the whole look on their own, without a symbol or bow in sight.",
          "Slick Sans gives a modern, confident weight for names and headers. Quiet Caps offers a smaller, more understated version for bios that need to stay subtle. Minimal Mono brings a typewriter feel that pairs well with a Pinterest board title. Soft Sans Italic adds a gentle slant without breaking the minimal mood.",
        ],
      },
      {
        heading: "Star Girl Aesthetic",
        paragraphs: [
          "Star Girl brings energy and shine, closer to Y2K chrome accessories and glitter eyeliner than to quiet country club style. Bold, rounded, and wide letterforms fit this mood best, especially when paired with lightning bolts or star symbols.",
          "Bubble Pop and Cosmic Bubble wrap letters in a rounded frame that reads playful at a first glance. Retro Wide stretches each letter for a chunky, confident look. Chrome Block gives a boxed, futuristic feel, though it only works in uppercase. Chrome outline keeps the same energy with a lighter, hollow style.",
        ],
      },
      {
        heading: "Preppy Fonts Copy Paste for Guys",
        paragraphs: [
          "Preppy is not only a girl's aesthetic. The guy's version leans into varsity jackets, boat shoes, and old school team spirit rather than lace or bows. Bold sans and structured serif styles carry this look without tipping into anything too soft.",
          "Varsity bold gives names a strong, jersey number feel. Captain Serif brings the same classic weight as the Old Money styles above, suited for a more formal bio. Team Caps works well for short nicknames or initials. Locker Room Mono adds a roster style look with each letter set apart.",
        ],
      },
    ],
  },
  {
    heading: "Preppy vs Similar Font Aesthetics",
    paragraphs: [
      <>
        Preppy often gets mixed up with cute or coquette styles, since all
        three share a soft, feminine edge in places. The difference sits in the
        details.{" "}
        <Link href="/cute-fonts" className={linkClass}>
          Cute fonts
        </Link>{" "}
        lean fully into playful symbols: teddy bears, cupcakes, and rainbow
        accents that work for any lighthearted bio, not tied to a specific
        cultural look.
      </>,
      "Coquette sits closer to preppy but narrows in on ribbons, ballet, and romantic softness rather than the tailored, country club side of the aesthetic. A preppy bio might pair a bold serif name with a tennis racket emoji, while a coquette one leans toward cursive script and a bow.",
      "Cottagecore, meanwhile, pulls from a completely different mood: wildflowers, rustic kitchens, and countryside living rather than boat shoes or Ivy League campuses. None of these styles are wrong to mix, but knowing the distinction helps pick fonts that actually match the vibe someone wants to send.",
    ],
  },
  {
    heading: "Tips for Styling Your Name",
    paragraphs: [
      "Short names carry bold or heavy styles well, since there is little room for the text to feel cluttered. A three or four letter name looks sharp in a bold serif or a boxed style, where every letter gets full attention.",
      "Longer names often work better in a lighter touch, like a script or a minimal sans style. Too much weight on a long name can make it harder to read at a glance, especially inside a small bio field on a phone screen.",
      "Styling only the first letter of a name is another simple trick. Keeping the rest in plain text draws the eye to a single accent character without overwhelming the whole word. This works well for names with a tall or curved first letter, since that shape stands out more when styled.",
      "Nicknames give the most room to experiment, since they carry a more casual tone already. A wilder or more decorative style rarely feels out of place on a nickname the way it might on a formal display name.",
    ],
  },
  {
    heading: "Where to Use Preppy Fonts?",
    paragraphs: [
      "Preppy text shows up most on Instagram bios, Roblox usernames, and Discord servers, though every style below works anywhere text can be pasted. Each platform carries its own details worth knowing beforehand, especially around character limits and username rules. The sections below cover the platforms where preppy fonts get used most.",
    ],
    subsections: [
      {
        heading: "Instagram Bios & Captions",
        image: {
          src: "/images/preppy-fonts/preppy-instagram-bio-example.webp",
          alt: "Example preppy Instagram profile with the display name in Heritage Bold Italic, a Ballet Script bio line, Quiet Caps interests, and Minimal Mono est. 2004",
          width: 900,
          height: 1000,
          caption: "A preppy Instagram bio built with the generator — Heritage Bold Italic name, Ballet Script and Quiet Caps bio lines.",
        },
        paragraphs: [
          <>
            <Link href="/instagram-fonts" className={linkClass}>
              Instagram
            </Link>{" "}
            bios and captions accept styled unicode text without any
            restriction, which makes this one of the easiest places to use
            preppy fonts. A bold serif name at the top of a bio reads like a
            magazine header, while a script style pairs well with a softer
            caption underneath a photo.
          </>,
          "Captions have more room to work with than bios, so a longer preppy phrase or quote fits without trouble. Bios stay short, so a single styled word or name often works better than a full styled sentence.",
        ],
      },
      {
        heading: "Roblox & Adopt Me Names",
        paragraphs: [
          "Roblox usernames follow strict platform rules and typically only accept standard letters and numbers, so styled unicode text usually will not work directly in a username field. Pet names and in game trade titles inside games like Adopt Me tend to have more flexibility, though this can vary by game and update.",
          "The safest approach is testing a styled name inside the specific game or field before relying on it, since Roblox updates its text rules from time to time. Bios and profile descriptions on Roblox generally accept more character variety than usernames do.",
        ],
      },
      {
        heading: "Discord & Twitter Usernames",
        paragraphs: [
          <>
            <Link href="/discord-fonts" className={linkClass}>
              Discord
            </Link>{" "}
            and{" "}
            <Link href="/twitter-fonts" className={linkClass}>
              Twitter
            </Link>{" "}
            both restrict usernames to standard ASCII characters, so styled
            preppy text will not work in a username field on either platform.
            Server names, display names, nicknames, bios, and tweets accept
            styled text without issue, since those fields do not carry the same
            restriction.
          </>,
          "One more detail worth knowing on Twitter: most styled unicode letters count as two characters toward the limit instead of one, which eats into the character count faster than plain text. Small Caps is the exception here, since it counts as a single character per letter like normal text.",
        ],
      },
      {
        heading: "Matching Bios for Friend Groups",
        paragraphs: [
          "Friend groups often coordinate matching bios using the same preppy style, a trend that shows up often on Pinterest and TikTok around back to school season and sorority recruitment. Picking one style, like Ballet Script or Country Club Bold, and applying it across every member's name keeps the group looking consistent.",
          "Coordinating a symbol alongside the style, like a shared bow or star, adds another layer of consistency. This works well for close friend groups, roommates, or teammates who want their profiles to feel connected without looking identical.",
        ],
      },
      {
        heading: "Back to School & Planner Aesthetics",
        paragraphs: [
          "Preppy letters show up heavily in back to school content, from planner headers to class schedule graphics shared on Pinterest and TikTok. A bold serif or clean sans style works well for subject headers, since it stays readable even at a small size on a planner page.",
          "Some of these styles also work inside Google Docs and other word processors, since the characters are standard unicode text rather than a font file. Pasting a styled heading straight into a document gives it a designed look without installing anything or changing the document's actual font.",
        ],
      },
    ],
  },
  {
    heading: "Compatibility \u2014 Will Preppy Fonts Work Everywhere?",
    paragraphs: [
      "Every style on this page uses real unicode characters, the same character system that powers emoji and every language keyboard. That means the styled text works on nearly any modern phone, tablet, or computer without needing a special font installed.",
      "A few styles carry small details worth knowing. Cursive Script and Double-Struck both borrow a handful of letters from a different part of the unicode system, since the main block does not include every letter.",
      "A phone or app might display those particular letters with a slightly heavier or lighter stroke than the rest of the name. This barely affects how easy the word is to read, though it counts as a genuine quirk rather than something broken.",
      "Chrome Block only exists in uppercase, since unicode never created a lowercase version of that character set. Typing a name in that style will always show capital letters, regardless of how it was typed into the generator.",
      "Older devices and some outdated browsers can occasionally show a blank box instead of a character, though this has grown rare as most software updated years ago.",
    ],
  },
  {
    heading: "Preppy Kaomoji & Symbol Combos",
    paragraphs: [
      "Kaomoji and symbols round out a preppy bio the same way a small accessory finishes an outfit. A tennis racket or sailboat emoji next to a bold serif name leans Old Money, while a bow or ribbon symbol next to a script style leans Coquette.",
      "A few combos worth trying: a heart or bow on either side of a script name for a soft look, a lightning bolt or star pair for a Star Girl feel, and a simple anchor or rugby ball for the guy's version of the aesthetic.",
      "Kaomoji work the same way as emoji here. Placing one at the start and end of a styled name, or right after a bio line, adds personality without needing extra text. Keeping the combo simple, one or two symbols, usually reads cleaner than a cluster of several.",
    ],
  },
  {
    heading: "Sample Preppy Bio Formulas",
    paragraphs: [
      "A bio formula gives structure to work from instead of starting with a blank field. Three formats cover most preppy bios well.",
      "Name plus vibe: style the name in a bold serif or script, then add a short word or phrase underneath that sets the mood, like tennis girl or est. 2004, styled in Small Caps for contrast.",
      "Name plus symbol plus link: pair a styled name with one matching symbol, then a plain text line for a link or handle underneath. Keeping the link in plain text avoids any display issues on platforms that do not render styled links correctly.",
      "Initial plus full name: style just the first letter of a name in a bold or script font, then continue the rest of the name in plain text. This mirrors the monogram trick mentioned earlier and works especially well for longer names that would look cluttered and fully styled.",
    ],
  },
];

const faqs = [
  {
    question: "Is preppy the same as cute fonts?",
    answer:
      "Not exactly. Cute fonts lean into playful symbols like teddy bears and cupcakes, without tying to one cultural look. Preppy pulls from a more defined aesthetic: polished, Ivy League, country club style. The two overlap in softness sometimes, but preppy carries its own distinct identity.",
  },
  {
    question: "What's the difference between preppy and coquette style?",
    answer:
      "Coquette narrows in on ribbons, ballet, and romantic softness, while preppy covers a wider range that includes polished Old Money looks alongside softer variations. Coquette works well as one mood inside the broader preppy umbrella, rather than as a separate category entirely.",
  },
  {
    question: "Do preppy fonts work on Roblox and Adopt Me?",
    answer:
      "Roblox usernames typically accept only standard letters and numbers, so styled text usually will not work there directly. Pet names and trade titles inside games like Adopt Me sometimes allow more flexibility. Testing a style inside the game first avoids surprises.",
  },
  {
    question: "Can I use preppy fonts for a guy's bio?",
    answer:
      "Yes. The Preppy Fonts for Guys section above covers styles built for that specific mood, using bold sans and structured serif fonts rather than script or bubble styles. Varsity Bold and Captain Serif both work well for a guy's Instagram bio or gaming profile.",
  },
  {
    question: "Why do some preppy letters not display correctly?",
    answer:
      "A few styles, like Cursive Script and Double-Struck, borrow some letters from a different part of the Unicode system since the main character block does not cover every letter. This can cause a slight style mismatch on certain devices, though the text almost always stays fully readable.",
  },
  {
    question: "Are preppy fonts free to use?",
    answer:
      "Yes. Every style on this page generates instantly and copies for free, with no account, subscription, or hidden cost involved. The preppy font generator stays free to use for any bio, caption, or personal project, with no limit on how many times it gets used.",
  },
  {
    question: "Are preppy fonts safe to copy and paste?",
    answer:
      "Yes. The styled text is made entirely of standard Unicode characters, the same system used for emoji and every language keyboard. Copying and pasting it carries no more risk than copying any other text, and it does not require downloading a file or installing anything.",
  },
  {
    question: "Can I use preppy fonts in Canva or Photoshop designs?",
    answer:
      "Yes, the styled text is still plain Unicode, so it pastes into a text box in Canva, Photoshop, or any design tool the same way normal text does. It will not behave like a font file, so typeface effects will not apply.",
  },
  {
    question: "What's the best preppy font for a Pinterest board title?",
    answer:
      "Minimal Mono or Slick Sans usually work best for a Pinterest board title, since both stay readable at the smaller sizes Pinterest often displays. A bold serif style like Country Club Bold also suits a title meant to stand out on a cover image.",
  },
  {
    question: "How do I add kaomoji to my preppy bio?",
    answer:
      "Type or copy a kaomoji from the symbol section above, then paste it directly before or after a styled name or bio line. Keeping it to one or two symbols usually reads cleaner than combining several kaomoji or emoji together in the same line.",
  },
  {
    question: "Do preppy fonts need to be downloaded?",
    answer:
      "No. Every style here is made of standard Unicode text rather than a font file, so nothing needs installing or downloading. Typing a word into the preppy font generator and copying the styled result is the entire process, and it works the same on phone or desktop.",
  },
];

export default function PreppyFontsPage() {
  const totalFontStyles = getTotalFontStyleCount();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.aestheticletters.com/preppy-fonts#software",
        name: "Preppy Font Generator",
        operatingSystem: "Any",
        applicationCategory: "UtilitiesApplication",
        browserRequirements: "requires HTML5 support",
        url: "https://www.aestheticletters.com/preppy-fonts",
        image: "https://www.aestheticletters.com/images/preppy-fonts/preppy-fonts-og.webp",
        description: PAGE_DESCRIPTION,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aestheticletters.com/preppy-fonts#webpage",
        url: "https://www.aestheticletters.com/preppy-fonts",
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: "en",
        isPartOf: { "@id": "https://www.aestheticletters.com/#website" },
        datePublished: "2026-07-09T08:00:00+00:00",
        dateModified: "2026-07-09T08:00:00+00:00",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", ".text-on-surface-variant"],
        },
        breadcrumb: {
          "@id": "https://www.aestheticletters.com/preppy-fonts#breadcrumb",
        },
        mainEntity: {
          "@id": "https://www.aestheticletters.com/preppy-fonts#software",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aestheticletters.com/preppy-fonts#breadcrumb",
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
            name: "Preppy Fonts",
            item: "https://www.aestheticletters.com/preppy-fonts",
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
      <TopNavBar activePage="preppy-fonts" />
      <main id="main-content" className="pt-[5.5rem]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "All Tools", href: "/all-tools" },
            { label: "Preppy Fonts", href: "/preppy-fonts" },
          ]}
        />

        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-8 pb-4 md:pt-10 md:pb-6 text-center">
          <h1 className="font-headline text-2xl md:text-5xl font-bold tracking-tight leading-tight text-on-background mb-2 md:mb-3">
            Preppy Fonts Generator (Copy &amp; Paste)
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-4 md:mb-4 text-sm md:text-lg">
            Type your name below and pick a preppy font style, from Old Money to
            Star Girl. Copy the styled text and paste it into your bio, caption,
            or username, totally free.
          </p>
        </section>

        {/* Interactive Font Generator */}
        <PreppyFontGenerator totalFontStyles={totalFontStyles} />

        {/* SEO Content Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              <article>
                {introParagraphs.map((text, i) => (
                  <p
                    key={i}
                    className={`text-on-surface-variant leading-relaxed text-lg${
                      i < introParagraphs.length - 1 ? " mb-6" : ""
                    }`}
                  >
                    {text}
                  </p>
                ))}
              </article>

              {sections.map((section) => (
                <article key={section.heading}>
                  <h2 className="font-headline text-4xl font-bold mb-8 leading-tight">
                    {section.heading}
                  </h2>
                  {section.image && (
                    <figure className="mb-8">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        width={section.image.width}
                        height={section.image.height}
                        className="rounded-xl w-full"
                        priority={false}
                        loading="lazy"
                      />
                      <figcaption className="mt-3 text-sm text-on-surface-variant text-center">
                        {section.image.caption}
                      </figcaption>
                    </figure>
                  )}
                  {section.paragraphs?.map((text, i) => (
                    <p
                      key={i}
                      className="text-on-surface-variant leading-relaxed text-lg mb-6"
                    >
                      {text}
                    </p>
                  ))}
                  {section.subsections && (
                    <div className="space-y-6">
                      {section.subsections.map((sub) => (
                        <div key={sub.heading}>
                          <h3 className="font-headline text-2xl font-bold mb-3 leading-tight">
                            {sub.heading}
                          </h3>
                          {sub.image && (
                            <figure className="mb-4 sm:float-right sm:ml-6 sm:mb-3 max-w-[260px] mx-auto">
                              <Image
                                src={sub.image.src}
                                alt={sub.image.alt}
                                width={sub.image.width}
                                height={sub.image.height}
                                className="rounded-xl w-full"
                                priority={false}
                                loading="lazy"
                              />
                              <figcaption className="mt-2 text-xs text-on-surface-variant text-center">
                                {sub.image.caption}
                              </figcaption>
                            </figure>
                          )}
                          {sub.paragraphs.map((text, i) => (
                            <p
                              key={i}
                              className={`text-on-surface-variant leading-relaxed text-lg${
                                i < sub.paragraphs.length - 1 ? " mb-3" : ""
                              }`}
                            >
                              {text}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              ))}
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

import FAQAccordion from "./FAQAccordion";

export const homeFaqs = [
  {
    question: "What are aesthetic fonts?",
    answer:
      "Aesthetic letters are lovely and decorative text styles that make your content look unique. They can be used in Instagram captions, Facebook posts, WhatsApp messages, TikTok videos, YouTube, and gaming usernames.",
  },
  {
    question: "How do I copy and paste aesthetic lettering on mobile (Android and iPhone)?",
    answer:
      'Simply select the generated text, tap "Copy," and paste it anywhere like an Instagram bio, WhatsApp chat, or gaming username. iPhone and Android versions work the same.',
  },
  {
    question: "Are there any limits on how much text I can generate?",
    answer:
      "You are not limited. This Aesthetic Letters tool lets you generate text as often as you like for free. For best visibility on Instagram, WhatsApp, or gaming usernames, it's recommended to use around 10–12 characters per line.",
  },
  {
    question: "Why do some fonts look different on Instagram or WhatsApp?",
    answer:
      "Not all platforms support every text style. Some decorative fonts may appear slightly different due to platform compatibility or mobile device restrictions.",
  },
  {
    question: "How often do you add new aesthetic font styles?",
    answer:
      "New styles are added regularly to keep your options fresh, so you can always find trending and modern styles for posts, captions, or usernames.",
  },
  {
    question: "What are the best practices for using aesthetic fonts in bios and captions?",
    answer:
      "Keep it readable, avoid using too many styles in one sentence, match the text with your content tone, and check platform compatibility to ensure your text looks perfect.",
  },
];

export default function FAQSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24">
      <h2 className="font-headline text-4xl font-bold mb-16 text-center">
        Frequently Asked Questions
      </h2>
      <FAQAccordion faqs={homeFaqs} />
    </section>
  );
}

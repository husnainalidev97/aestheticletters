import type { ReactNode } from "react";
import Image from "next/image";
import AestheticBanner from "./AestheticBanner";

interface SidebarProps {
  useCasesHeading?: string;
  tipsHeading?: string;
  useCasesContent?: ReactNode;
  tipsContent?: ReactNode;
  showBanner?: boolean;
  showTips?: boolean;
  bottomImage?: { src: string; alt: string };
}

export default function Sidebar({
  useCasesHeading = "Where to Use Them?",
  tipsHeading = "05 Common Mistakes to Avoid When Using Aesthetic Fonts",
  useCasesContent,
  tipsContent,
  showBanner = true,
  showTips = true,
  bottomImage,
}: SidebarProps) {
  return (
    <aside className="lg:col-span-4 space-y-12">
      {/* Use Cases — only rendered when explicit content is provided */}
      {useCasesContent && (
        <div className="p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm">
          <h2 className="font-headline text-2xl font-bold mb-6">
            {useCasesHeading}
          </h2>
          {useCasesContent}
        </div>
      )}

      {/* Common Mistakes to Avoid */}
      {showTips && <div className="p-8 bg-surface text-on-surface rounded-2xl border border-primary/20 shadow-sm">
        <h2 className="font-headline text-2xl font-bold mb-6">
          {tipsHeading}
        </h2>
        {tipsContent || (
          <>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
              Using aesthetic text is simple, but avoid these common mistakes:
            </p>
            <ol className="space-y-4 text-sm leading-relaxed">
              <li>
                <strong>Too Many Styles:</strong> A sentence that contains too
                many styles can look cluttered and confusing.
              </li>
              <li>
                <strong>Hard-to-Read Styles:</strong> The use of hard-to-read
                styles reduces engagement and readability.
              </li>
              <li>
                <strong>Overuse in Long Text:</strong> Overusing decorative text
                in long paragraphs makes content difficult to follow.
              </li>
              <li>
                <strong>Platform Compatibility:</strong> Ignoring platform
                compatibility (Instagram, Facebook, WhatsApp, TikTok, YouTube,
                Gaming usernames) can result in broken text.
              </li>
              <li>
                <strong>Tone Mismatch:</strong> Copying styles that don&apos;t
                match your content tone can feel out of place.
              </li>
            </ol>
            <div className="mt-6 p-4 bg-primary-container/10 rounded-xl">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                <strong>Pro Tip:</strong> Use decorative styles wisely. Too many
                effects can reduce readability, especially on mobile screens. Keep it
                simple for better results.
              </p>
            </div>
          </>
        )}
      </div>}

      {/* Aesthetic Letters Banner */}
      {showBanner && (
        <div className="w-full rounded-2xl overflow-hidden">
          {/* CSS banner for desktop sidebar */}
          <div className="hidden lg:block" aria-label="Aesthetic Fonts" role="img">
            <AestheticBanner />
          </div>
          {/* Static image for mobile/tablet (shown when sidebar stacks) */}
          <div className="block lg:hidden">
            <Image
              src="/og-image.jpg"
              alt="Aesthetic Fonts"
              width={1200}
              height={630}
              className="w-full h-auto rounded-2xl"
              priority={false}
            />
          </div>
        </div>
      )}

      {/* Security Feature */}
      <div className="p-8 bg-primary-container/10 rounded-2xl border border-primary/10">
        <h3 className="font-headline font-bold text-primary mb-4 flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg>
          Client-Side Security
        </h3>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          We prioritize your privacy. All transformations happen 100% in your
          browser. We never store or track the text you type.
        </p>
      </div>

      {/* Optional bottom image */}
      {bottomImage && (
        <div className="w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={bottomImage.src}
            alt={bottomImage.alt}
            width={864}
            height={1821}
            className="w-full h-auto rounded-2xl"
            priority={false}
          />
        </div>
      )}
    </aside>
  );
}

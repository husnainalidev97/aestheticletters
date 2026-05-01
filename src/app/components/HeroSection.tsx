interface HeroSectionProps {
  title?: string;
  description?: string;
  showInput?: boolean;
}

export default function HeroSection({
  title = "Aesthetic Letters",
  description = "Give your words a fresh and modern look with over 120 aesthetic fonts, perfect for quotes, creative posts, and visual storytelling.",
  showInput = true,
}: HeroSectionProps) {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] pt-24 pb-12 text-center">
      <h1 className="font-headline text-[3.5rem] md:text-6xl font-bold tracking-tight text-on-background mb-6">
        {title}
      </h1>
      <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-12 text-lg">
        {description}
      </p>
      {/* Input Area */}
      {showInput && (
        <div className="relative w-full max-w-3xl mx-auto">
          <textarea
            className="w-full min-h-[120px] p-8 text-xl font-body bg-surface-container-low border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/40 focus:bg-surface-container-high transition-all resize-none shadow-sm"
            placeholder="Type or paste your text here..."
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <button className="h-12 px-6 bg-primary text-on-primary font-bold rounded-lg flex items-center gap-2 hover:opacity-90 transition-all scale-95 active:scale-90">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_fix
              </span>
              Curate
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

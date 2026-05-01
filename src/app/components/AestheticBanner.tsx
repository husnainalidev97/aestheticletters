export default function AestheticBanner() {
  return (
    <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-full min-h-[280px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-primary-container to-primary">
      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(202,190,255,0.25)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(93,63,211,0.4)_0%,transparent_50%)]" />

      {/* Floating symbols */}
      <span className="absolute top-[12%] left-[10%] text-2xl text-on-primary/30 animate-float-slow select-none">✧</span>
      <span className="absolute top-[20%] right-[14%] text-3xl text-on-primary/25 animate-float-medium select-none">✨</span>
      <span className="absolute bottom-[18%] left-[18%] text-xl text-on-primary/20 animate-float-medium select-none">♡</span>
      <span className="absolute top-[55%] right-[8%] text-lg text-on-primary/30 animate-float-slow select-none">✧</span>
      <span className="absolute top-[8%] right-[40%] text-sm text-on-primary/20 animate-float-fast select-none">✦</span>
      <span className="absolute bottom-[10%] right-[28%] text-2xl text-on-primary/25 animate-float-slow select-none">♡</span>
      <span className="absolute bottom-[35%] left-[6%] text-sm text-on-primary/15 animate-float-fast select-none">✨</span>
      <span className="absolute top-[40%] left-[45%] text-xs text-on-primary/20 animate-float-medium select-none">✧</span>

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <span className="font-headline text-4xl md:text-5xl font-bold text-on-primary tracking-tight text-center leading-tight">
          Aesthetic
        </span>
        <span className="font-headline text-4xl md:text-5xl font-bold text-on-primary/80 tracking-tight text-center leading-tight">
          Letters
        </span>
        <div className="mt-4 flex items-center gap-2">
          <span className="w-8 h-px bg-on-primary/30" />
          <span className="text-on-primary/50 text-xs font-body uppercase tracking-[0.25em]">
            style your words
          </span>
          <span className="w-8 h-px bg-on-primary/30" />
        </div>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
        <span className="font-label text-sm text-on-surface-variant tracking-wide">
          Loading...
        </span>
      </div>
    </div>
  );
}

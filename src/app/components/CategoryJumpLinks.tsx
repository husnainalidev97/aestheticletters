"use client";

interface CategoryLink {
  label: string;
  emoji: string;
  id: string;
}

interface CategoryJumpLinksProps {
  categories: CategoryLink[];
  onExpandAll?: () => void;
}

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export { slugify };

export default function CategoryJumpLinks({
  categories,
  onExpandAll,
}: CategoryJumpLinksProps) {
  const handleClick = (id: string) => {
    if (onExpandAll) onExpandAll();

    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-4 rounded-2xl bg-surface-container-low p-3 sm:p-4 transition-colors duration-300">
      <p className="text-center text-xs sm:text-sm font-body text-on-surface-variant mb-2 sm:mb-3">
        Jump to style:
      </p>
      <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center sm:overflow-x-visible scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleClick(cat.id)}
            className="inline-flex items-center gap-1 shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-surface-container-lowest text-xs sm:text-sm font-body font-medium text-on-surface hover:bg-surface-container hover:text-primary transition-colors cursor-pointer"
          >
            <span>{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}

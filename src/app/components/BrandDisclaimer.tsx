export interface BrandDisclaimerProps {
  brands: string[];
}

export default function BrandDisclaimer({ brands }: BrandDisclaimerProps) {
  const list = brands.filter(Boolean);
  if (list.length === 0) return null;

  const last = list[list.length - 1];
  const rest = list.slice(0, -1);
  const names = rest.length === 0 ? last : `${rest.join(", ")} and ${last}`;

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[150px]">
      <div className="mt-4 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-4 text-center text-sm text-on-surface-variant">
        <strong>Independent tool:</strong> Aesthetic Letters is not affiliated
        with, endorsed by, or sponsored by {names}. This is an unofficial
        Unicode text-styling tool and does not imply any partnership with those
        platforms.
      </div>
    </div>
  );
}

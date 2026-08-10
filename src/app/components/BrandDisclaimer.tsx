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
    <div className="w-full px-4 md:px-[150px] py-3 bg-surface-container-low border-t border-outline-variant/10 text-center text-xs text-on-surface-variant">
      <strong>Independent tool:</strong> Aesthetic Letters is not affiliated
      with, endorsed by, or sponsored by {names}. This is an unofficial Unicode
      text-styling tool and does not imply any partnership with those platforms.
    </div>
  );
}

export const ADS_EXCLUDED_PATHS = [
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-and-services",
  "/disclaimer",
];

export function adsEnabledForPath(pathname: string) {
  return !ADS_EXCLUDED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
}

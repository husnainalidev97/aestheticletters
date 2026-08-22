export const ADS_EXCLUDED_PATHS = [
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-and-services",
  "/disclaimer",
  "/alphabet-fonts",
];

function isAlphabetSpoke(pathname: string) {
  return /^\/[a-z]-in-different-fonts(?:\/|$)/.test(pathname);
}

export function adsEnabledForPath(pathname: string) {
  if (isAlphabetSpoke(pathname)) return false;
  return !ADS_EXCLUDED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
}

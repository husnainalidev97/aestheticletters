import { NextResponse, type NextRequest } from "next/server";

// EEA + UK + Switzerland (jurisdictions where Google requires consent for personalized ads)
const EEA_PLUS = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU",
  "IS", "IE", "IT", "LV", "LI", "LT", "LU", "MT", "NL", "NO", "PL", "PT", "RO",
  "SK", "SI", "ES", "SE", "CH", "UK", "GB",
]);

function requiresConsent(request: NextRequest): boolean {
  // Vercel Edge provides the country in this header on its platform.
  const country = request.headers.get("x-vercel-ip-country") || "";
  if (!country) return true; // be safe when we cannot determine location
  return EEA_PLUS.has(country.toUpperCase());
}

export function middleware(request: NextRequest) {
  // Forward the pathname to server components so they can make route-aware
  // decisions (e.g. disabling the AdSense loader on non-monetized pages).
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  const need = requiresConsent(request) ? "1" : "0";
  response.cookies.set("al-geo-consent-required", need, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)", "/"],
};

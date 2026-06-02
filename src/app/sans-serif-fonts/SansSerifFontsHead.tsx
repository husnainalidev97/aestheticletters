/**
 * Server component that injects preconnect / dns-prefetch hints for
 * Google Fonts into the <head> so the browser can start the TLS
 * handshake before client JS runs.  This shaves ~200-400 ms off the
 * font-loading waterfall compared to injecting the links via useEffect.
 */
export default function SansSerifFontsHead() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    </>
  );
}

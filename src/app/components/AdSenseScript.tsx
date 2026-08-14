interface AdSenseScriptProps {
  /** Whether the visitor is in a region that requires explicit ad consent.
   *  When true, ad requests are paused until consent is granted.
   *  When false, ads may load immediately. */
  requiresConsent?: boolean;
}

const AD_CLIENT = "ca-pub-5520146667836147";

export default function AdSenseScript({ requiresConsent = true }: AdSenseScriptProps) {
  const pauseAdRequests = requiresConsent ? 1 : 0;

  return (
    <>
      <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
      <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.adsbygoogle=window.adsbygoogle||[];window.adsbygoogle.pauseAdRequests=${pauseAdRequests};`,
        }}
      />
      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`}
        crossOrigin="anonymous"
      />
    </>
  );
}

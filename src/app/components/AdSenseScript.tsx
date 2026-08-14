interface AdSenseScriptProps {
  /** Whether the visitor is in a region that requires explicit ad consent.
   *  When true, ad requests are paused until consent is granted.
   *  When false, ads may load immediately. */
  requiresConsent?: boolean;
}

const AD_CLIENT = "ca-pub-5520146667836147";

export default function AdSenseScript({ requiresConsent = true }: AdSenseScriptProps) {
  const pauseAdRequests = requiresConsent ? 1 : 0;

  // We wrap window.adsbygoogle in a getter/setter because the AdSense script
  // replaces the object when it loads; this wrapper keeps pauseAdRequests
  // attached to the latest object so consent checks never get lost.
  const guardScript = `
(function(){
  var pause=${pauseAdRequests};
  var initial=window.adsbygoogle||[];
  initial.pauseAdRequests=pause;
  var actual=initial;
  Object.defineProperty(window,'adsbygoogle',{
    get:function(){return actual;},
    set:function(value){
      actual=value;
      if(actual) actual.pauseAdRequests=pause;
    },
    configurable:true
  });
  window.__alSetAdPause=function(paused){
    pause=paused?1:0;
    if(actual) actual.pauseAdRequests=pause;
  };
  window.adsbygoogle=initial;
})();
`;

  return (
    <>
      <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
      <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
      <script dangerouslySetInnerHTML={{ __html: guardScript }} />
      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`}
        crossOrigin="anonymous"
      />
    </>
  );
}

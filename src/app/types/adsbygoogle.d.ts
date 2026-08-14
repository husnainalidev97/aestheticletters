export {};

interface AdsByGoogleArray extends Array<unknown> {
  pauseAdRequests?: number;
  loaded?: boolean;
}

declare global {
  interface Window {
    adsbygoogle?: AdsByGoogleArray;
    __alSetAdPause?: (paused: boolean) => void;
  }
}

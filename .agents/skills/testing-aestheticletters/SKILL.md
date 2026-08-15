---
name: Testing Aesthetic Letters Generators
description: How to end-to-end test font generators and run Lighthouse on the Aesthetic Letters Next.js app.
---

# Testing Aesthetic Letters Generators

## Scope
Covers running a production build of the Next.js app, interacting with a font generator page, verifying copy-to-clipboard, and auditing performance with Lighthouse.

## One-time environment
- Node 20 and npm are required. The repo uses Next.js 16, React 19, Tailwind v4.
- Dependencies are installed with `npm install`.
- Google Chrome and Lighthouse (`npx lighthouse`) are used for audits.

## Running the app for testing
1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```
   This serves on `http://localhost:3000`.

## Generator page test flow
1. Navigate to the generator path (e.g. `/tiktok-font-generator`).
2. Accept the cookie banner if it blocks the UI. Consent is stored in `localStorage`/`al-cookie-consent`; it will not reappear on reload once accepted.
3. Type a sample phrase in the textarea.
4. Verify that **every** visible category card updates live.
5. Scroll to ensure off-screen category cards rendered by `LazyMount` also update.
6. Click a Copy button. Expected:
   - Button turns green and shows a checkmark.
   - A "Style Copied to Clipboard" toast appears.
   - Pasting the clipboard content elsewhere shows the styled Unicode text.
7. If the page exposes a "Show More Categories" button (depends on `initialVisibleCategories`), click it and confirm additional category cards render.

## Verifying clipboard content
- Copying uses `navigator.clipboard.writeText` with an `execCommand('copy')` fallback.
- For a visible paste test, open `data:text/html,<textarea autofocus style="font-size:24px;width:100vw;height:100vh">paste here</textarea>` and press `Ctrl+V`.
- If `document` is not focused, programmatic clipboard reads may fail with `NotAllowedError`; use a real mouse click to focus the page first.

## Lighthouse performance audit
Run mobile 4x CPU-throttled audit from the repo root:
```bash
npx lighthouse http://localhost:3000/<generator-path> \
  --form-factor=mobile \
  --throttling-method=simulate \
  --throttling.cpuSlowdownMultiplier=4 \
  --chrome-flags="--headless=new --no-sandbox --disable-gpu" \
  --output=html --output=json \
  --output-path=/home/ubuntu/screenshots/lighthouse-<page>
```

Check:
- Performance score >= 90
- Total Blocking Time < 200 ms
- Cumulative Layout Shift ≈ 0

The generated `*.report.html` can be opened in Chrome at `file://<path>`.

## AdSense integration verification
- The AdSense script is injected in `<head>` for non-consent regions and loaded dynamically by `src/app/components/ConsentAwareScripts.tsx` after the user grants ads in consent-required regions. The publisher ID is `ca-pub-5520146667836147`.
- `NEXT_PUBLIC_ADSENSE_HERO_SLOT`, `NEXT_PUBLIC_ADSENSE_CONTENT_SLOT`, and `NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT` are baked at build time. To test placeholder visibility, create `.env.local`, rebuild, and restart `npm start`.
- Ad placeholders only render when a `slot` prop is truthy (`src/app/components/GoogleAd.tsx`).
- Consent wiring is in `src/app/components/ConsentAwareScripts.tsx`; it only loads `adsbygoogle.js` and unpauses `window.adsbygoogle.pauseAdRequests` once the user grants "Personalized advertising".
- Verifying in Chrome DevTools Network that no `pagead2.googlesyndication.com` or `doubleclick.net` requests fire before cookie consent is a valid end-to-end check.
- AdSense may auto-inject a hidden `<ins class="adsbygoogle adsbygoogle-noablate">` element on script load; count them in DevTools Console with `document.querySelectorAll('ins.adsbygoogle.adsbygoogle-noablate').length`.

## Chrome remote debugging for programmatic checks
- Launch Chrome with `--remote-debugging-port=9222 --remote-allow-origins='*'`.
- `http://localhost:9222/json` lists page targets. Opening DevTools adds a `devtools://` target, so always pick the target whose `url` is the page under test rather than `json()[0]`.
- Use the browser WebSocket URL from `http://localhost:9222/json/version` for `Browser.grantPermissions` calls (e.g. to pre-grant clipboard access), but clipboard copy buttons may still trigger a permission prompt unless triggered by a real user gesture.

## Clipboard copy button testing
- Copy uses `navigator.clipboard.writeText`. Chrome may display a permission bubble.
- If a permission bubble appears, it can usually be allowed by clicking the **Allow** button with `computer` mouse interactions.
- Once allowed, the copy icon should turn green and show a "Style Copied to Clipboard" toast.

## Common pitfalls
- Cookie banner may overlay the generator on first load; accept it before interacting.
- `navigator.clipboard` requires a user gesture and a focused document. Programmatic `button.click()` from the console may not trigger clipboard writes in a fresh session; use a real mouse click.
- Generator category cards are wrapped in `LazyMount` with `inView=false` on the server, so cards below the fold may not render until scrolled near the viewport.
- Some generator pages set `initialVisibleCategories` equal to the total number of categories, so no "Show More Categories" button appears.

## Testing alphabet letter sub-pages (e.g. `/k-in-different-fonts`)
- Vercel preview URLs for PRs may be gated behind `vercel.com/login`; if so, fall back to a local production build (`npm run build` then `npm start`).
- Verify the desktop top nav highlights `Alphabet Fonts` for any `*-in-different-fonts` sub-page.
- Verify the mobile hamburger drawer contains a highlighted link for the specific letter page (e.g. `K in Different Fonts`).
- The mobile drawer panel should have `max-h-[80vh] overflow-y-auto` (or equivalent inline styles) so the long generator link list remains reachable on small viewports.
- Check the 22 standard style cards, Unicode Names table rows, Other Alphabets entries, FAQ questions, and Explore More Tools links against `src/app/k-in-different-fonts/page.tsx` and `src/app/components/KPageContent.tsx`.
- Clipboard paste tests can be confirmed by opening `data:text/html,<textarea autofocus style='font-size:24px;width:100vw;height:100vh'>paste here</textarea>` and pressing `Ctrl+V`.

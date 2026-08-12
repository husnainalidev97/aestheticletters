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

## Common pitfalls
- Cookie banner may overlay the generator on first load; accept it before interacting.
- `navigator.clipboard` requires a user gesture and a focused document. Programmatic `button.click()` from the console may not trigger clipboard writes in a fresh session; use a real mouse click.
- Generator category cards are wrapped in `LazyMount` with `inView=false` on the server, so cards below the fold may not render until scrolled near the viewport.
- Some generator pages set `initialVisibleCategories` equal to the total number of categories, so no "Show More Categories" button appears.

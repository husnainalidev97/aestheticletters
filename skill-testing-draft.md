---
name: testing-font-generators
description: Test font generator pages end-to-end including Unicode correctness, card rendering, and copy functionality. Use when verifying font generator pages (Bold, Number, etc.).
---

# Testing Font Generator Pages

## Overview

Font generator pages (Bold Font Generator, Number Font Generator, etc.) convert user input text into Unicode characters using mathematical alphanumeric symbol blocks. Testing must verify both visual rendering AND underlying codepoint correctness.

## Running the App Locally

```bash
cd /home/ubuntu/repos/aestheticletters
npm run dev
# Dev server runs on http://localhost:3000
```

## Key Test Areas

### 1. Card Presence and Naming
- Navigate to the generator page
- First 3 cards are visible by default; use "Show X More Categories" button or jump link buttons to reveal all
- Jump links (styled as buttons with star prefix) immediately expand and scroll to a specific card
- Verify card count and exact names match the spec

### 2. Unicode Correctness (Critical)
Visual inspection alone is insufficient — fonts may render similar-looking glyphs from different codepoints. Use browser console to extract exact codepoints:

```javascript
// Extract codepoints from rendered text
const text = "rendered_text_here";
[...text].map(c => 'U+' + c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0'));
```

**Common edge cases to test:**
- Double-Struck has 7 uppercase exceptions (C, H, N, P, Q, R, Z) that use different Unicode blocks
- Negative Circled: lowercase maps to same uppercase character; digits use dingbat block (U+2776-U+277E), digit 0 uses U+24EA
- Styles without digit support (Bold Italic, Bold Script, Bold Fraktur, Negative Squared) should pass digits through unchanged
- Bold Italic Sans also has no digit support

### 3. Copy Button
- Click the copy icon button on any style output
- Expected: button changes to green checkmark with "Done" label + toast notification "Style Copied to Clipboard"
- Verify no console errors on copy action

## Testing Approach

1. **Use jump link buttons** to navigate between cards — they're more reliable than scrolling
2. **Use browser console** for Unicode verification rather than relying on visual rendering
3. **Test digit handling** for each card since some styles support digits, some don't
4. **Record browser interactions** and annotate with structured test markers

## Common Issues

- Port 3000 might already be in use from a previous `npm run dev` — check with `lsof -i :3000`
- Vercel preview deployments might have authentication protection — test locally instead
- Some Unicode characters render as boxes on certain systems — use codepoint extraction to verify correctness regardless of font support
- The "Show X More Categories" button might not scroll properly — use jump link buttons instead

## Page Structure

Each font generator page has:
- Text input area at top
- Jump-to-style buttons (one per category)
- Category sections, each containing multiple sub-style cards (base + decorative variations)
- Each sub-style card has: Preview, Image, Share, Save, Copy action buttons

## Devin Secrets Needed

No secrets required — testing is done against localhost dev server.

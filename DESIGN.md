# Design System Document: High-Performance Editorial Specimen

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Curator"**
This design system moves beyond the utility of a "tool" and enters the realm of a "gallery." We are creating a high-end, editorial experience for font generation. The goal is to treat every generated string of text as a piece of art. 

We break the traditional "SaaS template" look by utilizing **Intentional Asymmetry** and **Tonal Depth**. By leaning into high-contrast typography and a neutral, sophisticated palette, we ensure the user's focus remains entirely on the "Aesthetic Letters" themselves. This is not a cluttered dashboard; it is a clean, expansive specimen book.

---

## 2. Colors & Surface Architecture

### The Palette
We utilize a sophisticated Material 3-based palette. The core is a neutral, warm-leaning base (`background: #fcf9f8`) contrasted with a vibrant, high-energy primary (`primary: #451ebb`).

*   **Primary Action:** `#451ebb` (The signature "Copy" color).
*   **Neutral Base:** `#fcf9f8` (Surface) and `#1c1b1b` (On-Surface).
*   **Depth Tiers:** Use `surface_container_lowest` through `surface_container_highest` to define hierarchy.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections, cards, or inputs. 
Boundaries must be defined exclusively through:
1.  **Background Color Shifts:** Place a `surface_container_low` card on a `surface` background.
2.  **Intentional Negative Space:** Use our spacing scale (specifically `12` or `16`) to create mental boundaries.

### Glass & Gradient Implementation
To achieve a premium feel, floating elements (like the Sticky Navigation or "Copied!" Toasts) must use **Glassmorphism**. 
*   **Formula:** `surface` color at 80% opacity + `backdrop-filter: blur(12px)`.
*   **Signature Texture:** Main CTAs should utilize a subtle linear gradient from `primary` (#451ebb) to `primary_container` (#5d3fd3) at a 135-degree angle to provide visual "soul."

---

## 3. Typography: The Editorial Scale

We pair **Space Grotesk** (Modern, Tech-forward) with **Manrope** (Clean, Swiss-style).

*   **Display & Headlines (Space Grotesk):** Used for the brand's voice and hero sections. It feels intentional and high-performance.
    *   *Display-LG:* 3.5rem (The "Hero" statement).
    *   *Headline-MD:* 1.75rem (Section titles).
*   **UI & Body (Manrope):** Used for readability and utility.
    *   *Body-LG:* 1rem (The generated font output for maximum clarity).
    *   *Label-MD:* 0.75rem (Button text and metadata).

**Editorial Note:** When displaying "Aesthetic" decorative fonts, wrap them in a container with `surface_container_highest` to elevate the text as if it were an artifact in a museum.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are forbidden. We achieve lift through **Tonal Layering** and **Ambient Light**.

*   **The Layering Principle:** 
    *   Base Page: `surface`
    *   Secondary Content Areas: `surface_container_low`
    *   Interactive Cards: `surface_container_lowest` (creates a "lifted" paper effect).
*   **Ambient Shadows:** If an element must float (e.g., a modal or toast), use a "Ghost Shadow": `0px 20px 40px rgba(28, 27, 27, 0.06)`. The shadow color is a low-opacity version of `on_surface`.
*   **The Ghost Border:** If accessibility requires a stroke (e.g., in high-contrast mode), use `outline_variant` at **20% opacity**. Never 100%.

---

## 5. Components

### Input Fields
*   **Style:** No borders. Use `surface_container_low` as the background.
*   **Shape:** `md` (0.375rem) roundedness.
*   **Interaction:** On focus, transition the background to `surface_container_high` and add a subtle `primary` bottom-glow (2px).
*   **Tap Target:** Minimum height 56px (exceeding the 48px requirement for premium feel).

### Action Cards (The Grid)
*   **Layout:** Use an asymmetrical grid where some cards span 2 columns to break monotony.
*   **Style:** `surface_container_lowest` background. No border.
*   **Iconography:** Icons should be `primary` color, contained within a `primary_fixed` circular background.

### Sticky Navigation
*   **Style:** Glassmorphic (`surface` @ 80% + blur).
*   **Layout:** 150px horizontal padding to align with AdSense buffer zones.
*   **Constraint:** Height must be exactly `16` (5.5rem) on the spacing scale.

### "Copied!" Toast Notifications
*   **Style:** `inverse_surface` background with `inverse_on_surface` text.
*   **Animation:** Slide-in from bottom-center with a "spring" easing.
*   **Radius:** `full` (9999px) for a pill-shaped, friendly notification.

### AdSense Editorial Buffers
To maintain the high-end feel while accommodating ads, we treat ad placements as "Negative Space Galleries." 
*   **Rule:** Every ad unit must be preceded and followed by a `24` (8.5rem) or `20` (7rem) spacing block.
*   **Padding:** Maintain a strict 150px "Buffer Zone" around high-frequency interaction areas (like the main font input) to prevent accidental clicks and maintain the "Minimalist" aesthetic.

---

## 6. Do's and Don'ts

### Do
*   **Do** use `20` (7rem) and `24` (8.5rem) spacing scales for section breaks. White space is a luxury.
*   **Do** ensure all buttons and interactive chips meet the **48px minimum tap target**.
*   **Do** use `primary` exclusively for the "final action" (Copying or Generating).
*   **Do** use `surface_container_high` for hover states on cards.

### Don't
*   **Don't** use 1px black or grey borders. Use background color shifts.
*   **Don't** use standard "system" fonts. Stick strictly to the Manrope/Space Grotesk pairing.
*   **Don't** crowd the AdSense units. Give them the 150px buffer to protect the user experience.
*   **Don't** use harsh, 100% black shadows. Use tinted, diffused ambient glows.
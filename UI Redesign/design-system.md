# Design System

Everything here is written to be built as CSS custom properties in Tailwind 4's `@theme` (`americall-site/src/styles/global.css`) and referenced by token name only. Values marked **(test)** must be confirmed with screenshots during the build, because they depend on how the real font renders.

## 1. Idea and the one interactive feature

**Idea sentence:** On this page, **Americall's four team sizes (2, 5, 10 and 20 agents, each with its own layer of managers)** become **the spine of the colour chapters**: every chapter answers "who works your campaign", and the page ends at a picker that shows exactly that.

Competitor test: Springs Connect sells pay-per-appointment without team packages; Touchstone publishes no team sizes. The sentence fails for both, so the idea belongs to Americall.

**Team-size picker** (the one interactive feature):
- A segmented control with four options: 2 · 5 · 10 · 20 agents. Default: 5 (the package marked `highlight: true` in `site.ts`).
- Choosing one shows that package's name, its one-sentence description and every row of what is included, in words, from `servicePackages` in `site.ts`. Weekly appointment numbers appear only if the owner approves "target" wording (README C8).
- Its button reads "Ask about <package name>" and opens `/contact/?package=<slug>`, which pre-fills the form's message field with the package name.
- Phone: the control is full width, each segment at least 44px tall, thumb-reachable; the result appears directly below.
- No JavaScript: all four packages render as stacked blocks (desktop: the full table), so nothing is hidden.
- Built as radio inputs (`<fieldset>` + `<legend>`) so keyboard and screen readers work without custom ARIA.

## 2. Colour

Brand values kept from `global.css` and sampled from `Logo/americall-logo-final.png` (swatches) on 2026-10-20. Contrast ratios computed with the WCAG formula.

### Base tokens

| Token | Value | Role |
| --- | --- | --- |
| `--navy` | `#02122C` | Dark chapter ground; ink on light chapters |
| `--white` | `#FFFFFF` | Light chapter ground; ink on dark chapters |
| `--soft` | `#F5F7FA` | Second light ground (one step from white) |
| `--eagle-blue` | `#103E68` | Mid chapter ground (logo swatch) |
| `--red` | `#D71920` | The accent: primary button, active state, the one red field |
| `--red-press` | `#AC1923` | Button hover/press (logo swatch) |
| `--ink-2-on-light` | `#5B6472` | Secondary notes only, on white/soft (5.98:1 on white) |
| `--ink-2-on-dark` | `#B9C3D3` | Secondary notes only, on navy (10.49:1) |

Running text is always full ink (`--navy` or `--white`), never the secondary tokens.

### Contrast checks (pass/fail at 16px text = 4.5:1, large text = 3:1)

| Pair | Ratio | Use |
| --- | --- | --- |
| white on navy | 18.66 | all text |
| navy on white | 18.66 | all text |
| navy on soft | 17.39 | all text |
| white on eagle blue | 10.99 | all text |
| white on red | 5.19 | button labels, text in the red field |
| white on red-press | 7.20 | hovered button |
| **red on navy** | **3.60** | **large text (24px+) only.** Never red body text or links on navy. |
| red on white | 5.19 | links/hover ink on white allowed |

### Chapter tints for the "How a campaign runs" accordion (dark to light, one hue)

| Stage | Ground | Ink | Ratio |
| --- | --- | --- | --- |
| 1 | `#02122C` | white | 18.66 |
| 2 | `#0B2A4A` | white | 14.54 |
| 3 | `#103E68` | white | 10.99 |
| 4 | `#2E5F93` | white | 6.62 |
| 5 | `#A9C4E4` | navy | 10.40 |

### Chapter colour sequence (Home)

| Chapter | Ground | Ink | Pill tone |
| --- | --- | --- | --- |
| Hero | navy | white | dark |
| What we run (4 fields) | white → eagle blue → soft → navy | navy / white / navy / white | light / dark / light / dark |
| How a campaign runs | white (intro) + navy→pale accordion | navy | light |
| Who we call for (industries) | eagle blue | white | dark |
| Packages + picker | soft | navy | light |
| Numbers (proof) | navy, tiles one step lighter (`#0B2A4A`) | white | dark |
| Questions | white / soft bands | navy | light |
| Request a demo | navy ground, **red coupon card** | white | dark |
| Footer | navy | white | dark |

Rule: two neighbouring chapters always differ clearly in lightness (white next to soft does **not** count as different). The one intended exception: the footer continues the navy ground of the demo chapter above it, as the direction sheet asks ("the footer takes the colour of the last chapter"). Red appears as a field at most once per page (README C4).

## 3. Type

Dealt type system: **Chivo** only (one family). Self-host it; do not load from Google Fonts (privacy and speed). Check the current version of a self-hosting package (for example `@fontsource/chivo`) at build time; weights 400, 700, 900, Latin subset, `font-display: swap`. Preload only the 900 weight used by the hero headline.

| Token | Value | Range | Used for |
| --- | --- | --- | --- |
| `--step-small` | `clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)` | 13–14px | notes, labels, pill links |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)` | 17–19px | paragraphs, form inputs, table cells |
| `--step-lead` | `clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)` | 20–26px | supporting sentences, FAQ questions, menu rows |
| `--step-head` | `clamp(2.25rem, 1.2rem + 5vw, 5.5rem)` | 36–88px | section headings, service statements, package names on phones |
| `--step-display` | below 768px: `clamp(4rem, 20vw, 5rem)`; 768px and up: `clamp(4rem, 1rem + 12.5vw, 13.75rem)` | 64–80px phone, 112–220px desktop | hero headlines (Home, Services, 404) only |

- Display: Chivo 900, capitals, tracking −0.03em (README C3), leading 0.88.
- Text: Chivo 400 for paragraphs, 700 for navigation, buttons and labels; leading 1.5; tracking 0; 45–75 characters per line.
- Five sizes on the whole site, no sixth. Every blueprint size maps to one of these.
- Left-aligned everywhere; the only centred element is the pill.

### Measured headline fit

Measured 2026-10-20 in Chromium with Chivo 900 loaded from Google Fonts, tracking −0.03em, against the content widths these blueprints give each heading (page margins from §4). "L" = lines. Every heading below is 2 lines or fewer at every width; re-run the check after any copy change.

| Heading | Size token | Box | 320 | 375 | 768 | 1024 | 1440 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TRAINED / CALLERS | display | full width | 2L (64px) | 2L | 2L | 2L | 2L |
| TRAINED FOR YOUR OFFER | head | 8 cols | 2L | 2L | 2L | 2L | 2L |
| YOUR DIALER, HANDLED | head | 8 cols | 2L | 2L | 2L | 2L | 2L |
| CAMPAIGNS WATCHED LIVE | head | 8 cols | 2L | 2L | 2L | 2L | 2L |
| ONE ACCOUNT MANAGER | head | 8 cols | 2L | 2L | 2L | 2L | 2L |
| HOW IT RUNS | head | cols 1–5 | 1L | 1L | 2L | 2L | 1L |
| HOME IMPROVEMENT | head | cols 1–9 | 2L | 2L | 2L | 2L | 1L |
| TEAM SIZES | head | cols 1–3 (full width below 1024) | 1L | 1L | 1L | 2L | 2L |
| NUMBERS SO FAR | head | 6 cols | 2L | 1L | 2L | 2L | 2L |
| QUESTIONS, ANSWERED | head | full width | 2L | 2L | 1L | 1L | 1L |
| REQUEST / A DEMO | head | coupon left panel | 2L | 2L | 1L | 2L | 2L |
| WHAT WE / DO | display | full width | 2L | 2L | 1L | 1L | 1L |
| NOT FOUND | display | full width | 2L | 2L | 1L | 1L | 1L |
| ACCELERATION (phone package block) | head | full width | 1L | 1L | 1L | — | — |

Rejected because they failed this check: "HOW A CAMPAIGN RUNS" (3 lines at 320, 768, 1440), "OUR SERVICES" and "PAGE NOT FOUND" at display size (overflow / 3 lines at 320), "REQUEST A FREE DEMO" (3–4 lines in the coupon), package names at `--step-head` inside table columns (overflow), and `info@americall.io` at display size (overflows at every width). At 320px the email also overflows at `--step-head`, so it breaks after the "@" below 375px.

**Fallback if the owner rejects capitals or the large display (C3/C6):** Chivo 800, sentence case, tracking −0.01em, `--step-display` capped at 7.5rem (120px). Layout unchanged.

## 4. Space, grid, radius

| Token | Value |
| --- | --- |
| Breakpoints | base (phone, designed at 375 and checked at 320), `md` 768px, `lg` 1024px, `xl` 1280px |
| `--gutter` (page margin) | 16px base · 24px `md` · 32px `xl` |
| Grid | 12 columns, 24px gaps (`md`+); 4 columns, 16px gaps on phones |
| Max content width | 1440px inside full-bleed chapters (grounds always run edge to edge) |
| Chapter padding | `clamp(5rem, 10vw, 10rem)` top and bottom; chapters butt together with **no gap and no divider** |
| `--radius` | 16px: coupon card, tiles, inputs, the open phone menu |
| `--radius-pill` | 999px: the nav pill, every button, the picker segments |
| Tap targets | 44 × 44px minimum on every control |

No thin rules, no outlined boxes, no shadows at rest. Surfaces separate by a change of ground. Lines are allowed only inside form fields and the packages table.

## 5. The glass pill navigation (spec)

Built as `src/components/GlassPill.astro` plus a small script `src/scripts/pill.ts`. One element on the site uses `backdrop-filter`: this one.

### Structure

```html
<a class="skip-link" href="#main">Skip to content</a>
<header class="pill" data-tone="solid">              <!-- "solid" until the script runs -->
  <nav aria-label="Main">
    <a href="/" aria-label="Americall home">[eagle mark + wordmark]</a>
    <ul> Services · Packages · FAQ · Contact </ul>   <!-- hidden below 768px -->
    <a class="btn btn-primary" href="/contact/">Request a demo</a>
    <button aria-expanded="false" aria-controls="site-menu">Menu</button>  <!-- below 768px only -->
  </nav>
  <div id="site-menu" hidden> … </div>                <!-- phone sheet -->
</header>
```

Links: Services (`/services/`), Packages (`/#packages`), FAQ (`/faq/`), Contact (`/contact/`). The current page gets `aria-current="page"`.

### Geometry

| | Desktop (768px and up) | Phone (below 768px) |
| --- | --- | --- |
| Position | `fixed`, `top: calc(14px + env(safe-area-inset-top))`, centred | `fixed`, `top: calc(10px + env(safe-area-inset-top))`, `inset-inline: 16px` |
| Size | `inline-size: min(880px, 100% - 48px)`, `block-size: 60px` | full width minus 32px, `block-size: 56px` |
| Padding | `8px 8px 8px 20px` | `6px 6px 6px 14px` |
| Contents | mark + wordmark (28px tall) · 4 links (`--step-small`, 700, 28px apart) · "Request a demo" (44px tall, `--radius-pill`) | mark + wordmark (wordmark hidden below 340px) · "Demo" button (44px tall) · menu button (44 × 44) |
| `z-index` | 60 | 60 |

### Tone (the colour-by-chapter move)

| Tone | Fill | Blur | Rim and lift | Ink |
| --- | --- | --- | --- | --- |
| `dark` | `rgba(2,18,44,0.55)` | `blur(12px) saturate(1.2)` | `inset 0 0 0 1px rgba(255,255,255,.18), inset 0 1px 0 rgba(255,255,255,.22), 0 8px 28px -12px rgba(2,18,44,.45)` | white |
| `light` | `rgba(255,255,255,0.65)` | same | `inset 0 0 0 1px rgba(2,18,44,.10), inset 0 1px 0 rgba(255,255,255,.9), 0 8px 28px -12px rgba(2,18,44,.25)` | navy |
| `solid` (no JS / fallback) | `rgba(2,18,44,0.94)` | none | same as dark | white |

- Why a 12px blur when biyelo uses 3px: Americall's chapters put huge display type behind the pill; a light blur leaves letters readable behind the links and competes with them.
- Contrast: white on the dark pill over navy, eagle blue and red stays above 12:1. Over **white** it drops to 4.18:1, which is why the tone **must** switch to light over light chapters (navy on light pill: 18.66:1 over white, 15.40:1 over the palest accordion tint).
- Switching: every chapter `<section>` carries `data-tone="dark|light"`. One `IntersectionObserver` watches a 1px line at the pill's vertical centre (`rootMargin` = `-<centre>px 0px -<viewport − centre − 1>px 0px`, recomputed on resize) and copies the tone of the section under it onto the header. `transition: background-color 300ms ease, color 300ms ease, box-shadow 300ms ease`.
- Fallbacks:
  - `@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)))` → fill alpha 0.94.
  - `@media (prefers-reduced-transparency: reduce)` → solid `#02122C` or `#FFFFFF`, no blur.
  - `@media (forced-colors: active)` → `border: 1px solid CanvasText`.
  - Always write both `backdrop-filter` and `-webkit-backdrop-filter` (Safari).

### Phone menu

- Menu button: 44 × 44, two-bar icon that becomes a cross; `aria-expanded` toggles; visible label "Menu" for screen readers.
- Open state: the pill extends downward into a sheet with `--radius` 28px corners, fill alpha 0.96 (content behind must not distract), `max-block-size: calc(100svh - 20px - env(safe-area-inset-top))`, scrolls internally.
- Sheet content: Services, Packages, FAQ, Contact as 56px rows in `--step-lead` 700; a full-width "Request a demo" button (52px); `info@americall.io` as a link.
- Behaviour: Escape closes; focus moves to the first link on open and returns to the menu button on close; `main` and `footer` get `inert` while open; the page behind gets a navy scrim at 40% that closes the menu when tapped; page scroll is locked; it closes on link tap and when the window grows past 768px.
- Motion: open 200ms (opacity 0→1, `translateY(-8px)`→0, `scale(.98)`→1, origin top); close 160ms. Reduced motion: opacity only.
- Without JavaScript: the menu button is rendered as a plain "Menu" link to the footer's page list (`#site-map`); the script swaps it for the real button.

### Page integration

- First chapter reserves room: `padding-top: calc(14px + 60px + 32px)` desktop, `calc(10px + 56px + 24px)` phone, plus the safe-area inset.
- Every element with an `id` gets `scroll-margin-top: 96px` so anchor jumps land below the pill.
- The pill is always visible (no hide-on-scroll): predictable on phones and keeps the demo action one tap away.
- Hover styles only inside `@media (hover: hover) and (pointer: fine)`; `-webkit-tap-highlight-color: transparent` with a visible `:active` state instead.

## 6. Components

| Component | Spec |
| --- | --- |
| Primary button | Red fill, white `--step-body` 700 label, `--radius-pill`, 52px tall (44px inside the pill), 28px side padding. Hover/press: `--red-press`. Press: `scale(.97)` 120ms. |
| Secondary action | Text link with a trailing arrow, full ink, underline on hover/focus. |
| Focus | `outline: 3px solid` (white on dark chapters, navy on light), `outline-offset: 3px`, on every control. Never removed. |
| Inputs | Filled blocks 54px tall, `--radius`, ground one step lighter than the card; **visible labels** above each field at `--step-small` 700 (the blueprint's placeholder-only labels disappear while typing, so they are not used); error text below in white on the red card with an icon-free message. |
| Table (packages) | Allowed lines only between header and body; zebra rows one tone step apart; answers in words, never ticks. |
| Picker segments | Radio inputs styled as pill segments, 44px+ tall; selected segment navy fill, white ink. |

## 7. Motion

Signature move: the pill's colour by chapter (§5). Around it:
1. **Entrances:** for each section, heading → text → picture, staggered 70ms, rising 24px with opacity, 500ms, `cubic-bezier(0.22, 1, 0.36, 1)`, once, triggered at 15% visibility. Content is visible by default and only animated when the script adds a class, so nothing stays hidden if scripts fail (the SalesRoads failure in `research.md`).
2. **Feedback:** every button, link, picker segment and accordion stage has hover, focus and press states.
3. **Accordion:** stage opening animates `flex-basis` over 450ms (from the blueprint); on phones the stage expands by height.
4. **One moving picture:** the active industry photo in "Who we call for" drifts `scale(1)`→`scale(1.04)` over 8s, transform only; switching industries cross-fades photos in 250ms.
5. `prefers-reduced-motion: reduce`: no travel, no scale, no drift; opacity fades of 150ms at most; the pill tone still switches (colour only).

Transform and opacity only, except the accordion's `flex-basis`. Remove the current site's carousels, auto-rotating tabs and border-trail animation.

## 8. Imagery rules

1. **Never** show an office, a call floor or a building as Americall's: there is no staffed office customers can visit.
2. **Never** show AI-generated or stock people as Americall staff (`Phase 1/project-context.md`).
3. Allowed, in order: (a) real photos of real Americall agents, with written consent, supplied by the owner; (b) credited open-collection photos of the **client trades** (solar roofs, roofing crews, HVAC units, houses) shown as the clients' world, never as Americall's work; (c) the eagle mark used large (footer, 404); (d) flat drawings in brand colours.
4. One treatment for all photos: full colour, square corners, no filters, no overlays except a neutral scrim under text.
5. Every found photo is downloaded into `americall-site/public/images/`, credited (footer credits line) and listed in the build report.
6. The design skill's floor (at least four real pictures per page) is **met only on pages that use trade photos or owner photos.** Home meets it with the five industry photos in "Who we call for"; Services reuses those photos; FAQ and Contact rely on colour and type and will show as a warning in the skill's inspector. That is accepted and recorded, not hidden. Owner agent photos, when supplied, go to the About page first.

## 9. Accessibility floor (WCAG 2.2 AA)

- Contrast per §2; red text never on navy below 24px.
- Skip link first in the page; landmarks: `header`, `nav`, `main`, `footer`.
- Every control reachable and operable by keyboard, with visible focus; menu and picker tested with a screen reader (VoiceOver iOS or TalkBack).
- Form: real `<label>`s, `autocomplete` values as today, errors announced (`aria-live="polite"`), success message moves focus to itself.
- Text resizes to 200% without loss; no horizontal scroll at 320px.
- `lang="en"`, page titles unique, images have alt text (decorative ones `alt=""`).

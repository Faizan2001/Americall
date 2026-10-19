# Page Blueprints

Every section lists: purpose (the claim it proves), ground and pill tone, desktop layout, phone layout, and the exact copy. Copy marked **[owner]** needs owner approval before launch; copy taken from the current site keeps its source line. Sizes use only the five type tokens in `design-system.md` §3.

Section geometry comes from the dealt direction sheet (seed `899247265`); deviations are listed under each section with the reason.

---

## Shared parts (all pages)

- **Glass pill navigation**: `design-system.md` §5.
- **Demo request chapter** ("the coupon"): Home §8 below; reused on Services, FAQ and Contact.
- **Packages table + team-size picker**: Home §5 below; reused on Services.
- **Footer**: Home §9 below.
- **`<head>`** on every page: unique `<title>` and description (keep the current ones, see `src/pages/*.astro`), `<link rel="canonical">` to `https://americall.io/<path>`, `og:url`, `og:image` (a 1200 × 630 brand image: navy ground, eagle mark, "Trained calling teams for U.S. service businesses", americall.io), `og:image:alt`, `twitter:card=summary_large_image`, Organization JSON-LD (name "Americall, Inc.", url, email `info@americall.io`, logo; address only if the owner approves showing it).

---

## Home (`/`)

### 1. Hero — ground navy · pill dark

Claim: Americall supplies trained calling teams that set and confirm appointments for U.S. service businesses.

Desktop (hero blueprint "Colour field, two-ink statement", adjusted):
- Full viewport (`min-height: 100svh`), flat navy, no image.
- Headline starts 15% down (below the pill clearance), left margin = `--gutter`. Two lines at `--step-display`, Chivo 900 capitals, leading 0.88. Line one white, line two red (red on navy = 3.60:1, allowed only because the text is 64px or larger).
- Bottom-right column, about 24vw wide (columns 9–12): the supporting sentence (`--step-lead`, white), then the primary button, then the note, then the secondary link.
- Bottom-left quarter stays empty navy (the one deliberate rest on the page).

Phone:
- Same field, `min-height: 100svh` (floor 560px). Headline from 16% height at the tested phone display size (`design-system.md` §3). Sentence, button (full width, 52px), note and link sit at bottom-left across 100% of the content width, ending 24px above the bottom edge plus the safe-area inset.

Copy:
- h1: line 1 `TRAINED` · line 2 `CALLERS`
- Sentence (`<p>`): "Calling teams that set and confirm qualified appointments for U.S. solar, roofing, HVAC, real estate and home improvement companies."
- Button: "Request a demo" → `/contact/`
- Note (`--step-small`, `--ink-2-on-dark`): "We'll contact you to set up a short demo call."
- Link: "See the packages →" → `#packages`

Deviations: the blueprint has no navigation (README C1) and a text-link action (house rule requires a real button on the first screen).

### 2. What we run — four statement fields · tones light / dark / light / dark

Claim: four services cover the work from hiring agents to reporting.

Desktop (blueprint "Statements on colour fields"): four full-bleed fields, each 72–80svh, butted together. Phrase at `--step-head` (900, capitals, two lines max) hugging the bottom-left with 28px margins; paragraph (`--step-body`, 30ch) near the top at column 8. Alternate fields mirror (phrase bottom-right, paragraph top-left at column 2). No section heading: the first phrase is the heading (`h2`), the others are `h3`.
Phone: fields 64svh; paragraph top-left across 80% width; phrase bottom-left; no mirroring.

| Field | Ground / ink | Phrase | Paragraph (from `site.ts` services, shortened) |
| --- | --- | --- | --- |
| a | white / navy | TRAINED FOR YOUR OFFER | "We recruit for communication skills and resilience, then train every agent on your industry, your product and your audience before the first dial." |
| b | eagle blue / white | YOUR DIALER, HANDLED | "We set up and maintain your dialer and CRM, working with VICI Dialer, Calltools, ReadyMode, GoHighLevel, Salesforce, HubSpot and Zoho CRM." **[owner: confirm list is current]** |
| c | soft / navy | CAMPAIGNS WATCHED LIVE | "Managers monitor calls as they happen, coach agents one to one and adjust scripts and strategy as results come in." |
| d | navy / white | ONE ACCOUNT MANAGER | "Every client gets a dedicated account manager, access to the campaign's dialer and the Appointment Master Spreadsheet, so you can see every appointment." + link "All services →" `/services/` |

Deviation: field d carries one link (the blueprint allows nothing else) so the section has an exit to the Services page.

### 3. How a campaign runs (`id="how-it-works"`) — ground white · pill light

Claim: the process is defined and visible from start to hand-off.

Desktop (blueprint "Accordion of tinted panels"): heading `h2` at `--step-head` in columns 1–5; paragraph `--step-body` in columns 7–11. 64px below, a row across all 12 columns, 520px tall, five panels with no gaps, coloured stage 1→5 with the tints in `design-system.md` §2. Open panel ≈58% width: stage name at `--step-lead` 700 top-left, paragraph (36ch, `--step-body`) bottom-left. Closed panels are slivers showing the name rotated 90°, reading upward. Clicking or pressing Enter/Space on a sliver opens it (`flex-basis` 450ms). Built as a list of `<button aria-expanded>` + region pairs.
Phone: stages stack full width as 64px bars, names horizontal at `--step-lead`; the open stage grows to its content; stage 1 open by default.

Copy:
- h2: "HOW IT RUNS" ("HOW A CAMPAIGN RUNS" failed the two-line check, `design-system.md` §3)
- Paragraph: "Five stages, the same for every client. Your account manager walks you through each one."

| Stage | Paragraph | Source |
| --- | --- | --- |
| Discovery | "We learn your services, your target audience and your appointment qualification criteria, plus any scripts or talking points you want agents to follow." | `site.ts:197` |
| Setup | "We write the call scripts, set up the dialer and connect your CRM or scheduling tool." | `site.ts:212`, FAQ on integrations |
| Calling | "Trained agents work your campaign while managers monitor calls live and coach agents as they go." | `site.ts` campaign-management |
| Confirming | "Quality assurance checks each booked appointment, and it is confirmed with the prospect." **[owner: confirm this is the real confirmation step]** | `site.ts` FAQ ("confirmed by quality assurance") |
| Hand-off | "Appointments reach your CRM, scheduling system or shared Google Sheet with qualification notes and call recordings." | `site.ts` FAQ |

No numbering is shown (house rule); order is carried by the dark-to-light tint.

### 4. Who we call for (`id="industries"`) — ground eagle blue · pill dark

Claim: the teams already work in the visitor's trade.

Desktop (blueprint "One item per poster line", adjusted): five lines, one per industry, Chivo 900 capitals at `--step-head`, leading 0.92, flush left, starting 80px below the section top. At the right margin on each baseline: a `--step-body` link "Talk to us about <industry> →" → `/contact/?industry=<slug>` (pre-fills the message field). Hover/focus on a line: its link underlines and the arrow moves 6px right (transform). The blueprint's "swap ink to the accent" is dropped because red on eagle blue is 2.12:1. Below the list, 96px gap, a strip of five trade photos (one per industry, 3:4, equal widths across the 12 columns, 16px gaps) each with a `--step-small` caption: trade name and photo credit.
Phone: lines at `--step-head`, links beneath each line at `--step-body`; "HOME IMPROVEMENT" may wrap to two lines (accepted). Photo strip becomes a horizontal scroll-snap row (each photo 78% width, 3:4), with a visible "1 of 5"-free hint: the next photo peeks at the edge.

Copy (lines): `SOLAR` · `ROOFING` · `HVAC` · `REAL ESTATE` · `HOME IMPROVEMENT` (+ `HEALTHCARE` only if the owner confirms; README C9).

Deviations: line size is `--step-head`, not the hero size the blueprint asks for, because "HOME IMPROVEMENT" (16 letters) would overflow at hero size; the photo strip is added to meet the imagery floor (`design-system.md` §8). Photos show the clients' trades, never Americall's work: captions say so ("Residential solar roof. Photo: <credit>").

### 5. Packages (`id="packages"`) — ground soft · pill light

Claim: you choose the team size, and you can see exactly what each size includes.

Desktop, **1280px and up** (blueprint "Plans as a large table", adjusted): the top-left cell (columns 1–3) holds the `h2`; columns 4–12 split equally between the four packages. Header row: package name in sentence case at `--step-lead` 700 (capitals at `--step-head` overflow these columns), then "Custom quote" at `--step-body` 400 under it. Body rows at `--step-body` with 20px padding, every second row one tone step darker. The selected package's whole column sits on navy with white ink (default: Momentum, `highlight: true`). The picker (four radio segments: 2 · 5 · 10 · 20 agents) sits above the table and moves the navy column. Last row: one button per package, "Ask about <name>" → `/contact/?package=<slug>`.
Below 1280px (phones, tablets, small laptops): the picker sits full width under the heading; below it, only the selected package's block: name at `--step-head`, "Custom quote", then each row as a pair (item in `--ink-2-on-light`, answer in navy, `--step-body`), then a full-width button. Without JavaScript, all four blocks stack.

Copy:
- h2: "TEAM SIZES"
- Picker legend (visually hidden): "Team size"

| Row | Launch | Momentum | Acceleration | Enterprise |
| --- | --- | --- | --- | --- |
| Trained agents | 2 | 5, fully managed | 10, fully managed | 20, fully managed |
| Weekly appointment target **[owner]** | 8 or more | 20 or more | 40 or more | 80 or more |
| Appointment quality control | Not included | Included, with agent KPI management | Dedicated, with agent KPI management | Dedicated manager for quality and agent KPIs |
| Campaign manager | Not included | Dedicated | Dedicated | Dedicated campaign and lead manager |
| Client success manager | Not included | Not included | Dedicated | Dedicated |
| Price | Custom quote | Custom quote | Custom quote | Custom quote |

Source: `site.ts` servicePackages (lines 51–104). Under the table, `--step-body`: "Prefer to pay per appointment? Bulk appointment packages are available too." (source: `site.ts` FAQ on pricing).

Open issue: `site.ts` services say **every** client gets a dedicated account manager, while the Launch and Momentum packages list "Client success manager: not included". The owner must say whether these are different roles before launch (build-plan question Q5).

### 6. Numbers (proof) — ground navy · pill dark

Claim: Americall has done this at volume. **[owner: confirm the six numbers are still current; AGENTS.md requires keeping them]**

Desktop (blueprint "Large marks on tiles", adjusted for numbers instead of logos): a board four tiles across, 8px gaps, tiles 3:2 on `#0B2A4A` (one step lighter than navy), `--radius`. First tile is double width on eagle blue and carries the `h2`. Each other tile: the number at `--step-head` 900 top-left, the label at `--step-body` under it, 24px padding.
Phone: heading tile full width (≈120px), then two tiles per row, 6px gaps.

Copy: h2 "NUMBERS SO FAR". Tiles (from `site.ts` stats): 100+ Clients served · 500+ Agents recruited and trained · 10,000+ Hours logged · 30,000+ Qualified appointments sent · 12,000+ Confirmed customer sit-ins · 3,000+ Sold deals and installs.

Testimonials: **not shown** until the owner confirms the two quotes are verbatim and permitted (README C9). If confirmed, add one band per quote after the tiles: the quote as a `<blockquote>` at `--step-lead` (≤ 25 words), name and company at `--step-body`.

Deviation: the heading tile is eagle blue, not red, to keep red to one field per page (README C4).

### 7. Questions (preview) — heading band soft, bands white/soft · pill light

Claim: the usual objections have plain answers.

Desktop (blueprint "A band per question"): heading band ≈40svh on soft with the `h2` at `--step-head` anchored bottom-left. Then five full-bleed bands alternating white and soft, height = content: question at `--step-lead` 700 in columns 1–5, answer at `--step-body` (leading 1.5) in columns 7–12, 56px padding top and bottom. All answers visible (no toggles). Last band ends with "All questions →" `/faq/`.
Phone: heading band 30svh; each band question then answer, 32px vertical padding.

Copy: h2 "QUESTIONS, ANSWERED". Questions and answers verbatim from `site.ts` faqs: pricing plans · minimum commitment · dedicated point of contact · how appointments are received · tool integrations.

### 8. Request a demo (`id="demo"`) — ground navy, red card · pill dark

Claim: starting is one short form away.

Side-by-side layout from **1024px** (blueprint "Clip-out coupon form", adjusted): one red card spanning columns 2–11, `--radius`, 120px of navy above and below. Semicircular 28px notches cut into top and bottom edges at **50%** width (blueprint: 46%, widened so the heading fits on two lines), joined by a vertical row of navy dots (the perforation). Left of it, 40px padding: `h2` at `--step-head` top, sentence and email alternative at the bottom. Right of it: the form.
Below 1024px: card full width with 12px margins; perforation turns horizontal (notches on left and right edges) between the heading block and the form.

Copy:
- h2: `REQUEST` / `A DEMO` ("REQUEST A FREE DEMO" failed the two-line check)
- Sentence: "It's free. Tell us about your campaign and we'll contact you to set up a short demo call."
- Email alternative: "Prefer email? info@americall.io" (mailto link)
- Form fields (all 8 owner fields, `Website Notes.pptx` slide 2; visible white labels; inputs white with navy text, 54px tall):
  1. First name* · 2. Last name* (side by side from 768px) · 3. Designation · 4. Company* · 5. Business email* · 6. Contact number* · 7. Monthly appointment volume (select: Under 100 / 100–500 / 500–1,000 / 1,000+ / Not sure yet) · 8. "How can Americall help with your campaign?" (textarea, 4 rows)
- Submit bar: navy, 56px, full width of the form column, label "Send request"
- Hidden: honeypot `_gotcha` (keep). Pre-fill: `?package=` or `?industry=` writes "Interested in: <value>" into field 8.
- Success (replaces the form, focus moves to it): "Request sent. We'll be in touch to set up your demo call."
- Error: "Something went wrong and your request was not sent. Please try again or email info@americall.io."
- Endpoint: keep `https://formspree.io/f/xbdqyony` until the owner confirms it (build-plan R-14).

Deviations: 8 fields instead of 4 (owner spec, README C7), so the card is taller than 2.2:1; visible labels instead of placeholder-only labels (accessibility).

### 9. Footer — ground navy · pill dark

Desktop (blueprint "The mark, built large"): across the full content width, ≈34svh tall, the wordmark built from blocks: each letter of `AMERICALL` knocked out of its own rectangle, heights 60–100% of the band, 4px gaps, bottoms aligned; `AMERI` blocks in eagle blue, `CALL` blocks in red (echoing the logo's red "Call"). 56px below: link columns at `--step-small`/`--step-body`.
Phone: block wordmark full width ≈22svh, broken into `AMERI` / `CALL`; link columns two across.

Contents:
- Pages (`id="site-map"`, the no-JavaScript menu target): Home · Services · Packages · FAQ · Contact
- Contact: info@americall.io · "Mailing address only (no walk-in office): 101-43 105th St, Ozone Park, NY 11416" **[owner: show or omit]**
- Follow: Facebook → `https://www.facebook.com/profile.php?id=61583101135869` (update if a username is claimed)
- Photo credits line (every open-collection photo used on the site)
- Last row: "© <current year> Americall, Inc." · small button "Request a demo"

The eagle mark (from `Logo/americall-logo-full.svg`) appears in the pill only; the footer uses the block wordmark.

---

## Services (`/services/`)

Keep the existing hash anchors (`#dialer-crm`, `#agent-training`, `#campaign-management`, `#admin-support`) so old links still work.

1. **Hero** — eagle blue · dark. h1 `WHAT WE` / `DO` ("OUR SERVICES" overflows phones at display size). Sentence: "Four services, one team: agent recruitment and training, dialer and CRM setup, campaign management and account support." Button "Request a demo". Phone: same as Home hero.
2. **Four service chapters** — white · navy · soft · navy (tones light/dark/light/dark), so no two light chapters touch. Each: `h2` (service title from `site.ts`) at `--step-head` in columns 1–6; the full description from `site.ts` (all paragraphs, verbatim) at `--step-body` in columns 7–12; mirror on alternate chapters. Phone: heading then text. No images (the generated office images are retired, README C11).
3. **Why Americall** — light. Four full-bleed bands alternating soft, white, soft, white (FAQ band geometry), so the last band (white) meets the soft Packages chapter: title in columns 1–5 at `--step-lead` 700, text in columns 7–12. Content from `site.ts` whyAmericallCards; remove "healthcare" from "Industry Expertise" unless the owner confirms it (README C9).
4. **Packages + picker** — as Home §5.
5. **Demo request** — as Home §8.
6. **Footer**.

## FAQ (`/faq/`)

1. **Heading band** — soft · light, 40svh: h1 `QUESTIONS,` / `ANSWERED`.
2. **All 11 questions** — bands alternating white/soft, answers visible, verbatim from `site.ts` faqs. Each band has an `id` (slug of the question) for deep links.
3. **Demo request** — as Home §8, with the sentence "Still have a question? Ask it in the form, or email info@americall.io."
4. **Footer**.

Flagged answers **[owner]**: "fully onboarded and live in under two weeks", "English and Spanish", "healthcare providers", "Discord" campaign channel. Keep only what the owner confirms.

## Contact (`/contact/`)

1. **Demo request as the hero** — navy · dark. The coupon card from Home §8 becomes the first chapter (pill clearance above), with h1 instead of h2.
2. **Email in large type** — white · light (blueprint "The email as display type", adjusted): `info@americall.io` at `--step-head` (display size overflows at every width), one line from 375px, broken after the `@` below 375px, as a mailto link; under it at `--step-body`: the mailing address line (if approved) and the Facebook link.
3. **Footer**.

## About (`/about/`) — stays hidden for now

Returns only when the owner supplies real agent photos (with written consent), real names and real voice clips (README C10). Blueprint ready for that day:
- One chapter per agent, alternating grounds: photo 4:5 in columns 1–5, name at `--step-head`, role at `--step-lead`, the one-line quote as a `<blockquote>`, and a "Play voice" button (click/tap only; `aria-pressed`; stops any other clip; no autoplay), per `AGENTS.md` and `Phase 1/design-direction.md`.

## 404 (`/404`) — new

Navy · dark. h1 `NOT FOUND` ("PAGE NOT FOUND" runs to 3 lines at 320px). Sentence: "The page you asked for isn't here." Button "Go to the home page" and link "Request a demo". The eagle mark large in columns 8–12. Adding `src/pages/404.astro` makes Cloudflare Pages return a real 404 for unknown URLs (verify after deploy).

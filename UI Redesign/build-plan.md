# Build Plan

Rules for whoever builds this (human or agent):
- Follow `AGENTS.md`: claim one task at a time in `Phase 1/progress.md`, verify it, record files touched and checks run.
- Work on a branch; run app commands from `americall-site/`.
- Build tokens first, then components, then pages. Do not start R-02 until R-01 is signed off.
- Keep content in `src/data/site.ts`; components read from it. No copy hard-coded in two places.
- Estimates are for one experienced developer and exclude owner wait time.

## Tasks

| ID | Task | Files (expected) | Done when | Est. |
| --- | --- | --- | --- | --- |
| R-01 | Owner approves README conflicts C3, C4, C6, C8, C9, C11 and answers Q1–Q6 below. | `UI Redesign/README.md` (record answers) | Every "Owner must approve: Yes" row has a written answer. | owner |
| R-02 | Foundation: tokens from `design-system.md` §2–4 in Tailwind `@theme`; self-host Chivo (400/700/900, Latin, `swap`, preload 900); remove the Inter stack; base reset; `prefers-reduced-motion` and `prefers-reduced-transparency` blocks. | `src/styles/global.css`, `package.json` | Live font check: `document.fonts` lists Chivo faces as `loaded`; no other font requests; tokens are the only colour/size values used in components (grep finds no stray hex values). | 0.5 day |
| R-03 | Layout shell: new `BaseLayout.astro` with canonical, `og:*`, `twitter:card`, Organization JSON-LD, skip link, `<main id="main">`; a `Chapter.astro` wrapper (`tone`, `ground`, `id` props → `data-tone`, background, ink). Create the 1200 × 630 og image. | `src/layouts/BaseLayout.astro`, `src/components/Chapter.astro`, `public/og/americall.png` | Facebook Sharing Debugger (or an OG preview tool) shows title, description and image for `/`, `/services/`, `/faq/`, `/contact/`. | 0.5 day |
| R-04 | Glass pill: component + script per `design-system.md` §5 (tones, observer, fallbacks, phone menu, focus handling, safe areas, scroll margins). | `src/components/GlassPill.astro`, `src/scripts/pill.ts` | Checks in "Pill tests" below all pass. | 1 day |
| R-05 | Footer with block wordmark, links, credits line, Facebook link, mailing line (if approved). | `src/components/Footer.astro` | Renders at 320/375/768/1440 with no overflow; wordmark letters readable. | 0.5 day |
| R-06 | Home hero + "What we run" fields. | `src/pages/index.astro`, `src/components/StatementFields.astro` | Headline exactly two lines at 320, 375, 390, 768, 1024, 1440, 1920; phone hero fits in one 375 × 667 screen including the button; tested display size recorded in `design-system.md` §3. | 0.5 day |
| R-07 | "How a campaign runs" accordion (horizontal desktop, vertical phone). | `src/components/ProcessAccordion.astro` | Keyboard: Tab reaches each stage, Enter/Space opens it, `aria-expanded` correct; works with JS off (all stages expanded). | 0.5 day |
| R-08 | Industries chapter + photo strip. Download chosen photos with `assets.mjs --get`, convert to WebP/AVIF with width/height set, credits via `assets.mjs --credits`. | `src/components/IndustryLines.astro`, `public/images/industries/*` | Each photo viewed full size and approved; each credit visible on the page and naming the author, the licence with a link, and "cropped" (cropping and WebP conversion are changes under CC BY-SA); phone strip snaps one photo at a time. | 0.5 day |
| R-09 | Packages table + team-size picker (radio inputs), data from `servicePackages`; `?package=` links. | `src/components/Packages.astro`, `src/scripts/picker.ts`, `src/data/site.ts` | Table appears from 1280px, picker + blocks below; picker works by keyboard and screen reader; with JS off all four packages show; wording matches the owner's answer to Q2. | 1 day |
| R-10 | Numbers tiles (+ testimonial bands only if Q4 = yes). | `src/components/NumbersBoard.astro` | Six numbers match `site.ts` and owner confirmation. | 0.25 day |
| R-11 | FAQ bands component (Home preview of 5, FAQ page all 11) with deep-link ids. | `src/components/FaqBands.astro`, `src/pages/faq.astro` | Answers match `site.ts` after the owner's Q10 edits. | 0.25 day |
| R-12 | Demo coupon form: 8 fields, visible labels, honeypot, Formspree submit, pre-fill from `?package=` / `?industry=`, success/error states with focus management and `aria-live`. | `src/components/DemoCoupon.astro`, `src/scripts/demo-form.ts` | Validation messages read by a screen reader; success state reached in a test submission (R-14). | 0.75 day |
| R-13 | Pages: Services, FAQ, Contact, 404; About keeps its redirect. Delete retired images and the old carousel code (`src/utils/carouselState.mjs`, `tests/carousel-state.test.mjs`) once nothing imports them. | `src/pages/*.astro`, `public/images/*` | `npm run build` passes; no page imports removed files; old hash links `/services/#dialer-crm` etc. still scroll to the right chapter below the pill. | 1 day |
| R-14 | Form end-to-end test with the owner: one real submission from the live preview reaches the right inbox. | — | Owner confirms receipt and which inbox (Q8). | owner |
| R-15 | Motion layer per `design-system.md` §7. | `src/scripts/motion.ts`, `global.css` | With reduced motion on: no travel or scale anywhere. With JS blocked: every piece of content visible. | 0.5 day |
| R-16 | QA pass (see "Verification"). Fix everything that fails. | — | All checks below pass; results logged in `progress.md`. | 1 day |
| R-17 | Docs: mark superseded parts of `Phase 1/design-direction.md` (typography, colours, imagery) with a pointer to `UI Redesign/`; update `progress.md` and the decision log. | `Phase 1/*.md` | Another agent reading `AGENTS.md` lands on the new rules. | 0.25 day |

Total build: about 9 developer days after owner sign-off (sum of R-02 to R-17).

## Fixes carried over from the Facebook review (2026-10-19)

All are inside the tasks above:
1. `og:image`, `og:url`, canonical (R-03).
2. Address format "Ozone Park, NY 11416" and the "Mailing address only (no walk-in office)" label, shown only if approved (R-05).
3. Facebook link in the footer (R-05).
4. Button wording "Request a demo" instead of "Book a Free Demo" (R-06, R-12), because the destination is an enquiry form.
5. Form endpoint confirmation (R-14).
6. Self-hosted font (R-02).
7. Real 404 page (R-13).

## Pill tests (R-04)

1. Tone: scroll the full Home page at 1440 and 375; the pill is `light` over every white/soft chapter and `dark` over every navy/blue chapter, switching as each edge passes its centre line.
2. Contrast: sample pill text against the pill at 5 scroll positions per page; every sample ≥ 4.5:1.
3. Fallbacks: disable `backdrop-filter` in devtools → solid fill; emulate `prefers-reduced-transparency: reduce` → solid; JS blocked → `solid` tone, desktop links work, and on phones the menu button is replaced by a "Menu" link to the footer's page list (`#site-map`).
4. Phone menu: opens/closes by tap and Escape; focus goes in and returns; background is inert; scroll locked; closes on link tap and when resized past 768px.
5. Safe area: on an iPhone with a notch (real device or Safari simulator), the pill sits below the status bar in portrait and landscape.
6. Anchors: `/#packages`, `/#how-it-works`, `/services/#campaign-management` land with the heading fully visible below the pill.
7. Fit: at exactly 768px the logo, four links and "Request a demo" fit inside the pill without wrapping; if not, show the menu button (phone layout) up to 1023px.
8. Performance: scrolling stays at 60fps on a mid-range Android phone (Chrome performance panel shows no long paint storms from the blur).

## Verification (R-16)

| Check | Tool | Pass |
| --- | --- | --- |
| Build | `npm run build` in `americall-site/` | exits 0 |
| Design rules | `node ~/.claude/skills/design-taste-frontend/scripts/lint.mjs americall-site/src` | no FAIL; WARNs justified in one sentence each |
| Layout at 1440 / 768 / 390 | `inspect.mjs` from the same skill **needs Node 22+; this machine has Node 20.19.3.** Upgrade Node, or take Playwright screenshots at 320, 375, 390, 768, 1024, 1440 instead. Pass `--allow` for the glass rule only (README C2). | no FAIL; headlines ≤ 2 lines at every width; no horizontal scroll |
| Look | Critique the screenshots (`references/critique.md` in the skill), fix the top three problems, re-shoot; at most three rounds | written critique saved in `progress.md` notes |
| Accessibility | axe DevTools or Lighthouse a11y on every page; keyboard-only walk-through; VoiceOver (iOS) or TalkBack on the pill menu, picker, accordion and form | 0 serious/critical issues; every control usable without a mouse |
| Performance | Lighthouse mobile on `/` and `/services/` | LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms (targets from `Phase 1/design-direction.md`) |
| Browsers | Latest Chrome, Safari (macOS + iOS), Firefox, Samsung Internet | pill, menu, picker, form work in all |
| Real phones | One iPhone, one Android | tap targets ≥ 44px, no zoom on input focus (inputs ≥ 16px), safe areas respected |
| Link preview | Facebook Sharing Debugger on `/` | correct title, description, image |

## Open questions for the owner

| # | Question | Blocks |
| --- | --- | --- |
| Q1 | Approve the bold look (capitals, very large type, one red card per page), or use the calmer fallback in `design-system.md` §3? | R-02 |
| Q2 | Show weekly appointment numbers as "targets" in the packages table, or remove them? | R-09 |
| Q3 | Final industry list: is Healthcare a current industry? Is Real Estate? | R-08 |
| Q4 | Are the two testimonials verbatim, real and permitted for public use? | R-10 |
| Q5 | Every client "gets a dedicated account manager", but Launch/Momentum exclude a "client success manager". Are these different roles? What should the table say? | R-09 |
| Q6 | Show the mailing address on the site (labelled "mailing address only"), or remove it? | R-05 |
| Q7 | Can you supply real agent photos (with written consent) and voice clips, so About can return? | About page |
| Q8 | Which inbox receives the Formspree submissions, and who checks it? | R-14 |
| Q9 | Add privacy-friendly analytics (Cloudflare Web Analytics) so you can see where demo requests come from? | R-03 |
| Q10 | FAQ claims to confirm: "live in under two weeks", "English and Spanish", "healthcare providers", the Discord campaign channel. | R-11 |
| Q11 | Is the dialer/CRM list (VICI Dialer, Calltools, ReadyMode, GoHighLevel, Salesforce, HubSpot, Zoho CRM) current? | R-06 |
| Q12 | Is "quality assurance checks the appointment, then it is confirmed with the prospect" the real confirmation step? | R-07 |

# UI Redesign — Start Here

Status: **plan only, awaiting owner approval.** No site code has changed.
Written: 2026-10-20 by Claude (task P1-026 in `Phase 1/progress.md`, branch `docs/ui-redesign-plan`).

This folder plans a from-scratch rebuild of the Americall website UI: a new visual direction, a glass pill navigation inspired by biyelo.com, and a phone layout designed on its own terms rather than squeezed from desktop.

"From scratch" means the **UI** (layouts, components, type, colour, motion, imagery). The stack stays Astro + Tailwind CSS + Cloudflare Pages, as `AGENTS.md` requires. Business content (services, packages, FAQ, form fields) is kept and re-presented.

## Reading order

| File | What it answers |
| --- | --- |
| `README.md` (this file) | What is decided, what conflicts with existing rules, what needs owner sign-off. |
| `research.md` | What competitors, biyelo.com and the current site actually do, measured on 2026-10-20. |
| `design-system.md` | Tokens (colour, type, space, radius, motion), the glass pill spec, imagery rules, accessibility. |
| `page-blueprints.md` | Every page and section, desktop and phone, with the real copy. |
| `build-plan.md` | Ordered build tasks with acceptance checks, fixes carried over, verification, open questions. |

## The plan in five lines

1. **Direction:** "Colour chapters." Every section is one flat full-bleed brand colour (navy, white, eagle blue, soft grey, one red moment), held together by one typeface (Chivo) and one grid.
2. **Navigation:** a fixed glass pill that changes tone with the chapter beneath it (dark glass over dark chapters, light glass over light ones). On phones it becomes a full-width pill with a Demo button and a menu button that expands into a sheet.
3. **Idea:** the four real packages (2, 5, 10, 20 agents) and the dedicated account manager become the page's spine. The one interactive feature is a **team-size picker**: choose 2 / 5 / 10 / 20 agents and see exactly what that package includes.
4. **Honesty rules:** no office photos, no AI-generated "staff", no invented proof. The current generated office images are retired.
5. **Mobile first-class:** every section has its own phone composition, 44px tap targets, safe-area handling, and the demo action always one tap away in the pill.

## Conflicts that need an owner decision

Each row is a place where this plan overrides an existing rule or source. Nothing here is final until the owner approves it.

| # | Conflict | Source of the existing rule | What this plan does | Owner must approve |
| --- | --- | --- | --- | --- |
| C1 | The dealt hero has **no navigation bar**; the user asked for a glass pill. | Direction sheet (hero blueprint) vs user request, 2026-10-20 | Keeps the pill (user request wins). Hero geometry is kept underneath it, with top space reserved. | No (user's own request) |
| C2 | The design skill **bans glass and floating pill navigation**. | `design-taste-frontend` house rules | Pill kept as a single, deliberate exception. When running the skill's inspector, pass `--allow` for that one rule only. Nothing else is glass. | No |
| C3 | Phase 1 says **"No negative letter spacing"** and **"Do not scale font size directly with viewport width"**. | `Phase 1/design-direction.md` → Typography | Display type uses `clamp()` (rem floor and ceiling, vw in between) and −0.03em tracking. Body text has no negative tracking and no vw sizing. | **Yes** |
| C4 | Phase 1 says **use red sparingly; no large red backgrounds**. | `Phase 1/design-direction.md` → Colours | Red is a full field **once per page at most**: the demo request card (Home, Services, FAQ, Contact). Everywhere else red is only the primary button, the hero's second line and the active state. | **Yes** |
| C5 | Phase 1 says **avoid a site dominated by one dark navy colour**. | `Phase 1/design-direction.md` → Avoid | Chapters alternate navy / white / eagle blue / soft grey, so no two neighbours share a colour and navy never runs twice in a row. | No (complies) |
| C6 | Dealt type is **Chivo 900 in capitals**; Phase 1 suggested Inter / Satoshi / Manrope. | Direction sheet vs `Phase 1/design-direction.md` | Chivo, self-hosted (the current site names Inter but never loads it; see `research.md`). Capitals only for display headings; all body and UI text in sentence case. Fallback option in `design-system.md` if the owner finds capitals too loud. | **Yes** |
| C7 | Contact blueprint has **4 inputs**; the owner specified **8 fields**. | `Website Notes.pptx` slide 2 | All 8 owner fields kept; the coupon grows taller than its 2.2:1 shape. | No (owner's own spec) |
| C8 | Packages have **no public prices**, and weekly appointment numbers read as guarantees. | `americall-site/src/data/site.ts` (servicePackages) | Price cell says "Custom quote". Weekly numbers shown only as "target" wording, and only after owner approval. | **Yes** (wording) |
| C9 | Proof: testimonial attribution unverified; Healthcare vs Real Estate unresolved. | `Phase 1/progress.md` P1-009; Facebook review, 2026-10-19 | Testimonials held back until verified. Industry list = Solar, Roofing, HVAC, Real Estate, Home Improvement; Healthcare added only on owner confirmation. | **Yes** |
| C10 | About page is redirected to `/services/`. | `Phase 1/progress.md` P1-022 | About stays hidden until real agent photos, real names and real voice clips exist. Blueprint included so it can return. | **Yes** (timing) |
| C11 | Current imagery is AI-generated people in an office. | `americall-site/public/images/services/*` | Retired. Replaced by owner photos (when supplied), credited open-collection photos of the client trades, and the eagle mark. | **Yes** |

## Reproducing the design direction

The direction was dealt by the `design-taste-frontend` skill (`~/.claude/skills/design-taste-frontend/scripts/draw.mjs`):

- Command: `draw.mjs --sector agency --brief "<Americall brief>" --sections features,how-it-works,list,pricing,proof,faq,contact,footer --keep palette --direction colour-chapters`
- Direction: `colour-chapters` · seed `899247265` · dealt 2026-10-19 (script clock).
- Chosen over `dense-tiles` and `loud-flat-poster` because full-bleed flat chapters map directly onto the brand's colour family and make the pill's tone switch meaningful.
- Redraws, each for a content reason:
  - `list` → `list-poster-lines` (dealt "day tabs agenda" is for events; the content is 5–6 industries).
  - `pricing` → `pricing-large-typographic-table` (dealt "two plans" vs 4 real packages with no public price).
  - `contact` → `contact-clip-out-coupon` (dealt "address and hours rows" needs a visitable address, hours and phone, none of which exist; the site needs its demo form).
- Not used from the sheet: the dealt "People" photo set (hikers, fog, skateboarders), because it has nothing to do with calling teams.

## Approval checklist for the owner

1. Conflicts C3, C4, C6 (look and feel): approve, or pick the fallback in `design-system.md`.
2. C8: approve the wording "target" for weekly appointment numbers, or remove the numbers.
3. C9: confirm the industry list and whether the two testimonials are real, verbatim and permitted.
4. C11: supply real team photos (with consent), or approve launching without people photos.
5. Answer the open questions at the end of `build-plan.md`.

# Research (measured 2026-10-20)

All observations come from live pages viewed in a browser on 2026-10-20 unless marked otherwise. Competitor statements are their own marketing claims, paraphrased; none were independently verified. Screenshots were viewed but not saved into this folder (`.gitignore` ignores `*.png` outside whitelisted folders).

## 1. biyelo.com glass pill (the requested reference)

Measured with computed styles at a 1024px and a 375px viewport. Copy the **technique**, not their markup, class names or colours.

| Property | Desktop (1024px) | Phone (375px) |
| --- | --- | --- |
| Position | `position: fixed`, `top: 14px`, header padding `0 24px`, `z-index: 60` | `top: 10px`, header padding `0 16px` |
| Size | 760 × 50px, centred | 343 × 46px (full width minus 16px each side) |
| Shape | `border-radius: 999px` | same |
| Fill | brand colour at 22% alpha (`rgba(61,0,38,0.22)`) plus a subtle top-down white sheen | same |
| Blur | `backdrop-filter: blur(3px) saturate(1.12)` (light blur; the glass look comes mostly from the rim) | same |
| Rim | layered inset shadows: 1px inset white at 28%, a 1px diagonal highlight at 30%, a 14px inner glow at 14%; plus a soft drop shadow below (`0 8px 28px -10px` at 30%) | same |
| Extra layers | a "shine" span (radial highlights) and a "rim" span (conic gradient masked to a 1.5px ring) | same |
| Contents | logo · 3 text links (15px / 500) · "Log in" link · filled CTA pill 38px tall, 18px side padding | logo · "Log in" · CTA only. **No menu button: page links are dropped on phones.** |
| Tone change | header carries a class for dark mode over dark sections; over a light section (seen at ~3600px scroll) the fill becomes `rgba(255,255,255,0.16)` and links turn dark; `transition: color .4s, background-color .4s` | same |

Takeaways for Americall:
1. The pill must change tone per section. Computed for this plan's proposed dark pill (navy at 55%, not biyelo's colours): over a white section its white text reaches only **4.18:1**, below the 4.5:1 AA minimum. The tone switch is required for legibility.
2. Biyelo can drop its links on phones because it has one page. Americall has four pages, so the phone pill needs a menu button (spec in `design-system.md`).
3. Their multi-layer rim uses gradients; this plan keeps the rim effect with inset shadows only (no gradient layers) to stay closer to the design skill's rules.

## 2. Current americall.io (baseline)

| Finding | Evidence | Consequence for the rebuild |
| --- | --- | --- |
| The site names **Inter but never loads it**; visitors see their system font (Ubuntu on Linux, Segoe on Windows, SF on Mac). | `global.css:11` font stack; `document.fonts` held no font faces on the live page. | Self-host the chosen font (task R-02). |
| Phone hero is **1,203px tall** (1.5 screens at 375 × 812). The six industry chips take three rows. | Measured on the live page at 375px. | Phone hero fits one screen; industries get their own chapter. |
| Phone page is 5,252px tall with 5 sections, all on dark navy. | Measured. | Alternate chapter colours; no navy-on-navy neighbours. |
| Hero image is an empty office with monitors; every service image is AI-generated people in an office. | `public/images/modern-abstract-hero.png`, `public/images/services/*.png` | Retire: Americall has no staffed office customers can visit, and `Phase 1/project-context.md` forbids implying placeholder people are real agents. |
| No `og:image`, `og:url` or canonical tag. | `BaseLayout.astro:25-27`; live `<head>` | Add in the new layout (R-03). |
| Footer address has no label and reads "Ozone Park, New York, NY 11416". | `site.ts:5`, `BaseLayout.astro:77` | "Mailing address only (no walk-in office): 101-43 105th St, Ozone Park, NY 11416" (owner to confirm showing it). |
| "Book a Free Demo" leads to an enquiry form, not a calendar. | `contact.astro` | Button text becomes "Request a demo". |
| Form posts to Formspree; endpoint still "needs final owner confirmation". | `contact.astro:109`, `progress.md` P1-012 | Keep the endpoint, test end to end before launch (R-14). |
| No analytics; no Facebook link. | Live HTML | Optional Cloudflare Web Analytics (owner decision); add Facebook link to footer. |

## 3. Competitors

| Site | Fit | Design observations (desktop, 2026-10-20) | Adopt | Avoid |
| --- | --- | --- | --- | --- |
| [Springs Connect](https://www.springsconnect.com/) | Closest: home-improvement trades | Blue gradient hero; a **lead form inside the first screen**; phone number top right; plain dropdown nav. | A short way to start right from the first screen (here: the demo button in the pill + hero). Name the trades. | Gradient backgrounds; a 4-field form competing with the headline. |
| [Touchstone BPO – solar](https://touchstonebpo.com/solutions/appointment-setting-for-solar-companies/) | Close: solar homeowners | One page per industry with the industry in a very large headline; a "Why choose us" card list; a counter that reads "2 Years" next to "24 Year" elsewhere. | Industry pages later (each trade named in a large headline). | Contradictory numbers; certification badges without proof. |
| [Quality Contact Solutions](https://qualitycontactsolutions.com/industries/commercial-roofing-appointments/) | Same trade, B2B | Numbered onboarding steps; separate compliance pages. | Show the steps of a campaign plainly. | Guarantee language. |
| [Belkins](https://belkins.io/appointment-setting) | Not close (B2B), strong design | White page, one orange accent, plain top bar, **a short note under the main button saying what happens after you click.** | The note under the button ("We'll contact you to set up a short demo call"). One accent colour. | Stacked ROI claims and ratings. |
| [SalesRoads](https://salesroads.com/appointment-setting-services/) | Not close (B2B) | At capture time the hero showed only a button; the headline was blank (likely an animation that had not run). | — | **Never hide content behind entrance animations.** Content must be visible if scripts fail. |

## 4. What makes the redesign Americall's own (inventory)

Things that belong to Americall and not to Springs Connect or Touchstone, taken from the repo:

1. The eagle-with-headset mark in navy, white, orange and a flag tie (`Logo/`).
2. The wordmark split "Ameri" + "Call" with "Call" in a red block.
3. Four named packages by team size: Launch (2 agents), Momentum (5), Acceleration (10), Enterprise (20) (`site.ts` servicePackages).
4. A dedicated account manager for every client (`site.ts` services, FAQ).
5. The shared "Appointment Master Spreadsheet" and Google Sheets tracking (`site.ts` services, FAQ).
6. Client access to the campaign's dialer and a campaign channel (`site.ts` FAQ).
7. Named dialers and CRMs it works with: VICI Dialer, Calltools, ReadyMode, GoHighLevel, Salesforce, HubSpot, Zoho CRM (`site.ts` services).
8. Two pricing models: fixed monthly plans and pay-per-appointment bulk packages (`site.ts` FAQ).

The idea and the interactive feature are built from items 3 and 4 (see `design-system.md` §1).

## 5. Open-collection photo candidates (not yet viewed full size)

Found with the skill's `assets.mjs` (Wikimedia Commons / Openverse, commercial-use licences). Look at each full size before use, download with `assets.mjs --get`, and credit on the page.

| Trade | Title | Licence | Source page |
| --- | --- | --- | --- |
| Solar | Solar panels on house roof | CC BY-SA 3.0 (credit required) | https://commons.wikimedia.org/w/index.php?curid=9716161 |
| Solar | Terrytown Solar Panel Roof House | CC BY-SA 3.0 | https://commons.wikimedia.org/w/index.php?curid=26120969 |
| Roofing | Shingle Installation (2020) | Public domain | https://commons.wikimedia.org/wiki/File:Cedar_shingles_are_lifted_onto_the_roof_using_a_telehandler._Crews_are_seen_near_the_ridge_installing_shingles_for_the_new_roof._(b14b770d-ea95-46c9-98fa-a5c5b93e34da).jpg |
| HVAC | Condenser unit for central air conditioning | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Condenser_unit_for_central_air_conditioning.JPG |
| Calling (archival) | "A Telephone Operator" (1911, Library of Congress) | Public domain | https://commons.wikimedia.org/wiki/File:%22A_Telephone_Operator%22_LCCN2006681181.jpg |

CC BY-SA images require attribution and share-alike for the image itself; keep each credit next to the image or in a credits line in the footer.

# Design rationale and cut list

Written 2026-10-23 (task P1-032). This explains why each part of the preview looks the way it does, so you can decide what to cut. **To cut something, reply with its number** from the cut list.

Sources for the reasoning: `README.md` (plan and owner conflicts C1–C11), `research.md` (competitors, measured 2026-10-20), `imagery-notes.md`, and a review of full-page screenshots of all four pages at 1440px and 375px on 2026-10-23, checked against the `frontend-design` skill's list of common signs of AI-made pages.

## Fixed by the brief (not yours alone to cut)

| Item | Why it can't simply go | Source |
| --- | --- | --- |
| Navy, white, soft grey, red for buttons only | Owner's brand palette | README build notes |
| Chivo, sentence case | Chosen and approved for the redesign | README C6, build notes |
| Glass pill navigation | Your own request | README C1, C2 |
| The six metrics (100+, 500+, 10,000+, 30,000+, 12,000+, 3,000+) | Must stay intact | `AGENTS.md` |
| The 8 contact form fields | Owner's own spec | README C7 |
| No fake staff photos, no invented proof, testimonials held | Honesty rules until the owner verifies | README C9–C11 |

## Section by section

### Home

| Section | Why it's there | What reads as generic | Verdict |
| --- | --- | --- | --- |
| Glass pill | Your request; keeps "Request a demo" one tap away on every page | A current trend, but deliberate here | Keep |
| Hero, "Trained calling teams" | States the offer and the trades in one line; the note under the button says what happens next (the Belkins pattern in `research.md`) | Text only, and only about half the first screen tall, so it reads like a header band. Nothing from the calling world is shown | Change (premium item 2) |
| "Support behind every campaign" | The four real services in plain rows | Fine | Keep |
| "Calling support for your industry" | Names the trades the way the closest competitors do; real licensed photos | All five trade rows link to the same form | Keep photos; rows are cut 5 |
| "How it runs" | Answers "what happens after I sign"; the five steps are a real sequence, so numbering them is earned | Fine | Keep |
| "Team sizes" picker and table | The page's main idea: the four real packages by team size, the one interactive feature (README, "The plan in five lines", item 3) | Fine; the most Americall-specific thing on the page | Keep |
| "Numbers so far" tiles | Required metrics | Six big-number tiles in a grid: the single most common template block | Change how they're shown (cut 3); numbers stay |
| "Questions, answered" | Handles objections: price, contract, tools | Identical grey rounded boxes (the "card kit" look) | Change (premium item 5) |
| "Request a demo" form | The conversion point | Fine | Keep |
| Footer with a large "Americall, Inc." | Closes the page with the name | An oversized footer wordmark is a current template habit | Cut 7 |

### Services

| Section | Why it's there | What reads as generic | Verdict |
| --- | --- | --- | --- |
| "What we do" hero and rooftop photo | You asked for visible real photos here | Fine | Keep |
| Four service chapters | Long-form detail for each service | Heading swaps sides each band (zig-zag) and the paragraphs are long and em-dash heavy | Keep; copy needs a pass (premium item 3) |
| "Team sizes" | Same block as Home | Repeats Home word for word | Cut 6 |
| "Why Americall" | Four selling points | Generic claims ("Quality first", "Industry expertise") that repeat the service chapters above | Cut 4 |
| Form | Conversion point | Fine | Keep |

### FAQ and Contact

Both are plain and fine. The FAQ list now lines up with the right-hand column the other sections use, instead of leaving half the row empty (fixed 2026-10-23).

## Cut list (reply with numbers)

Ranked by how much each one makes the site look template-made.

1. **Section fade-up entrances on scroll** (added 2026-10-23 at your request). The `frontend-design` skill names "fade-and-slide-up entrances on each section" as a top sign of an AI-made page. Replace them with one deliberate moment, for example the team-size picker's change of package. Motion that answers a click (FAQ, menu, picker, button press) stays.
2. **Applied 2026-10-23 (P1-033).** **Arrows after text links** ("See the packages →", "All services →", "All questions →", "Ask about it →", "Americall on Facebook →" and "Request a demo →" on the 404 page). The words stay; the arrows go.
3. **Applied 2026-10-23 (P1-033).** **Stat tiles → a plain ledger.** Same six numbers, shown as one typographic row or a two-column list with hairlines, not six boxes.
4. **"Why Americall" on Services.** It repeats the four service chapters in vaguer words.
5. **Trade link rows on Home.** All five open the same form. Make them plain text, or drop them; the photos and heading already name the trades.
6. **One of the two "Team sizes" blocks** (Home or Services). Keep one and link to it from the other.
7. **Applied 2026-10-23 (P1-033).** **Oversized footer wordmark.** Shrink it to a normal heading size.
8. **Photo hover zoom.** Subtle, but "hover effect on every image" is another default.

Also applied in P1-033 without removing anything: "Why Americall" now sits on one lighter navy band with hairline rows instead of alternating tinted bands, and on phones the chosen package card eases in when the team size changes.

## Premium upgrades (beyond cuts)

Ranked by impact. Items 1 and 2 need the owner.

1. **Real proof.** Client logos used with permission, one or two verified testimonials with name and company, a real call recording (click to play, per `AGENTS.md`), or an anonymised sample of the Appointment Master Spreadsheet. Specifics are the clearest difference between a real company and a template.
2. **A hero with one thing from the calling world.** For example, an anonymised, clearly labelled appointment hand-off record (time, trade, qualification notes, "confirmed"), built in HTML as an example, never presented as a real customer. Or real agent voice clips once the owner supplies them.
3. **A copy pass.** The site copy has 10 em dashes and 5 stock phrases ("seamlessly", "rigorous", "never stop improving"…). This copy is the owner's, so these are suggestions:
   - Before: "We don't set campaigns and leave them running. Our team actively manages every aspect of your campaign — from call strategy and script refinement to performance tracking and real-time adjustments."
     After: "Managers listen to live calls, coach agents one to one and change the script when results dip."
   - Before: "The goal is simple: keep what's working, fix what isn't, and never stop improving." After: cut.
   - Before: "Deep specialization across solar, roofing, HVAC, real estate, and home improvement…" After: "Agents train on your trade before their first call."
4. **Fewer type sizes per page.** One display size, one heading size, one body size; figures in tables set in tabular numerals.
5. **Applied 2026-10-23 (P1-033).** **FAQ as a hairline accordion** with the heading and the list in the same band (heading left, list right), instead of grey boxes under a separate title band.

## Component library

**Chosen: [Starwind UI](https://starwind.dev)**, which is shadcn/ui's component set rebuilt as native Astro components. MIT licence, about 750 GitHub stars, active (last commit 2026-10-22).

| Option | Decision | Why |
| --- | --- | --- |
| [shadcn/ui](https://ui.shadcn.com/docs/installation/astro) | Not used directly | The most popular (126k stars), but in Astro it needs React islands, which ship the React runtime to a static site. Starwind gives the same components without it. |
| Starwind UI | **Used** | Astro-native; code is copied into `src/components/starwind/`, so upstream changes can't break the site |
| [fulldev/ui](https://github.com/fulldotdev/ui) | Not used | Also Astro-native and good (about 600 stars); one library is enough, and Starwind keeps shadcn's component names one to one |
| Aceternity UI, Magic UI | Rejected | Beams, sparkles and marquees are exactly the "AI site" look and break the brief's "no flashy effects" |
| lucian-uxui (your global config) | Not used now | Dependency-free and viable; one library at a time |
| arc-library (your global config) | Not found | No public repo found under that name |

**In use now:** Input, Label, Textarea and NativeSelect in the demo form (Home, Services, FAQ, Contact). Their shadcn-style colour names point at the brand tokens in `src/styles/global.css`, so there is still one colour system. Cost: one 1.9 KB (gzipped) script. The required-field checks, `?package=` and `?industry=` pre-fill and Formspree post are unchanged.

**Deliberately not swapped:** the FAQ (native `<details>` works without JavaScript and supports `/faq/#question` links), the mobile menu (focus handling, Escape and the locked page behind it were verified on 2026-10-20), and buttons (the site's own `.btn` set is already consistent everywhere).

**Adding more later:** `npx starwind@latest add <component>` from `americall-site/`. The Starwind CLI and its runtime packages declare Node 22.12 or newer. The site builds on Node 20 today with engine warnings, so moving local and Cloudflare builds to Node 22 is the safe follow-up.

**One caution:** a library makes behaviour reliable; it doesn't make a site premium. Unstyled shadcn is itself one of the most recognisable "AI site" looks, so any new component must be mapped to the brand tokens before it ships.

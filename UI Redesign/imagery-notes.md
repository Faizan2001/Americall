# Preview imagery refinement — 2026-10-20

The previous generated staff and office photos remain retired. The headset still life is an illustrative asset, not documentary evidence of Americall equipment, staff or premises. It is deliberately limited to the homepage hero. Do not fill every empty section with imagery; keep service and process information compact and readable.

## Generation

Mode: built-in image generation. No reference image used.

Prompt: Create a restrained premium editorial product still-life photograph for Americall, a serious B2B appointment-setting service. Landscape 3:2 composition. One physically plausible unbranded professional wired over-ear call-center headset with slim boom microphone, resting naturally on a closed plain navy notebook on a light grey matte surface. Tight purposeful crop; headset fills about 65% of frame. Soft natural side light, believable fine material textures, subdued short shadows. Background is a seamless light grey studio backdrop, no office, no room, no people. Strict visual palette: very dark navy #02122C, white and light grey #F5F7FA only, no red. Photographic not 3D render, not glossy tech advertisement. No screens, no dashboard, no charts, no logos, no words, no numbers, no plants, no floating objects, no glow, no gradients as graphic decoration. The image will sit beside real HTML text, so do not include text. Calm, utilitarian, precise, authentic object geometry. No implied real company location or employees.

Assets: `americall-site/public/images/calling-headset.webp` (1200×800) and `calling-headset-small.webp` (640×427). Compressed WebP with responsive source selection and explicit intrinsic dimensions.

## Preferred future replacements

A real close-up of an Americall headset/work surface, photographed in soft daylight with no private information; an anonymized real appointment hand-off example; or a real training session photographed with staff consent. Do not present synthetic employees or invented dashboards as operational proof.

## Real photography replacement — 2026-10-21

Owner rejected the generated headset as generic and requested real free pictures. The hero is now text-led with the offer and CTA adjacent. Two real Pexels photos accompany the visible Industries section: Kindel Media's solar installation detail and Binyamin Mellish's U.S. home exterior. Kelly's residential solar aerial is retained in the desktop shortlist as an alternative, avoiding redundant solar images on the page. Originals and license/source notes are in `~/Desktop/Americall Photo Shortlist/`. Credits also appear alongside images and in the footer. Responsive 640/1200px WebPs are lazy-loaded with reserved aspect ratios. No image zoom, carousel or entrance effects. These images represent industries; they are not Americall project or customer evidence.

## Services photo and restrained motion — 2026-10-23

The owner viewed `/services/` and saw no photos, so Kelly's residential solar aerial (Pexels, `pexels-kelly-8457868.jpg`) now sits under the Services hero text and CTA, captioned as an industry photo and credited inline and in the footer. It does not show Americall staff, customers or projects. Files: `residential-solar-small.webp` (640w), `residential-solar.webp` (1200w) and `residential-solar-large.webp` (1800w). A `<picture>` source sends the 1800w file to screens 1024px and wider only, so phones never download it. The crop is 16:7 on desktop and 4:3 on phones.

On the homepage, the Industries photos now come straight after the services overview, before the process section. The process band changed from soft grey to white so that two grey bands never touch.

Motion is restrained, and content never waits for JavaScript:
- below-the-fold sections ease up 14px from 0.88 opacity over 650ms, once each (Web Animations API plus IntersectionObserver);
- the first screen and any section already in view at load do not animate, so nothing shifts after first paint;
- photos zoom to 1.025 and buttons lift 2px on hover, for fine pointers only;
- pages crossfade over 180ms (native cross-document view transitions; browsers without them just navigate);
- with reduced motion on, there are no entrances, no zoom and no crossfade, and transitions are near-instant.

Verified on 2026-10-23 against the local production build:
- desktop 1440 and mobile 375 screenshots of Home and Services: photos load, with no horizontal overflow;
- hover zoom applied, and entrances fire once per section;
- the menu (open, Escape, inert page), FAQ, team-size picker, contact required-field validation (not submitted) and 404 all work;
- reduced motion, forced in headless Chrome: 0 entrance animations across a full scroll, and transitions are about 0;
- local mobile Lighthouse, 2 runs: Services 97 performance, 100 accessibility, LCP 2.6s (the photo), CLS 0, TBT 0ms. Home 98–99, 100, LCP 2.0s (text). Home's text LCP already carries about 1.6s of simulated render delay, so most of Services' LCP is the shared CSS and font cost, not the photo or the motion.

These are lab results, not field Core Web Vitals. Not tested: real devices and Safari.

### Smoother motion — 2026-10-23 (P1-031)

The owner asked for smoother animations. The FAQ dropdowns and the mobile menu already ease open, so they are unchanged. What's new:
- Section blocks now enter one after another, 60ms apart (capped at 240ms), using the same 14px, 0.88 → 1 over 650ms. Before, the whole section moved as one block.
- Below-the-fold photos settle from scale 1.05 to 1 over 900ms inside their clipped frames.
- The Services hero photo settles from 1.04 to 1 over 1.1s. It is a CSS animation that starts at first paint, so nothing moves after the page is shown, and it fills backwards only, so the hover zoom still eases.

Verified in headless Chrome over DevTools (the app's browser pane was hidden and does not render frames):
- Home and Services at 1440 and 375px: nothing animates at load, the stagger delays come out as 0/60/120/180/240ms, all animations finish, and there is no overflow.
- With reduced motion on: 0 animations and no hero settle.
- Local mobile Lighthouse: Services 97 performance, 100 accessibility, LCP 2.6s; Home 98, 100, LCP 2.0s. CLS 0 and TBT 0ms on both, unchanged.

Not tested: how it feels on real devices and in Safari.

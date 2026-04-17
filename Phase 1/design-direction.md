# Design Direction

## UX North Star

At first glance, the visitor should feel:

- Americall is professional and legitimate.
- The team understands appointment setting for U.S. service businesses.
- The company has operational scale.
- Booking a demo is the next obvious step.

Single-sentence design message:

"A trusted calling partner that turns trained conversations into qualified appointments for growth-focused service businesses."

## Brand Personality

- Professional
- Trustworthy
- Direct
- Human
- Operationally sharp
- Warm enough to avoid feeling like a faceless call center

## Visual Style

Preferred direction:

- Clean corporate B2B website.
- Navy and white foundation.
- Light background sections for readability.
- Dark navy hero or high-impact bands used selectively.
- Restrained logo red for CTA and highlights.
- Modern sans-serif typography.
- Spacious layout with strong headings, short paragraphs, and proof points.

Avoid:

- A site dominated by one dark teal/navy color from top to bottom.
- Heavy serif/italic paragraphs.
- Generic grayscale stock photos.
- Flashy animations, autoplay audio/video, popups, or clutter.
- Vague CTAs like "Know More" or "Discover More" as the primary action.

## Colors

Core:

- Navy: `#02122C`
- White: `#FFFFFF`

Recommended supporting colors:

- Light neutral: `#F5F7FA`
- Ink/body: `#162033`
- Muted text: `#5B6472`
- Border: `#D8DEE8`

Accent direction:

- Use the logo's red family as the main accent, sampled/refined during logo export.
- Suggested starting red: `#D71920`
- Use red sparingly for primary CTA, small highlights, active states, and important emphasis.
- Do not use large red backgrounds except for tiny badges or strong CTA moments after visual testing.

Do not let the entire site become a blue-only palette or a red-heavy sales page. Use navy for trust, white/light neutrals for clarity, and red as a controlled action signal that complements the logo.

## Typography

Use a clean modern sans-serif. Good options:

- Inter
- Satoshi
- Manrope
- Helvetica/Arial fallback

Rules:

- Headings should be bold and clear.
- Body text should be short and scannable.
- Avoid italic paragraphs for core content.
- Avoid tiny text on mobile.
- No negative letter spacing.
- Do not scale font size directly with viewport width.

## Layout

Recommended page structure:

1. Sticky or simple header with logo, nav, and primary CTA.
2. Hero with headline, short value proposition, trust cue, and "Book a Free Demo" CTA.
3. Services overview.
4. Industries served.
5. Key workforce statistics.
6. How Americall works.
7. Testimonials/trust section.
8. About/agent preview or team credibility.
9. Book a demo/contact section.
10. Footer.

Navigation:

- Home
- Services
- About Us
- FAQ
- Contact Us

Primary CTA:

- Book a Free Demo

Secondary CTA:

- View Services
- See How It Works

## Animation Guidance

Use tasteful, business-safe motion:

- Subtle fade/slide reveal on section entrance.
- Stats count-up when the metrics enter view.
- Button hover/focus motion.
- Agent voice card active waveform or small pulse while audio plays.
- Header shadow or compact behavior on scroll.

Rules:

- Respect `prefers-reduced-motion`.
- Do not animate core text so much that it becomes hard to read.
- Do not use flashing, bouncing, or loud decorative motion.
- Animations should communicate responsiveness and polish, not distract.

## About Page Agent Voice Interaction

Card content:

- Agent photo.
- Name.
- Role or team.
- One-line quote.
- Play voice button.

Interaction:

- Click/tap plays audio.
- If another clip is playing, stop the previous one.
- Button label should update between "Play voice" and "Pause".
- Provide accessible labels.
- Show duration if available.
- Do not autoplay on page load.

Hover:

- Hover can reveal the play control or add a visual hint.
- Hover must not be the only way to play audio.

## Imagery

Preferred:

- Real Americall team photos if available.
- Professional call-center/team images with natural lighting.
- Images that show calm focus, headsets, collaboration, and human service.
- For Phase 1 build, placeholders are acceptable until the owner provides real agent photos and voice clips.

Avoid:

- Cliche stock models in fake cubicles.
- Overly dark or grayscale-only imagery.
- Abstract tech graphics that hide the human nature of the service.

If using placeholders or stock temporarily, mark them clearly for replacement before launch.

## Accessibility Expectations

Target WCAG 2.2 AA habits where practical:

- Alt text for meaningful images.
- Empty alt for decorative images.
- Keyboard-accessible nav and controls.
- Visible focus states.
- Form labels and error messaging.
- Sufficient color contrast.
- No hover-only content.
- Reduced-motion support.

Reference: W3C says WCAG covers recommendations to make web content more accessible across devices and user needs: https://www.w3.org/TR/wcag/

## Performance Expectations

Targets:

- Fast first load.
- Compressed images.
- Minimal JavaScript.
- Lazy load below-the-fold media.
- Avoid huge audio files.
- Good Core Web Vitals.

Core Web Vitals targets from web.dev:

- LCP at or below 2.5s.
- INP at or below 200ms.
- CLS at or below 0.1.

Reference: https://web.dev/articles/vitals

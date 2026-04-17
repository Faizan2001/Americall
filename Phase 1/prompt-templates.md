# Prompt Templates For Future Agents

Use these prompts when starting new Codex threads or delegating focused tasks.

## General Implementation Prompt

```txt
Read `AGENTS.md`, then read `Phase 1/AGENT_START_HERE.md` and `Phase 1/progress.md`.

Goal:
Implement [specific feature/task ID].

Context:
- Use the Americall Phase 1 stack: Astro + Tailwind + npm + GitHub + Cloudflare Pages.
- The buildable app lives in `americall-site/`; run npm commands there.
- Follow `Phase 1/project-context.md`, `Phase 1/design-direction.md`, and `Phase 1/content-and-copy.md`.
- Old-site screenshots are in `Old Website/`.
- Logo files are in `Logo/`.

Constraints:
- Keep the task small and scoped.
- Do not add Firebase or a custom admin dashboard.
- Preserve key Americall metrics exactly.
- Mobile and desktop must both work.
- Use accessible markup and visible focus states.
- Respect reduced motion.
- Apply `Phase 1/codex-agent-guidance.md`: accept simple scaffolding/presentational code, rewrite risky state/effects/forms, and never blindly ship sensitive/security/performance-critical logic.

Done when:
- The task is implemented.
- Build/lint/typecheck are run where available.
- `Phase 1/progress.md` is updated with status, touched files, and verification.
```

## UX Section Prompt

```txt
Design and implement the [section name] for Americall.

Message:
The visitor should understand that Americall is a trustworthy calling and appointment-setting partner for U.S. service businesses.

Persona:
A busy U.S. business owner or sales manager in solar, roofing, HVAC, real estate, or home improvement. They skim quickly, care about appointment quality, and need trust before booking.

Emotional direction:
Professional, calm, reliable, human, and action-oriented.

Required content:
[list exact copy/metrics/services]

Constraints:
Use navy #02122C, white, light neutrals, and restrained logo red as the accent. Use modern sans-serif typography. Avoid generic stock-photo feeling, clutter, autoplay media, and hover-only interactions. Make it responsive and accessible.

Done when:
The section is implemented, mobile checked, desktop checked, and progress.md updated.
```

## Copywriting Prompt

```txt
Rewrite the following Americall website copy for a modern B2B landing page.

Audience:
U.S. business owners and sales teams in solar, roofing, HVAC, real estate, and home improvement.

Tone:
Clear, professional, trustworthy, practical, not hype-heavy.

Rules:
- Preserve factual claims and numbers exactly.
- Make paragraphs shorter.
- Lead with business outcomes.
- Avoid vague filler.
- Use action-oriented CTA language.
- Do not invent certifications, clients, awards, or guarantees.

Input:
[paste old copy]

Output:
Provide polished section copy plus a short note on what changed.
```

## QA Prompt

```txt
Review the Americall Phase 1 website against `Phase 1/qa-checklist.md`.

Focus on:
- Mobile layout issues.
- Desktop layout issues.
- Accessibility issues.
- Form usability.
- Audio interaction behavior.
- SEO basics.
- Performance risks.
- Copy/claim consistency.

Return:
1. Findings ordered by severity with file references.
2. Suggested fixes.
3. Tests/checks performed.
4. Any launch blockers.
```

## CMS Phase 2 Prompt

```txt
Plan Phase 2 CMS integration for Americall.

Read:
- `Phase 1/website-phases.md`
- `Phase 1/technical-plan.md`
- `Phase 1/content-and-copy.md`

Goal:
Create a Sanity CMS integration plan for owner-editable services, FAQs, testimonials, stats, agent profiles, images, and voice clips.

Constraints:
- Do not implement unless explicitly requested.
- Keep Phase 1 static architecture intact where possible.
- Define schema, editing workflow, deployment trigger, and cost/scope implications.

Output:
A concise implementation plan and task breakdown.
```

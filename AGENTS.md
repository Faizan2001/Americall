# Americall Agent Instructions

This repository is for the Americall website redesign. Every AI agent must read these files before making changes:

1. `Phase 1/AGENT_START_HERE.md`
2. `Phase 1/progress.md`
3. `Phase 1/project-context.md`
4. `Phase 1/design-direction.md`
5. `Phase 1/technical-plan.md`

## Working Protocol

- Before editing, read `Phase 1/progress.md`, claim the next unchecked task, and mark it `in_progress` with your agent name and date.
- Keep tasks small. Finish one focused task, verify it, then update `Phase 1/progress.md`.
- Preserve old-site source material in `Old Website/` and brand assets in `Logo/`. Do not rename, delete, or overwrite those files.
- The preferred Phase 1 stack is Astro + Tailwind CSS + GitHub + Cloudflare Pages.
- Do not introduce Firebase unless a later phase requires authentication, database, or custom admin features.
- Do not build a custom admin dashboard in Phase 1. Treat CMS/admin editing as a later paid phase.
- Design must be responsive, accessible, fast, and business-professional.
- Use click/tap controls for agent voice clips. Hover-only audio is not acceptable because mobile users cannot rely on hover and browsers may block non-user-initiated audio.
- Keep Americall's important metrics intact: 100+ clients, 500+ agents, 10,000+ hours, 30,000+ appointments, 12,000+ confirmed sit-ins, 3,000+ sold deals/installs.
- When implementation begins, verify with desktop and mobile screenshots before calling a UI task complete.
- Update documentation when major decisions change.

## Definition Of Done

A task is done only when the relevant file or feature is implemented, checked against the design/technical brief, and recorded in `Phase 1/progress.md` with a short note.

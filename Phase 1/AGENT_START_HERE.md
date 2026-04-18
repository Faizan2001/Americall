# Agent Start Here

This folder stores the shared project memory for the Americall Phase 1 website redesign. It exists so every AI agent starts with the same business context, design rules, implementation strategy, and progress state.

## Mandatory Reading Order

Read these before doing any work:

1. `../AGENTS.md`
2. `progress.md`
3. `project-context.md`
4. `design-direction.md`
5. `content-and-copy.md`
6. `technical-plan.md`
7. `website-phases.md`
8. `qa-checklist.md`



## Current Recommendation

Build Phase 1 as a polished static website:

- Astro for fast content-focused pages.
- Tailwind CSS for maintainable styling.
- GitHub for source control and deployment history.
- Cloudflare Pages for hosting and preview deployments.
- Website app should live in `americall-site/`.
- Static content files first, CMS later if the owner confirms self-editing needs.
- Formspree, Basin, Getform, or a Cloudflare-based form handler for lead capture.

Firebase is not needed in Phase 1 unless the scope changes to authentication, database-backed admin, or file upload management.

Use npm for the Astro project unless a later decision changes the package manager. Run app commands from `americall-site/`.

## North Star

Americall should feel like a serious, reliable BPO partner that helps U.S. home improvement businesses convert call activity into booked appointments and sold deals.

The first screen should quickly communicate:

"Americall provides trained calling teams and appointment-setting operations for U.S. businesses that need reliable, qualified conversations."

## Before Making Changes

1. Open `progress.md`.
2. Pick one unchecked task that matches the current request.
3. Change its status to `in_progress`.
4. Add your agent name and date.
5. Complete and verify the task.
6. Mark it `done`, add a short note, and list touched files.

## If You Are Unsure

Use the project documents first. Ask the human only when the missing answer changes cost, scope, brand direction, legal/commercial claims, or launch readiness.

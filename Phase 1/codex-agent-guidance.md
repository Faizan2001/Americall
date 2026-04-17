# Codex Agent Guidance

This file translates current Codex/OpenAI guidance into practical rules for this project.

## Research Sources Used

- Codex prompting docs: https://developers.openai.com/codex/prompting
- Codex AGENTS.md docs: https://developers.openai.com/codex/guides/agents-md
- Codex best practices: https://developers.openai.com/codex/learn/best-practices
- Codex prompting guide: https://developers.openai.com/cookbook/examples/gpt-5/codex_prompting_guide
- OpenAI prompt engineering guide: https://platform.openai.com/docs/guides/prompt-engineering
- OpenAI reasoning best practices: https://platform.openai.com/docs/guides/reasoning-best-practices

Note: The OpenAI developer docs MCP server was added globally during setup, but this running session may need a Codex restart before the MCP tools appear. Future agents should prefer the MCP docs server when available.

## Why AGENTS.md Exists

OpenAI's Codex docs say Codex reads `AGENTS.md` files before work and layers global/project/local guidance. This repository uses root `AGENTS.md` to force agents into the same context and progress workflow.

Important implications:

- Keep root `AGENTS.md` concise.
- Put detailed context in `Phase 1/`.
- Update docs when decisions change.
- If a future subfolder needs special rules, add a closer `AGENTS.md` there.

## Good Task Prompt Shape

Every agent task should include:

- Goal: What should be built or changed?
- Context: Which files/docs/assets matter?
- Constraints: What stack, brand, UX, accessibility, and scope rules apply?
- Done when: What must be true before the task is complete?

This follows OpenAI's Codex best-practice framing for reliable work.

## Agent Workflow

1. Read root `AGENTS.md`.
2. Read this folder's start/context files.
3. Open `progress.md`.
4. Claim a task.
5. Gather only the context needed.
6. Implement the smallest useful change.
7. Verify with build, lint, visual checks, or file inspection.
8. Update `progress.md`.
9. Summarize what changed and what remains.

## Reasoning Effort Guidance

Use lower effort for:

- Simple copy edits.
- Small component changes.
- Single-file documentation updates.

Use medium/high effort for:

- Design system decisions.
- Responsive layout implementation.
- Accessibility fixes.
- Form handling.
- SEO architecture.

Use extra-high style reasoning only for:

- Large multi-step implementation.
- Cross-page architecture.
- Debugging hard layout/performance issues.

## Parallel Agent Rule

Multiple agents may work at the same time only if their file ownership does not overlap.

Examples:

- Agent A: services section component.
- Agent B: FAQ content file.
- Agent C: logo export/assets.

Avoid:

- Two agents editing the same layout, same page, same CSS file, or same task row in `progress.md`.

## Frontend Quality Bar

Agents must treat frontend work as product work, not decoration.

Before generating UI, define:

- What the user should understand first.
- What action the user should take.
- What trust signal supports the action.
- What content must be visible on mobile.

Then implement.

## AI-Generated Code Review Rules

Use AI output, but do not be dazzled by code that merely compiles and looks right. Treat generated code in three buckets.

Accept after review:

- Project scaffolding.
- Presentational components.
- Simple Tailwind layout/styling.
- Pure utility functions.
- Static content mapping.
- Basic test file skeletons, after improving the assertions.

Rewrite before shipping:

- `useEffect` usage with missing dependencies or unclear cleanup.
- Derived state stored unnecessarily in `useState`.
- Prop drilling through several layers where composition or a small context would be cleaner.
- Components doing too much in one file.
- Index keys or unstable keys in lists.
- Form logic that lacks validation, error states, accessibility, or spam considerations.
- Animations that may hurt performance or ignore reduced motion.
- SEO output that only looks present but lacks real metadata quality.

Never blindly ship:

- Authentication or authorization logic.
- Security-sensitive code.
- Payment handling.
- Sensitive personal data handling.
- Complex custom hooks with business-critical state.
- Performance-critical rendering or animation loops without profiling/testing.
- Tests that only prove the component renders.

For this project, the highest-risk Phase 1 areas are forms, audio controls, animation performance, SEO correctness, and responsive layout stability. Review those line by line.

## Validation Requirements

For documentation tasks:

- Check all required files exist.
- Check links and filenames are consistent.

For implementation tasks:

- Run build.
- Run lint/typecheck if available.
- Use browser screenshots or Playwright where practical.
- Check mobile and desktop.
- Check keyboard navigation for interactive controls.
- Check reduced-motion behavior for animations.

## Do Not

- Do not use vague placeholder copy if real old-site content is available.
- Do not erase old content without preserving the intent.
- Do not add Firebase by habit.
- Do not build owner admin editing in Phase 1.
- Do not make hover-only interactions.
- Do not let animation harm readability.
- Do not claim metrics beyond what the owner has provided.

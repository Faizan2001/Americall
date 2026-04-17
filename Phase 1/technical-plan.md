# Technical Plan

## Phase 1 Stack

Recommended stack:

- Astro
- TypeScript
- Tailwind CSS
- npm
- GitHub
- Cloudflare Pages

Why:

- The site is content-focused and mostly static.
- Astro is built for fast content websites and can ship very little JavaScript by default.
- Cloudflare Pages can deploy automatically from GitHub and provides preview deployments.
- The stack is portfolio-friendly and gives high design control without WordPress overhead.
- npm is required unless the project deliberately chooses another JavaScript package manager. Astro projects need Node.js and a package manager to install dependencies and run build scripts.

Reference:

- Astro content collections: https://docs.astro.build/en/guides/content-collections/
- Cloudflare Astro deployment guide: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- Cloudflare Git integration: https://developers.cloudflare.com/pages/configuration/git-integration/

## Proposed Project Structure

When implementation begins, create the Astro app in a subfolder named `americall-site/`:

```txt
/
  AGENTS.md
  Phase 1/
  Old Website/
  Logo/
  americall-site/
    src/
      assets/
        images/
        logos/
      components/
      content/
        services.ts
        stats.ts
        faqs.ts
        agents.ts
        testimonials.ts
      layouts/
      pages/
        index.astro
        services.astro
        about.astro
        contact.astro
        faq.astro
      styles/
    public/
      audio/
        agents/
      favicon/
    astro.config.mjs
    package.json
    tailwind.config.*
```

The root folder remains the project workspace and planning/archive area. The actual buildable website lives inside `americall-site/`.

Commands must be run from inside the app folder:

```bash
cd americall-site
npm install
npm run dev
npm run build
npm run preview
```

If the GitHub repository root is `/home/faizan/Desktop/Americall`, configure Cloudflare Pages with:

- Root directory: `americall-site`
- Build command: `npm run build`
- Build output directory: `dist`

If Cloudflare does not expose "Root directory" in the selected workflow, use:

- Build command: `cd americall-site && npm run build`
- Build output directory: `americall-site/dist`

Prefer the first option because it keeps build paths cleaner.

## Content Management Strategy

Phase 1:

- Store content in TypeScript, JSON, Markdown, or Astro content collections.
- Owner requests changes through the developer.
- Deploy updates through GitHub and Cloudflare Pages.

Phase 2:

- Add a CMS if the owner confirms they need self-editing.
- Recommended CMS: Sanity.
- CMS-editable content can include services, FAQs, testimonials, stats, agent profiles, agent photos, and voice clips.

Reference:

- Sanity with Astro: https://www.sanity.io/docs/astro
- Astro CMS guide for Sanity: https://docs.astro.build/en/guides/cms/sanity/

## Hosting

Use Cloudflare Pages with GitHub integration.

Expected settings:

- Production branch: `main`
- Root directory: `americall-site`
- Build command: `npm run build`
- Build output: `dist`

Cloudflare Pages automatically rebuilds and deploys on pushed commits when connected to GitHub. It also provides preview deployments for pull requests/branches.

Important Cloudflare limit:

- Pages single asset file size limit is 25 MiB on the Free plan.

Reference:

- Cloudflare Pages limits: https://developers.cloudflare.com/pages/platform/limits/

## Forms

Phase 1 recommended options:

- Basin
- Formspree
- Getform
- Cloudflare Pages Function + email provider, only if custom handling is worth the extra work

Keep the provider cost separate in the client quote. Free tiers are usually limited and can pause or cap submissions.

Minimum form requirements:

- Name
- Company
- Business email
- Phone
- Message or service interest
- Spam protection
- Success and error states
- Accessible labels
- Privacy note if collecting personal data

## Audio For Agent Profiles

No Firebase is needed for short voice clips.

Use:

```txt
public/audio/agents/agent-name.mp3
```

or, if CMS is added later, store audio in the CMS/media CDN.

Implementation rules:

- Use compressed MP3, M4A, or WebM.
- Keep clips short, ideally 5-20 seconds.
- Click/tap to play.
- Stop currently playing clip before starting another.
- Provide visible play/pause state.
- Respect reduced motion for animated waveform effects.

## SEO

Phase 1 must include:

- Page-specific title and meta description.
- Canonical URL.
- Open Graph image.
- Sitemap.
- Robots.txt.
- Semantic headings.
- Image alt text.
- Local/business contact details in footer.
- Structured data if appropriate, such as Organization schema.
- Google Search Console setup after domain connection.

## Analytics

Recommended:

- Cloudflare Web Analytics for simple privacy-friendly analytics.
- Google Analytics only if the client specifically wants it.

## Do Not Add In Phase 1 Unless Requested

- Custom admin dashboard.
- Firebase Auth.
- Firestore.
- Firebase Storage.
- Complex backend.
- Blog system.
- Payment system.
- Heavy animation library if CSS/IntersectionObserver is enough.

## Verification Commands

Once implementation exists, use the project's actual package manager and scripts. Likely commands:

```bash
cd americall-site
npm install
npm run dev
npm run build
npm run preview
```

Also run lint/typecheck if configured:

```bash
npm run lint
npm run check
```

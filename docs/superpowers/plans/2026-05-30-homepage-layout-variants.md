# Homepage Layout Variants Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build four Hugo-backed homepage variant pages plus a local chooser page so the user can compare redesign directions in the running site.

**Architecture:** Keep the existing homepage untouched and add a new `homepage-variant` content type rendered by a dedicated template. Reuse the existing author and research content through shared partials, and differentiate the four options with variant parameters and scoped SCSS classes.

**Tech Stack:** Hugo, Hugo Blox theme structure, Go template partials, Markdown content pages, SCSS in `assets/scss/custom.scss`

---

## File Structure

Planned files and responsibilities:

- Create: `content/layout-options/_index.md`
  - chooser page linking to the four preview routes
- Create: `content/layout-professional/_index.md`
  - professional/minimal homepage variant route
- Create: `content/layout-editorial/_index.md`
  - editorial/content-forward homepage variant route
- Create: `content/layout-personal/_index.md`
  - personal/welcoming homepage variant route
- Create: `content/layout-balanced/_index.md`
  - mixed/balanced homepage variant route
- Create: `layouts/homepage-variant/single.html`
  - master template for all variant pages
- Create: `layouts/partials/homepage-variants/hero.html`
  - shared hero renderer with variant-aware framing
- Create: `layouts/partials/homepage-variants/research-section.html`
  - shared renderer for publications, working papers, and work in progress
- Create: `layouts/partials/homepage-variants/chooser-card.html`
  - reusable chooser link card for the comparison page
- Modify: `assets/scss/custom.scss`
  - import or append scoped styles for chooser and all four variants

### Task 1: Scaffold Variant Routes And Trigger A Failing Build

**Files:**
- Create: `content/layout-options/_index.md`
- Create: `content/layout-professional/_index.md`
- Create: `content/layout-editorial/_index.md`
- Create: `content/layout-personal/_index.md`
- Create: `content/layout-balanced/_index.md`

- [ ] **Step 1: Write the content pages that depend on a not-yet-created custom template**

```md
---
title: "Homepage Layout Options"
type: "homepage-variant"
layout: "single"
url: "/layout-options/"
variant: "chooser"
---
```

```md
---
title: "Homepage Layout: Professional"
type: "homepage-variant"
layout: "single"
url: "/layout-professional/"
variant: "professional"
---
```

```md
---
title: "Homepage Layout: Editorial"
type: "homepage-variant"
layout: "single"
url: "/layout-editorial/"
variant: "editorial"
---
```

```md
---
title: "Homepage Layout: Personal"
type: "homepage-variant"
layout: "single"
url: "/layout-personal/"
variant: "personal"
---
```

```md
---
title: "Homepage Layout: Balanced"
type: "homepage-variant"
layout: "single"
url: "/layout-balanced/"
variant: "balanced"
---
```

- [ ] **Step 2: Run Hugo to verify the new content fails without the custom layout**

Run: `hugo`

Expected: FAIL with a layout resolution error for type `homepage-variant` or missing template output for the new routes.

- [ ] **Step 3: Add the minimal page bodies so the chooser page and variants have explicit copy**

```md
Browse the homepage redesign options below and compare them in the local Hugo server.
```

```md
This preview shows the professional homepage direction.
```

```md
This preview shows the editorial homepage direction.
```

```md
This preview shows the personal homepage direction.
```

```md
This preview shows the balanced homepage direction.
```

- [ ] **Step 4: Run Hugo again to confirm the failure remains template-related rather than content-related**

Run: `hugo`

Expected: FAIL again, but without front matter parsing errors.

- [ ] **Step 5: Commit the route scaffolding**

```bash
git add content/layout-options/_index.md content/layout-professional/_index.md content/layout-editorial/_index.md content/layout-personal/_index.md content/layout-balanced/_index.md
git commit -m "feat: add homepage layout preview routes"
```

### Task 2: Build The Shared Homepage Variant Template

**Files:**
- Create: `layouts/homepage-variant/single.html`
- Create: `layouts/partials/homepage-variants/hero.html`
- Create: `layouts/partials/homepage-variants/research-section.html`
- Create: `layouts/partials/homepage-variants/chooser-card.html`

- [ ] **Step 1: Write a template that references missing partials so the next build fails in a controlled way**

```html
{{ define "main" }}
  {{ if eq .Params.variant "chooser" }}
    <main class="homepage-layout-chooser universal-wrapper">
      <header class="homepage-layout-chooser__header">
        <h1>{{ .Title }}</h1>
        {{ with .Content }}<div class="article-style">{{ . }}</div>{{ end }}
      </header>
      {{ partial "homepage-variants/chooser-card.html" (dict "title" "Professional" "url" "/layout-professional/" "description" "Restrained academic presentation.") }}
    </main>
  {{ else }}
    <main class="homepage-variant homepage-variant--{{ .Params.variant }}">
      {{ partial "homepage-variants/hero.html" . }}
      {{ partial "homepage-variants/research-section.html" (dict "page" . "section" "publications" "title" "Publications") }}
      {{ partial "homepage-variants/research-section.html" (dict "page" . "section" "working-papers" "title" "Working Papers") }}
      {{ partial "homepage-variants/research-section.html" (dict "page" . "section" "workinprogress" "title" "Work in Progress") }}
    </main>
  {{ end }}
{{ end }}
```

- [ ] **Step 2: Run Hugo to verify the template fails because the partials do not exist yet**

Run: `hugo`

Expected: FAIL with missing partial errors under `homepage-variants/...`.

- [ ] **Step 3: Implement the template and partials minimally so all routes render real shared content**

```html
{{ define "main" }}
  {{ if eq .Params.variant "chooser" }}
    <main class="homepage-layout-chooser universal-wrapper">
      <header class="homepage-layout-chooser__header">
        <p class="homepage-layout-chooser__eyebrow">Homepage previews</p>
        <h1>{{ .Title }}</h1>
        {{ with .Content }}<div class="article-style">{{ . }}</div>{{ end }}
      </header>
      <div class="homepage-layout-chooser__grid">
        {{ partial "homepage-variants/chooser-card.html" (dict "title" "Professional" "url" "/layout-professional/" "description" "Portrait-forward, restrained, and academically minimal.") }}
        {{ partial "homepage-variants/chooser-card.html" (dict "title" "Editorial" "url" "/layout-editorial/" "description" "Research-first, typographic, and publication-led.") }}
        {{ partial "homepage-variants/chooser-card.html" (dict "title" "Personal" "url" "/layout-personal/" "description" "Welcoming lead-in with stronger personal framing.") }}
        {{ partial "homepage-variants/chooser-card.html" (dict "title" "Balanced" "url" "/layout-balanced/" "description" "Compromise between personal intro and research overview.") }}
      </div>
    </main>
  {{ else }}
    <main class="homepage-variant homepage-variant--{{ .Params.variant }}">
      {{ partial "homepage-variants/hero.html" . }}
      <div class="homepage-variant__sections">
        {{ partial "homepage-variants/research-section.html" (dict "page" . "section" "publications" "title" "Publications" "section_class" "publications") }}
        {{ partial "homepage-variants/research-section.html" (dict "page" . "section" "working-papers" "title" "Working Papers" "section_class" "working-papers") }}
        {{ partial "homepage-variants/research-section.html" (dict "page" . "section" "workinprogress" "title" "Work in Progress" "section_class" "workinprogress") }}
      </div>
    </main>
  {{ end }}
{{ end }}
```

```html
{{ $author := site.GetPage "authors/admin" }}
<section class="homepage-variant__hero">
  <div class="homepage-variant__hero-inner universal-wrapper">
    <div class="homepage-variant__hero-copy">
      <p class="homepage-variant__eyebrow">{{ $author.Params.role }}{{ with index $author.Params.organizations 0 }} · {{ .name }}{{ end }}</p>
      <h1 class="homepage-variant__title">{{ $author.Title }}</h1>
      <div class="homepage-variant__bio article-style">{{ $author.Content }}</div>
    </div>
    <div class="homepage-variant__hero-media">
      <img
        class="homepage-variant__avatar"
        src="{{ ($author.Resources.GetMatch "avatar*").RelPermalink }}"
        alt="{{ $author.Title }}"
      >
    </div>
  </div>
</section>
```

```html
{{ $page := .page }}
{{ $sectionPage := site.GetPage .section }}
<section class="homepage-variant__section homepage-variant__section--{{ .section_class }}">
  <div class="universal-wrapper">
    <header class="homepage-variant__section-header">
      <p class="homepage-variant__section-kicker">{{ $page.Title }}</p>
      <h2>{{ .title }}</h2>
    </header>
    <div class="homepage-variant__section-body article-style">
      {{ with $sectionPage }}{{ .Content }}{{ end }}
    </div>
  </div>
</section>
```

```html
<a class="homepage-layout-chooser__card" href="{{ .url }}">
  <span class="homepage-layout-chooser__card-title">{{ .title }}</span>
  <span class="homepage-layout-chooser__card-copy">{{ .description }}</span>
</a>
```

- [ ] **Step 4: Run Hugo to verify the routes now build**

Run: `hugo`

Expected: PASS with normal Hugo completion output and generated pages for `layout-options`, `layout-professional`, `layout-editorial`, `layout-personal`, and `layout-balanced`.

- [ ] **Step 5: Commit the shared template system**

```bash
git add layouts/homepage-variant/single.html layouts/partials/homepage-variants/hero.html layouts/partials/homepage-variants/research-section.html layouts/partials/homepage-variants/chooser-card.html
git commit -m "feat: add shared homepage variant template"
```

### Task 3: Add Distinct Styles For All Four Layout Directions

**Files:**
- Modify: `assets/scss/custom.scss`

- [ ] **Step 1: Add minimal variant selectors first so a missing-style review is easy to spot**

```scss
.homepage-layout-chooser,
.homepage-variant {
  padding-top: 5rem;
  padding-bottom: 4rem;
}

.homepage-variant__hero,
.homepage-variant__section {
  margin-bottom: 2rem;
}
```

- [ ] **Step 2: Run Hugo and inspect that the build passes before adding the full styling**

Run: `hugo`

Expected: PASS. The pages render, but the four variants still look too similar.

- [ ] **Step 3: Expand `assets/scss/custom.scss` with scoped variant-specific layout rules**

```scss
.homepage-layout-chooser__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 2rem;
}

.homepage-layout-chooser__card {
  display: block;
  padding: 1.5rem;
  border: 1px solid var(--rule-color);
  background: linear-gradient(180deg, #fff 0%, #f7f4ee 100%);
  color: var(--body-color);
  text-decoration: none;
}

.homepage-variant__hero-inner {
  display: grid;
  gap: 2rem;
  align-items: start;
}

.homepage-variant__avatar {
  width: 100%;
  max-width: 16rem;
  height: auto;
  object-fit: cover;
}

.homepage-variant--professional .homepage-variant__hero-inner {
  grid-template-columns: minmax(0, 1.5fr) 14rem;
}

.homepage-variant--professional .homepage-variant__section-header h2 {
  border-top: 1px solid var(--rule-color);
  padding-top: 1rem;
}

.homepage-variant--editorial .homepage-variant__hero {
  padding-bottom: 1rem;
}

.homepage-variant--editorial .homepage-variant__hero-inner {
  grid-template-columns: minmax(0, 1fr);
}

.homepage-variant--editorial .homepage-variant__hero-media {
  display: none;
}

.homepage-variant--editorial .homepage-variant__sections .publication-entry {
  grid-template-columns: 6rem minmax(0, 1fr);
  border-top: 1px solid var(--rule-color);
  padding-top: 1rem;
}

.homepage-variant--personal .homepage-variant__hero {
  background: linear-gradient(135deg, #f6efe3 0%, #fbfaf7 100%);
  padding-top: 3rem;
  padding-bottom: 2rem;
}

.homepage-variant--personal .homepage-variant__hero-inner {
  grid-template-columns: minmax(0, 1.2fr) minmax(12rem, 16rem);
}

.homepage-variant--personal .homepage-variant__section {
  background: #fffdfa;
}

.homepage-variant--balanced .homepage-variant__hero-inner {
  grid-template-columns: minmax(0, 1.35fr) 15rem;
}

.homepage-variant--balanced .homepage-variant__section-header {
  display: grid;
  grid-template-columns: 10rem minmax(0, 1fr);
  gap: 1rem;
  align-items: baseline;
}

@media screen and (max-width: 760px) {
  .homepage-layout-chooser__grid,
  .homepage-variant--professional .homepage-variant__hero-inner,
  .homepage-variant--personal .homepage-variant__hero-inner,
  .homepage-variant--balanced .homepage-variant__hero-inner,
  .homepage-variant--balanced .homepage-variant__section-header {
    grid-template-columns: 1fr;
  }

  .homepage-variant__hero {
    padding-top: 1rem;
  }
}
```

- [ ] **Step 4: Run Hugo to verify the styles compile**

Run: `hugo`

Expected: PASS with no SCSS compilation errors.

- [ ] **Step 5: Commit the styling layer**

```bash
git add assets/scss/custom.scss
git commit -m "feat: style homepage layout variants"
```

### Task 4: Verify Navigation, Local Review Flow, And Handoff

**Files:**
- Modify: `content/layout-options/_index.md`
- Modify: `layouts/homepage-variant/single.html`

- [ ] **Step 1: Add explicit back-links between chooser and variant pages**

```md
Browse the homepage redesign options below and compare them in the local Hugo server. Each preview keeps the current content but changes structure and emphasis.
```

```html
{{ if ne .Params.variant "chooser" }}
  <div class="universal-wrapper">
    <p class="homepage-variant__backlink"><a href="/layout-options/">Back to layout chooser</a></p>
  </div>
{{ end }}
```

- [ ] **Step 2: Run Hugo to verify the final route graph builds**

Run: `hugo`

Expected: PASS with generated output for chooser and all four variant pages.

- [ ] **Step 3: Run the local development server and manually review the five routes**

Run: `.\sim.cmd`

Expected: Hugo server starts successfully. Manually review:

```text
/
/layout-options/
/layout-professional/
/layout-editorial/
/layout-personal/
/layout-balanced/
```

- [ ] **Step 4: Check the manual acceptance criteria**

Expected:
- the existing homepage at `/` is unchanged
- the chooser page clearly links to all four variants
- each variant preserves the full biography and all three research sections
- the four variants look materially different on desktop
- the layouts remain readable on a narrow mobile viewport

- [ ] **Step 5: Commit the review-flow polish**

```bash
git add content/layout-options/_index.md layouts/homepage-variant/single.html
git commit -m "feat: add homepage layout chooser navigation"
```

## Self-Review

Spec coverage check:
- separate Hugo-backed preview routes: covered in Tasks 1, 2, and 4
- shared reuse of current content: covered in Task 2 through shared partials and `site.GetPage`
- meaningful layout differences: covered in Task 3 with four scoped variants
- simple local navigation: covered in Task 4
- keep existing homepage intact: covered in Task 4 acceptance criteria

Placeholder scan:
- no `TODO`, `TBD`, or deferred implementation markers remain
- each task includes exact file paths, commands, and code snippets

Type consistency check:
- content pages consistently use `type: "homepage-variant"`
- template path consistently uses `layouts/homepage-variant/single.html`
- variant keys consistently use `professional`, `editorial`, `personal`, `balanced`, and `chooser`

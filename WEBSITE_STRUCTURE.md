# Website Structure

This file maps the structure of this academic economics website so future edits can start from the right files.

## Overview

- Framework: Hugo / Hugo Blox academic site.
- Site title: `Nicolai Waldstrom` in `config/_default/hugo.yaml`.
- Public URL: `https://nwaldstrom.github.io/` in `config/_default/hugo.yaml`.
- Main content source: `content/`.
- Custom styling: `assets/scss/custom.scss`.
- Generated site output: `public/`.
- Generated Hugo resources/cache: `resources/`.

Edit source files in `content/`, `config/`, `layouts/`, `assets/`, and `static/`. Avoid editing `public/` and `resources/` directly unless intentionally patching generated output.

## Main Pages And Routes

| Route | Source file | Purpose |
| --- | --- | --- |
| `/` | `content/_index.md` | Landing page with About, Working Papers, and Publications sections. |
| `/#about` | `content/_index.md` plus `content/authors/admin/_index.md` | Homepage biography section. |
| `/#working-papers` | `content/_index.md` plus `layouts/shortcodes/workingpapers_content.html` and `content/working-papers/_index.md` | Homepage working papers block. |
| `/#publications` | `content/_index.md` plus `layouts/shortcodes/publications_content.html` and `content/publications/_index.md` | Homepage publications block. |
| `/teaching/` | `content/teaching/_index.md` | Teaching page. |
| `/codes/` | `content/codes/_index.md` | Codes/tools page. |
| `/uploads/CV.pdf` | `static/uploads/CV.pdf` | CV link in navbar and author profile. |

## Navigation

Navigation is configured in `config/_default/menus.yaml`.

Current main menu:

- `Home` -> `#about`
- `CV` -> `uploads/CV.pdf`
- `Teaching` -> `/teaching/`
- `Codes` -> `/codes/`

Navbar behavior and visibility are configured in `config/_default/params.yaml` under `header.navbar`.

## Homepage Composition

The homepage is defined in `content/_index.md` with `type: landing`.

Sections:

- `about.biography`, id `about`, pulls profile data from `content/authors/admin/_index.md`.
- `collection`, id `working-papers`, renders `{{< workingpapers_content >}}`.
- `collection`, id `publications`, renders `{{< publications_content >}}`.

The homepage also loads `/js/coauthors.js`, which is sourced from `static/js/coauthors.js`.

## Profile / About Section

Main author profile:

- File: `content/authors/admin/_index.md`
- Avatar images: `content/authors/admin/`
- Current role: Senior Research Analyst
- Organization: DREAM
- Bio text and research interests are written directly in the Markdown/HTML body.
- Social links and CV link are in the front matter.

When editing the About section, update `content/authors/admin/_index.md`, not `content/_index.md`, unless changing the section title or homepage block layout.

## Research Content

### Working Papers

- Main file: `content/working-papers/_index.md`
- Homepage shortcode: `layouts/shortcodes/workingpapers_content.html`
- PDFs referenced from the page generally live under `content/files/research/` and are copied to public output by Hugo.
- Older backups also exist under `content/working-papers/files/research/backup/`.

Working paper entries are custom HTML blocks with these classes:

- `.publication-entry`
- `.publication-date`
- `.publication-info`
- `.publication-title`
- `.publication-details`
- `.custom-status`
- `.custom-abstr`
- `.pdflinktemp`

Abstract buttons use inline JavaScript to toggle hidden `<div>` elements. Ensure each abstract `id` is unique on the page when adding entries.

### Publications

- Main file: `content/publications/_index.md`
- Homepage shortcode: `layouts/shortcodes/publications_content.html`
- Publication PDFs are in `content/publications/files/research/` and/or `content/files/research/`.

The publication list uses the same custom HTML and CSS classes as working papers.

### Coauthor Links

- Source script: `static/js/coauthors.js`
- Also duplicated/generated at `assets/js/coauthors.js` and `public/js/coauthors.js`.

The content uses spans like `<span class="JeppeDruedahl"></span>`. The JavaScript replaces those spans with linked coauthor names. To add a coauthor, update the `links` object in `static/js/coauthors.js`.

## Teaching Page

- File: `content/teaching/_index.md`
- Route: `/teaching/`
- Contains Markdown headings and inline HTML links/classes.

## Codes Page

- File: `content/codes/_index.md`
- Route: `/codes/`
- Contains grouped links to macroeconomics computational tools.

## Styling

Primary custom stylesheet:

- `assets/scss/custom.scss`

Important styling areas:

- Global typography and link colors.
- Navbar size and border.
- Homepage spacing: `#about`, `.home-section`, `.section-heading h1`.
- Publication/working-paper layout and buttons.
- CSS variables: `--pcolor`, `--scolor`, `--tcolor`.
- Avatar sizing: `.avatar`, `.avatar-square`.

Theme colors:

- `data/themes/custom.toml`
- Backup/copy: `data/themes/custom - Copy.toml`

Font configuration:

- `data/fonts/customfont.toml`

## Layout Overrides

Custom Hugo layout files live in `layouts/`.

Notable files:

- `layouts/_default/baseof.html`
- `layouts/_default/single.html`
- `layouts/_default/list.html`
- `layouts/_default/rss.xml`
- `layouts/partials/components/headers/navbar.html`
- `layouts/partials/components/headers/navbar_old.html`
- `layouts/partials/components/footers/minimal.html`
- `layouts/shortcodes/workingpapers_content.html`
- `layouts/shortcodes/publications_content.html`
- `layouts/shortcodes/teaching_content.html`
- `layouts/shortcodes/codes_content.html`

The active navbar override appears to be `layouts/partials/components/headers/navbar.html`.

## Static Files And Assets

- `static/uploads/CV.pdf`: CV served at `/uploads/CV.pdf`.
- `static/js/coauthors.js`: coauthor replacement script served at `/js/coauthors.js`.
- `assets/media/icon.png`: site icon source.
- `assets/media/publication/...`: publication images.
- `assets/media/project/...`: project images.
- `images/`: image folder present, check before adding new top-level images.

## Generated Output

These directories are generated or build artifacts:

- `public/`: rendered website output.
- `resources/`: Hugo processed assets.
- `.hugo_build.lock`: Hugo build lock file.

Files under `public/` mirror rendered routes such as:

- `public/index.html`
- `public/teaching/index.html`
- `public/codes/index.html`
- `public/working-papers/index.html`
- `public/publications/index.html`

Prefer rebuilding Hugo after source edits instead of manually editing these files.

## Configuration Files

- `config/_default/hugo.yaml`: site title, base URL, language, output formats, taxonomies, markup, sitemap, minify settings.
- `config/_default/params.yaml`: appearance, SEO, navbar, footer, features, comments/search/map settings.
- `config/_default/menus.yaml`: navbar links.
- `config/_default/module.yaml`: Hugo module configuration.
- `config/_default/languages.yaml`: language configuration.
- `netlify.toml`: Netlify/build deployment config.
- `go.mod` and `go.sum`: Hugo module dependencies.

## Common Edit Tasks

- Update biography: edit `content/authors/admin/_index.md`.
- Update profile photo: replace or add image in `content/authors/admin/`, then check front matter/image behavior.
- Add a working paper: edit `content/working-papers/_index.md`, add PDF to `content/files/research/`, and ensure abstract IDs are unique.
- Add a publication: edit `content/publications/_index.md`, add PDF to `content/publications/files/research/` or `content/files/research/`.
- Update CV: replace `static/uploads/CV.pdf`.
- Update menu links: edit `config/_default/menus.yaml`.
- Update colors/spacing/publication layout: edit `assets/scss/custom.scss`.
- Add or update a coauthor link: edit `static/js/coauthors.js`.

## Notes For Future Agents

- Several backup files exist, including `_index_backup.md`, `_index_old.shouldbemd`, `_index.md_actucal`, and copied theme files. Treat them as references unless explicitly asked to restore from them.
- Some text displays mojibake in the shell output for Danish characters, but the source files may still render correctly depending on encoding. Be careful with non-ASCII names such as Waldstrom/Waldstrom with Danish characters and Soren/Soren with Danish characters.
- The repository may trigger Git `safe.directory` warnings in the sandbox user. This does not affect file edits, but it can block `git status` until the directory is marked safe.

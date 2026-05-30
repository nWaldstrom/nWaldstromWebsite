# Homepage Layout Variants Design

Date: 2026-05-30

## Goal

Create four alternative homepage layouts for the Hugo site so they can be compared locally by running `sim.cmd`. The alternatives should preserve the existing homepage content mostly as-is while improving structure, hierarchy, rhythm, and overall visual clarity.

## Scope

This work covers the homepage only.

Included:
- Separate Hugo-backed preview routes for four homepage variants
- Shared reuse of the current homepage content
- Layout, spacing, typography, and section-structure changes
- A simple way to navigate between variants locally

Excluded:
- Redesign of research list pages, article pages, or project pages
- Rewriting the substantive homepage copy
- Removing core research sections from the homepage
- Hiding key material behind preview cards or "see more" links

## Constraints

- The homepage remains long-form and keeps all major research lists on the front page.
- Existing content should be preserved mostly unchanged.
- Variants should differ meaningfully in hierarchy and layout, not just color tweaks.
- Some variants may emphasize the portrait and personal introduction, while others may emphasize research first.
- The previews should run inside the real Hugo site, not as disconnected static mockups.

## Current-State Assessment

The current homepage is assembled as a single sequence:

1. About / biography block
2. Publications list
3. Working papers list
4. Work in progress list

The messy feeling likely comes from three issues:

- The page is very linear, so all sections carry similar visual weight.
- The transition from personal introduction to research lists is abrupt.
- The list sections are information-dense, but the surrounding layout does not provide enough pacing, grouping, or contrast.

## Proposed Delivery

Implement four separate homepage variants as real Hugo pages/routes, each using the same underlying content structure. This allows direct comparison in the browser using the existing local workflow.

Recommended route structure:

- `/layout-professional/`
- `/layout-editorial/`
- `/layout-personal/`
- `/layout-balanced/`

Also create a simple chooser/index page linking to all four variants for local review.

## Variant Designs

### 1. Professional / Minimal

Intent:
An academic, restrained layout that feels polished and orderly.

Characteristics:
- Portrait and bio remain near the top
- Narrower content rhythm and stricter spacing
- Clean section dividers and calm typography
- Research entries presented with strong alignment and minimal decoration

Expected effect:
This should feel like the cleanest and most conservative improvement over the current site.

### 2. Editorial / Content-Forward

Intent:
A sharper layout that treats the homepage like a research index with a lighter personal preface.

Characteristics:
- Reduced visual weight for the biography area
- Research sections become the dominant visual content
- Stronger headings, spacing, and typographic hierarchy
- More publication-led page flow

Expected effect:
This should feel more deliberate and publication-centric, with less of a profile-page feel.

### 3. Personal / Welcoming

Intent:
A more human, inviting homepage with a stronger first impression of the person behind the work.

Characteristics:
- More expressive hero composition
- Portrait and biography receive stronger visual framing
- Research sections remain complete, but arrive after a more designed introduction
- Slightly warmer use of spacing, surface treatment, and transitions

Expected effect:
This should feel more approachable and memorable without becoming casual or promotional.

### 4. Mixed / Balanced

Intent:
Blend a clear personal introduction with a strong research overview.

Characteristics:
- Balanced hero with portrait, affiliation, and short summary
- Fast transition into well-structured research sections
- Moderate visual distinctiveness without pushing too far in either direction
- Most likely candidate for final adoption if the user wants a broad compromise

Expected effect:
This should feel modern, clear, and versatile.

## Shared Architecture

Use one shared content source and vary presentation through layout-specific wrappers, classes, and optional partials.

Preferred implementation structure:

- Keep homepage content in a reusable source file or shared page data
- Create four variant pages that each call the same content components
- Add variant-specific body or section classes
- Centralize shared card/list styling where possible
- Keep variant-specific CSS grouped and easy to remove after a final choice

## Page Structure Strategy

Each variant should still contain these content zones:

1. Top intro area
2. Publications
3. Working papers
4. Work in progress

What changes between variants:
- relative visual weight of the top intro
- how the hero is framed
- section widths and spacing
- section divider treatment
- whether list areas feel columnar, editorial, card-based, or minimal

## Navigation and Review Flow

Add a lightweight comparison page with links to the four variants. The user should be able to:

1. run `sim.cmd`
2. open the chooser page
3. visit each variant
4. select a preferred direction

The chooser page should make it clear that these are design variants of the homepage, not permanent site navigation items.

## Error Handling and Robustness

- Variants must degrade safely on mobile layouts.
- Shared content should not be duplicated manually across multiple files where avoidable.
- If Hugo block reuse is awkward, prioritize maintainability over perfect abstraction, but keep structural duplication limited and explicit.

## Testing Strategy

Validation should focus on:

- Hugo site builds and serves correctly with `sim.cmd`
- each variant route renders without template errors
- navigation between chooser page and variants works
- mobile and desktop layouts are both readable and coherent
- existing homepage content still appears completely

## Recommendation

Proceed with all four variants, but implement them around a shared structural system so the final selected version can replace the current homepage without a second full rewrite.

## Open Decisions Already Resolved

- Primary target page: homepage
- Compare multiple design directions: yes
- Preserve content mostly: yes
- Keep all key research lists on the homepage: yes
- Mix portrait-forward and research-forward approaches across variants: yes
- Deliver as separate Hugo-backed pages/routes: yes

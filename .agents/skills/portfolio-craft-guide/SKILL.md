---
name: portfolio-craft-guide
description: >-
  Design guidelines, card patterns, and anti-AI-slop engineering principles for developer portfolios.
  Derived from benchmark GitHub repositories: dillionverma/portfolio (Magic UI), chronark/chronark.com (Unkey), and leerob/site (Vercel).
  Use this skill whenever creating, refactoring, or reviewing UI components, cards, layouts, project showcases, and experience sections.
---

# Portfolio Craft & Anti-AI-Slop Design Guide

This guide establishes the visual engineering standards, component architectures, and anti-AI-slop rules for this portfolio website.
It is reverse-engineered from premier, human-crafted developer portfolios on GitHub:
* **[dillionverma/portfolio](https://github.com/dillionverma/portfolio)** (4.5k+ stars) — Modern component craft, structured project cards, and clean resume accordions.
* **[chronark/chronark.com](https://github.com/chronark/chronark.com)** (3k+ stars) — Minimalist editorial hierarchy, monospaced metadata, and hairline dividers.
* **[leerob/site](https://github.com/leerob/site)** — Content-first engineering aesthetic, typography doing the heavy lifting, zero decorative bloat.

---

## 1. Core Visual Principles (Anti-AI-Slop Checklist)

### ❌ What is "AI Slop" (Banned Patterns)
1. **Glassmorphism Overuse**: Wrapping every single paragraph in `bg-white/80 backdrop-blur-md` with `box-shadow: 0 20px 50px`.
2. **Bubble Radii**: Excessive rounded corners (`rounded-2xl` / `rounded-3xl` / `1.5rem–2rem`) that make interfaces look like cartoon cards instead of software developer tools.
3. **Decorative Gradient Bars**: Putting pointless neon/gradient stripes (`linear-gradient(...)`) at the top of cards without semantic meaning.
4. **Uniform Box Grid**: Forcing education, certificates, skills, languages, and stats into 5 identical floating square boxes.
5. **Cheesy Float Lifts**: `translateY(-6px)` or `scale(1.02)` on hover with massive blurred glow shadows.
6. **Hallucinated or Pseudo-Code**: Snippet tabs containing fake code or filler metrics.

###  What is Authentic Engineering Craft (Mandatory Patterns)
1. **Border-First Architecture**: Crisp 1px solid borders (`border-neutral-200` / `#d4d4d8` or dark `border-neutral-800`), flat or ultra-subtle elevation (`shadow-xs` / `shadow-sm`).
2. **Restrained Corner Radii**: `rounded-lg` (8px) or `rounded-xl` (12px) maximum for cards; `rounded-md` (6px) for badges and buttons.
3. **Information Density & Rhythm**: Layouts that vary naturally — timeline trees for work history, split previews for projects, clean tabular rows for education.
4. **Monospaced Utility Accents**: Use `font-mono text-xs` for technical IDs, dates, terminal commands, versions, and verification credentials.
5. **Subtle Interaction Feedback**: Hover states should subtly darken/lighten borders (`border-neutral-400` or subtle accent ring) and background tint (`bg-surface-alt`), NOT float into the air.

---

## 2. Component Blueprint Specifications

### A. Project Card (`ProjectCard`)
*Reference: `dillionverma/portfolio/src/components/project-card.tsx`*
* **Container**: `border border-line rounded-xl bg-surface overflow-hidden hover:border-neutral-400 hover:ring-1 hover:ring-neutral-400 transition-all`
* **Media / Header**: 
  * Clean 16:9 or aspect-video media preview container (`w-full h-44 object-cover bg-surface-alt`).
  * Floating action pills at the top right (e.g. `Website`, `GitHub`) using clean contrast (`bg-ink text-surface hover:opacity-90`).
* **Content Hierarchy**:
  * Title: `font-semibold text-base text-ink flex items-center justify-between` with clean external arrow icon (`ArrowUpRight`).
  * Date/Category: `text-xs text-muted font-mono`.
  * Summary: Clean `text-xs text-muted leading-relaxed` (2–3 lines).
* **Footer**:
  * Stack badges: Outline badges (`border border-line text-[11px] font-medium px-2 py-0.5 rounded-md bg-surface-alt text-secondary`).

### B. Experience & Career Timeline (`ResumeTimeline`)
*Reference: `dillionverma/portfolio/src/components/section/work-section.tsx` & GitHub Activity*
* **Container**: Clean vertical timeline or list with left connector line or organizational avatar badge.
* **Node Icon / Avatar**: Square or rounded circle with subtle border (`size-9 rounded-lg border border-line bg-surface-alt flex items-center justify-center`).
* **Header**:
  * Role Title: `font-semibold text-sm sm:text-base text-ink`.
  * Organization: `text-sm text-secondary`.
  * Period Badge: `text-xs font-mono text-muted bg-surface-alt px-2 py-0.5 rounded-md border border-line/60`.
* **Highlights**: Bullet points with high legibility (`text-sm text-muted leading-relaxed`), using simple clean dashes or small dots.
* **Skills Used**: Compact inline outline tags.

### C. About, Education & Credentials (`TabbedWorkbench`)
*Reference: Interactive Developer Workbench (Linear / Vercel style)*
* **Architecture**: A single unified workbench container (`border border-line rounded-xl bg-surface`) with an interactive tab switcher.
* **Tabs**:
  1. **Story & Education**: Personal narrative paragraphs, academic milestone card (Binus University B28, Semester 5, GPA, Key Coursework), and languages.
  2. **Technical Stack**: Domain-categorized cards (Languages & Database, Web & Frontend, Workflow & AI) with GitHub language indicator dots and domain context explanations.
  3. **Verified Credentials**: Official certificate cards with certificate thumbnails, verified badges, issue dates, monospaced credential ID pills with copy-state feedback, and external verification links.
* **Visual Rhythm**: High space efficiency, zero box repetition, no fake window dots, 100% human-crafted engineering aesthetic.

---

## 3. Design Tokens (Reference Values)

```css
/* Surface & Lines */
--color-surface: #ffffff;
--color-surface-alt: #f7f7f8;
--color-line: #e4e4e7; /* zinc-200 / neutral-200 */
--color-line-hover: #a1a1aa; /* zinc-400 */

/* Typography */
--font-sans: "Plus Jakarta Sans", system-ui, sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;

/* Geometry */
--radius-badge: 0.375rem; /* 6px */
--radius-card: 0.75rem;   /* 12px */
--radius-btn: 0.5rem;     /* 8px */

/* Shadows */
--shadow-card: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* subtle flat depth */
--shadow-card-hover: 0 4px 12px 0 rgba(0, 0, 0, 0.06);
```

---

## 4. Verification & Quality Assurance
When implementing any section:
1. Verify with `npm run build` to ensure 0 TypeScript and bundling errors.
2. Check on mobile and desktop breakpoints to ensure responsive tightness.
3. Validate that no glowing borders, pseudo-code snippets, or balloon corners are reintroduced.

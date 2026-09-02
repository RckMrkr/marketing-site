# Wikings Guide Restyle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Use the supplied external Wikings logo and restore readable white bold emphasis across both guide pages.

**Architecture:** Update the shared logo constant in each static Gatsby route. Add a page-scoped strong-text color rule to the existing shared Wikings SCSS module; the existing nested selectors remain more specific and retain their color.

**Tech Stack:** Gatsby 4, React 17, Sass modules

## Global Constraints

- Use `https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/174106/images/JXD1FPQZQ8GY4ehf4iPu_website_logo_transparent_background.png` as the external logo URL in both guide pages.
- Make generic highlighted text white and bold only within the shared Wikings page style.
- Preserve more-specific existing guide emphasis styles.
- Do not change routes, navigation, footer, sitemap, links, assets, or guide content.
- Build using Node 16.20.2.

---

### Task 1: Restyling both Wikings guides

**Files:**
- Modify: `src/pages/wikings.js:6-8`
- Modify: `src/pages/wikings2.js:6-8`
- Modify: `src/page_components/wikings/wikings.module.scss:1-59`

**Interfaces:**
- Consumes: the existing `logoUrl` constants and `.page` CSS module selector.
- Produces: both pages use the supplied external logo; generic `<strong>` text inside `.page` renders `#fff` and `font-weight: 700`.

- [ ] **Step 1: Confirm the current logo and conflicting strong style**

Run:

```bash
grep -n 'static.wixstatic.com\|logoUrl' src/pages/wikings.js src/pages/wikings2.js
grep -n -A4 -B2 'strong' src/page_components/wikings/wikings.module.scss
```

Expected: both page constants contain the old Wix logo and the stylesheet has
the nested `.stepList li strong` red rule that causes the contrast issue.

- [ ] **Step 2: Make the smallest source and style changes**

In both page files, replace the constant value with:

```js
const logoUrl =
  "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/174106/images/JXD1FPQZQ8GY4ehf4iPu_website_logo_transparent_background.png"
```

Inside `.page` in `wikings.module.scss`, after the `h2` rule, add:

```scss
  strong {
    color: #fff;
    font-weight: 700;
  }
```

Do not remove the more-specific `.stepList li strong` or `.macroBlock strong`
rules. The page-level selector appears earlier, so the more-specific styles
retain precedence.

- [ ] **Step 3: Build both guide routes**

Run:

```bash
PATH="$HOME/.nvm/versions/node/v16.20.2/bin:$PATH" npm run build \
  && test -f public/wikings/index.html \
  && test -f public/wikings2/index.html \
  && grep -q 'website_logo_transparent_background.png' public/wikings/index.html \
  && grep -q 'website_logo_transparent_background.png' public/wikings2/index.html
```

Expected: exit code 0. Both HTML routes exist and contain the supplied logo URL.

- [ ] **Step 4: Check scope and commit**

Run:

```bash
git diff --check
git diff -- src/pages/wikings.js src/pages/wikings2.js \
  src/page_components/wikings/wikings.module.scss
```

Expected: only two logo constant changes and the scoped strong-text rule.

Commit:

```bash
git add src/pages/wikings.js src/pages/wikings2.js \
  src/page_components/wikings/wikings.module.scss
git commit -m "fix: improve Wikings guide contrast"
```

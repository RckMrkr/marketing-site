# Wikings Guide Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the two supplied Wikings Esport guides as unlinked Gatsby routes, with safe local-image insertion points.

**Architecture:** Translate the standalone documents to Gatsby page components and move their embedded CSS into local SCSS modules. A small shared screenshot component displays a supplied local image or the existing visible insertion label, while the Wix logo stays an external native image.

**Tech Stack:** Gatsby 4, React 17, Sass modules, `gatsby-plugin-sass`

## Global Constraints

- Publish exactly `/wikings/` and `/wikings2/`.
- Do not add navigation, footer, sitemap, or any internal link to either route.
- Do not use the shared InterOps `Layout` component.
- Keep the logo URL external.
- Future guide screenshots belong under `src/images/wikings/`; absent screenshots must show a labelled placeholder rather than issue a broken request.
- Preserve the supplied Danish copy and outbound download links.

---

## File Structure

```text
src/
  page_components/
    wikings/
      guide-screenshot.js        # Renders supplied local guide images or labels.
      wikings.module.scss        # Encapsulated original guide styling.
  pages/
    wikings.js                   # Player PC guide route.
    wikings2.js                  # Coordinator PC guide route.
```

### Task 1: Creating the shared screenshot primitive

**Files:**
- Create: `src/page_components/wikings/guide-screenshot.js`

**Interfaces:**
- Consumes: `src?: string`, `alt: string`, `className: string`
- Produces: `GuideScreenshot({ src, alt, className })`, a React element used by both guide pages.

- [ ] **Step 1: Confirm there is no existing reusable guide screenshot component**

Run: `grep -RInE "screenshot-box|GuideScreenshot" src --include='*.js' --include='*.scss'`

Expected: only the new implementation will introduce `GuideScreenshot`; current screenshot styling exists only in the supplied HTML files.

- [ ] **Step 2: Write the minimal screenshot component**

Create `src/page_components/wikings/guide-screenshot.js`:

```jsx
import React from "react"

const GuideScreenshot = ({ src, alt, className }) => (
  <div className={className}>
    {src ? (
      <img src={src} alt={alt} />
    ) : (
      <>
        <span role="img" aria-label="Screenshot">
          🖼️
        </span>
        <strong>[INDSÆT {alt.toUpperCase()}]</strong>
      </>
    )}
  </div>
)

export default GuideScreenshot
```

- [ ] **Step 3: Defer compilation validation until the component is imported**

`GuideScreenshot` is not reachable until Task 2 adds the `/wikings/` route, so Gatsby cannot compile it in this task. Task 2's production build is the first effective validation of this component.

- [ ] **Step 4: Commit the shared component**

```bash
git add src/page_components/wikings/guide-screenshot.js
git commit -m "feat: add Wikings screenshot component"
```

### Task 2: Publishing the player-PC guide

**Files:**
- Create: `src/pages/wikings.js`
- Create: `src/page_components/wikings/wikings.module.scss`
- Read: `wikings.html`

**Interfaces:**
- Consumes: `GuideScreenshot` from `src/page_components/wikings/guide-screenshot.js`, `SEO` from `src/components/seo.js`, and the external Wix logo URL.
- Produces: Gatsby file route `/wikings/`.

- [ ] **Step 1: Move the player-guide styles into the SCSS module**

Copy the complete `<style>` contents of `wikings.html` into `src/page_components/wikings/wikings.module.scss`. Scope `body` as `.page`, retain the original CSS variable values, and export classes used by JSX: `page`, `container`, `header`, `logoContainer`, `subtitle`, `downloadGrid`, `downloadCard`, `stepNum`, `btnDownload`, `sourceNote`, `stepList`, `codeBlock`, `screenshotBox`, and `successBox`. Scope the former `.screenshot-icon` rule beneath `.screenshotBox span`.

- [ ] **Step 2: Translate the player guide to JSX**

Create `src/pages/wikings.js`. Preserve every content section from `wikings.html`: installation, OBS configuration, and automatic startup. Convert `class` to `className`, `for` to `htmlFor` if encountered, inline style strings to JSX objects, and literal backslashes in the OBS path to JSX-safe text.

Start the page with:

```jsx
import React from "react"
import SEO from "../components/seo"
import GuideScreenshot from "../page_components/wikings/guide-screenshot"
import * as styles from "../page_components/wikings/wikings.module.scss"

const logoUrl =
  "https://static.wixstatic.com/media/2e73f9_98e986c750b3438e818817a0a653bb9f~mv2.png/v1/fill/w_316,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Wikings_logo.png"

export default () => (
  <main className={styles.page}>
    <SEO
      title="Wikings Esport | Opsætningsguide: Spiller PC"
      description="Opsætningsguide til Wikings Esport Fortnite NDI-Broadcast System."
    />
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logoUrl} alt="Wikings Esport Logo" />
        </div>
        <h1>Opsætningsguide: Spiller PC</h1>
        <p className={styles.subtitle}>Fortnite NDI-Broadcast System</p>
      </header>
    </div>
  </main>
)
```

Replace each original screenshot box with the real insertion point:

```jsx
<GuideScreenshot
  className={styles.screenshotBox}
  alt="screenshot af video indstillinger"
/>
```

When an asset is supplied later, add a normal local import at the top and pass it:

```jsx
import videoSettings from "../images/wikings/video-settings.png"

<GuideScreenshot
  src={videoSettings}
  className={styles.screenshotBox}
  alt="screenshot af video indstillinger"
/>
```

- [ ] **Step 3: Build and inspect the generated player route**

Run: `npm run build && test -f public/wikings/index.html`

Expected: exit code 0 and a generated `/wikings/` page.

- [ ] **Step 4: Commit the player guide**

```bash
git add src/pages/wikings.js src/page_components/wikings/wikings.module.scss
git commit -m "feat: add Wikings player guide"
```

### Task 3: Publishing the coordinator-PC guide

**Files:**
- Create: `src/pages/wikings2.js`
- Modify: `src/page_components/wikings/wikings.module.scss`
- Read: `wikings2.html`

**Interfaces:**
- Consumes: `GuideScreenshot`, `SEO`, `styles`, and the external Wix logo URL.
- Produces: Gatsby file route `/wikings2/`.

- [ ] **Step 1: Add only coordinator-specific styling**

Compare the style block in `wikings2.html` to `wikings.module.scss`. Add styles required only by its macro guide: `macroBlock` and the coordinator-specific `h3` and table styling. Do not change existing player-guide styles.

- [ ] **Step 2: Translate the coordinator guide to JSX**

Create `src/pages/wikings2.js` following the same imports and document shell as `wikings.js`, with this metadata:

```jsx
<SEO
  title="Wikings Esport | Opsætningsguide: Koordinator PC"
  description="Opsætningsguide til Wikings Esport Fortnite Broadcast Master Control."
/>
```

Translate all sections from `wikings2.html`: software installation, sources, modules, broadcast scenes, OBS Lua engine, and Advanced Scene Switcher macros. Render the Lua source in `<pre className={styles.codeBlock}>` so whitespace is retained. Convert every original screenshot box to `GuideScreenshot` with a Danish descriptive `alt` value. Preserve all current outbound download URLs and their external-link `target="_blank"` behavior.

- [ ] **Step 3: Build and inspect both generated routes**

Run: `npm run build && test -f public/wikings/index.html && test -f public/wikings2/index.html`

Expected: exit code 0 and both route files exist.

- [ ] **Step 4: Commit the coordinator guide**

```bash
git add src/pages/wikings2.js src/page_components/wikings/wikings.module.scss
git commit -m "feat: add Wikings coordinator guide"
```

### Task 4: Confirming route isolation

**Files:**
- Read: `src/components/layout/components/header/header.js`
- Read: `src/components/footer/footer.js`
- Read: `src/pages/wikings.js`
- Read: `src/pages/wikings2.js`

**Interfaces:**
- Consumes: completed guide source files and generated `public` output.
- Produces: confirmation that the requested pages are reachable but not internally linked.

- [ ] **Step 1: Search source navigation and guide content**

Run: `grep -RInE '["'\'']/?wikings2?/?["'\'']|wikings2?' src --include='*.js' --include='*.scss'`

Expected: matches are limited to the two route files and their own component/style imports; no header, footer, or unrelated page link references either URL.

- [ ] **Step 2: Verify production output remains unlinked**

Run: `npm run build && ! grep -RIlE 'href="/wikings/?|href="/wikings2/?' public --include='*.html'`

Expected: exit code 0. The generated guide pages exist, while no generated HTML has an internal anchor to either route.

- [ ] **Step 3: Commit any validation-only correction**

If this task revealed a required code correction, commit only that correction:

```bash
git add src/pages/wikings.js src/pages/wikings2.js src/page_components/wikings/wikings.module.scss
git commit -m "fix: keep Wikings guides unlinked"
```

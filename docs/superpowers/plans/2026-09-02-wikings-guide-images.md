# Wikings Guide Images Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Render supplied OBS screenshots in their matching guide slots and let coordinator users download the supplied Red Border image.

**Architecture:** Relocate root assets into the existing Gatsby image source tree. Import page-owned screenshots and pass them to `GuideScreenshot`; import the Red Border into the coordinator route and link it from the existing source-table row.

**Tech Stack:** Gatsby 4, React 17, Sass modules

## Global Constraints

- Move exactly `streaming-settings.png`, `ndi-settings.png`, and `Red_Border.png` from the repository root to `src/images/wikings/`.
- `streaming-settings.png` fills only `/wikings/` screenshot alt `screenshot af video indstillinger`.
- `ndi-settings.png` fills only `/wikings/` screenshot alt `screenshot af NDI output`.
- `Red_Border.png` is downloadable only from `/wikings2/` in its existing `Red_Frame` row.
- Keep all unmatched screenshot placeholders, guide text, routes, navigation, footer, sitemap, external logo, and external links unchanged.
- Build using Node 16.20.2.

---

### Task 1: Adding supplied guide images

**Files:**
- Move: `streaming-settings.png` to `src/images/wikings/streaming-settings.png`
- Move: `ndi-settings.png` to `src/images/wikings/ndi-settings.png`
- Move: `Red_Border.png` to `src/images/wikings/Red_Border.png`
- Modify: `src/pages/wikings.js`
- Modify: `src/pages/wikings2.js`

**Interfaces:**
- Consumes: `GuideScreenshot({ src, alt, className })` from `src/page_components/wikings/guide-screenshot.js`.
- Produces: image-backed player screenshot slots and a native Red Border download link in the coordinator source table.

- [ ] **Step 1: Create the asset directory and relocate supplied images**

Run:

```bash
mkdir -p src/images/wikings
mv streaming-settings.png src/images/wikings/streaming-settings.png
mv ndi-settings.png src/images/wikings/ndi-settings.png
mv Red_Border.png src/images/wikings/Red_Border.png
file src/images/wikings/*.png
```

Expected: the destination contains PNGs and no supplied PNG remains in the
repository root.

- [ ] **Step 2: Import and render the two player-guide screenshots**

At the `src/pages/wikings.js` imports, add:

```jsx
import ndiSettings from "../images/wikings/ndi-settings.png"
import streamingSettings from "../images/wikings/streaming-settings.png"
```

Update only the matching calls:

```jsx
<GuideScreenshot
  src={streamingSettings}
  className={styles.screenshotBox}
  alt="screenshot af video indstillinger"
/>
```

```jsx
<GuideScreenshot
  src={ndiSettings}
  className={styles.screenshotBox}
  alt="screenshot af NDI output"
/>
```

Leave the Game Capture, shortcut properties, and startup folder calls without
`src`.

- [ ] **Step 3: Add the coordinator Red Border download**

At the `src/pages/wikings2.js` imports, add:

```jsx
import redBorder from "../images/wikings/Red_Border.png"
```

In the existing `Red_Frame` table row, keep the explanatory text and append:

```jsx
<br />
<a
  href={redBorder}
  className={styles.btnDownload}
  download="Red_Border.png"
>
  Download Red Border PNG
</a>
```

- [ ] **Step 4: Build and verify generated assets**

Run:

```bash
PATH="$HOME/.nvm/versions/node/v16.20.2/bin:$PATH" npm run build \
  && test -f public/wikings/index.html \
  && test -f public/wikings2/index.html \
  && grep -q 'streaming-settings' public/wikings/index.html \
  && grep -q 'ndi-settings' public/wikings/index.html \
  && grep -q 'Red_Border' public/wikings2/index.html
```

Expected: exit code 0. Both routes and all three emitted asset references are
present.

- [ ] **Step 5: Confirm intended placeholders remain, then commit**

Run:

```bash
grep -c 'GuideScreenshot' src/pages/wikings.js
git diff --check
```

Expected: five player-guide screenshot calls remain, exactly two with `src`.

Commit:

```bash
git add src/images/wikings src/pages/wikings.js src/pages/wikings2.js
git commit -m "feat: add Wikings guide screenshots"
```

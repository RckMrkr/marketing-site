# Wikings Logo Download Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the root-level `logo.png` downloadable from the Wikings 2 coordinator guide.

**Architecture:** Import `logo.png` into the existing Gatsby page and render one download link in the `Club_Logo` table row. Reuse the existing `btnDownload` style and browser download behavior already used by `Red_Border.png`; do not add routes, APIs, or new components.

**Tech Stack:** Gatsby 4, React 17, JavaScript, SCSS modules, npm.

## Global Constraints

- Keep `logo.png` at the repository root.
- Add the download link only to the `Club_Logo` row in `src/pages/wikings2.js`.
- Preserve the existing `Red_Border.png` download behavior.
- Reuse `styles.btnDownload`.
- Use the download filename `logo.png`.
- Do not change public APIs, routing, shared styles, or unrelated pages.

---

### Task 1: Adding the Wikings logo download link

**Files:**
- Modify: `src/pages/wikings2.js:1-5` for the image import.
- Modify: `src/pages/wikings2.js:218-233` for the `Club_Logo` row link.
- Test: No automated test file exists for this Gatsby page; validate with the existing production build.

**Interfaces:**
- Consumes: Root asset `logo.png`.
- Produces: A rendered anchor in the `Club_Logo` row with `href={logo}` and `download="logo.png"`.

- [ ] **Step 1: Add the root logo import**

Add this import beside the existing page asset imports:

```js
import logo from "../../logo.png"
```

- [ ] **Step 2: Add the download link to the `Club_Logo` row**

Keep the existing description and append this link inside the same `<td>`:

```jsx
<td>
  Wikings Logo (Baggrund ved eliminering/pause)
  <br />
  <a
    href={logo}
    className={styles.btnDownload}
    download="logo.png"
  >
    Download Wikings Logo PNG
  </a>
</td>
```

- [ ] **Step 3: Format the changed page**

Run:

```bash
npx prettier --write src/pages/wikings2.js
```

Expected: Prettier completes without errors and only formats the changed page.

- [ ] **Step 4: Build the Gatsby site**

Run:

```bash
npm run build
```

Expected: Gatsby completes successfully and writes the production site to
`public/`.

- [ ] **Step 5: Confirm the generated output contains the download**

Run:

```bash
rg -l "Download Wikings Logo PNG|logo\\.png" public | head -20
```

Expected: At least one generated public file contains the new link text or
asset filename.

- [ ] **Step 6: Commit the implementation**

Run:

```bash
git add logo.png src/pages/wikings2.js
git commit -m "feat: add Wikings logo download

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

Expected: The commit contains only `logo.png` and the Wikings 2 page change.

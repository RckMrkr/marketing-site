# Node 24 and Gatsby 4 Dependency Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Run the existing Gatsby site on Node.js 24 while updating dependencies to the latest releases compatible with Gatsby 4 and the current application APIs.

**Architecture:** Keep the current Gatsby 4, React 17, and legacy `gatsby-image` architecture. Update runtime metadata and dependency ranges in the manifest, then let npm regenerate the lockfile and use the existing Gatsby build as the compatibility gate.

**Tech Stack:** Node.js 24 via nvm, npm, Gatsby 4, React 17, Gatsby plugins, Sass.

## Global Constraints

- Use Node.js `24` through nvm.
- Stay on Gatsby 4-compatible major versions for Gatsby and Gatsby-coupled plugins.
- Keep React 17, `gatsby-image`, existing GraphQL image fragments, and application behavior unchanged.
- Regenerate `package-lock.json` with npm; do not edit it manually.
- Only modify files explicitly listed in each task; leave the existing unrelated plan files untouched.
- No public application API changes.

---

### Task 1: Updating runtime metadata and direct dependency requirements

**Files:**
- Modify: `.nvmrc`
- Modify: `package.json`

**Interfaces:**
- Consumes: Existing npm package manifest and nvm runtime selector.
- Produces: Node 24 runtime selection and manifest dependency ranges that remain on Gatsby 4-compatible majors.

- [ ] **Step 1: Select Node 24 with nvm**

Run:

```bash
nvm use 24
node --version
npm --version
```

Expected: `node --version` reports `v24.x.x`.

- [ ] **Step 2: Update `.nvmrc`**

Set the complete file contents to:

```text
24
```

- [ ] **Step 3: Update Gatsby 4-compatible dependency ranges**

Use npm while Node 24 is active to update the Gatsby 4 line and matching Gatsby plugins without moving to Gatsby 5. Use `--package-lock-only` so this task changes the manifest and lockfile together, then commit both as one dependency declaration change:

```bash
npm install \
  gatsby@^4 \
  gatsby-plugin-google-analytics@^4 \
  gatsby-plugin-manifest@^4 \
  gatsby-plugin-offline@^5 \
  gatsby-plugin-react-helmet@^5 \
  gatsby-plugin-sass@^5 \
  gatsby-plugin-sharp@^4 \
  gatsby-source-filesystem@^4 \
  gatsby-transformer-sharp@^4 \
  --package-lock-only
```

Keep `react`, `react-dom`, `gatsby-image`, and all existing image GraphQL fragments unchanged. If npm reports a peer dependency conflict, use the latest published version within the Gatsby 4-compatible major range rather than adding `--force` or `--legacy-peer-deps`.

- [ ] **Step 4: Add the runtime engine requirement**

Add this top-level field to `package.json`:

```json
"engines": {
  "node": ">=24 <25"
},
```

Place it beside the existing package metadata, before `dependencies`, and preserve the repository's existing formatting.

- [ ] **Step 5: Inspect the manifest diff**

Run:

```bash
git --no-pager diff -- .nvmrc package.json
```

Expected: only the Node 24 selector, the `engines.node` requirement, and intended Gatsby 4-compatible dependency range updates are present.

- [ ] **Step 6: Commit the runtime, manifest, and generated lockfile changes**

```bash
git add .nvmrc package.json package-lock.json
git commit -m "build: target Node 24 with Gatsby 4 dependencies

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

### Task 2: Validating the regenerated npm dependency tree

**Files:**
- Verify: `package-lock.json`

**Interfaces:**
- Consumes: The Node 24-compatible `package.json` from Task 1.
- Produces: A lockfile that resolves the selected Gatsby 4-compatible dependency graph.

- [ ] **Step 1: Install the updated dependency graph**

Run:

```bash
npm install
```

Expected: npm completes without unresolved peer dependency errors and leaves the committed lockfile usable.

- [ ] **Step 2: Confirm Gatsby majors in the resolved tree**

Run:

```bash
npm ls gatsby gatsby-plugin-google-analytics gatsby-plugin-manifest gatsby-plugin-offline gatsby-plugin-react-helmet gatsby-plugin-sass gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp --depth=0
```

Expected: `gatsby` is version 4.x; coupled plugins remain on the Gatsby 4-compatible major versions from Task 1; no Gatsby 5 package is installed.

- [ ] **Step 3: Confirm the lockfile is unchanged**

Run:

```bash
git --no-pager diff --check -- package-lock.json
git --no-pager diff --stat -- package-lock.json
```

Expected: no whitespace errors and no uncommitted lockfile changes.

### Task 3: Building the site on Node 24

**Files:**
- No source files expected.

**Interfaces:**
- Consumes: The Node 24 runtime and dependency tree from Tasks 1-2.
- Produces: A successful Gatsby production build using the unchanged application code.

- [ ] **Step 1: Verify the active runtime**

Run:

```bash
nvm use 24
node --version
```

Expected: `v24.x.x`.

- [ ] **Step 2: Run the existing production build**

Run:

```bash
npm run build
```

Expected: Gatsby clean and build complete successfully, with no dependency or runtime errors.

- [ ] **Step 3: Check the final worktree**

Run:

```bash
git --no-pager diff --check
git status --short
```

Expected: no whitespace errors; only intentional upgrade changes remain. Do not commit generated `public/` or cache output if they are ignored or untracked.

- [ ] **Step 4: Commit any required compatibility adjustment**

Only if the Node 24 build requires a small manifest-only compatibility pin within the Gatsby 4-compatible ranges:

```bash
git add package.json package-lock.json
git commit -m "build: pin Gatsby 4 dependency for Node 24 compatibility

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

If no adjustment is required, make no additional commit.

# Wikings Logo Download Design

## Goal

Make the club logo supplied as `logo.png` downloadable from the Wikings 2
coordinator guide, using the same behavior and styling as the existing
`Red_Border.png` download.

## Approach

Import the root-level `logo.png` directly into `src/pages/wikings2.js`. Add one
download link to the existing `Club_Logo` source row, where the logo is already
described. Reuse `styles.btnDownload` and set the download filename to
`logo.png`.

This avoids adding routing or server behavior, preserves the supplied asset
location, and keeps the change consistent with the current imported-image
pattern.

## Behavior

- The `Club_Logo` row shows a `Download Wikings Logo PNG` link.
- Clicking the link downloads the supplied image as `logo.png`.
- Existing Red Border download behavior remains unchanged.
- No changes are made to the player guide, shared styles, or application APIs.

## Validation

Run the existing Gatsby production build and confirm it succeeds. Inspect the
generated page output to ensure the logo asset is bundled and the download link
is present.

# Wikings Guide Images Design

## Purpose

Add supplied local PNG assets to the applicable Wikings guide screenshot slots
and offer the Red Border overlay as a coordinator-guide download.

## Asset Placement and Mapping

Move the three root PNG files into `src/images/wikings/`:

| Asset | Destination | Use |
|---|---|---|
| `streaming-settings.png` | `src/images/wikings/streaming-settings.png` | `/wikings/` OBS Video settings screenshot |
| `ndi-settings.png` | `src/images/wikings/ndi-settings.png` | `/wikings/` NDI Output screenshot |
| `Red_Border.png` | `src/images/wikings/Red_Border.png` | `/wikings2/` Red Frame download |

The remaining screenshot placeholders stay unchanged because no corresponding
asset was supplied.

## Implementation

`src/pages/wikings.js` imports the two player-guide screenshots and passes each
to its matching `GuideScreenshot` call. Gatsby bundles the assets and renders
the existing image markup with its current alt text.

`src/pages/wikings2.js` imports `Red_Border.png` and links to it with the
native `download` attribute in the existing `Red_Frame` source-table row. The
link uses the existing guide download-button style and gives the generated
asset a descriptive download filename.

## Scope

Do not change guide content beyond adding the Red Border download link. Do not
change routes, navigation, footer, sitemap, external logo, or other links.

## Validation

Build with Node 16.20.2. Confirm both screenshots and the Red Border download
asset are emitted in generated page HTML, and both guide routes exist.

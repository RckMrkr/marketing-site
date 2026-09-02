# Wikings Guide Restyle Design

## Purpose

Update both Wikings guide pages to use the supplied external logo and make
highlighted Danish text readable on the dark background.

## Changes

- Replace the existing Wix logo URL in `src/pages/wikings.js` and
  `src/pages/wikings2.js` with:

  ```text
  https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/174106/images/JXD1FPQZQ8GY4ehf4iPu_website_logo_transparent_background.png
  ```

- Add a scoped `strong` rule within `.page` in
  `src/page_components/wikings/wikings.module.scss` that sets strong text to
  white and bold.

## Scope and Compatibility

The selectors remain scoped to the guide pages. Existing more-specific styles,
such as macro labels, retain their purpose. No routes, navigation, links,
assets, or page content change.

## Validation

Build the site with Node 16.20.2 and confirm both guide routes are emitted.

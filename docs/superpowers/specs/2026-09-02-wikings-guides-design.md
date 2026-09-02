# Wikings Guide Pages Design

## Purpose

Publish the supplied Danish Wikings Esport setup guides as two directly accessible Gatsby pages:

- `/wikings/`: Player PC guide
- `/wikings2/`: Coordinator PC guide

The pages are intentionally undiscoverable through the InterOps site. No navigation, footer, sitemap, or other internal link will be added.

## Architecture

Each guide becomes a Gatsby file route:

```text
src/
  pages/
    wikings.js
    wikings2.js
  page_components/
    wikings/
      guide-screenshot.js
      wikings.module.scss
```

The pages will not use the shared `Layout` component. They retain their dedicated Wikings visual design and do not render InterOps navigation.

The standalone HTML is translated to JSX and its embedded styles move into the Wikings CSS module. Existing Danish text and outbound download links are preserved.

## Images

The existing Wix-hosted Wikings logo remains an external native `<img>` resource.

A small `GuideScreenshot` component will render local guide images once supplied. Each screenshot insertion point remains visibly labelled until its local asset is added. To enable an image, a page imports it from `src/images/wikings/` and supplies it to the component:

```jsx
import videoSettings from "../images/wikings/video-settings.png"

<GuideScreenshot src={videoSettings} alt="OBS video settings" />
```

This avoids broken image requests and keeps current placeholder guidance usable before screenshots are available.

## Metadata and Errors

Each page will set its existing Danish guide title through the site's `SEO` component. The route content is static, has no runtime data dependency, and adds no new error handling paths.

## Validation

Run the Gatsby production build. It must generate both routes without adding internal links to either guide.

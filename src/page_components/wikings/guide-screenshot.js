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

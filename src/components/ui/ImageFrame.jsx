import { useState } from "react";

// Image box with a placeholder when the image fails to load
// (replaces the old vanilla-JS `error` listener from main.js).
export default function ImageFrame({ src, alt, className = "", imgClassName = "", lazy = true }) {
  const [missing, setMissing] = useState(false);

  return (
    <div className={`image-frame ${className}${missing ? " is-missing" : ""}`.trim()}>
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        loading={lazy ? "lazy" : undefined}
        onError={() => setMissing(true)}
      />
      <span className="image-placeholder" aria-hidden="true">Image unavailable</span>
    </div>
  );
}

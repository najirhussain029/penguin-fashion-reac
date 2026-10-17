import { forwardRef } from "react";

// Small round icon-only button (close, trash, +/-). `label` is required for a11y.
const IconButton = forwardRef(function IconButton({ label, children, tone = "default", className = "", ...rest }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      className={`icon-btn icon-btn--${tone} ${className}`.trim()}
      aria-label={label}
      title={label}
      {...rest}
    >
      {children}
    </button>
  );
});

export default IconButton;

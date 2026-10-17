// Reusable button. Renders an <a> when `href` is given, otherwise a <button>.
export default function Button({
  children,
  href,
  size = "medium", // "small" | "medium"
  variant = "primary", // "primary" | "ghost"
  className = "",
  ...rest
}) {
  const classes = [
    "btn",
    size === "small" && "btn--small",
    variant === "ghost" && "btn--ghost",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

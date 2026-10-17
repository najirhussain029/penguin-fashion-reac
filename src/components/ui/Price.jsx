import { formatPrice } from "../../utils/format.js";

export default function Price({ value, className = "" }) {
  return <span className={`price ${className}`.trim()}>{formatPrice(value)}</span>;
}

import IconButton from "./IconButton.jsx";

// - [ qty ] + control. The minus button is disabled at 1 (use trash to remove).
export default function QuantityControl({ quantity, onIncrease, onDecrease, name }) {
  return (
    <div className="qty" role="group" aria-label={`Quantity of ${name}`}>
      <IconButton label={`Decrease quantity of ${name}`} onClick={onDecrease} disabled={quantity <= 1}>
        −
      </IconButton>
      <span className="qty__value" aria-live="polite">{quantity}</span>
      <IconButton label={`Increase quantity of ${name}`} onClick={onIncrease}>
        +
      </IconButton>
    </div>
  );
}

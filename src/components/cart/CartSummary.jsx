import Button from "../ui/Button.jsx";
import { formatPrice } from "../../utils/format.js";
import { FREE_SHIPPING_OVER, TAX_RATE } from "../../utils/cart.js";

function Row({ label, value, strong = false }) {
  return (
    <div className={`summary__row${strong ? " summary__row--total" : ""}`}>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default function CartSummary({ summary, onCheckout }) {
  const { subtotal, tax, shipping, total } = summary;
  return (
    <div className="summary">
      <dl>
        <Row label="Subtotal" value={formatPrice(subtotal)} />
        <Row label={`Tax (${TAX_RATE * 100}%)`} value={formatPrice(tax)} />
        <Row label="Shipping" value={shipping === 0 ? "Free" : formatPrice(shipping)} />
        <Row label="Grand Total" value={formatPrice(total)} strong />
      </dl>
      {shipping > 0 && (
        <p className="summary__hint">Free shipping on orders over {formatPrice(FREE_SHIPPING_OVER)}</p>
      )}
      <Button className="summary__checkout" onClick={onCheckout}>Checkout</Button>
    </div>
  );
}

import { useEffect, useRef } from "react";
import IconButton from "../ui/IconButton.jsx";
import CartItem from "./CartItem.jsx";
import CartSummary from "./CartSummary.jsx";
import EmptyCart from "./EmptyCart.jsx";
import { getCartSummary, getTotalQuantity } from "../../utils/cart.js";

// Slide-out cart. It is always mounted so the CSS slide transition can play;
// `inert` keeps it out of the tab order while closed.
export default function CartDrawer({ isOpen, items, onClose, onIncrease, onDecrease, onRemove, onCheckout }) {
  const closeRef = useRef(null);
  const summary = getCartSummary(items);
  const count = getTotalQuantity(items);

  // Escape closes, background scroll is locked while open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div className={`cart-overlay${isOpen ? " is-open" : ""}`} onClick={onClose} aria-hidden="true" />
      <aside
        className={`cart-drawer${isOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        inert={!isOpen}
      >
        <header className="cart-drawer__header">
          <h2 id="cart-title">
            Your Cart <span className="cart-drawer__count">({count})</span>
          </h2>
          <IconButton ref={closeRef} label="Close cart" onClick={onClose}>✕</IconButton>
        </header>

        {items.length === 0 ? (
          <EmptyCart onContinue={onClose} />
        ) : (
          <>
            <ul className="cart-drawer__list">
              {items.map((item) => (
                <CartItem key={item.id} item={item} onIncrease={onIncrease} onDecrease={onDecrease} onRemove={onRemove} />
              ))}
            </ul>
            <CartSummary summary={summary} onCheckout={onCheckout} />
          </>
        )}
      </aside>
    </>
  );
}

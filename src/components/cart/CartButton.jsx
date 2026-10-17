import CartIcon from "./CartIcon.jsx";

// Navbar cart icon with a live badge. The badge uses `key={count}` so React
// re-mounts it whenever the count changes, which replays the pulse/bounce animation.
export default function CartButton({ count, onClick }) {
  return (
    <button
      type="button"
      className="cart-btn"
      onClick={onClick}
      aria-label={`Open cart, ${count} ${count === 1 ? "item" : "items"}`}
    >
      <span key={`icon-${count}`} className={`cart-btn__icon${count > 0 ? " is-bouncing" : ""}`}>
        <CartIcon />
      </span>
      {count > 0 && (
        <span key={count} className="cart-btn__badge">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}

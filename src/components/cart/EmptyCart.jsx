import Button from "../ui/Button.jsx";

export default function EmptyCart({ onContinue }) {
  return (
    <div className="empty-cart">
      <div className="empty-cart__art" aria-hidden="true">
        <span className="empty-cart__bag">🛍️</span>
        <span className="empty-cart__penguin">🐧</span>
      </div>
      <h3>Your cart is empty</h3>
      <p>Looks like you haven't added any jackets yet. Find your perfect winter layer!</p>
      <Button href="#products" onClick={onContinue}>Continue shopping</Button>
    </div>
  );
}

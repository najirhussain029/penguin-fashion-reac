import { useEffect, useState } from "react";
import ImageFrame from "../ui/ImageFrame.jsx";
import Price from "../ui/Price.jsx";
import Button from "../ui/Button.jsx";

export default function ProductCard({ product, onAddToCart }) {
  const { name, description, price, image, alt } = product;
  const [justAdded, setJustAdded] = useState(false);

  // Reset the "Added" feedback after a short delay (cleaned up on unmount).
  useEffect(() => {
    if (!justAdded) return;
    const timer = setTimeout(() => setJustAdded(false), 1200);
    return () => clearTimeout(timer);
  }, [justAdded]);

  const handleBuy = () => {
    onAddToCart(product);
    setJustAdded(true);
  };

  return (
    <article className="product-card">
      <ImageFrame className="product-card__image" src={image} alt={alt} />
      <div className="product-card__body">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="product-card__bottom">
          <Price value={price} />
          <Button
            size="small"
            className={justAdded ? "is-added" : ""}
            onClick={handleBuy}
            aria-label={`Buy ${name}`}
          >
            <span aria-hidden="true">{justAdded ? "✓" : "🛒"}</span> {justAdded ? "Added" : "Buy now"}
          </Button>
        </div>
      </div>
    </article>
  );
}

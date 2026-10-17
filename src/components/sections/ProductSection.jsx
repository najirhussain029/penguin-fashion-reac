import SectionHeading from "../ui/SectionHeading.jsx";
import ProductCard from "../product/ProductCard.jsx";

// One collection (women / men). All cards come from the `products` array.
export default function ProductSection({ id, headingId, eyebrow, title, products, onAddToCart, className = "" }) {
  return (
    <section className={`collection section ${className}`.trim()} id={id} aria-labelledby={headingId}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} id={headingId}>
          <a className="text-link" href="#contact">
            View all <span aria-hidden="true">→</span>
          </a>
        </SectionHeading>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}

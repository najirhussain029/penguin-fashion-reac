import { useCallback, useRef, useState } from "react";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import ProductSection from "./components/sections/ProductSection.jsx";
import Benefits from "./components/sections/Benefits.jsx";
import Support from "./components/sections/Support.jsx";
import CartDrawer from "./components/cart/CartDrawer.jsx";
import ToastContainer from "./components/feedback/Toast.jsx";

import { womenJackets, menJackets } from "./data/products.js";
import { getTotalQuantity } from "./utils/cart.js";

export default function App() {
  // ---- Centralised state: Navbar badge and Cart drawer both read from here ----
  const [cartItems, setCartItems] = useState([]); // [{ ...product, quantity }]
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const toastId = useRef(0);

  // ---- Toasts ----
  const showToast = useCallback((message, type = "success") => {
    toastId.current += 1;
    const toast = { id: toastId.current, message, type };
    setToasts((prev) => [...prev, toast].slice(-3)); // keep at most 3 on screen
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  // ---- Cart actions (all updates are immutable) ----
  const handleAddToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);

    setCartItems((prev) =>
      prev.some((item) => item.id === product.id)
        ? // already in cart -> bump quantity only, no duplicate row
          prev.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : // new product -> append with quantity 1
          [...prev, { ...product, quantity: 1 }]
    );

    showToast(
      existing
        ? `${product.name} quantity increased to ${existing.quantity + 1}`
        : `${product.name} added to cart`
    );
  };

  const handleIncrease = (id) =>
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );

  const handleDecrease = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );

  const handleRemove = (id) => {
    const removed = cartItems.find((item) => item.id === id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    if (removed) showToast(`${removed.name} removed from cart`, "remove");
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const handleCheckout = () => showToast("Demo store: checkout is not connected yet", "info");

  return (
    <>
      <Navbar cartCount={getTotalQuantity(cartItems)} onCartClick={openCart} />

      <main>
        <Hero />
        <ProductSection
          id="products"
          headingId="women-title"
          eyebrow="Made for colder days"
          title="Woman jacket"
          products={womenJackets}
          onAddToCart={handleAddToCart}
        />
        <ProductSection
          id="men"
          headingId="men-title"
          eyebrow="Your everyday winter layer"
          title="Man jacket"
          products={menJackets}
          onAddToCart={handleAddToCart}
          className="section--mens"
        />
        <Benefits />
        <Support onMessageSent={() => showToast("Message sent! We'll reply soon.")} />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={closeCart}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </>
  );
}
